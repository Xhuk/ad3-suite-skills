import { SiteHeader } from "@/components/site-header";
import { SkillVerifier } from "@/components/skill-verifier";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hostLabel } from "@/lib/manifest";
import { inspectSuite } from "@/lib/verify";

export const metadata = {
  title: "Sistema · AD3",
  description:
    "AD3 analiza el host, verifica qué skills están instaladas y decide cuáles aplicar. Sirve en cualquier sistema.",
};

export default function SistemaPage() {
  const status = inspectSuite(process.cwd(), [
    "ui-ux-polish",
    "write-swift",
    "skill-inventada",
  ]);

  return (
    <>
      <SiteHeader active="/sistema" />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
        <section className="animate-enter max-w-2xl space-y-3">
          <p className="text-xs tracking-[0.18em] text-primary uppercase">
            Adaptable a cualquier sistema
          </p>
          <h1 className="font-heading text-4xl leading-tight">
            AD3 primero mira el host, luego verifica, luego decide.
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            El suite no está atado a Next, Expo o Swift. En cada repo detecta
            el stack, comprueba qué skills hay en disco y solo abre las que
            aplican. Si alguien propone una skill que no está instalada, AD3
            lo dice y sigue con las que sí están. Así se puede publicar a
            otros desarrolladores sin pretender un entorno único.
          </p>
        </section>

        <section className="grid gap-3 md:grid-cols-3">
          <Card className="bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] ring-foreground/6">
            <CardHeader>
              <CardTitle className="text-base">Este sistema</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-6">
              <p>{status.host.stack.join(" + ")}</p>
              <div className="flex flex-wrap gap-1.5">
                {status.host.unknown ? (
                  <Badge variant="outline">Host desconocido · usable</Badge>
                ) : (
                  status.host.hosts.map((host) => (
                    <Badge key={host} variant="secondary">
                      {hostLabel(host)}
                    </Badge>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] ring-foreground/6">
            <CardHeader>
              <CardTitle className="text-base">Instaladas</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6">
              <p>
                {status.installed.length} skills en disco ·{" "}
                {status.missing.length} del catálogo ausentes
              </p>
              {status.requiredMissing.length > 0 ? (
                <p className="mt-2 text-destructive">
                  Falta la capa requerida: {status.requiredMissing.join(", ")}
                </p>
              ) : (
                <p className="mt-2 text-muted-foreground">
                  `ad3-craft-layer` está presente. El suite puede decidir.
                </p>
              )}
            </CardContent>
          </Card>
          <Card className="bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] ring-foreground/6">
            <CardHeader>
              <CardTitle className="text-base">Decisión</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-foreground/80">
              {status.decision}
            </CardContent>
          </Card>
        </section>

        <SkillVerifier initial={status} />

        <section className="grid gap-3 lg:grid-cols-2">
          <Card className="bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] ring-foreground/6">
            <CardHeader>
              <CardTitle className="text-base">Aplican en este host</CardTitle>
            </CardHeader>
            <CardContent>
              {status.applicable.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No hay skills instaladas que apliquen. AD3 sigue con el
                  resto del suite del desarrollador.
                </p>
              ) : (
                <ul className="grid gap-1 font-mono text-[13px] text-foreground/80">
                  {status.applicable.map((slug) => (
                    <li key={slug}>{slug}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
          <Card className="bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] ring-foreground/6">
            <CardHeader>
              <CardTitle className="text-base">
                Instaladas, pero de otro sistema
              </CardTitle>
            </CardHeader>
            <CardContent>
              {status.skippedHere.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Todas las skills instaladas aplican a este host.
                </p>
              ) : (
                <ul className="grid gap-1 font-mono text-[13px] text-foreground/80">
                  {status.skippedHere.map((slug) => (
                    <li key={slug}>{slug}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
