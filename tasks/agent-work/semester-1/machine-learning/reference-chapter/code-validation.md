# Machine Learning Chapter 1 Code Validation

Status: passed for executable-code evidence; independent academic approval is
not claimed.

- Chapter SHA-256: `e744b5ef8db666a9f5d69d83f1b7152ff0afb43c4bf8cffd4084ad4d208bfea3`
- Test mirror SHA-256: `c2b8175c7dd717b8b058949cbe9887c417975bc4323489645e74d9c608a340ba`
- Python: `3.14.6`
- NumPy: `2.3.4`
- scikit-learn: `1.7.2`
- Assertions: 8 selected contracts
- Exit code: 0

```text
train rows=12, test rows=4
majority class=0
scratch accuracy=0.500
library accuracy=0.500
tests=passed
```

These tests establish deterministic software behaviour on synthetic teaching
data. They do not establish operational usefulness, absence of real-data
leakage, fairness, causal impact, or future generalisation.
