import { type ComponentType } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { routes } from "@/config/navigation";
import HomePage from "@/features/home/HomePage";
import { ErrorPage } from "./ErrorPage";
import { RootLayout, type LayoutRouteHandle } from "./RootLayout";

/** Carga diferida de una página: su código solo se descarga al visitarla. */
const lazyPage = (load: () => Promise<{ default: ComponentType }>) => async () => ({
  Component: (await load()).default,
});

export const appRoutes: RouteObject[] = [
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    // Sin SSR no hay nada que hidratar; evita el aviso de React Router con rutas lazy
    HydrateFallback: () => null,
    children: [
      // La portada va en el bundle principal: es la página de entrada más habitual
      { path: routes.home, element: <HomePage /> },
      {
        path: routes.about,
        lazy: lazyPage(() => import("@/features/about/AboutPage")),
        handle: { title: "Sobre mí", navSection: "sobre-mi" } satisfies LayoutRouteHandle,
      },
      {
        path: routes.privacy,
        lazy: lazyPage(() => import("@/features/legal/PrivacyPolicyPage")),
        handle: { title: "Política de privacidad" } satisfies LayoutRouteHandle,
      },
      {
        path: routes.cookies,
        lazy: lazyPage(() => import("@/features/legal/CookiePolicyPage")),
        handle: { title: "Política de cookies" } satisfies LayoutRouteHandle,
      },
      {
        path: routes.legalNotice,
        lazy: lazyPage(() => import("@/features/legal/LegalNoticePage")),
        handle: { title: "Aviso legal" } satisfies LayoutRouteHandle,
      },
      {
        path: "*",
        lazy: lazyPage(() => import("./NotFoundPage")),
        handle: { title: "Página no encontrada" } satisfies LayoutRouteHandle,
      },
    ],
  },
];

export const router = createBrowserRouter(appRoutes);
