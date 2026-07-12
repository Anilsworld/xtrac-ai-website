# xTrac AI — Marketing Site

Production marketing website + login UI for **xTrac AI** (iEllipse Technologies) — a
no-code platform for deploying autonomous AI agents across WhatsApp, web and voice.

Built with Vite + React + TypeScript + Tailwind CSS + shadcn/ui, with WebGL (Three.js)
and Framer Motion for the animated hero, rotating integrations cloud, interactive
"Tracy" superapp demo, and the login card-stack.

---

## Tech stack

| Area        | Choice                                   |
| ----------- | ---------------------------------------- |
| Build tool  | Vite 5                                   |
| Framework   | React 18 + TypeScript (strict)           |
| Styling     | Tailwind CSS 3 + shadcn/ui (Radix + CVA) |
| Animation   | Framer Motion, Three.js (WebGL shaders)  |
| Routing     | react-router-dom v6                      |
| Icons       | lucide-react                             |
| Deploy      | Vercel (any static host works)           |

---

## Prerequisites

- **Node.js 18+** (20 LTS recommended)
- npm (ships with Node). pnpm/yarn also fine.

## Local development

```bash
npm install
npm run dev
```

Dev server runs at http://localhost:5173. The login page is at `/login`.

## Production build

```bash
npm run build      # type-checks, then outputs static site to dist/
npm run preview    # serve the built dist/ locally to verify
```

The build is a fully static SPA — `dist/` can be hosted on any static host/CDN.

---

## Deploy

This is a single-page app, so the host must **rewrite all routes to `/index.html`**
(otherwise deep links like `/login` 404 on refresh). Config is already included for the
common hosts:

### Vercel (recommended)

`vercel.json` already contains the SPA rewrite. Either:

- **Dashboard:** import the repo → framework preset **Vite** → deploy. No extra config.
- **CLI:**
  ```bash
  npm i -g vercel
  vercel --prod
  ```

### Netlify

`public/_redirects` already contains the SPA fallback. Set:

- Build command: `npm run build`
- Publish directory: `dist`

### Any static host (S3/CloudFront, nginx, Cloudflare Pages, etc.)

Serve `dist/` and add a catch-all rewrite to `/index.html` for client-side routing.

---

## Project structure

```
public/            Static assets — brand logos (SVG), favicon, mini-me mascot
src/
  pages/           Marketing.tsx (landing), Login.tsx
  components/
    sections/      Landing page sections (Hero, Integrations, Industries, Pricing …)
    ui/            Reusable UI + effects (shader-hero, integrations-cloud,
                   interactive-tracy, light-rays, login-cards …)
    primitives/    Icon, BrandLogo/Mark, Section, ThemeToggle, Reveal
  lib/content.ts   Copy/content data (use-cases, integrations, pricing, FAQ …)
  index.css        Tailwind layers + design tokens (light/dark)
vercel.json        SPA rewrite for Vercel
```

Light/dark theme is togglable and persisted; all brand logos are local (no CDN), so the
site renders fully offline-capable with zero external asset requests.

---

© iEllipse Technologies. All rights reserved. Proprietary — not for redistribution.
