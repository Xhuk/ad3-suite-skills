import Link from "next/link";

import { scenariosFor, type SkillScenarios } from "@/lib/scenarios";

export function SkillScenariosBlock({
  slug,
  compact = false,
}: {
  slug: string;
  compact?: boolean;
}) {
  const data = scenariosFor(slug);
  if (data.use.length === 0 && data.skip.length === 0) {
    return null;
  }

  if (compact) {
    return (
      <div className="space-y-2 text-[13px] leading-6">
        <p>
          <span className="text-muted-foreground">Ábrela si: </span>
          {data.use[0]}
        </p>
        <p className="text-muted-foreground">
          No la abras si: {data.skip[0]}
        </p>
      </div>
    );
  }

  return <SkillScenariosLists data={data} />;
}

export function SkillScenariosLists({ data }: { data: SkillScenarios }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <ScenarioList
        title="Ábrela cuando"
        items={data.use}
        tone="use"
      />
      <ScenarioList
        title="No la abras cuando"
        items={data.skip}
        tone="skip"
      />
    </div>
  );
}

function ScenarioList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "use" | "skip";
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <p className="text-xs tracking-wide text-muted-foreground uppercase">
        {title}
      </p>
      <ul className="mt-2 space-y-2 text-sm leading-6">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span
              aria-hidden
              className={
                tone === "use"
                  ? "mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                  : "mt-2 size-1.5 shrink-0 rounded-full bg-foreground/25"
              }
            />
            <span>{linkifySlugs(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const slugPattern =
  /\b(ad3-[a-z-]+|emil-design-eng|animate-expo|review-animations|improve-animations|find-animation-opportunities|animation-vocabulary|apple-design|pick-ui-library|ask-sonner|write-swift|ui-ux-polish|animate|prototype)\b/g;

function linkifySlugs(text: string) {
  const parts: Array<string | { slug: string }> = [];
  let last = 0;
  for (const match of text.matchAll(slugPattern)) {
    const index = match.index ?? 0;
    if (index > last) {
      parts.push(text.slice(last, index));
    }
    parts.push({ slug: match[0] });
    last = index + match[0].length;
  }
  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return parts.map((part, index) => {
    if (typeof part === "string") {
      return <span key={`t-${index}`}>{part}</span>;
    }
    return (
      <Link
        key={`${part.slug}-${index}`}
        href={`/skills/${part.slug}`}
        className="font-mono text-[12.5px] text-foreground underline decoration-foreground/25 underline-offset-3 hover:decoration-foreground/60"
      >
        {part.slug}
      </Link>
    );
  });
}
