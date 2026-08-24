---
name: ad3-build
description: Master 5/7 of AD3. Implement the current AD3 plan on the detected host. Use after ad3-plan. May open one complementary craft skill for UI or motion without replacing the suite.
---

# AD3 · Build (maestra 5/7)

Implement the plan. Stay on the host. Fold craft into the same change.

**Prev:** `ad3-plan` · **Next:** `ad3-review`

## When to open / when not

**Open when**

- The plan is ready: write the component or the endpoint.
- A review rejected the change and the fixes must land.
- A web modal needs motion: this master + `animate` if `ready`.

**Do not open when**

- There is still no plan → `ad3-plan`.
- They only asked for a visual opinion → `ad3-review` or `ad3-spec`.
- You are tempted to open `ui-ux-polish` here. Do not. Polish waits for review.

## Rules

1. Follow the plan. Do not reopen spec unless the host made the plan impossible.
2. Host skills still own domain facts.
3. If the change includes UI or motion and a craft skill is `ready`, open **one**:
   - new animation → `animate` or `animate-expo`
   - general UI taste → `emil-design-eng`
   - toast / drawer / menu → `pick-ui-library` or `ask-sonner`
   - Swift → `write-swift`
   - proposal or contract PDF → `ad3-scribe` then `ad3-doc-design` then `ad3-typst`
4. If that craft skill is missing, build without it and say so.
5. Cover empty, loading, and error states when the surface is user-facing.

Do not open `ui-ux-polish` here. That skill is for review/proposal passes after the thing works.

## After this skill

Open `ad3-review`. Do not ship unreviewed work unless the user asked for a tiny fix and recon said so.
