import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function PoliticaPrivacidad() {
  const [activeSection, setActiveSection] = useState("sobre-mi");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-sm bg-[#EDE1CC]/90 shadow-sm"
            : "bg-[#EDE1CC]"
        }`}
      >
        <div className="container mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="imgs/logo_marta_sampil_vector.png"
              alt="Logo Clínica Oftalmológica Dra. Marta Sampil"
              className="h-12 md:h-12 w-auto object-contain"
            />
            <div className="leading-tight">
              <div className="font-semibold text-lg">Clínica Oftalmológica</div>
              <div className="text-xs text-[#7A7A7A]">Dra. Marta Sampil</div>
            </div>
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            {["inicio", "sobre-mi", "galeria", "pedir-cita"].map((section) =>
              section === "inicio" ? (
                <a
                  key={section}
                  href="/"
                  onClick={() => setActiveSection(section)}
                  className={`text-sm uppercase tracking-wider transition ${
                    activeSection === section
                      ? "text-[#B39B7C]"
                      : "text-[#2E2E2E] hover:text-[#B39B7C]"
                  }`}
                >
                  Inicio
                </a>
              ) : (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm uppercase tracking-wider transition ${
                    activeSection === section
                      ? "text-[#B39B7C]"
                      : "text-[#2E2E2E] hover:text-[#B39B7C]"
                  }`}
                >
                  {section === "sobre-mi" && "Sobre mí"}
                  {section === "galeria" && "Galería"}
                  {section === "pedir-cita" && "Pedir cita"}
                </button>
              )
            )}
          </nav>

          {/* MENU MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden p-2 rounded-md border border-[#D9C8A9] text-[#2E2E2E]"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* NAV MÓVIL */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FAF8F4] border-t border-[#EDE7DE]">
            <nav className="flex flex-col p-4 gap-2">
              {["inicio", "sobre-mi", "galeria", "pedir-cita"].map((section) =>
                section === "inicio" ? (
                  <a
                    key={section}
                    href="/"
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(false);
                    }}
                    className="text-left px-2 py-2 text-[#2E2E2E] hover:text-[#B39B7C]"
                  >
                    Inicio
                  </a>
                ) : (
                  <button
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(false);
                    }}
                    className="text-left px-2 py-2 text-[#2E2E2E] hover:text-[#B39B7C]"
                  >
                    {section === "sobre-mi" && "Sobre mí"}
                    {section === "galeria" && "Galería"}
                    {section === "pedir-cita" && "Pedir cita"}
                  </button>
                )
              )}
            </nav>
          </div>
        )}
      </header>

      {/* CONTENIDO */}
      <main className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-[#2E2E2E] leading-relaxed">
          <h1 className="text-3xl font-semibold mb-8 text-[#B39B7C]">
            Política de privacidad
          </h1>

          {/* ENTIDAD */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Entidad
            </h2>
            <p>
              La consulta de la Dra. <strong>Marta Sampil González</strong> está
              registrada en el Registro Sanitario de Galicia con el número{" "}
              <strong>C-27-001390</strong>.
            </p>
            <p>
              Dirección: R. Roberto Baamonde, 24, 1º B, 27400 Monforte de Lemos,
              Lugo
            </p>
          </section>

          {/* TRATAMIENTO DE DATOS */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Tratamiento de los datos
            </h2>
            <p>
              El Usuario garantiza que los Datos Personales facilitados a la Dra.
              Marta Sampil González son veraces y correctos, haciéndose
              responsable de comunicar cualquier modificación en los mismos.
            </p>
          </section>

          {/* FINALIDAD */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Finalidad y cesión de datos
            </h2>
            <p>
              Los datos personales serán tratados con la finalidad de gestionar,
              administrar y prestar los servicios que esta web ofrece a sus
              usuarios.
            </p>
          </section>

          {/* CITAS */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Tratamiento de citas, consultas, dudas y/o sugerencias
            </h2>
            <p>
              Los datos enviados por correo electrónico, formularios o
              telefónicamente con estos fines serán tratados con la finalidad de
              resolver las consultas o dudas planteadas, así como atender sus
              sugerencias.
            </p>
          </section>

          {/* COOKIES */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Uso de cookies
            </h2>
            <p>
              Nuestra web utiliza cookies, pequeños ficheros de datos que se
              generan en el ordenador del usuario y que permiten obtener la
              siguiente información:
            </p>

            <ul className="list-disc pl-6 mt-3">
              <li>
                La fecha y hora de la última vez que el usuario visitó la web.
              </li>
              <li>
                Elementos de seguridad que intervienen en el control de acceso a
                las áreas restringidas.
              </li>
            </ul>

            <p className="mt-4">
              El usuario puede impedir la generación de cookies mediante la
              configuración de su navegador. Sin embargo, el titular de la web no
              se responsabiliza de que la desactivación de las mismas impida el
              correcto funcionamiento del sitio.
            </p>
          </section>

          {/* DERECHOS */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Ejercicio de derechos de acceso, rectificación, cancelación y
              oposición
            </h2>
            <p>
              Los datos no serán almacenados en soportes distintos a las propias
              comunicaciones emitidas desde esta web (emails y formulario de
              contacto).
            </p>
            <p className="mt-3">
              Aun así, puede ejercer sus derechos dirigiéndose por escrito a la
              Dra. Marta Sampil González a la dirección postal de la consulta.
            </p>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#EDE1CC] text-[#7A7A7A] py-10 border-t border-[#EDE7DE]">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Columna 1 */}
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

            {/* Columna 2 */}
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
                <a
                  href="mailto:info@martasampil.es"
                  className="hover:underline"
                >
                  contacto@clinicamartasampil.com
                </a>
              </p>
            </div>

            {/* Columna 3 */}
            <div className="text-xs">
              <p>
                <strong>Horario:</strong>
              </p>
              <p>Lunes a viernes: 10:00 - 13:30</p>
              <p>Lunes, martes y jueves: 16:00 - 19:30</p>
            </div>

            {/* Columna 4 */}
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
                <Link to="/politica-cookies" className="hover:underline font-semibold">
                  Política de cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING */}
      <a
        href="https://wa.me/34607096268?text=Hola%2C%20me%20gustaría%20pedir%20una%20cita"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed right-5 bottom-5 z-50"
      >
        <img
          src="imgs/whatsapp.png"
          alt="WhatsApp"
          className="w-14 h-14 object-contain hover:scale-110 transition"
        />
      </a>
    </>
  );
}
