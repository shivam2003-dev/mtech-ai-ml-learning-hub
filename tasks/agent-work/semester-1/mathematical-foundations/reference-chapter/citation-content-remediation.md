# Citation Content Remediation

Report ID: `math-foundations-ch01-citation-content-2026-07-28`  
Status: ready for independent citation re-review

This is author-side remediation evidence for RC-SL-005. It does not claim an
independent citation-verifier decision.

- The `ndarray` and broadcasting pages are pinned to NumPy 2.5. Their verified
  28 June 2026 update date and 28 July 2026 access date are recorded in the
  chapter, `references.md`, and `references.bib`.
- The curriculum notice now identifies the brochure, organization, repository
  record, record hash, source-PDF hash, and exact PDF/printed page evidence.
- Claim-level links now support `ndarray`, broadcasting, `isclose`, `matmul`,
  `transpose`, `isfinite`, and `finfo` behavior.
- The broadcasting example states the exceptional `b == k` case.
- Floating-point claims were narrowed to the implementation contract and
  official NumPy API behavior.
- Security and industry recommendations are labeled as repository engineering
  guidance rather than claims attributed to the academic sources.
- The statement about arbitrary custom Python objects was replaced by a narrow
  repository input-contract recommendation.
- The NumPy paper continues to support only the stated array-programming and
  scientific-computing context; the chapter separately labels its educational
  interpretation.

The chapter also qualifies the Python-loop performance statement, adds a tested
empty-batch mean example, and increases estimated reading time to 100 minutes.
An independent citation verifier must still decide whether the chapter-wide
`citationStatus` can move from `partial` to `verified`; the author-side
corrections do not make that decision.
