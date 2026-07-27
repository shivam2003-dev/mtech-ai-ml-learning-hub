import { LearningHeader } from "@/components/learning-header";
import { SubjectSearch } from "@/components/subject-search";
import { getSubjectRegistry } from "@/lib/content";

export default async function SearchPage() {
  const registry = await getSubjectRegistry();
  const subjects = registry.map((subject) => ({
    id: subject.id,
    title: subject.title,
    slug: subject.slug,
    group: subject.semester === 1
      ? "semester-1"
      : subject.semester === 2
        ? "semester-2"
        : subject.electivePool ?? "general",
    specialization: subject.specialization ?? subject.subjectType,
    topics: subject.officialTopics ?? [],
  }));

  return (
    <main className="learning-shell">
      <LearningHeader />
      <section className="directory-hero">
        <span className="eyebrow">Search and filter the verified registry</span>
        <h1>Find a subject</h1>
        <p>Search all 45 subjects and any topic description explicitly present in the official programme brochure.</p>
      </section>
      <SubjectSearch subjects={subjects} />
    </main>
  );
}
