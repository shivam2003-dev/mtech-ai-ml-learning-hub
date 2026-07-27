# Shivam's M.Tech AI & ML Learning Hub - Architecture

## Status

Phase 0 foundation. This document defines the target architecture; migration is incremental so the current working site remains usable while the content platform grows.

## Architectural principles

1. **Curriculum-first:** the official programme brochure is the authoritative curriculum record. Supplementary material is explicitly labelled.
2. **Portable content:** academic material lives in Markdown/MDX, YAML, JSON and BibTeX, never only in a proprietary database.
3. **Static-first delivery:** public reading pages export to GitHub Pages. Optional authenticated services may be added later without making the books unreadable offline.
4. **Typed boundaries:** curriculum, subjects, chapters, papers, projects and progress records have versioned schemas.
5. **Evidence before claims:** citations, identifiers and links are recorded with verification state and access date.
6. **Resumable production:** every agent task has an immutable ID, dependency list, isolated output path, checkpoint state and completion report.
7. **Accessible by default:** WCAG 2.2 AA contrast, keyboard navigation, reduced-motion support, semantic landmarks and print-friendly chapters are release gates.

## Current-to-target migration

The repository currently contains a single Next.js application at the root. The first release keeps that layout to avoid a disruptive rewrite. The target workspace is:

```text
apps/
  web/                     # Next.js reader application
packages/
  content-schema/          # Zod schemas and TypeScript types
  research-client/         # OpenAlex/Crossref/arXiv/ACL adapters
  validation/              # content, code, citation and link gates
  ui/                      # shared accessible components and tokens
  shared/
content/
  curriculum/
  semesters/
  subjects/
data/
research/
tasks/
scripts/
docs/
```

The root application will move to `apps/web` only after the content schemas and static export pipeline are stable.

## Web application

- Next.js App Router, React and TypeScript.
- MDX compiled at build time with a typed front-matter pipeline.
- MathJax, integrated through `remark-math` and `rehype-mathjax`, for accessible static equation rendering; Shiki for syntax highlighting.
- Pagefind for the initial static search index.
- Local-first bookmarks and progress using localStorage in the reference release, with a planned versioned import/export path.
- Optional authenticated sync service in a later phase; public content never depends on authentication.
- Route-level static generation for semesters, subjects, chapters, papers, projects and glossary entries.
- Schema.org `Course`, `LearningResource`, `ScholarlyArticle` and `BreadcrumbList` metadata.

## Content pipeline

```text
official brochure
  -> page-backed curriculum YAML
  -> subject registry
  -> prerequisite and relationship graph
  -> subject plans
  -> chapter MDX and BibTeX
  -> structural, academic, citation and code validation
  -> reviewed content bundle
  -> static routes and Pagefind index
```

Each principal chapter is an independent MDX file. Code examples live beside the chapter in testable modules or notebooks. Generated navigation and statistics are derived artifacts and are not edited manually.

## Research data model

Resources are deduplicated in this order:

1. DOI
2. arXiv ID
3. Semantic Scholar or OpenAlex ID
4. normalised title plus first author and year

Every resource stores title, authors or organisation, year, type, URL, identifiers, venue, access date, difficulty, relevance, prerequisites, availability, confidence and verification status.

## Progress and bookmarks

The GitHub Pages release stores user state locally:

- chapter completion and last position
- reading minutes
- subject and semester percentage
- bookmarks
- private notes
- schema version and export timestamp

The UI must disclose that local data is device-specific. A future sync API will use PostgreSQL and Prisma behind an explicit sign-in boundary.

## Knowledge graph

Nodes represent subjects, chapters, concepts, papers, projects, datasets and tools. Edges use:

- `prerequisite_of`
- `used_by`
- `extension_of`
- `alternative_to`
- `implemented_by`
- `evaluated_by`
- `applied_in`
- `related_to`

Graph checks reject dangling IDs, cycles in strict prerequisite paths and references to unpublished content.

## Deployment

GitHub Actions builds a static Next.js export, uploads the Pages artifact and deploys only from `main`. Pull requests run content, type, link, accessibility and static-build checks. `develop` is the integration branch; agent branches never deploy directly.

## Security

- No secrets in content or client bundles.
- External links receive safe attributes and are checked against allow/deny rules.
- Code examples validate inputs and avoid unsafe deserialisation or shell construction.
- Private notes remain browser-local until an authenticated service is intentionally introduced.
- Dependency and workflow permissions follow least privilege.

## Architecture decisions pending

- Exact MDX pipeline after the first reference chapter.
- Whether cross-device progress sync is worth operating.
- Whether Pagefind remains sufficient after the chapter corpus exceeds browser-friendly index size.
- Final Semester 2/3 elective assignment, which the brochure intentionally leaves configurable.
