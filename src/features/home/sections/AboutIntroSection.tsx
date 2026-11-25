import { Link } from "react-router-dom";
import { buttonStyles } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/Section";
import { routes } from "@/config/navigation";
import { site } from "@/config/site";

export function AboutIntroSection({ id }: { id: string }) {
  return (
    <Section id={id} tone="sand">
      <Container className="grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-sm">
          <img
            src="/imgs/dra-marta-sampil.webp"
            alt={site.doctor}
            width={672}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-96 w-full object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-4 text-3xl font-medium">Sobre mí</h2>
          <p className="mb-6 text-muted">
            Oftalmóloga con más de 15 años de experiencia, apasionada por ofrecer una oftalmología
            clara, cercana y basada en evidencia.
          </p>
          <Link
            to={routes.about}
            className={buttonStyles({ variant: "secondary", className: "w-full sm:w-auto" })}
          >
            Conocer más
          </Link>
        </div>
      </Container>
    </Section>
  );
}
