import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function AvisoLegal() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["inicio", "sobre-mi", "galeria", "pedir-cita"];

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
              src="/imgs/logo_marta_sampil_vector.png"
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
            {sections.map((section) => (
              <a
                key={section}
                href={section === "inicio" ? "/" : `/#${section}`}
                onClick={() => setActiveSection(section)}
                className={`text-sm uppercase tracking-wider transition ${
                  activeSection === section
                    ? "text-[#B39B7C]"
                    : "text-[#2E2E2E] hover:text-[#B39B7C]"
                }`}
              >
                {section === "inicio" && "Inicio"}
                {section === "sobre-mi" && "Sobre mí"}
                {section === "galeria" && "Galería"}
                {section === "pedir-cita" && "Pedir cita"}
              </a>
            ))}
          </nav>

          {/* MENU MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden p-2 rounded-md border border-[#D9C8A9] text-[#2E2E2E]"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* NAV MÓVIL */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FAF8F4] border-t border-[#EDE7DE]">
            <nav className="flex flex-col p-4 gap-2">
              {sections.map((section) => (
                <a
                  key={section}
                  href={section === "inicio" ? "/" : `/#${section}`}
                  onClick={() => {
                    setActiveSection(section);
                    setIsMenuOpen(false);
                  }}
                  className="text-left px-2 py-2 text-[#2E2E2E] hover:text-[#B39B7C]"
                >
                  {section === "inicio" && "Inicio"}
                  {section === "sobre-mi" && "Sobre mí"}
                  {section === "galeria" && "Galería"}
                  {section === "pedir-cita" && "Pedir cita"}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* CONTENIDO PRINCIPAL - AVISO LEGAL */}
      <main className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-[#2E2E2E] leading-relaxed">
          <h1 className="text-3xl font-semibold mb-8 text-[#B39B7C]">
            Aviso Legal
          </h1>

          <div className="space-y-8">
            {/* 1. Titularidad */}
            <section className="p-6 bg-[#FAF8F4] border border-[#EDE7DE] rounded-md">
              <h2 className="text-xl font-semibold mb-4 text-[#8A7356]">
                Identidad del titular
              </h2>
              <p className="mb-4">
                <strong>clinicamartasampil.com</strong> es una web gestionada y propiedad de la <strong>Dra. Marta Sampil González</strong>.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Domicilio Social:</strong> R. Roberto Baamonde, 24, 1º B, 27400 Monforte de Lemos, Lugo (España).
                </li>
                <li>
                  <strong>Registro Sanitario:</strong> La consulta de la Dra. Marta Sampil González está registrada en el Registro Sanitario de Galicia con el número <strong>C-27-001390</strong>.
                </li>
                <li>
                  <strong>Colegiada nº:</strong> 273607051
                </li>
              </ul>
            </section>

            {/* 2. Objeto */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#8A7356]">
                Objeto y aceptación
              </h2>
              <p>
                Este sitio web ha sido creado con carácter exclusivamente informativo y para uso de los usuarios/as. A través de este Aviso Legal, se pretende regular el acceso y uso de este sitio web, así como la relación entre el sitio web y sus usuarios.
              </p>
              <p className="mt-2">
                Accediendo a este sitio web se aceptan los siguientes términos y condiciones:
              </p>
            </section>

            {/* 3. Condiciones de uso */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#8A7356]">
                Términos y condiciones de uso
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  El acceso a este sitio web es responsabilidad exclusiva de los usuarios/as.
                </li>
                <li>
                  El simple acceso a este sitio web no supone entablar ningún tipo de relación comercial entre la Dra. Marta Sampil González y el/la usuario/a.
                </li>
                <li>
                  El acceso y la navegación en este sitio web supone aceptar y conocer las advertencias legales, condiciones y términos de uso contenidas en ella.
                </li>
                <li>
                  El titular del sitio web puede ofrecer servicios que podrán encontrarse sometidos a unas condiciones particulares propias que, según los casos, sustituyan, completen y/o modifiquen las presentes condiciones, y sobre las cuales se informará al usuario en cada caso concreto.
                </li>
              </ul>
            </section>
            
            {/* 4. Propiedad Intelectual (Opcional pero recomendado) */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#8A7356]">
                Propiedad Intelectual e Industrial
              </h2>
              <p>
                Todos los contenidos del sitio web (incluyendo, sin carácter limitativo, bases de datos, imágenes y fotografías, dibujos, gráficos y archivos de texto) son propiedad de la Dra. Marta Sampil González o de los proveedores de contenidos, habiendo sido, en este último caso, objeto de licencia o cesión por parte de los mismos, y están protegidos por las normas nacionales e internacionales de propiedad intelectual.
              </p>
            </section>
          </div>
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
                  src="/imgs/logo_marta_sampil_vector.png"
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
                <a href="tel:+34982007791" className="hover:underline">
                  982 007 791
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contacto@clinicamartasampil.com"
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
                <Link to="/aviso-legal" className="hover:underline font-semibold">
                  Aviso legal
                </Link>
                <Link to="/politica-cookies" className="hover:underline">
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
          src="/imgs/whatsapp.png"
          alt="WhatsApp"
          className="w-14 h-14 object-contain hover:scale-110 transition"
        />
      </a>
    </>
  );
}