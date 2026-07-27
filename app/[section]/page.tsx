import { notFound } from "next/navigation";
import { LearningHeader } from "@/components/learning-header";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const sections = {
  about: {
    eyebrow: "About the learner and editor",
    title: "Shivam Kumar",
    intro: "I am building this open learning hub while studying artificial intelligence and machine learning at master's level. Every published chapter is designed to connect intuition, formal mathematics, working code, and research practice.",
    cards: [
      ["Editorial promise", "Official curriculum claims remain separate from prerequisite, supplementary, advanced, and industry material."],
      ["Evidence standard", "References are verified before publication; uncertain details are labeled instead of being silently invented."],
      ["Open learning", "Portable Markdown and MDX keep the books readable, auditable, and reusable outside this website."],
    ],
  },
  roadmap: {
    eyebrow: "Dependency-aware study sequence",
    title: "M.Tech learning roadmap",
    intro: "Start with mathematical and statistical foundations, move through core machine learning and deep learning, then select a specialization and prepare for research.",
    cards: [
      ["01 · Foundations", "Python, linear algebra, probability, calculus, optimization, and statistical reasoning."],
      ["02 · Core learning", "Machine learning, computational intelligence, deep neural networks, and reinforcement learning."],
      ["03 · Specialization", "Choose from NLP, deep learning, audio and vision, systems, security, robotics, or advanced theory."],
      ["04 · Research", "Read critically, reproduce results, design experiments, and develop the Semester 4 dissertation."],
    ],
  },
  semesters: {
    eyebrow: "Programme structure",
    title: "Semesters",
    intro: "The verified brochure places four compulsory subjects in Semester 1, two compulsory subjects plus two electives in Semester 2, four electives in Semester 3, and the dissertation in Semester 4.",
    cards: [
      ["Semester 1", "Four compulsory foundations: mathematics, statistics, computational intelligence, and machine learning."],
      ["Semester 2", "Deep Neural Networks, Deep Reinforcement Learning, and two configurable electives."],
      ["Semester 3", "Four configurable electives selected from the programme's general and specialization pools."],
      ["Semester 4", "A research dissertation connecting theory, implementation, evaluation, and academic communication."],
    ],
  },
  papers: {
    eyebrow: "Verified academic reading",
    title: "Research paper library",
    intro: "Reading paths are organized as foundational, established, modern, survey, and applied work. Each note separates the paper's claims from educational interpretation.",
    cards: [
      ["Foundational papers", "Historical methods that established important ideas and vocabulary."],
      ["Modern research", "Recent work selected for syllabus relevance, methodological value, and reproducibility."],
      ["Surveys and tutorials", "Authoritative maps of a field, useful before reading narrower technical papers."],
      ["Reproduction notes", "Datasets, code, evaluation details, limitations, and questions to ask while reading."],
    ],
  },
  "research-notes": {
    eyebrow: "Research notebook",
    title: "Research notes",
    intro: "Concise, source-backed notes on papers, experiments, derivations, datasets, and unresolved questions encountered across the curriculum.",
    cards: [
      ["Paper summaries", "Problem, contribution, method, equations, experiments, results, limitations, and significance."],
      ["Experiment logs", "Hypotheses, configurations, seeds, metrics, failures, and conclusions."],
      ["Concept bridges", "Connections that make ideas reusable across subjects and projects."],
    ],
  },
  projects: {
    eyebrow: "Learn by building",
    title: "Practical projects",
    intro: "Every subject is planned with two beginner, two intermediate, one advanced, and one research-oriented project, including evaluation and ethics.",
    cards: [
      ["Beginner", "Small, testable builds focused on one core concept and a clear dataset."],
      ["Intermediate", "Multi-stage systems combining modelling, evaluation, and technical communication."],
      ["Advanced", "Scalable or production-oriented work with stronger architecture and reliability requirements."],
      ["Research", "A reproducible investigation with baselines, ablations, uncertainty, and a written report."],
    ],
  },
  assignments: {
    eyebrow: "Practice and assessment",
    title: "Assignments",
    intro: "Assignments combine hand derivations, conceptual explanation, implementation, evaluation, and reflective error analysis.",
    cards: [
      ["Concept checks", "Short prompts that reveal whether intuition and terminology are secure."],
      ["Mathematical work", "Step-by-step proofs and derivations with assumptions and dimensional checks."],
      ["Programming tasks", "Deterministic Python exercises with tests, expected output, and complexity discussion."],
      ["Applied analysis", "Open-ended work requiring model choice, evaluation, limitations, and communication."],
    ],
  },
  datasets: {
    eyebrow: "Data for responsible practice",
    title: "Dataset catalogue",
    intro: "Dataset entries will record provenance, licence, task, size, splits, risks, limitations, and the chapters and projects that use them.",
    cards: [
      ["Tabular", "Datasets for statistics, supervised learning, interpretability, and data management."],
      ["Language", "Text, retrieval, conversational, speech, and social-media datasets."],
      ["Vision and audio", "Images, video, 3D, audio, and multimodal benchmarks."],
      ["Systems and robotics", "Traces, security data, simulated environments, graphs, and control tasks."],
    ],
  },
  glossary: {
    eyebrow: "Shared terminology",
    title: "AI & ML glossary",
    intro: "A cross-subject vocabulary with plain-English meaning, formal definition, common notation, and links to the chapters where each concept is developed.",
    cards: [
      ["Notation", "Consistent conventions for scalars, vectors, matrices, tensors, probability, and optimization."],
      ["Core concepts", "Definitions shared across mathematics, statistics, machine learning, and AI."],
      ["Research language", "Terms for experimental design, evaluation, reproducibility, and scientific claims."],
    ],
  },
  search: {
    eyebrow: "Search the library",
    title: "Search",
    intro: "The production search index will cover subjects, chapters, headings, glossary terms, papers, projects, and datasets while preserving static-site portability.",
    cards: [["Current scope", "Browse the verified subject directory while the full Pagefind index is generated from approved content."]],
  },
  bookmarks: {
    eyebrow: "Saved locally in this release",
    title: "Bookmarks",
    intro: "Chapter bookmarks are stored in your browser. Account-backed synchronization is reserved for a later persistence phase.",
    cards: [["How it works", "Open a chapter and select Bookmark in the reading toolbar. Your choice remains on this device."]],
  },
  progress: {
    eyebrow: "Private by default",
    title: "Reading progress",
    intro: "Chapter reading progress is calculated from your scroll position and saved locally. The architecture keeps a clean migration path to authenticated, cross-device progress.",
    cards: [["Current release", "Progress and bookmarks work without an account and do not leave your browser."]],
  },
  blog: {
    eyebrow: "Shivam's technical writing",
    title: "Blog",
    intro: "Long-form notes about learning difficult AI and ML ideas, reading research carefully, reproducing results, and building dependable intelligent systems.",
    cards: [
      ["Foundations", "Intuition-first explanations of mathematics, probability, and learning theory."],
      ["Research practice", "Paper-reading methods, experiment design, and honest interpretation of results."],
      ["Engineering", "From notebooks to tested services, MLOps, cloud-native AI, and system architecture."],
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const page = sections[section as keyof typeof sections];
  if (!page) notFound();

  return (
    <main className="learning-shell">
      <LearningHeader />
      <section className="directory-hero">
        <span className="eyebrow">{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      <section className="hub-overview-grid">
        {page.cards.map(([title, body]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
        {section === "search" && <a className="hub-primary-link" href={`${basePath}/subjects/`}>Browse all 45 subjects →</a>}
      </section>
    </main>
  );
}
