# Archis Portfolio 🚀

A bold, animated portfolio: mobile-first navigation drawer, linked CTAs, themed CRT/tech styling, optional 3D background (auto-skipped on mobile), and a production-ready contact pipeline.

## ✨ Highlights
- Mobile drawer with full labels + active state; hero CTAs link to Projects and Contact.
- Contact flow: validated inputs, gentle rate limiting, Supabase persistence, email notification.
- Theme + sound toggles; glitch/CRT aesthetic; performant 3D scene disabled on phones.
- One-command builds: Vite client, esbuild-bundled server, GitHub Pages static build (keeps `CNAME`).

## 🧭 Key Files
- [client/src/App.tsx](client/src/App.tsx) – providers, layout, routing.
- [client/src/components/layout.tsx](client/src/components/layout.tsx) – responsive shell with drawer nav.
- [client/src/components/background-scene.tsx](client/src/components/background-scene.tsx) – Three.js scene (desktop only).
- [client/src/pages/home.tsx](client/src/pages/home.tsx) – hero, stats, CTA links.
- [server/index.ts](server/index.ts) – Express bootstrap, CORS, logging, dev middleware.
- [server/routes.ts](server/routes.ts) – `/api/contact` endpoint with validation + rate limit.
- [server/submissions.ts](server/submissions.ts) – Supabase writes for contact submissions.
- [server/email.ts](server/email.ts) – Gmail transport for contact notifications.
- [script/build.ts](script/build.ts) – client + server production bundle.
- [script/build-gh-pages.ts](script/build-gh-pages.ts) – static client to `docs/` with `CNAME` copy.

## 🛠️ Stack
- Frontend: React 19, Vite 7, Tailwind (inline), framer-motion, wouter, lucide-react, TanStack Query, Three.js.
- Backend: Express 4, Supabase client, Nodemailer (Gmail), CORS, esbuild bundle.
- Tooling: TypeScript, tsx, drizzle config, VS Code tasks (`check`, `build`).

## 🔑 Environment
Copy [.env.example](.env.example) → `.env.local` and set:
- `EMAIL_USER` / `EMAIL_PASSWORD` – Gmail app password creds.
- `RECIPIENT_EMAIL` – destination inbox.
- `SUPABASE_URL` / `SUPABASE_ANON_KEY` – Supabase project for contact submissions.
- `PROD_ORIGIN` – allowed origin for CORS (e.g., `https://yourdomain.com`).

## 🗄️ Supabase Table
Run in Supabase SQL editor:
```sql
create table if not exists public.contact_submissions (
	id text primary key,
	name text not null,
	email text not null,
	subject text not null,
	message text not null,
	timestamp timestamptz not null default now()
);
```

## 🚦 Run & Develop
```bash
npm install
# Full stack dev (API + client middleware)
npm run dev
# Client-only dev
npm run dev:client
```
Use a single dev command at a time to avoid port clashes.

## 📦 Build & Ship
```bash
# Client → dist/public, Server → dist/index.cjs
npm run build
# Run production server
npm start
# Static client for GitHub Pages (outputs to docs/ + CNAME)
npm run build:gh-pages
```

## 📮 Contact API
- `POST /api/contact`
- Body: `{ name, email, subject, message }`
- Validates inputs, rate-limits per IP, saves to Supabase, triggers email notification.
- Response: `{ success: true, submissionId }` on success; clear errors on validation/limit.

## 🎛️ UX & Perf Touches
- Drawer nav closes on selection; full labels on mobile.
- 3D background auto-disabled on mobile for smooth FPS.
- Themed gradients, text glow, glitch accents, sound/theme toggles.

## 🔍 Notes
- Large bundle warning from Vite is expected; consider code-splitting later if desired.

## Scripts Quick Reference
- `npm run dev` – dev server (API + Vite middleware).
- `npm run dev:client` – client-only dev server.
- `npm run build` – client + server production bundles.
- `npm start` – run bundled server.
- `npm run build:gh-pages` – static client for GitHub Pages.
- `npm run check` – TypeScript type-check (via VS Code task).
