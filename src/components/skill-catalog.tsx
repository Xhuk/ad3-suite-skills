"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SkillScenariosBlock } from "@/components/skill-scenarios";
import {
  catalog,
  kindLabel,
  kindTone,
  originLabel,
  skillKinds,
  type CatalogSkill,
  type SkillKind,
} from "@/lib/catalog";
import { scenariosFor } from "@/lib/scenarios";
import { cn } from "@/lib/utils";

const allFilter = "all" as const;

type KindFilter = typeof allFilter | SkillKind;

function matchesQuery(skill: CatalogSkill, query: string): boolean {
  const extra = scenariosFor(skill.slug);
  const haystack = [
    skill.name,
    skill.summary,
    skill.improves,
    skill.when,
    skill.doesNotReplace,
    kindLabel[skill.kind],
    ...extra.use,
    ...extra.skip,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

export function SkillCatalog() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<KindFilter>(allFilter);

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return catalog.filter((skill) => {
      if (kind !== allFilter && skill.kind !== kind) {
        return false;
      }
      if (!normalized) {
        return true;
      }
      return matchesQuery(skill, normalized);
    });
  }, [kind, query]);

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por escenario: toast, PR, Expo, rediseño…"
          aria-label="Buscar skills"
          className="sm:max-w-sm"
        />
        <p className="text-xs text-muted-foreground sm:ml-auto">
          {visible.length} de {catalog.length} skills a la mano
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        <FilterChip
          active={kind === allFilter}
          onClick={() => setKind(allFilter)}
          label="Todas"
        />
        {skillKinds.map((item) => (
          <FilterChip
            key={item}
            active={kind === item}
            onClick={() => setKind(item)}
            label={kindLabel[item]}
          />
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="rounded-2xl bg-card px-5 py-10 text-center shadow-[0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.28)]">
          <p className="font-heading text-xl">Nada coincide</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            AD3 no inventa una skill nueva para rellenar el hueco. Ajusta el
            término o abre el playbook para ver qué archivo abrir según la
            respuesta que estés escribiendo.
          </p>
          <Link
            href="/playbook"
            className="mt-4 inline-flex text-sm text-foreground underline decoration-foreground/25 underline-offset-4"
          >
            Ir al playbook
          </Link>
        </div>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {visible.map((skill, index) => (
            <li
              key={skill.slug}
              className="animate-enter"
              style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
            >
              <SkillCard skill={skill} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-7 rounded-full px-2.5 text-xs transition-[background-color,color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
        active
          ? "bg-primary text-primary-foreground"
          : "bg-foreground/5 text-muted-foreground hover:bg-foreground/8 hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}

function SkillCard({ skill }: { skill: CatalogSkill }) {
  const tone = kindTone(skill.kind);

  return (
    <Link href={`/skills/${skill.slug}`} className="block h-full">
      <Card className="h-full bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] ring-foreground/6 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(255,255,255,0.06),0_24px_50px_rgba(0,0,0,0.3)]">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant={tone}>{kindLabel[skill.kind]}</Badge>
            <Badge variant="outline">{originLabel(skill.origin)}</Badge>
            {skill.invocation === "explicit" ? (
              <Badge variant="ghost">Invocación explícita</Badge>
            ) : null}
          </div>
          <CardTitle className="mt-2 font-mono text-[15px]">{skill.name}</CardTitle>
          <CardDescription className="text-[13px] leading-6">
            {skill.summary}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-[13px] leading-6">
          <p>
            <span className="text-muted-foreground">Mejora la respuesta: </span>
            {skill.improves}
          </p>
          <SkillScenariosBlock slug={skill.slug} compact />
          <p className="text-muted-foreground">
            No sustituye: {skill.doesNotReplace}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
