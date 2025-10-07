# eVaLaunche — Agent Guide (detailed)

This document is for AI coding agents that will work deeply in this repository. It's a longer companion to `.github/copilot-instructions.md` with architecture, data flows, conventions, and concrete examples you can use immediately.

Why this layout
- Static-first marketing site (Next.js App Router) keeps content in JSON under `/data/` so the UI can be built and previewed without external services. `src/lib/data.ts` is a thin mock-API that centralizes access and types.

Architecture overview
- Frontend: Next.js 14 (App Router), React 18, TailwindCSS. Entry points: `src/app/layout.tsx` (global layout & metadata) and per-page files under `src/app/*`.
- UI components: `src/components/*` (Header, Footer, Hero, About, Services, Portfolio, ProjectDetailsForm). Keep components small and reuse Tailwind utility classes.
- Data layer: `/data/*.json` and `src/lib/data.ts`. The app reads via `dataAPI`, which returns typed objects and simulates small delays to mimic network latency.
- Integrations: Analytics via `@vercel/analytics` + `@next/third-parties/google`. Email via Resend (`resend` package) — API key configured via `env.template` / `.env.local`. Optional AI chatbot using Gemini (env var `GEMINI_API_KEY`).

Primary data flows
1. Build-time rendering / SSG
   - Most pages are static and use data from `/data/*.json` via `src/lib/data.ts`.
   - When adding a new page that lists content, use `dataAPI.*.getAll()` to retrieve and shape the data for the page props.
2. Runtime API routes
   - Minimal server routes exist under `src/app/api/*` (e.g. `send-email/route.ts`). They accept form payloads and call external services (Resend). Keep validation and secrets handling confined to server routes.

Conventions and rules (enforceable)
- Data changes: when changing data shapes, update both the JSON in `/data/` and the TypeScript interfaces in `src/lib/data.ts`.
- Metadata: All pages must export Next.js Metadata. Keep `metadataBase` set using `NEXT_PUBLIC_APP_URL`.
- Images: use `next/image` and store source images in `public/images/`. Provide `alt` text.
- Theming: centralized rules in `.cursorrules` and `docs/Theming.md`. Use the provided tokens for colors, shadows, and spacing.
- Icons: prefer vector icons (Lucide, Feather). Avoid emojis in UI components (per `.cursorrules`).

Developer workflows (concrete)
- Dev server: `pnpm dev` or `npm run dev`.
- Lint before PR: `npm run lint`.
- Build locally for verification: `npm run build`.
- Deploy helper (local): `npm run deploy` — note this is a naive helper that commits and pushes; CI should handle production deployment.

Testing and quality gates
- There are no unit tests in this repo by default. Add tests under a `__tests__` or `test` folder and wire up a `test` script in `package.json` if you add them.
- Mandatory pre-PR checks (recommended for agents to perform):
  - `npm run lint`
  - `npm run build`
  - Quick manual smoke check of modified pages in dev server.

Edge cases and common pitfalls
- Do not import JSON directly into pages; use `dataAPI`. This preserves the single source of truth and ensures sorting/filtering rules are applied consistently.
- When updating `env.template`, mirror changes in repo docs (`/docs/Deployment.md`). Do not place real secrets in the repo.
- Watch for image sizes and `next/image` layout changes — large, unoptimized images will hurt Lighthouse scores.

Integration points & external dependencies
- Resend (email): `RESEND_API_KEY` in `.env.local`. Server routes under `src/app/api/send-email/route.ts` call Resend.
- reCAPTCHA: keys present in `env.template` (NEXT_PUBLIC_RECAPTCHA_SITE_KEY & RECAPTCHA_SECRET_KEY) — used on contact forms.
- Google Analytics & Verification: `NEXT_PUBLIC_GA_ID`, `GOOGLE_SITE_VERIFICATION`.
- Gemini / AI: optional `GEMINI_API_KEY` for any AI/chatbot features.

Concrete examples (copy-paste)
- Fetch featured blog posts (server component / page):
  - `import { dataAPI } from '@/lib/data'; const featured = await dataAPI.blog.getFeatured();`
- Server route skeleton (follow existing patterns in `src/app/api/*`):
  - `export async function POST(req: Request) { const body = await req.json(); /* validate & act */ }

PR review checklist for agents
- Ensure added/modified pages export metadata (title + description).
- If you changed data shapes, update `src/lib/data.ts` interfaces and `/data/*.json`.
- Run `npm run lint` and `npm run build` locally; fix errors.
- No secrets in diffs; check for accidental env variable leakage.

Where to find more info
- The core project rules are in `.cursorrules`.
- Docs live in `/docs/` — follow file scopes.

If parts are unclear or you want a stricter template for PR messages and commit titles, tell me which area to formalize and I'll extend this guide with exact templates and automated checks.
