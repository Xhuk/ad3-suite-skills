---
name: ad3-ship
description: Master 7/7 of AD3. Verify installation, host fit, and that the task is actually done. Use at the end of the chain, or after recon when the user only asked to verify proposed skills.
---

# AD3 · Ship (maestra 7/7)

Close the loop. Verify. Do not claim done on hope.

**Prev:** `ad3-review` | `ad3-spec` | `ad3-recon` · **Next:** stop, or `ad3-using` for a new task

## When to open / when not

**Open when**

- Review approved and you must close with evidence.
- They only asked “are the seven masters installed?”
- You must list which skills ran and which were skipped.

**Do not open when**

- A large change still has no review verdict.
- You want to start another task — go back to `ad3-using`.

## Verify

1. The host still matches recon.
2. Every skill the chain used is still `ready` on disk.
3. Proposed skills that were `missing` / `unknown-skill` were **not** silently used.
4. The user-facing surface was actually checked (dev server, test, or `npm run verify`) when the task required it.
5. README / agent notes were updated only if the suite itself changed.

```bash
node scripts/ad3-verify.mjs . --propose ad3-using,ad3-recon,ad3-spec,ad3-plan,ad3-build,ad3-review,ad3-ship
```

## Output

A short close-out:

- What shipped
- Which masters ran
- Which craft skills were used
- Which proposed skills were skipped and why
- What the next human or agent should do

Then stop. Do not start a new chain unless the user asked.
