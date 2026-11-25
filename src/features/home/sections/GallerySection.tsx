import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { galleryImages } from "@/content/gallery";
import { Carousel } from "../components/Carousel";

export function GallerySection({ id }: { id: string }) {
  return (
    <Section id={id}>
      <Container className="max-w-5xl">
        <SectionHeading
          className="mb-8"
          title="Nuestra clínica"
          description="Instalaciones modernas y equipamiento de última generación para diagnosticar y tratar de la mejor manera posible."
        />
        <Carousel images={galleryImages} label="Fotos de la clínica" />
      </Container>
    </Section>
  );
}
