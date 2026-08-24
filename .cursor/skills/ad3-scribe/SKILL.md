---
name: ad3-scribe
description: Use when turning a business analysis, demo, quote, or existing contract into client-facing commercial copy; when titles look like slugs or have hyphens; or before designing a proposal PDF. Not for legal advice or visual layout.
---

# AD3 · Scribe (commercial documentation)

Craft satellite. Open from `ad3-spec` or `ad3-build` when the user-facing text is a proposal, quote, or contract for a **final client**.

Do **not** start an AD3 task here. Next skill is `ad3-doc-design`, not `ad3-typst`.

## When to open / when not

**Open when**

- There is a business analysis, demo, notes, or an old PDF and someone must write the commercial document.
- The reader is the buying client (operations, direction), not the internal team.
- Titles still look like tickets: `Propuesta-de-valor`, `Look-and-feel`, `Pack-SyBA`.

**Do not open when**

- They asked for legal or tax advice → host counsel.
- They only want a color or a layout → `ad3-doc-design`.
- They already have approved client copy and only need the PDF compiled → `ad3-typst`.

## Job

Read the source. Extract facts. Rewrite for the client. Leave a brief the designer can trust.

Write `typst/kits/<project>/brief.md`. `<project>` is a slug (`vetgroom`, `norte-digital`). Tomorrow it is another client. Never put this client’s numbers into the skill file.

If the kit already has `KB.md`, read it first and keep the brief consistent with that knowledge base.

## Extract (do not invent)

From the analysis, demo, or prior PDF, fill only what is in the source:

| Field | Rule |
| --- | --- |
| Parties | Issuer and recipient as the client will read them. No invented RFC or names. |
| Offer | What they get in one sentence. No feature dump. |
| In scope / out of scope | Separate lists. |
| One-time money | Implementation only. Currency + IVA if given. |
| Recurring money | License, VPS, support: **other tables**. Do not mix into the one-time total. |
| Payment and validity | Percentages, milestones, days. |
| Proof | Demo URL, already-delivered work. |
| Market | If none given: Estados Unidos Mexicanos, **federal**. No city. |

If a number is missing, write `UNKNOWN` in the brief. Do not average, round “to look nicer,” or copy a total from another kit.

## Voice

The reader signs or pays. Write as a landing they can finish, not as an internal memo.

- Second person or the client’s name. Never “nosotros internamente.”
- One claim per paragraph. No “además, asimismo, por otro lado.”
- No hyphen, en-dash, em-dash, or middle dot (`-` `–` `—` `·`) **in titles or headings**. Folios and URLs may keep hyphens.
- Theme headings use `hyphenate: false` so Typst does not break a title with a soft hyphen (`opera-ción`).
- Headings are phrases: `Qué gana SyBA`, not `Propuesta-de-valor`, not `Valor · Visión`.

## Brief shape

```markdown
# <Project> · brief comercial
Cliente: …
Emisor: …
Tipo: propuesta | contrato | cotización
Folio: …
Oferta (una frase): …

## Hechos
- Una vez:
- Recurrente:
- Pago:
- Demo:

## Alcance
Dentro:
Fuera:

## Títulos (sin guiones)
Hero:
Valor 1 / 2 / 3:
Inversión:
Cierre:

## Copy
(Hero, valor, alcance, dinero, cierre. Listo para diseñar.)
```

## After this skill

Open `ad3-doc-design` with this brief. Do not compile a PDF yet. Do not invent a palette here.
