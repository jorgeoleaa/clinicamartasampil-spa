import { Link } from "react-router-dom";
import { buttonStyles } from "@/components/ui/button";
import { routes } from "@/config/navigation";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70svh] flex-col items-center justify-center px-6 pb-20 pt-40 text-center">
      <meta name="robots" content="noindex" />
      <p className="text-sm font-semibold uppercase tracking-wide text-gold-700">Error 404</p>
      <h1 className="mb-4 mt-2 text-3xl font-semibold">Página no encontrada</h1>
      <p className="mb-8 max-w-md text-muted">
        La página que buscas no existe o ha cambiado de dirección.
      </p>
      <Link to={routes.home} className={buttonStyles()}>
        Volver al inicio
      </Link>
    </section>
  );
}
