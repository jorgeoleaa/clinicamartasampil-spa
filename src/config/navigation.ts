/** Rutas de la aplicación. Las URLs se mantienen en español por SEO y para no romper enlaces. */
export const routes = {
  home: "/",
  about: "/sobremi",
  privacy: "/politica-privacidad",
  cookies: "/politica-cookies",
  legalNotice: "/aviso-legal",
} as const;

/** Secciones de la página de inicio enlazadas desde el menú principal. */
export const homeSections = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "galeria", label: "Galería" },
  { id: "pedir-cita", label: "Pedir cita" },
] as const;

export type HomeSectionId = (typeof homeSections)[number]["id"];

export const legalLinks = [
  { to: routes.privacy, label: "Política de privacidad" },
  { to: routes.legalNotice, label: "Aviso legal" },
  { to: routes.cookies, label: "Política de cookies" },
] as const;

/** Enlace a una sección de la página de inicio, válido desde cualquier página. */
export const toHomeSection = (id: HomeSectionId) => ({ pathname: routes.home, hash: `#${id}` });
