import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { site } from "./site";

const digits = (value: string) => value.replace(/\D/g, "");

describe("datos de contacto", () => {
  // Evita que se repita el fallo en el que el número mostrado y el enlace no coincidían
  it("el enlace del teléfono llama al número que se muestra", () => {
    expect(digits(site.phone.href)).toBe(`34${digits(site.phone.display)}`);
  });

  it("el enlace del email escribe a la dirección que se muestra", () => {
    expect(site.email.href).toBe(`mailto:${site.email.display}`);
  });

  it("el enlace de WhatsApp lleva un mensaje predefinido", () => {
    const url = new URL(site.whatsapp.href);
    expect(url.hostname).toBe("wa.me");
    expect(url.searchParams.get("text")).toMatch(/cita/);
  });
});

describe("datos estructurados de index.html", () => {
  const html = readFileSync(resolve(__dirname, "../../index.html"), "utf8");
  const json = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/.exec(html)?.[1];
  const ld = JSON.parse(json ?? "{}");

  it("coinciden con la configuración del sitio", () => {
    expect(ld.name).toBe(site.name);
    expect(ld.telephone).toBe(site.phone.href.replace("tel:", ""));
    expect(ld.email).toBe(site.email.display);
    expect(ld.address.streetAddress).toBe(site.address.street);
    expect(ld.address.postalCode).toBe(site.address.postalCode);
    expect(ld.address.addressLocality).toBe(site.address.city);
  });
});
