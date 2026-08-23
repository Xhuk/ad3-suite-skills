---
name: ad3-spec
description: Master 3/7 of AD3. Write a spec or a proposal for the current host. Use after ad3-recon when the user needs a written target before planning or building. Links to ui-ux-polish only for look-and-feel proposals on a working UI.
---

# AD3 · Spec (maestra 3/7)

Turn recon into a written target. This is a **proposal or spec**, not the implementation.

**Prev:** `ad3-recon` · **Next:** `ad3-plan` | `ad3-ship`

## Output

A short spec that another AD3 master can execute:

- Goal in one sentence
- In scope / out of scope
- Host constraints from recon
- Skills that are **ready** and will be allowed later
- Skills that were proposed and **blocked** (do not plan around missing files)
- Empty, loading, and error states if there is a UI
- Desktop and mobile called out separately if the work is visual

## Craft (optional, never a substitute)

If this is a look-and-feel proposal on an app that **already works**, and `ui-ux-polish` is `ready`, open it and fold its desktop/mobile passes into **this** spec. Do not replace the spec with a polish-only essay.

If `ui-ux-polish` is missing, write the spec anyway.

## After this skill

- Need an execution plan → `ad3-plan`
- The user only wanted the proposal → `ad3-ship`
