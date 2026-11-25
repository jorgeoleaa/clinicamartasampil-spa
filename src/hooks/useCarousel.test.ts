import { act, renderHook } from "@testing-library/react";
import { useCarousel } from "./useCarousel";

describe("useCarousel", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("da la vuelta en ambos sentidos", () => {
    const { result } = renderHook(() => useCarousel({ count: 3, interval: 1000, paused: true }));

    act(() => result.current.prev());
    expect(result.current.index).toBe(2);

    act(() => result.current.next());
    expect(result.current.index).toBe(0);

    act(() => result.current.goTo(-4));
    expect(result.current.index).toBe(2);
  });

  it("avanza solo cada intervalo", () => {
    const { result } = renderHook(() => useCarousel({ count: 3, interval: 1000 }));

    act(() => vi.advanceTimersByTime(1000));
    expect(result.current.index).toBe(1);

    act(() => vi.advanceTimersByTime(1000));
    expect(result.current.index).toBe(2);
  });

  it("no avanza mientras está en pausa", () => {
    const { result } = renderHook(() => useCarousel({ count: 3, interval: 1000, paused: true }));

    act(() => vi.advanceTimersByTime(5000));
    expect(result.current.index).toBe(0);
  });

  it("reinicia el temporizador tras un cambio manual", () => {
    const { result } = renderHook(() => useCarousel({ count: 5, interval: 1000 }));

    act(() => vi.advanceTimersByTime(900));
    act(() => result.current.goTo(3));
    act(() => vi.advanceTimersByTime(900));
    expect(result.current.index).toBe(3);

    act(() => vi.advanceTimersByTime(100));
    expect(result.current.index).toBe(4);
  });
});
