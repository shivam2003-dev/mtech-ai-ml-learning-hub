# Shivam's M.Tech AI & ML Learning Hub

A content-first, open learning and publishing platform for Shivam Kumar's M.Tech in Artificial Intelligence and Machine Learning.

The project combines a verified curriculum registry, subject books, intuitive mathematical explanations, tested Python, research reading paths, assignments, projects, bookmarks, and reading progress. Public content is portable Markdown/MDX and the production site is a static GitHub Pages deployment.

## Current release

- 45 brochure-verified taught subjects: 6 compulsory and 39 electives
- one accountable Subject Lead identity per subject
- MathJax equation rendering from Markdown/MDX
- static subject, semester, roadmap, paper, project, and study routes
- browser-local chapter bookmarks and reading progress
- print-friendly chapter pages
- separate curriculum, citation, code, mathematics, editorial, and accessibility quality gates
- animated cartoon artwork for Shivam with reduced-motion support

The programme brochure does not provide topic-level descriptions for every subject. The registry preserves this limitation: prerequisite, supplementary, advanced, and industry material is never presented as an official syllabus unit.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The development site opens at the URL printed by the command.

## Validate

```bash
npm run validate:foundation
npx tsc --noEmit --incremental false
npm run lint
npm test
GITHUB_PAGES=true GITHUB_REPOSITORY=shivam2003-dev/mtech-ai-ml-learning-hub npm run build:pages
```

Validate a chapter's meaningful prose count:

```bash
npm run count:chapter -- content/subjects/<subject>/chapters/<chapter>.mdx
```

## Important directories

```text
app/                  Next.js reader routes
components/           reader and navigation components
content/curriculum/   brochure-backed curriculum records
content/subjects/     portable subject books and chapters
docs/                 architecture, content and agent plans
packages/             content schemas
scripts/              validation and publishing utilities
tasks/                resumable task and Subject Lead records
```

See [architecture](docs/architecture.md), [content strategy](docs/content-strategy.md), and [multi-agent plan](docs/multi-agent-plan.md) for the production model.

## Branch and release model

- `main`: reviewed, deployable releases
- `develop`: integration
- `agent/<subject>/<task>`: isolated subject work

The Pages workflow deploys only reviewed commits on `main`. Pull requests and pushes run foundation, type, lint, and build checks.

## Curriculum source

The primary source is the locally supplied BITS Pilani Work Integrated Learning Programmes brochure, identified in `content/curriculum/official-curriculum.yaml` by filename, document title, access date, page evidence, and SHA-256 digest. The brochure itself is not copied into this repository.

## Licence and attribution

Original educational writing and code remain subject to the repository's future explicit licence. External resources retain their original licences and are cited rather than copied. The generated cartoon portrait is used as project artwork for Shivam Kumar.
