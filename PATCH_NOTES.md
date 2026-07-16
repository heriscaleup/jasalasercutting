# Jasa Cutting Laser — Patch v4 / Mobile

Overlay patch for `heriscaleup/jasalasercutting` on branch `main`.

This ZIP contains the previous visual/material work plus the all-page mobile pass:

- Adds mobile-safe typography sizing and wrapping to prevent clipped headlines and long labels.
- Makes CTA buttons, form controls, tables, code blocks, and content cards safe on narrow screens.
- Disables reveal opacity gating on small screens so content cannot remain blank when JavaScript or the observer is delayed.
- Tightens mobile section spacing, image heights, mobile menu spacing, and material specification columns.
- Adds the Contact item to shared navigation so the fourth core route is discoverable on desktop and mobile.
- Lazy-loads below-the-fold service overview images while keeping hero imagery prioritized.
- Adds a 768px, 44KB mobile hero WebP for the homepage instead of sending the 219KB desktop hero to mobile devices.
- Preserves the previous logo, WhatsApp, service hero, blog, About, and material template improvements.

## Apply

Copy the files in this ZIP into the repository root, preserving the directory structure.

## Verification

- `npx astro check`: 0 errors, 0 warnings.
- `npm run build`: 100 static pages built successfully.
- Preview smoke test: 109 static routes returned HTTP 200.
- Static checks: viewport metadata, mobile hero source, and Contact navigation present.

The supplied PageSpeed report records Agentic Browsing as **3/3**. The patch keeps the core routes discoverable and does not claim a 4/4 score without a fresh live PageSpeed run.
