import { PdfStudio } from "@/components/pdf-studio";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader active="/" />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
        <section className="animate-enter max-w-2xl space-y-3">
          <p className="text-xs tracking-[0.18em] text-primary uppercase">
            PDFs editoriales · teal VetGroom
          </p>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Escribes el contenido. Sale un PDF con el mismo diseño que el frontend.
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            La propuesta comercial ya está lista: ves las páginas y la
            descargas. Typst, no ReportLab.
          </p>
        </section>
        <PdfStudio />
      </main>
    </>
  );
}
