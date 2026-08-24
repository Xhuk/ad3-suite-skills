import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Generar" },
  { href: "/documentos", label: "Ejemplos" },
  { href: "/catalogo", label: "Suite" },
] as const;

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-foreground/6 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-primary">AD3</span>
          <span className="text-xs text-muted-foreground">PDFs</span>
        </Link>
        <nav className="-mx-1 flex items-center gap-1 overflow-x-auto">
          {links.map((link) => {
            const isActive = link.href === active;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "text-muted-foreground",
                  isActive && "bg-muted text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
