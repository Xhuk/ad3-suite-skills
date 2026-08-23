import { CopyButton } from "@/components/copy-button";
import { SiteHeader } from "@/components/site-header";
import { catalog, originNote } from "@/lib/catalog";

const agentBrief = `Eres un agente del suite AD3.

Tienes a la mano un pack de craft (Emil Kowalski + ui-ux-polish + ad3-craft-layer). Ese pack NO sustituye ninguna skill del suite. No reemplaza Stripe, Firebase, Azure, React Doctor, ni las skills de producto, datos o infra.

Úsalo así:
1. Resuelve la tarea con las skills de AD3 que ya corresponden.
2. Si la respuesta que verá el usuario incluye UI, motion, elección de componente, un review visual o una propuesta de pulido, lee .cursor/skills/ad3-craft-layer/SKILL.md.
3. Abre solo la skill de craft que indique esa tabla.
4. Pliega el criterio en la misma respuesta. No escribas un segundo informe de diseño.
5. Si el craft dice que no hay que animar, o que no hay que pulir porque la UI está rota, esa es la mejora.

Para reviews o propuestas de look & feel sobre una app que YA funciona: abre ui-ux-polish. No la uses para bugs ni para un rediseño desde cero. Si hay motion, combina con review-animations o emil-design-eng.

Catálogo local: GET /api/skills
Skill completa: GET /api/skills/:slug
Playbook: GET /api/playbook

Fuentes:
- https://github.com/emilkowalski/skills
- https://github.com/Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations/blob/main/skills/ui-ux-polish/SKILL.md`;

export const metadata = {
  title: "Para agentes · AD3 capa de oficio",
  description:
    "Cómo un agente de AD3 usa las skills de craft en reviews y propuestas, sin sustituir el resto del suite.",
};

export default function AgentsPage() {
  return (
    <>
      <SiteHeader active="/agents" />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14">
        <section className="animate-enter space-y-3">
          <p className="text-xs tracking-[0.18em] text-primary uppercase">
            Para agentes
          </p>
          <h1 className="font-heading text-4xl leading-tight">
            Tienen las skills a la mano. Siguen siendo agentes de AD3.
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            Copia el brief, o pega la URL de la API. El pack vive en{" "}
            <code className="rounded-md bg-foreground/6 px-1.5 py-0.5 font-mono text-[13px]">
              .cursor/skills
            </code>{" "}
            para descubrimiento local y en{" "}
            <code className="rounded-md bg-foreground/6 px-1.5 py-0.5 font-mono text-[13px]">
              /api/skills
            </code>{" "}
            para consulta HTTP.
          </p>
        </section>

        <section className="animate-enter space-y-3" style={{ animationDelay: "60ms" }}>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-medium">Brief para pegar en el agente</h2>
            <CopyButton text={agentBrief} label="Copiar brief" />
          </div>
          <pre className="overflow-x-auto rounded-2xl bg-foreground/4 px-4 py-4 font-mono text-[13px] leading-6 text-foreground/85 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]">
            {agentBrief}
          </pre>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">Endpoints</h2>
          <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
            <li>
              <code className="text-foreground">GET /api/skills</code> — catálogo
              con rol AD3, cuándo abrirla y qué no sustituye.
            </li>
            <li>
              <code className="text-foreground">GET /api/skills/:slug</code> —
              markdown completo y archivos extra (RECIPES, API, STANDARDS…).
            </li>
            <li>
              <code className="text-foreground">GET /api/playbook</code> —
              situaciones del suite y skills de craft asociadas.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">Pack a la mano ({catalog.length})</h2>
          <ul className="grid gap-1.5 font-mono text-[13px] text-foreground/80">
            {catalog.map((skill) => (
              <li key={skill.slug}>
                {skill.slug}
                {originNote(skill.origin)}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
