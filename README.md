# Dra. Marta Sampil · Ophthalmology Clinic

Website of Dr. Marta Sampil's ophthalmology clinic in Monforte de Lemos (Lugo, Spain):
[clinicamartasampil.com](https://clinicamartasampil.com).

Static SPA built with **React 19**, **TypeScript**, **React Router 7**, **Tailwind CSS 3** and **Vite 7**.

## Requirements

- Node.js ≥ 20.19 (the reference version is in [`.nvmrc`](.nvmrc): `nvm use`)

## Scripts

| Command           | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Development server (`--host` to open it from a phone)   |
| `npm run build`   | Type check and production build into `dist/`            |
| `npm run preview` | Serves `dist/` locally, exactly as in production        |
| `npm test`        | Tests (Vitest + Testing Library)                        |
| `npm run lint`    | ESLint, including accessibility rules (`jsx-a11y`)      |
| `npm run format`  | Formats with Prettier (also sorts Tailwind classes)     |
| `npm run check`   | Everything above except the build; this is what CI runs |

## Structure

```
src/
├── app/          # Routing, root layout, error and 404 pages
├── components/
│   ├── layout/   # Header, footer, WhatsApp button, scroll and title management
│   └── ui/       # Reusable primitives (button styles, Section, Logo)
├── config/       # Clinic data (site.ts) and navigation: single source of truth
├── content/      # Copy and lists (gallery, education, experience)
├── features/     # Pages grouped by feature: home, about, legal
├── hooks/        # Reusable logic (carousel, active section, media queries)
├── lib/          # React-free utilities
├── styles/       # Global CSS and colour tokens
└── test/         # Test environment setup
```

Conventions:

- **Contact details, opening hours and health registration** are edited only in
  [`src/config/site.ts`](src/config/site.ts). The structured data for search engines (JSON-LD) in
  [`index.html`](index.html) must match them; a test checks it.
- **Colours** are defined as CSS variables in [`src/styles/index.css`](src/styles/index.css) and
  exposed to Tailwind (`text-ink`, `bg-sand-50`, `text-gold-700`…). Text colours meet
  WCAG AA. No raw hex values are used in components.
- **Secondary pages** are lazy-loaded (`lazy` in
  [`src/app/router.tsx`](src/app/router.tsx)); each route defines its title in `handle.title`.
- **Images** live in `public/imgs`, in WebP and at most 1600 px on the longest side. New photos must be
  optimised before being added (without location metadata).
- Code is written in English; copy and URLs are in Spanish.

## Deployment

`npm run build` generates `dist/`, which is uploaded as-is to the hosting.

It is an SPA with real routes (`/sobremi`, `/aviso-legal`…), so the server must return
`index.html` for any route that is not a file:

- **Apache**: included in [`public/.htaccess`](public/.htaccess) (it also configures caching).
- **Nginx**: `try_files $uri $uri/ /index.html;`
- **Netlify / Cloudflare Pages**: rule `/* /index.html 200` in `public/_redirects`.

## Privacy

The site sets no first-party or analytics cookies. The font is served from the site's own domain, and the
Google Maps map only loads if the visitor asks for it. Any new third-party integration must follow the same
principle and be reflected in the cookie policy.

---

© Dra. Marta Sampil González. All rights reserved.
