import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { SkillCatalog } from "@/components/skill-catalog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <SiteHeader active="/" />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-4 py-10 sm:px-6 sm:py-14">
        <section className="animate-enter max-w-3xl space-y-5">
          <p className="text-xs tracking-[0.18em] text-primary uppercase">
            Suite AD3 · no sustituye, acompaña
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] text-balance sm:text-5xl">
            Oficio a la mano, para que AD3 mejore su propia respuesta.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground text-pretty">
            Las skills de{" "}
            <a
              href="https://github.com/emilkowalski/skills"
              className="text-foreground underline decoration-foreground/25 underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              Emil Kowalski
            </a>{" "}
            y{" "}
            <a
              href="https://github.com/Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations/blob/main/skills/ui-ux-polish/SKILL.md"
              className="text-foreground underline decoration-foreground/25 underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              ui-ux-polish
            </a>{" "}
            no reemplazan Stripe, datos, infra, React Doctor ni ninguna otra
            pieza del suite. Viven al lado. Cuando AD3 ya sabe qué responder,
            revisar o proponer, abre la skill de craft justa y sube el listón
            de esa misma respuesta.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/playbook"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Ver el playbook
            </Link>
            <Link
              href="/sistema"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Ver este sistema
            </Link>
          </div>
        </section>

        <SkillCatalog />
      </main>
    </>
  );
}
