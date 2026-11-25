import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import { homeSections, routes, toHomeSection, type HomeSectionId } from "@/config/navigation";
import { site } from "@/config/site";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";

interface HeaderProps {
  /** Sección del menú que se muestra como activa. */
  activeSection?: HomeSectionId;
}

export function Header({ activeSection }: HeaderProps) {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  // Con el menú abierto: se cierra al hacer scroll o al pulsar Escape
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("scroll", close, { passive: true, once: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        scrolled ? "bg-sand-300/90 shadow-sm backdrop-blur-sm" : "bg-sand-300",
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-5 py-4">
        <Link to={routes.home} className="flex min-w-0 items-center gap-2 min-[360px]:gap-3">
          <Logo className="h-7 min-[360px]:h-8 sm:h-11" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-semibold min-[360px]:text-base sm:text-lg">
              {site.shortName}
            </span>
            <span className="block text-xs text-muted">{site.doctor}</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          <NavLinks activeSection={activeSection} className="text-sm uppercase tracking-wider" />
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          className="shrink-0 rounded-md border border-sand-400 p-2.5 md:hidden"
        >
          {menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id={menuId}
          aria-label="Principal"
          className="flex flex-col border-t border-sand-200 bg-sand-50 p-4 md:hidden"
        >
          <NavLinks
            activeSection={activeSection}
            className="px-2 py-3"
            onNavigate={() => setMenuOpen(false)}
          />
        </nav>
      )}
    </header>
  );
}

interface NavLinksProps extends HeaderProps {
  className?: string;
  onNavigate?: () => void;
}

function NavLinks({ activeSection, className, onNavigate }: NavLinksProps) {
  return homeSections.map(({ id, label }) => {
    const active = id === activeSection;
    return (
      <Link
        key={id}
        to={toHomeSection(id)}
        onClick={onNavigate}
        aria-current={active ? "location" : undefined}
        className={cn(
          "transition-colors",
          active
            ? "font-semibold text-gold-700 underline decoration-gold-300 decoration-2 underline-offset-8"
            : "hover:text-gold-700",
          className,
        )}
      >
        {label}
      </Link>
    );
  });
}
