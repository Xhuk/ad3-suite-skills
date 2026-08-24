"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  documentKinds,
  kindLabel,
  sampleDocument,
  type DocumentKind,
  type PdfDocument,
} from "@/lib/pdf-document";
import { cn } from "@/lib/utils";

type StudioStatus = "ready" | "loading" | "error";

function templateQuery(kind: DocumentKind): string {
  if (kind === "nota") {
    return `kind=${kind}`;
  }
  return `template=${kind}`;
}

async function fetchPngPages(query: string, payload?: PdfDocument) {
  const url = `/api/pdf?${query}&format=png&page=1`;
  const first = await fetch(url, requestInit(payload));
  if (!first.ok) {
    const body = (await first.json().catch(() => null)) as { error?: string } | null;
    throw new Error(body?.error ?? "No se pudo armar la vista previa.");
  }
  const count = Number(first.headers.get("X-Pdf-Pages") ?? "1");
  const blobs = [await first.blob()];
  for (let page = 2; page <= Math.min(count, 8); page += 1) {
    const next = await fetch(`/api/pdf?${query}&format=png&page=${page}`, requestInit(payload));
    if (!next.ok) {
      break;
    }
    blobs.push(await next.blob());
  }
  return blobs.map((blob) => URL.createObjectURL(blob));
}

function requestInit(payload?: PdfDocument): RequestInit {
  if (!payload) {
    return {};
  }
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
}

function revokeAll(urls: string[]) {
  for (const url of urls) {
    URL.revokeObjectURL(url);
  }
}

export function PdfStudio() {
  const [doc, setDoc] = useState<PdfDocument>(() => sampleDocument("propuesta"));
  const [status, setStatus] = useState<StudioStatus>("ready");
  const [error, setError] = useState<string | null>(null);
  const [customPages, setCustomPages] = useState<string[] | null>(null);
  const [usingForm, setUsingForm] = useState(false);

  const canSubmit = useMemo(
    () => doc.title.trim().length > 0 && doc.issuerName.trim().length > 0,
    [doc.issuerName, doc.title]
  );

  const templatePages = useMemo(() => {
    const count = doc.kind === "nota" ? 2 : 3;
    return Array.from({ length: count }, (_, index) => {
      return `/api/pdf?${templateQuery(doc.kind)}&format=png&page=${index + 1}`;
    });
  }, [doc.kind]);

  const pages = customPages ?? templatePages;

  useEffect(() => {
    return () => {
      if (customPages) {
        revokeAll(customPages);
      }
    };
  }, [customPages]);

  function patch(partial: Partial<PdfDocument>) {
    setDoc((current) => ({ ...current, ...partial }));
  }

  function showTemplate() {
    setUsingForm(false);
    setError(null);
    setStatus("ready");
    setCustomPages((previous) => {
      if (previous) {
        revokeAll(previous);
      }
      return null;
    });
  }

  async function applyForm() {
    setStatus("loading");
    setError(null);
    setUsingForm(true);
    try {
      const next = await fetchPngPages("source=form", doc);
      setCustomPages((previous) => {
        if (previous) {
          revokeAll(previous);
        }
        return next;
      });
      setStatus("ready");
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "No se pudo generar.");
    }
  }

  async function downloadPdf() {
    setStatus("loading");
    setError(null);
    try {
      const response = usingForm
        ? await fetch("/api/pdf", requestInit(doc))
        : await fetch(`/api/pdf?${templateQuery(doc.kind)}`);
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error ?? "No se pudo descargar el PDF.");
      }
      const blob = await response.blob();
      if (blob.type.includes("json")) {
        throw new Error("El servidor no devolvió un PDF.");
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${doc.folio || "propuesta"}.pdf`;
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setStatus("ready");
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "No se pudo descargar.");
    }
  }

  function switchKind(kind: DocumentKind) {
    setDoc(sampleDocument(kind));
    showTemplate();
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
      <form
        className="space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          void applyForm();
        }}
      >
        <div className="flex flex-wrap gap-1.5">
          {documentKinds.map((kind) => (
            <button
              key={kind}
              type="button"
              onClick={() => switchKind(kind)}
              className={cn(
                "h-8 rounded-full px-3 text-xs transition-colors",
                doc.kind === kind
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/5 text-muted-foreground hover:text-foreground"
              )}
            >
              {kindLabel[kind]}
            </button>
          ))}
        </div>

        <p className="text-sm leading-6 text-muted-foreground">
          La propuesta comercial ya está compilada con la plantilla Typst
          editorial. Puedes descargarla tal cual o editar los campos y pulsar
          Aplicar.
        </p>

        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            onClick={() => void downloadPdf()}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Preparando…" : "Descargar PDF"}
          </Button>
          <Button type="submit" variant="outline" disabled={!canSubmit || status === "loading"}>
            Aplicar cambios
          </Button>
        </div>
        {status === "error" ? (
          <p className="text-sm text-destructive">{error}</p>
        ) : null}

        <Field label="Título">
          <Input
            value={doc.title}
            onChange={(event) => patch({ title: event.target.value })}
            required
          />
        </Field>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Folio">
            <Input
              value={doc.folio}
              onChange={(event) => patch({ folio: event.target.value })}
            />
          </Field>
          <Field label="Fecha">
            <Input
              value={doc.issued}
              onChange={(event) => patch({ issued: event.target.value })}
            />
          </Field>
        </div>
        <Field label="Marca en el encabezado">
          <Input
            value={doc.brand}
            onChange={(event) => patch({ brand: event.target.value })}
          />
        </Field>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="De">
            <Input
              value={doc.issuerName}
              onChange={(event) => patch({ issuerName: event.target.value })}
              required
            />
            <Input
              className="mt-2"
              value={doc.issuerDetail}
              onChange={(event) => patch({ issuerDetail: event.target.value })}
              placeholder="RFC o cargo"
            />
          </Field>
          <Field label="Para">
            <Input
              value={doc.recipientName}
              onChange={(event) => patch({ recipientName: event.target.value })}
            />
            <Input
              className="mt-2"
              value={doc.recipientDetail}
              onChange={(event) => patch({ recipientDetail: event.target.value })}
              placeholder="Área o RFC"
            />
          </Field>
        </div>
        <Field label="Párrafo de apertura">
          <TextArea
            value={doc.intro}
            onChange={(value) => patch({ intro: value })}
            rows={3}
          />
        </Field>
        <Field label="Nota (opcional)">
          <TextArea
            value={doc.note}
            onChange={(value) => patch({ note: value })}
            rows={2}
          />
        </Field>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              {doc.kind === "contrato" ? "Cláusulas" : "Secciones"}
            </p>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() =>
                patch({
                  sections: [...doc.sections, { heading: "", body: "" }],
                })
              }
            >
              Añadir
            </Button>
          </div>
          {doc.sections.map((section, index) => (
            <div
              key={`section-${index}`}
              className="space-y-2 rounded-xl bg-foreground/4 p-3"
            >
              <Input
                value={section.heading}
                placeholder="Encabezado"
                onChange={(event) => {
                  const sections = doc.sections.slice();
                  sections[index] = {
                    ...section,
                    heading: event.target.value,
                  };
                  patch({ sections });
                }}
              />
              <TextArea
                value={section.body}
                rows={3}
                placeholder="Texto. Usa - al inicio de línea para viñetas."
                onChange={(value) => {
                  const sections = doc.sections.slice();
                  sections[index] = { ...section, body: value };
                  patch({ sections });
                }}
              />
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              Montos (MXN)
            </p>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() =>
                patch({
                  items: [...doc.items, { concept: "", amount: 0 }],
                })
              }
            >
              Añadir
            </Button>
          </div>
          {doc.items.map((item, index) => (
            <div key={`item-${index}`} className="grid grid-cols-[1fr_7rem] gap-2">
              <Input
                value={item.concept}
                placeholder="Concepto"
                onChange={(event) => {
                  const items = doc.items.slice();
                  items[index] = { ...item, concept: event.target.value };
                  patch({ items });
                }}
              />
              <Input
                type="number"
                min={0}
                step="0.01"
                value={Number.isFinite(item.amount) ? item.amount : 0}
                onChange={(event) => {
                  const items = doc.items.slice();
                  items[index] = {
                    ...item,
                    amount: Number(event.target.value),
                  };
                  patch({ items });
                }}
              />
            </div>
          ))}
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={doc.includeTax}
              onChange={(event) => patch({ includeTax: event.target.checked })}
            />
            Sumar IVA federal 16 %
          </label>
        </div>
      </form>

      <section className="space-y-3">
        {status === "error" ? (
          <div className="flex h-[28rem] flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 text-center">
            <p className="font-heading text-2xl">No se pudo generar</p>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              {error}
            </p>
          </div>
        ) : status === "loading" ? (
          <div className="flex h-[28rem] items-center justify-center rounded-2xl border border-border bg-card text-sm text-muted-foreground">
            Compilando la propuesta con Typst…
          </div>
        ) : (
          pages.map((page, index) => (
            <img
              key={page}
              src={page}
              alt={`Página ${index + 1} de ${kindLabel[doc.kind]}`}
              className="w-full rounded-2xl border border-border bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ))
        )}
      </section>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}

function TextArea({
  value,
  onChange,
  rows,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  rows: number;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      rows={rows}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className="w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
    />
  );
}
