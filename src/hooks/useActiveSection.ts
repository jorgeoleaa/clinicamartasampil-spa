import { useEffect, useState } from "react";

interface Options {
  /** Refleja la sección visible en el hash de la URL (sin crear entradas de historial). */
  syncHash?: boolean;
}

/**
 * Devuelve el id de la sección que cruza una franja estrecha en el centro de la pantalla.
 * Usar una franja (en lugar de un umbral sobre la altura de la sección) hace que funcione
 * igual con secciones muy altas, que con un `threshold` nunca llegarían a activarse.
 */
export function useActiveSection<T extends string>(
  ids: readonly T[],
  { syncHash = false }: Options = {},
): T | undefined {
  const [active, setActive] = useState<T>();
  const idsKey = ids.join("|");

  useEffect(() => {
    const sectionIds = idsKey.split("|") as T[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id as T;
          setActive(id);

          if (syncHash) {
            const url = id === sectionIds[0] ? window.location.pathname : `#${id}`;
            // Se conserva history.state: React Router guarda ahí su índice de navegación
            window.history.replaceState(window.history.state, "", url);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [idsKey, syncHash]);

  return active;
}
