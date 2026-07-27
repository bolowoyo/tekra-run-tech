const capabilities = [
  {
    number: "01",
    title: "Data Engineering",
    description:
      "Build trusted data foundations that move cleanly, scale confidently, and turn complexity into useful intelligence.",
    tags: ["Data platforms", "Pipelines", "Analytics"],
  },
  {
    number: "02",
    title: "Cloud Engineering & Modernization",
    description:
      "Modernize infrastructure and applications with cloud architectures designed for resilience, velocity, and control.",
    tags: ["Cloud native", "Migration", "Platform engineering"],
  },
  {
    number: "03",
    title: "Software Delivery",
    description:
      "Move from idea to production through practical product engineering, automation, and dependable delivery systems.",
    tags: ["Application delivery", "DevSecOps", "Automation"],
  },
  {
    number: "04",
    title: "Security Architecture",
    description:
      "Embed security into every layer with architectures that protect critical systems without slowing the business down.",
    tags: ["Zero trust", "Risk design", "Secure by default"],
  },
  {
    number: "05",
    title: "Operations & Design",
    description:
      "Design the operating models, service practices, and technical blueprints that keep modern environments running.",
    tags: ["Service design", "Reliability", "Operating models"],
  },
  {
    number: "06",
    title: "OEM Licensing",
    description:
      "Simplify strategic technology procurement with informed licensing guidance and partner-aligned solutions.",
    tags: ["Advisory", "Procurement", "Lifecycle value"],
  },
];

const partners = ["Cisco", "Check Point", "Microsoft", "AWS", "Tanium"];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tekra Run Technologies home">
          <span className="brand-mark" aria-hidden="true">TR</span>
          <span className="brand-name">Tekra Run</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#partners">Partners</a>
          <a href="#approach">Approach</a>
        </nav>

        <a className="header-cta" href="#contact">
          Start a conversation
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-kicker">
          <span className="pulse-dot" />
          Technology, engineered to move
        </div>

        <h1 id="hero-heading">
          <span>Build what’s</span>
          <span className="hero-outline">next. Run it</span>
          <span>without limits.</span>
        </h1>

        <div className="hero-bottom">
          <p>
            Tekra Run turns complex technology into resilient, secure, and
            scalable systems—built for the way your organization needs to move.
          </p>
          <a className="circle-link" href="#capabilities" aria-label="Explore our capabilities">
            <span>Explore</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>TRT / 001</span>
          <span>ENGINEERING / MODERNIZATION / SECURITY</span>
        </div>
      </section>

      <section className="statement-section" aria-label="Our point of view">
        <p className="eyebrow">The Tekra difference</p>
        <p className="statement">
          Technology should create momentum, not friction. We bring strategy,
          engineering, and operations together to make ambitious transformation
          <em> work in the real world.</em>
        </p>
      </section>

      <section className="capabilities-section" id="capabilities" aria-labelledby="capabilities-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Core competencies</p>
            <h2 id="capabilities-heading">Deep expertise.<br />One clear direction.</h2>
          </div>
          <p className="section-intro">
            From foundational architecture to day-two operations, Tekra connects
            the capabilities required to deliver lasting outcomes.
          </p>
        </div>

        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability-row" key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <div className="tag-list" aria-label={`${capability.title} focus areas`}>
                {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <span className="row-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="partners-section" id="partners" aria-labelledby="partners-heading">
        <div className="partner-copy">
          <p className="eyebrow">OEM ecosystem</p>
          <h2 id="partners-heading">Technology leaders.<br />Integrated with purpose.</h2>
          <p>
            Our strategic OEM relationships help us design the right solution,
            source it intelligently, and support its full lifecycle.
          </p>
        </div>

        <div className="partner-board">
          {partners.map((partner, index) => (
            <div className="partner-cell" key={partner}>
              <span className="partner-index">0{index + 1}</span>
              <strong>{partner}</strong>
            </div>
          ))}
          <div className="partner-cell partner-cell-accent">
            <span className="partner-index">∞</span>
            <strong>One<br />ecosystem</strong>
          </div>
        </div>
      </section>

      <section className="approach-section" id="approach" aria-labelledby="approach-heading">
        <div className="approach-title">
          <p className="eyebrow light">How we work</p>
          <h2 id="approach-heading">Clarity at every layer.</h2>
        </div>
        <div className="approach-steps">
          <article>
            <span>01 / UNDERSTAND</span>
            <h3>Start with the outcome.</h3>
            <p>We align technology decisions to the mission, constraints, and measurable result.</p>
          </article>
          <article>
            <span>02 / ENGINEER</span>
            <h3>Design for reality.</h3>
            <p>We build practical systems that account for people, process, risk, and scale.</p>
          </article>
          <article>
            <span>03 / ENABLE</span>
            <h3>Leave capability behind.</h3>
            <p>We transfer knowledge and strengthen teams so progress continues long after launch.</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <p className="eyebrow">Your next move</p>
        <div className="contact-layout">
          <h2 id="contact-heading">
            Complex challenge?
            <span> Let’s make it clear.</span>
          </h2>
          <p>
            Bring us the problem that keeps getting pushed to tomorrow.
            We’ll help you find the path forward.
          </p>
          <a className="contact-link" href="#top">
            Connect with Tekra
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">TR</span>
          <span className="brand-name">Tekra Run Technologies</span>
        </a>
        <p>Data. Cloud. Software. Security. Operations.</p>
        <p>© {new Date().getFullYear()} Tekra Run Technologies</p>
      </footer>
    </main>
  );
}
