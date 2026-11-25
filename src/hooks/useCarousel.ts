import { useCallback, useEffect, useState } from "react";

interface Options {
  count: number;
  /** Milisegundos entre avances automáticos. */
  interval: number;
  /** Detiene el avance automático (hover, foco, preferencia de movimiento reducido…). */
  paused?: boolean;
}

export interface Carousel {
  index: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
}

const wrap = (index: number, count: number) => ((index % count) + count) % count;

/** Estado de un carrusel circular con avance automático. */
export function useCarousel({ count, interval, paused = false }: Options): Carousel {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => setIndex(wrap(i, count)), [count]);
  const next = useCallback(() => setIndex((i) => wrap(i + 1, count)), [count]);
  const prev = useCallback(() => setIndex((i) => wrap(i - 1, count)), [count]);

  // Depende de `index`: cualquier cambio (también manual) reinicia el temporizador,
  // así no salta de foto justo después de que el usuario haya elegido una.
  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setTimeout(next, interval);
    return () => window.clearTimeout(id);
  }, [index, paused, count, interval, next]);

  return { index, next, prev, goTo };
}
