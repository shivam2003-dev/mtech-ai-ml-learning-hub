# AI and ML Techniques for Cyber Security — independent publication review

Review date: 2026-07-28
Verdict: **approved after bibliography correction**

Approval applies to Chapter 1, *From a Security Question to an ML Evidence
Contract*, at chapter SHA-256
`06aa03d3eb286f375604a8d177db25e3d6c4b38837ba9a7c846d29bd36182560`.

## Curriculum boundary

The supplied BITS Pilani WILP brochure hash is
`fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b`.
The brochure places the named elective in the configurable Semester 2–3 pool
on physical PDF page 12 (printed page 10), and its course-topic description on
physical PDF page 16 (printed page 14). The chapter covers the exact first
topic, **Introduction to AI and ML in Cybersecurity**, and introduces the
remaining eleven listed phrases as clearly labelled future/related techniques.
It does not claim that the brochure defines chapter order, prerequisites,
outcomes, hours, or tools. Threat-model vocabulary, the logistic baseline,
governance, and safety guidance are labelled prerequisite, supplementary, or
industry application depth. No invented official syllabus detail was found.

## Editorial and originality gate

The chapter follows the compact narrative pattern used by the referenced
Shivam2003 companion: a fast orientation, one continuous Noor/Mira security
example, conceptual map, intuition before formalism, derivation and worked
numbers, implementation, failure analysis, study lab, assignment, oral
questions, summary, and references. It has one rendered H1 and ten reader-facing
H2 sections, not a 29-item checklist.

The repository word-count script reports **3,255 meaningful prose words** after
excluding frontmatter, code, equations, headings, references, and URLs. An
independent normalized-paragraph comparison covered 42 long prose paragraphs
against 118 other local Markdown/MDX files and found no exact matches. This is
an editorial originality check, not a claim of database-certified plagiarism
detection.

## Mathematics and code gate

The chapter defines the score, threshold, expected-cost expression, logistic
function, binary log loss, and matrix gradient with stated dimensions and
operational limitations. The prevalence example computes recall, precision, and
accuracy correctly. Complexity statements are scoped to the stated gradient
fixture. The text explicitly distinguishes scores from calibrated probabilities
and model evidence from forensic or causal conclusions.

The single published Python fence was extracted without editing and executed
with network and hostile-artifact access absent. It produced:

```text
{'tp': 21, 'fp': 0, 'fn': 0, 'tn': 39}
```

Shape, label, threshold, and confusion-count validation assertions passed.

## Source and citation gate

NIST CSF 2.0, NIST AI RMF 1.0, MITRE ATT&CK, MITRE ATLAS, EMBER, DeepLog, and
the two survey records resolve through official or identifier-authoritative
endpoints. Crossref metadata verified the cited DOI records, including the
complete eight-author Choi survey record. One concrete issue was found: its
BibTeX entry had abbreviated the author list as `and others`. The complete
record is now stored in `references.bib`; no fabricated title, author, DOI,
venue, year, or URL was found.

## Rendered publication gate

The production export generated 76 static pages. Foundation validation, 603
internal links, ESLint, TypeScript, production dependency audit, and all three
rendered HTML tests pass. At 1440×1000 and 390×844, the page remains readable;
the mobile document width is exactly 390px with no horizontal overflow. The
rendered chapter contains 27 MathJax expressions, each with an accessible SVG
title, one highlighted code block, and functional bookmark, copy-citation,
dark-mode, print, and reading-progress controls. Bookmarking announced
“Chapter bookmarked”; dark mode changed the control to “Light mode”. No browser
console error occurred after serving the non-base-path local export correctly.

## Status decision and remaining scope

Chapter metadata now reads `citationStatus: verified`, `codeStatus: tested`,
`mathReviewStatus: passed`, and `editorialStatus: approved`. The subject itself
remains `technical-review`: only Chapter 1 is authored, and the remaining
eleven planned chapters plus the full paper/project/assignment library still
need generation and independent review. Any later chapter or bibliography hash
change requires a new publication review.
