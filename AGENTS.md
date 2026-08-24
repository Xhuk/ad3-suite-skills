# AD3 suite — craft layer

The AD3 suite is seven linked masters:

`ad3-using` → `ad3-recon` → `ad3-spec` → `ad3-plan` → `ad3-build` → `ad3-review` → `ad3-ship`

Craft skills (Emil, `ui-ux-polish`, `ad3-craft-layer`) are satellites. They do not replace the chain or any host skill.

If two skills seem to fit, read [ESCENARIOS.md](./ESCENARIOS.md) or `GET /api/escenarios` before opening either. Craft never starts a task (`ad3-using` does). `ui-ux-polish` never owns a broken UI. Commercial PDFs go `ad3-scribe` → `ad3-doc-design` → `ad3-typst`. Never ReportLab, FPDF, LaTeX, or HTML-to-PDF.

## Before you answer

1. Open `ad3-using`, then `ad3-recon`.
2. Verify proposed skills are installed. Do not invent missing files.
3. Follow the named next master. Open at most one craft skill from build/review/spec.
4. Host skills still own domain facts.
5. Close with `ad3-ship`.

## Local sources

- Index skill: `.cursor/skills/ad3-craft-layer/SKILL.md`
- Public layout: `skills/<name>/SKILL.md` (also copied to `.cursor/skills/`)
- Upstream copies: `vendor/emilkowalski/skills/`, `vendor/agent-flywheel/skills/`
- HTTP: `GET /api/skills`, `GET /api/skills/:slug`, `GET /api/playbook`, `GET /api/status`
- CLI: `npm run verify` / `node scripts/ad3-verify.mjs`

## What never happens

- Dropping a Stripe, Firebase, Azure, React, or product skill because a craft skill is present
- Animating high-frequency or keyboard-driven UI
- Hand-rolling a toast, drawer, or menu when `pick-ui-library` / `ask-sonner` apply

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
