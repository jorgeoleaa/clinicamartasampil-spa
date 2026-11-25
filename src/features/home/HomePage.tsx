import { useEffect } from "react";
import { useLayoutContext } from "@/app/layoutContext";
import { homeSections } from "@/config/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { AboutIntroSection } from "./sections/AboutIntroSection";
import { ContactSection } from "./sections/ContactSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";

const sectionIds = homeSections.map((s) => s.id);

export default function HomePage() {
  const { setActiveSection } = useLayoutContext();
  const activeSection = useActiveSection(sectionIds, { syncHash: true });

  useEffect(() => {
    setActiveSection(activeSection);
  }, [activeSection, setActiveSection]);

  return (
    <>
      <HeroSection id="inicio" />
      <AboutIntroSection id="sobre-mi" />
      <GallerySection id="galeria" />
      <ContactSection id="pedir-cita" />
    </>
  );
}
