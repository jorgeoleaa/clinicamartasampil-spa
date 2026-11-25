import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MapEmbed } from "./MapEmbed";

describe("MapEmbed", () => {
  it("no carga el mapa de Google (ni sus cookies) hasta que el usuario lo pide", async () => {
    const user = userEvent.setup();
    const { container } = render(<MapEmbed />);

    expect(container.querySelector("iframe")).toBeNull();
    expect(screen.getByRole("link", { name: "Abrir en Google Maps" })).toHaveAttribute(
      "target",
      "_blank",
    );

    await user.click(screen.getByRole("button", { name: "Mostrar mapa" }));

    expect(screen.getByTitle("Ubicación de la clínica en Google Maps")).toBeInTheDocument();
  });
});
