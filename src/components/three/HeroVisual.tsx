import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { WebGLErrorBoundary } from "./WebGLErrorBoundary";
import { WebGLFallback } from "./WebGLFallback";
const Solar = lazy(() => import("./SolarHeroScene"));
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false),
    [pageActive, setPageActive] = useState(!document.hidden),
    [ok, setOk] = useState(true);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      setOk(Boolean(c.getContext("webgl2") || c.getContext("webgl")));
    } catch {
      setOk(false);
    }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      rootMargin: "100px",
    });
    if (ref.current) io.observe(ref.current);
    const visibility = () => setPageActive(!document.hidden);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  const reduced =
    typeof matchMedia !== "undefined" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <div ref={ref} className="hero-visual">
      {ok && !reduced && visible && pageActive ? (
        <WebGLErrorBoundary>
          <Suspense fallback={<WebGLFallback />}>
            <Solar />
          </Suspense>
        </WebGLErrorBoundary>
      ) : (
        <WebGLFallback />
      )}
      <div className="visual-label">
        <span>LIVE ENERGY FLOW</span>
        <b>Generation → Storage → Infrastructure</b>
      </div>
    </div>
  );
}
export { WebGLFallback as Fallback } from "./WebGLFallback";
