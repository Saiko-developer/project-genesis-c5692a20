# Import code from GitHub: Saiko-developer/project-genesis-c5692a20

## Goal

Replace the current empty starter project with the real code from `Saiko-developer/project-genesis-c5692a20`, at commit `44b51de593c38c281f13889ecdbbd681699ff771`, and rebuild the app from that code.

## Important note on "ongoing two-way sync"

Lovable's two-way GitHub sync **creates a new repository** — it cannot attach this project to your existing `project-genesis-c5692a20` repo. So the flow is:

1. **Import (this plan):** pull your existing repo's code in once via the GitHub connector.
2. **Afterwards (you, 1 minute):** connect GitHub sync from the Lovable editor (Plus (+) menu in the chat input → GitHub → Connect project). This creates a fresh repo holding the imported code, and from then on changes sync both ways automatically.

## Steps

1. **Connect GitHub** — show the connect card so you can authorize GitHub access (one-click OAuth). No credentials to type.
2. **Download the repository** at commit `44b51de...` using the GitHub API (archive download of that exact commit).
3. **Overwrite the project files** — replace the starter template files with your repository contents (preserving only the Lovable-required glue files if the repo lacks them, e.g. Vite/TanStack config compatibility).
4. **Rebuild and verify** — install dependencies if the repo has its own `package.json`, restart the app, and confirm the app builds and renders your real project instead of the starter template.
5. **Report** what was imported and flag anything that needed adapting (e.g. if the repo is not a TanStack Start app, I'll report what structural adjustments were needed before changing anything risky).

## Technical details

- GitHub REST API: `GET /repos/Saiko-developer/project-genesis-c5692a20/tarball/44b51de593c38c281f13889ecdbbd681699ff771` via the connector gateway.
- Files extracted over the project root; starter-only placeholder files removed.
- Build health checked via the preview build log after the import.
