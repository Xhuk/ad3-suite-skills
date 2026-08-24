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

#kicker[Control operativo hoy. Crecimiento ordenado mañana.]
#lead[
  Antes de presentar una propuesta económica, construimos un demo funcional
  basado en los procesos compartidos por SyBA. No empezamos por el precio:
  empezamos por grooming, recolecciones, VetBoard, historial, capacidad por
  groomers y rutas.
]

#feature-cards((
  (
    num: "01",
    title: "Control operativo",
    body: [Clientes y mascotas, grooming, jaulas, recolecciones, entregas, historial y reportes en un solo lugar. Menos trabajo manual. Operación estandarizada.],
  ),
  (
    num: "02",
    title: "Planeación inteligente",
    body: [Duración estimada con historial, capacidad según groomers y rutas eficientes. Decisiones con datos, no a ojo.],
  ),
  (
    num: "03",
    title: "VetBoard operativo",
    body: [Mascotas en proceso, groomer, jaula, prioridad e instrucciones en tiempo real. Toda la jornada a la vista.],
  ),
))

#note(title: "Demo ya entregado")[
  Revisen el ambiente demostrativo antes de cualquier compromiso económico:
  #link("https://demo.vetgroom.com.mx/demo/syba?demo_access_token=SYBA-2026-30D")[demo.vetgroom.com.mx/demo/syba].
]

#pagebreak()

// ——— Página 2 · Año 1 Construcción ———
= Año 1. Construcción de la solución

El primer año *no* se compra una licencia. Se paga el trabajo de construir y
adaptar VetGroom a la operación de SyBA: descubrimiento, análisis,
personalización, configuración, capacitación, validación, VetBoard, reportes,
historial avanzado, reglas operativas y puesta en marcha.

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
#note(title: "La diferencia real son \$3,000 anuales")[
  La propuesta base ya incluye infraestructura para operar. Si desean
  infraestructura dedicada con capacidad de crecimiento hasta cuatro
  sucursales, la diferencia es de \$3,000 anuales.
]

== Forma de pago y vigencia

- 50 % al anticipo.
- 50 % al liberar el ambiente productivo.
- Vigencia de esta propuesta: *15 días naturales*.

#pagebreak()

// ——— Página 3 · Continuidad ———
= Año 2 y siguientes. Continuidad Operativa VetGroom

Ya está construido. Ya funciona. El argumento cambia: *operamos* la solución
que SyBA ya tiene; no volvemos a cobrar la construcción.

== Ya no se vuelve a cobrar

- Pack SyBA.
- Personalización del alcance aprobado.
- VetBoard.
- Reportes e historial avanzado.
- Configuración inicial.

== Lo que sí se renueva

*Continuidad Operativa VetGroom* — \$12,999 + IVA por sucursal activa por año.

Incluye Vet y Groom para *una misma ubicación operativa*, actualizaciones
VetGroom, funcionalidades desarrolladas para SyBA, acceso multiusuario y
uso continuo de la plataforma.

#data-table(
  ([Concepto], [Base], [Importe]),
  (
    ([Continuidad Operativa VetGroom], [Por sucursal activa / año], [\$12,999 + IVA]),
    ([Infraestructura Shared], [Anual · una operación], [\$3,000 + IVA]),
    ([Infraestructura VPS], [Anual · hasta 4 sucursales], [\$6,000 + IVA]),
    ([Acompañamiento L1 esencial], [20 horas / año · opcional], [\$6,000 + IVA]),
    ([Acompañamiento L1 plus], [40 horas / año · opcional], [\$12,000 + IVA]),
  ),
  alignments: (left, left, right),
)

Las horas L1 se diluyen entre las sucursales activas y expiran cada año.
Estamos dispuestos a dialogar antes de cualquier malentendido.

#pagebreak()

// ——— Página 4 · Crecimiento ———
= Crecimiento y expansión

== Shared

Pensado para *una* operación. Al abrir una segunda sucursal se recomienda
migrar a VPS dedicada: mismo aislamiento, sin competencia de recursos con
otros ambientes, y capacidad real de crecimiento.

== VPS

Hasta cuatro sucursales. Misma infraestructura, misma personalización,
mismo VetBoard y mismos reportes. Cada Continuidad Operativa VetGroom cubre
Vet y Groom en esa ubicación (hasta ocho servicios en total).

== Nueva sucursal

No vuelve a pagar Pack SyBA, VetBoard, reportes ni personalización.

- Alta operativa: \$3,000 + IVA (pago único).
- Continuidad Operativa VetGroom: \$12,999 + IVA por año.
- Sin descuento en la sucursal 2, 3 o 4.

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

Montos + IVA. La inversión inicial de construcción se reutiliza: lo que se
suma es Continuidad por ubicación y, si aplica, la alta operativa.

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

#pagebreak()

// ——— Página 6 · Cierre ———
= Próximos pasos

+ Revisar el demo.
+ Validar el alcance.
+ Elegir Shared o VPS.
+ Seleccionar soporte L1 si lo desean.
+ Firmar el alcance.
+ Iniciar la implementación.

#lead[
  Nuestro objetivo no es vender una licencia. Nuestro objetivo es construir
  una plataforma que acompañe el crecimiento de SyBA durante los próximos
  años.
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
