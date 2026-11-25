import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface LegalPageProps {
  title: string;
  /** Fecha de la última revisión del texto, si se quiere mostrar. */
  updatedAt?: string;
  children: ReactNode;
}

/** Plantilla común de los textos legales: tipografía, anchura de lectura y espaciado. */
export function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <article className="mx-auto max-w-4xl px-6 pb-20 pt-40 leading-relaxed">
      <h1 className="mb-8 text-3xl font-semibold text-gold-700">{title}</h1>
      {updatedAt && (
        <p className="-mt-4 mb-8 text-sm text-muted">Última actualización: {updatedAt}</p>
      )}
      <div className="space-y-10">{children}</div>
    </article>
  );
}

interface LegalSectionProps {
  title: string;
  children: ReactNode;
  /** Resalta la sección con un recuadro. */
  highlighted?: boolean;
}

export function LegalSection({ title, children, highlighted = false }: LegalSectionProps) {
  return (
    <section
      className={cn(
        "space-y-3",
        highlighted && "rounded-r-md border-l-4 border-gold-300 bg-sand-50 p-6",
      )}
    >
      <h2 className="text-xl font-semibold text-gold-700">{title}</h2>
      {children}
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-6">{children}</ul>;
}
