import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookiesPolitica() {
  // Tipado explícito de los estados (aunque TS suele inferirlos bien, es más formal así)
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

  // Array de secciones tipado implícitamente como string[]
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
                // Si estamos en esta página, los links deben llevar a la home "/" o al ancla "/#seccion"
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

      {/* CONTENIDO PRINCIPAL */}
      <main className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-[#2E2E2E] leading-relaxed">
          <h1 className="text-3xl font-semibold mb-8 text-[#B39B7C]">
            Política de Cookies
          </h1>
          
          <p className="text-sm text-[#7A7A7A] mb-8">
            Última actualización: 02/01/2025
          </p>

          {/* INTRODUCCIÓN */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              1. Introducción
            </h2>
            <p>
              En la web de la <strong>Clínica Oftalmológica Dra. Marta Sampil</strong> nos comprometemos a ser transparentes sobre los datos que recopilamos. 
              El objetivo de esta política es informar clara y precisamente a los usuarios sobre el funcionamiento de las cookies en nuestro sitio web.
            </p>
          </section>

          {/* QUÉ SON */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              2. ¿Qué son las cookies?
            </h2>
            <p>
              Una cookie es un pequeño archivo de texto que los sitios web guardan en su ordenador o dispositivo móvil cuando usted los visita. 
              Permiten al sitio web recordar sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a configurarlas cada vez que regresa al sitio o navega de una página a otra.
            </p>
          </section>

          {/* DECLARACIÓN DE NO USO */}
          <section className="mb-10 p-6 bg-[#FAF8F4] border-l-4 border-[#B39B7C] rounded-r-md">
            <h2 className="text-xl font-semibold mb-4 text-[#8A7356]">
              3. Uso de cookies en esta web
            </h2>
            <p className="font-medium mb-2">
              Esta página web <strong>NO utiliza cookies propias ni de terceros</strong> con fines publicitarios, de análisis de comportamiento, rastreo o creación de perfiles comerciales.
            </p>
            <p>
              El sitio web está diseñado con fines meramente informativos y de contacto profesional. No se requiere registro de usuario ni se almacenan datos de navegación persistentes.
            </p>
            <p className="mt-4 text-sm">
              <em>Nota técnica:</em> Es posible que el servidor donde se aloja la web utilice pequeñas cookies técnicas temporales e imprescindibles para el correcto funcionamiento de la transmisión de comunicaciones (por ejemplo, para cargar las fuentes de letra o los elementos de seguridad), las cuales están exentas de la obligación de consentimiento según el artículo 22 de la LSSI.
            </p>
          </section>

          {/* GESTIÓN */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              4. ¿Cómo puede gestionar o desactivar las cookies?
            </h2>
            <p>
              Aunque nuestra web no utiliza cookies invasivas, usted siempre tiene la libertad de configurar su navegador para rechazar cualquier tipo de cookie o para eliminar las que ya se hayan almacenado.
            </p>
            <p className="mt-3">
              Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Ajustes &gt; Privacidad & Seguridad &gt; Cookies y datos del sitio.
              </li>
              <li>
                <strong>Safari:</strong> Preferencias &gt; Privacidad.
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio.
              </li>
            </ul>
          </section>

          {/* ENLACES EXTERNOS */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              5. Enlaces a terceros
            </h2>
            <p>
              Esta web puede contener enlaces a sitios web de terceros (como la ubicación en <strong>Google Maps</strong> o el enlace a <strong>WhatsApp</strong>). 
              Si usted hace clic en dichos enlaces y abandona nuestra web, la Dra. Marta Sampil no se hace responsable de las prácticas de privacidad ni del uso de cookies que dichos terceros puedan realizar. Le recomendamos leer las políticas de privacidad de esas plataformas.
            </p>
          </section>

          {/* CONTACTO */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              6. Datos de contacto
            </h2>
            <p>
              Si tiene cualquier duda acerca de esta política de cookies, puede contactar con nosotros:
            </p>
            <div className="mt-4 p-4 border border-[#EDE7DE] rounded-md inline-block text-sm">
               <p><strong>Titular:</strong> Dra. Marta Sampil González</p>
               <p><strong>Dirección:</strong> R. Roberto Baamonde, 24, 1º B, 27400 Monforte de Lemos, Lugo</p>
               <p><strong>Email:</strong> <a href="mailto:contacto@clinicamartasampil.com" className="hover:underline text-[#8A7356]">contacto@clinicamartasampil.com</a></p>
            </div>
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
          src="/imgs/whatsapp.png"
          alt="WhatsApp"
          className="w-14 h-14 object-contain hover:scale-110 transition"
        />
      </a>
    </>
  );
}