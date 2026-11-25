# Clínica Oftalmológica Dra. Marta Sampil

Web de la clínica oftalmológica de la Dra. Marta Sampil en Monforte de Lemos (Lugo):
[clinicamartasampil.com](https://clinicamartasampil.com).

SPA estática construida con **React 19**, **TypeScript**, **React Router 7**, **Tailwind CSS 3** y **Vite 7**.

## Requisitos

- Node.js ≥ 20.19 (la versión de referencia está en [`.nvmrc`](.nvmrc): `nvm use`)

## Scripts

| Comando           | Descripción                                                   |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo (`--host` para abrirlo desde el móvil) |
| `npm run build`   | Chequeo de tipos y build de producción en `dist/`             |
| `npm run preview` | Sirve `dist/` en local, igual que en producción               |
| `npm test`        | Tests (Vitest + Testing Library)                              |
| `npm run lint`    | ESLint, incluidas reglas de accesibilidad (`jsx-a11y`)        |
| `npm run format`  | Formatea con Prettier (ordena también las clases de Tailwind) |
| `npm run check`   | Todo lo anterior salvo el build; es lo que ejecuta la CI      |

## Estructura

```
src/
├── app/          # Enrutado, layout raíz, páginas de error y 404
├── components/
│   ├── layout/   # Cabecera, pie, botón de WhatsApp, gestión de scroll y título
│   └── ui/       # Primitivas reutilizables (estilos de botón, Section, Logo)
├── config/       # Datos de la clínica (site.ts) y navegación: única fuente de verdad
├── content/      # Textos y listados (galería, formación, experiencia)
├── features/     # Páginas agrupadas por funcionalidad: home, about, legal
├── hooks/        # Lógica reutilizable (carrusel, sección activa, media queries)
├── lib/          # Utilidades sin dependencias de React
├── styles/       # CSS global y tokens de color
└── test/         # Configuración del entorno de tests
```

Convenciones:

- **Datos de contacto, horario y registro sanitario** se editan solo en
  [`src/config/site.ts`](src/config/site.ts). Los datos estructurados para buscadores (JSON-LD) de
  [`index.html`](index.html) deben coincidir con ellos; un test lo comprueba.
- **Colores**: definidos como variables CSS en [`src/styles/index.css`](src/styles/index.css) y
  expuestos a Tailwind (`text-ink`, `bg-sand-50`, `text-gold-700`…). Los tonos de texto cumplen
  WCAG AA. No se usan valores hexadecimales sueltos en los componentes.
- **Páginas secundarias** se cargan de forma diferida (`lazy` en
  [`src/app/router.tsx`](src/app/router.tsx)); cada ruta define su título en `handle.title`.
- **Imágenes**: en `public/imgs`, en WebP y a un máximo de 1600 px de lado. Las fotos nuevas deben
  optimizarse antes de añadirlas (sin metadatos de ubicación).
- El código está en inglés; los textos y las URLs, en español.

## Despliegue

`npm run build` genera `dist/`, que se sube tal cual al hosting.

Es una SPA con rutas reales (`/sobremi`, `/aviso-legal`…), así que el servidor debe devolver
`index.html` para cualquier ruta que no sea un fichero:

- **Apache**: incluido en [`public/.htaccess`](public/.htaccess) (también configura la caché).
- **Nginx**: `try_files $uri $uri/ /index.html;`
- **Netlify / Cloudflare Pages**: regla `/* /index.html 200` en `public/_redirects`.

## Privacidad

La web no instala cookies propias ni de analítica. La fuente se sirve desde el propio dominio, y el
mapa de Google Maps solo se carga si el visitante lo pide. Cualquier integración nueva de terceros
debe mantener ese criterio y reflejarse en la política de cookies.

---

© Dra. Marta Sampil González. Todos los derechos reservados.
