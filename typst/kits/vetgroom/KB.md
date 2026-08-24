# VetGroom · Knowledge Base

**Última actualización:** 2026-08-24  
**Estado comercial SyBA:** aceptado por dueño + socio · PDF de 6 páginas publicado  
**Fuentes de verdad:** este archivo + `brief.md` + `brand.typ` + spec `docs/superpowers/specs/2026-08-24-vetgroom-syba-proposal-design.md`

Cualquier agente o persona que toque propuesta, contrato, demo o PDF de VetGroom **lee esto primero**. Los números de SyBA viven en el *kit*, no en las skills `ad3-scribe` / `ad3-doc-design` / `ad3-typst`.

---

## 1. Producto

| Campo | Valor |
| --- | --- |
| Nombre | VetGroom |
| Qué es | Plataforma operativa para grooming y sucursales (también módulo Vet) |
| Mercado default | Estados Unidos Mexicanos, **ámbito federal** (sin ciudad inventada) |
| Moneda | MXN · IVA federal 16 % (siempre decir **+ IVA** en precios mayores) |
| Demo SyBA | https://demo.vetgroom.com.mx/demo/syba?demo_access_token=SYBA-2026-30D |
| Theme-color / marca | Teal logo `#08B1B4` · profundo `#0E7C7E` · wash `#E6F8F8` · canvas `#F4F6F9` · tinta `#0F172A` |
| Logo | `typst/assets/vetgroom-logo.png` · `public/brand/vetgroom-logo.png` |
| UI de referencia | Panel de Recepción (claro, no dark). Captura: `public/brand/vetgroom-frontend.png` |

### Look & feel (documentos y app de catálogo)

- Fondo claro, Inter, pastillas teal, badge sólido teal con texto blanco.
- No usar índigo, dorado de estudio oscuro, ni “Director de Arte” en skills.
- Títulos **sin guiones** tipográficos (`-` `–` `—` `·`) y sin soft-hyphen en H1/H2/kickers (`hyphenate: false`).

---

## 2. Pedido operativo (qué debe hacer el software)

Derivado del documento de requerimientos de SyBA (`Sofware.docx`). Es la base del Pack / Programa SyBA y del demo:

1. Catálogo de clientes y mascotas (raza, corte, dirección, imagen, indicaciones, recolección a domicilio).
2. Tiempo de servicio por mascota + historial.
3. Al agendar: tiempo estimado desde historial.
4. Capacidad de la clínica según groomers / estilistas.
5. Reportes de recolecciones / entregas (enviables por WhatsApp).
6. Rutas eficientes por dirección (enviables por WhatsApp).
7. Reporte diario: jaula, paciente, raza, instrucciones, perfume.
8. Reporte por estilista / día.
9. Agenda del día en pantalla (VetBoard): mascota, jaula, groomer, prioridad, instrucciones.
10. Historial de servicios: incidencias, quién atendió, productos, notas clínicas / hallazgos.

**Valor que se vende al cliente (no “módulos de software”):**

- Control operativo  
- Planeación inteligente  
- VetBoard operativo  
- Estandarización, visibilidad, crecimiento ordenado  

---

## 3. Modelo comercial (canónico)

Historia que el cliente debe entender de un vistazo:

| Fase | Narrativa | Qué paga |
| --- | --- | --- |
| **Año 1** | **Construcción** | Pack + infraestructura (empaquetada) |
| **Año 2+** | **Continuidad Operativa VetGroom** | Por sucursal activa + infra + L1 opcional |
| **Sucursal nueva (VPS)** | Expansión | Solo Continuidad (sin alta operativa en sucursales 2–4) |
| **Shared** | Entrada | 1 operación · 2 servicios |
| **VPS** | Crecimiento | Hasta 4 sucursales · 8 servicios |

### 3.1 Año 1 — Construcción

El cliente **no** está comprando una “licencia”. Está comprando:

descubrimiento · análisis · personalización · validación · VetBoard · reportes · historial avanzado · implementación · capacitación · puesta en marcha.

| Opción | Precio año 1 | Qué incluye (lenguaje cliente) |
| --- | --- | --- |
| **Base · Shared** | **\$27,999 + IVA** | Pack SyBA + Shared año 1 + implementación |
| **Recomendada · VPS** | **\$30,999 + IVA** | Pack SyBA + VPS año 1 + capacidad hasta 4 sucursales |

**Mensaje comercial obligatorio:**  
«La diferencia real para pasar a infraestructura dedicada es de **\$3,000 anuales**.»

**Math interna (no desglosar al cliente en el año 1 como tres renglones):**

- Pack = \$24,999  
- Shared = \$3,000 → total \$27,999  
- VPS = \$6,000 → total \$30,999  

**Pago:** 50 % anticipo · 50 % liberación productiva.  
**Vigencia propuesta:** 15 **días naturales**.

### 3.2 Año 2+ — Continuidad Operativa VetGroom

Nombre de producto (lock): **Continuidad Operativa VetGroom**  
No usar como etiqueta primaria: “licencia”, “Continuidad Operativa Anual”.

| Concepto | Importe |
| --- | --- |
| Continuidad Operativa VetGroom | **\$12,999 + IVA** / sucursal activa / año |
| Shared | **\$3,000 + IVA** / año (una operación) |
| VPS | **\$6,000 + IVA** / año (hasta 4 sucursales) |
| L1 esencial | **\$6,000 + IVA** · Soporte 20 h / año · opcional |
| L1 plus | **\$12,000 + IVA** · Soporte 40 h / año · opcional |

**Incluye Continuidad (por ubicación):**

- Módulo Vet  
- Módulo Groom  
- Actualizaciones VetGroom  
- Funcionalidades desarrolladas para ese cliente (ej. SyBA)  
- Acceso multiusuario  
- Uso continuo de la plataforma  

**Ya no se vuelve a cobrar:** Pack SyBA · personalización del alcance · VetBoard · reportes · historial avanzado · configuración inicial.

**L1:** horas se diluyen entre sucursales activas; **expiran cada año**. Sin bolsa → atención bajo disponibilidad (no crítico ≈ 1 semana; crítico tan pronto haya disponibilidad). Siempre dispuestos a dialogar antes de un malentendido.

### 3.3 Shared vs VPS (reglas duras)

| | Shared | VPS dedicada |
| --- | --- | --- |
| Rol | Entrada | Crecimiento |
| Sucursales | **1** | Hasta **4** |
| Servicios | 2 (Vet + Groom) | Hasta **8** (4 × Vet+Groom) |
| Año 1 en propuesta | Empaquetado en \$27,999 | Empaquetado en \$30,999 |
| Año 2+ | Línea separada \$3,000 | Línea separada \$6,000 |
| Sucursal 2 | **Migrar a VPS** (recomendado / necesario para aislamiento y performance) | Solo Continuidad (sin alta operativa) |

**Interno (nunca en el PDF del cliente):** Shared es un contenedor propio limitado en memoria/espacio, separado de la app principal; el costo de mantenerlo es nuestro. Al cliente: “ambiente propio para operar”, no “contenedor”.

### 3.4 Nueva sucursal (cliente en VPS)

No vuelve a pagar Pack / VetBoard / reportes / personalización / costos de incorporación.

| Concepto | Importe |
| --- | --- |
| Continuidad Operativa VetGroom | **\$12,999 + IVA** / año |

**Política (socio, 2026-08-24):** Una vez en VPS, sucursales 2, 3 y 4 incorporan únicamente Continuidad. Sin Alta operativa \$3,000. La inversión inicial de construcción y la infra dedicada ya financian la capacidad de expansión.

**Frase comercial:**  
«Una vez implementada la solución, SyBA puede crecer de una a cuatro sucursales sin volver a pagar personalización, implementación ni costos de incorporación. Cada nueva sucursal únicamente incorpora su Continuidad Operativa VetGroom.»

### 3.5 Tabla de expansión (escenario VPS)

| Sucursales | Continuidad Operativa anual | VPS anual |
| --- | --- | --- |
| 1 | \$12,999 | \$6,000 |
| 2 | \$25,998 | \$6,000 |
| 3 | \$38,997 | \$6,000 |
| 4 | \$51,996 | \$6,000 |

(+ IVA). Misma VPS hasta 4. Argumento: *la inversión inicial de construcción se reutiliza*.

Ejemplos de totales operativos (+ IVA aparte):

- 1 sucursal + VPS ≈ \$18,999  
- 2 sucursales + VPS ≈ \$31,998  

---

## 4. Fuera de alcance (propuesta)

- Apps móviles nativas  
- Integraciones no contempladas  
- Costos WhatsApp Business API  
- Costos Google Maps  
- Licencias de terceros  
- Migraciones históricas masivas  

**Desarrollo futuro:** bloque estimado desde **\$4,000 + IVA** (≈ hasta 8 h) o cotización por alcance.

---

## 5. Naming & copy (lock)

| Evitar | Preferir |
| --- | --- |
| Licencia (etiqueta primaria año 2+) | **Continuidad Operativa VetGroom** |
| Pack SyBA como cargo año 2+ | Pack solo en Construcción año 1 |
| Shared \$3k / VPS \$6k como headline año 1 | Totales **\$27,999** / **\$30,999** |
| Contenedor, memoria, noisy neighbor técnico | Ambiente propio / dedicado / capacidad de crecimiento |
| Pack SyBA (si suena chico) | Programa / Pack SyBA en contexto de construcción |
| Guiones en títulos | Frases limpias |

**Cierre canónico:**  
«Nuestro objetivo no es vender software. Nuestro objetivo es ayudar a SyBA a construir una operación más ordenada, visible y escalable, acompañando el crecimiento de la organización durante los próximos años.»

---

## 6. Documento SyBA actual

| Campo | Valor |
| --- | --- |
| Folio | VG-PROP-SYBA-2026-001 |
| Fecha | 24 de agosto de 2026 |
| Páginas | 6 |
| Fuente Typst | `typst/vetgroom-syba.typ` |
| PDF | `public/documentos/vetgroom-syba.pdf` |
| Preview | `public/documentos/vetgroom-syba-p1.png` |
| Spec | `docs/superpowers/specs/2026-08-24-vetgroom-syba-proposal-design.md` |
| Plan | `docs/superpowers/plans/2026-08-24-vetgroom-syba-proposal.md` |

### Mapa de páginas

1. Hero + valor + demo (sin precios)  
2. Año 1 Construcción · Shared / VPS · diferencia \$3k · pago  
3. Continuidad Operativa VetGroom · infra · L1  
4. Crecimiento · Shared→VPS · tabla expansión  
5. Fuera de alcance · soporte (corto)  
6. Próximos pasos · cierre · firmas  

---

## 7. Archivos del kit (dónde está todo)

```
typst/kits/vetgroom/
  KB.md          ← este knowledge base
  brief.md       ← hechos comerciales cortos para el escriba
  brand.typ      ← tokens Typst del producto

typst/assets/vetgroom-logo.png
typst/vetgroom-syba.typ
typst/theme.typ          ← motor editorial (#plan-cards, #feature-cards, …)

public/brand/vetgroom-logo.png
public/brand/vetgroom-frontend.png
public/documentos/vetgroom-syba.pdf
```

### Pipeline de agentes

```
ad3-scribe       → brief (hechos + copy cliente)
ad3-doc-design   → brand.typ + look del producto
ad3-typst        → plantilla Typst del proyecto + compile
```

Compilar:

```bash
./bin/typst compile --font-path typst/fonts typst/vetgroom-syba.typ public/documentos/vetgroom-syba.pdf
# o
npm run pdf
```

---

## 8. Anti-patrones (no volver a hacer)

1. Sumar VPS + Pack como “total inicial” sin el empaquetado Shared/VPS del año 1.  
2. Cobrar “licencia” aparte en el año 1 además del Pack.  
3. Dejar Shared en 2+ sucursales sin migrar a VPS.  
4. Descontar Continuidad en sucursal 2/3 “porque el código ya existe”.  
5. Explicar contenedores / límites de memoria al cliente.  
6. Hardcodear teal VetGroom dentro de `skills/ad3-*.md` (el look va en el kit).  
7. Regenerar PDF con modelo viejo (licencia suelta año 1, o \$24,999 sin Shared empaquetado).  
8. Cobrar Alta operativa \$3,000 en sucursales 2–4 cuando el cliente ya opera en VPS.

---

## 9. Checklist rápido antes de mandar a SyBA

- [ ] Totales año 1: Shared \$27,999 · VPS \$30,999 · diferencia \$3,000  
- [ ] Pago 50/50 · vigencia 15 días naturales · + IVA  
- [ ] Continuidad Operativa **VetGroom** \$12,999 (no “licencia”)  
- [ ] VPS sucursales 2–4: solo Continuidad · sin Alta operativa  
- [ ] Shared = 1 · VPS = 4 · migración explícita  
- [ ] Demo en página 1  
- [ ] Sin jerga de contenedores  
- [ ] Folio y fecha correctos  

---

## 10. Historial de decisión

| Fecha | Decisión |
| --- | --- |
| 2026-08 | Typst only (no HTML/Chrome/Playwright para PDF) |
| 2026-08 | Look = frontend claro teal, no estudio oscuro |
| 2026-08-24 | Shared entrada / VPS crecimiento; año 1 empaquetado |
| 2026-08-24 | Año 1 Construcción · Año 2+ Continuidad |
| 2026-08-24 | Rename: Continuidad Operativa **VetGroom** |
| 2026-08-24 | Spec A + steers · PDF 6 páginas · socio OK para firmar |
| 2026-08-24 | Copy ejecutivo: tono inversión/crecimiento, no técnico-contrato |
