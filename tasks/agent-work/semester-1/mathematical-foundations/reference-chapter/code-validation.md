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
- Test count: 7
- Exit code: 0

## Published-block hashes

- `affine_batch`: `b13e137ef16dd57a4196c94b4d38c195b99a6bebc8ac959294e931dc7ee0bc21`
- `affine_batch_loops`: `f739f834097024e330ca8464fbdf360e90bf04376dcb4241a360052df2b3cf61`
- `AffineBatchTests`: `6634876ad548d5f15fea8eecb9d0ec0ad96c0668babf38cf619a142485e9ce37`

## Full captured output

Standard output was empty. The standard `unittest` runner wrote this complete
result to standard error:

```text
.......
----------------------------------------------------------------------
Ran 7 tests in 0.071s

OK
```

The same seven published tests were rerun after the citation/editorial
corrections. The three code-block hashes were unchanged.

The passing cases cover:

1. the known numerical example;
2. deterministic agreement between the loop and NumPy implementations;
3. incompatible feature dimensions;
4. non-finite input;
5. excessive output size;
6. nonnumeric conversion;
7. malformed/ragged loop input.
