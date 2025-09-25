import React, { useState, useEffect } from 'react';
import { Eye, Calendar, Award, MapPin, Phone, Mail, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const ClinicaOftalmologica = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Imágenes para el carrusel (usando placeholders que representan las fotos reales)
  const galleryImages = [
    {
      src: "imgs/PXL_20250718_114801378.jpg",
      alt: "Recepción moderna de la clínica"
    },
    {
      src: "imgs/PXL_20250718_114140057.MP.jpg",
      alt: "Sala de consulta equipada"
    },
    {
      src: "imgs/PXL_20250718_114003675.MP.jpg",
      alt: "Despacho de la doctora"
    },
    {
      src: "imgs/PXL_20250718_113911109.MP.jpg",
      alt: "Sala de equipamiento avanzado"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Clínica Oftalmológica</h1>
              <p className="text-sm text-gray-600">Dra. Marta Sampil</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['inicio', 'sobre-mi', 'galeria', 'pedir-cita'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeSection === section
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {section === 'inicio' && 'Inicio'}
                {section === 'sobre-mi' && 'Sobre Mí'}
                {section === 'galeria' && 'Galería'}
                {section === 'pedir-cita' && 'Pedir Cita'}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-blue-600 text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col p-4 space-y-2">
              {['inicio', 'sobre-mi', 'galeria', 'pedir-cita'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {section === 'inicio' && 'Inicio'}
                  {section === 'sobre-mi' && 'Sobre Mí'}
                  {section === 'galeria' && 'Galería'}
                  {section === 'pedir-cita' && 'Pedir Cita'}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-pulse">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Eye className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Clínica
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Oftalmológica</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">Dra. Marta Sampil</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Cuidamos tu visión con la más avanzada tecnología y un trato personalizado. 
              Más de 15 años de experiencia en oftalmología.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('pedir-cita')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Pedir Cita
              </button>
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Conocer más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mí Section */}
      <section id="sobre-mi" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Sobre Mí</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-cyan-100">
                  <img
                    src="imgs/Picsart_25-07-04_21-29-02-922.jpg"
                    alt="Dra. Marta Sampil"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">Dra. Marta Sampil</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Especialista en oftalmología con más de 15 años de experiencia en el diagnóstico y tratamiento 
                  de enfermedades oculares. Graduada por la Universidad de Santiago de Compostela, con formación 
                  especializada en cirugía refractiva y tratamiento de glaucoma.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Mi compromiso es ofrecer una atención médica de excelencia, utilizando las tecnologías más 
                  avanzadas para garantizar el mejor cuidado de la salud visual de mis pacientes.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Especialización</h4>
                      <p className="text-gray-600">Cirugía refractiva y glaucoma</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Experiencia</h4>
                      <p className="text-gray-600">Más de 15 años en oftalmología</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nuestra Clínica</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Instalaciones modernas y equipamiento de última generación</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].alt}
                className="w-full h-96 object-cover"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImage === index ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tecnología Avanzada</h3>
                <p className="text-gray-600">Equipamiento de última generación para diagnósticos precisos</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Instalaciones Modernas</h3>
                <p className="text-gray-600">Espacios cómodos y diseñados para tu bienestar</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Atención Personalizada</h3>
                <p className="text-gray-600">Cuidado individual adaptado a cada paciente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pedir Cita Section */}
      <section id="pedir-cita" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pedir Cita</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 mb-12">
              Solicita tu consulta de manera rápida y sencilla. Estamos aquí para cuidar tu visión.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Llámanos</h3>
                <p className="text-blue-100 mb-4">Atención telefónica de lunes a viernes</p>
                <p className="text-2xl font-bold text-white">+34 982 00 77 91</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Escríbenos</h3>
                <p className="text-blue-100 mb-4">Te respondemos en menos de 24 horas</p>
                <p className="text-xl font-bold text-white">contacto@clinicamartasampil.com</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Nuestra Ubicación</h3>
              <p className="text-blue-100 mb-2">Rúa Roberto Baamonde, 24, 1ºB</p>
              <p className="text-blue-100 mb-2">27400 Monforte de Lemos, Lugo</p>
              <p className="text-blue-100">España</p>
            </div>

            <div className="mt-12">
              <button className="px-12 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                <Calendar className="w-6 h-6 inline mr-2" />
                Reservar Cita Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Clínica Oftalmológica</h3>
                <p className="text-gray-400">Dra. Marta Sampil</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Clínica Oftalmológica Dra. Marta Sampil</p>
              <p className="text-gray-400">Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClinicaOftalmologica;