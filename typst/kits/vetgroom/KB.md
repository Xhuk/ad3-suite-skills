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

### 3.2 Continuidad Operativa VetGroom

Nombre de producto (lock): **Continuidad Operativa VetGroom**  
No usar como etiqueta primaria: “licencia”, “Año 2”, “Continuidad Operativa Anual”.

**Cuándo aplica:** por sucursal activa o al incorporar una sucursal nueva — no es un bloque genérico de “año 2”.

**Qué incluye (por ubicación):** módulos Vet y Groom · alcance Pack SyBA (doc o addendum) · actualizaciones VetGroom · funcionalidades SyBA · multiusuario · uso continuo.

**Ya no se vuelve a cobrar:** Pack SyBA · personalización · VetBoard · reportes · historial avanzado · configuración inicial.

#### Shared (eligieron Shared en año 1)

| Sucursales activas | Importe / año c/u |
| --- | --- |
| 1.ª y 2.ª | **\$15,999 + IVA** |
| 3.ª, 4.ª y siguientes | **\$12,999 + IVA** |

Infra empaquetada en el cobro (Shared + VPS interno). **Nunca** desglosar \$3,000 Shared ni \$6,000 VPS al cliente en ruta Shared.

**Math interno:** \$12,999 operación + \$3,000 Shared (+ VPS interno según escalemos) = \$15,999 visible.

#### VPS (eligieron VPS en año 1)

| Sucursales | Importe |
| --- | --- |
| 1.ª | **\$12,999 + IVA** / año |
| 2.ª, 3.ª y 4.ª (nuevas) | **\$12,999 + IVA** / año c/u adicional |

**Sin línea VPS** al incorporar sucursales 2–4. Capacidad contratada en construcción año 1.

#### Soporte (opcional)

| Concepto | Importe |
| --- | --- |
| Soporte 20 h | **\$6,000 + IVA** / año |
| Soporte 40 h | **\$12,000 + IVA** / año |

Horas diluidas entre sucursales; expiran cada año.

### 3.3 Shared vs VPS (reglas duras)

| | Shared | VPS dedicada |
| --- | --- | --- |
| Rol | Entrada | Crecimiento |
| Sucursales | **1** | Hasta **4** |
| Servicios | 2 (Vet + Groom) | Hasta **8** (4 × Vet+Groom) |
| Año 1 en propuesta | Empaquetado en \$27,999 | Empaquetado en \$30,999 |
| Continuidad | **\$15,999** (1.ª–2.ª) · **\$12,999** (3.ª+) | **\$12,999** / sucursal · sin VPS extra en 2–4 |
| Sucursal 2 | **\$15,999** adicional | **\$12,999** adicional |
| Sucursales 3 y 4 | **\$12,999** adicional c/u | **\$12,999** adicional c/u |

**Interno (nunca en el PDF del cliente):** En Shared, el \$15,999 de la 2.ª sucursal financia internamente el ajuste de infraestructura; el cliente solo ve Continuidad empaquetada. Si superan límites de infra acordados, se negocia aparte.

### 3.4 Expansión — Shared (año 1 Shared)

| Sucursal | Importe adicional / año |
| --- | --- |
| 2.ª | **\$15,999 + IVA** (Continuidad empaquetada, igual que la 1.ª) |
| 3.ª y 4.ª | **\$12,999 + IVA** c/u |

**Totales anuales Continuidad (Shared):** 1 → \$15,999 · 2 → \$31,998 · 3 → \$44,997 · 4 → \$57,996 (+ IVA).

**Cliente:** límites de infraestructura acordados en la expansión; si se superan, se revisa conjuntamente.

**Interno:** el \$15,999 de la 2.ª sucursal cubre internamente lo que haga falta en infra; no explicar contenedores ni migración al cliente.

### 3.5 Expansión — VPS (año 1 VPS)

No vuelve a pagar Pack / VetBoard / reportes / personalización / costos de incorporación.

| Sucursal | Importe adicional / año |
| --- | --- |
| 2.ª, 3.ª y 4.ª | **\$12,999 + IVA** c/u |

**Política:** VPS (\$6,000 anual) ya contratada en construcción año 1; sucursales 2–4 solo suman Continuidad.

**Frase comercial:**  
«Una vez implementada la solución, SyBA puede crecer sin volver a pagar personalización, implementación ni costos de incorporación. Cada nueva sucursal incorpora únicamente la Continuidad Operativa que corresponda.»

### 3.6 Tabla de expansión (escenario VPS)

| Sucursales | Continuidad Operativa anual |
| --- | --- |
| 1 | \$12,999 |
| 2 | \$25,998 |
| 3 | \$38,997 |
| 4 | \$51,996 |

(+ IVA). Sin columna VPS: infra ya en construcción año 1.

### 3.7 Tabla de expansión (escenario Shared)

| Sucursales | Continuidad Operativa anual |
| --- | --- |
| 1 | \$15,999 |
| 2 | \$31,998 |
| 3 | \$44,997 |
| 4 | \$57,996 |

(+ IVA). 1.ª–2.ª sucursal = \$15,999 c/u; 3.ª y 4.ª = \$12,999 adicionales.

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
| 2026-08-24 | Continuidad por sucursal (no “año 2”); Shared 1–2 \$15,999 · 3+ \$12,999; VPS 2–4 \$12,999 sin línea infra |
