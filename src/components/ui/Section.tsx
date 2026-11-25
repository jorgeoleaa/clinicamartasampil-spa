import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

const tones = {
  white: "bg-white",
  sand: "bg-sand-50",
} as const;

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  tone?: keyof typeof tones;
}

/** Sección de página. `scroll-mt-20` evita que la cabecera fija tape el título al saltar a ella. */
export function Section({ tone = "white", className, ...props }: SectionProps) {
  return (
    <section className={cn("scroll-mt-20 py-16 md:py-20", tones[tone], className)} {...props} />
  );
}

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("container mx-auto px-5", className)} {...props} />;
}

interface SectionHeadingProps {
  title: ReactNode;
  kicker?: string;
  description?: ReactNode;
  /** Línea decorativa bajo el título. */
  divider?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  kicker,
  description,
  divider = false,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("mb-10 text-center", className)}>
      {kicker && (
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-700">{kicker}</p>
      )}
      <h2 className="mt-2 text-3xl font-medium md:text-4xl">{title}</h2>
      {description && <p className="mx-auto mt-3 max-w-2xl text-muted">{description}</p>}
      {divider && <hr className="mx-auto mt-4 w-24 border-t border-gold-300" />}
    </header>
  );
}
