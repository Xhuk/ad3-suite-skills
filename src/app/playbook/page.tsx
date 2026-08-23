import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { playbook } from "@/lib/catalog";

export const metadata = {
  title: "Playbook · AD3 capa de oficio",
  description:
    "Qué skill de craft abrir según la respuesta que AD3 está a punto de escribir.",
};

export default function PlaybookPage() {
  return (
    <>
      <SiteHeader active="/playbook" />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
        <section className="animate-enter max-w-2xl space-y-3">
          <p className="text-xs tracking-[0.18em] text-primary uppercase">
            Playbook
          </p>
          <h1 className="font-heading text-4xl leading-tight">
            La respuesta sigue siendo de AD3. El craft solo entra donde suma.
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            Cada fila deja intacto el trabajo de dominio del suite y nombra
            los archivos que el agente puede abrir para pulir UI, motion o
            elección de componente.
          </p>
        </section>

        <ol className="grid gap-3">
          {playbook.map((entry, index) => (
            <li
              key={entry.id}
              className="animate-enter"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <Card className="bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] ring-foreground/6">
                <CardHeader>
                  <CardTitle className="text-lg">{entry.situation}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 text-sm leading-6 md:grid-cols-3">
                  <div>
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">
                      AD3 sigue haciendo
                    </p>
                    <p className="mt-1 text-foreground/85">{entry.keepDoing}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">
                      Abre
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {entry.reachFor.map((slug) => (
                        <Link key={slug} href={`/skills/${slug}`}>
                          <Badge variant="outline" className="font-mono">
                            {slug}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">
                      Por qué mejora la respuesta
                    </p>
                    <p className="mt-1 text-foreground/85">{entry.why}</p>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}
