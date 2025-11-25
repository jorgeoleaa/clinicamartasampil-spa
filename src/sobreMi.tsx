import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Dot, Link } from "lucide-react";

// --- DATOS (sin cambios) ---
const experienciaData = [
  {
    fecha: "2012 - 2016",
    titulo: "Médico Interno Residente de Oftalmología",
    lugar: "Complejo Hospitalario Universitario de Pontevedra",
  },
  {
    fecha: "2017 - 2018",
    titulo: "Facultativa Especialista de Área de Oftalmología",
    lugar:
      "Complejo Hospitalario Universitario de Ourense (con especial dedicación a oftalmología pediátrica y uveítis)",
  },
  {
    fecha: "2018 - 2025",
    titulo: "Facultativa Especialista de Área de Oftalmología",
    lugar: "Hospital Comarcal de Monforte de Lemos",
  },
  {
    fecha: "2025 - actualidad",
    titulo: "Fundadora y responsable médica",
    lugar: "Clínica Oftalmológica Dra. Marta Sampil",
  },
];
const meritosData = [
  "Miembro de la Sociedad Gallega de Oftalmología.",
  "Miembro de la Sociedad Española de Retina y Vítreo.",
  "Coautora de artículos científicos en publicaciones de alto impacto.",
  "Participación activa en congresos y cursos de actualización continuada.",
];

// --- COMPONENTE MeritoCard (sin cambios) ---
type MeritoCardProps = {
  text: string;
};
function MeritoCard({ text }: MeritoCardProps) {
  return (
    <div className="bg-[#EDE1CC] p-6 rounded-lg shadow-sm flex items-start gap-4">
      <Dot size={24} className="text-[#B39B7C] flex-shrink-0 mt-0.5" />
      <p className="text-[#2E2E2E] text-base leading-relaxed">{text}</p>
    </div>
  );
}
// ------------------------------------


export default function SobreMi() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ================================================
  // ===== INICIO DE LA CORRECCIÓN =====
  // ================================================

  // 1. Eliminamos el comentario 'eslint-disable-next-line'
  // 2. Usamos 'setActiveSection' en los 'onClick' del menú
  // 3. Cambiamos el estado inicial a "sobre-mi"
  const [activeSection, setActiveSection] = useState("sobre-mi");

  // ================================================
  // ===== FIN DE LA CORRECCIÓN =====
  // ================================================


  // Detectar scroll (sin cambios)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#FAF8F4] text-[#2E2E2E]">
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "backdrop-blur-sm bg-[#EDE1CC]/90 shadow-sm"
          : "bg-[#EDE1CC]"
          }`}
      >
        <div className="container mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo (sin cambios) */}
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

          {/* NAV DESKTOP (con 'onClick' añadido) */}
          <nav className="hidden md:flex items-center gap-8">
            {["inicio", "sobre-mi", "galeria", "pedir-cita"].map((section) => (
              section === "inicio" ? (
                <a
                  key={section}
                  href="/"
                  // --- onClick AÑADIDO ---
                  onClick={() => setActiveSection(section)}
                  className={`text-sm uppercase tracking-wider transition ${activeSection === section
                    ? "text-[#B39B7C]"
                    : "text-[#2E2E2E] hover:text-[#B39B7C]"
                    }`}
                >
                  Inicio
                </a>
              ) : (
                <button
                  key={section}
                  // --- onClick AÑADIDO ---
                  onClick={() => setActiveSection(section)}
                  className={`text-sm uppercase tracking-wider transition ${activeSection === section
                    ? "text-[#B39B7C]"
                    : "text-[#2E2E2E] hover:text-[#B39B7C]"
                    }`}
                >
                  {section === "sobre-mi" && "Sobre mí"}
                  {section === "galeria" && "Galería"}
                  {section === "pedir-cita" && "Pedir cita"}
                </button>
              )
            ))}
          </nav>

          {/* MENU MOBILE (Icono) */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden p-2 rounded-md border border-[#D9C8A9] text-[#2E2E2E]"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* NAV MÓVIL (con 'onClick' añadido) */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FAF8F4] border-t border-[#EDE7DE]">
            <nav className="flex flex-col p-4 gap-2">
              {["inicio", "sobre-mi", "galeria", "pedir-cita"].map(
                (section) => (
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
                )
              )}
            </nav>
          </div>
        )}
      </header>

      {/* --- RESTO DEL COMPONENTE (SIN CAMBIOS) --- */}

      {/* HERO */}
      <section
        className="relative h-[70vh] flex items-center justify-start px-8 md:px-16 bg-cover bg-center"
        style={{ backgroundImage: "url('imgs/PORTADA.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#EDE1CC]/50"></div>
        <div className="relative z-10 max-w-xl">
          <p className="uppercase tracking-wide text-sm font-medium text-[#B39B7C] mb-2">
            Oftalmología y cuidado visual
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white drop-shadow-lg">
            Dra. Marta Sampil
          </h1>
          <p className="text-lg mt-3 text-white/90">
            Cuidando tu visión con profesionalidad y humanidad.
          </p>
        </div>
      </section>

      {/* Sección de valores */}
      <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src="imgs/sobre-mi.jpg"
            alt="Consulta Oftalmológica"
            className="rounded-2xl shadow-sm border border-[#EDE7DE] object-cover max-w-[300px] mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-center md:text-left uppercase text-sm tracking-wide text-[#B39B7C] font-semibold">
            Compromiso
          </p>
          <h2 className="text-3xl font-medium mb-4 text-[#2E2E2E]">Mi forma de entender la medicina</h2>
          <p className="text-[#7A7A7A] leading-relaxed mb-4">
            Creo en una oftalmología que pone a la persona en el centro. En mi consulta, cada paciente recibe una atención
            individualizada, basada en la escucha, el rigor científico y el tiempo necesario para valorar a fondo su caso.
          </p>
          <p className="text-[#7A7A7A] leading-relaxed mb-6">
            Mi forma de trabajar combina la oftalmología más avanzada con una visión integradora de la salud: considero
            siempre el estado general, los tratamientos sistémicos y los hábitos de vida, porque los ojos reflejan mucho más de lo que vemos
            en ellos.
          </p>
          <p className="text-[#7A7A7A] leading-relaxed mb-6">
            Mi objetivo es ofrecer un diagnóstico y tratamiento personalizados, abordando cada problema visual desde una perspectiva
            global, para cuidar no solo la visión, sino el bienestar del paciente en su conjunto.
          </p>
        </div>
      </section>

      {/* SECCIÓN DE FORMACIÓN */}
      <section className="py-20 px-6 md:px-20">
        <div className="container mx-auto text-center">
          <p className="uppercase text-sm tracking-wide text-[#B39B7C] font-semibold">
            TÍTULOS OFICIALES
          </p>
          <h2 className="text-4xl font-semibold text-[#2E2E2E] mt-2 mb-4">
            Mi formación
          </h2>
          <hr className="w-24 mx-auto border-t border-[#B39B7C] mb-12" />
          <ul className="max-w-3xl mx-auto text-left space-y-4">
            <li className="flex items-start gap-3">
              <ChevronRight size={20} className="text-[#B39B7C] mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[#2E2E2E]">
                  Licenciada en Medicina y Cirugía por la Universidad de Santiago de Compostela
                </span>
                <span className="text-[#7A7A7A] ml-1">
                  (2010)
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight size={20} className="text-[#B39B7C] mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[#2E2E2E]">
                  Estancia formativa en Unidad de Superficie e Inflamación Ocular en el Hospital Clínico San Carlos de Madrid
                </span>
                <span className="text-[#7A7A7A] ml-1">
                  (2014)
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight size={20} className="text-[#B39B7C] mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[#2E2E2E]">
                  Estancia formativa en la Unidad de Retina Quirúrgica y Tumores Intraoculares del Adulto en el Complejo Hospitalario Universitario de Santiago de Compostela
                </span>
                <span className="text-[#7A7A7A] ml-1">
                  (2015)
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight size={20} className="text-[#B39B7C] mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[#2E2E2E]">
                  Master Universitario en Investigación en Ciencias de la Visión
                </span>
                <span className="text-[#7A7A7A] ml-1">
                  (2014)
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight size={20} className="text-[#B39B7C] mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[#2E2E2E]">
                  Especialista en Oftalmología
                </span>
                <span className="text-[#7A7A7A] ml-1">
                  (2017)
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight size={20} className="text-[#B39B7C] mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[#2E2E2E]">
                  Master Propio en Oftalmología
                </span>
                <span className="text-[#7A7A7A] ml-1">
                  (2019)
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight size={20} className="text-[#B39B7C] mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[#2E2E2E]">
                  Experta Universitaria en Cirugía Oftalmológica
                </span>
                <span className="text-[#7A7A7A] ml-1">
                  (2019)
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight size={20} className="text-[#B39B7C] mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[#2E2E2E]">
                  Experta Universitaria en Glaucoma y Patología Ocular Pediátrica
                </span>
                <span className="text-[#7A7A7A] ml-1">
                  (2019)
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight size={20} className="text-[#B39B7C] mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[#2E2E2E]">
                  Experta Universitaria en Uveítis y Retina
                </span>
                <span className="text-[#7A7A7A] ml-1">
                  (2019)
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight size={20} className="text-[#B39B7C] mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[#2E2E2E]">
                  Master en Peritaje Médico y Valoración del Daño Corporal
                </span>
                <span className="text-[#7A7A7A] ml-1">
                  (en curso)
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECCIÓN DE EXPERIENCIA */}
      <section className="py-20 px-6 md:px-20">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="uppercase text-sm tracking-wide text-[#B39B7C] font-semibold">
              TRAYECTORIA
            </p>
            <h2 className="text-4xl font-semibold text-[#2E2E2E] mt-2 mb-4">
              Mi experiencia
            </h2>
            <hr className="w-24 mx-auto border-t border-[#B39B7C] mb-16" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#EDE7DE] -translate-x-1/2"></div>
            <ul className="space-y-12">
              {experienciaData.map((item, index) => (
                <li key={index} className="relative">
                  <div className="flex items-start gap-6">
                    <div className="absolute left-3 md:left-1/2 top-1.5 -translate-x-1/2">
                      <div className="w-4 h-4 rounded-full bg-[#B39B7C] border-2 border-[#FAF8F4] ring-2 ring-[#EDE7DE]"></div>
                    </div>
                    <div className="w-full pl-12 md:w-1/2 md:pl-0 md:text-right md:pr-12">
                      <div className={`block ${index % 2 !== 0 ? 'md:hidden' : ''}`}>
                        <p className="text-sm text-[#7A7A7A] font-medium">
                          {item.fecha}
                        </p>
                        <h3 className="font-semibold text-lg text-[#2E2E2E] mt-1">
                          {item.titulo}
                        </h3>
                        <p className="text-sm text-[#7A7A7A] leading-relaxed mt-1">
                          {item.lugar}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block w-1/2 md:pl-12">
                      <div className={index % 2 !== 0 ? 'block' : 'hidden'}>
                        <p className="text-sm text-[#7A7A7A] font-medium">
                          {item.fecha}
                        </p>
                        <h3 className="font-semibold text-lg text-[#2E2E2E] mt-1">
                          {item.titulo}
                        </h3>
                        <p className="text-sm text-[#7A7A7A] leading-relaxed mt-1">
                          {item.lugar}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE OTROS MÉRITOS */}
      <section className="bg-[#FAF8F4] py-20 px-6 md:px-20">
        <div className="container mx-auto text-center">
          <p className="uppercase text-sm tracking-wide text-[#B39B7C] font-semibold">
            RECONOCIMIENTOS
          </p>
          <h2 className="text-4xl font-semibold text-[#2E2E2E] mt-2 mb-4">
            Otros méritos
          </h2>
          <hr className="w-24 mx-auto border-t border-[#B39B7C] mb-12" />
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {meritosData.map((merito, index) => (
              <MeritoCard key={index} text={merito} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
                <strong>Dirección:</strong> R. Roberto Baamonde, 24, 1º B, 27400 Monforte de Lemos, Lugo
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
          src="imgs/whatsapp.png"
          alt="WhatsApp"
          className="w-14 h-14 object-contain hover:scale-110 transition"
        />
      </a>
    </div>
  );
}