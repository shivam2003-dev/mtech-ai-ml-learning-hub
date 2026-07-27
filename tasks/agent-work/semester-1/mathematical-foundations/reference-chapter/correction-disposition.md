# Citation and Editorial Correction Disposition

Report ID: `math-foundations-ch01-correction-disposition-2026-07-28`  
Based on review: `math-foundations-ch01-citation-review-2026-07-28`  
Disposition: author corrections complete; independent recheck required

This disposition records content-side changes. It does not supersede the
independent review or approve mathematics, citations, or editorial quality.
The chapter remains `citationStatus: partial`, `mathReviewStatus: pending`, and
`editorialStatus: review`.

## Checklist disposition

| Review item | Disposition | Evidence |
|---|---|---|
| Traceable curriculum provenance | Corrected | Curriculum notice and reference 1 now give the brochure title, issuing organization, repository-record SHA-256, source-PDF SHA-256, PDF page 12, printed page 10, and verification date. |
| Pin moving NumPy documentation | Corrected | `ndarray` and broadcasting links now target NumPy 2.5 and record the verified 2026-06-28 update date. |
| Broadcasting claim links | Corrected | Claims link directly to the NumPy 2.5 broadcasting guide. |
| `b == k` behavior | Corrected | The introductory example now explains that `(b,)` and `(k,)` coincide numerically when `b == k`, although axis intent may still be wrong. |
| `ndarray` wording | Corrected | The chapter says “usually fixed-size” and links to the NumPy 2.5 reference. |
| Asymmetric approximate comparison | Corrected | The formula is identified as NumPy's asymmetric `isclose` convention with `b` as reference. |
| `matmul` and transpose behavior | Corrected | The relevant claims link to pinned NumPy 2.5 API pages. |
| Zero-length and singleton axes | Corrected | The edge cases link to `ndarray` and broadcasting documentation. |
| Non-finite and dtype-limit claims | Narrowed and sourced | The prose now describes the local `np.isfinite` contract and `float64` policy, linked to `isfinite` and `finfo`. |
| Deployment recommendations | Corrected | Request limits, timeouts, quotas, monitoring, and cancellation are explicitly local repository deployment guidance. |
| Architecture examples | Corrected | The affine-layer list is labeled as educational examples rather than an exhaustive industry claim. |
| Python-loop speed | Qualified | The text states a typical expectation, identifies relevant variables, and disclaims a universal benchmark. |
| Empty-batch mean | Added | The tested NumPy 2.3.4 example records `[nan, nan, nan]` and both observed warnings. |
| Reading time | Adjusted | Estimated reading time increased from 80 to 100 minutes. |
| Reviewer evidence | Corrected | Frontmatter names the Subject Lead and independent citation-review report IDs without claiming approval. |

## Post-correction evidence

- Meaningful prose: 4,548 words, recorded in `word-count-validation.json`.
- Published code: unchanged block hashes; 7/7 tests rerun successfully on
  Python 3.14.6 and NumPy 2.3.4.
- Chapter SHA-256:
  `18c1e969716e46f2996f84b4cf65e4b5099a109a3483f8efc338a567dac96fb6`.
- `references.md` SHA-256:
  `4fa7afe62da0f9f538cd6b4326ee569be343305b7f307899fda0a90b9c032833`.
- `references.bib` SHA-256:
  `5db20ce2d5ec2b6f5b33f5a2fb1cf5315fc823414fddc2d4cd3291650e5a35b1`.

These hashes identify the corrected snapshot submitted for independent
citation and editorial recheck.
