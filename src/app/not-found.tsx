import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <>
      <SiteHeader active="/" />
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center gap-4 px-4 py-20 text-center">
        <p className="text-xs tracking-[0.18em] text-primary uppercase">404</p>
        <h1 className="font-heading text-4xl">Esa skill no está en el suite</h1>
        <p className="text-sm leading-6 text-muted-foreground">
          AD3 no inventa un archivo para tapar el hueco. Vuelve al catálogo o
          mira el playbook para ver qué skill de craft sí corresponde.
        </p>
        <div className="flex justify-center gap-2">
          <Link href="/" className={cn(buttonVariants())}>
            Catálogo
          </Link>
          <Link href="/playbook" className={cn(buttonVariants({ variant: "outline" }))}>
            Playbook
          </Link>
        </div>
      </main>
    </>
  );
}
