# Artificial and Computational Intelligence publication review

Review date: 2026-07-28
Reviewer: Independent Publication Reviewer
Verdict: **approved after corrections**

## Scope and source boundary

The official brochure was checked at physical PDF page 12 (printed page 10).
It lists **Artificial and Computational Intelligence** as a first-semester
course, but supplies no unit-level description for it. The chapter therefore
correctly labels its content as a prerequisite educational interpretation and
does not present its proposed topics as an official university syllabus.

Evidence hashes:

- brochure: `fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b`
- `official-curriculum.yaml`: `d61e6d875dfd4fcbbc0e2bd18cc11e5749a0efe9aa816c540d8498d5b0037975`
- reviewed chapter: `9b88c260050a43c9d5648e4f0f0101c676f34d6ef09bca4baf04491887368625`

## Corrections made

1. Removed duplicate `from __future__ import annotations` statements from the
   second and third published Python blocks. Concatenating the three blocks in
   document order had produced a `SyntaxError`; the exact published blocks now
   execute together and pass all eight assertions.
2. Corrected the Bezdek record to the title and pagination returned for DOI
   `10.1109/MSMC.2016.2558778`: *(Computational) Intelligence: What's in a
   Name?*, pages 4–14.
3. Added the missing Bezdek and Berkeley CS 188 records to `references.bib`.
4. Narrowed the Raji and Dobbe claim to the paper's supported conclusion about
   real-world incidents and socio-technical safety conditions.
5. Updated the independently reviewed chapter metadata and meaningful-prose
   count.

## Gate results

- Source boundary: pass; explicit title-and-placement-only limitation.
- Narrative structure: pass; one title and ten compact narrative H2 sections.
- Meaningful prose: pass; 4,305 words, excluding code and metadata.
- Mathematics: pass; symbols, assumptions, units, hand calculation,
  constrained argmin, tie policy, limitations, and complexity are consistent.
- Code: pass; three exact Python blocks, eight assertions, expected output
  `8 route-selection tests passed`.
- Claims and citations: pass; six cited resources resolve to official or
  identifier-authoritative endpoints. Crossref metadata was checked for all
  three DOI records.
- Editorial quality: pass; the running example, formal model, failure analysis,
  responsible deployment discussion, study lab, assignment, oral questions,
  summary, and references form one coherent progression.
- Rendered experience: pass; static production output contains one H1, ten H2s,
  five highlighted code blocks, 44 MathJax containers, and reader controls for
  bookmarking, citation copying, and printing.
- Repository validation: pass; foundation validation, ESLint, production
  static build, rendered HTML tests, exact Python execution, and
  `git diff --check`.

## Residual limitation

Approval applies to this reference chapter, not to a complete official subject
syllabus. Future chapters must preserve the same prerequisite, supplementary,
advanced-extension, or industry-application classifications until an official
unit-level syllabus is available.
