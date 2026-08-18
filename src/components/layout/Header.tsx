import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { services, solutions, contact } from "../../data/content";
const items = [
  ["Home", "/"],
  ["Products", "/products"],
  ["Projects", "/projects"],
  ["Blogs", "/blogs"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
export function Header() {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null),
    panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 24);
    addEventListener("scroll", f, { passive: true });
    f();
    return () => removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    if (!open) return;
    const triggerNode = trigger.current;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a,button")?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panel.current) {
        const all = [
            ...panel.current.querySelectorAll<HTMLElement>("a,button"),
          ],
          first = all[0],
          last = all.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = "";
      removeEventListener("keydown", key);
      triggerNode?.focus();
    };
  }, [open]);
  return (
    <>
      <div
        className="quote-marquee"
        aria-label={`Request a quote or call ${contact.phoneDisplay}`}
      >
        <div>
          {[0, 1].map((copy) => (
            <span key={copy} aria-hidden={copy === 1}>
              GET A FREE CONSULTATION <b>✦</b> CALL {contact.phoneDisplay}{" "}
              <b>✦</b> WHATSAPP {contact.whatsappDisplay} <b>✦</b>
            </span>
          ))}
        </div>
      </div>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <Link className="brand" to="/" aria-label="Radiance Tek home">
          <span>R</span>
          <b>
            RADIANCE <i>TEK</i>
          </b>
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {items.slice(0, 1).map(([n, p]) => (
            <NavLink key={p} to={p}>
              {n}
            </NavLink>
          ))}
          <Mega
            label="Solutions"
            path="/solutions"
            links={solutions.map((x) => [x.title, `/solutions/${x.slug}`])}
          />
          <Mega
            label="Services"
            path="/services"
            links={services.map((x) => [x.title, `/services/${x.slug}`])}
          />
          {items.slice(1).map(([n, p]) => (
            <NavLink key={p} to={p}>
              {n}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/request-quote">
            Request a quote
          </Link>
        </nav>
        <button
          ref={trigger}
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu />
          <span className="sr-only">Open menu</span>
        </button>
        {open && (
          <div className="mobile-overlay">
            <div
              ref={panel}
              id="mobile-menu"
              className="mobile-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
            >
              <button className="menu-close" onClick={() => setOpen(false)}>
                <X />
                <span className="sr-only">Close menu</span>
              </button>
              <p className="eyebrow">Navigate</p>
              {items.map(([n, p]) => (
                <NavLink onClick={() => setOpen(false)} key={p} to={p}>
                  {n}
                </NavLink>
              ))}
              <details>
                <summary>Solutions</summary>
                {solutions.map((x) => (
                  <Link
                    onClick={() => setOpen(false)}
                    key={x.slug}
                    to={`/solutions/${x.slug}`}
                  >
                    {x.title}
                  </Link>
                ))}
              </details>
              <details>
                <summary>Services</summary>
                {services.map((x) => (
                  <Link
                    onClick={() => setOpen(false)}
                    key={x.slug}
                    to={`/services/${x.slug}`}
                  >
                    {x.title}
                  </Link>
                ))}
              </details>
              <Link
                className="button"
                onClick={() => setOpen(false)}
                to="/request-quote"
              >
                Request a quote
              </Link>
              <a className="mobile-phone" href={contact.phone}>
                <Phone /> {contact.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
function Mega({
  label,
  path,
  links,
}: {
  label: string;
  path: string;
  links: string[][];
}) {
  return (
    <div className="mega">
      <Link to={path}>
        {label}
        <ChevronDown size={14} />
      </Link>
      <div className="mega-panel">
        <span className="eyebrow">Explore {label}</span>
        {links.map(([n, p]) => (
          <Link key={p} to={p}>
            {n}
            <span>↗</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
