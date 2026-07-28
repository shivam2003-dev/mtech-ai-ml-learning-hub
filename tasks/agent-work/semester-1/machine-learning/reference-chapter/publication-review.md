# Machine Learning Chapter 1 Independent Publication Review

Decision: **approved** for publication as the Machine Learning reference
chapter. The approval applies only to approved chapter SHA-256
`2228b11d2221fd1643ed9f86522f244ff3a2eab3e7fa72aa53f4f0408f4d12f3`.

## Curriculum boundary

The local BITS Pilani WILP brochure matches the planning hash
`fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b`.
Rendered physical PDF page 14, printed page 12, visibly places introduction to
machine learning, kinds of learning, supervised learning, unsupervised
learning, and the machine-learning workflow under the Machine Learning
heading. Chapter 1 covers those exact official topics.

Problem framing, empirical risk, train/validation/test roles, leakage threat
modelling, reproducibility, model cards, monitoring, security, and privacy are
visibly labelled Supplementary or Industry application material. No invented
unit number, official prerequisite, official learning outcome, official hour
estimate, dataset, or tool is attributed to the university.

## Editorial and originality gate

- 3,711 meaningful prose words; frontmatter agrees with the counter.
- Ten ordered H2 sections and one rendered page H1.
- A one-minute version, one continuous Leena/pump-maintenance story, chapter
  promise, formal objects, derivation, dual implementation, failure analysis,
  lab, rubric, assignment guidance, oral questions, summary, and reading path.
- Sixty long prose paragraphs were compared against 82 other local content
  files; no exact paragraph match was found.
- The writing distinguishes synthetic teaching data, cited claims, and the
  chapter's educational synthesis.

## Mathematics and code gate

The zero-one-loss constant classifier derivation is dimensionally and
algebraically correct:

`R_hat(h_c) = (n - n_c) / n = 1 - n_c / n`.

Therefore any class maximising `n_c` minimises empirical risk. The chapter
correctly treats ties as multiple minimisers, and the implementation's
smallest-numeric-label tie rule follows `np.unique` ordering plus the first
maximum returned by `np.argmax`.

Both published Python fences were extracted and executed exactly in one Python
process. They produced the documented 12/4 split, majority class 0, and matching
scratch/library accuracy of 0.500. An independent three-class oracle confirmed
the tie policy and empirical-risk minimisation. The environment was Python
3.14.6, NumPy 2.3.4, and scikit-learn 1.7.2.

## Citation gate

Crossref metadata matches all three DOI records. JMLR, NeurIPS, Stanford, and
scikit-learn official endpoints returned HTTP 200. Claims about leakage,
model-card scope, scikit-learn, and ML-system technical debt are supported by
the cited primary sources.

One correction was required: the BibTeX entries for Pedregosa and colleagues,
Sculley and colleagues, and Mitchell and colleagues abbreviated authors as
`and others`. They now contain the complete official author lists. JMLR issue
85 and the ACM publisher were also restored from primary metadata. No
fabricated title, author, DOI, venue, year, or URL was found.

## Rendered publication gate

ESLint, the production GitHub Pages export, and all three rendered HTML tests
pass. The two Machine Learning pages have 22 valid internal links after
normalising the deployment base path.

Real-browser review passed at 1440×1000 and 390×844. The page has no horizontal
overflow at 390 pixels, equations expose accessible text, code is highlighted,
the table of contents is complete on desktop, and the mobile hierarchy remains
readable. Bookmarking changed the control to `Bookmarked` and announced
`Chapter bookmarked`; dark mode changed the control to `Light mode`. No browser
console error occurred. A development-only unused-font-preload warning did not
affect rendering or interaction.

## Status decision

Every chapter-level gate passed, so the chapter metadata now reads:

- `citationStatus: verified`
- `codeStatus: tested`
- `mathReviewStatus: passed`
- `editorialStatus: approved`

The subject itself remains in `technical-review` because eleven planned
chapters and the full project, assignment, quiz, dataset, and paper-note
library are not yet published.

Future edits that change the approved chapter hash require a new publication
review.
