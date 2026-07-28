"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const featuredPosts = [
  {
    category: "AI/ML",
    title: "Why Linear Algebra Is the Language of Machine Learning",
    description:
      "Vectors, matrices, transformations, and the intuition behind modern learning systems.",
    readTime: "8 min read",
    date: "Jul 28, 2026",
    art: "kubernetes",
    href: "/subjects/mathematical-foundations-for-machine-learning/chapters/01-mathematical-language-for-machine-learning/",
  },
  {
    category: "Statistics",
    title: "A Practical Roadmap from Probability to Inference",
    description:
      "A connected path through random variables, estimation, testing, and uncertainty.",
    readTime: "10 min read",
    date: "Jul 26, 2026",
    art: "cloud",
    href: "/subjects/introduction-to-statistical-methods/chapters/01-from-questions-to-statistical-evidence/",
  },
  {
    category: "Research",
    title: "How to Read an AI Research Paper Without Getting Lost",
    description:
      "A repeatable method for understanding claims, equations, experiments, and limitations.",
    readTime: "7 min read",
    date: "Jul 24, 2026",
    art: "sre",
    href: "/papers/array-programming-with-numpy/",
  },
];

const materials = [
  { icon: "∑", title: "Mathematics", body: "Linear algebra, calculus & optimization", count: "4 subjects", color: "mint", href: "/subjects/mathematical-foundations-for-machine-learning/" },
  { icon: "▥", title: "Machine Learning", body: "Statistical learning and core algorithms", count: "8 subjects", color: "orange", href: "/subjects/" },
  { icon: "∞", title: "Deep Learning", body: "Neural networks, graphs and multimodal AI", count: "10 subjects", color: "violet", href: "/subjects/deep-neural-networks/" },
  { icon: "⌘", title: "AI Systems", body: "Agents, reasoning, cloud and MLOps", count: "9 subjects", color: "blue", href: "/subjects/" },
  { icon: "▤", title: "Research Papers", body: "Verified reading paths and paper notes", count: "curated paths", color: "rose", href: "/papers/" },
  { icon: "▣", title: "Study Guides", body: "Derivations, quizzes and revision notes", count: "45 subjects", color: "cyan", href: "/subjects/" },
  { icon: "☷", title: "Projects", body: "Beginner to research-level builds", count: "6 per subject", color: "amber", href: "/projects/" },
];

const roadmap = [
  { label: "Prerequisites", items: ["Python", "Algebra", "Probability"], done: true, href: "/roadmap/" },
  { label: "Semester 1", items: ["Math Foundations", "Statistics", "Machine Learning"], current: true, href: "/semesters/semester-1/" },
  { label: "Semester 2", items: ["Deep Networks", "Reinforcement Learning", "Electives"], href: "/semesters/semester-2/" },
  { label: "Semester 3", items: ["Specialization", "Research Methods", "Electives"], href: "/semesters/semester-3/" },
  { label: "Semester 4", items: ["Dissertation", "Experiments", "Defense"], href: "/roadmap/" },
  { label: "Beyond", items: ["Paper Reproduction", "Open Source", "Publication"], href: "/projects/" },
];

const categories = [
  ["Mathematical Foundations", 12, "∑"],
  ["Machine Learning", 14, "⌁"],
  ["Deep Learning", 11, "∞"],
  ["Natural Language Processing", 8, "Aa"],
  ["Audio & Vision", 7, "◇"],
  ["AI Systems & MLOps", 9, "▣"],
  ["Research Practice", 6, "✦"],
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
        <small>{footer ? "M.Tech AI & ML Learner" : "LEARN · BUILD · RESEARCH"}</small>
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
          <a className="active" href="#home">Home</a>
          <a href={`${assetBase}/subjects/`}>Subjects</a>
          <a href={`${assetBase}/roadmap/`}>Roadmap</a>
          <a href={`${assetBase}/papers/`}>Papers</a>
          <a href={`${assetBase}/projects/`}>Projects</a>
          <a href={`${assetBase}/about/`}>About</a>
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
              <span className="eyebrow">M.Tech Student · Artificial Intelligence & Machine Learning</span>
              <h1 id="hero-title">Learning deeply.<br /><span>Building purposefully.</span></h1>
              <p>A verified, master&apos;s-level learning hub that turns difficult AI and ML ideas into intuitive explanations, mathematics, Python, projects, and research reading paths.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={`${assetBase}/subjects/`}><span>▤</span> Explore 45 Subjects</a>
                <a className="button button-secondary" href={`${assetBase}/roadmap/`}><span>◇</span> Open Study Roadmap</a>
              </div>
            </div>
            <div className="hero-profile">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="avatar toon-avatar" aria-label="Animated cartoon portrait of Shivam Kumar">
                <Image src={`${assetBase}/toon-shivam.png`} width={190} height={190} priority alt="Cartoon portrait of Shivam Kumar" />
                <span className="toon-status">●</span>
              </div>
              <strong className="signature">Shivam</strong>
              <p>M.Tech in Artificial Intelligence & Machine Learning</p>
              <small>Understanding foundations. Building intelligent systems.</small>
            </div>
          </section>

          <section className="content-section" id="blog">
            <div className="section-heading">
              <h2>Featured Blog Posts</h2>
              <a href={`${assetBase}/blog/`}>View all posts <span>→</span></a>
            </div>
            <div className="post-grid">
              {visiblePosts.length ? visiblePosts.map((post, index) => (
                <article className="post-card" key={post.title}>
                  <a className="card-cover-link" href={`${assetBase}${post.href}`} aria-label={`Read ${post.title}`} />
                  <div className={`post-art ${post.art}`}>
                    <span className="category-pill">{post.category}</span>
                    <span className="art-symbol" aria-hidden="true">
                      {post.art === "kubernetes" ? "∑" : post.art === "cloud" ? "𝑃" : "⌁"}
                    </span>
                    <Image className="post-toon" src={`${assetBase}/toon-shivam.png`} width={55} height={55} alt="" aria-hidden="true" />
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
              )) : <div className="empty-state">No featured posts match “{search}”. Try mathematics, statistics, or research.</div>}
            </div>
          </section>

          <section className="content-section learning-section" id="learning-hub">
            <div className="section-heading">
              <h2>Learning Materials & Master&apos;s Resources</h2>
            </div>
            <div className="materials-grid">
              {materials.map((item) => (
                <a className="material-card" href={`${assetBase}${item.href}`} key={item.title}>
                  <div className={`material-title ${item.color}`}><span>{item.icon}</span><strong>{item.title}</strong></div>
                  <p>{item.body}</p>
                  <small>{item.count}</small>
                </a>
              ))}
            </div>
          </section>

          <section className="roadmap" id="projects">
            <div className="roadmap-heading">
              <div><h2>M.Tech Study Roadmap</h2><p>A structured path from prerequisites to dissertation</p></div>
              <a href={`${assetBase}/roadmap/`}>View full roadmap →</a>
            </div>
            <div className="roadmap-track">
              {roadmap.map((step) => (
                <a href={`${assetBase}${step.href}`} className={`roadmap-step ${step.current ? "current " : ""}${step.done ? "done" : ""}`} key={step.label}>
                  <strong>{step.done ? "✓ " : ""}{step.label}</strong>
                  <ul>{step.items.map((item) => <li key={item}>◉ &nbsp;{item}</li>)}</ul>
                </a>
              ))}
            </div>
          </section>
        </section>

        <aside className="sidebar" aria-label="Reading and blog sidebar">
          <section className="side-card progress-card">
            <div className="side-heading"><h2>Reading Progress</h2><a href={`${assetBase}/progress/`}>View all</a></div>
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
              <a className="recent-row" href={`${assetBase}/blog/`} key={post.title}>
                <span className={`recent-thumb thumb-${index}`}>{post.thumb}</span>
                <span><strong>{post.title}</strong><small>{post.date} &nbsp;·&nbsp; {post.readTime}</small></span>
              </a>
            ))}
          </section>

          <section className="side-card newsletter" id="contact">
            <div className="side-heading"><h2>Stay in the Loop</h2></div>
            <p>Get new chapters, research notes, and learning resources straight to your inbox.</p>
            <Subscribe />
          </section>
        </aside>
      </div>

      <footer className="footer" id="about">
        <div className="footer-brand">
          <Image className="footer-toon" src={`${assetBase}/toon-shivam.png`} width={43} height={43} alt="Shivam cartoon avatar" />
          <Brand footer />
          <p>Learning deeply.<br />Sharing to help others grow.</p>
          <small>© 2026 Shivam Kumar. All rights reserved.</small>
        </div>
        <div className="footer-links">
          <strong>Quick Links</strong>
          <div><a href="#home">Home</a><a href={`${assetBase}/research-notes/`}>Notes</a><a href={`${assetBase}/blog/`}>Blog</a><a href={`${assetBase}/projects/`}>Projects</a><a href={`${assetBase}/subjects/`}>Learning Hub</a><a href={`${assetBase}/about/`}>About</a></div>
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
          <p>Join learners building deeper AI understanding.</p>
          <Subscribe compact />
        </div>
      </footer>
    </main>
  );
}
