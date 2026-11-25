import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors";

const variants = {
  primary: "bg-gold-600 text-white hover:bg-gold-700",
  secondary: "border border-sand-200 bg-white text-ink hover:bg-sand-50",
} as const;

const sizes = {
  md: "px-6 py-3",
  sm: "px-5 py-2.5",
} as const;

interface ButtonStyleOptions {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}

/**
 * Clases de botón reutilizables. Se aplican a cualquier elemento (`<button>`, `<a>`, `<Link>`)
 * para que cada uno conserve su semántica: navegar es un enlace, actuar es un botón.
 */
export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyleOptions = {}): string {
  return cn(base, variants[variant], sizes[size], className);
}
