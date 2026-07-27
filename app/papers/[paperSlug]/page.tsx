import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LearningHeader } from "@/components/learning-header";
import papers from "@/data/papers.json";

type Paper = (typeof papers)[number];

export function generateStaticParams() {
  return papers.map((paper) => ({ paperSlug: paper.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ paperSlug: string }> }): Promise<Metadata> {
  const { paperSlug } = await params;
  const paper = papers.find((candidate) => candidate.slug === paperSlug);
  return paper ? { title: `${paper.title} — Paper Note`, description: paper.summary } : {};
}

export default async function PaperPage({ params }: { params: Promise<{ paperSlug: string }> }) {
  const { paperSlug } = await params;
  const paper = papers.find((candidate) => candidate.slug === paperSlug) as Paper | undefined;
  if (!paper) notFound();
  const citation = `${paper.authors.join(", ")} (${paper.year}). ${paper.title}. ${paper.venue}, ${paper.volume}(${paper.issue}), ${paper.pages}. https://doi.org/${paper.doi}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: paper.title,
    author: paper.authors.map((name) => ({ "@type": "Person", name })),
    datePublished: `${paper.year}-09-16`,
    isPartOf: { "@type": "Periodical", name: paper.venue },
    sameAs: paper.url,
  };

  return (
    <main className="learning-shell">
      <LearningHeader />
      <header className="paper-hero">
        <span className="eyebrow">Verified {paper.resourceType} · {paper.year}</span>
        <h1>{paper.title}</h1>
        <p>{paper.authors.join(" · ")}</p>
        <div className="subject-metrics">
          <span><strong>{paper.venue}</strong> {paper.volume}({paper.issue})</span>
          <span><strong>DOI</strong> {paper.doi}</span>
          <span><strong>{paper.difficulty}</strong> difficulty</span>
        </div>
      </header>
      <article className="paper-note">
        <section className="paper-citation"><strong>Complete citation</strong><p>{citation}</p><a href={paper.url}>Open official paper →</a></section>
        <Callout label="Paper's claims" text="The paper's own scope and conclusions are summarized separately from this hub's teaching commentary." />
        <Section title="Plain-English summary" body={paper.summary} />
        <Section title="Problem addressed" body={paper.problem} />
        <Section title="Main contribution" body={paper.contribution} />
        <Section title="Method used" body={paper.method} />
        <Section title="Important equations and concepts" body={paper.equations} />
        <Section title="Dataset or experiment setup" body={paper.experiments} />
        <Section title="Results" body={paper.results} />
        <Section title="Limitations" body={paper.limitations} />
        <Callout label="Educational interpretation" text={paper.whyItMatters} />
        <section><h2>Prerequisites</h2><ul>{paper.prerequisites.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <Section title="Recommended reading order" body={`Read this as item ${paper.recommendedOrder} in the chapter path: after the notation primer and before implementation exercises that rely heavily on NumPy.`} />
        <section><h2>Reproduction and implementation resources</h2>{paper.reproductionResources.map((url) => <p key={url}><a href={url}>{url}</a></p>)}</section>
        <section><h2>Questions to consider while reading</h2><ol>{paper.readingQuestions.map((question) => <li key={question}>{question}</li>)}</ol></section>
        <section className="paper-metadata">
          <h2>Verification record</h2>
          <dl>
            <dt>Access</dt><dd>{paper.availability}</dd>
            <dt>Accessed</dt><dd>{paper.accessDate}</dd>
            <dt>Confidence</dt><dd>{paper.confidence}</dd>
            <dt>Status</dt><dd>{paper.verificationStatus}</dd>
            <dt>Relevance</dt><dd>{paper.relevance}</dd>
          </dl>
        </section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return <section><h2>{title}</h2><p>{body}</p></section>;
}

function Callout({ label, text }: { label: string; text: string }) {
  return <aside className="paper-callout"><strong>{label}</strong><p>{text}</p></aside>;
}
