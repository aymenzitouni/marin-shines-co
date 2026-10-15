# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project state

A cleaning-service web app, currently the unmodified `create-next-app` scaffold (Next.js 16.4, React 19.3, TypeScript strict, Tailwind CSS v4, App Router). There is no test framework, database, or env config yet.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000 (Turbopack)
npm run build   # production build; also the main type/prerender check
npm run start   # serve the production build
npm run lint    # ESLint 9 flat config (next core-web-vitals + typescript)
npx next typegen && npx tsc --noEmit  # type-check without building
```

npm is the package manager (`package-lock.json` is committed).

## Next.js version caveats

The bundled docs at `node_modules/next/dist/docs/` match the installed version. Check them before relying on remembered APIs. `next.config.ts` enables several non-default behaviors:

- **`cacheComponents: true`**: the Cache Components model. Data and UI are cached explicitly with the `'use cache'` directive (pair it with `cacheLife`). Dynamic or request-time data must sit behind `<Suspense>` or the build fails. Read `01-app/01-getting-started/08-caching.md` before writing data-fetching code. Guides labeled "without Cache Components" or "previous model" don't apply here.
- **`partialPrefetching: true`**: `<Link>` prefetches only a route's static App Shell. URL-dependent data (`params`, `searchParams`) should stream in behind Suspense. See `01-app/02-guides/adopting-partial-prefetching.md`.
- **`experimental.agentFeedback: true`**: `next dev` may add a `nextjs-agent-feedback` managed block to `AGENTS.md`. Like the agent-rules block, it is regenerated if removed, so commit it rather than reverting it.

## Architecture notes

- Source lives under `src/`. The import alias `@/*` maps to `./src/*`. Routes are in `src/app/` (the README's `app/page.tsx` path is out of date).
- **Tailwind v4 runs through a Turbopack loader**, not PostCSS. The `turbopack.rules["*.css"]` entry in `next.config.ts` applies `@tailwindcss/turbopack`. There is no `postcss.config` or `tailwind.config`. Theme tokens are defined in CSS with `@theme inline` in `src/app/globals.css`, and light/dark colors come from `--background`/`--foreground` CSS variables switched by `prefers-color-scheme`.
- Fonts (Geist / Geist Mono) are loaded with `next/font/google` in `src/app/layout.tsx` and exposed as `--font-geist-sans` / `--font-geist-mono`.
- Layouts and pages use Next's generated global route-prop types (e.g. `LayoutProps<"/">`, `PageProps<"/route">`), so they don't need hand-written prop interfaces. They are generated into `.next/` by `next dev`, `next build`, or `next typegen`. A bare `tsc` on a fresh checkout fails until one of these has run.
