/* ============================================================================
   FAAF Floating Pill Navigation — Vanilla JavaScript
   ============================================================================ */

(function() {
  const pillNavbar = document.getElementById('pillNavbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('navbarOverlay');

  if (!pillNavbar) return;

  if (mobileToggle && (!mobileDrawer || !overlay)) {
    mobileToggle.hidden = true;
  }

  // Sticky scroll shadow
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      pillNavbar.classList.add('scrolled');
    } else {
      pillNavbar.classList.remove('scrolled');
    }
  });

  function setActivePageState() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const allLinks = document.querySelectorAll('.nav-links-pill .nav-list li a, .navbar-mobile-drawer .drawer-links li a');

    allLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (!href) return;
      const resolvedPage = new URL(href, window.location.href).pathname.split('/').pop() || 'index.html';
      link.classList.toggle('active', resolvedPage === currentPage);
    });
  }

  setActivePageState();

  function ensureDrawerSocials() {
    if (!mobileDrawer) return;
    if (mobileDrawer.querySelector('.drawer-socials')) return;

    const socials = document.createElement('div');
    socials.className = 'drawer-socials social-icons';
    socials.innerHTML = `
      <a href="https://www.facebook.com/fromaidtoability" class="social-icon" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
      <a href="https://www.instagram.com/fromaidtoabilityfoundation/" class="social-icon" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
      <a href="https://x.com/Aidtoability" class="social-icon" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
    `;

    const actions = mobileDrawer.querySelector('.drawer-actions');
    if (actions) {
      actions.insertAdjacentElement('afterend', socials);
    } else {
      mobileDrawer.appendChild(socials);
    }
  }

  ensureDrawerSocials();

  if (!mobileDrawer || !overlay || !mobileToggle) {
    const desktopLinks = document.querySelectorAll('.nav-links-pill .nav-list li a');
    desktopLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        desktopLinks.forEach(function(l) { l.classList.remove('active'); });
        this.classList.add('active');
      });
    });
    return;
  }

  const drawerLinks = mobileDrawer.querySelectorAll('.drawer-links li a');

  // Toggle mobile drawer
  function toggleDrawer() {
    const isOpen = mobileDrawer.classList.contains('open');
    if (isOpen) closeDrawer(); else openDrawer();
  }

  function openDrawer() {
    mobileDrawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    mobileToggle.classList.add('active');
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    mobileToggle.classList.remove('active');
  }

  mobileToggle.addEventListener('click', toggleDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close drawer when clicking a link + set active state
  drawerLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      drawerLinks.forEach(function(l) { l.classList.remove('active'); });
      this.classList.add('active');
      closeDrawer();
    });
  });

  // Update active state on desktop links
  const desktopLinks = document.querySelectorAll('.nav-links-pill .nav-list li a');
  desktopLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      desktopLinks.forEach(function(l) { l.classList.remove('active'); });
      this.classList.add('active');
    });
  });
})();
