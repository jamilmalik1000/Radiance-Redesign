# Implementation plan

## Information architecture

React Router provides the requested home, solution, service, product, project, about, blog, contact, quote and 404 routes. Data modules are the single source for business content. Detail pages use reusable solution/service templates; blog detail uses a slug lookup.

## Component architecture

`AppShell` owns skip link, header, footer, mobile actions and route outlet. Common primitives cover buttons, headings, reveals and cards. Section components compose the homepage. Forms share typed validation and a mock service adapter. `SEO` owns Helmet metadata and JSON-LD.

## 3D and animation

The hero canvas is route-lazy-loaded. Procedural panel geometry, sunlight, particles and an emissive energy path form the scene. Visibility, document state, reduced motion, coarse pointers and WebGL support gate rendering. Pointer movement is clamped. GSAP/ScrollTrigger and Lenis are progressively enhanced; CSS remains fully usable without them. Tilt, spotlight and magnetic effects run only on fine pointers.

## Responsive behaviour

Mobile uses a static CSS energy-grid fallback, single-column content and a full-screen focus-trapped navigation panel. Tablet transitions to two-column grids; desktop uses the canvas split hero, mega-menus and richer depth. Fixed mobile actions reserve footer-safe spacing and all interactive controls are at least 44px.

## SEO

Each route has a unique title, description, canonical, Open Graph and Twitter metadata. JSON-LD covers Organization/LocalBusiness, Service, Breadcrumb and Article where relevant. Static `robots.txt` and `sitemap.xml` are included. Vite is client-rendered: production should prerender all stable routes with a headless build step or migrate to Next.js/another SSR framework before public launch; dynamic blog URLs otherwise depend on crawler JavaScript execution.

## Performance safeguards

Route and Three.js chunk splitting; demand-based canvas; DPR capped at 1.5; adaptive particles; lazy images; no third-party photography; explicit aspect ratios; IntersectionObserver visibility; paused canvas offscreen/hidden; transform-only animation; event cleanup; system-font fallbacks; reduced-motion/coarse-pointer/static fallbacks.
