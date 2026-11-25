import { ChevronRight, Dot } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/config/site";
import { education, merits } from "@/content/about";
import { ExperienceTimeline } from "./ExperienceTimeline";

export default function AboutPage() {
  return (
    <div className="bg-sand-50">
      {/* pt-28 deja hueco a la cabecera fija; degradado oscuro para que el texto blanco se lea */}
      <section className="relative flex min-h-[70svh] items-center px-6 pb-12 pt-28 md:px-16">
        <img
          src="/imgs/portada.webp"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/10" />
        <div className="relative max-w-xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-sand-300">
            Oftalmología y cuidado visual
          </p>
          <h1 className="text-4xl font-semibold text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            {site.doctor}
          </h1>
          <p className="mt-3 text-lg text-white/90">
            Cuidando tu visión con profesionalidad y humanidad.
          </p>
        </div>
      </section>

      <Section tone="sand">
        <Container className="flex max-w-6xl flex-col items-center gap-12 md:flex-row">
          <img
            src="/imgs/consulta.webp"
            alt="Consulta oftalmológica"
            width={638}
            height={900}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full max-w-[300px] rounded-2xl border border-sand-200 shadow-sm md:w-1/2"
          />
          <div className="w-full text-center md:w-1/2 md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-700">
              Compromiso
            </p>
            <h2 className="mb-4 text-3xl font-medium">Mi forma de entender la medicina</h2>
            <div className="space-y-4 text-left leading-relaxed text-muted">
              <p>
                Creo en una oftalmología que pone a la persona en el centro. En mi consulta, cada
                paciente recibe una atención individualizada, basada en la escucha, el rigor
                científico y el tiempo necesario para valorar a fondo su caso.
              </p>
              <p>
                Mi forma de trabajar combina la oftalmología más avanzada con una visión integradora
                de la salud: considero siempre el estado general, los tratamientos sistémicos y los
                hábitos de vida, porque los ojos reflejan mucho más de lo que vemos en ellos.
              </p>
              <p>
                Mi objetivo es ofrecer un diagnóstico y tratamiento personalizados, abordando cada
                problema visual desde una perspectiva global, para cuidar no solo la visión, sino el
                bienestar del paciente en su conjunto.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="formacion" tone="sand">
        <Container>
          <SectionHeading kicker="Títulos oficiales" title="Mi formación" divider />
          <ul className="mx-auto max-w-3xl space-y-4">
            {education.map(({ title, year }) => (
              <li key={title} className="flex items-start gap-3">
                <ChevronRight size={20} className="mt-1 shrink-0 text-gold-700" aria-hidden />
                <p>
                  <span className="font-semibold">{title}</span>{" "}
                  <span className="text-muted">({year})</span>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="experiencia" tone="sand">
        <Container>
          <SectionHeading kicker="Trayectoria" title="Mi experiencia" divider />
          <ExperienceTimeline />
        </Container>
      </Section>

      <Section id="meritos" tone="sand">
        <Container>
          <SectionHeading kicker="Reconocimientos" title="Otros méritos" divider />
          <ul className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {merits.map((merit) => (
              <li
                key={merit}
                className="flex items-start gap-4 rounded-lg bg-sand-300 p-6 shadow-sm"
              >
                <Dot size={24} className="mt-0.5 shrink-0 text-gold-700" aria-hidden />
                <p className="leading-relaxed">{merit}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </div>
  );
}
