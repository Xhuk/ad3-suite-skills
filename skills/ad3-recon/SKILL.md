---
name: ad3-recon
description: Master 2/7 of AD3. Analyze the host system, the task, and which proposed skills are actually installed. Use after ad3-using, before spec, plan, build, or review.
---

# AD3 · Recon (maestra 2/7)

Analyze, then decide. Do not start spec or build until this file has a verdict.

**Prev:** `ad3-using` · **Next:** `ad3-spec` | `ad3-plan` | `ad3-review` | `ad3-ship`

## Analyze

1. **Host.** Web (Next, Vite, React), Expo / React Native, Apple / Swift, or unknown. Unknown is still usable.
2. **Task.** New work, review, proposal, fix, or verify-only.
3. **Installed skills.** A skill exists only if `SKILL.md` is on disk in `.cursor/skills`, `.agents/skills`, `.claude/skills`, `.codex/skills`, or `skills`.
4. **Proposed skills.** If the user or another agent named slugs, verify each: `ready` | `missing` | `not-applicable` | `unknown-skill`.

Commands:

```bash
node scripts/ad3-verify.mjs . --propose slug-a,slug-b
```

Or `GET /api/status?propose=slug-a,slug-b` if the catalog app is running.

## Decide (do not invent)

| Verdict | What AD3 does |
| --- | --- |
| ready | May open that skill later in the chain |
| missing | Say it is not installed. Continue without it |
| not-applicable | Installed but wrong host. Skip |
| unknown-skill | Not in the suite. Do not invent a replacement |

Write a short recon note (host, task, ready, blocked). Then open **one** next master:

| Task | Next |
| --- | --- |
| Need a spec or a look-and-feel proposal | `ad3-spec` |
| Spec already exists, need a plan | `ad3-plan` |
| Asked only for a review | `ad3-review` |
| Asked only to check installs / close | `ad3-ship` |

Do not open craft yet. Craft waits for build or review.
