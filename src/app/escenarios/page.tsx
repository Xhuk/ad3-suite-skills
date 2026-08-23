import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { SkillScenariosLists } from "@/components/skill-scenarios";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { catalog, kindLabel, kindTone } from "@/lib/catalog";
import { confusionPairs, scenariosFor } from "@/lib/scenarios";

export const metadata = {
  title: "Escenarios · AD3",
  description:
    "Cuándo abrir cada skill del suite y cuándo no, para que el agente no las mezcle.",
};

export default function EscenariosPage() {
  return (
    <>
      <SiteHeader active="/escenarios" />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14">
        <section className="animate-enter max-w-2xl space-y-3">
          <p className="text-xs tracking-[0.18em] text-primary uppercase">
            Escenarios
          </p>
          <h1 className="font-heading text-4xl leading-tight">
            Cada skill tiene un momento. Si no es ese, no la abras.
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            Las siete maestras van en cadena. El oficio es satélite. Esta
            página es la tabla de “abre / no abras” para que un agente no
            confunda{" "}
            <Link
              href="/skills/animate"
              className="text-foreground underline decoration-foreground/25 underline-offset-4"
            >
              animate
            </Link>{" "}
            con{" "}
            <Link
              href="/skills/animate-expo"
              className="text-foreground underline decoration-foreground/25 underline-offset-4"
            >
              animate-expo
            </Link>
            , ni polish con un rediseño.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl">Si pensabas abrir A, abre B</h2>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Confusiones habituales. El slug de la derecha es el que corresponde
            al escenario.
          </p>
          <div className="overflow-x-auto rounded-2xl bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)]">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="text-xs tracking-wide text-muted-foreground uppercase">
                <tr className="border-b border-foreground/8">
                  <th className="px-4 py-3 font-medium">Pensabas abrir</th>
                  <th className="px-4 py-3 font-medium">Abre en realidad</th>
                  <th className="px-4 py-3 font-medium">Porque</th>
                </tr>
              </thead>
              <tbody>
                {confusionPairs.map((pair) => (
                  <tr
                    key={`${pair.mistaken}-${pair.actual}-${pair.why}`}
                    className="border-b border-foreground/6 last:border-0"
                  >
                    <td className="px-4 py-3 align-top">
                      <SlugLink slug={pair.mistaken} />
                    </td>
                    <td className="px-4 py-3 align-top">
                      <SlugLink slug={pair.actual} />
                    </td>
                    <td className="px-4 py-3 align-top leading-6 text-foreground/85">
                      {pair.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <ol className="grid gap-3">
          {catalog.map((skill, index) => {
            const data = scenariosFor(skill.slug);
            return (
              <li
                key={skill.slug}
                id={skill.slug}
                className="animate-enter scroll-mt-20"
                style={{ animationDelay: `${Math.min(index, 10) * 30}ms` }}
              >
                <Card className="bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] ring-foreground/6">
                  <CardHeader className="gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant={kindTone(skill.kind)}>
                        {kindLabel[skill.kind]}
                      </Badge>
                      <Link href={`/skills/${skill.slug}`}>
                        <CardTitle className="font-mono text-base">
                          {skill.name}
                        </CardTitle>
                      </Link>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {skill.summary}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <SkillScenariosLists data={data} />
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ol>
      </main>
    </>
  );
}

function SlugLink({ slug }: { slug: string }) {
  return (
    <Link href={`/skills/${slug}`}>
      <Badge variant="outline" className="font-mono">
        {slug}
      </Badge>
    </Link>
  );
}
