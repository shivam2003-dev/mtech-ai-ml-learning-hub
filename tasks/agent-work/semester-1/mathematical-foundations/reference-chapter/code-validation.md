# Code Validation: Mathematical Language for Machine Learning

Report ID: `math-foundations-ch01-code-validation-2026-07-28`  
Status: passed  
Source: `content/subjects/mathematical-foundations-for-machine-learning/chapters/01-mathematical-language-for-machine-learning.mdx`  
Validated: 2026-07-28

## Method

The validator read the MDX source, selected the three fenced Python blocks
containing `affine_batch`, `affine_batch_loops`, and
`AffineBatchTests`, and compiled each selected block byte-for-byte as its own
Python compilation unit. It then executed the units in order in the same
process `__main__` namespace. Compiling the units separately preserves the
published `from __future__ import annotations` statements without editing the
published code.

This report is execution evidence. It is not an independent editorial,
mathematics, or citation approval.

## Environment

- Python: `3.14.6`
- NumPy: `2.3.4`
- Chapter SHA-256: `dd6654b96b617a91a2aaa9e3ab29bb7bded4f0bca335ee350026a6ce42862952`
- Test count: 8
- Exit code: 0

## Published-block hashes

- `affine_batch`: `a3401d0b3645ea119b4632370f843896b0afa004a551c6df79c1a1febaa92e0e`
- `affine_batch_loops`: `f739f834097024e330ca8464fbdf360e90bf04376dcb4241a360052df2b3cf61`
- `AffineBatchTests`: `1281ed64d45544d98ad2a23d53fd9123d9e4e6efd867daadf40834c6f5ee7e00`

## Full captured output

Standard output was empty. The standard `unittest` runner wrote this complete
result to standard error:

```text
........
----------------------------------------------------------------------
Ran 8 tests in 0.095s

OK
```

The published tests were rerun byte-for-byte after the narrative rewrite. The
main implementation and test hashes changed because the conversion boundary
now catches `OverflowError` and the suite includes the reported huge-integer
regression.

The passing cases cover:

1. the known numerical example;
2. deterministic agreement between the loop and NumPy implementations;
3. incompatible feature dimensions;
4. non-finite input;
5. excessive output size;
6. nonnumeric conversion;
7. a Python integer too large for `float64`, normalized to the documented
   `TypeError`;
8. malformed/ragged loop input.
