# Independent publication review — A Solver Must Explain Its Answer

## Decision

**PASS — approved after corrections.**

The chapter meets the compact narrative standard used by Shivam's Speech and
Language Processing companion: a concrete problem, conceptual map, intuition
before formalism, a worked derivation, executable code, failure analysis,
evaluation and responsible-use guidance, a study lab, oral questions, and a
summary. It also meets the 3,000-word prose gate, the title-only curriculum
boundary, MathJax rendering, bibliography consistency, and static publication
checks.

## Reviewed snapshot

- Review date: 2026-07-28
- Review branch: `agent/elective/automated-reasoning-publication-review`
- Base snapshot: `0d65681001f7667e33e861488a31c94816fe743c`
- Chapter: `content/subjects/automated-reasoning/chapters/01-a-solver-must-explain-its-answer.mdx`
- Chapter SHA-256 after corrections: `77bbaec7a556692d9bfd043d47bfc0c26ef4230f3f76579d4253329ef5d397f1`
- `references.md` SHA-256: `cbb891bd9c1b30a413c19228294bc15905bfc4357fe348cd0b91368b00d1eea3`
- `references.bib` SHA-256: `b59e7e7447966526105a6be0d6361cd1ae12c7768fd567f8419eaeb67e915842`

Approval applies only to this immutable Chapter 1 snapshot. Any chapter or
bibliography hash change requires a new review.

## Corrections made

1. Corrected the Davis–Putnam DOI from the invalid `10.1145/321033.321043`
   lead to ACM's verified `10.1145/321033.321034` in the chapter and subject
   bibliography, and added the record to `references.bib`.
2. Corrected the verified 2018 SAT-framework author record from Mathias
   Lasserre to Peter Lammich in the chapter bibliography and BibTeX.
3. Set chapter frontmatter `wordCount` to the independently recomputed 3,177
   meaningful prose words and changed review statuses to verified/tested/
   passed/approved.
4. Scoped the brute-force SAT complexity statement to total literal
   occurrences (`O(2^n L)`), with the bounded-width `O(2^n m)` shorthand.

## Curriculum boundary

The BITS Pilani WILP M.Tech. AI & ML brochure is the source of truth. It lists
**Automated Reasoning** as a configurable Semester 2–3 elective title at
physical PDF page 12 (printed page 10), but contains no topic-level units,
prerequisites, outcomes, assessment weights, tools, or reading list for this
title. The chapter therefore labels propositional logic, resolution, SAT, DPLL,
certificates, and SMT as proposed prerequisite/supplementary/industry content;
it does not present them as official university units.

## Academic and code checks

- Meaningful prose: **3,177 words**, excluding frontmatter, code, equations,
  headings, references, navigation, and URLs.
- Structure: one H1 and ten compact reader-facing H2 sections; no 29-item
  checklist TOC.
- Mathematics: resolution soundness case split, refutation derivation, model/
  entailment distinction, DPLL invariant, and complexity qualification pass.
- Python: the exact published first-principles DPLL block executed on Python
  3.14.6; SAT and UNSAT assertions passed.
- Z3: the exact published library block executed with Z3 4.16.0; `sat` status
  assertion passed and a model was returned.
- Project contracts: six contracts contain problem/objectives, prerequisites,
  architecture, data/licence, milestones, metrics, deliverables/tests,
  extensions/deployment/ethics, and rubrics.

## Sources and identifiers

The verified reading path contains Robinson (1965), Davis and Putnam (1960),
Moskewicz et al. (2001), de Moura and Bjørner (2008), and Blanchette et al.
(2018), plus the SAT Competition and SMT-LIB official resources. DOI records
were checked against ACM/Crossref/publisher or identifier-authoritative
metadata on 2026-07-28:

- `10.1145/321250.321253` — Robinson, *A Machine-Oriented Logic Based on the
  Resolution Principle*.
- `10.1145/321033.321034` — Davis and Putnam, *A Computing Procedure for
  Quantification Theory*.
- `10.1145/378239.379017` — Moskewicz et al., *Chaff*.
- `10.1007/978-3-540-78800-3_24` — de Moura and Bjørner, *Z3*.
- `10.1007/s10817-018-9455-7` — Blanchette, Fleury, Lammich, and Weidenbach,
  *A Verified SAT Solver Framework*.

No fabricated DOI, author, title, venue, URL, or experimental result was found.
The paper descriptions are intentionally short reading-path annotations rather
than claims about unreviewed experiments.

## Render and repository gates

- `npm run build:pages` — passed; 80 static routes generated.
- `GITHUB_REPOSITORY=shivam2003-dev/mtech-ai-ml-learning-hub npm run validate:links` — passed; 78 HTML files and 643 internal links.
- `npm run validate:foundation` — passed; 45 subjects and 45 leads.
- `node --test tests/rendered-html.test.mjs` — passed, 3 of 3.
- `npm run lint` — passed.
- `npx tsc --noEmit --incremental false` — passed.
- `npm audit --omit=dev --audit-level=high` — passed, 0 production vulnerabilities.
- `git diff --check` — passed.
- Rendered chapter inspection: one H1, ten H2s, 82 MathJax SVG title/ARIA
  pairs, syntax-highlighted Python, bookmark/citation/dark-mode/print controls.
- Playwright desktop/mobile inspection passed: at 390×844 the title, controls,
  equations, code, and long-form text reflow without horizontal overflow;
  bookmark, citation-copy, and dark-mode interactions updated their accessible
  labels/status.

## Remaining scope

This approval covers Chapter 1 only. The next seven planned chapters remain
unauthored, and the brochure's title-only limitation remains in force. Future
chapters require their own source, mathematics, code, citation, editorial,
originality, accessibility, and rendered-publication gates.
