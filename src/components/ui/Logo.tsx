import { cn } from "@/lib/cn";

/** Logo de la clínica. Es decorativo (`alt=""`): siempre va acompañado del nombre en texto. */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/imgs/logo.webp"
      alt=""
      width={357}
      height={174}
      className={cn("w-auto shrink-0", className)}
    />
  );
}
