# Restore the Saya learning app from GitHub

Your repository is readable now. Its current `main` is the blank page — but the last commit that still holds the full app is `d6347c81` ("Rewrote Unit 12A reading data", 6 Sep 03:34 UTC). Everything is there: the home screen, tutor, practice, mock exam, all unit lesson views including Unit 12, the grammar and textbook data for units 1-12, poems, reviews, audio files and images.

## What I'll do

1. Download that snapshot of the repository and copy every file into this workspace, replacing the blank page.
2. Keep the routing package fix from earlier (the versions that stopped the blank-screen crash), applying it on top of the restored files so the app starts.
3. Install dependencies and check the app builds and the pages load in the preview.
4. Report anything that can't run yet — the app expects a backend (logins, database, AI tutor voice/chat) and this workspace has none connected, so those screens may need Cloud switched back on as a follow-up.

Nothing gets pushed to GitHub as part of this; the repo keeps its current history.

## Notes

- Restore source: commit `d6347c81` of `Saiko-developer/blank-canvas-6ab33506`, fetched as a read-only tarball. `main`'s later commits wiped the app, so restoring from `main` would give the blank page back.
- Files restored include `src/routes/*`, `src/components/lesson/*`, `src/data/*`, `src/lib/*`, `src/integrations/*`, `src/hooks/*`, `src/assets`, `public/lesson-audio`, plus `package.json`, `vite.config.ts`, `styles.css`, `components.json` and `roadmap.md`.
- `src/routeTree.gen.ts` is regenerated automatically by the dev server; the restored copy is just a starting point.
- Package versions: restored `package.json` will be reconciled with the working TanStack pins (`react-router 1.170.32`, `react-start 1.168.49`, `router-plugin 1.168.35`) if the old file conflicts.
- Backend: the code imports `@/integrations/supabase/*` and AI gateway helpers. Those files restore fine, but authenticated routes and API routes need Lovable Cloud enabled and secrets set before they work.

## After the restore

Your outstanding Unit 12 tasks (disable the grammar-breakdown/translate buttons on Exercise A, grammar-breakdown on Exercise B, wire the new breakdowns into the comprehension questions, add the hide-translate option to the shared exercise block) become the next piece of work once the app is running.
