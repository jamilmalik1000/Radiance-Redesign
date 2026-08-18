# Radiance Tek — private redesign concept

A premium Vite + React + TypeScript concept for presenting a possible Radiance Tek website redesign to the business owner. It is not endorsed by or affiliated with Radiance Tek and must not be publicly deployed without authorization.

## Run

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
npm run preview
```

Copy `.env.example` to `.env.local` only when connecting a form endpoint. Never commit credentials.

## Architecture

- `src/data/content.ts` — replaceable, audited business content
- `src/components/layout` — header, mega-menu, focus-trapped mobile navigation and footer
- `src/components/common` — SEO, reveal, tilt, magnetic button and headings
- `src/components/three` — lazy procedural solar array and WebGL/reduced-motion fallback
- `src/components/forms` and `src/lib/forms.ts` — React Hook Form + Zod and typed submission service
- `src/pages` — route templates and homepage composition
- `public` — crawler files and local concept assets only

The generated infrastructure artwork is stored locally at `src/assets/generated/future-infrastructure-concept.jpg`; its prompt and usage status are recorded in `ASSET_REQUIREMENTS.md`.

Browser verification screenshots are available in `screenshots/homepage-desktop.png` and `screenshots/homepage-mobile.png`. Generation provenance is documented in `GENERATED_ASSETS.md`.

Third-party editorial image sources and license notes are recorded in `STOCK_ASSETS.md`.

Quote submissions are not stored by the website. After validation, the assessment fields are encoded into a message for the verified Radiance Tek WhatsApp number; the customer reviews it and presses Send inside WhatsApp. The contact form still uses a demonstration mock service. For production contact-form storage, replace `mockFormService` behind the `FormService` interface with Firebase, Formspree or a custom API and add server-side validation, rate limiting, spam protection and consent storage. The honeypot is only one defence.

## Content and assets

Read `CONTENT_INVENTORY.md`, `CONTENT_CHANGES.md` and `ASSET_REQUIREMENTS.md` before presentation or replacement. Project cards and brand slots are explicitly marked demonstrations until the owner supplies verified data and permissions.

## Production SEO

Helmet improves client-rendered metadata, but Vite does not server-render routes. Before a public launch, prerender every stable route during CI (and generate each blog slug) or migrate this route/data/component system to Next.js with static generation. Update the canonical base URL, `robots.txt`, `sitemap.xml`, privacy content and social image at that time.

## Performance/accessibility notes

The Three.js route chunk loads only near the hero; DPR is capped; the scene has no imported model; WebGL/reduced-motion users receive a CSS fallback; touch receives non-hover UI; mobile actions are 56px high. Navigation traps and restores focus, Escape closes it, forms announce errors, critical canvas meaning is repeated in HTML, and all content remains usable without animation.
