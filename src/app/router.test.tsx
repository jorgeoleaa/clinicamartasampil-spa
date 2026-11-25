import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { homeSections, routes } from "@/config/navigation";
import { appRoutes } from "./router";

function renderAt(path: string) {
  const router = createMemoryRouter(appRoutes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
  return router;
}

const mainNav = () => screen.getAllByRole("navigation", { name: "Principal" })[0]!;

describe("enrutado", () => {
  it("la portada contiene todas las secciones enlazadas desde el menú", async () => {
    renderAt(routes.home);
    await screen.findByRole("heading", { level: 1 });

    for (const { id } of homeSections) {
      expect(document.getElementById(id), `falta la sección #${id}`).not.toBeNull();
    }
  });

  it("los enlaces del menú apuntan a las secciones de la portada", async () => {
    renderAt(routes.legalNotice);
    await screen.findByRole("heading", { level: 1, name: "Aviso legal" });

    expect(within(mainNav()).getByRole("link", { name: "Galería" })).toHaveAttribute(
      "href",
      "/#galeria",
    );
  });

  it("carga Sobre mí, marca su entrada en el menú y actualiza el título", async () => {
    renderAt(routes.about);

    expect(await screen.findByRole("heading", { level: 1 })).toHaveTextContent("Marta Sampil");
    expect(within(mainNav()).getByRole("link", { name: "Sobre mí" })).toHaveAttribute(
      "aria-current",
      "location",
    );
    expect(document.title).toMatch(/^Sobre mí/);
  });

  it.each([
    [routes.privacy, "Política de privacidad"],
    [routes.cookies, "Política de cookies"],
    [routes.legalNotice, "Aviso legal"],
  ])("renderiza la página legal %s", async (path, title) => {
    renderAt(path);
    expect(await screen.findByRole("heading", { level: 1, name: title })).toBeInTheDocument();
  });

  it("muestra la página 404 en rutas desconocidas", async () => {
    renderAt("/no-existe");
    expect(
      await screen.findByRole("heading", { level: 1, name: "Página no encontrada" }),
    ).toBeInTheDocument();
  });

  it("el menú móvil se abre, informa de su estado y se cierra con Escape", async () => {
    const user = userEvent.setup();
    renderAt(routes.home);

    const toggle = await screen.findByRole("button", { name: "Abrir menú" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByRole("navigation", { name: "Principal" })).toHaveLength(2);

    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
