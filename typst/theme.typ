// AD3 editorial theme — proposals and contracts.
// Never pair this pack with ReportLab, FPDF, or LaTeX.

#let slate = rgb("#0F172A")
#let accent = rgb("#2563EB")
#let indigo = rgb("#4F46E5")
#let ink = rgb("#1E293B")
#let muted = rgb("#64748B")
#let wash = rgb("#F8FAFC")
#let stripe = rgb("#F1F5F9")
#let hair = rgb("#E2E8F0")
#let indigo-wash = rgb("#EEF2FF")

#let fonts = ("Inter", "Liberation Sans", "Arial")
// Arial is a last-resort family on Windows. Typst warns if it is missing;
// Inter (vendored) or Liberation Sans will be used instead.

#let editorial(
  kind: "Documento",
  folio: none,
  issued: none,
  issuer: none,
  confidential: true,
  body,
) = {
  set document(
    title: kind + if folio != none { " · " + folio } else { "" },
    author: if issuer != none { issuer } else { "AD3" },
  )

  set page(
    paper: "us-letter",
    margin: (x: 2cm, y: 2.5cm),
    background: place(top, rect(width: 100%, height: 3.5pt, fill: accent)),
    header: context {
      if counter(page).get().first() > 1 {
        set text(size: 8pt, fill: muted, font: fonts)
        grid(
          columns: (1fr, 1fr),
          align: (left, right),
          text(weight: "semibold", fill: slate, kind),
          if folio != none { folio } else { [] },
        )
        v(-4pt)
        line(length: 100%, stroke: 0.4pt + hair)
      }
    },
    footer: context {
      set text(size: 8pt, fill: muted, font: fonts)
      line(length: 100%, stroke: 0.4pt + hair)
      v(6pt)
      grid(
        columns: (1fr, auto, 1fr),
        align: (left, center, right),
        [Mercado: Estados Unidos Mexicanos · ámbito federal],
        [Página #counter(page).display() de #counter(page).final().first()],
        if confidential { [Uso confidencial] } else { [] },
      )
    },
  )

  set text(
    font: fonts,
    size: 10.5pt,
    fill: ink,
    lang: "es",
    hyphenate: true,
  )
  set par(justify: true, leading: 0.68em, spacing: 0.88em)
  set list(indent: 0.9em, marker: text(fill: accent, weight: "bold")[•])
  set enum(indent: 0.9em)

  show heading.where(level: 1): it => {
    block(above: 1.2em, below: 0.55em, {
      grid(
        columns: (5pt, 1fr),
        column-gutter: 8pt,
        align: horizon,
        rect(width: 4pt, height: 14pt, fill: indigo, radius: 1pt),
        text(size: 12.5pt, weight: "bold", fill: slate, tracking: 0.04em, it.body),
      )
    })
  }

  show heading.where(level: 2): it => block(above: 0.95em, below: 0.4em, {
    text(size: 11pt, weight: "semibold", fill: slate, it.body)
  })

  body
}

#let badge(label) = {
  box(
    fill: indigo-wash,
    inset: (x: 9pt, y: 4pt),
    radius: 999pt,
    text(
      size: 8pt,
      weight: "bold",
      fill: indigo,
      tracking: 0.08em,
      upper(label),
    ),
  )
}

#let feature-cards(items) = {
  let cols = calc.min(items.len(), 3)
  block(breakable: false, {
    grid(
      columns: (1fr,) * cols,
      column-gutter: 11pt,
      row-gutter: 11pt,
      ..items.map(item => {
        block(
          width: 100%,
          fill: wash,
          stroke: (top: 2.5pt + indigo, rest: 0.45pt + hair),
          radius: 5pt,
          inset: 12pt,
          breakable: false,
          {
            text(size: 13pt, weight: "bold", fill: indigo, item.num)
            v(5pt)
            text(size: 9.5pt, weight: "bold", fill: slate, item.title)
            v(5pt)
            set par(justify: false, leading: 0.62em)
            text(size: 8.5pt, fill: muted, item.body)
          },
        )
      }),
    )
  })
}

#let letterhead(
  kind: none,
  folio: none,
  issued: none,
  issuer: none,
  recipient: none,
  brand: "AD3",
  tagline: "Documento editorial",
) = {
  grid(
    columns: (1fr, auto),
    align: (left + top, right + top),
    {
      text(size: 18pt, weight: "bold", fill: slate, tracking: -0.02em, brand)
      v(3pt)
      text(size: 8.5pt, fill: muted, tagline)
    },
    {
      if kind != none {
        badge(kind)
        v(6pt)
      }
      set text(size: 9pt)
      if folio != none {
        text(fill: muted)[Folio: ]
        text(weight: "semibold", fill: slate, folio)
        linebreak()
      }
      if issued != none {
        text(fill: muted)[Fecha: ]
        text(weight: "semibold", fill: slate, issued)
      }
    },
  )

  v(14pt)
  line(length: 100%, stroke: 0.7pt + slate)
  v(14pt)

  grid(
    columns: (1fr, 1fr),
    column-gutter: 1.4cm,
    {
      text(size: 8pt, fill: muted, weight: "semibold", tracking: 0.08em, "EMITIDO POR")
      v(4pt)
      text(weight: "semibold", fill: slate, issuer.name)
      linebreak()
      text(size: 9pt, fill: muted, issuer.detail)
    },
    {
      text(size: 8pt, fill: muted, weight: "semibold", tracking: 0.08em, "PREPARADO PARA")
      v(4pt)
      text(weight: "semibold", fill: slate, recipient.name)
      linebreak()
      text(size: 9pt, fill: muted, recipient.detail)
    },
  )
}

#let kicker(title) = {
  v(18pt)
  text(size: 22pt, weight: "semibold", fill: slate, title)
  v(8pt)
}

#let lead(body) = {
  text(size: 11.5pt, fill: ink, body)
  v(6pt)
}

#let note(title: none, body) = {
  block(
    width: 100%,
    fill: wash,
    stroke: (left: 3.5pt + accent, rest: 0.45pt + hair),
    radius: 3pt,
    inset: (x: 14pt, y: 11pt),
    breakable: false,
    {
      if title != none {
        text(size: 9.5pt, weight: "bold", fill: slate, title)
        v(4pt)
      }
      text(size: 9.5pt, fill: ink, body)
    },
  )
}

#let data-table(headers, rows, alignments: none) = {
  let cols = headers.len()
  let aligns = if alignments != none { alignments } else { (left,) * cols }

  show table.cell.where(y: 0): set text(fill: white, weight: "semibold", size: 9pt)
  set table(
    columns: cols,
    align: (x, _) => aligns.at(x),
    inset: (x: 9pt, y: 8pt),
    fill: (_, y) => if y == 0 { slate } else if calc.odd(y) { stripe } else { white },
    stroke: 0.45pt + hair,
  )

  table(
    table.header(..headers),
    ..rows.flatten(),
  )
}

#let money-table(headers, rows, totals) = {
  data-table(headers, rows, alignments: (left, right, right, right))
  v(8pt)
  grid(
    columns: (1fr, 7.2cm),
    [],
    {
      for item in totals {
        grid(
          columns: (1fr, auto),
          text(size: 9.5pt, fill: if item.at("strong", default: false) { slate } else { muted }, item.label),
          text(
            size: if item.at("strong", default: false) { 12pt } else { 10pt },
            weight: if item.at("strong", default: false) { "semibold" } else { "regular" },
            fill: if item.at("strong", default: false) { slate } else { ink },
            item.value,
          ),
        )
        if item.at("strong", default: false) {
          v(2pt)
          line(length: 100%, stroke: 1pt + accent)
        } else {
          v(3pt)
          line(length: 100%, stroke: 0.4pt + hair)
          v(4pt)
        }
      }
    },
  )
}

#let sign-cell(who) = {
  block(breakable: false, {
    v(1.55cm)
    line(length: 100%, stroke: 0.7pt + slate)
    v(6pt)
    text(weight: "semibold", fill: slate, who.name)
    linebreak()
    text(size: 8.5pt, fill: muted, who.role)
    if who.at("id", default: none) != none {
      linebreak()
      text(size: 8.5pt, fill: muted, who.id)
    }
  })
}

#let signatures(left, right, caption: "Firmas") = {
  heading(level: 1, caption)
  text(size: 9.5pt, fill: muted)[
    Al firmar, las partes aceptan el contenido de este documento en el ámbito
    federal de los Estados Unidos Mexicanos. La firma puede ser autógrafa o
    electrónica en los términos de la legislación federal aplicable.
  ]
  v(6pt)
  grid(
    columns: (1fr, 1fr),
    column-gutter: 1.8cm,
    sign-cell(left),
    sign-cell(right),
  )
}

#let clause(number, title, body) = {
  block(above: 0.85em, below: 0.35em, {
    text(weight: "semibold", fill: slate)[Cláusula #number. #title.]
    h(0.35em)
    body
  })
}
