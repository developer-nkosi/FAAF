# FAAF Project Setup Guide

### Installation
1. Clone repository
   `git clone https://github.com/FAAF/website.git`

2. Install dependencies
   `cd website && npm install`

3. Start development server
   `npm start`

### Integration Steps
1. Apply dot pattern:
   - All HTML pages now include `<!-- Dot Pattern Background -->` div after <body> tag
   - CSS styles in `/css/style.css` handle responsiveness and color

2. Footer customization:
   - Social media icons use Font Awesome
   - Tailwind CSS classes ensure consistent styling

3. Verification:
   - Dot pattern appears as subtle background on all pages
   - Social icons have hover effects and responsive layout

### Notes
- The dot pattern uses SVG patterns for scalability
- Font Awesome requires CDN link in all HTML files
- All pages now use unified footer structure