import { notFound } from "next/navigation";
import { LearningHeader } from "@/components/learning-header";
import { getSubjectRegistry } from "@/lib/content";

const descriptions = {
  "semester-1": "Four compulsory foundations establish the mathematical, statistical, computational, and machine-learning vocabulary used throughout the programme.",
  "semester-2": "Two compulsory deep-learning subjects are combined with two electives. The brochure does not assign individual electives to a fixed semester.",
  "semester-3": "Four electives form a configurable specialization path. Any exact Semester 2/3 elective mapping remains a learner configuration, not an official brochure claim.",
} as const;

export function generateStaticParams() {
  return Object.keys(descriptions).map((semesterSlug) => ({ semesterSlug }));
}

export default async function SemesterPage({ params }: { params: Promise<{ semesterSlug: string }> }) {
  const { semesterSlug } = await params;
  const description = descriptions[semesterSlug as keyof typeof descriptions];
  if (!description) notFound();
  const subjects = await getSubjectRegistry();
  const semester = Number(semesterSlug.at(-1));
  const visible = semester === 1
    ? subjects.filter((subject) => subject.semester === 1)
    : semester === 2
      ? subjects.filter((subject) => subject.semester === 2)
      : subjects.filter((subject) => subject.semester === "configurable-2-3");

  return (
    <main className="learning-shell">
      <LearningHeader />
      <section className="directory-hero">
        <span className="eyebrow">Programme roadmap</span>
        <h1>Semester {semester}</h1>
        <p>{description}</p>
      </section>
      <section className="hub-overview-grid">
        {visible.map((subject) => (
          <article key={subject.id}>
            <small>{subject.id} · {subject.subjectType}</small>
            <h2>{subject.title}</h2>
            <p>{subject.officialDescriptionAvailability === "course-topic-description" ? "Official course topic description verified." : "Official title verified; detailed topic outline is explicitly provisional."}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
