#import "theme.typ": *
#import "kits/vetgroom/brand.typ": kit

#show: editorial.with(
  kind: "Propuesta comercial",
  folio: "VG-PROP-SYBA-2026-001",
  issued: "24 de agosto de 2026",
  issuer: kit.name,
)

// ——— Página 1 · Hero + valor + demo ———
#letterhead(
  kind: "Propuesta comercial",
  folio: "VG-PROP-SYBA-2026-001",
  issued: "24 de agosto de 2026",
  brand: kit.name,
  tagline: "VetGroom para SyBA",
  mark: image(kit.mark, height: 34pt, width: 34pt),
  issuer: (
    name: kit.name,
    detail: [Estados Unidos Mexicanos, ámbito federal],
  ),
  recipient: (
    name: "SyBA",
    detail: [Atención: dirección operativa],
  ),
)

#kicker[Una plataforma diseñada para acompañar el crecimiento de SyBA]
#lead[
  Analizamos los procesos de SyBA, construimos un demo funcional y validamos una
  solución alineada a su operación real — para operar mejor hoy y crecer sin
  volver a empezar mañana.
]

*¿Qué obtiene SyBA?* Más que una colección de módulos, VetGroom busca
convertirse en el sistema operativo de la operación diaria de SyBA.

#feature-cards((
  (
    num: "01",
    title: "Operación centralizada",
    body: [
      Centralice la información operativa de SyBA en una sola plataforma:
      clientes, mascotas, grooming, jaulas, recolecciones, entregas, historial
      y reportes.
    ],
  ),
  (
    num: "02",
    title: "Planeación inteligente",
    body: [
      Duración estimada con historial, capacidad según groomers y rutas
      eficientes. Planeación basada en información histórica y capacidad real
      de operación.
    ],
  ),
  (
    num: "03",
    title: "VetBoard operativo",
    body: [
      Vista de piso en tiempo real: mascotas en proceso, groomer responsable,
      jaulas, prioridades e instrucciones especiales. Operación más visible,
      coordinada y predecible para todo el equipo.
    ],
  ),
))

#note(title: "Demo ya entregado")[
  Revisen el ambiente demostrativo antes de cualquier compromiso económico:
  #link("https://demo.vetgroom.com.mx/demo/syba?demo_access_token=SYBA-2026-30D")[demo.vetgroom.com.mx/demo/syba].
]

#pagebreak()

// ——— Página 2 · Año 1 Construcción ———
= Año 1: Construcción de la solución

Durante el primer año se realiza la adaptación de VetGroom a la operación de
SyBA. La inversión cubre:

- Descubrimiento y análisis.
- Personalización.
- Configuración.
- Capacitación.
- Validación operativa.
- VetBoard.
- Reportes.
- Puesta en marcha.

En esta etapa se construye la solución. *No se está cobrando una licencia anual.*

#plan-cards((
  (
    label: "Opción base",
    title: "Shared",
    price: "\$27,999 + IVA",
    price-note: "Total año 1",
    body: [
      Incluye Pack SyBA, infraestructura Shared del año 1 e implementación.
      Pensado para una operación de una sucursal con Vet y Groom.
    ],
  ),
  (
    label: "Opción recomendada",
    title: "VPS dedicada",
    price: "\$30,999 + IVA",
    price-note: "Total año 1",
    recommended: true,
    body: [
      Incluye Pack SyBA, VPS del año 1 e implementación. Capacidad de
      crecimiento hasta cuatro sucursales con la misma personalización.
    ],
  ),
))

#v(10pt)
#note(title: "La diferencia real entre ambas opciones es de \$3,000 al año")[
  Esa diferencia permite pasar de una infraestructura pensada para una sola
  operación a una infraestructura preparada para crecer hasta cuatro sucursales.
]

== Forma de pago y vigencia

- 50 % al anticipo.
- 50 % al liberar el ambiente productivo.
- Vigencia de esta propuesta: *15 días naturales*.

#pagebreak()

// ——— Página 3 · Continuidad ———
= Año 2 en adelante: Operación y crecimiento

Una vez implementada la solución, la inversión anual se compone de dos elementos:

- Continuidad Operativa VetGroom por sucursal activa.
- Infraestructura según el modelo elegido (Shared o VPS).

La construcción inicial, personalización, VetBoard, reportes y configuración ya no
vuelven a cobrarse.

#data-table(
  ([Concepto], [Importe]),
  (
    ([Continuidad Operativa VetGroom], [\$12,999 + IVA]),
    ([Shared], [\$3,000 + IVA]),
    ([VPS], [\$6,000 + IVA]),
    ([Soporte 20 h], [\$6,000 + IVA]),
    ([Soporte 40 h], [\$12,000 + IVA]),
  ),
  alignments: (left, right),
)

Montos anuales · soporte opcional. Las horas de soporte se diluyen entre las
sucursales activas y expiran cada año.

#pagebreak()

// ——— Página 4 · Crecimiento ———
= Crecimiento y expansión

== Crecimiento sin volver a empezar

La inversión del primer año se reutiliza en futuras sucursales. No se vuelve a
pagar personalización, VetBoard, reportes, reglas operativas ni implementación
inicial. Cada nueva sucursal incorpora únicamente su Continuidad Operativa
VetGroom.

== Shared

Pensado para *una* operación. Al abrir una segunda sucursal se recomienda
migrar a VPS dedicada: misma personalización, mayor capacidad y una
infraestructura preparada para el crecimiento.

== VPS

Hasta cuatro sucursales. Misma infraestructura, misma personalización,
mismo VetBoard y mismos reportes. Cada Continuidad Operativa VetGroom cubre
Vet y Groom en esa ubicación (hasta ocho servicios en total).

== Nueva sucursal

Las sucursales 2, 3 y 4 no vuelven a pagar implementación, personalización,
VetBoard ni costos de incorporación.

Cada nueva sucursal incorpora únicamente su Continuidad Operativa VetGroom
(\$12,999 + IVA por año).

== Resumen de expansión (escenario VPS)

#data-table(
  ([Sucursales], [Continuidad Operativa anual], [VPS anual]),
  (
    ([1], [\$12,999], [\$6,000]),
    ([2], [\$25,998], [\$6,000]),
    ([3], [\$38,997], [\$6,000]),
    ([4], [\$51,996], [\$6,000]),
  ),
  alignments: (left, right, right),
)

Montos + IVA. La inversión inicial de construcción se reutiliza: cada nueva
sucursal incorpora únicamente su Continuidad Operativa VetGroom.

#pagebreak()

// ——— Página 5 · Alcance y soporte ———
= Alcance, soporte y fuera de alcance

== No incluido

- Aplicaciones móviles nativas.
- Integraciones no contempladas en el alcance aprobado.
- Costos de WhatsApp Business API.
- Costos de Google Maps.
- Licencias de terceros.
- Migraciones históricas masivas.

== Desarrollo futuro

Bloque estimado desde \$4,000 + IVA (aproximadamente hasta 8 horas de
trabajo), o cotización por alcance cuando el requerimiento lo merezca.

== Soporte

- Con bolsa de horas L1: atención con prioridad.
- Sin bolsa: atención bajo disponibilidad. Asuntos no críticos en alrededor
  de una semana; críticos tan pronto haya disponibilidad.

Nuestro objetivo es mantener una relación transparente. Si se presenta una
necesidad fuera del alcance contratado, se revisará conjuntamente antes de
generar cualquier cargo adicional.

#pagebreak()

// ——— Página 6 · Cierre ———
= Próximos pasos

+ Revisar el demo.
+ Validar el alcance.
+ Elegir Shared o VPS.
+ Seleccionar soporte L1 si lo desean.
+ Firmar el alcance.
+ Iniciar la implementación.

== Nuestro compromiso

#lead[
  Nuestro objetivo no es vender software. Nuestro objetivo es ayudar a SyBA a
  construir una operación más ordenada, visible y escalable, acompañando el
  crecimiento de la organización durante los próximos años.
]

#link("https://demo.vetgroom.com.mx/demo/syba?demo_access_token=SYBA-2026-30D")[
  https://demo.vetgroom.com.mx/demo/syba
]

#signatures(
  (
    name: "Representante de VetGroom",
    role: "Emisor. Propuesta VG-PROP-SYBA-2026-001",
  ),
  (
    name: "Representante de SyBA",
    role: "Receptor. Aceptación de alcance e inversión",
  ),
  caption: "Aceptación",
)
