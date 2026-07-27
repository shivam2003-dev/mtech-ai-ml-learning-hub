"use client";

import { FormEvent, useMemo, useState } from "react";

const featuredPosts = [
  {
    category: "DevOps",
    title: "Building a Production-Ready Kubernetes Platform",
    description:
      "A practical blueprint for secure clusters, GitOps delivery, and observable workloads.",
    readTime: "8 min read",
    date: "Jul 24, 2026",
    art: "kubernetes",
  },
  {
    category: "Cloud",
    title: "A Complete AWS Roadmap for Cloud Engineers",
    description:
      "From core services to resilient architectures, with a project-first learning path.",
    readTime: "10 min read",
    date: "Jul 18, 2026",
    art: "cloud",
  },
  {
    category: "SRE",
    title: "SRE Basics: From Signals to Sustainable Systems",
    description:
      "SLIs, SLOs, incident response, and the habits that keep production dependable.",
    readTime: "7 min read",
    date: "Jul 12, 2026",
    art: "sre",
  },
];

const materials = [
  { icon: "⌁", title: "Cloud", body: "AWS, GCP, architecture & networking", count: "12 resources", color: "mint" },
  { icon: "▥", title: "Kubernetes", body: "Containers, clusters, Helm & GitOps", count: "18 resources", color: "orange" },
  { icon: "∞", title: "DevOps", body: "CI/CD, automation, infra as code", count: "14 resources", color: "violet" },
  { icon: "⌘", title: "SRE", body: "Reliability, alerts, SLOs & incidents", count: "10 resources", color: "blue" },
  { icon: "▤", title: "Research Notes", body: "Experiments, patterns & paper notes", count: "20 notes", color: "rose" },
  { icon: "▣", title: "Study Guides", body: "Cheat sheets, summaries & quick guides", count: "15 guides", color: "cyan" },
  { icon: "☷", title: "Projects", body: "Hands-on labs and build journals", count: "11 builds", color: "amber" },
];

const roadmap = [
  { label: "Foundation", items: ["Linux & Networking", "Git & Shell", "Cloud Fundamentals"], done: true },
  { label: "Automation", items: ["Python", "Ansible", "GitHub Actions"] },
  { label: "Infrastructure", items: ["Terraform", "AWS & GCP", "Cloud Security"] },
  { label: "Platform (Current)", items: ["Kubernetes", "GitOps", "Observability"], current: true },
  { label: "Reliability", items: ["SLO Engineering", "Incident Response", "Capacity Planning"] },
  { label: "Leadership", items: ["Platform Strategy", "Architecture", "Knowledge Sharing"] },
];

const categories = [
  ["Cloud Engineering", 18, "☁"],
  ["Kubernetes", 24, "⎈"],
  ["DevOps", 12, "∞"],
  ["SRE", 9, "⌁"],
  ["Infrastructure as Code", 14, "◇"],
  ["Study Guides", 16, "▣"],
  ["Career & Learning", 8, "✦"],
];

const recentPosts = featuredPosts.map((post, index) => ({
  ...post,
  thumb: ["✣", "☁", "⌁"][index],
}));

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand ${footer ? "brand-footer" : ""}`} href="#home" aria-label="Shivam Kumar home">
      <span className="brand-mark">S</span>
      <span>
        <strong>Shivam Kumar</strong>
        <small>{footer ? "DevOps & Cloud Engineer" : "LEARN · BUILD · SHARE"}</small>
      </span>
    </a>
  );
}

function Subscribe({ compact = false }: { compact?: boolean }) {
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("You’re on the list — welcome!");
  }

  return (
    <form className={`subscribe-form ${compact ? "compact" : ""}`} onSubmit={submit}>
      {!compact && <input required type="email" aria-label="Email address" placeholder="Enter your email" />}
      <button type="submit">Subscribe</button>
      {message && <span className="form-message" role="status">{message}</span>}
    </form>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [bookmarked, setBookmarked] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const visiblePosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return featuredPosts;
    return featuredPosts.filter((post) =>
      `${post.category} ${post.title} ${post.description}`.toLowerCase().includes(term),
    );
  }, [search]);

  function toggleBookmark(index: number) {
    setBookmarked((items) =>
      items.includes(index) ? items.filter((item) => item !== index) : [...items, index],
    );
  }

  return (
    <main className={dark ? "site dark-mode" : "site"} id="home">
      <header className="topbar">
        <Brand />
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? "×" : "☰"}
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {["Home", "Blog", "Learning Hub", "Notes", "Projects", "About", "Contact"].map((item, index) => (
            <a className={index === 0 ? "active" : ""} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <label className="search-box">
          <span>⌕</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search articles, notes, topics..."
            aria-label="Search articles"
          />
          <kbd>⌘K</kbd>
        </label>
        <div className="header-actions">
          <button onClick={() => setDark(false)} aria-label="Light mode">☀</button>
          <button onClick={() => setDark(true)} aria-label="Dark mode">◒</button>
          <a className="profile-button" href="#about" aria-label="Go to Shivam Kumar profile">SK</a>
        </div>
      </header>

      <div className="page-grid">
        <section className="primary-column">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <span className="eyebrow">DevOps · SRE · Cloud Engineering</span>
              <h1 id="hero-title">Learning deeply.<br /><span>Building reliably.</span></h1>
              <p>Documenting my journey through cloud and platform engineering—sharing practical insights, field notes, and projects that help systems and people grow.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#blog"><span>▤</span> Read the Blog</a>
                <a className="button button-secondary" href="#learning-hub"><span>◇</span> Explore Learning Materials</a>
              </div>
            </div>
            <div className="hero-profile">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="avatar" aria-label="Shivam Kumar monogram">
                <span>SK</span>
              </div>
              <strong className="signature">Shivam</strong>
              <p>DevOps & Cloud Engineer</p>
              <small>Automating infrastructure. Engineering reliability.</small>
            </div>
          </section>

          <section className="content-section" id="blog">
            <div className="section-heading">
              <h2>Featured Blog Posts</h2>
              <a href="#blog">View all posts <span>→</span></a>
            </div>
            <div className="post-grid">
              {visiblePosts.length ? visiblePosts.map((post, index) => (
                <article className="post-card" key={post.title}>
                  <div className={`post-art ${post.art}`}>
                    <span className="category-pill">{post.category}</span>
                    <span className="art-symbol" aria-hidden="true">
                      {post.art === "kubernetes" ? "⎈" : post.art === "cloud" ? "☁" : "⌁"}
                    </span>
                    <button
                      className={bookmarked.includes(index) ? "bookmark saved" : "bookmark"}
                      onClick={() => toggleBookmark(index)}
                      aria-label={`${bookmarked.includes(index) ? "Remove" : "Add"} bookmark for ${post.title}`}
                    >
                      {bookmarked.includes(index) ? "★" : "☆"}
                    </button>
                  </div>
                  <div className="post-body">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <footer><span>◷ &nbsp;{post.readTime}</span><time>{post.date}</time></footer>
                  </div>
                </article>
              )) : <div className="empty-state">No featured posts match “{search}”. Try cloud, DevOps, or SRE.</div>}
            </div>
          </section>

          <section className="content-section learning-section" id="learning-hub">
            <div className="section-heading">
              <h2>Learning Materials & Engineering Resources</h2>
            </div>
            <div className="materials-grid">
              {materials.map((item) => (
                <article className="material-card" key={item.title}>
                  <div className={`material-title ${item.color}`}><span>{item.icon}</span><strong>{item.title}</strong></div>
                  <p>{item.body}</p>
                  <small>{item.count}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="roadmap" id="projects">
            <div className="roadmap-heading">
              <div><h2>Cloud Engineering Roadmap</h2><p>A practical path through my learning journey</p></div>
              <a href="#projects">View full roadmap →</a>
            </div>
            <div className="roadmap-track">
              {roadmap.map((step) => (
                <article className={`${step.current ? "current " : ""}${step.done ? "done" : ""}`} key={step.label}>
                  <strong>{step.done ? "✓ " : ""}{step.label}</strong>
                  <ul>{step.items.map((item) => <li key={item}>◉ &nbsp;{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>
        </section>

        <aside className="sidebar" aria-label="Reading and blog sidebar">
          <section className="side-card progress-card">
            <div className="side-heading"><h2>Reading Progress</h2><a href="#blog">View all</a></div>
            <div className="progress-label"><span>This Month</span><span>12 / 20 articles</span></div>
            <div className="progress-bar"><span /></div>
            <strong className="progress-number">60%</strong>
            <div className="stats">
              <div><b>◷</b><span><strong>5h 20m</strong><small>Time spent</small></span></div>
              <div><b>▤</b><span><strong>12</strong><small>Articles read</small></span></div>
              <div><b>◇</b><span><strong>7</strong><small>Notes made</small></span></div>
            </div>
          </section>

          <section className="side-card categories" id="notes">
            <div className="side-heading"><h2>Explore Categories</h2></div>
            <ul>
              {categories.map(([name, count, icon], index) => (
                <li key={name}><span className={`category-icon c${index}`}>{icon}</span><a href="#learning-hub">{name}</a><b>{count}</b></li>
              ))}
            </ul>
            <a className="side-link" href="#learning-hub">Browse all categories →</a>
          </section>

          <section className="side-card recent">
            <div className="side-heading"><h2>Recent Posts</h2></div>
            {recentPosts.map((post, index) => (
              <a className="recent-row" href="#blog" key={post.title}>
                <span className={`recent-thumb thumb-${index}`}>{post.thumb}</span>
                <span><strong>{post.title}</strong><small>{post.date} &nbsp;·&nbsp; {post.readTime}</small></span>
              </a>
            ))}
          </section>

          <section className="side-card newsletter" id="contact">
            <div className="side-heading"><h2>Stay in the Loop</h2></div>
            <p>Get new articles, engineering notes, and resources straight to your inbox.</p>
            <Subscribe />
          </section>
        </aside>
      </div>

      <footer className="footer" id="about">
        <div className="footer-brand">
          <Brand footer />
          <p>Building reliable systems.<br />Sharing to uplift others.</p>
          <small>© 2026 Shivam Kumar. All rights reserved.</small>
        </div>
        <div className="footer-links">
          <strong>Quick Links</strong>
          <div><a href="#home">Home</a><a href="#notes">Notes</a><a href="#blog">Blog</a><a href="#projects">Projects</a><a href="#learning-hub">Learning Hub</a><a href="#about">About</a></div>
        </div>
        <div className="footer-connect">
          <strong>Let’s Connect</strong>
          <div className="socials">
            <a href="https://github.com/shivam2003-dev" target="_blank" rel="noreferrer" aria-label="Open GitHub profile">GH</a>
            <a href="#contact" aria-label="Go to contact section">in</a>
            <a href="#blog" aria-label="Go to recent writing">𝕏</a>
            <a href="#contact" aria-label="Go to newsletter contact form">@</a>
          </div>
          <p>Open to collaborating on impactful ideas!</p>
        </div>
        <div className="footer-newsletter">
          <strong>Newsletter</strong>
          <p>Join fellow engineers improving every day.</p>
          <Subscribe compact />
        </div>
      </footer>
    </main>
  );
}
