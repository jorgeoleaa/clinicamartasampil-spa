import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Whatsapp from "./components/whatsapp";

const ClinicaOftalmologica = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [currentImage, setCurrentImage] = useState(0);

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
    { 
      src: "imgs/sala_espera.jpg", 
      alt: "Sala de espera"
    },
    {
      src: "imgs/galeria.jpg",
      alt: "Foto 1"
    },
    {
      src: "imgs/galeria1.jpg",
      alt: "Foto 2"
    },
    {
      src: "imgs/galeria2.jpg",
      alt: "Foto 3"
    }
  ];

  // Galería automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Detectar sección visible con Intersection Observer
  useEffect(() => {
    const sections = ["inicio", "sobre-mi", "galeria", "pedir-cita"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Actualizar el hash de la URL
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.3, // Activar cuando el 30% de la sección es visible
        rootMargin: "-100px 0px -50% 0px" // Ajuste para que active antes
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
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
      <Header activeSection={activeSection} />

      {/* HERO */}
      <Hero scrollToSection={scrollToSection} />

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-16 bg-[#FAF8F4]">
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
                Oftalmóloga con más de 15 años de experiencia, apasionada por ofrecer una oftalmología clara, cercana y basada en evidencia.
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
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-16 bg-white">
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
      </section>

      {/* PEDIR CITA */}
      <section id="pedir-cita" className="py-16 bg-[#FAF8F4]">
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
      <Footer />

      {/* WHATSAPP FLOATING */}
      <Whatsapp />
    </div>
  );
};

export default ClinicaOftalmologica;