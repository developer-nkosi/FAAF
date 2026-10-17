// DotPattern component - Vanilla JS version of the React component
// Creates an SVG pattern with dots that can be used as background

export class DotPattern {
  constructor(options = {}) {
    this.width = options.width || 16;
    this.height = options.height || 16;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.cx = options.cx || 1;
    this.cy = options.cy || 1;
    this.cr = options.cr || 1;
    this.className = options.className || '';
    this.container = options.container || null;
  }

  generateId() {
    return 'dot-pattern-' + Math.random().toString(36).substr(2, 9);
  }

  createSVG() {
    const id = this.generateId();
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.classList.add('dot-pattern');
    
    // Apply any custom classes
    if (this.className) {
      this.className.split(' ').forEach(cls => {
        if (cls.trim()) svg.classList.add(cls);
      });
    }
    
    // Set dimensions
    svg.style.width = '100%';
    svg.style.height = '100%';
    
    // Create the pattern
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
    pattern.setAttribute('id', id);
    pattern.setAttribute('width', this.width);
    pattern.setAttribute('height', this.height);
    pattern.setAttribute('patternUnits', 'userSpaceOnUse');
    pattern.setAttribute('patternContentUnits', 'userSpaceOnUse');
    pattern.setAttribute('x', this.x);
    pattern.setAttribute('y', this.y);
    
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('id', 'pattern-circle');
    circle.setAttribute('cx', this.cx);
    circle.setAttribute('cy', this.cy);
    circle.setAttribute('r', this.cr);
    
    pattern.appendChild(circle);
    defs.appendChild(pattern);
    
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');
    rect.setAttribute('stroke-width', '0');
    rect.setAttribute('fill', `url(#${id})`);
    
    svg.appendChild(defs);
    svg.appendChild(rect);
    
    return svg;
  }

  render() {
    const svg = this.createSVG();
    
    if (this.container) {
      if (typeof this.container === 'string') {
        const el = document.querySelector(this.container);
        if (el) {
          el.appendChild(svg);
        }
      } else if (this.container instanceof HTMLElement) {
        this.container.appendChild(svg);
      }
    }
    
    return svg;
  }

  // Static method to create and append to container
  static create(container, options = {}) {
    const pattern = new DotPattern({ ...options, container });
    return pattern.render();
  }
}

// CSS for the dot pattern component
const dotPatternCSS = `
.dot-pattern {
  pointer-events: none;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.dot-pattern circle {
  fill: currentColor;
  opacity: 0.5;
}
`;

// Inject CSS if not already present
if (!document.getElementById('dot-pattern-styles')) {
  const style = document.createElement('style');
  style.id = 'dot-pattern-styles';
  style.textContent = dotPatternCSS;
  document.head.appendChild(style);
}

export default DotPattern;