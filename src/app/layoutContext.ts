import { useOutletContext } from "react-router-dom";
import type { HomeSectionId } from "@/config/navigation";

export interface LayoutContext {
  setActiveSection: (id: HomeSectionId | undefined) => void;
}

/** Acceso tipado al contexto que el layout raíz comparte con las páginas. */
export const useLayoutContext = () => useOutletContext<LayoutContext>();
