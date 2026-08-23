"use client";

import { useMemo, useState, type FormEvent } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { assertNever } from "@/lib/catalog";
import type { ProposedSkill, SkillVerdict, SuiteStatus } from "@/lib/status-types";

const verdictLabel: Record<SkillVerdict, string> = {
  ready: "Instalada y aplica",
  missing: "No instalada",
  "not-applicable": "Instalada, no aplica aquí",
  "unknown-skill": "No está en el suite",
};

function verdictTone(
  verdict: SkillVerdict
): "default" | "secondary" | "outline" | "destructive" {
  switch (verdict) {
    case "ready":
      return "default";
    case "not-applicable":
      return "secondary";
    case "missing":
    case "unknown-skill":
      return "destructive";
    default: {
      return assertNever(verdict);
    }
  }
}

type SkillVerifierProps = {
  initial: SuiteStatus;
};

export function SkillVerifier({ initial }: SkillVerifierProps) {
  const [query, setQuery] = useState("ui-ux-polish, write-swift, skill-inventada");
  const [status, setStatus] = useState<SuiteStatus>(initial);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const proposed = status.proposed;

  const summary = useMemo(() => {
    if (proposed.length === 0) {
      return "Propón slugs para verificar si están instalados en este sistema.";
    }
    const ready = proposed.filter((item) => item.verdict === "ready").length;
    return `${ready} de ${proposed.length} propuestas listas para que AD3 las use.`;
  }, [proposed]);

  async function verify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/status?propose=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error("No se pudo verificar el suite.");
      }
      const next = (await response.json()) as SuiteStatus;
      setStatus(next);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Error de verificación.");
    } finally {
      setPending(false);
    }
  }

  return (
    <Card className="bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] ring-foreground/6">
      <CardHeader>
        <CardTitle className="text-lg">Verificar skills propuestas</CardTitle>
        <p className="text-sm leading-6 text-muted-foreground">{summary}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={(event) => void verify(event)} className="flex flex-col gap-2 sm:flex-row">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ui-ux-polish, animate, write-swift"
            aria-label="Skills propuestas"
          />
          <Button type="submit" disabled={pending}>
            {pending ? "Verificando…" : "Verificar"}
          </Button>
        </form>
        {error ? (
          <p className="text-sm text-destructive">{error}</p>
        ) : null}
        {proposed.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            AD3 no asume que una skill existe. Si no está en disco, la omite y
            sigue con las que sí están.
          </p>
        ) : (
          <ul className="space-y-2">
            {proposed.map((item) => (
              <ProposedRow key={item.slug} item={item} />
            ))}
          </ul>
        )}
        <p className="text-sm leading-6 text-foreground/80">{status.decision}</p>
      </CardContent>
    </Card>
  );
}

function ProposedRow({ item }: { item: ProposedSkill }) {
  return (
    <li className="flex flex-col gap-1 rounded-xl bg-foreground/4 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-mono text-sm">{item.slug}</p>
        {item.path ? (
          <p className="text-xs text-muted-foreground">{item.path}</p>
        ) : null}
      </div>
      <Badge variant={verdictTone(item.verdict)}>{verdictLabel[item.verdict]}</Badge>
    </li>
  );
}
