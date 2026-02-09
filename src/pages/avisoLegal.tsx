import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

export default function AvisoLegal() {

  const [activeSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <Header
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={() => {}}
      />

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
      <Footer />

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