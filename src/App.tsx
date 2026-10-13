import type { ReactNode } from "react";
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
  "TypeScript",
  "Python",
  "Go",
  "Next.js",
  "Expo",
  "LangGraph",
  "Mastra",
  "RAG",
  "Gemini",
  "Better Auth",
  "PostgreSQL",
  "Docker"
];

function BrandIcon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-icon">
      {children}
    </svg>
  );
}

function IconMail() {
  return (
    <BrandIcon>
      <rect width="24" height="24" rx="6" fill="#EA4335" />
      <path fill="#fff" d="M5.2 8.2 12 12.8l6.8-4.6V16.4a.8.8 0 0 1-.8.8H6a.8.8 0 0 1-.8-.8z" />
      <path fill="#F6C7C3" d="m5.2 8.2 6.8 4.6 6.8-4.6L12 6.4z" />
    </BrandIcon>
  );
}

function IconLinkedIn() {
  return (
    <BrandIcon>
      <rect width="24" height="24" rx="6" fill="#0A66C2" />
      <path fill="#fff" d="M7.2 10H5.4V18h1.8v-8zM6.3 6.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM18.6 18h-1.8v-3.9c0-1.1-.4-1.8-1.5-1.8s-1.6.7-1.6 1.8V18h-1.8V10h1.8v1c.4-.7 1.2-1.3 2.5-1.3 1.8 0 3.4 1.2 3.4 3.8V18z" />
    </BrandIcon>
  );
}

function IconGitHub() {
  return (
    <BrandIcon>
      <rect width="24" height="24" rx="6" fill="#24292F" />
      <path fill="#fff" d="M12 5.2a6.8 6.8 0 0 0-2.1 13.2c.3.1.5 0 .5-.2v-1.1c-1.9.4-2.3-.8-2.3-.8-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.7.1 1 .7 1 .7.6 1 1.6.7 2 .6.1-.5.2-.7.4-.9-1.5-.2-3.1-.8-3.1-3.4 0-.7.3-1.4.7-1.8-.1-.2-.3-.9.1-1.8 0 0 .6-.2 1.9.7a6.5 6.5 0 0 1 3.4 0c1.3-.9 1.9-.7 1.9-.7.4.9.2 1.6.1 1.8.4.5.7 1.1.7 1.8 0 2.6-1.6 3.2-3.1 3.4.2.2.5.6.5 1.2v1.8c0 .2.1.3.5.2A6.8 6.8 0 0 0 12 5.2z" />
    </BrandIcon>
  );
}

function IconX() {
  return (
    <BrandIcon>
      <rect width="24" height="24" rx="6" fill="#111" />
      <path fill="#fff" d="M14.2 11.1 19.4 5.5h-1.2l-4.5 4.9-3.6-4.9H6.2l5.4 7.6-5.4 5.9h1.2l4.8-5.2 3.8 5.2h3.9l-5.7-8z" />
    </BrandIcon>
  );
}

function IconReddit() {
  return (
    <BrandIcon>
      <rect width="24" height="24" rx="6" fill="#FF4500" />
      <circle cx="12" cy="13" r="4.6" fill="#fff" />
      <circle cx="10" cy="12.5" r=".85" fill="#FF4500" />
      <circle cx="14" cy="12.5" r=".85" fill="#FF4500" />
      <path fill="none" stroke="#FF4500" strokeWidth=".9" strokeLinecap="round" d="M9.8 14.8c.7.6 1.4.9 2.2.9s1.5-.3 2.2-.9" />
      <circle cx="16.4" cy="9.6" r="1.25" fill="#fff" />
      <path stroke="#fff" strokeWidth="1" strokeLinecap="round" d="M13.6 9.2 15.1 6.4" />
    </BrandIcon>
  );
}

function IconMedium() {
  return (
    <BrandIcon>
      <rect width="24" height="24" rx="6" fill="#111" />
      <ellipse cx="8.2" cy="12" rx="3.2" ry="4" fill="#fff" />
      <ellipse cx="14.2" cy="12" rx="1.6" ry="3.7" fill="#fff" />
      <ellipse cx="17.8" cy="12" rx=".65" ry="3.4" fill="#fff" />
    </BrandIcon>
  );
}

function IconSubstack() {
  return (
    <BrandIcon>
      <rect width="24" height="24" rx="6" fill="#FF6719" />
      <path fill="#fff" d="M6 7h12v1.6H6zM6 10.2h12v1.6H6zM6 13.4h12L12 18.2z" />
    </BrandIcon>
  );
}

function SocialLinks({ includeTop }: { includeTop?: boolean }) {
  return (
    <div className="footer-links">
      <a href="mailto:mehulgawdenxt@gmail.com" aria-label="Email">
        <IconMail />
      </a>
      <a
        href="https://linkedin.com/in/mehulgawde"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <IconLinkedIn />
      </a>
      <a
        href="https://github.com/itsmehul"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <IconGitHub />
      </a>
      <a href="https://x.com/mrgawde" target="_blank" rel="noreferrer" aria-label="X">
        <IconX />
      </a>
      <a
        href="https://www.reddit.com/user/mehulgawde/"
        target="_blank"
        rel="noreferrer"
        aria-label="Reddit"
      >
        <IconReddit />
      </a>
      <a
        href="https://medium.com/@mehulgawdenxt"
        target="_blank"
        rel="noreferrer"
        aria-label="Medium"
      >
        <IconMedium />
      </a>
      <a
        href="https://substack.com/@mehulgawde"
        target="_blank"
        rel="noreferrer"
        aria-label="Substack"
      >
        <IconSubstack />
      </a>
      {includeTop ? (
        <a href="#top" aria-label="Back to top">
          <IconArrowUp />
        </a>
      ) : null}
    </div>
  );
}

function IconArrowUp() {
  return (
    <BrandIcon>
      <rect width="24" height="24" rx="6" fill="#111" />
      <path fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 17V8M8 11.5 12 7.5l4 4" />
    </BrandIcon>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <img className="mark-photo" src={avatar} alt="" />
          <span className="brand-name">Mehul Gawde</span>
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
            <SocialLinks />
            <h1>
              Engineering clarity
              <br />
              into complexity.
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
        </section>

        <div className="stage">
          <div className="window">
            <div className="window-bar">
              <span className="traffic" />
              <span className="traffic" />
              <span className="traffic" />
              <span className="window-title">Mehul · Mumbai</span>
            </div>
            <div className="window-body">
              <figure className="portrait">
                <img src={portrait} alt="Mehul Gawde" />
              </figure>
              <div className="transcript">
                <div className="bubble">
                  <small>Product</small>
                  Ship a multi-tenant conversational CRM that holds up past the demo.
                </div>
                <div className="bubble me">
                  <small>Mehul</small>
                  TypeScript, agents, and self-hosted infra — built for production load.
                </div>
                <div className="bubble">
                  <small>Result</small>
                  5,000+ messages a day. AI infra spend down about 90%.
                </div>
              </div>
            </div>
          </div>
          <aside className="float-card">
            <strong>Available for product work</strong>
            <p>Full-stack AI engineer. Architecture, data, and the experience around them.</p>
          </aside>
        </div>

        <dl className="stats" aria-label="Highlights">
          <div className="stat">
            <dt>5,000+</dt>
            <dd>Messages / day</dd>
          </div>
          <div className="stat">
            <dt>−90%</dt>
            <dd>AI infra cost</dd>
          </div>
          <div className="stat">
            <dt>Mumbai</dt>
            <dd>Based in India</dd>
          </div>
          <div className="stat">
            <dt>AI SaaS</dt>
            <dd>Product focus</dd>
          </div>
        </dl>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...competencyTags, ...competencyTags].map((item, i) => (
              <span key={`${item}-${i}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <section id="work" className="section">
          <p className="section-kicker">Selected work</p>
          <h2>
            Products that change
            <br />
            how work gets done.
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
            for the problem.
          </h2>
          <p className="section-lede">
            TypeScript, Python, and Go across agents, mobile, and self-hosted
            APIs — RAG, LangGraph, and auth used where the product needs them.
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
            visible.
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
            Let’s make it clear.
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
        <div className="footer-id">
          <a className="brand" href="#top">
            <img className="mark-photo" src={avatar} alt="" />
            <span className="brand-name">Mehul Gawde</span>
          </a>
          <p>
            Full-stack AI · Mumbai
            <a href="tel:+917977522521">+91 79775 22521</a>
          </p>
        </div>
        <SocialLinks includeTop />
      </footer>
    </div>
  );
}
