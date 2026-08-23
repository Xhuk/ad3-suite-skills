#import "theme.typ": *

#show: editorial.with(
  kind: "Contrato de prestación de servicios",
  folio: "AD3-CTR-2026-0017",
  issued: "23 de agosto de 2026",
  issuer: "AD3 Studio, S.A. de C.V.",
)

#letterhead(
  kind: "Contrato de prestación de servicios profesionales",
  folio: "AD3-CTR-2026-0017",
  issued: "23 de agosto de 2026",
  issuer: (
    name: "AD3 Studio, S.A. de C.V.",
    detail: [En lo sucesivo, “el Prestador” · RFC ADS260101XXX],
  ),
  recipient: (
    name: "Norte Digital, S.A.P.I. de C.V.",
    detail: [En lo sucesivo, “el Cliente” · RFC NDI850101XXX],
  ),
)

#kicker[Contrato de prestación de servicios profesionales]
#lead[
  Celebrado en los Estados Unidos Mexicanos, en el ámbito federal, el 23
  de agosto de 2026, entre las partes que se identifican al rubro. Este
  instrumento no señala ciudad, municipio ni circunscripción local.
]

#note[
  *Aviso editorial.* Este documento es una plantilla de diseño para
  agentes AD3. No es asesoría legal, fiscal ni contable. Un abogado
  facultado en el fuero federal debe revisarlo antes de usarlo como
  contrato vinculante. No use ReportLab, FPDF ni LaTeX para regenerarlo:
  compile el `.typ` con Typst.
]

= Comparecientes

Las partes manifiestan ser sociedades constituidas conforme a la
legislación federal mexicana, con capacidad jurídica y facultades
suficientes de sus representantes, y que los RFC aquí escritos son
datos de plantilla (no corresponden a contribuyentes reales).

= Declaraciones

*I.* El Prestador declara que desarrolla el suite AD3 —siete skills
maestras linkeadas y una capa de oficio— y que puede entregar plantillas
editoriales en Typst.

*II.* El Cliente declara que requiere esos servicios para su operación
de agentes, sin ceder por este acto sus skills de dominio (pagos, datos,
infraestructura u otras).

*III.* Ambas partes declaran que este contrato se rige por disposiciones
federales de los Estados Unidos Mexicanos y que, de no pactarse otra
cosa, el mercado aplicable es el federal, sin remisión a una localidad.

= Cláusulas

#clause("Primera", "Objeto")[
  El Prestador se obliga a instalar el pack AD3, verificar las skills
  propuestas, entregar las plantillas Typst de propuesta y contrato, y
  impartir una sesión de capacitación de dos horas. El Cliente se obliga
  a pagar la contraprestación y a facilitar el acceso técnico razonable.
]

#clause("Segunda", "Entregables")[
  (a) Pack de skills en el repositorio o entorno que designe el Cliente;
  (b) evidencia de verificación (`ready` en las siete maestras);
  (c) fuentes `.typ` y PDFs compilados de los documentos base;
  (d) sesión de capacitación. Queda fuera cualquier desarrollo de
  producto, marca, pasarela de pago o dictamen jurídico.
]

#clause("Tercera", "Contraprestación")[
  El Cliente pagará *\$120,060.00 MXN* (ciento veinte mil sesenta pesos
  00/100 M.N.), conforme al desglose de la propuesta AD3-PROP-2026-0041,
  que se tiene por reproducida. El 50 % se cubre a la firma y el 50 %
  contra entrega verificada.
]

#clause("Cuarta", "Impuestos")[
  Los montos se expresan antes y después del IVA a la tasa federal
  vigente. Cada parte cubre los gravámenes federales que le correspondan.
  Este contrato no crea obligaciones de impuestos locales ni menciona
  una hacienda municipal o estatal.
]

#data-table(
  ([Concepto], [Base gravable], [IVA 16 %], [Total]),
  (
    ([Implementación], [\$85,000.00], [\$13,600.00], [\$98,600.00]),
    ([Capacitación], [\$18,500.00], [\$2,960.00], [\$21,460.00]),
    ([Total del contrato], [\$103,500.00], [\$16,560.00], [\$120,060.00 MXN]),
  ),
  alignments: (left, right, right, right),
)

#clause("Quinta", "Vigencia")[
  El contrato entra en vigor en la fecha de su firma y concluye cuando
  se entreguen los entregables y se cubra el segundo pago, o a los
  treinta días hábiles, lo que ocurra primero, salvo prórroga por escrito.
]

#clause("Sexta", "Confidencialidad")[
  Cada parte guardará la información técnica y comercial que reciba con
  motivo de este contrato y no la divulgará salvo mandato de autoridad
  federal competente o consentimiento escrito.
]

#clause("Séptima", "Propiedad intelectual")[
  El Cliente recibe una licencia no exclusiva para usar el pack AD3
  conforme a sus licencias publicadas (MIT del suite; SIL OFL de Inter;
  avisos de terceros en `NOTICE.md`). El Prestador no adquiere derechos
  sobre las skills de dominio del Cliente.
]

#clause("Octava", "Datos personales")[
  Si se tratan datos personales, las partes observarán la legislación
  federal en la materia. Este modelo no describe un aviso de privacidad
  ni un encargado de tratamiento concreto.
]

#clause("Novena", "Terminación")[
  Cualquier parte puede dar por terminado el contrato por incumplimiento
  grave no subsanado en cinco días hábiles de requerimiento escrito, o
  de común acuerdo. Lo ya pagado por trabajo efectivamente prestado no
  es reembolsable.
]

#clause("Décima", "Relación entre las partes")[
  Las partes son contratistas independientes. Nada de lo aquí pactado
  crea sociedad, representación laboral ni mandato general.
]

#clause("Décima primera", "Notificaciones")[
  Las notificaciones surten efecto cuando se envían al correo que cada
  parte designe por escrito. No se fija un domicilio local.
]

#clause("Décima segunda", "Legislación y jurisdicción")[
  Este contrato se interpreta conforme a las leyes federales de los
  Estados Unidos Mexicanos. Para su interpretación y cumplimiento, las
  partes se someten a los tribunales federales competentes, y renuncian
  a cualquier otro fuero que pudiera corresponderles por razón de
  domicilio presente o futuro.
]

#clause("Décima tercera", "Integridad")[
  Este instrumento y la propuesta AD3-PROP-2026-0041 constituyen el
  acuerdo total. Las modificaciones solo valen por escrito firmado por
  ambas partes.
]

#signatures(
  (
    name: "Mariana Solís Rivera",
    role: "Representante del Prestador · AD3 Studio, S.A. de C.V.",
    id: "RFC ADS260101XXX",
  ),
  (
    name: "Héctor Valdés Nava",
    role: "Representante del Cliente · Norte Digital, S.A.P.I. de C.V.",
    id: "RFC NDI850101XXX",
  ),
)
