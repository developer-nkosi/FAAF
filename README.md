# From Aid to Ability Foundation

This repository contains the website for From Aid to Ability Foundation (FAAF), a non-profit organization in Malawi working to move communities from aid dependency to sustainable self-reliance through skills development, mentorship, economic opportunity, and community capacity building.

## Overview

FAAF exists to build long-term human capability rather than relying on short-term aid. The website tells the story of that mission, highlights the founder, presents the program pillars, and gives supporters a clear route to contact the organization and partner with the work.

## Project structure

```text
FAAF/
├── index.html                  # Homepage
├── README.md                   # Project overview and setup
├── css/
│   ├── style.css              # Global theme and shared styles
│   ├── pill-navbar.css        # Floating navbar and mobile drawer styles
│   └── footer-cta.css         # CTA banner styling
├── js/
│   ├── main.js                # Shared page interactions
│   ├── pill-navbar.js         # Mobile menu and active-state logic
│   └── footer-cta.js          # Footer CTA behavior
├── img/
│   └── faaflogo.png           # FAAF logo asset
├── pages/
│   ├── about.html
│   ├── blog.html
│   ├── community.html
│   ├── contact.html
│   ├── documentation.html
│   ├── help-center.html
│   ├── pill-navbar.html
│   ├── press.html
│   ├── privacy.html
│   ├── programs.html
│   ├── status.html
│   ├── team.html
│   ├── terms.html
│   └── values.html
├── proof of impact/
│   └── impact and storytelling images
└── .
```

## Main website sections

### Homepage
- mission-led hero section
- founder story and leadership profile
- problem statement focused on Malawi’s development needs
- five program pillars
- impact gallery
- values and partnerships call-to-action

### About
- organizational background
- founder history and vision
- mission and approach

### Programs
- skills development
- mentorship
- entrepreneurship and economic empowerment
- youth and child empowerment
- community development and institutional strengthening

### Values
- ability
- dignity
- independence
- integrity

### Contact
- ways to connect, partner, and support the work

## Tech stack

This project is a static front-end website using:
- HTML5
- CSS3
- JavaScript
- Font Awesome icons
- local image and logo assets

## Local development

Because this is a static website, you can preview it by opening the HTML file directly or by using a small local server.

### Option 1: open directly
Open `index.html` in your browser.

### Option 2: run a local server
```bash
cd /home/mudo/Desktop/Projects/FAAF
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Design direction

The site uses a modern, clean, mobile-responsive layout with:
- floating pill navigation
- blue brand accents
- strong calls to action
- storytelling sections with community imagery
- responsive mobile navigation drawer

## Brand message

The core message of the site is:

> Moving communities from aid dependency to sustainable self-reliance.

## Contribution guidelines

When editing the website:
- keep the tone professional and mission-focused
- preserve the FAAF identity and message
- ensure mobile responsiveness remains intact
- keep navigation consistent across all pages
- update content whenever new programs, partners, or stories are added

## Deployment

This project can be hosted on any static hosting platform, including:
- GitHub Pages
- Netlify
- Vercel
- traditional web hosting providers

## Notes

This README reflects the actual FAAF website currently in this repository and replaces the earlier unrelated fitness tracker documentation.