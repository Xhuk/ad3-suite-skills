import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Documentos Typst · AD3",
  description:
    "La propuesta VetGroom usa el mismo teal del frontend. Typst, no ReportLab.",
};

const samples = [
  {
    title: "Propuesta comercial AD3",
    folio: "AD3-PROP-2026-0041",
    href: "/documentos/propuesta-comercial.pdf",
    preview: "/documentos/propuesta-comercial-p1.png",
    source: "typst/propuesta.typ",
    blurb: "Misma plantilla editorial: teal, Inter, MXN e IVA federal.",
  },
  {
    title: "Contrato de servicios",
    folio: "AD3-CTR-2026-0017",
    href: "/documentos/contrato-servicios.pdf",
    preview: "/documentos/contrato-servicios-p1.png",
    source: "typst/contrato.typ",
    blurb: "Jurisdicción federal de los Estados Unidos Mexicanos. Sin ciudad.",
  },
] as const;

export default function DocumentosPage() {
  return (
    <>
      <SiteHeader active="/documentos" />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-8 sm:px-6 sm:py-12">
        <section className="animate-enter overflow-hidden rounded-3xl border border-border bg-card shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
            <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
              <div className="space-y-4">
                <Image
                  src="/brand/vetgroom-logo.png"
                  alt="VetGroom"
                  width={72}
                  height={72}
                  className="size-[72px] rounded-[22px] shadow-[0_8px_24px_rgba(8,177,180,0.35)]"
                />
                <p className="text-xs tracking-[0.18em] text-primary uppercase">
                  Kit VetGroom
                </p>
                <h1 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                  El escriba saca el brief. El diseño arma la landing. Typst la deja de plantilla.
                </h1>
                <p className="text-sm leading-6 text-muted-foreground sm:text-base">
                  Hoy el producto es VetGroom, teal{" "}
                  <span className="font-mono text-foreground">#08B1B4</span>.
                  Mañana es otro kit en{" "}
                  <span className="font-mono">typst/kits/</span>
                  . Misma cadena: ad3-scribe, ad3-doc-design, ad3-typst.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="/documentos/vetgroom-syba.pdf"
                  className={cn(buttonVariants({ variant: "default" }))}
                >
                  Descargar propuesta
                </a>
                <Link
                  href="/"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Generar otra
                </Link>
              </div>
            </div>
            <div className="relative min-h-[16rem] bg-[#f4f6f9] lg:min-h-[28rem]">
              <Image
                src="/brand/vetgroom-frontend.png"
                alt="Frontend VetGroom, Panel de Recepción en desktop"
                fill
                className="object-cover object-left-top"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
          <article className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-6">
              <div>
                <p className="font-mono text-xs text-muted-foreground">
                  VG-PROP-SYBA-2026-001
                </p>
                <h2 className="text-lg font-semibold">VetGroom para SyBA</h2>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold tracking-wide text-secondary-foreground uppercase">
                Diseño final
              </span>
            </div>
            <img
              src="/documentos/vetgroom-syba-p1.png"
              alt="Primera página de la propuesta VetGroom para SyBA"
              className="w-full bg-white"
            />
          </article>

          <aside className="space-y-3 rounded-3xl border border-border bg-card p-5 sm:p-6">
            <p className="text-xs tracking-[0.18em] text-primary uppercase">
              Tokens
            </p>
            <ul className="space-y-3 text-sm">
              <Swatch color="#08B1B4" name="Teal marca" use="Logo, menú activo, badge, números" />
              <Swatch color="#0E7C7E" name="Teal profundo" use="Regla de página, callout, totales" />
              <Swatch color="#F4F6F9" name="Fondo" use="App y wash de tarjetas" />
              <Swatch color="#0F172A" name="Tinta" use="Títulos y cabecera de tabla" />
              <Swatch color="#FFFFFF" name="Superficie" use="Hojas, cards, PDF" />
            </ul>
            <p className="pt-2 font-mono text-[12px] leading-5 text-muted-foreground">
              typst/theme.typ · public/brand/vetgroom-logo.png
            </p>
          </aside>
        </section>

        <ol className="grid gap-6 sm:grid-cols-2">
          {samples.map((sample) => (
            <li key={sample.href}>
              <article className="overflow-hidden rounded-3xl border border-border bg-card">
                <div className="space-y-2 px-5 py-4">
                  <p className="font-mono text-xs text-muted-foreground">
                    {sample.folio}
                  </p>
                  <h2 className="text-lg font-semibold">{sample.title}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {sample.blurb}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={sample.href}
                      className={cn(buttonVariants({ variant: "default", size: "sm" }))}
                    >
                      Abrir PDF
                    </a>
                    <span className="self-center font-mono text-[12px] text-muted-foreground">
                      {sample.source}
                    </span>
                  </div>
                </div>
                <img
                  src={sample.preview}
                  alt={`Primera página de ${sample.title}`}
                  className="w-full border-t border-border bg-white"
                />
              </article>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}

function Swatch({
  color,
  name,
  use,
}: {
  color: string;
  name: string;
  use: string;
}) {
  return (
    <li className="flex gap-3">
      <span
        className="mt-0.5 size-8 shrink-0 rounded-lg border border-border"
        style={{ background: color }}
      />
      <span>
        <span className="block font-medium">{name}</span>
        <span className="block text-xs leading-5 text-muted-foreground">
          {color} · {use}
        </span>
      </span>
    </li>
  );
}
