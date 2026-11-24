document.addEventListener('DOMContentLoaded', function() {
  const setActiveNavState = function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navAnchors = document.querySelectorAll('.nav-links a, .nav-links-pill .nav-list li a, .navbar-mobile-drawer .drawer-links li a');

    navAnchors.forEach(function(link) {
      const href = link.getAttribute('href');
      if (!href) return;

      const resolvedPage = new URL(href, window.location.href).pathname.split('/').pop() || 'index.html';
      link.classList.toggle('active', resolvedPage === currentPage);
    });
  };

  setActiveNavState();

  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(function(el) {
    observer.observe(el);
  });

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const pageLoader = document.querySelector('.page-loader');
  if (pageLoader) {
    window.addEventListener('load', function() {
      setTimeout(function() {
        pageLoader.classList.add('hidden');
      }, 300);
    });

    setTimeout(function() {
      if (!pageLoader.classList.contains('hidden')) {
        pageLoader.classList.add('hidden');
      }
    }, 3000);
  }
});
