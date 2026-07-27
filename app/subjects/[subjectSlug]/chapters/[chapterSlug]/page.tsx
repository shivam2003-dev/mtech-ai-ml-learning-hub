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
import { ReadingTools } from "@/components/reading-tools";
import { rehypeCaptureMathSources, rehypeLabelMathSvg } from "@/lib/accessible-math";
import { extractTableOfContents, getChapterDocument, getChapterSlugs, getSubjectSlugs } from "@/lib/content";

export async function generateStaticParams() {
  const params = [];
  for (const subjectSlug of await getSubjectSlugs()) {
    for (const chapterSlug of await getChapterSlugs(subjectSlug)) params.push({ subjectSlug, chapterSlug });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ subjectSlug: string; chapterSlug: string }> }): Promise<Metadata> {
  try {
    const { subjectSlug, chapterSlug } = await params;
    const document = await getChapterDocument(subjectSlug, chapterSlug);
    return { title: `${document.frontmatter.title} — Shivam's Learning Hub`, description: String(document.frontmatter.summary ?? "") };
  } catch {
    return {};
  }
}

export default async function ChapterPage({ params }: { params: Promise<{ subjectSlug: string; chapterSlug: string }> }) {
  const { subjectSlug, chapterSlug } = await params;
  let document;
  try {
    document = await getChapterDocument(subjectSlug, chapterSlug);
  } catch {
    notFound();
  }
  const toc = extractTableOfContents(document.source);
  const chapterSequence = (await getChapterSlugs(subjectSlug)).sort();
  const chapterIndex = chapterSequence.indexOf(chapterSlug);
  const previousChapter = chapterIndex > 0 ? chapterSequence[chapterIndex - 1] : null;
  const nextChapter = chapterIndex >= 0 && chapterIndex < chapterSequence.length - 1 ? chapterSequence[chapterIndex + 1] : null;
  const citation = `Shivam Kumar. “${String(document.frontmatter.title)}.” Shivam's M.Tech AI & ML Learning Hub, ${String(document.frontmatter.lastVerifiedAt ?? "2026")}.`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: String(document.frontmatter.title),
    description: String(document.frontmatter.summary),
    author: { "@type": "Person", name: "Shivam Kumar" },
    educationalLevel: "Postgraduate",
    learningResourceType: "Chapter",
    timeRequired: `PT${String(document.frontmatter.estimatedReadingMinutes)}M`,
    inLanguage: "en",
  };

  return (
    <main className="learning-shell chapter-shell">
      <LearningHeader />
      <ReadingTools chapterId={`${subjectSlug}/${chapterSlug}`} citation={citation} />
      <header className="chapter-header">
        <a href={`../../`}>← {String(document.frontmatter.subjectTitle ?? subjectSlug.replaceAll("-", " "))}</a>
        <span className="classification">{String(document.frontmatter.classification ?? "supplementary")}</span>
        <h1>{String(document.frontmatter.title)}</h1>
        <p>{String(document.frontmatter.summary)}</p>
        <div><span>{String(document.frontmatter.estimatedReadingMinutes)} min read</span><span>Reviewed {String(document.frontmatter.lastVerifiedAt)}</span></div>
      </header>
      <div className="chapter-layout">
        <aside className="chapter-toc">
          <strong>On this page</strong>
          {toc.map((item) => <a href={`#${item.id}`} key={item.id}>{item.title}</a>)}
        </aside>
        <article className="chapter-prose">
          <MDXRemote
            source={document.source}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm, remarkMath], rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, [rehypeShiki, { theme: "github-dark" }], rehypeCaptureMathSources, rehypeMathjax, rehypeLabelMathSvg] } }}
          />
          <nav className="chapter-pagination" aria-label="Chapter navigation">
            {previousChapter
              ? <a href={`../${previousChapter}/`}>← {previousChapter.replaceAll("-", " ")}</a>
              : <span>Start of published sequence</span>}
            {nextChapter
              ? <a href={`../${nextChapter}/`}>{nextChapter.replaceAll("-", " ")} →</a>
              : <a href="../../">Back to subject →</a>}
          </nav>
        </article>
        <aside className="chapter-context">
          <strong>Chapter status</strong>
          <span>Math review: {String(document.frontmatter.mathReviewStatus)}</span>
          <span>Code: {String(document.frontmatter.codeStatus)}</span>
          <span>Citations: {String(document.frontmatter.citationStatus)}</span>
          <span>Words: {String(document.frontmatter.wordCount)}</span>
        </aside>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
