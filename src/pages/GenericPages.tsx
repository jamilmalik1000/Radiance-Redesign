import { Navigate, useParams } from "react-router-dom";
import { Button, SectionHeading, TiltCard } from "../components/common/UI";
import { SEO } from "../components/common/SEO";
import {
  articles,
  contact,
  products,
  services,
  solutions,
} from "../data/content";
import { ContactForm, QuoteForm } from "../components/forms/Forms";
import { ProjectShowcase } from "../components/sections/InteractiveSections";
export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="page-hero">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}
export function Solutions() {
  return (
    <>
      <SEO
        title="Solar Solutions"
        description="Residential, commercial and industrial solar solutions in Pakistan."
        path="/solutions"
      />
      <PageHero
        eyebrow="SOLAR SOLUTIONS"
        title="Energy systems designed around the way you operate."
        body="Explore published solar offerings for homes, businesses and industrial facilities."
      />
      <section className="section card-grid">
        {solutions.map(({ icon: Icon, ...s }) => (
          <TiltCard className="solution-card" key={s.slug}>
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
            <h2>{s.title}</h2>
            <p>{s.description}</p>
            <Button to={`/solutions/${s.slug}`}>Explore</Button>
          </TiltCard>
        ))}
      </section>
    </>
  );
}
export function SolutionDetail() {
  const { slug } = useParams(),
    s = solutions.find((x) => x.slug === slug);
  if (!s) return <Navigate to="/404" replace />;
  const Icon = s.icon;
  return (
    <>
      <SEO
        title={s.title}
        description={s.description}
        path={`/solutions/${s.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          provider: { "@type": "Organization", name: "Radiance Tek" },
        }}
      />
      <PageHero
        eyebrow={`${s.range} · ${s.ideal}`}
        title={s.title}
        body={s.description}
      />
      <section className="section detail-grid">
        <div>
          <Icon />
          <SectionHeading
            eyebrow="FIT FOR PURPOSE"
            title="Designed after understanding your site."
          />
          <p>
            The published range is {s.range}. Final system selection requires an
            assessment of load, property conditions and operating requirements.
          </p>
        </div>
        <div>
          <h2>Published benefits</h2>
          {s.benefits.map((x) => (
            <p key={x}>✓ {x}</p>
          ))}
          <Button to="/request-quote">Request assessment</Button>
        </div>
      </section>
    </>
  );
}
export function Services() {
  return (
    <>
      <SEO
        title="Technology Services"
        description="Solar, security, smart-home and fire-safety services from Radiance Tek."
        path="/services"
      />
      <PageHero
        eyebrow="CONNECTED INFRASTRUCTURE"
        title="Four disciplines. One coordinated partner."
        body="Explore the complete service taxonomy published on the current Radiance Tek website."
      />
      <section className="section service-grid">
        {services.map(({ icon: Icon, ...s }) => (
          <article className="service-card" key={s.slug}>
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
            <h2>{s.title}</h2>
            <p>{s.description}</p>
            {s.items.map((x) => (
              <small key={x}>{x}</small>
            ))}
            <Button to={`/services/${s.slug}`}>Explore</Button>
          </article>
        ))}
      </section>
    </>
  );
}
export function ServiceDetail() {
  const { slug } = useParams(),
    s = services.find((x) => x.slug === slug);
  if (!s) return <Navigate to="/404" replace />;
  const Icon = s.icon;
  return (
    <>
      <SEO
        title={s.title}
        description={s.description}
        path={`/services/${s.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
        }}
      />
      <PageHero
        eyebrow="SERVICE DIVISION"
        title={s.title}
        body={s.description}
      />
      <section className="section detail-grid">
        <div>
          <Icon />
          <h2>Published capabilities</h2>
          <ul className="capabilities">
            {s.items.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading
            eyebrow="NEXT STEP"
            title="Start with a site conversation."
            body="Availability and technical specifications should be confirmed through consultation."
          />
          <Button to="/request-quote">Discuss your requirements</Button>
        </div>
      </section>
    </>
  );
}
export function Products() {
  return (
    <>
      <SEO
        title="Solar Products"
        description="Solar panels, inverters and batteries for integrated energy systems."
        path="/products"
      />
      <PageHero
        eyebrow="SYSTEM COMPONENTS"
        title="Products selected to work together."
        body="The public product catalogue identifies panels, inverters and batteries. Brand names await owner confirmation and usage approval."
      />
      <section className="section card-grid">
        {products.map(({ icon: Icon, ...p }) => (
          <article className="product-card" key={p.title}>
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
            <h2>{p.title}</h2>
            <p>{p.text}</p>
            <span className="approval">Brand/model confirmation required</span>
          </article>
        ))}
      </section>
    </>
  );
}
export function Projects() {
  return (
    <>
      <SEO
        title="Projects"
        description="A proposed framework for verified Radiance Tek solar case studies."
        path="/projects"
      />
      <PageHero
        eyebrow="PROJECT FRAMEWORK"
        title="Built to make every outcome verifiable."
        body="No detailed public project records were available during the audit. All tiles below are presentation placeholders, not claims of completed work."
      />
      <section className="section">
        <ProjectShowcase />
      </section>
    </>
  );
}
export function About() {
  return (
    <>
      <SEO
        title="About"
        description="The Radiance Tek story: a Pakistan solar venture founded in 2020 around reliability and trust."
        path="/about"
      />
      <PageHero
        eyebrow="ESTABLISHED 2020"
        title="Reliability and trust, engineered into every decision."
        body="Radiance Tek’s published story begins with a team returning to Pakistan to combine international skills and knowledge in a new solar venture."
      />
      <section className="section editorial">
        <SectionHeading
          eyebrow="THE STORY"
          title="A deliberate approach to integrated energy."
        />
        <p>
          The team describes spending close to eight months planning and
          sourcing products to create smart, reliable systems with compatible
          components. The company’s stated goal is to support a greener future
          for Pakistan through solar power.
        </p>
        <h2>Director’s message</h2>
        <p>
          The published message centres on transparency, customer confidence and
          responsive after-sales support. It describes a customer-focused
          organisation committed to handling issues directly and delivering work
          to the best of its ability.
        </p>
      </section>
    </>
  );
}
export function Blogs() {
  return (
    <>
      <SEO
        title="Energy Insights"
        description="Solar and energy educational articles from the Radiance Tek archive."
        path="/blogs"
      />
      <PageHero
        eyebrow="ENERGY INSIGHTS"
        title="Knowledge for better energy decisions."
        body="Selected topics from the public Radiance Tek article archive, edited into a clearer reading experience."
      />
      <section className="section card-grid">
        {articles.map((a) => (
          <article className="blog-card" key={a.slug}>
            <span>{a.category}</span>
            <h2>{a.title}</h2>
            <p>{a.excerpt}</p>
            <Button to={`/blogs/${a.slug}`}>Read article</Button>
          </article>
        ))}
      </section>
    </>
  );
}
export function BlogDetail() {
  const { slug } = useParams(),
    a = articles.find((x) => x.slug === slug);
  if (!a) return <Navigate to="/404" replace />;
  return (
    <>
      <SEO
        title={a.title}
        description={a.excerpt}
        path={`/blogs/${a.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          publisher: { "@type": "Organization", name: "Radiance Tek" },
        }}
      />
      <PageHero eyebrow={a.category} title={a.title} body={a.excerpt} />
      <article className="section editorial">
        <p>
          This concept preserves the subject and factual intent of the
          corresponding public archive article while avoiding dated pricing,
          unsupported incentives and unverified calculations.
        </p>
        <h2>A technical conversation comes first</h2>
        <p>
          Energy performance depends on site conditions, equipment selection,
          load profile and operating requirements. Radiance Tek’s published
          process begins with contact and consultation before solution
          selection, delivery, installation and after-sales support.
        </p>
        <Button to="/request-quote">Request a consultation</Button>
      </article>
    </>
  );
}
export function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact Radiance Tek in DHA Phase II, Islamabad."
        path="/contact"
      />
      <PageHero
        eyebrow="CONTACT"
        title="Let’s understand your site."
        body="Call, WhatsApp or send a demonstration enquiry. Form delivery must be connected before production."
      />
      <section className="section contact-page">
        <div>
          <h2>Head office</h2>
          <p>{contact.address}</p>
          <a href={contact.phone}>{contact.phoneDisplay}</a>
          <a href={contact.whatsapp}>{contact.whatsappDisplay} · WhatsApp</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <p>{contact.hours}</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
export function RequestQuote() {
  return (
    <>
      <SEO
        title="Request a Quote"
        description="Request a tailored technical assessment from Radiance Tek."
        path="/request-quote"
      />
      <PageHero
        eyebrow="TECHNICAL ENQUIRY"
        title="A better recommendation starts with better context."
        body="This estimator gathers useful details without promising system size, savings or price."
      />
      <section className="section form-page">
        <QuoteForm />
      </section>
    </>
  );
}
export function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy Placeholder"
        description="Placeholder for owner-approved privacy terms."
        path="/privacy"
      />
      <PageHero
        eyebrow="LEGAL PLACEHOLDER"
        title="Privacy policy requires owner approval."
        body="No production privacy terms were available in the audited public content."
      />
      <section className="section editorial">
        <p>
          Before launch, legal counsel should provide the data controller
          identity, collection purposes, retention periods, processors, user
          rights and contact procedure appropriate to the deployed form service.
        </p>
      </section>
    </>
  );
}
export function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The requested page could not be found."
        path="/404"
      />
      <section className="not-found">
        <span>404</span>
        <h1>This circuit ends here.</h1>
        <p>The page may have moved, but your route back is clear.</p>
        <Button to="/">Return home</Button>
      </section>
    </>
  );
}
