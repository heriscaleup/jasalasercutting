# Jasa Cutting Laser — Awwwards-oriented redesign patch

This ZIP is an overlay patch for `heriscaleup/jasalasercutting`.

## Included

- A new shared visual system: dark industrial palette, acid-lime accent, display typography, grid texture, refined cards, focus states, reduced-motion support.
- Reworked shared `BaseLayout`, `Header`, `Footer`, `Hero`, and `CTA` components.
- Rebuilt homepage copy and information architecture around capabilities, material library, production logic, project archive, quote builder, testimonials, FAQ, and conversion CTA.
- Scroll reveal, scroll progress, desktop cursor micro-interaction, mobile navigation animation, hover states, and WhatsApp event tracking.
- Mechanical HTML validity cleanup on existing non-blog pages: invalid plain-image responsive props removed and custom form metadata converted to `data-*` attributes.
- Blog source/content is not rewritten.

## Apply

Extract the ZIP at the repository root and allow the included paths to overwrite the matching files. Then run:

```bash
npm ci
npm run build
```

## Verification

- `npx astro check`: 0 errors, 0 warnings
- `npm run build`: 100 static pages generated successfully
- Preview smoke test: `/`, `/about/`, `/portfolio/`, `/contact/`, and `/blog/` returned HTTP 200

## Awwwards alignment

The design direction targets the four official scoring areas: Design, Usability, Creativity, and Content. The official weighting is 40% Design, 30% Usability, 20% Creativity, and 10% Content. Developer-quality signals such as semantics, animations/transitions, accessibility, performance, responsive design, and markup/meta-data were also considered.
