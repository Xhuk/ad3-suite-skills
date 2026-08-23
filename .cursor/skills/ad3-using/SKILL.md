---
name: ad3-using
description: Master entry of the AD3 suite. Use at the start of any AD3 task. It does not replace host or craft skills. It opens the linked master chain (recon → spec → plan → build → review → ship) and only then reaches for complementary craft.
---

# AD3 · Using (maestra 1/7)

This is the **front door** of the suite. The other six masters are linked from here. Complementary craft (`ad3-craft-layer`, Emil, `ui-ux-polish`) is optional and never replaces this chain.

## When to open / when not

**Open when**

- A new AD3 chat starts (“build the checkout”, “review this PR”).
- You do not know which master to enter. This file names the next one.
- Another agent handed you an AD3 task and no master has been opened yet.

**Do not open when**

- You already ran using + recon in this conversation.
- You only need the craft index — open `ad3-craft-layer`, not this file.

See `ESCENARIOS.md` for every skill in the pack.

## Linked masters

| # | Skill | Next when |
| --- | --- | --- |
| 1 | `ad3-using` (this file) | Always first |
| 2 | `ad3-recon` | Need to read the host, the task, and what is installed |
| 3 | `ad3-spec` | Need a written spec or a proposal |
| 4 | `ad3-plan` | Need an executable plan |
| 5 | `ad3-build` | Need to implement |
| 6 | `ad3-review` | Need to review a diff, a UI, or a proposal |
| 7 | `ad3-ship` | Need to verify, close, or hand off |

Do not skip `ad3-recon` unless the host and installed skills were already verified in this conversation.

## Hard rules

1. AD3 owns the process. Host skills (Stripe, data, infra, product) still own domain facts.
2. Craft skills improve a response. They do not become the suite.
3. Never assume a skill is installed. `ad3-recon` verifies.
4. Open **one** master at a time. Then, if needed, one craft skill.
5. If a proposed skill is missing, say so and continue with what is present.

## First moves

1. Read this file.
2. Open `ad3-recon`.
3. Follow the chain that recon names. Typical paths:

- New work: recon → spec → plan → build → review → ship
- Review only: recon → review → ship
- Proposal only: recon → spec → ship
- Verify install: recon → ship

## After this skill

Open `ad3-recon`.
