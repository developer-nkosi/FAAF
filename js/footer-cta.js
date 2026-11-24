document.addEventListener('DOMContentLoaded', function() {
  // Mobile accordion for footer columns
  const headings = document.querySelectorAll('.column-heading');
  
  headings.forEach(heading => {
    heading.addEventListener('click', function() {
      const links = this.nextElementSibling;
      const isOpen = links.style.maxHeight;
      
      if (!isOpen || isOpen === '0px') {
        links.style.maxHeight = links.scrollHeight + 'px';
      } else {
        links.style.maxHeight = '0px';
      }
    });
  });

  // App badge click tracking
  document.querySelectorAll('.app-badge').forEach(badge => {
    badge.addEventListener('click', function(e) {
      const store = this.classList.contains('app-store') ? 'App Store' : 'Google Play';
      console.log('App download clicked:', store);
    });
  });
});
