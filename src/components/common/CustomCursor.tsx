import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      !matchMedia("(pointer: fine)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    let x = -50,
      y = -50,
      rx = -50,
      ry = -50,
      frame = 0;
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      dot.current?.style.setProperty(
        "transform",
        `translate3d(${x}px,${y}px,0)`,
      );
    };
    const hover = (event: Event) =>
      ring.current?.classList.toggle(
        "is-active",
        Boolean(
          (event.target as Element).closest(
            "a,button,input,select,textarea,.tilt-card",
          ),
        ),
      );
    const animate = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.current?.style.setProperty(
        "transform",
        `translate3d(${rx}px,${ry}px,0)`,
      );
      frame = requestAnimationFrame(animate);
    };
    addEventListener("pointermove", move);
    document.addEventListener("mouseover", hover);
    frame = requestAnimationFrame(animate);
    return () => {
      removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", hover);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
