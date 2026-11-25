import { MapPin } from "lucide-react";
import { useState } from "react";
import { buttonStyles } from "@/components/ui/button";
import { site } from "@/config/site";

/**
 * Mapa de Google bajo demanda: el iframe instala cookies de terceros, así que no se carga
 * hasta que el visitante lo pide (coherente con la política de cookies).
 */
export function MapEmbed() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mt-8 rounded-lg border border-sand-200 bg-white p-3 sm:p-6">
      {visible ? (
        <iframe
          title="Ubicación de la clínica en Google Maps"
          src={site.map.embedSrc}
          className="block h-80 w-full border-0 sm:h-[400px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-80 flex-col items-center justify-center gap-4 rounded bg-sand-50 px-4 text-center sm:h-[400px]">
          <MapPin className="size-8 text-gold-700" aria-hidden />
          <p className="max-w-xs font-medium">{site.address.full}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setVisible(true)}
              className={buttonStyles({ size: "sm" })}
            >
              Mostrar mapa
            </button>
            <a
              href={site.map.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles({ variant: "secondary", size: "sm" })}
            >
              Abrir en Google Maps
            </a>
          </div>
          <p className="max-w-sm text-xs text-muted">
            Al mostrar el mapa se cargará contenido de Google, que puede instalar sus propias
            cookies.
          </p>
        </div>
      )}
    </div>
  );
}
