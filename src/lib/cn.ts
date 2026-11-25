import { twMerge } from "tailwind-merge";

type ClassValue = string | false | null | undefined;

/**
 * Une clases de CSS descartando los valores falsy y resolviendo conflictos de Tailwind:
 * `cn("px-6 w-auto", "px-5 w-44")` → `"px-5 w-44"` (gana la última, como se espera al
 * sobrescribir los estilos por defecto de un componente).
 */
export function cn(...classes: ClassValue[]): string {
  return twMerge(classes.filter(Boolean).join(" "));
}
