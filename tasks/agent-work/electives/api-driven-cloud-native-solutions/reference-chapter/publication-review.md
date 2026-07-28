# API-Driven Cloud-Native Solutions — Chapter 1 publication review

Review date: 2026-07-28
Reviewer: Independent API/cloud-native publication reviewer
Reviewed base: `develop` at `63e5a15` plus the corrections recorded in the JSON report
Chapter SHA-256: `2e545273e9da151799e24031b582348eb97e6877e8268e6d3b19ea8077290ca0`

## Decision

**Approved as a chapter-level reference slice.** The subject remains
`technical-review`: the brochure supplies only a title and elective-pool
placement, and nine proposed chapters remain unauthored. This is not an
official unit list or completion of the subject book.

## Curriculum boundary

The SHA-256-verified BITS Pilani WILP brochure places **API-driven Cloud Native
Solutions** in the configurable Semester 2–3 elective pool (physical PDF page
12, printed page 10) and publishes no units for it. The chapter therefore labels
API contracts, FastAPI, containers, observability, cloud deployment, security,
and ML serving as a proposed supplementary interpretation or industry guidance.
No invented official topic is presented.

## Chapter, math, and code gates

- The repository counter reports **3,267 meaningful prose words**, above the
  3,000-word gate. Code and references are excluded by the counter.
- The chapter follows the compact companion architecture: nine reader-facing
  H2s, no authored H1, a request-to-evidence running story, formal contract,
  worked queue and score calculations, implementation, failures, study lab,
  oral questions, summary, and references.
- Independent arithmetic checks confirm the sigmoid example (`z=0.58`,
  `p≈0.641`), the M/M/1 examples (`50 ms` and `200 ms`), and the affine cost
  model. Assumptions and limits are stated instead of presenting these as
  universal capacity claims.
- The published FastAPI service and companion pytest block were extracted
  exactly into an isolated environment. Python 3.14.6 with FastAPI, Pydantic,
  and httpx produced **4 passed** tests. The generated OpenAPI document includes
  `/v1/score`, bounded schemas, and the expected health routes. One upstream
  Starlette/httpx deprecation warning was recorded; it did not affect results.

## Citation and editorial corrections

The chapter now includes executable contract tests. Undated live documentation
references in the subject bibliography use `n.d.` with an explicit access date
instead of an unverified current-year publication claim. OpenAPI, FastAPI,
HTTP, Problem Details, ACM DOI records, and NIST sources were resolver- or
official-page checked on 2026-07-28. No fabricated reference was found.

## Build and rendered checks

The production static build generated 79 routes. Foundation validation passed
45 subjects and 45 leads; link validation passed 633 internal links; lint,
TypeScript, production dependency audit, and all three rendered tests passed.
The rendered chapter has one H1, nine H2s, MathJax SVG output with accessible
expression titles, reading tools, a table of contents, and copy-code controls.
The local root-path browser snapshot loaded the complete chapter; the only
console errors observed were asset base-path misses caused by serving a Pages
export at localhost without its repository prefix, not content/runtime errors.

## Remaining work

The remaining nine proposed chapters, complete subject-level reading/paper
notes, and full project validation must still be authored and reviewed. Keep the
subject metadata at `technical-review`; only this chapter is approved.
