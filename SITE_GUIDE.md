# FAAF editorial website

A buildless HTML, CSS, and vanilla JavaScript website. The redesign keeps the existing blue (`#0000ee`), white, and charcoal (`#101010`) branding and uses the project's own community photos.

## Preview

From this directory, run `python -m http.server 8000` and open http://localhost:8000. No build or dependency installation is required.

## Files

- `index.html`: editorial homepage with mission, program filters, community photography, and founder feature.
- `css/editorial.css`: responsive design and shared interior-page styling.
- `js/editorial.js`: mobile navigation, program filters, contribution selection, native accessible dialogs, and email drafts.
- `pages/`: existing content pages with the shared navigation, footer, and involvement dialog.
- `css/style.css`, `js/main.js`: supporting legacy interior-page layouts and behavior.

## Contact flows

Donation, volunteering, and newsletter requests use `mailto:fromaidtoability@gmail.com`. Visitors review and send the draft in their own email app. The website does not collect payments, store form submissions, or automatically subscribe anyone. A payment provider and form/newsletter service must be integrated before enabling those services directly.

The contribution choices are suggested amounts in MWK, not claims about what a donation buys. No invented fundraising totals or progress percentages were added.

## Content sources

Copy comes from the existing FAAF website. The supplied profile DOCX has damaged ZIP/binary data and could not be extracted. The existing README describes a separate Android fitness project and was left unchanged. The homepage uses the five existing program pillars instead of unverified impact statistics. Existing interior-page claims should be reviewed against an intact foundation profile before publication.

## Checks

JavaScript syntax, local page/asset links, fragment targets, duplicate IDs, browser interactions, and responsive layouts were checked. Browser checks cover phone, tablet, and desktop layouts, with the homepage checked down to 320 CSS pixels. No emails were sent and no payments were attempted.
