import { render, screen } from "@testing-library/react";
import { HeroVisual, Fallback } from "../components/three/HeroVisual";
describe("WebGL fallback", () => {
  it("provides an accessible static fallback", () => {
    render(<Fallback />);
    expect(screen.getByTestId("webgl-fallback")).toBeInTheDocument();
  });
  it("mounts visual without trapping interaction", () => {
    render(<HeroVisual />);
    expect(screen.getByTestId("webgl-fallback")).toBeInTheDocument();
  });
  it("uses the fallback when reduced motion is requested", () => {
    const original = window.matchMedia;
    window.matchMedia = ((query: string) => ({
      ...original(query),
      matches: query.includes("prefers-reduced-motion"),
    })) as typeof window.matchMedia;
    render(<HeroVisual />);
    expect(screen.getByTestId("webgl-fallback")).toBeInTheDocument();
    window.matchMedia = original;
  });
});
