# Architecture Foundation: Shivam's M.Tech AI & ML Learning Hub

Status: proposal  
Prepared for: Phase 0 architecture and repository design  
Deployment target for the first production release: GitHub Pages  
Last reviewed: 2026-07-28

## 1. Executive decision

Evolve the existing project into a content-first, statically generated Next.js platform. Keep all academic content in portable Markdown/MDX, validate it before rendering, generate every public route at build time, index the built HTML with Pagefind, and deploy the resulting `out/` directory through GitHub Actions to GitHub Pages.

This choice satisfies the near-term requirement for a public GitHub Pages deployment without coupling the books to a database or proprietary CMS. It also leaves a deliberate migration seam for optional account-backed synchronization later.

The site must not imply that GitHub Pages provides a backend. On the static deployment:

- public reading requires no account;
- bookmarks, reading progress, display preferences, and private notes are device-local;
- users can export and import their local learning state as versioned JSON;
- cross-device synchronization and authentication remain optional future capabilities behind interfaces;
- subscriptions use an explicitly configured external provider or a `mailto:` fallback, never a fake success message;
- no Server Actions, request-dependent Route Handlers, cookies, server sessions, runtime database queries, ISR, or default Next.js image optimization are used.

Next.js documents that `output: "export"` produces one HTML file per static route and does not support server-dependent features. Dynamic content routes therefore need complete `generateStaticParams()` coverage at build time. See [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports). GitHub recommends building a static artifact and deploying it with `actions/upload-pages-artifact` and `actions/deploy-pages`; see [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## 2. Observed repository baseline

The current repository is an early visual prototype rather than a learning-platform architecture.

| Area | Current state | Architectural consequence |
| --- | --- | --- |
| Framework | Next.js 16.2.6, React 19.2.6, TypeScript 5.9.3 | Retain the App Router and TypeScript. |
| Rendering | One client-rendered `app/page.tsx` | Split into static routes and keep client components narrowly scoped to interactive controls. |
| Styling | A single global CSS surface; Tailwind 4 is installed | Introduce tokens and composable UI primitives without an all-at-once rewrite. |
| Content | Hard-coded arrays in the homepage | Move canonical content into MDX/YAML/JSON and generate derived indexes. |
| Static hosting | `next.config.ts` already uses `output: "export"`, repository-aware `basePath`, `assetPrefix`, `trailingSlash`, and unoptimized images | Preserve these GitHub Pages-compatible settings. |
| Deployment | `.github/workflows/deploy-pages.yml` exists | Audit and strengthen it; do not create a competing workflow. |
| Persistence | Drizzle and a D1 example exist, but the active schema is intentionally empty | Do not use D1/Drizzle in the GitHub Pages runtime. Keep examples outside the shipped architecture or remove them in a later reviewed migration. |
| Authentication | A ChatGPT-hosting helper exists | Do not import it into the GitHub Pages application. Static Pages cannot consume request identity headers. |
| Search | Homepage-only in-memory filter | Replace with a generated Pagefind index over final HTML. |
| Tests | The rendered HTML test still describes the original starter skeleton and appears inconsistent with the current page/layout | Replace it with product-specific static-build, route, metadata, and interaction tests. |
| Assets | Toon portrait, social card, and favicon are present | Retain optimized raster assets with attribution/provenance records where applicable. |
| Content validation | None observed | Make metadata, citation, prose, link, code, and route validation mandatory before integration. |

## 3. Target system architecture

### 3.1 Logical layers

1. **Curriculum source layer**
   - `content/curriculum/official-curriculum.yaml` is the exact transcription of verified official sources.
   - Uncertain semester/elective mappings are explicit fields, never silently resolved.
   - Supplementary additions are tagged `prerequisite`, `supplementary`, `advanced-extension`, or `industry-application`.

2. **Portable authored-content layer**
   - Subject books, chapters, projects, assignments, quizzes, paper notes, blog posts, and research notes remain `.md`/`.mdx`.
   - YAML, JSON, BibTeX, and media assets sit beside the relevant subject.
   - React components enhance presentation but are never required to read the raw source.

3. **Typed content compiler**
   - Parse front matter.
   - Validate it with Zod and emit JSON Schema for documentation/interchange.
   - Compile MDX at build time with an allowlisted component set.
   - Extract headings, plain text, citations, equations, code blocks, relationships, and word counts.
   - Generate immutable derived artifacts under `generated/`; agents never hand-edit generated files.

4. **Static application**
   - App Router pages load the generated content catalog.
   - Dynamic route segments use `generateStaticParams()`.
   - Server Components render content at build time.
   - Small client islands implement search UI, bookmark buttons, progress capture, theme controls, copy actions, and import/export.

5. **Static discovery layer**
   - Pagefind indexes final HTML after `next build`.
   - Sitemap, RSS, Atom/JSON feeds where useful, robots metadata, citation exports, and relationship indexes are generated at build time.
   - Pagefind is appropriate because it consumes static HTML after the site generator completes and adds its static search bundle to the output directory; see [Pagefind's build flow](https://pagefind.app/docs/running-pagefind/).

6. **Quality and publication layer**
   - Pull requests run deterministic content and application validation.
   - Only an approved commit on the protected publication branch can deploy.
   - GitHub Pages serves the immutable static artifact.

### 3.2 Dependency direction

```text
official syllabus evidence
        |
        v
curriculum YAML ---> subject registry ---> prerequisite/knowledge graph
        |                   |                         |
        +-------------------+-------------------------+
                            |
                            v
                   authored MDX/YAML/BibTeX
                            |
                            v
                 schema + content validation
                            |
                            v
             generated typed catalog and route params
                            |
                            v
                   Next.js static HTML export
                     |                  |
                     v                  v
              Pagefind index      sitemap/feeds
                     \                  /
                      v                v
                    GitHub Pages artifact
```

No browser feature writes back into the authored-content tree. No UI component becomes the source of truth for curriculum facts.

## 4. Repository and directory structure

Keep the existing application at the repository root during the pilot to avoid a risky build-system move. Introduce package boundaries through folders first. Move to a workspace only if duplication or independent releases justify it.

```text
.
├── app/
│   ├── (marketing)/
│   │   ├── about/page.tsx
│   │   └── page.tsx
│   ├── (learning)/
│   │   ├── assignments/page.tsx
│   │   ├── bookmarks/page.tsx
│   │   ├── datasets/page.tsx
│   │   ├── glossary/page.tsx
│   │   ├── papers/[paper-slug]/page.tsx
│   │   ├── papers/page.tsx
│   │   ├── progress/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── research-notes/page.tsx
│   │   ├── roadmap/page.tsx
│   │   ├── search/page.tsx
│   │   ├── semesters/[semester]/page.tsx
│   │   ├── semesters/page.tsx
│   │   ├── subjects/[subject-slug]/chapters/[chapter-slug]/page.tsx
│   │   ├── subjects/[subject-slug]/page.tsx
│   │   └── subjects/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── blog/page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── sitemap.ts
├── components/
│   ├── content/
│   ├── learning/
│   ├── navigation/
│   ├── search/
│   └── ui/
├── content/
│   ├── curriculum/
│   │   ├── official-curriculum.yaml
│   │   ├── prerequisite-graph.yaml
│   │   ├── source-register.yaml
│   │   └── subject-registry.yaml
│   ├── subjects/<subject-slug>/
│   │   ├── index.mdx
│   │   ├── book/
│   │   ├── chapters/
│   │   ├── research-papers/
│   │   ├── projects/
│   │   ├── assignments/
│   │   ├── quizzes/
│   │   ├── datasets/
│   │   ├── references.bib
│   │   └── glossary.yaml
│   ├── blog/
│   └── research-notes/
├── data/
│   ├── progress-schema.json
│   ├── relationships.json
│   └── resource-types.yaml
├── docs/
│   ├── adr/
│   ├── architecture.md
│   ├── content-strategy.md
│   ├── multi-agent-plan.md
│   ├── research-policy.md
│   └── writing-style.md
├── generated/                   # build output; never authored
│   ├── content-catalog.json
│   ├── citation-index.json
│   ├── knowledge-graph.json
│   ├── route-manifest.json
│   └── search-metadata.json
├── lib/
│   ├── content/
│   ├── knowledge-graph/
│   ├── persistence/
│   ├── research/
│   └── search/
├── packages/
│   ├── content-schema/
│   ├── research-client/
│   ├── shared/
│   └── validation/
├── public/
│   ├── media/
│   └── downloads/
├── scripts/
│   ├── build-content/
│   ├── build-search-index/
│   ├── calculate-word-count/
│   ├── extract-curriculum/
│   ├── generate-sitemap/
│   ├── validate-citations/
│   ├── validate-code/
│   ├── validate-content/
│   └── validate-links/
├── tasks/
│   ├── agent-reports/
│   ├── checkpoints/
│   ├── locks/
│   ├── master-task-manifest.json
│   └── subject-agent-registry.json
└── tests/
    ├── accessibility/
    ├── content/
    ├── e2e/
    ├── fixtures/
    ├── routes/
    └── unit/
```

The requested `apps/web` split is deferred until after the Semester 1 pilot. A premature monorepo move would add deployment and import complexity without increasing content portability. If adopted later, `app/`, `components/`, `lib/`, and web-only tests move together to `apps/web`; `content/`, `data/`, `generated/`, `packages/`, `scripts/`, and `tasks/` remain repository-level.

## 5. Content compiler and schema

### 5.1 Recommended implementation

Use a small repository-owned compiler instead of making the content dependent on a CMS:

- `gray-matter` or equivalent for front matter;
- Zod for runtime/build-time authoring validation;
- emitted JSON Schema Draft 2020-12 for agent contracts and editor tooling;
- `yaml` for curriculum and registries;
- `@mdx-js/mdx`/Next MDX integration for compilation;
- Unified/remark/rehype plugins for GFM, math, headings, citations, and sanitization;
- KaTeX for equations;
- Shiki or `rehype-pretty-code` for highlighted code;
- `citation-js` or a narrowly scoped BibTeX parser for display/export;
- AST-based prose counting so code, front matter, equations, references, and boilerplate do not satisfy the 3,000-word gate.

MDX supports React expressions, so only trusted repository content is compiled. Remote/user-supplied MDX is never evaluated. Components are mapped through a fixed `mdx-components.tsx` allowlist. Raw HTML is disabled or sanitized.

### 5.2 Canonical subject schema

```yaml
schemaVersion: 1
title: Mathematical Foundations for Machine Learning
slug: mathematical-foundations-for-machine-learning
semester:
  value: 1
  status: verified
subjectType: compulsory
specialization: core
officialSyllabusSources:
  - sourceId: programme-brochure-2026
    locator: "page-or-section-required"
summary: ""
prerequisites:
  - conceptId: basic-algebra
    classification: prerequisite
learningOutcomes: []
difficulty: postgraduate-foundation
estimatedHours: 0
chapterCount: 0
projectCount: 0
paperCount: 0
tools: []
tags: []
authors: []
reviewers: []
status: planned
createdAt: YYYY-MM-DD
updatedAt: YYYY-MM-DD
lastVerifiedAt: YYYY-MM-DD
version: 0.1.0
provenance:
  extractedBy: ""
  reviewedBy: []
  confidence: 0.0
  openQuestions: []
```

Required controls:

- slugs are repository-unique and immutable after publication;
- enum fields are centralized in `packages/content-schema`;
- all dates use ISO 8601;
- every official claim points to a `sourceId` plus page/section locator;
- unknown values are `null` with a reason, never guessed;
- derived counts are generated, not manually maintained;
- `status: approved|published` is rejected unless mandatory reviewer/check fields pass.

### 5.3 Canonical chapter schema

```yaml
schemaVersion: 1
title: ""
slug: ""
subject: mathematical-foundations-for-machine-learning
chapterNumber: 1
syllabusCoverage:
  - sourceId: programme-brochure-2026
    topicId: ""
    locator: ""
summary: ""
learningObjectives: []
prerequisites: []
estimatedReadingMinutes: 0
difficulty: foundation
tags: []
relatedChapters: []
recommendedPapers: []
authors: []
reviewers:
  subjectLead: ""
  mathematics: ""
  citations: ""
  code: ""
  editorial: ""
wordCount:
  meaningfulProse: 0
  calculatedAt: YYYY-MM-DD
citationStatus: pending
codeStatus: pending
mathReviewStatus: pending
editorialStatus: pending
createdAt: YYYY-MM-DD
updatedAt: YYYY-MM-DD
lastVerifiedAt: YYYY-MM-DD
version: 0.1.0
```

### 5.4 Resources and citations

Each resource record includes:

```yaml
id: doi-or-stable-derived-id
title: ""
authors: []
organization: null
publicationYear: null
resourceType: paper
url: ""
doi: null
arxivId: null
venue: null
accessedAt: YYYY-MM-DD
difficulty: intermediate
relevance: ""
prerequisiteTopics: []
access: free
confidenceScore: 0.0
verification:
  status: verified
  checkedAt: YYYY-MM-DD
  checkedBy: ""
  evidenceUrls: []
```

Deduplicate in this order: normalized DOI, arXiv ID, trusted provider ID, then normalized title plus first author. Keep rejected candidates with a rejection reason in `research/rejected/`; do not publish them.

## 6. Route generation and rendering

Every dynamic path is derived from the validated catalog:

- `/semesters/[semester]`: the fixed set `semester-1`, `semester-2`, `semester-3`;
- `/subjects/[subject-slug]`: all approved subject registry slugs;
- `/subjects/[subject-slug]/chapters/[chapter-slug]`: all approved chapters;
- `/papers/[paper-slug]`: all publishable paper notes;
- `/blog/[slug]`: all published blog entries.

Rules:

- `dynamicParams = false` for generated dynamic routes;
- fail the build when a registry item has no route or a route has no registry item;
- use a base-path-aware `assetUrl()` helper for media, Pagefind, downloads, and web-manifest URLs;
- use `next/image` only with static/unoptimized behavior suitable for export, or plain `<img>` where more predictable;
- generate canonical URLs from a public site-origin environment variable, not from request headers;
- avoid `headers()`, `cookies()`, `redirect()`, Server Actions, and request-aware metadata;
- create a static `404.html`;
- validate all internal links against the route manifest.

## 7. Search, bookmarks, progress, and notes

### 7.1 Search

Run Pagefind after Next writes `out/`:

```text
next build
pagefind --site out
```

Index only meaningful content (`data-pagefind-body`), exclude navigation/footer/code-copy controls, and attach metadata for subject, semester, specialization, content type, difficulty, and tags. The search page loads the Pagefind browser API using the configured repository base path. Keep a small generated command-palette index for navigation commands; do not duplicate the full-text index in the JavaScript bundle.

### 7.2 Device-local persistence

Define `LearningStateRepository` with:

```ts
interface LearningStateRepository {
  getBookmark(contentId: string): Promise<Bookmark | null>;
  listBookmarks(): Promise<Bookmark[]>;
  saveBookmark(bookmark: Bookmark): Promise<void>;
  removeBookmark(contentId: string): Promise<void>;
  getProgress(contentId: string): Promise<ReadingProgress | null>;
  saveProgress(progress: ReadingProgress): Promise<void>;
  exportSnapshot(): Promise<LearningStateSnapshot>;
  importSnapshot(snapshot: LearningStateSnapshot): Promise<ImportResult>;
}
```

Initial adapter:

- IndexedDB stores bookmarks, reading progress, and private notes;
- `localStorage` stores only theme, font, reduced-motion override, and schema version;
- reading progress is keyed by stable content ID plus content version;
- progress writes are throttled and occur only after hydration;
- users can reset, export, and import data;
- import validates `progress-schema.json`, previews conflicts, and never silently overwrites newer state;
- a visible notice explains that clearing browser data removes unsynchronized state.

Future adapter:

- a remote API can implement the same repository interface;
- an explicit migration copies local records only after consent and authentication;
- last-write-wins is insufficient for notes; use per-record revision timestamps and conflict presentation.

Progress definition:

- chapter completion is explicit user completion or at least 90% scroll plus a minimum dwell threshold;
- estimated percent alone is labeled an estimate;
- subject completion is the weighted share of required chapters, assignments, and projects, with weights stored in subject metadata;
- no analytics event contains private-note text.

## 8. Knowledge graph

Maintain one authored relationship registry and one generated graph:

```yaml
nodes:
  - id: concept:linear-algebra
    type: concept
    label: Linear Algebra
  - id: subject:machine-learning
    type: subject
    label: Machine Learning
edges:
  - from: concept:linear-algebra
    to: subject:machine-learning
    type: prerequisite_of
    evidence:
      - sourceId: programme-brochure-2026
        locator: ""
    confidence: 1.0
```

Allowed edge types are exactly:

- `prerequisite_of`
- `used_by`
- `extension_of`
- `alternative_to`
- `implemented_by`
- `evaluated_by`
- `applied_in`
- `related_to`

Validation checks unique node IDs, valid endpoints, allowed types, self-loops, duplicate edges, and cycles in the strict prerequisite subgraph. Cycles are errors unless an editorial override explains a co-requisite relationship. The generated graph provides:

- incoming/outgoing links for subject and chapter pages;
- shortest prerequisite paths;
- “study first” warnings;
- related chapters ranked by explicit edges, not text similarity alone;
- cross-subject project suggestions;
- an audit record explaining why each recommendation appeared.

## 9. Design system and accessibility

Use CSS custom properties as the source of truth for tokens and expose them through Tailwind only where useful:

- dark navy/near-black chrome;
- warm off-white reading surfaces;
- teal progress;
- blue concepts;
- violet research;
- amber exercises;
- coral primary actions;
- red only for errors and warnings.

Long-form pages use a humanist/serif reading face with a 65–80 character measure, generous line height, visible heading anchors, persistent-but-dismissible table of contents, and print styles. Code uses a monospace stack and horizontally scrolls without clipping.

WCAG 2.2 AA is the target. The normative standard and supporting implementation documents are available from [W3C WCAG 2.2](https://www.w3.org/TR/wcag/).

Mandatory checks include:

- semantic landmarks and one page-level heading;
- keyboard-accessible navigation, dialogs, copy controls, bookmarks, quizzes, and menus;
- visible focus;
- contrast testing in both themes;
- 44 by 44 CSS-pixel touch targets where practical;
- no meaning conveyed by color alone;
- reduced-motion handling;
- skip link;
- correctly associated labels and inline validation;
- KaTeX MathML or an equivalent accessible equation representation;
- descriptive alt text, with decorative toon art marked empty-alt;
- caption/transcript requirements for audio/video;
- no hover-only explanation;
- print output that preserves equations, citations, URLs, and heading hierarchy.

## 10. Research and citation architecture

Research is a staged evidence pipeline:

```text
query manifest
  -> provider response cache
  -> normalized candidate record
  -> deduplication
  -> source and identifier verification
  -> relevance review
  -> approved/rejected evidence record
  -> chapter/resource linkage
  -> citation rendering
```

Provider priority:

1. official syllabus and university materials;
2. Crossref, OpenAlex, Semantic Scholar, arXiv, ACL Anthology, PubMed where relevant;
3. official conference, publisher, standards, documentation, dataset, lab, and author pages;
4. recognized academic/technical organizations;
5. practitioner sources only as clearly labeled supplementary material.

Store provider response timestamps and normalized identifiers, but do not publish provider citation counts as durable facts. Verification is two-dimensional:

- **identity verification**: title, authors, year, identifier, and venue agree across authoritative metadata;
- **claim verification**: the source actually supports the sentence or result linked to it.

Every derived summary marks paper claims, educational interpretation, and reproduction observations separately. BibTeX and APA display citations are generated from the same verified record.

## 11. Validation and CI

### 11.1 Pull-request pipeline

Run inexpensive deterministic checks first:

1. dependency lockfile integrity;
2. formatting and TypeScript;
3. metadata/schema validation;
4. curriculum coverage and provenance;
5. route/slug/internal-link validation;
6. meaningful prose word count;
7. MDX compilation and unsafe-node checks;
8. citation/identifier validation from cached evidence;
9. code extraction, syntax checks, unit tests, and expected-output checks;
10. equation/notation lint plus mandatory human mathematics-review status;
11. full static build;
12. Pagefind index generation and search smoke tests;
13. Playwright desktop/mobile route and interaction smoke tests;
14. axe accessibility checks;
15. Lighthouse budgets on representative pages;
16. duplicate/filler/placeholder/internal-instruction detection.

Network link and metadata refreshes run on a scheduled workflow and can update verification state without making ordinary PRs flaky. A link is not automatically removed after one transient failure; retry with backoff and record response evidence.

### 11.2 Chapter merge gate

A principal chapter is publishable only when:

- meaningful prose is at least 3,000 words;
- every syllabus claim has provenance;
- front matter and heading contract pass;
- no placeholder, copied boilerplate, or agent instruction remains;
- references and identifiers are verified;
- supported claims have citations;
- code examples pass their declared test matrix;
- mathematics, citation, code, subject-lead, and editorial reviews are approved;
- accessibility checks pass;
- internal links and generated navigation resolve;
- the agent completion report exists and matches the changed files.

Automated similarity detection is a reviewer aid, not proof of plagiarism or originality.

### 11.3 Deployment pipeline

Deployment uses two jobs:

- **build**: checkout pinned commit, install with `npm ci`, run the full publication gate, build `out/`, run Pagefind against `out/`, validate base-path links, and upload the Pages artifact;
- **deploy**: requires the GitHub Pages environment and deploys the exact artifact produced by build.

Pull requests build and test but never deploy production. The publication environment should have branch protection. Actions are pinned to reviewed major versions or commit SHAs according to repository policy. The workflow uses least privilege: `contents: read`, `pages: write`, and `id-token: write` only for deployment.

## 12. Resumable multi-agent orchestration

The registry contains exactly 45 accountable Subject Lead tasks—one for every listed subject. That does not imply 45 simultaneous agents. Start with a maximum concurrency of three worker agents plus the orchestrator, then tune from observed memory, network, and review throughput.

Task states:

```text
planned -> claimed -> researching -> drafting -> technical-review
        -> citation-review -> editorial-review -> approved -> published
```

Exceptional states are `partial`, `needs-update`, `blocked`, and `failed`.

Each task has:

- immutable task ID;
- subject and phase;
- dependency IDs;
- declared input and output paths;
- branch/worktree or isolated task directory;
- exclusive file-ownership lease;
- attempt count and last error;
- content/source hashes;
- checkpoint path;
- acceptance checks;
- completion report path.

Safety rules:

- only the orchestrator writes shared registries and generated catalogs;
- subject agents write only within their declared subject directory and report directory;
- an agent cannot claim a task whose dependencies are incomplete;
- a lock contains owner, acquired time, expiry, paths, and task ID;
- commits are idempotent relative to an input hash;
- failed work is preserved and resumed from the last successful checkpoint;
- retry at most three times, reducing scope after repeated failure;
- no two agents edit the same file;
- merge queues rebase and rerun validation against the integration head;
- approval cannot be self-issued by the producing agent for citation, mathematics, or editorial gates.

The full subject registry can be created immediately, but Phase 2 should activate only the four Semester 1 planning leads. Their validated outlines become dependencies for chapter-generation tasks.

## 13. Agent output contract

Every task writes a report that validates against a versioned JSON Schema. Minimum payload:

```json
{
  "contractVersion": "1.0.0",
  "agentId": "subject-lead:mathematical-foundations-for-machine-learning",
  "runId": "uuid",
  "subject": "mathematical-foundations-for-machine-learning",
  "taskId": "sem1-math-foundations-outline",
  "task": "Create and validate the subject planning bundle",
  "status": "completed",
  "startedAt": "2026-07-28T00:00:00Z",
  "completedAt": "2026-07-28T00:00:00Z",
  "inputRevision": "git-sha-or-content-hash",
  "branchOrWorkspace": "agent/sem-01/mathematical-foundations",
  "filesCreated": [],
  "filesModified": [],
  "sourcesUsed": [
    {
      "resourceId": "programme-brochure-2026",
      "url": "verified-source-url",
      "accessedAt": "2026-07-28",
      "verificationStatus": "verified"
    }
  ],
  "citationsVerified": 0,
  "citationsRejected": 0,
  "wordCount": {
    "meaningfulProse": 0,
    "total": 0,
    "methodVersion": "1.0.0"
  },
  "testsRun": [
    {
      "name": "metadata-schema",
      "command": "npm run validate:content",
      "status": "passed",
      "evidencePath": "tasks/agent-reports/run-id/metadata-schema.log"
    }
  ],
  "validationResults": {
    "syllabusCoverage": "passed",
    "metadata": "passed",
    "citations": "passed",
    "code": "not-applicable",
    "mathematics": "not-applicable",
    "accessibility": "not-applicable",
    "editorial": "passed"
  },
  "checkpoints": [],
  "openIssues": [],
  "recommendedNextTasks": [],
  "contentHashes": {},
  "declarations": {
    "noFabricatedSources": true,
    "noUnresolvedPlaceholders": true,
    "changedOnlyDeclaredPaths": true
  }
}
```

Allowed top-level `status` values are `completed`, `partial`, `failed`, or `blocked`. A `completed` report is invalid if any mandatory validation is failed/pending, an undeclared changed file exists, evidence is missing, or an open blocking issue remains.

## 14. Phased migration from the current one-page site

### Phase A: Stabilize the prototype

- preserve the current public look as the homepage baseline;
- replace starter README/test assumptions with product-specific expectations;
- remove or quarantine runtime-only Cloudflare/ChatGPT/D1 code from the GitHub Pages path;
- centralize asset/base-path handling;
- verify the existing Pages workflow without deploying from a feature branch.

Exit criterion: unchanged homepage functionality builds as a correct static export and passes desktop/mobile smoke tests.

### Phase B: Introduce tokens, shell, and content compiler

- extract design tokens and reusable components;
- add schema packages and the content compiler;
- add the official curriculum source register and subject registry;
- emit the first generated catalog without changing all routes.

Exit criterion: invalid metadata or unverified curriculum provenance fails CI.

### Phase C: Reference vertical slice

- implement the Mathematical Foundations subject page;
- implement one complete production-quality chapter;
- add KaTeX, code highlighting, references, TOC, bookmarks, reading progress, previous/next links, print mode, and copy actions;
- add the reference subject to Pagefind.

Exit criterion: the reference slice passes every mandatory chapter and accessibility gate and is visually verified at desktop and mobile sizes.

### Phase D: Semester 1 planning and route expansion

- integrate validated plans from the four Semester 1 leads;
- generate subject, semester, roadmap, paper, project, assignment, glossary, search, bookmark, and progress routes;
- keep incomplete subjects visibly `planned` rather than presenting empty content as complete.

Exit criterion: all Semester 1 registry entries have validated outlines and complete navigation.

### Phase E: Controlled content scale-out

- generate chapters only from approved outlines;
- merge through subject-level review queues;
- add cross-subject graph links after both endpoints are approved;
- activate Semester 2 and elective batches according to capacity.

Exit criterion: every published artifact has traceable evidence and a matching completion report.

### Phase F: Publication hardening

- finish sitemap, feeds, structured data, social metadata, print/download behavior, analytics consent decisions, performance budgets, security headers guidance for the host, and scheduled link verification;
- run full cross-subject notation, terminology, duplication, prerequisite, and navigation reviews.

Exit criterion: the GitHub Pages artifact is reproducible from the published commit and representative live URLs pass HTTP and browser verification.

### Phase G: Optional synchronized accounts

Only after the static platform is stable:

- choose a separate, privacy-reviewed API and identity provider;
- implement the remote `LearningStateRepository`;
- add consent-based local-to-account migration;
- retain offline/local use and Markdown portability.

This phase requires a host or external backend beyond GitHub Pages and is not part of the initial deployment.

## 15. Security, privacy, and operational controls

- never place API keys, provider tokens, private notes, or unpublished licensed material in the client bundle;
- research API calls run in CI/local tooling with rate limits and cached metadata, not in visitors' browsers;
- pin and audit dependencies; enable Dependabot and code scanning;
- sanitize/disable raw MDX HTML and allowlist custom components;
- use Subresource Integrity only where compatible; prefer self-hosted static assets;
- do not load third-party analytics until a documented privacy decision exists;
- state clearly that local progress is stored on the device;
- use stable IDs and versioned export formats so readers retain control of their state;
- track media provenance, license, creator, source URL, and allowed transformations;
- use a restrictive Content Security Policy where GitHub Pages delivery constraints permit it, with no inline script expansion as the default;
- generate reproducible build manifests containing commit SHA, Node version, dependency lock hash, content catalog hash, and build timestamp.

## 16. Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Official brochure/syllabus is absent or incomplete | Curriculum cannot be truthfully marked verified | Block official mappings, record uncertainty, and publish no invented units. |
| Static export feature mismatch | Build or runtime breakage | Enforce forbidden-API lint rules and build representative routes in every PR. |
| Repository base path breaks assets/search | Pages site loads without media or search | Central `basePath` helper plus built-output link tests under a simulated repository name. |
| 45 subjects create review debt | Low-quality volume and inconsistent notation | Plan first, cap concurrency, use subject leads, and require independent gates. |
| Link checking becomes flaky | Legitimate content is blocked by transient failures | Cache evidence, retry with backoff, and separate scheduled network checks from deterministic PR checks. |
| Device-local progress is lost | Poor learner experience | Clear disclosure, versioned export/import, and later opt-in sync adapter. |
| MDX executes unsafe content | Build or supply-chain risk | Trusted repository content only, component allowlist, no remote MDX, sanitization, dependency audit. |
| Word-count targets encourage filler | Academic quality deteriorates | AST-based meaningful prose count plus editorial rubric and duplication checks. |
| Automated citation checks validate only metadata | Unsupported claims appear credible | Require claim-level review and evidence locators in addition to DOI/URL checks. |
| Current prototype tests are stale | False failures or false confidence | Replace starter assertions with product acceptance tests before scaling content. |

## 17. Architecture acceptance criteria

The foundation is accepted when:

- the official source register can represent verified, uncertain, and supplementary curriculum claims;
- all 45 subject leads exist in the registry with unique ownership;
- one subject and chapter can compile from portable MDX into all required static routes;
- an invalid subject, chapter, citation, edge, or completion report fails the build;
- the site builds under a repository base path with no server-only API use;
- Pagefind returns results from the generated output;
- bookmarks and progress survive reload and can be exported/imported;
- live pages remain readable with JavaScript disabled except for interactive enhancements;
- WCAG checks and keyboard journeys pass for the reference slice;
- the GitHub Pages workflow deploys only the validated immutable `out/` artifact;
- every published content item traces to source evidence, reviewer decisions, and an agent completion report.

## 18. Immediate implementation order

1. Inventory and verify the official brochure/syllabus before marking curriculum fields as authoritative.
2. Repair product tests and confirm the static build under a simulated GitHub repository base path.
3. Add schema enums, Zod models, emitted JSON Schemas, and source-register validation.
4. Create the 45-item subject registry and prerequisite graph with uncertainty fields.
5. Add the content compiler and one minimal fixture.
6. Build the Mathematical Foundations reference subject and chapter vertical slice.
7. Add Pagefind, device-local learning state, accessibility tests, and Pages artifact validation.
8. Only then activate broader chapter generation.

This sequence preserves the existing design work while replacing hard-coded demonstration data with an auditable platform one tested vertical slice at a time.
