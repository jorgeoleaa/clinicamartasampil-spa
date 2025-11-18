import { useState, useEffect } from "react";
import {
  Calendar,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const ClinicaOftalmologica = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const galleryImages = [
    {
      src: "imgs/PXL_20250718_114801378.jpg",
      alt: "Recepción moderna de la clínica",
    },
    {
      src: "imgs/PXL_20250718_114140057.MP.jpg",
      alt: "Sala de consulta equipada",
    },
    {
      src: "imgs/PXL_20250718_114003675.MP.jpg",
      alt: "Despacho de la doctora",
    },
    {
      src: "imgs/PXL_20250718_113911109.MP.jpg",
      alt: "Sala de equipamiento avanzado",
    },
    { src: "imgs/sala_espera.jpg", alt: "Sala de espera" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <div className="min-h-screen bg-white text-[#2E2E2E]">
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-sm bg-[#EDE1CC]/90 shadow-sm"
            : "bg-[#EDE1CC]"
        }`}
      >
        <div className="container mx-auto px-5 py-4 flex items-center justify-between">
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
            {["inicio", "sobre-mi", "galeria", "pedir-cita"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
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
              </button>
            ))}
          </nav>

          {/* MENU MOBILE */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden p-2 rounded-md border border-[#D9C8A9] text-[#2E2E2E]"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#FAF8F4] border-t border-[#EDE7DE]">
            <nav className="flex flex-col p-4 gap-2">
              {["inicio", "sobre-mi", "galeria", "pedir-cita"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left px-2 py-2 text-[#2E2E2E] hover:text-[#B39B7C]"
                  >
                    {section === "inicio" && "Inicio"}
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

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 bg-white overflow-hidden"
      >
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('imgs/PORTADA.jpg')" }}
        ></div>

        {/* Capa semitransparente más clara */}
        <div className="absolute inset-0 bg-white/50"></div>

        {/* Contenido */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <img
            src="imgs/logo_marta_sampil_vector.png"
            alt="Logo Clínica Oftalmológica Dra. Marta Sampil"
            className="md:h-[250px] w-[250px] object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-light mb-3 font-sans">
            Clínica Oftalmológica
          </h1>
          <h1 className="text-3xl md:text-3xl font-thin mb-3">
            Dra. Marta Sampil
          </h1>
          <p className="text-lg text-[#7A7A7A] mb-8">
            Cuidamos tu visión con precisión, tecnología avanzada y un trato
            humano.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => scrollToSection("pedir-cita")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B39B7C] text-white text-sm font-medium hover:bg-[#A38C6F] transition"
            >
              <Calendar className="w-4 h-4" /> Pedir cita
            </button>
            <button
              id="sobre-mi"
              onClick={() => scrollToSection("sobre-mi")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#EDE7DE] bg-white text-sm font-medium hover:bg-[#FBF8F4] transition"
            >
              Conocer más
            </button>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="py-16 bg-[#FAF8F4]">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="mx-auto w-full max-w-[420px] rounded-2xl overflow-hidden shadow-sm bg-white">
              <img
                src="imgs/Picsart_25-07-04_21-29-02-922.jpg"
                alt="Dra. Marta Sampil"
                className="w-full h-96 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-medium mb-4">Sobre mí</h2>
              <p className="text-[#7A7A7A] mb-4">
                Especialista en oftalmología con más de 15 años de experiencia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  to="/sobremi"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full border border-[#EDE7DE] bg-white text-sm font-medium hover:bg-[#FBF8F4] transition"
                >
                  Conocer más
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="galeria"></div>
      </section>

      {/* GALERÍA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium">Nuestra clínica</h2>
            <p className="text-md text-[#7A7A7A] mt-2">
              Instalaciones modernas y equipamiento de última generación para
              diagnosticar y tratar de la mejor manera posible.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-sm">
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="w-full h-[520px] object-cover"
            />

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
              aria-label="Anterior"
            >
              <ChevronLeft className="text-[#2E2E2E]" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
              aria-label="Siguiente"
            >
              <ChevronRight className="text-[#2E2E2E]" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full ${
                    currentImage === idx ? "bg-[#B39B7C]" : "bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div id="pedir-cita"></div>
      </section>

      {/* PEDIR CITA */}
      <section className="py-16 bg-[#FAF8F4]">
        <div className="container mx-auto px-5 max-w-3xl text-center">
          <h2 className="text-2xl font-medium mb-3">Pedir Cita</h2>
          <p className="text-[#7A7A7A] mb-6">
            Solicita tu consulta de manera rápida y sencilla. Puedes llamarnos o
            escribir por WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+34982007791"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#EDE7DE] bg-white text-sm font-medium hover:bg-[#FBF8F4] transition"
            >
              <Phone className="w-4 h-4" /> 982 007 791
            </a>
            <a
              href="mailto:contacto@clinicamartasampil.com"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#EDE7DE] bg-white text-sm font-medium hover:bg-[#FBF8F4] transition"
            >
              <Mail className="w-4 h-4" /> contacto@clinicamartasampil.com
            </a>
            <a
              href="https://wa.me/34607096268?text=Hola%20me%20gustaría%20pedir%20una%20cita"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#B39B7C] text-white text-sm font-medium hover:bg-[#A38C6F] transition"
            >
              <img
                src="imgs/whatsapp-icon.png"
                alt="WhatsApp"
                className="w-4 h-4"
              />
              WhatsApp
            </a>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-white border border-[#EDE7DE]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.6703288919775!2d-7.516596524236748!3d42.51981337117854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd301381d69522bd%3A0xb8d90070535dfe3f!2sCl%C3%ADnica%20Oftalmol%C3%B3gica%20Dra.%20Sampil!5e0!3m2!1sen!2ses!4v1762450225628!5m2!1sen!2ses"
              width="100%"
              height="400"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
                <Link
                  to="/politica-privacidad"
                  className="hover:underline"
                >
                  Política de Privacidad
                </Link>
                <a href="/aviso-legal" className="hover:underline">
                  Aviso legal
                </a>
                <a href="/politica-cookies" className="hover:underline">
                  Política de cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING */}
      <a
        href="https://wa.me/34607096268?text=Hola%20me%20gustaría%20pedir%20una%20cita"
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
};

export default ClinicaOftalmologica;
