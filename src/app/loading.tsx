import { SiteHeader } from "@/components/site-header";

export default function Loading() {
  return (
    <>
      <SiteHeader active="/" />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="h-10 w-64 rounded-lg bg-foreground/6" />
        <div className="h-24 max-w-xl rounded-lg bg-foreground/5" />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="h-48 rounded-xl bg-foreground/5" />
          <div className="h-48 rounded-xl bg-foreground/5" />
          <div className="h-48 rounded-xl bg-foreground/5" />
          <div className="h-48 rounded-xl bg-foreground/5" />
        </div>
        <p className="text-sm text-muted-foreground">Cargando el catálogo de oficio…</p>
      </main>
    </>
  );
}
