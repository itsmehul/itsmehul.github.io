import avatar from "./assets/avatar.png";
import portrait from "./assets/mehul.png";

type Project = {
  index: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Fuchka",
    description:
      "Conversational CRM for outreach and customer conversations using natural-language workflows and multi-tenant AI infrastructure.",
    stack: ["Next.js", "Vercel AI SDK", "Mastra", "LangGraph", "RAG"],
    link: "https://tryfuchka.com"
  },
  {
    index: "02",
    title: "Decks",
    description:
      "AI deck generator that turns a text brief into social-first, print-constrained slide exports with style-aware refinement.",
    stack: ["Next.js 15", "Gemini", "Puppeteer", "Better Auth"],
    link: "http://decks.tryfuchka.com"
  },
  {
    index: "03",
    title: "Epic Gains",
    description:
      "AI-powered fitness product that converts workout videos into structured, editable training programs with progress analytics.",
    stack: ["Next.js", "Gemini", "PostgreSQL", "Docker"],
    link: "https://epicgains.pro"
  }
];

const competencyTags = [
  "Full-stack engineering",
  "AI SaaS",
  "TypeScript",
  "Python",
  "Next.js",
  "Vercel AI SDK",
  "RAG",
  "Agent orchestration",
  "Multi-tenant architecture",
  "Product engineering"
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <img className="mark-photo" src={avatar} alt="" />
          <span className="brand-name">
            Mehul
            <br />
            Gawde
          </span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#craft">Craft</a>
          <a href="#path">Experience</a>
        </nav>
        <div className="header-actions">
          <a className="pill" href="mailto:mehulgawdenxt@gmail.com">
            Email me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" />
              Full-stack AI engineer
            </p>
            <h1>
              Engineering
              <br />
              clarity into
              <br />
              <em>complexity.</em>
            </h1>
            <p className="lede">
              Full-stack AI engineer shipping production SaaS with TypeScript,
              Python, Next.js and the Vercel AI SDK — multi-tenant systems, not
              demos.
            </p>
            <div className="hero-cta">
              <a className="pill filled" href="/Resume.pdf" download>
                Download resume <span aria-hidden="true">↗</span>
              </a>
              <a className="pill" href="mailto:mehulgawdenxt@gmail.com">
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <figure className="hero-portrait">
            <img src={portrait} alt="Mehul Gawde" />
            <figcaption>
              <span>MG</span>
              Mehul Gawde · Mumbai
            </figcaption>
          </figure>
        </section>

        <section className="status-strip" aria-label="Highlights">
          <div className="status-live">
            <span className="label">System</span>
            <strong>01</strong>
            <span className="online">Online</span>
          </div>
          <p className="status-meta">Architecture / Data / Experience</p>
          <dl className="stats">
            <div>
              <dt>5,000+</dt>
              <dd>Messages / day</dd>
            </div>
            <div>
              <dt>−90%</dt>
              <dd>AI infra cost</dd>
            </div>
            <div>
              <dt>Mumbai</dt>
              <dd>Based in India</dd>
            </div>
            <div>
              <dt>AI SaaS</dt>
              <dd>Product focus</dd>
            </div>
          </dl>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...competencyTags, ...competencyTags].map((item, i) => (
              <span key={`${item}-${i}`}>
                {item}
                <span className="asterisk">✳</span>
              </span>
            ))}
          </div>
        </div>

        <section id="work" className="section">
          <p className="section-kicker">Selected work</p>
          <h2>
            Products that change
            <br />
            <em>how work gets done.</em>
          </h2>
          <p className="section-lede">
            A few shipped systems — conversational CRM, AI decks, and training
            products built for production load.
          </p>
          <div className="card-grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <div className="card-top">
                  <span>{project.index}</span>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    ↗
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags">
                  {project.stack.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="craft" className="section">
          <p className="section-kicker">Craft</p>
          <h2>
            A stack chosen
            <br />
            for the <em>problem.</em>
          </h2>
          <p className="section-lede">
            Depth in TypeScript and Python, with RAG, agents and multi-tenant
            architecture used where they earn their place.
          </p>
          <ul className="craft-list">
            {competencyTags.map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="path" className="section">
          <p className="section-kicker">How I deliver</p>
          <h2>
            Progress, made
            <br />
            <em>visible.</em>
          </h2>
          <ol className="steps">
            <li>
              <span>01</span>
              <h3>Product Engineer — Fuchka</h3>
              <p className="when">March 2025 to Present</p>
              <p>
                Shipped production conversational CRM with multi-tenant AI
                workflows, OAuth, retries, rate-limit handling, and self-hosted
                infrastructure.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>Head of AI & Agent Orchestration — Valley</h3>
              <p className="when">June 2024 to February 2025</p>
              <p>
                Scaled personalized messaging to 5,000+ messages/day and reduced
                AI infra spend from $20K to $2K with workflow and model
                optimizations.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>Full-Stack Engineer — Seam (YC S20)</h3>
              <p className="when">May 2022 to May 2023</p>
              <p>
                Built smartlock integrations and improved dashboard operations
                for access management across IoT devices.
              </p>
            </li>
          </ol>
        </section>

        <section className="cta-band">
          <p className="section-kicker">Get in touch</p>
          <h2>
            Have a hard problem?
            <br />
            <em>Let’s make it clear.</em>
          </h2>
          <p className="section-lede">
            Tell me what is slowing the product down. I’ll help frame the right
            engineering response.
          </p>
          <a className="pill filled" href="mailto:mehulgawdenxt@gmail.com">
            Email me <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top">
          <img className="mark-photo" src={avatar} alt="" />
          <span className="brand-name">
            Mehul
            <br />
            Gawde
          </span>
        </a>
        <p>Full-stack AI · Mumbai, India</p>
        <div className="footer-links">
          <a href="mailto:mehulgawdenxt@gmail.com">Email</a>
          <a href="https://linkedin.com/in/mehulgawde" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/itsmehul" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="fine">+91 79775 22521</p>
      </footer>
    </div>
  );
}
