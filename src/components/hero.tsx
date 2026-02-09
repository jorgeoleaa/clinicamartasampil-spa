import { Calendar } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
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
            onClick={() => scrollToSection("sobre-mi")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#EDE7DE] bg-white text-sm font-medium hover:bg-[#FBF8F4] transition"
          >
            Conocer más
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;