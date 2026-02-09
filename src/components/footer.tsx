import type { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="bg-[#EDE1CC] text-[#7A7A7A] py-10 border-t border-[#EDE7DE]">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Columna 1: Logo y nombre */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="imgs/logo_marta_sampil_vector.png"
                alt="Logo Clínica Marta Sampil"
                className="w-6 h-6"
              />
              <div className="text-sm font-medium">
                Clínica Oftalmológica · Dra. Marta Sampil
              </div>
            </div>
            <div className="text-xs">
              <p>© 2025 · Todos los derechos reservados</p>
            </div>
          </div>

          {/* Columna 2: Contacto */}
          <div className="text-xs leading-relaxed">
            <p>
              <strong>Dirección:</strong> R. Roberto Baamonde, 24, 1º B, 27400
              Monforte de Lemos, Lugo
            </p>
            <p>
              <strong>Teléfono:</strong>{" "}
              <a href="tel:+34981578250" className="hover:underline">
                982 007 791
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@martasampil.es" className="hover:underline">
                contacto@clinicamartasampil.com
              </a>
            </p>
          </div>

          {/* Columna 3: Horario */}
          <div className="text-xs">
            <p>
              <strong>Horario:</strong>
            </p>
            <p>Lunes a viernes: 10:00 - 13:30</p>
            <p>Lunes, martes y jueves: 16:00 - 19:30</p>
          </div>

          {/* Columna 4: Información legal */}
          <div className="text-xs">
            <p>
              <strong>Nº Registro Sanitario:</strong> C-27-001390
            </p>
            <p>
              <strong>Colegiada nº:</strong> 273607051
            </p>
            <div className="flex flex-col mt-2 space-y-1">
              <Link to="/politica-privacidad" className="hover:underline">
                Política de Privacidad
              </Link>
              <Link to="/aviso-legal" className="hover:underline">
                Aviso legal
              </Link>
              <Link
                to="/politica-cookies"
                className="hover:underline font-semibold"
              >
                Política de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
