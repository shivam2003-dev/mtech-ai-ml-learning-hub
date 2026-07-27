import { LearningHeader } from "@/components/learning-header";
import papers from "@/data/papers.json";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PapersPage() {
  return (
    <main className="learning-shell">
      <LearningHeader />
      <section className="directory-hero">
        <span className="eyebrow">Verified academic reading</span>
        <h1>Research paper library</h1>
        <p>Every note separates the source&apos;s claims from educational interpretation and records identifiers, access, prerequisites, limitations, and reading questions.</p>
      </section>
      <section className="hub-overview-grid">
        {papers.map((paper) => (
          <article key={paper.slug}>
            <small>{paper.resourceType} · {paper.year} · {paper.venue}</small>
            <h2>{paper.title}</h2>
            <p>{paper.summary}</p>
            <a className="paper-card-link" href={`${basePath}/papers/${paper.slug}/`}>Read verified paper note →</a>
          </article>
        ))}
      </section>
    </main>
  );
}
