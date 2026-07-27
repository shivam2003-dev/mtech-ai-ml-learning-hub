---
title: "Mathematical Notation"
status: "technical-review"
classification: "prerequisite"
updatedAt: "2026-07-28"
---

# Mathematical Notation

This book uses the following initial conventions:

| Object | Convention | Example |
|---|---|---|
| scalar | lowercase italic | \(a \in \mathbb{R}\) |
| vector | lowercase bold | \(\mathbf{x} \in \mathbb{R}^{d}\) |
| matrix | uppercase bold | \(\mathbf{W} \in \mathbb{R}^{d \times k}\) |
| tensor | uppercase calligraphic when ambiguity matters | \(\mathcal{X} \in \mathbb{R}^{b \times h \times w \times c}\) |
| set | uppercase italic or blackboard bold for standard sets | \(S\), \(\mathbb{R}\) |
| function | lowercase italic with domain and codomain | \(f : X \to Y\) |
| element | subscripted symbol | \(x_i\), \(W_{jk}\) |

Indices are one-based in mathematics unless stated otherwise. Python and NumPy use zero-based indices. A vector is treated as an abstract element of a vector space; when coordinates are needed, this book normally writes it as a column vector. Software arrays do not automatically carry row/column semantics, so shape is stated explicitly.

