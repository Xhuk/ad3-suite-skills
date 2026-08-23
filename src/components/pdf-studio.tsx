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

type StudioStatus = "idle" | "loading" | "ready" | "error";

export function PdfStudio() {
  const [doc, setDoc] = useState<PdfDocument>(() => sampleDocument("propuesta"));
  const [status, setStatus] = useState<StudioStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  const canSubmit = useMemo(
    () => doc.title.trim().length > 0 && doc.issuerName.trim().length > 0,
    [doc.issuerName, doc.title]
  );

  function patch(partial: Partial<PdfDocument>) {
    setDoc((current) => ({ ...current, ...partial }));
  }

  const previewUrl = pdfUrl ?? `/api/pdf?kind=${doc.kind}`;

  async function generate(payload: PdfDocument) {
    setStatus("loading");
    setError(null);
    try {
      const response = await fetch("/api/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error ?? "No se pudo generar el PDF.");
      }
      const blob = await response.blob();
      const nextUrl = URL.createObjectURL(blob);
      setPdfUrl((previous) => {
        if (previous) {
          URL.revokeObjectURL(previous);
        }
        return nextUrl;
      });
      setStatus("ready");
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "Error al generar.");
    }
  }

  function switchKind(kind: DocumentKind) {
    setDoc(sampleDocument(kind));
    setPdfUrl((previous) => {
      if (previous) {
        URL.revokeObjectURL(previous);
      }
      return null;
    });
    setStatus("ready");
    setError(null);
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
      <form
        className="space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          void generate(doc);
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
          {doc.sections.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Sin secciones. El PDF llevará título, apertura y, si hay, la
              tabla.
            </p>
          ) : (
            doc.sections.map((section, index) => (
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
                <button
                  type="button"
                  className="text-xs text-muted-foreground hover:text-foreground"
                  onClick={() =>
                    patch({
                      sections: doc.sections.filter((_, item) => item !== index),
                    })
                  }
                >
                  Quitar
                </button>
              </div>
            ))
          )}
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
            <div key={`item-${index}`} className="grid grid-cols-[1fr_7rem_auto] gap-2">
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
              <button
                type="button"
                className="text-xs text-muted-foreground hover:text-foreground"
                onClick={() =>
                  patch({
                    items: doc.items.filter((_, itemIndex) => itemIndex !== index),
                  })
                }
              >
                Quitar
              </button>
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

        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Firma izquierda">
            <Input
              value={doc.leftSignName}
              onChange={(event) => patch({ leftSignName: event.target.value })}
              placeholder="Nombre"
            />
            <Input
              className="mt-2"
              value={doc.leftSignRole}
              onChange={(event) => patch({ leftSignRole: event.target.value })}
              placeholder="Cargo"
            />
          </Field>
          <Field label="Firma derecha">
            <Input
              value={doc.rightSignName}
              onChange={(event) => patch({ rightSignName: event.target.value })}
              placeholder="Nombre"
            />
            <Input
              className="mt-2"
              value={doc.rightSignRole}
              onChange={(event) => patch({ rightSignRole: event.target.value })}
              placeholder="Cargo"
            />
          </Field>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button type="submit" disabled={!canSubmit || status === "loading"}>
            {status === "loading" ? "Generando…" : "Generar PDF"}
          </Button>
          <a href={previewUrl} download={`${doc.folio || "documento"}.pdf`}>
            <Button type="button" variant="outline">
              Descargar
            </Button>
          </a>
        </div>
        {!canSubmit ? (
          <p className="text-sm text-muted-foreground">
            Faltan el título o quién emite.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-destructive">{error}</p>
        ) : null}
      </form>

      <section className="min-h-[32rem] overflow-hidden rounded-2xl bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] ring-foreground/6">
        {status === "error" ? (
          <div className="flex h-[32rem] flex-col items-center justify-center gap-2 px-6 text-center">
            <p className="font-heading text-2xl">No se pudo generar</p>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              {error}
            </p>
          </div>
        ) : status === "loading" ? (
          <div className="flex h-[32rem] items-center justify-center px-6 text-sm text-muted-foreground">
            Compilando con Typst…
          </div>
        ) : (
          <iframe
            title="Vista previa del PDF"
            src={previewUrl}
            className="h-[min(80vh,52rem)] w-full bg-white"
          />
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
