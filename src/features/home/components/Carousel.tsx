import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, type TouchEvent } from "react";
import type { GalleryImage } from "@/content/gallery";
import { useCarousel } from "@/hooks/useCarousel";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD_PX = 40;

interface CarouselProps {
  images: readonly GalleryImage[];
  /** Nombre accesible del carrusel. */
  label: string;
}

/**
 * Carrusel accesible (patrón WAI-ARIA "carousel"): se pausa con el ratón encima o con el foco
 * dentro, no avanza solo si el usuario prefiere movimiento reducido y admite gestos de swipe.
 */
export function Carousel({ images, label }: CarouselProps) {
  const [interacting, setInteracting] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const { index, next, prev, goTo } = useCarousel({
    count: images.length,
    interval: AUTOPLAY_MS,
    paused: interacting || reducedMotion,
  });
  const touchStartX = useRef<number | null>(null);

  const handleTouchEnd = (e: TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    const end = e.changedTouches[0]?.clientX;
    if (start === null || end === undefined) return;
    const dx = end - start;
    if (Math.abs(dx) > SWIPE_THRESHOLD_PX) {
      if (dx < 0) next();
      else prev();
    }
  };

  const current = images[index];

  return (
    <section
      aria-roledescription="carrusel"
      aria-label={label}
      // Proporción fija: la altura no cambia entre fotos verticales y horizontales
      className="relative aspect-[4/3] touch-pan-y overflow-hidden rounded-2xl bg-sand-50 shadow-sm md:aspect-[16/10]"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false);
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((img, i) => {
        const active = i === index;
        return (
          <div
            key={img.src}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${images.length}`}
            aria-hidden={!active}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none",
              active ? "opacity-100" : "opacity-0",
            )}
          >
            {/* Fondo difuminado de la propia foto para rellenar los márgenes (solo en la activa) */}
            {active && (
              <img
                src={img.src}
                alt=""
                className="absolute inset-0 size-full scale-110 object-cover opacity-60 blur-2xl"
              />
            )}
            {/* object-contain: la foto se ve entera, sin recortes */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="relative size-full object-contain"
            />
          </div>
        );
      })}

      <ArrowButton direction="prev" onClick={prev} />
      <ArrowButton direction="next" onClick={next} />

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 rounded-full bg-black/20 px-1 md:bottom-4">
        {images.map((img, i) => (
          // Área táctil de 26 px; el punto visible mide 10-12 px
          <button
            key={img.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ver foto ${i + 1}: ${img.alt}`}
            aria-current={i === index}
            className="p-2"
          >
            <span
              className={cn(
                "block size-2.5 rounded-full transition-colors md:size-3",
                i === index ? "bg-white" : "bg-white/50",
              )}
            />
          </button>
        ))}
      </div>

      {/* Solo se anuncia el cambio cuando lo provoca el usuario, no en cada avance automático */}
      <p className="sr-only" aria-live={interacting ? "polite" : "off"} aria-atomic>
        {current && `Foto ${index + 1} de ${images.length}: ${current.alt}`}
      </p>
    </section>
  );
}

function ArrowButton({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Foto anterior" : "Foto siguiente"}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow transition-colors hover:bg-white",
        direction === "prev" ? "left-2 md:left-4" : "right-2 md:right-4",
      )}
    >
      <Icon size={20} aria-hidden />
    </button>
  );
}
