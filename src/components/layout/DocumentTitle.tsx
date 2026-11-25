import { useEffect } from "react";
import { useMatches } from "react-router-dom";
import { site } from "@/config/site";

export interface RouteHandle {
  /** Título de la pestaña para la ruta. */
  title?: string;
}

const DEFAULT_TITLE = `${site.name} · ${site.address.city}`;

/** Fija el título de la pestaña a partir del `handle.title` de la ruta más profunda que lo defina. */
export function DocumentTitle() {
  const matches = useMatches();
  const title = matches
    .map((m) => (m.handle as RouteHandle | undefined)?.title)
    .filter(Boolean)
    .at(-1);

  useEffect(() => {
    document.title = title ? `${title} · ${site.doctor}` : DEFAULT_TITLE;
  }, [title]);

  return null;
}
