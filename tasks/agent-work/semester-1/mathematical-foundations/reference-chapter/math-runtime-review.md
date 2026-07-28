# Independent Mathematics and Runtime QA Review

Review ID: `math-foundations-ch01-math-runtime-review-2026-07-28`

Role: Independent Mathematics and Runtime QA Reviewer

Status: **approved**

Approved: **true**

Reviewed: 2026-07-28

Reviewed commit: `2cf45df`

Chapter SHA-256: `dd6654b96b617a91a2aaa9e3ab29bb7bded4f0bca335ee350026a6ce42862952`

## Decision

The chapter is approved for the independent **Mathematics + Runtime QA** gate.
No unresolved blocker was found in the reviewed scope. This approval is bound
to the exact chapter hash above and does not approve or supersede the separate
citation or academic-editorial gates.

## Word-count gate

The repository counter was run against the current chapter:

```text
node scripts/calculate-word-count/chapter-word-count.mjs content/subjects/mathematical-foundations-for-machine-learning/chapters/01-mathematical-language-for-machine-learning.mdx
```

It returned **4,944 meaningful prose words**. This matches the chapter
frontmatter and exceeds the 3,000-word minimum.

## Mathematics review

The notation and derivation are coherent:

- $\mathbf{X}\in\mathbb{R}^{b\times d}$ and
  $\mathbf{W}\in\mathbb{R}^{d\times k}$ produce
  $\mathbf{X}\mathbf{W}\in\mathbb{R}^{b\times k}$.
- $\mathbf{1}_b\mathbf{c}^{\mathsf T}$ has the same $b\times k$ shape, so the
  bias addition is defined.
- In
  $Y_{i\ell}=\sum_{j=1}^{d}X_{ij}W_{j\ell}+c_\ell$, $j$ is summed out and
  $i,\ell$ remain, matching the output axes.
- The text correctly calls the transformation affine rather than linear when
  $\mathbf{c}\ne\mathbf{0}$.
- The $b=2,d=3,k=2$ numerical case independently recomputes to
  $\begin{bmatrix}-2&2\\4&-5\end{bmatrix}$.
- The matrix non-commutativity counterexample, quantifier-order examples, and
  codomain/image distinction are valid.
- The operation counts and asymptotic bounds
  $\Theta(bdk)$, $\Theta(bk)$, and $\Theta(bd+dk+k)$ are consistent with the
  stated algorithms.
- NumPy-specific behaviour is clearly separated from mathematical claims and
  appropriately qualified.

No mathematical correction is required.

## Exact published-code execution

The three published Python fences were extracted and compiled byte-for-byte as
separate units, then executed in order in one `__main__` namespace.

Environment:

- Python 3.14.6
- NumPy 2.3.4

Published block hashes:

- `affine_batch`: `a3401d0b3645ea119b4632370f843896b0afa004a551c6df79c1a1febaa92e0e`
- `affine_batch_loops`: `f739f834097024e330ca8464fbdf360e90bf04376dcb4241a360052df2b3cf61`
- `AffineBatchTests`: `1281ed64d45544d98ad2a23d53fd9123d9e4e6efd867daadf40834c6f5ee7e00`

Result:

```text
........
----------------------------------------------------------------------
Ran 8 tests in 0.055s

OK
```

The eighth regression case passed: `10**1000` reaches the `float64`
`OverflowError` conversion path and is normalized to the documented
`TypeError` containing `representable as float64`.

## Production build and rendered structure

`npm test` completed successfully:

- 70 production static pages generated;
- 3 of 3 rendered test suites passed;
- exit code 0.

The hydrated chapter renders exactly one H1, ten H2 sections, one table, eight
code-copy buttons, and 255 MathJax expressions. All 255 MathJax SVGs contain a
title and an `aria-labelledby` accessible name. Browser console errors and
warnings were both zero.

## Desktop and mobile QA

At 1440×900:

- document width: `1440/1440`;
- no page-level horizontal overflow.

At 390×844:

- document width: `390/390`;
- chapter width: 358 px;
- reading tools remain within `0..390`;
- the desktop table of contents is hidden;
- no page-level horizontal overflow.

Readability is preserved through scoped containers:

- long code remains horizontally scrollable inside 358 px `pre` containers,
  with a maximum observed scroll width of 615 px;
- the table remains horizontally scrollable at `358/481`;
- eight long display equations use scoped MathJax scrolling;
- the document itself remains `390/390`.

## Interaction and print QA

- Bookmark toggling persisted `bookmarked=true` in chapter local storage.
- Scrolling to the document end rendered and persisted `100% read`.
- Dark mode applied `learning-dark` and persisted the theme.
- Code copy changed the tested implementation button from `Copy code` to
  `Copied`.
- Citation copy updated the live status region to `Citation copied`.
- Print media hides reading tools, the table of contents, and chapter context;
  it uses a block chapter layout and a white header background.
- The mobile document remained `390/390` after the interactions.

## Final gate

**Approved: true.** No unresolved Mathematics + Runtime QA blocker remains for
the reviewed chapter SHA-256.
