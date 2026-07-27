import type { Metadata } from "next";
import { LearningHeader } from "@/components/learning-header";
import { getSubjectRegistry } from "@/lib/content";

export const metadata: Metadata = {
  title: "Subjects — Shivam's M.Tech AI & ML Learning Hub",
  description: "The complete verified subject registry for Semesters 1-3.",
};

export default async function SubjectsPage() {
  const subjects = await getSubjectRegistry();
  const groups = [
    ["Semester 1", subjects.filter((subject) => subject.semester === 1)],
    ["Semester 2 compulsory", subjects.filter((subject) => subject.semester === 2)],
    ["General electives", subjects.filter((subject) => subject.electivePool === "general")],
    ["NLP specialization", subjects.filter((subject) => subject.electivePool === "nlp")],
    ["Deep Learning specialization", subjects.filter((subject) => subject.electivePool === "deep-learning")],
    ["Audio and Vision", subjects.filter((subject) => subject.electivePool === "audio-and-vision")],
  ] as const;

  return (
    <main className="learning-shell">
      <LearningHeader />
      <section className="directory-hero">
        <span className="eyebrow">Official brochure verified · 45 subjects</span>
        <h1>Subjects</h1>
        <p>Six compulsory courses and thirty-nine electives, preserved in their official programme groupings.</p>
      </section>
      <div className="subject-directory">
        {groups.map(([label, items]) => (
          <section key={label}>
            <div className="directory-heading"><h2>{label}</h2><span>{items.length} subjects</span></div>
            <div className="subject-list-grid">
              {items.map((subject) => (
                <a className="subject-list-card" href={`./${subject.slug}/`} key={subject.id}>
                  <span>{subject.id}</span>
                  <h3>{subject.title}</h3>
                  <p>{subject.officialDescriptionAvailability === "course-topic-description" ? "Official topic description available" : "Official title verified · detailed syllabus pending"}</p>
                  <small>{subject.subjectType} · {subject.semester === "configurable-2-3" ? "Semester 2/3 elective" : `Semester ${subject.semester}`}</small>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
