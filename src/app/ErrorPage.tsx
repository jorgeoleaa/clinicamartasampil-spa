import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import { buttonStyles } from "@/components/ui/button";
import { site } from "@/config/site";

/**
 * Se muestra si falla el renderizado o la carga de una ruta (p. ej. un chunk que no se pudo
 * descargar tras un despliegue). Es autónoma a propósito: no depende del layout, que podría
 * ser justo lo que ha fallado.
 */
export function ErrorPage() {
  const error = useRouteError();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-sand-50 px-6 text-center">
      <h1 className="mb-4 text-3xl font-semibold">Algo no ha ido bien</h1>
      <p className="mb-8 max-w-md text-muted">
        No hemos podido cargar la página. Prueba a recargarla; si el problema continúa, puedes
        llamarnos al{" "}
        <a href={site.phone.href} className="whitespace-nowrap font-medium text-gold-700">
          {site.phone.display}
        </a>
        .
      </p>
      {/* Enlace normal (recarga completa) para recuperar un estado limpio */}
      <a href="/" className={buttonStyles()}>
        Volver al inicio
      </a>
    </main>
  );
}
