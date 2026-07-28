# Statistical Methods Chapter 1 Code Validation

Status: passed for executable-code evidence; independent academic approval is
not claimed.

## Immutable source

- Chapter SHA-256: `79e0c6c8acb756203bd33661941c79f0c54587519950ad943f98e0a59c450a36`
- Python: `3.14.6`
- NumPy: `2.3.4`
- Selected published blocks: 3
- Tests: 8
- Exit code: 0

## Published-block hashes

- `mean_from_scratch`: `ec356dbc58322e98e1b63bfd06ce4da721b85d587587c4b36036ca4fd6abba4b`
- `sampling_audit`: `1b59bf39d89a06082e3ae2a1f045c1a291646097d50b31bff8fa37580cbad5e9`
- `StatisticalEvidenceTests`: `6fec315063fea300d7288e8d7e7af9144d572d3d49f7274ddb474110a439d424`

## Captured unittest output

```text
........
----------------------------------------------------------------------
Ran 8 tests in 0.025s

OK
```

The tests validate the published functions' selected software contracts. They
do not establish that an operational sample is random, measurements are valid,
units are independent, or an observed difference is causal.
