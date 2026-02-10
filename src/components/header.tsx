import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  activeSection?: string;
}

const Header = ({ activeSection: propActiveSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Usar activeSection de props si existe, sino cadena vacía
  const activeSection = propActiveSection || "";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    // Si no estamos en la home, navegar a la home con el hash
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    
    // Si estamos en la home, hacer scroll normal
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
            {["inicio", "sobre-mi", "galeria", "pedir-cita"].map((section) => (
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
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;