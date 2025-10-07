
<!--
Guidance for AI coding agents working on the eVaLaunche Next.js (App Router) static website.
This file is intentionally concise and focused on immediate, actionable rules and examples.
-->

# Quick agent instructions — eVaLaunche

Project at-a-glance
- Next.js 14 (App Router) marketing site. App root: `src/app/layout.tsx` (exports global Metadata and loads `Header`).
- Static-first: canonical content lives under `/data/*.json` and is surfaced through `src/lib/data.ts` (`dataAPI`).

Essential commands (from `package.json`)
- Start dev server: `pnpm dev` or `npm run dev`.
- Lint: `npm run lint` (uses `next lint`).
- Build for production: `npm run build`.
- Deploy helper: `npm run deploy` (local build + a naive git commit/push; adjust for CI).

Key conventions and patterns (do these first)
- Data API: always prefer `src/lib/data.ts` helpers (e.g. `dataAPI.blog.getAll()`) instead of importing JSON directly. The helpers add small simulated delays and centralize filtering/sorting.
- Types: `src/lib/data.ts` contains TypeScript interfaces (Service, CaseStudy, BlogPost, etc.). If you add a field, update both the JSON in `/data/` and the interfaces.
- Metadata: pages use Next's Metadata API. Keep `metadataBase` driven by `NEXT_PUBLIC_APP_URL` (see `src/app/layout.tsx`). Every page should export title/description and OG metadata.
- Images: use `next/image` and always provide `alt` text. Many pages assume optimized images under `public/images/`.

Styling & design rules
- Global styles: `src/app/globals.css`. Theme tokens and rules are documented in `.cursorrules` and `/docs/Theming.md` — follow those tokens (colors, shadows, spacing) and avoid introducing page-level theme variables.
- Tailwind conventions: reuse existing spacing and size utilities (examples in `src/components/Header.tsx`: `w-14 h-14`, `w-10 h-10`). Match those scales for icons/components.

Docs & documentation policy
- All project docs live under `/docs/`. Do NOT create random docs elsewhere.
- Allowed doc files and scopes (examples): `Theming.md`, `DataSchemas.md`, `Routing.md`, `Deployment.md`, `Quality.md`, `Decisions.md`.

Sensitive data & environment
- Use `env.template` as the source of truth for required env vars. Do NOT commit real secrets. Local testing: copy `env.template` to `.env.local` and populate keys (Resend, reCAPTCHA, GA, Gemini API key used by chatbot).

Quick examples (copyable)
- Import data API:
  - `import { dataAPI } from '@/lib/data'; const posts = await dataAPI.blog.getAll();`
- Read service by slug:
  - `const service = await dataAPI.services.getBySlug('web-development');`

Do not
- Introduce new global theme variables without updating `docs/Theming.md` and `.cursorrules`.
- Commit API keys or add credentials to repo history.

If you need a longer, operational agent guide (architecture, data flow, PR checklists), see `AGENT.md` at the repo root.
