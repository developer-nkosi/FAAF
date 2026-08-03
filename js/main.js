// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu on link click (mobile)
    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(function(link) {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Active navigation based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navAnchors = document.querySelectorAll('.nav-links a');
  navAnchors.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // Scroll reveal
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

  // Back to top button
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

  // Page loader
  const pageLoader = document.querySelector('.page-loader');
  if (pageLoader) {
    window.addEventListener('load', function() {
      setTimeout(function() {
        pageLoader.classList.add('hidden');
      }, 300);
    });
  }

  // Scroll progress
  const scrollProgress = document.querySelector('.scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgress.style.width = progress + '%';
    });
  }
});
