import "@testing-library/jest-dom/vitest";
class IO {
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(globalThis, "IntersectionObserver", { value: IO });
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
Object.defineProperty(window, "scrollTo", { value: () => {} });
Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  value: () => null,
});
