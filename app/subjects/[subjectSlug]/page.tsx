import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeMathjax from "rehype-mathjax";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeShiki from "@shikijs/rehype";
import { LearningHeader } from "@/components/learning-header";
import { rehypeCaptureMathSources, rehypeLabelMathSvg } from "@/lib/accessible-math";
import { getChapterSlugs, getSubjectDocument, getSubjectSlugs } from "@/lib/content";

export async function generateStaticParams() {
  return (await getSubjectSlugs()).map((subjectSlug) => ({ subjectSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ subjectSlug: string }> }): Promise<Metadata> {
  try {
    const { subjectSlug } = await params;
    const document = await getSubjectDocument(subjectSlug);
    return { title: `${document.frontmatter.title} — Shivam's Learning Hub`, description: String(document.frontmatter.summary ?? "") };
  } catch {
    return {};
  }
}

export default async function SubjectPage({ params }: { params: Promise<{ subjectSlug: string }> }) {
  const { subjectSlug } = await params;
  let document;
  try {
    document = await getSubjectDocument(subjectSlug);
  } catch {
    notFound();
  }
  const chapters = await getChapterSlugs(subjectSlug);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: String(document.frontmatter.title),
    description: String(document.frontmatter.summary),
    provider: { "@type": "Person", name: "Shivam Kumar" },
    educationalLevel: "Postgraduate",
    inLanguage: "en",
  };

  return (
    <main className="learning-shell">
      <LearningHeader />
      <section className="subject-hero">
        <span className="eyebrow">{String(document.frontmatter.semesterLabel ?? "M.Tech AI & ML")}</span>
        <h1>{String(document.frontmatter.title)}</h1>
        <p>{String(document.frontmatter.summary)}</p>
        <div className="subject-metrics">
          <span><strong>{String(document.frontmatter.estimatedHours ?? "TBD")}</strong> study hours</span>
          <span><strong>{chapters.length}</strong> chapters published</span>
          <span><strong>{String(document.frontmatter.difficulty ?? "Foundation")}</strong> difficulty</span>
        </div>
      </section>
      <div className="subject-layout">
        <article className="subject-prose">
          <MDXRemote
            source={document.source}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm, remarkMath], rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, [rehypeShiki, { theme: "github-dark" }], rehypeCaptureMathSources, rehypeMathjax, rehypeLabelMathSvg] } }}
          />
        </article>
        <aside className="chapter-index">
          <h2>Published chapters</h2>
          {chapters.map((chapter, index) => (
            <a href={`./chapters/${chapter}/`} key={chapter}><span>{String(index + 1).padStart(2, "0")}</span>{chapter.replaceAll("-", " ")}</a>
          ))}
        </aside>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
