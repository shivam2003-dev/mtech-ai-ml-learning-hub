# Independent citation review — Mathematical Language for Machine Learning

## Review decision

**Status: changes required; not approved.**

The five cited resources are real, authoritative, and relevant. Both DOI
identifiers resolve to records whose title, authors, year, and publication
venue/publisher match the chapter. No fabricated source or identifier was
found. Approval is withheld because the chapter still needs claim-level
citations for several externally checkable NumPy and floating-point statements,
the two moving `stable` documentation links should be pinned to the verified
NumPy version, the official curriculum notice needs a traceable source, and
writer fixes plus rendered QA have not yet been reviewed.

This review did not modify any published content.

## Reviewed snapshot

Reviewed on 2026-07-28:

- chapter SHA-256:
  `8743afe6e6f4b6025b99cf8a9101301d85eb89c1066690e7d9f5cbca8eaba857`
- `references.bib` SHA-256:
  `40fea8b5cb73cda4171728b3e71ea5c075ab8a2671a7da27265321558632e876`
- `references.md` SHA-256:
  `c212d12c7f00cdfb293d85c3f35afad7977f4b82da828a54d3f41434594119f5`

If any of these hashes changes, this verdict must be treated as stale.

## Source-by-source verification

### S1 — Mathematics for Machine Learning

- **Decision:** accepted.
- **Verified metadata:** Marc Peter Deisenroth, A. Aldo Faisal, and Cheng Soon
  Ong; *Mathematics for Machine Learning*; Cambridge University Press; 2020.
- **Accepted DOI:** `10.1017/9781108679930`.
- **Evidence:** Cambridge's official book page and Crossref both identify the
  same title, authors, publisher, DOI, and 2020 publication. Cambridge reports a
  digital publication date of 20 February 2020 and print publication date of
  23 April 2020.
- **Companion URL:** `https://mml-book.github.io/` is accepted. It identifies
  the same authors and publisher, states the book's educational purpose, and
  provides freely available PDFs.
- **Use in chapter:** appropriate for the motivation and recommended-reading
  claims at lines 96 and 969–979.

### S2 — MIT 18.06SC Linear Algebra

- **Decision:** accepted.
- **Verified metadata:** Gilbert Strang; *Linear Algebra* / course 18.06SC;
  MIT OpenCourseWare; taught Fall 2011.
- **Accepted URL:**
  `https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/`.
- **Identifier:** no DOI is asserted or required.
- **Evidence:** the official course page names Prof. Gilbert Strang, gives
  “Fall 2011,” and lists systems, vectors, transformations, subspaces, and
  related linear-algebra units.
- **Use in chapter:** appropriate for the transition-to-linear-algebra claim at
  line 96 and the recommendation at line 963.

### S3 — Array programming with NumPy

- **Decision:** accepted.
- **Verified metadata:** Charles R. Harris, K. Jarrod Millman, Stéfan J. van der
  Walt, et al.; “Array programming with NumPy”; *Nature* 585, 357–362; 2020.
- **Accepted DOI:** `10.1038/s41586-020-2649-2`.
- **Venue and date:** *Nature*; published/version of record 16 September 2020.
- **Evidence:** Nature's version-of-record page and Crossref agree on DOI,
  title, author sequence, volume, pages, year, and venue.
- **Use in chapter:** appropriate for the array-programming and scientific
  computation claims at lines 923–944.

### S4 — The N-dimensional array (`ndarray`)

- **Decision:** accepted with metadata correction.
- **Verified authority:** official NumPy reference.
- **Verified title:** “The N-dimensional array (`ndarray`).”
- **Verified content:** an `ndarray` is a usually fixed-size multidimensional
  container; `shape` is a tuple of non-negative dimension sizes; `dtype`
  describes the item type.
- **Verified documentation version/date:** NumPy 2.5; HTML metadata reports
  `docbuild:last-update` as 28 June 2026.
- **Required reproducibility correction:** replace the moving `stable` URL with
  `https://numpy.org/doc/2.5/reference/arrays.ndarray.html` and cite it as
  “NumPy Developers. (2026). … NumPy 2.5 Reference. Last updated 28 June 2026;
  accessed 28 July 2026.” Apply the same metadata in the chapter,
  `references.md`, and `references.bib`.
- **Use in chapter:** directly supports lines 62, 289, and the shape/dtype parts
  of line 674.

### S5 — Broadcasting

- **Decision:** accepted with metadata correction.
- **Verified authority:** official NumPy user guide.
- **Verified title:** “Broadcasting.”
- **Verified content:** comparison begins at trailing dimensions; dimensions
  are compatible when equal or one is 1; broadcasting normally avoids needless
  copies; some cases use memory inefficiently and slow computation.
- **Verified documentation version/date:** NumPy 2.5; HTML metadata reports
  `docbuild:last-update` as 28 June 2026.
- **Required reproducibility correction:** replace the moving `stable` URL with
  `https://numpy.org/doc/2.5/user/basics.broadcasting.html` and cite it as
  “NumPy Developers. (2026). … NumPy 2.5 User Guide. Last updated 28 June
  2026; accessed 28 July 2026.” Apply the same metadata in the chapter,
  `references.md`, and `references.bib`.
- **Use in chapter:** directly supports lines 82, 674, 826, 868, and 873.

## Identifier register

### Accepted

- DOI `10.1017/9781108679930`
- DOI `10.1038/s41586-020-2649-2`
- ISBNs observed in the publisher/Crossref records:
  `9781108679930`, `9781108470049`, and `9781108455145`
- MIT OCW canonical course URL
- Mathematics for Machine Learning companion URL
- NumPy 2.5 `ndarray` documentation URL
- NumPy 2.5 broadcasting documentation URL

### Rejected

None. No false DOI, title, author, year, venue, or URL was found among the five
cited resources.

## Claim-to-source map

| Claim ID | Chapter location | Claim | Classification | Evidence/result |
|---|---:|---|---|---|
| C01 | 49 | Official brochure verifies the subject title and Semester 1 placement but not topic-level units. | Historical/curriculum | **Unresolved traceability.** The chapter names no brochure, URL, file, version, or access date. Add the exact official brochure citation or a link to the verified local curriculum record that preserves that provenance. |
| C02 | 62 | A one-dimensional NumPy array is not explicitly a row or column matrix. | Technical definition | **Verified.** S4 establishes one-axis shape semantics; add a claim-level link to NumPy 2.5 `transpose`, which explicitly says a 1-D transpose remains unchanged. |
| C03 | 82 | `(k,)` broadcasts over `(b,k)`, while `(b,)` generally does not. | Technical behavior | **Verified by S5.** Add the S5 citation immediately after the example. Qualify the exceptional case `b == k`, where `(b,)` and `(k,)` are numerically the same shape even if the intended axis meaning differs. |
| C04 | 96 | The MML book supplies mathematical preparation for advanced ML reading. | Source-characterization claim | **Verified by S1 companion site.** |
| C05 | 96 | MIT's course emphasizes systems, vectors, and transformations. | Source-characterization claim | **Verified by S2.** |
| C06 | 289 | `ndarray` container, shape, and dtype definition. | Technical definition | **Verified by S4.** Add an inline citation. “Usually fixed-size” is closer to NumPy's wording than the unconditional “fixed-size.” |
| C07 | 293–299 | Approximate comparison uses `abs(a-b) <= atol + rtol*abs(b)`. | Technical definition | **Verified by official NumPy `isclose` documentation, but not by any of S1–S5.** Add `https://numpy.org/doc/2.5/reference/generated/numpy.isclose.html` and state that this is NumPy's asymmetric `isclose` convention with `b` as the reference value, not a universal tolerance definition. |
| C08 | 521 | Code targets Python 3.12 and NumPy 2.x and is tested. | Implementation claim | **Accepted with recorded execution evidence.** `code-validation.md/json` records byte-for-byte execution of the published blocks on Python 3.14.6 with NumPy 2.3.4; all seven tests passed. This verifies a later Python 3 release and one NumPy 2.x release, not every Python 3.12/NumPy 2.x combination. |
| C09 | 674 | Trailing-axis broadcasting rule and `(k,)` bias behavior. | Technical behavior | **Verified by S5.** Add inline S5 citation. |
| C10 | 752 | Seeded result is deterministic for a fixed generator implementation. | Technical behavior | **Acceptable as narrowly qualified.** This is not a cross-version reproducibility promise. Keep the qualifier. |
| C11 | 756–762 | Affine transformations appear in dense layers, linear models, projections, attention Q/K/V, and classifier logits. | Industry/technical claim | **Plausible but uncited.** Either label this as a set of educational examples or cite authoritative implementation/paper sources; for Q/K/V, cite the original Transformer paper or equivalent primary source. |
| C12 | 792 | For `ndarray`, `*` is elementwise and `@` is matrix multiplication. | Technical behavior | **Verified by official NumPy documentation, but not directly by S1–S5.** Add the NumPy 2.5 `matmul` or “NumPy for MATLAB users” page. |
| C13 | 808 | Transposing a shape `(d,)` NumPy array preserves its shape. | Technical behavior | **Verified by official NumPy `transpose` documentation, but not directly cited.** Add `https://numpy.org/doc/2.5/reference/generated/numpy.transpose.html`. |
| C14 | 822–826 | NumPy supports zero-length axes and singleton axes affect broadcasting. | Technical behavior | **Verified in NumPy behavior and S5 in part.** Add a NumPy creation/shape citation for zero-length axes and S5 for singleton-axis broadcasting. |
| C15 | 830 | NaN and infinities are IEEE floating-point values and may propagate. | Standards/technical claim | **Citation required.** Add IEEE 754-2019, DOI `10.1109/IEEESTD.2019.8766229`, or rephrase to a NumPy-local statement and cite official NumPy floating-point documentation. |
| C16 | 834 | Large integers converted to `float64` can lose exactness. | Technical claim | **Correct but uncited.** Add authoritative Python/NumPy floating-point documentation or present a concrete numerical example and cite the dtype limits documentation. |
| C17 | 850–860 | Dense affine computation and validation complexity are `Theta(bdk)`, `Theta(bk)`, and `Theta(bd+dk+k)`. | Mathematical derivation | **Accepted by direct derivation.** No external citation is necessary if retained as the author's analysis. |
| C18 | 868–873 | Broadcasting avoids repeated bias materialization in normal cases but can produce memory-inefficient results. | Technical behavior | **Verified by S5.** Add an inline S5 citation. The 80 GB example is correct arithmetic. |
| C19 | 875 | Real services need request limits, timeouts, quotas, monitoring, and cancellation. | Industry recommendation | **Not supported by S1–S5.** Mark explicitly as repository/local defensive guidance, as lines 883–891 already do, or cite an authoritative service-security source. |
| C20 | 883–891 | Narrow input formats, size validation, finite-value policy, safe errors, quotas, and monitoring. | Local educational guidance | **Acceptable as written.** It is explicitly identified as repository engineering guidance and is not falsely attributed to the five academic sources. A future engineering chapter may add NumPy security and `numpy.load` citations. |
| C21 | 895–903 | Privacy, fairness, and responsible analogy guidance. | Original educational explanation | **Acceptable as interpretation/guidance.** It is not presented as an empirical result. |
| C22 | 907–919 | Shape/interface engineering practices and model-documentation recommendations. | Local educational guidance | **Acceptable only because the section explicitly says “repository engineering guidance.”** Do not recast these as universal industry consensus without sources. |
| C23 | 923–944 | NumPy array programming is central scientific-computing infrastructure. | Research/source characterization | **Verified by S3.** |
| C24 | 979 | Companion site provides a free version and frames the book as preparation. | Source-characterization claim | **Verified by S1 companion site.** |

## Exact required content corrections

1. Add the official programme brochure's exact title, issuing organization,
   version/date, URL or repository provenance, and access date to the references;
   attach that citation to the curriculum notice at line 49.
2. Pin both NumPy citations to version 2.5 URLs and record their supported
   last-update date, 28 June 2026, consistently in the chapter,
   `references.md`, and `references.bib`.
3. Add claim-level citations rather than relying on the terminal bibliography:
   at minimum after the claims at lines 82, 96, 289, 674, 808, 830, 868–873,
   and 923.
4. Add the official NumPy 2.5 `isclose` source at lines 293–299 and explicitly
   say that the displayed formula is NumPy's asymmetric convention with `b` as
   the reference.
5. Add official NumPy 2.5 `matmul` and `transpose` sources for lines 792 and
   808.
6. Support the IEEE claim at line 830 with IEEE 754-2019 or replace it with a
   narrower, sourced NumPy statement.
7. Qualify line 82 for `b == k`; execution can succeed even when axis semantics
   are wrong.
8. Label line 875 as local defensive deployment guidance or support it with an
   authoritative service-security reference.
9. Keep frontmatter `citationStatus: partial` until all corrections above are
   integrated and independently rechecked. Do not set `citationStatus:
   verified` based only on the authenticity of the five bibliography entries.

## Primary verification endpoints

- Cambridge University Press:
  `https://www.cambridge.org/highereducation/books/mathematics-for-machinelearning/5EE57FD1CFB23E6EB11E130309C7EF98`
- Crossref book record:
  `https://api.crossref.org/works/10.1017%2F9781108679930`
- MML companion:
  `https://mml-book.github.io/`
- MIT OpenCourseWare:
  `https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/`
- Nature version of record:
  `https://www.nature.com/articles/s41586-020-2649-2`
- Crossref article record:
  `https://api.crossref.org/works/10.1038%2Fs41586-020-2649-2`
- NumPy 2.5 ndarray:
  `https://numpy.org/doc/2.5/reference/arrays.ndarray.html`
- NumPy 2.5 broadcasting:
  `https://numpy.org/doc/2.5/user/basics.broadcasting.html`
- NumPy 2.5 isclose:
  `https://numpy.org/doc/2.5/reference/generated/numpy.isclose.html`
- NumPy 2.5 matmul:
  `https://numpy.org/doc/2.5/reference/generated/numpy.matmul.html`
- NumPy 2.5 transpose:
  `https://numpy.org/doc/2.5/reference/generated/numpy.transpose.html`
- NumPy 2.5 security:
  `https://numpy.org/doc/2.5/reference/security.html`
- NumPy 2.5 load/pickle warning:
  `https://numpy.org/doc/2.5/reference/generated/numpy.load.html`
- IEEE 754-2019 DOI:
  `https://doi.org/10.1109/IEEESTD.2019.8766229`
