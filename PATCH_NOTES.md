# Jasa Cutting Laser — Patch v2

Overlay patch for the repository `heriscaleup/jasalasercutting` on branch `main`.

This patch fixes the feedback from the visual review:

- Restores the real brand logo from `/images/logo.webp` in the shared header and footer.
- Replaces the floating chat bubble with a clearly recognizable WhatsApp button and keeps it responsive.
- Reworks the shared service hero so its source image is darkened, legible, and consistent across the laser/CNC service pages.
- Rebuilds the blog index with actual posts from the existing `blog` content collection instead of a blank archive state.
- Rebuilds individual blog routes to render the existing Markdown body, table of contents, takeaways, FAQ, and related reading.
- Expands the About page into a complete company story, operating principles, capabilities, materials, workshop gallery, and handoff process.

## Apply

Copy the files in this ZIP into the repository root, preserving the directory structure.

## Verification

- `npx astro check`: 0 errors, 0 warnings.
- `npm run build`: 100 static pages built successfully.
- Preview smoke checks: home, service, About, portfolio, contact, blog index, and an individual blog article returned HTTP 200.
