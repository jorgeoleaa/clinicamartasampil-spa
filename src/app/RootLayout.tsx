import { useState } from "react";
import { Outlet, useLocation, useMatches } from "react-router-dom";
import { DocumentTitle, type RouteHandle } from "@/components/layout/DocumentTitle";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollManager } from "@/components/layout/ScrollManager";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { routes, type HomeSectionId } from "@/config/navigation";
import type { LayoutContext } from "./layoutContext";

export interface LayoutRouteHandle extends RouteHandle {
  /** Sección del menú a resaltar de forma fija en esta ruta (p. ej. "sobre-mi" en /sobremi). */
  navSection?: HomeSectionId;
}

/** Estructura común de todas las páginas: cabecera, contenido, pie y botón de WhatsApp. */
export function RootLayout() {
  const { pathname } = useLocation();
  const matches = useMatches();
  // La página de inicio informa de la sección visible a través del contexto del Outlet
  const [homeSection, setHomeSection] = useState<HomeSectionId>();

  const routeNavSection = matches
    .map((m) => (m.handle as LayoutRouteHandle | undefined)?.navSection)
    .filter(Boolean)
    .at(-1);
  const activeSection = routeNavSection ?? (pathname === routes.home ? homeSection : undefined);

  const context: LayoutContext = { setActiveSection: setHomeSection };

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Saltar al contenido
      </a>
      <DocumentTitle />
      <ScrollManager />
      <Header activeSection={activeSection} />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Outlet context={context} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
