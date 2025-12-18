# Archis Portfolio

A full-stack portfolio site built with React/Vite and an Express API for the contact form. Includes mobile-first navigation, themed UI with sound toggles, and a 3D background that is disabled on mobile for performance.

## Features
- Mobile drawer navigation with full labels; CTA buttons route to Projects and Contact.
- Contact pipeline: validation, 20 req/min/IP rate limit, CORS-guarded origin, Supabase persistence, and Gmail app-password email notifications.
- Theming and sound toggles wrapped in global providers; glitch/CRT styling with optional background scene (Three.js) automatically skipped on mobile.
- Production builds: Vite client → `dist/public`, esbuild-bundled server → `dist/index.cjs`; GitHub Pages build writes static client to `docs/` and preserves `CNAME`.

## Tech Stack
- Frontend: React 19, Vite 7, Tailwind (inline config), framer-motion, wouter, lucide-react, TanStack Query, Three.js.
- Backend: Express 4, Supabase client, Nodemailer (Gmail), CORS, esbuild bundling.
- Tooling: TypeScript, tsx, drizzle config present for schema, VS Code tasks for `check` and `build`.

## Project Structure (key files)
- [client/src/App.tsx](client/src/App.tsx) – wraps theme/sound providers, layout, and routes.
- [client/src/components/layout.tsx](client/src/components/layout.tsx) – responsive layout with mobile drawer nav and control buttons.
- [client/src/components/background-scene.tsx](client/src/components/background-scene.tsx) – 3D scene; disabled on mobile.
- [client/src/pages/home.tsx](client/src/pages/home.tsx) – hero with linked CTAs; stats/companies.
- [server/index.ts](server/index.ts) – Express bootstrap, CORS, logging, Vite dev middleware, production static serving.
- [server/routes.ts](server/routes.ts) – `/api/contact` with validation and rate limiting.
- [server/submissions.ts](server/submissions.ts) – Supabase client for persisting contact submissions.
- [server/email.ts](server/email.ts) – Gmail transport and notification email.
- [script/build.ts](script/build.ts) – full build (client + bundled server).
- [script/build-gh-pages.ts](script/build-gh-pages.ts) – static client build to `docs/` for GitHub Pages + CNAME copy.

## Prerequisites
- Node.js 18+ and npm.
- Supabase project (anon key + URL) and Gmail app password for contact notifications.

## Environment Variables
Copy [.env.example](.env.example) to `.env.local` and fill:
- `EMAIL_USER` / `EMAIL_PASSWORD` – Gmail app password creds for sending mail.
- `RECIPIENT_EMAIL` – destination inbox.
- `SUPABASE_URL` / `SUPABASE_ANON_KEY` – Supabase project for contact submissions.
- `PROD_ORIGIN` – allowed origin for CORS in production (e.g., `https://yourdomain.com`).

## Supabase Table (contact_submissions)
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
No RLS enabled here; add policies if you later expose reads. The API writes with the anon key.

## Running Locally
```bash
npm install
# Full stack (API + Vite dev middleware on port 5000)
npm run dev
# Client-only Vite dev server (also port 5000 by default)
npm run dev:client
```
The server integrates Vite in development; use only one dev command at a time to avoid port conflicts.

## Build & Deploy
```bash
# Production bundles (client → dist/public, server → dist/index.cjs)
npm run build
# Run production bundle
npm start
# Static build for GitHub Pages (outputs to docs/ and copies CNAME)
npm run build:gh-pages
```
Deploy options:
- Node host: serve `dist/index.cjs` (Express API + static client).
- GitHub Pages: push `docs/` after `npm run build:gh-pages` (static client only; API must be hosted separately).

## API – Contact
- Endpoint: `POST /api/contact`
- Body: `{ name, email, subject, message }`
- Validation: name 1–100, email RFC-ish pattern ≤254, subject 1–200, message 1–5000 chars.
- Rate limit: 20 requests/min per IP.
- Behavior: saves to Supabase; fires email notification (non-blocking). Returns `{ success: true, submissionId }` on success, 400 on validation errors, 429 on rate limit, 500 on server errors.
- CORS: allowed origin from `PROD_ORIGIN` (defaults to `http://localhost:5173` in dev).

## Security & Operations
- `.env.local` is git-ignored; keep secrets out of commits. Rotate any previously committed keys.
- Minimal logging; sensitive credentials are not printed. CORS locked to configured origin.
- Rate limiting and input validation applied to contact endpoint.

## Known Notes
- Vite reports large bundle chunks; consider future code-splitting if needed.
- GitHub Dependabot reports one moderate vulnerability; review and update dependencies as appropriate.
	- See repository Security tab → Dependabot alerts for the specific package and suggested update.

## Scripts Quick Reference
- `npm run dev` – dev server (API + Vite middleware).
- `npm run dev:client` – client-only dev server.
- `npm run build` – client + server production bundles.
- `npm start` – run bundled server.
- `npm run build:gh-pages` – static client for GitHub Pages.
- `npm run check` – TypeScript type-check (via VS Code task).
