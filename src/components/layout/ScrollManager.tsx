import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Gestiona el scroll en cada navegación:
 * - Atrás/adelante (POP): no hace nada; el navegador restaura la posición.
 * - Con hash (/#galeria): lleva a esa sección. Suave dentro de la misma página;
 *   instantáneo si venimos de otra, para evitar el recorrido arriba → abajo.
 * - Sin hash: vuelve al principio.
 * Depende de `key` para que pulsar dos veces el mismo enlace también desplace.
 */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const samePage = previousPathname.current === pathname;
    previousPathname.current = pathname;
    if (navigationType === "POP" && key !== "default") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = samePage && !reducedMotion ? "smooth" : "instant";
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;

    if (target) target.scrollIntoView({ behavior });
    else window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, key, navigationType]);

  return null;
}
