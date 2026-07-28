# Chapter 1 code validation

**Status: passed.**

The two Python fences in the published MDX were extracted in document order,
joined without editorial changes, and executed with `python3 -c`.

- Python: 3.14.6
- NumPy: 2.3.4
- PyTorch: 2.9.1
- Extracted-code SHA-256:
  `e7c145333d4eabdaffe89cec0838b2a742b8cbdbb767cbaa14b778c7b3c16625`
- Output:
  `9 checks passed; score=0.900; input_gradient=[0.600, 0.700]`

The checks cover the hand-derived score, NumPy/PyTorch parity, the hand-derived
input gradient, thirteen-parameter count, four invalid-input cases, and
two-record batch shape. The validation establishes the recorded environment,
not every future Python, NumPy, PyTorch, device, or dtype combination.
