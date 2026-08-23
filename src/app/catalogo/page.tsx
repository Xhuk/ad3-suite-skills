import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { SkillCatalog } from "@/components/skill-catalog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Catálogo de skills · AD3",
  description: "Skills del suite AD3. El producto principal es generar PDFs.",
};

export default function CatalogoPage() {
  return (
    <>
      <SiteHeader active="/catalogo" />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-4 py-10 sm:px-6 sm:py-14">
        <section className="animate-enter max-w-3xl space-y-5">
          <p className="text-xs tracking-[0.18em] text-primary uppercase">
            Suite · segundo plano
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] text-balance sm:text-5xl">
            Las skills siguen aquí. El PDF se genera en la portada.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground text-pretty">
            Si solo necesitas un documento con buen diseño, vuelve a{" "}
            <Link
              href="/"
              className="text-foreground underline decoration-foreground/25 underline-offset-4"
            >
              Generar
            </Link>
            . Este catálogo es el pack de agentes; no hace falta para sacar un
            PDF.
          </p>
          <Link href="/" className={cn(buttonVariants({ variant: "default" }))}>
            Generar un PDF
          </Link>
        </section>
        <SkillCatalog />
      </main>
    </>
  );
}
