import { useEffect } from "react";
export function useMotion() {
  useEffect(() => {
    if (
      typeof ResizeObserver === "undefined" ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    let stop = () => {};
    (async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      let frame = 0;
      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".section-heading").forEach((el) =>
          gsap.fromTo(
            el,
            { opacity: 0, y: 22 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            },
          ),
        );
        gsap.fromTo(
          ".process li",
          { opacity: 0, y: -130, rotateX: -18, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.72,
            ease: "back.out(1.35)",
            stagger: 0.18,
            scrollTrigger: {
              trigger: ".process ol",
              start: "top 82%",
              once: true,
            },
          },
        );
        gsap.utils
          .toArray<HTMLElement>(
            ".product-section .card-grid, .insights .card-grid, .service-grid",
          )
          .forEach((grid) => {
            const cards = Array.from(grid.children);
            gsap.fromTo(
              cards,
              {
                opacity: 0,
                x: (index) =>
                  index % 3 === 0 ? -70 : index % 3 === 2 ? 70 : 0,
                y: (index) => (index % 3 === 1 ? -55 : 30),
              },
              {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.75,
                ease: "power3.out",
                stagger: 0.11,
                scrollTrigger: { trigger: grid, start: "top 86%", once: true },
              },
            );
          });
      });
      stop = () => {
        cancelAnimationFrame(frame);
        lenis.destroy();
        ctx.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    })();
    return () => stop();
  }, []);
}
