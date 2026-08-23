import Link from "next/link";
import { notFound } from "next/navigation";

import { CopyButton } from "@/components/copy-button";
import { SiteHeader } from "@/components/site-header";
import { SkillMarkdown } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { kindLabel, kindTone } from "@/lib/catalog";
import { listSkillSlugs, loadSkill } from "@/lib/skills";
import { cn } from "@/lib/utils";

type SkillPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listSkillSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SkillPageProps) {
  const { slug } = await params;
  const skill = loadSkill(slug);
  if (!skill) {
    return { title: "Skill no encontrada · AD3" };
  }

  return {
    title: `${skill.meta.name} · AD3 capa de oficio`,
    description: skill.meta.improves,
  };
}

export default async function SkillPage({ params }: SkillPageProps) {
  const { slug } = await params;
  const skill = loadSkill(slug);

  if (!skill) {
    notFound();
  }

  const { meta, files } = skill;
  const main = files.find((file) => file.name === "SKILL.md");
  const extras = files.filter((file) => file.name !== "SKILL.md");
  const brief = [
    `Skill: ${meta.name}`,
    `Origen: ${meta.origin === "ad3" ? "AD3" : "Emil Kowalski"}`,
    `Cuándo: ${meta.when}`,
    `Qué mejora en la respuesta: ${meta.improves}`,
    `No sustituye: ${meta.doesNotReplace}`,
    "",
    "Úsala para mejorar la respuesta que AD3 ya iba a dar. No reemplaza otras skills del suite.",
  ].join("\n");

  return (
    <>
      <SiteHeader active="/" />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
        <div className="animate-enter space-y-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-foreground"
          >
            ← Catálogo
          </Link>
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant={kindTone(meta.kind)}>{kindLabel[meta.kind]}</Badge>
            <Badge variant="outline">
              {meta.origin === "ad3" ? "AD3" : "Emil Kowalski"}
            </Badge>
            {meta.invocation === "explicit" ? (
              <Badge variant="ghost">Invocación explícita</Badge>
            ) : null}
          </div>
          <h1 className="font-heading text-4xl">{meta.name}</h1>
          <p className="text-base leading-7 text-muted-foreground">
            {meta.summary}
          </p>
        </div>

        <section className="animate-enter grid gap-4 rounded-2xl bg-card/80 p-5 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] sm:grid-cols-2">
          <div>
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              Cómo mejora una respuesta de AD3
            </p>
            <p className="mt-2 text-sm leading-6">{meta.improves}</p>
          </div>
          <div>
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              No sustituye
            </p>
            <p className="mt-2 text-sm leading-6">{meta.doesNotReplace}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              Ábrela cuando
            </p>
            <p className="mt-2 text-sm leading-6">{meta.when}</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:col-span-2">
            <CopyButton text={brief} label="Copiar nota para el agente" />
            <Link
              href={`/api/skills/${meta.slug}`}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              JSON de la API
            </Link>
          </div>
        </section>

        {main ? (
          <article className="animate-enter">
            <SkillMarkdown markdown={main.markdown} />
          </article>
        ) : (
          <p className="text-sm text-muted-foreground">
            Esta skill no tiene SKILL.md en disco. Revisa{" "}
            <code>.cursor/skills/{meta.slug}</code>.
          </p>
        )}

        {extras.length > 0
          ? extras.map((file) => (
              <section key={file.name} className="space-y-3">
                <h2 className="font-mono text-sm text-muted-foreground">
                  {file.name}
                </h2>
                <SkillMarkdown markdown={file.markdown} />
              </section>
            ))
          : null}
      </main>
    </>
  );
}
