import { ArrowDown, Check, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import { HeroVisual } from "../components/three/HeroVisual";
import {
  Button,
  Reveal,
  SectionHeading,
  TiltCard,
} from "../components/common/UI";
import { SEO } from "../components/common/SEO";
import {
  articles,
  cities,
  contact,
  divisions,
  products,
  services,
  solutions,
} from "../data/content";
import { QuoteForm } from "../components/forms/Forms";
import {
  ProjectShowcase,
  TestimonialCarousel,
} from "../components/sections/InteractiveSections";
export default function Home() {
  return (
    <>
      <SEO
        title="Connected Energy & Infrastructure Solutions"
        description="Solar, energy storage, EV charging, security, automation and fire-safety solutions across Pakistan."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          name: "Radiance Tek",
          email: contact.email,
          telephone: "+923225566555",
          address: {
            "@type": "PostalAddress",
            streetAddress: contact.address,
            addressLocality: "Islamabad",
            addressCountry: "PK",
          },
        }}
      />
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <i /> SOLAR INTELLIGENCE · PAKISTAN
          </span>
          <h1>
            Power today.
            <br />
            <em>Engineer tomorrow.</em>
          </h1>
          <p>
            Connected solar, storage, EV charging and smart-infrastructure
            solutions designed for homes, businesses and industry across
            Pakistan.
          </p>
          <div className="hero-actions">
            <Button to="/request-quote">Get a free consultation</Button>
            <Button className="secondary" to="/solutions">
              Explore solutions
            </Button>
          </div>
          <div className="contact-inline">
            <a href={contact.phone}>
              <Phone /> {contact.phoneDisplay}
            </a>
            <a href={contact.whatsapp}>
              <MessageCircle /> WhatsApp
            </a>
          </div>
        </div>
        <HeroVisual />
        <a href="#trust" className="scroll-indicator">
          <ArrowDown />
          Scroll to explore
        </a>
      </section>
      <section id="trust" className="trust-strip">
        {divisions.map(({ label, icon: Icon }) => (
          <div key={label}>
            <Icon />
            <span>{label}</span>
          </div>
        ))}
        <div className="city-ticker">
          <small>Published service coverage</small>
          <b>{cities.join(" · ")}</b>
        </div>
      </section>
      <section className="why section">
        <Reveal>
          <SectionHeading
            eyebrow="WHY SOLAR"
            title="Turn Pakistan’s energy challenges into greater control."
            body="Solar can help households and organisations manage electricity costs, improve energy reliability and reduce dependence on conventional generation."
          />
        </Reveal>
        <div className="why-grid">
          {[
            [
              "01",
              "Lower electricity costs",
              "Use on-site generation to reduce reliance on purchased grid power.",
            ],
            [
              "02",
              "Energy reliability",
              "Pair generation with hybrid or storage options where backup matters.",
            ],
            [
              "03",
              "Cleaner generation",
              "Convert sunlight into useful electricity without fuel combustion at the point of use.",
            ],
            [
              "04",
              "Built for every scale",
              "Solutions for residential, commercial, industrial and agricultural applications.",
            ],
          ].map((x) => (
            <Reveal key={x[0]}>
              <article>
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section solutions-section">
        <SectionHeading
          eyebrow="PRIMARY SOLUTIONS"
          title="One energy strategy. Three operating scales."
        />
        <div className="card-grid">
          {solutions.map(({ icon: Icon, ...s }) => (
            <TiltCard key={s.slug} className="solution-card">
              <div className="card-media">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  width="700"
                  height="440"
                  loading="lazy"
                />
              </div>
              <Icon />
              <span className="range">{s.range}</span>
              <h3>{s.title}</h3>
              <small>IDEAL FOR</small>
              <p>{s.ideal}</p>
              <ul>
                {s.benefits.map((b) => (
                  <li key={b}>
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>
              <div>
                <Link to={`/solutions/${s.slug}`}>Explore ↗</Link>
                <Link to="/request-quote">Request quote</Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
      <section className="section ecosystem">
        <SectionHeading
          eyebrow="COMPLETE ECOSYSTEM"
          title="Infrastructure that works as one connected system."
          body="From generation and storage to protection, automation and life safety—explore Radiance Tek’s published service divisions."
        />
        <div className="service-grid">
          {services.map(({ icon: Icon, ...s }, i) => (
            <Reveal key={s.slug}>
              <article className="service-card">
                <span>0{i + 1}</span>
                <div className="card-media service-media">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    width="800"
                    height="480"
                    loading="lazy"
                  />
                </div>
                <Icon />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <div>
                  {s.items.slice(0, 5).map((x) => (
                    <small key={x}>{x}</small>
                  ))}
                </div>
                <Link to={`/services/${s.slug}`}>
                  View division <b>↗</b>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section projects-preview">
        <SectionHeading
          eyebrow="PROJECT SHOWCASE"
          title="Proof belongs in the details."
          body="The public site does not expose verifiable case-study records. These clearly labelled modules show how owner-approved work can be presented."
        />
        <ProjectShowcase compact />
        <Button to="/projects">View project framework</Button>
      </section>
      <section className="section product-section">
        <SectionHeading
          eyebrow="ENERGY HARDWARE"
          title="The essential components behind every system."
        />
        <div className="card-grid">
          {products.map(({ icon: Icon, ...p }) => (
            <TiltCard key={p.title} className="product-card">
              <div className="card-media">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width="700"
                  height="440"
                  loading="lazy"
                />
              </div>
              <Icon />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <Link to="/products">Explore products ↗</Link>
            </TiltCard>
          ))}
        </div>
      </section>
      <section className="section process">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From first conversation to ongoing support."
        />
        <ol>
          {[
            ["Contact", "Call or reach out on WhatsApp."],
            ["Consult", "Review the available solution options."],
            ["Deliver", "Arrange delivery and installation."],
            ["Support", "Continue with after-sales guidance."],
          ].map((x, i) => (
            <li key={x[0]} style={{ "--step": i } as CSSProperties}>
              <b>0{i + 1}</b>
              <div>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="section testimonials">
        <SectionHeading
          eyebrow="CUSTOMER VOICES"
          title="Experiences published on the existing website."
        />
        <TestimonialCarousel />
        <small>
          Wording lightly edited for grammar; owner approval recommended before
          publication.
        </small>
      </section>
      <section className="section insights">
        <SectionHeading
          eyebrow="FIELD NOTES"
          title="Ideas for a more informed energy decision."
        />
        <div className="card-grid">
          {articles.map((a) => (
            <article className="blog-card" key={a.slug}>
              <span>{a.category}</span>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
              <small>{a.date}</small>
              <Link to={`/blogs/${a.slug}`}>Read article ↗</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section quote-section">
        <div>
          <SectionHeading
            eyebrow="START A CONVERSATION"
            title="Tell us what your site needs."
            body="Share a few details for a tailored technical assessment. This concept does not estimate guaranteed size, savings or price."
          />
          <div className="contact-inline">
            <a href={contact.phone}>
              <Phone />
              {contact.phoneDisplay}
            </a>
            <a href={contact.whatsapp}>
              <MessageCircle />
              WhatsApp
            </a>
          </div>
        </div>
        <QuoteForm compact />
      </section>
    </>
  );
}
