# Independent publication review — Neural Networks as Differentiable Programs

## Decision

**PASS — approved for publication integration.**

The reviewed chapter satisfies the compact Shivam2003 narrative standard, the
3,000-word meaningful-prose gate, the exact official curriculum boundary,
mathematical and executable-code checks, rendered MathJax/code requirements,
and source/citation verification. One concrete bibliography-completeness issue
was corrected during review: the two PyTorch tutorials cited in the chapter
were present in the display bibliography but absent from `references.bib`.
Their verified BibTeX records were added. The chapter itself was not edited.

## Immutable reviewed snapshot

- Develop snapshot: `771273a6db8b3466a591bc3cab98d450c8e4b48c`
- Chapter:
  `content/subjects/deep-neural-networks/chapters/01-neural-networks-as-differentiable-programs.mdx`
- Chapter SHA-256:
  `3f26b095cb520ce90fadfba642ff5f8155d3da4841c6362d4adc7c4546532246`
- Corrected `references.bib` SHA-256:
  `e9007fa0880cc5c3e27064b404b6ccd36e6dc55c3be31c10dd3361b4f855b65a`
- `references.md` SHA-256:
  `2572670f9517df996bbf519300ac84f5a652f5ed0de71bcf3229a33ff45ff034`
- Review date: 2026-07-28

Any chapter-hash change makes the chapter-specific approval stale.

## Curriculum boundary

The supplied BITS Pilani WILP brochure was rendered and visually inspected.
Physical PDF page 12, printed page 10, places *Deep Neural Networks* in Semester
2. Physical PDF page 14, printed page 12, begins the course description with
the exact phrase “Introduction to neural networks” and then lists the remaining
course topics.

The chapter is explicitly classified as **Official topic — Introduction to
neural networks**. Computation graphs and shape contracts are labelled
Supplementary, while input limits and model reporting are labelled Industry
application. It does not claim that the brochure defines units, prerequisites,
outcomes, tools, hours, or chapter ordering. The source and curriculum-record
hashes match the recorded provenance. No invented official syllabus detail was
found.

## Editorial structure and originality

The chapter exposes nine reader-facing H2 sections rather than a checklist of
micro-headings. It includes:

- a one-minute version;
- Mira's equipment-telemetry running example;
- a chapter promise and explicit learning contract;
- a conceptual map;
- intuition before formal notation;
- a complete numerical forward pass and local derivative;
- first-principles NumPy and PyTorch implementations;
- practical evaluation and responsible-use boundaries;
- failure modes, edge cases, complexity, and research-reading guidance;
- a study lab, assignment, oral questions, summary, next step, and references.

This matches the repository's adaptation of Shivam's Speech and Language
Processing companion: concrete lead, quick orientation, progressive formalism,
worked evidence, warnings, and consolidation inside a compact narrative arc.
No copied passage or suspicious source imitation was detected by editorial
comparison. This is an editorial originality assessment, not a
database-certified plagiarism score.

The repository word-count script reports **3,014 meaningful prose words** after
excluding frontmatter, code, equations, headings, references, navigation, and
URLs. Frontmatter and validation evidence agree.

## Mathematics and code

The following checks pass:

- batch and parameter dimensions are consistent;
- the two-affine-layer collapse without a nonlinearity is algebraically sound;
- parameter count is `2*3 + 3 + 3*1 + 1 = 13`;
- the worked pre-activations are `[0.1, -2, 2.25]`;
- the ReLU hidden value is `[0.1, 0, 2.25]`;
- the scalar score is `0.9`;
- the active-region input gradient is `[0.6, 0.7]`;
- the ReLU nondifferentiability qualification is correct;
- the dense forward cost `Theta(bdm + bmk)` and activation-storage
  `Theta(bm)` statements are correctly scoped.

The two Python fences were extracted from the published MDX in document order
and executed without editorial changes on Python 3.14.6, NumPy 2.3.4, and
PyTorch 2.9.1. All nine checks passed: manual score, NumPy/PyTorch parity,
autograd/hand-gradient parity, parameter count, four invalid inputs, and
two-record batch shape.

## Sources and citations

All four official book/documentation endpoints returned HTTP 200. All three
DOI resolvers returned canonical redirects, and Crossref records confirmed
title, authors, year, venue/publisher, volume, and pages where applicable:

- Rosenblatt (1958), `10.1037/h0042519`;
- LeCun, Bengio, and Hinton (2015), `10.1038/nature14539`;
- Mitchell et al. (2019), `10.1145/3287560.3287596`.

The official Goodfellow-Bengio-Courville site confirms the 2016 MIT Press
BibTeX record and free HTML edition. The official D2L site supplies its 2023
Cambridge University Press BibTeX record. The PyTorch pages support the
`nn.Module`/`forward` and dynamic computation-graph claims. Every inline URL
appears in the terminal chapter references, and every chapter source now has a
subject-level BibTeX record. The subject metadata table records type, venue,
difficulty, relevance, prerequisites, access conditions, confidence, and
verification status.

No fabricated source, author, DOI, URL, venue, publication year, or experimental
result was found.

## Render and repository checks

- `npm run validate:foundation` — passed.
- `npm run lint` — passed.
- `npm test` — passed, 3 of 3 tests.
- Production static generation includes the DNN subject and chapter routes.
- Rendered chapter: exactly one H1, nine H2s, three Shiki code blocks, MathJax
  output, bookmark, print, citation-copy, reading-progress, and dark-mode
  controls.
- `git diff --check` and JSON parsing — passed.

The existing repository-wide internal-link validator's GitHub Pages base-path
resolution issue is outside this content review and is already recorded in the
authoring completion report.

## Remaining scope

This approval covers the immutable Chapter 1 snapshot and the corrected
subject bibliography. It does not approve the eleven unauthored DNN chapters,
real-world deployment of the toy model, or future changes without re-review.
