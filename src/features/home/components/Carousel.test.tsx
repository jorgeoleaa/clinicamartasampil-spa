import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Carousel } from "./Carousel";

const images = [
  { src: "/a.webp", alt: "Recepción" },
  { src: "/b.webp", alt: "Consulta" },
  { src: "/c.webp", alt: "Sala de espera" },
];

const currentDot = () =>
  screen.getAllByRole("button", { name: /^Ver foto/ }).find((b) => b.ariaCurrent === "true");

describe("Carousel", () => {
  it("navega con las flechas y los puntos", async () => {
    const user = userEvent.setup();
    render(<Carousel images={images} label="Fotos" />);

    expect(currentDot()).toHaveAccessibleName("Ver foto 1: Recepción");

    await user.click(screen.getByRole("button", { name: "Foto siguiente" }));
    expect(currentDot()).toHaveAccessibleName("Ver foto 2: Consulta");

    await user.click(screen.getByRole("button", { name: "Foto anterior" }));
    await user.click(screen.getByRole("button", { name: "Foto anterior" }));
    expect(currentDot()).toHaveAccessibleName("Ver foto 3: Sala de espera");

    await user.click(screen.getByRole("button", { name: "Ver foto 2: Consulta" }));
    expect(currentDot()).toHaveAccessibleName("Ver foto 2: Consulta");
  });

  it("solo expone a los lectores de pantalla la diapositiva visible", () => {
    render(<Carousel images={images} label="Fotos" />);

    expect(screen.getByRole("img", { name: "Recepción" })).toBeInTheDocument();
    expect(screen.queryByRole("img", { name: "Consulta" })).not.toBeInTheDocument();
  });
});
