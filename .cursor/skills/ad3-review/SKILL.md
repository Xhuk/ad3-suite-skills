---
name: ad3-review
description: Master 6/7 of AD3. Review a diff, a UI, or a proposal. Use after ad3-build, or after recon when the user only asked for a review. May open ui-ux-polish or review-animations as complementary craft.
---

# AD3 · Review (maestra 6/7)

Review the work AD3 (or another agent) just did — or a PR the user pointed at.

**Prev:** `ad3-build` or `ad3-recon` · **Next:** `ad3-ship` | `ad3-build` (if the review rejects)

## Keep doing

Logic, tests, security, product. Those are host reviews. This master does not replace them.

## Fold craft when ready

| The review is about… | Open if `ready` |
| --- | --- |
| Look and feel on a **working** UI | `ui-ux-polish` |
| Motion in a diff | `review-animations` |
| General visual taste | `emil-design-eng` |

If those files are missing, review anyway with suite judgment. Do not invent the skill.

`ui-ux-polish` is **not** for a broken app or a full redesign. If recon said the UI is broken, reject polish and send back to `ad3-build` or `ad3-spec`.

## Verdict

- **Approve** → `ad3-ship`
- **Request changes** → name the failing steps and open `ad3-build` or `ad3-spec`
