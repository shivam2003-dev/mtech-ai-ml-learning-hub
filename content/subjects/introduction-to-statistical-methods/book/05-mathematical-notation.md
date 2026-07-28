---
title: "Mathematical Notation"
status: "technical-review"
classification: "prerequisite"
updatedAt: "2026-07-28"
---

# Mathematical Notation

| Object | Convention | Example |
|---|---|---|
| finite population | uppercase calligraphic symbol | \(\mathcal{U}=\{1,\ldots,N\}\) |
| population size | uppercase scalar | \(N\) |
| sample | uppercase calligraphic symbol | \(\mathcal{S}\subseteq\mathcal{U}\) |
| sample size | lowercase scalar | \(n=|\mathcal{S}|\) |
| measured outcome for unit \(i\) | subscripted lowercase scalar | \(Y_i\) |
| population mean | Greek parameter | \(\mu=N^{-1}\sum_{i=1}^{N}Y_i\) |
| sample mean | parameter with a bar | \(\bar{Y}_{\mathcal{S}}=n^{-1}\sum_{i\in\mathcal{S}}Y_i\) |
| target quantity | Greek estimand | \(\theta\) |
| estimate computed from data | hatted estimand | \(\hat{\theta}\) |
| inclusion indicator | binary subscripted variable | \(I_i\in\{0,1\}\) |

Expectation notation is inherited from Mathematical Foundations for Machine
Learning. Every use states the random mechanism whose expectation is being
taken.
