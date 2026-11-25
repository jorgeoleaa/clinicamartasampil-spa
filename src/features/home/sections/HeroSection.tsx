import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonStyles } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";
import { toHomeSection } from "@/config/navigation";
import { site } from "@/config/site";

export function HeroSection({ id }: { id: string }) {
  return (
    <section
      id={id}
      // min-h-svh: en iOS, 100vh es más alto que la zona visible y dejaba los botones fuera
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center"
    >
      <img
        src="/imgs/portada.webp"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center">
        <Logo className="mb-6 h-auto w-44 md:w-60" />
        <h1 className="mb-4 flex flex-col gap-3 font-light">
          <span className="text-4xl md:text-5xl">{site.shortName}</span>
          <span className="text-3xl">{site.doctor}</span>
        </h1>
        <p className="mb-8 text-lg text-muted">
          Cuidamos tu visión con precisión, tecnología avanzada y un trato humano.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to={toHomeSection("pedir-cita")} className={buttonStyles()}>
            <Calendar className="size-4" aria-hidden /> Pedir cita
          </Link>
          <Link to={toHomeSection("sobre-mi")} className={buttonStyles({ variant: "secondary" })}>
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
}
