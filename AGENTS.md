# AD3 suite — craft layer

This repo gives AD3 agents Emil Kowalski's design-engineering skills **at hand**. They do not replace any other suite skill.

## Before you answer

1. Keep using the AD3 / domain / platform skill that owns the task.
2. If the user-facing response involves UI, motion, component choice, or visual taste, read `.cursor/skills/ad3-craft-layer/SKILL.md`.
3. Open only the matching craft skill under `.cursor/skills/`.
4. Fold that judgment into the same response. Do not start a parallel design write-up.
5. If the craft skill says do not animate, say so and stop.

## Local sources

- Index skill: `.cursor/skills/ad3-craft-layer/SKILL.md`
- Upstream copies: `.cursor/skills/<name>/` and `vendor/emilkowalski/skills/`
- HTTP: `GET /api/skills`, `GET /api/skills/:slug`, `GET /api/playbook`

## What never happens

- Dropping a Stripe, Firebase, Azure, React, or product skill because a craft skill is present
- Animating high-frequency or keyboard-driven UI
- Hand-rolling a toast, drawer, or menu when `pick-ui-library` / `ask-sonner` apply

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
