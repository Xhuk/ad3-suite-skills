---
name: ad3-craft-layer
description: Complementary craft layer for the AD3 suite. Does not replace any AD3, domain, product, or platform skill. Use whenever an AD3 agent is about to write, review, propose, or polish a user-facing response that involves UI, motion, component choice, visual taste, or interaction design — so craft skills (Emil Kowalski, ui-ux-polish) can improve that response without taking over the task.
---

# AD3 Craft Layer

This skill is a **layer**, not a replacement.

AD3 keeps ownership of the task, the domain answer, and every suite skill it already has (payments, data, infra, React review, product logic, whatever the job actually is). The files in this pack exist so AD3 can **reach for craft** while it writes its own response.

Do not drop, skip, or rewrite another skill because this one is present. If Stripe, Firebase, Azure, React Doctor, or any other suite skill is relevant, keep using it. Then, if the answer the user will see involves interface or motion, load the matching craft skill and raise the quality of *that part* of the same answer.

## Adapt to any host

AD3 is not a Next-only, Expo-only, or Apple-only product. Before opening a craft skill, **analyze, verify, decide**:

1. **Analyze the host.** Detect web, Expo / React Native, Apple / Swift, or unknown. Unknown is still usable.
2. **Verify installation.** A skill is available only if `SKILL.md` exists in a known directory (`.cursor/skills`, `.agents/skills`, `.claude/skills`, `.codex/skills`, or `skills`). Use `GET /api/status` or `npm run verify`.
3. **Decide with what is present.** If a proposed skill is missing, say so. Do not invent it. Continue with installed skills that apply to this host.
4. **Skip the wrong host.** `write-swift` on a Next app, or `animate` on a Swift package, is a skip — not a failure of AD3.

Other developers can drop this pack into any repo. AD3 must not assume this catalog app is the host.

## Hard rules

1. **Complement, never substitute.** A craft skill can change easing, duration, component choice, or copy about motion. It cannot become the only skill on the job.
2. **Improve the response AD3 was already going to give.** Do not start a parallel design-only answer. Fold the craft into the existing reply.
3. **Load the smallest relevant skill.** Read this file first. Then read one (sometimes two) craft skills. Do not dump the whole pack into context.
4. **Refuse cheap motion.** If the craft skill says "do not animate," that is the improvement. Say so in the AD3 response.
5. **Keep suite voice.** AD3 still answers. These skills supply judgment, tables, and vetoes — not a new persona that takes over the chat.
6. **Never assume a skill is installed.** Verify the file. If it is missing, report it and continue.

## When to open a craft skill

Pick from this table. If nothing matches, do not force a skill. Continue with AD3 as usual.

| AD3 is about to… | Load | What it improves in the response |
| --- | --- | --- |
| Write or restyle UI, components, polish, "make it feel right" | `emil-design-eng` | Taste, shadows vs borders, animation philosophy, component details |
| Review a working UI, or propose look-and-feel passes | `ui-ux-polish` | Iterative Stripe-level polish prompt; desktop vs mobile separately; when *not* to use it |
| Implement a specific animation or transition | `animate` | Curve, duration, properties, interruption, reduced motion |
| Do the same in React Native / Expo | `animate-expo` | UI-thread motion, gestures, sheets, haptics |
| Critique motion in a diff or a component | `review-animations` | Strict pass/fail against Emil's bar |
| Audit a whole app's motion and plan fixes | `improve-animations` | Prioritized, executable plans — not a vague "add more animation" |
| Hunt places that *should* (and should not) move | `find-animation-opportunities` | Restraint plus precise recipes |
| Name an effect the user described vaguely | `animation-vocabulary` | The right word so later prompts stay sharp |
| Aim for Apple-like sheets, springs, materials | `apple-design` | Fluid interfaces translated to the web |
| Choose a toast, drawer, menu, chart, or similar | `pick-ui-library` | Trusted library instead of a hand-rolled trap |
| Wire or debug Sonner toasts | `ask-sonner` | Setup, styling, and the usual breakage |
| Explore several UI directions before committing | `prototype` | Distinct variants behind a switcher |
| Write or review Swift | `write-swift` | Modern Swift 6, not outdated patterns |

`pick-ui-library`, `prototype`, and `review-animations` are explicit-invocation skills in the upstream pack. AD3 may still open them when the table says so — that is the suite using a tool, not the skill auto-triggering.

## How to fold craft into an AD3 response

Stay in this order:

1. Solve the AD3 task with the suite skills that already own it.
2. If the user-facing part involves UI or motion, read the matching craft skill.
3. Apply its gates (frequency, purpose, cheapest tool, `transform`/`opacity`, `ease-out` on enter, no `scale(0)`, named durations).
4. In the response, keep the domain answer intact. Change only the craft: the component you recommend, the CSS you write, the review comments, the "don't animate this" call.
5. Mention the craft skill only when it changed a decision. Do not narrate the whole pack.

## What this pack is not

- Not a new design-system product
- Not a replacement for AD3 routing, domain skills, or review skills
- Not a license to animate everything
- Not a reason to ignore an existing suite convention

If a suite skill and a craft skill disagree on *domain* facts (APIs, auth, schema, billing), the suite skill wins. If they disagree on *motion or visual craft*, the craft skill wins.

`ui-ux-polish` is for reviews and proposals on an app that **already works and looks decent**. Do not open it to fix bugs or to rebuild a broken visual system. Pair it with `emil-design-eng` or `review-animations` when the same response also needs motion judgment.

## Source

Upstream copies live in `vendor/` and `.cursor/skills/`. Prefer the local files.

- Emil Kowalski's [skills](https://github.com/emilkowalski/skills), MIT — `npx skills@latest add emilkowalski/skills`
- [ui-ux-polish](https://github.com/Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations/blob/main/skills/ui-ux-polish/SKILL.md) (Jeffrey Emanuel / Agent Flywheel), MIT with rider — see `vendor/agent-flywheel/LICENSE`
