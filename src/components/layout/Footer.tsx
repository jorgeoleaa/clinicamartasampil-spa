import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import { legalLinks } from "@/config/navigation";
import { site } from "@/config/site";

const linkClass = "underline-offset-2 hover:underline";

export function Footer() {
  return (
    // pb-28: hueco para que el botón flotante de WhatsApp no tape el contenido final
    <footer className="border-t border-sand-200 bg-sand-300 pb-28 pt-10 text-sm text-muted">
      <div className="container mx-auto flex flex-col items-start justify-between gap-8 px-5 md:flex-row">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <Logo className="h-6" />
            <p className="font-medium text-ink">
              {site.shortName} · {site.doctor}
            </p>
          </div>
          <p>© {new Date().getFullYear()} · Todos los derechos reservados</p>
        </div>

        <address className="not-italic leading-relaxed">
          <p>
            <strong>Dirección:</strong> {site.address.full}
          </p>
          <p>
            <strong>Teléfono:</strong>{" "}
            <a href={site.phone.href} className={`whitespace-nowrap ${linkClass}`}>
              {site.phone.display}
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={site.email.href} className={`break-all ${linkClass}`}>
              {site.email.display}
            </a>
          </p>
        </address>

        <div>
          <p>
            <strong>Horario:</strong>
          </p>
          {site.schedule.map(({ days, hours }) => (
            <p key={days}>
              {days}: {hours}
            </p>
          ))}
        </div>

        <div>
          <p>
            <strong>Nº Registro Sanitario:</strong> {site.legal.healthRegistry}
          </p>
          <p>
            <strong>Colegiada nº:</strong> {site.legal.medicalLicense}
          </p>
          <nav aria-label="Información legal" className="mt-2 flex flex-col">
            {legalLinks.map(({ to, label }) => (
              <Link key={to} to={to} className={`py-1 ${linkClass}`}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
