"use client";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <SiteHeader active="/" />
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center gap-4 px-4 py-20 text-center">
        <h1 className="font-heading text-4xl">No se pudo cargar esta vista</h1>
        <p className="text-sm leading-6 text-muted-foreground">
          El pack de skills sigue en disco. Reintenta; si falla otra vez, abre
          el catálogo o lee <code>.cursor/skills</code> directo.
        </p>
        <div className="flex justify-center">
          <Button onClick={() => reset()}>Reintentar</Button>
        </div>
      </main>
    </>
  );
}
