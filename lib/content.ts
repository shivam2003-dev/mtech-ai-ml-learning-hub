import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import YAML from "yaml";

const root = process.cwd();
const contentRoot = join(root, "content");

export type RegistrySubject = {
  id: string;
  title: string;
  slug: string;
  subjectType: "compulsory" | "elective";
  semester: number | "configurable-2-3";
  electivePool: string | null;
  specialization: string | null;
  officialDescriptionAvailability: "title-only" | "course-topic-description";
  officialTopics?: string[];
  uncertaintyFlags: string[];
};

export type MdxDocument = {
  frontmatter: Record<string, unknown>;
  source: string;
};

export async function getSubjectRegistry(): Promise<RegistrySubject[]> {
  const raw = await readFile(join(contentRoot, "curriculum", "subject-registry.yaml"), "utf8");
  const parsed = YAML.parse(raw) as { subjects: RegistrySubject[] };
  return parsed.subjects;
}

export async function getSubjectSlugs(): Promise<string[]> {
  return (await getSubjectRegistry()).map((subject) => subject.slug);
}

export async function getSubjectDocument(subjectSlug: string): Promise<MdxDocument> {
  try {
    return await readMdx(join(contentRoot, "subjects", subjectSlug, "index.mdx"));
  } catch {
    const subject = (await getSubjectRegistry()).find((candidate) => candidate.slug === subjectSlug);
    if (!subject) throw new Error(`Unknown subject: ${subjectSlug}`);
    const officialBoundary = subject.officialDescriptionAvailability === "course-topic-description"
      ? "The programme brochure provides a verified course-topic description. The full book outline is still reviewed before publication."
      : "The programme brochure verifies the title and grouping only. Any detailed outline will be visibly labelled as prerequisite, supplementary, advanced extension, or industry application.";
    return {
      frontmatter: {
        title: subject.title,
        summary: `${officialBoundary} This page is registered for its dedicated Subject Lead and will expose only approved material.`,
        semesterLabel: subject.semester === "configurable-2-3" ? "Semester 2/3 elective" : `Semester ${subject.semester} compulsory`,
        estimatedHours: "Planning",
        difficulty: "To be reviewed",
      },
      source: `## Curriculum status\n\n${officialBoundary}\n\n## Publishing status\n\nThe dedicated Subject Lead is preparing the prerequisite map, chapter sequence, verified reading path, projects, assignments, and quality report. Content is published only after syllabus, citation, mathematics, code, and editorial checks pass.\n\n## What this book will connect\n\nThis subject will link to its prerequisites, related concepts, projects, research papers, and appropriate next subjects through the cross-subject knowledge graph.`,
    };
  }
}

export async function getChapterSlugs(subjectSlug: string): Promise<string[]> {
  const dir = join(contentRoot, "subjects", subjectSlug, "chapters");
  try {
    return (await readdir(dir))
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getChapterDocument(subjectSlug: string, chapterSlug: string): Promise<MdxDocument> {
  return readMdx(join(contentRoot, "subjects", subjectSlug, "chapters", `${chapterSlug}.mdx`));
}

export function extractTableOfContents(source: string) {
  return source
    .split("\n")
    .filter((line) => /^##\s+/.test(line))
    .map((line) => {
      const title = line.replace(/^##\s+/, "").replace(/[*_`]/g, "").trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      return { id, title };
    });
}

async function readMdx(path: string): Promise<MdxDocument> {
  const raw = await readFile(path, "utf8");
  const parsed = matter(raw);
  return { frontmatter: parsed.data, source: parsed.content };
}
