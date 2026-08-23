import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Documentos Typst · AD3",
  description:
    "Plantillas editoriales en Typst para propuestas comerciales y contratos. Sin ReportLab, FPDF ni LaTeX.",
};

const samples = [
  {
    title: "Propuesta comercial",
    folio: "AD3-PROP-2026-0041",
    href: "/documentos/propuesta-comercial.pdf",
    source: "typst/propuesta.typ",
    blurb:
      "Valor, alcance, desglose en MXN con IVA federal 16 %, calendario y firmas en grid.",
  },
  {
    title: "Contrato de servicios",
    folio: "AD3-CTR-2026-0017",
    href: "/documentos/contrato-servicios.pdf",
    source: "typst/contrato.typ",
    blurb:
      "Comparecientes, cláusulas y jurisdicción federal de los Estados Unidos Mexicanos. Sin ciudad.",
  },
] as const;

export default function DocumentosPage() {
  return (
    <>
      <SiteHeader active="/documentos" />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14">
        <section className="animate-enter max-w-2xl space-y-3">
          <p className="text-xs tracking-[0.18em] text-primary uppercase">
            Typst · no ReportLab
          </p>
          <h1 className="font-heading text-4xl leading-tight">
            PDFs con auto-layout. La fuente es `.typ`, no un canvas rígido.
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            Las plantillas viven en{" "}
            <code className="font-mono text-[13px] text-foreground">typst/</code>{" "}
            y se compilán con el CLI oficial. Letter, márgenes 2 cm × 2.5 cm,
            Inter, slate y azul royal. Si no hay país, el mercado es México
            federal. Abre{" "}
            <Link
              href="/skills/ad3-typst"
              className="text-foreground underline decoration-foreground/25 underline-offset-4"
            >
              ad3-typst
            </Link>{" "}
            cuando un agente vaya a generar el documento.
          </p>
          <p className="font-mono text-[13px] text-foreground/80">
            ./scripts/install-typst.sh && npm run pdf
          </p>
        </section>

        <ol className="grid gap-6 lg:grid-cols-2">
          {samples.map((sample) => (
            <li key={sample.href}>
              <Card className="overflow-hidden bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] ring-foreground/6">
                <CardHeader className="gap-2">
                  <p className="font-mono text-xs text-muted-foreground">
                    {sample.folio}
                  </p>
                  <CardTitle className="text-xl">{sample.title}</CardTitle>
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
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <iframe
                    title={sample.title}
                    src={`${sample.href}#view=FitH`}
                    className="h-[28rem] w-full rounded-xl bg-white sm:h-[34rem]"
                  />
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}
