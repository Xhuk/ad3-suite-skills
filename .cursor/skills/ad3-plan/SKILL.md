---
name: ad3-plan
description: Master 4/7 of AD3. Turn an AD3 spec into a sequenced, host-aware plan. Use after ad3-spec (or after recon if a spec already exists). Does not implement.
---

# AD3 · Plan (maestra 4/7)

Sequence the work. Do not write production code here.

**Prev:** `ad3-spec` or `ad3-recon` · **Next:** `ad3-build` | `ad3-ship`

## When to open / when not

**Open when**

- A spec exists and must be split into steps with done-when.
- Several skills are `ready` and you must say which run in build vs review.
- The user asked “give me the plan, do not implement yet”.

**Do not open when**

- There is no spec or written goal → `ad3-spec` first.
- The plan is done and they asked for code → `ad3-build`.

## Rules

1. Every step must be executable on the **detected host**.
2. Only schedule skills that recon marked `ready`.
3. Keep host domain work (APIs, schema, billing) as host-owned steps.
4. If UI or motion appears, name the craft skill to open **during build or review**, not now.
5. Smallest plan that can ship. No platform scaffolding the spec did not ask for.

## Plan shape

1. Preconditions (installed skills, host)
2. Steps, each with: action, files or surface, done-when
3. Verification step that `ad3-ship` will run
4. Risks / skips (blocked skills, wrong-host skills)

## After this skill

- Ready to implement → `ad3-build`
- Plan-only request → `ad3-ship`
