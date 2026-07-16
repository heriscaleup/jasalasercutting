# Jasa Cutting Laser — Patch v3 / Material system

Overlay patch for `heriscaleup/jasalasercutting` on branch `main`.

This ZIP includes the previous visual fixes plus the expanded material system:

- Restores the actual `/images/logo.webp` in the shared header and footer.
- Keeps the recognizable floating WhatsApp action.
- Keeps the high-contrast service hero treatment.
- Keeps the rebuilt blog index and full Markdown article routes.
- Keeps the expanded About page.
- Replaces seven inconsistent material templates with one responsive `MaterialPage.astro` system.
- Adds material-specific positioning, copywriting, behavior notes, applications, production warnings, specifications, image galleries, recommended machine routes, handoff workflow, related materials, and CTAs for Acrylic, Metal/Stainless Steel, MDF, Plywood/Multiplex, PVC, ACP, and GRC.
- Uses the existing local material imagery; no blog content is modified.

## Apply

Copy the files in this ZIP into the repository root, preserving the directory structure.

## Verification

- `npx astro check`: 0 errors, 0 warnings.
- `npm run build`: 100 static pages built successfully.
- All seven material routes returned HTTP 200 in preview smoke tests.
