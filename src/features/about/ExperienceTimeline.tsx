import { experience } from "@/content/about";
import { cn } from "@/lib/cn";

/** Línea de tiempo: en móvil, una columna; en escritorio, los hitos alternan a ambos lados. */
export function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        aria-hidden
        className="absolute inset-y-0 left-3 w-0.5 -translate-x-1/2 bg-sand-200 md:left-1/2"
      />
      <ol className="space-y-12">
        {experience.map((item, index) => {
          const right = index % 2 === 1;
          return (
            <li key={item.period} className="relative">
              <span
                aria-hidden
                className="absolute left-3 top-1.5 size-4 -translate-x-1/2 rounded-full border-2 border-sand-50 bg-gold-300 ring-2 ring-sand-200 md:left-1/2"
              />
              <div
                className={cn(
                  "pl-12 md:w-1/2",
                  right ? "md:ml-auto md:pl-12" : "md:pl-0 md:pr-12 md:text-right",
                )}
              >
                <p className="text-sm font-medium text-muted">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.place}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
