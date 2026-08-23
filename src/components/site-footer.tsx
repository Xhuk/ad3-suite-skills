export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-foreground/6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs leading-5 text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          AD3 no sustituye sus skills. Este pack las pone a la mano para
          mejorar la respuesta.
        </p>
        <p>
          Craft:{" "}
          <a
            href="https://github.com/emilkowalski/skills"
            className="text-foreground underline decoration-foreground/25 underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Emil Kowalski
          </a>
          {" · "}
          <a
            href="https://github.com/Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations/blob/main/skills/ui-ux-polish/SKILL.md"
            className="text-foreground underline decoration-foreground/25 underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            ui-ux-polish
          </a>
        </p>
      </div>
    </footer>
  );
}
