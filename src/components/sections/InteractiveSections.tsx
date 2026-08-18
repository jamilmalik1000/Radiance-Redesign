import { ChevronLeft, ChevronRight, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import infrastructureImage from "../../assets/generated/future-infrastructure-concept.jpg";
import residentialSolar from "../../assets/stock/residential-solar.jpg";
import commercialSolar from "../../assets/stock/commercial-solar.jpg";
import { contact, testimonials } from "../../data/content";

const categories = ["All", "Residential", "Commercial", "Industrial"] as const;
export function ProjectShowcase({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const projects = [
    {
      category: "Residential",
      image: residentialSolar,
      alt: "Residential rooftop solar reference photograph; demonstration placement only",
    },
    {
      category: "Commercial",
      image: commercialSolar,
      alt: "Commercial rooftop solar reference photograph; demonstration placement only",
    },
    {
      category: "Industrial",
      image: infrastructureImage,
      alt: "Concept visualization of industrial solar infrastructure; not a completed Radiance Tek project",
    },
  ] as const;
  return (
    <>
      <div
        className="filters"
        role="group"
        aria-label="Filter project demonstrations"
      >
        {categories.map((item) => (
          <button
            className={filter === item ? "active" : ""}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects
          .filter((item) => filter === "All" || filter === item.category)
          .map((item, index) => (
            <article className="depth-project" key={item.category}>
              <div className="project-art has-image">
                <img
                  src={item.image}
                  width="1600"
                  height="900"
                  loading={compact ? "lazy" : "eager"}
                  style={{ objectPosition: `${30 + index * 25}% center` }}
                  alt={item.alt}
                />
                <div className="project-grid-overlay" />
                <span>CONCEPT MODULE · OWNER DATA REQUIRED</span>
              </div>
              <small>{item.category}</small>
              <h3>Case study awaiting verification</h3>
              <p>
                <MapPin /> Location · capacity · system type · completion
              </p>
            </article>
          ))}
      </div>
    </>
  );
}

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const item = testimonials[current];
  return (
    <div className="testimonial-carousel">
      <blockquote>
        <span aria-hidden="true">“</span>
        <p>{item.quote}</p>
        <footer>{item.name}</footer>
      </blockquote>
      <div className="carousel-controls">
        <button
          onClick={() =>
            setCurrent(
              (current - 1 + testimonials.length) % testimonials.length,
            )
          }
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <p aria-live="polite">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(testimonials.length).padStart(2, "0")}
        </p>
        <button
          onClick={() => setCurrent((current + 1) % testimonials.length)}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="carousel-dots">
        {testimonials.map((t, index) => (
          <button
            key={t.name}
            aria-label={`Show testimonial from ${t.name}`}
            aria-pressed={index === current}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={contact.whatsapp}
      aria-label="Chat with Radiance Tek on WhatsApp"
    >
      <span>
        <MessageCircle />
      </span>
      <b>WhatsApp</b>
      <small>Start an enquiry</small>
    </a>
  );
}
