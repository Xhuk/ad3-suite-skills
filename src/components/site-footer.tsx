export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-foreground/6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs leading-5 text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          AD3 no sustituye sus skills. Este pack las pone a la mano para
          mejorar la respuesta.
        </p>
        <p>
          Craft upstream:{" "}
          <a
            href="https://github.com/emilkowalski/skills"
            className="text-foreground underline decoration-foreground/25 underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            emilkowalski/skills
          </a>{" "}
          · MIT ·{" "}
          <a
            href="https://emilkowal.ski/ui/agents-with-taste"
            className="text-foreground underline decoration-foreground/25 underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Agents with Taste
          </a>
        </p>
      </div>
    </footer>
  );
}
