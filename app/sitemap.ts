import type { MetadataRoute } from "next";
import { getChapterSlugs, getSubjectRegistry } from "@/lib/content";
import papers from "@/data/papers.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivam2003-dev.github.io/mtech-ai-ml-learning-hub";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const updated = new Date("2026-07-28");
  const staticRoutes = [
    "", "/about", "/blog", "/roadmap", "/semesters", "/semesters/semester-1",
    "/semesters/semester-2", "/semesters/semester-3", "/subjects", "/papers",
    "/research-notes", "/projects", "/assignments", "/datasets", "/glossary",
    "/search", "/bookmarks", "/progress",
  ];
  const subjects = await getSubjectRegistry();
  const subjectRoutes = subjects.map((subject) => `/subjects/${subject.slug}`);
  const chapterRoutes: string[] = [];
  for (const subject of subjects) {
    for (const chapter of await getChapterSlugs(subject.slug)) {
      chapterRoutes.push(`/subjects/${subject.slug}/chapters/${chapter}`);
    }
  }
  const paperRoutes = papers.map((paper) => `/papers/${paper.slug}`);

  return [...staticRoutes, ...subjectRoutes, ...chapterRoutes, ...paperRoutes].map((route) => ({
    url: `${siteUrl}${route}/`.replace(/([^:]\/)\/+/g, "$1"),
    lastModified: updated,
    changeFrequency: route.startsWith("/subjects/") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/subjects" ? 0.9 : 0.7,
  }));
}
