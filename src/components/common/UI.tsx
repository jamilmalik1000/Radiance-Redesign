import { ArrowRight } from "lucide-react";
import { Link, type LinkProps } from "react-router-dom";
import { useEffect, useRef, type ReactNode, type MouseEvent } from "react";
export function Button({
  children,
  className = "",
  ...props
}: LinkProps & { children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.08}px,${(e.clientY - r.top - r.height / 2) * 0.08}px)`;
  };
  return (
    <Link
      ref={ref}
      onMouseMove={move}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
      className={`button ${className}`}
      {...props}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const move = (e: MouseEvent<HTMLDivElement>) => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const r = e.currentTarget.getBoundingClientRect(),
      x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty("--rx", `${-y * 8}deg`);
    e.currentTarget.style.setProperty("--ry", `${x * 10}deg`);
    e.currentTarget.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    e.currentTarget.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  return (
    <div
      onMouseMove={move}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty("--rx", "0deg");
        e.currentTarget.style.setProperty("--ry", "0deg");
      }}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}
