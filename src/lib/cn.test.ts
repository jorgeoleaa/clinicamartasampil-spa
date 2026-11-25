import { cn } from "./cn";

describe("cn", () => {
  it("descarta valores falsy", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });

  it("las clases posteriores sobrescriben a las anteriores en conflicto", () => {
    expect(cn("w-auto px-6", "w-44 px-5")).toBe("w-44 px-5");
    expect(cn("bg-gold-600", "bg-white")).toBe("bg-white");
  });

  it("mantiene las variantes responsive como clases independientes", () => {
    expect(cn("px-6", "px-5 sm:px-6")).toBe("px-5 sm:px-6");
  });
});
