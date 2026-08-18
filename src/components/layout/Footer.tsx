import { Link } from "react-router-dom";
import { contact, services, solutions } from "../../data/content";
import { MessageCircle, Phone } from "lucide-react";
import { FloatingWhatsApp } from "../sections/InteractiveSections";
export function Footer() {
  return (
    <>
      <FloatingWhatsApp />
      <footer>
        <div>
          <Link className="brand" to="/">
            <span>R</span>
            <b>
              RADIANCE <i>TEK</i>
            </b>
          </Link>
          <p>
            Reliable energy and connected-infrastructure solutions for homes and
            businesses in Pakistan.
          </p>
          <small>
            Private redesign concept. Not endorsed by or affiliated with
            Radiance Tek.
          </small>
        </div>
        <div>
          <h3>Solutions</h3>
          {solutions.map((x) => (
            <Link key={x.slug} to={`/solutions/${x.slug}`}>
              {x.title}
            </Link>
          ))}
          <Link to="/products">Products</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div>
          <h3>Services</h3>
          {services.map((x) => (
            <Link key={x.slug} to={`/services/${x.slug}`}>
              {x.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={contact.phone}>{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <p>{contact.address}</p>
          <p>{contact.hours}</p>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Radiance Tek concept</span>
          <Link to="/privacy">Privacy policy placeholder</Link>
        </div>
      </footer>
      <div className="mobile-actions">
        <a href={contact.phone}>
          <Phone />
          Call
        </a>
        <a href={contact.whatsapp}>
          <MessageCircle />
          WhatsApp
        </a>
      </div>
    </>
  );
}
