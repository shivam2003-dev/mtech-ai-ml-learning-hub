# AI and ML for Robotics — Chapter 1 publication review

Review date: 2026-07-28
Reviewer: Independent AI/ML for Robotics publication reviewer
Reviewed commit: `2e7124f` (latest `origin/develop` at review start)
Reviewed chapter SHA-256: `a6d110b6cf128d8d690c92ccac7dea99e69dd534c89c36a3ca651b65cde4cba`

## Decision

**Approved as a chapter-level reference slice.** The subject remains
`technical-review` because the brochure is title-only and only one of the
proposed eight chapters is authored. This approval does not represent an
official robotics unit list or completion of the subject book.

## Curriculum boundary

The SHA-256-verified BITS Pilani WILP brochure places **AI and ML for
Robotics** in the configurable Semester 2–3 elective pool (physical PDF page
12, printed page 10). It provides no unit list for this elective. The chapter
therefore labels perception, estimation, planning, control, reinforcement
learning, and sim-to-real as a proposed supplementary interpretation or
prerequisite. No invented topic is presented as an official university topic.

## Chapter and mathematics gates

- The chapter has 3,043 meaningful prose words under the repository counter,
  above the 3,000-word gate.
- It follows the compact companion architecture: 10 reader-facing H2s, no
  authored H1, a running point-mass robot, worked derivation, code lab,
  failure analysis, evaluation, oral questions, summary, and references.
- The independent derivation check confirms that `e = x* - x` and
  `u = kp e - kd v` produce `e'' + kd e' + kp e = 0`; with `kp=2`, `kd=0.5`
  both continuous roots have negative real part. The numerical command
  example evaluates to 1.1 and clips to 0.8 as stated.
- The exact published Python fence runs under Python 3.14.6 and NumPy 2.3.4,
  producing `initial=0.000 final=1.211 max_command=0.800` and passing shape,
  bound, and seeded improvement assertions.

## Citation corrections and verification

The integrated slice contained two concrete bibliography defects. The Kober
entry in the research-path README carried an unrelated/unresolved DOI; it now
uses the Crossref-verified `10.1177/0278364913495721`. QT-Opt was discussed and
listed in frontmatter without a terminal bibliography record; it now has a
complete CoRL/arXiv record and URL. Chapter references now include direct URLs
for the official brochure, both DOI records, arXiv, MIT Press, and the free
Sutton–Barto text. The BibTeX file includes all five scholarly records with
complete authors/identifiers.

## Build, originality, and rendered UX

The production static build generated 75 routes. Foundation validation passed
45 subjects and 45 leads; link validation passed 593 internal links; lint,
TypeScript, production dependency audit, and the three rendered tests passed.
An exact-paragraph scan found no matches across 50 chapter prose paragraphs
and 99 other local Markdown/MDX files; this is an editorial signal, not a
database-certified plagiarism verdict. A real-browser check at 1440×1000 and
390×844 found no horizontal overflow, one H1, ten H2s, 46 MathJax expressions
with accessible SVG titles, and no console errors after a root-path static
build. The chapter’s reading controls and code tools rendered correctly.

## Remaining work

The remaining seven proposed robotics chapters, 15–30-resource subject-level
reading path, paper notes, and full project contracts must still be authored and
reviewed. The subject must not be marked published until those gates pass.
