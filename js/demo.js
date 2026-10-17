// Demo component using the DotPattern
document.addEventListener('DOMContentLoaded', function() {
  // Import cn and useId utilities
  const { cn, useId } = DomUtils;
  
  // Simple Demo Class
  class DotPatternDemo {
    constructor(options = {}) {
      this.className = options.className || '';
      this.childContainer = options.childContainer || null;
      this.width = options.width || '500px';
      this.height = options.height || '300px';
    }

    render() {
      // Create container
      const container = document.createElement('div');
      container.className = cn(
        'relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-md border',
        'border-slate-100/20 dark:border-gray-700 dark:bg-gray-700 bg-white dark:bg-gray-800'
      );
      container.style.width = this.width;
      container.style.height = this.height;

      // Add title
      const title = document.createElement('p');
      title.className = cn('z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white');
      title.textContent = 'Dot Pattern';
      container.appendChild(title);

      // Create dot pattern container
      const dotPatternContainer = document.createElement('div');
      dotPatternContainer.className = cn(
        'relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border-b border-slate-100',
        'md:shadow-xl dark:shadow-xl',
        this.className
      );

      // Add the dot pattern
      const dotPattern = document.createElement('div');
      dotPattern.className = cn('flex h-full w-full items-center justify-center', this.className);
      dotPattern.style.maskImage = 'radial-gradient(300px_circle_at_center,white,transparent)';
      // Store reference to apply the pattern
      const styleTag = document.createElement('style');
      styleTag.textContent = `
        .dot-pattern::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: url(#dot-pattern-svg) no-repeat center;
          background-size: contain;
          opacity: 0.3;
        }
      `;
      
      const svgPattern = document.createElement('div');
      svgPattern.id = useId();
      svgPattern.setAttribute('style', 'width: 100%; height: 100%');
      svgPattern.innerHTML = `
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="dot-pattern-svg" width="200" height="200" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern-svg)" />
        </svg>
      `;
      
      dotPatternContainer.appendChild(svgPattern);
      container.appendChild(dotPatternContainer);

      return container;
    }
  }

  // Add CSS for the demo
  const demoCSS = `
    .dot-pattern-demo {
      /* Base styles */
    }
  `;

  // Add to head
  const style = document.createElement('style');
  style.id = 'dot-pattern-demo-styles';
  style.textContent = demoCSS;
  document.head.appendChild(style);
});

// Import utilities
const DomUtils = {
  cn,
  useId
};