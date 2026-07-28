# Mathematical notation

Scalars use italic lowercase letters, vectors bold lowercase letters, matrices
bold uppercase letters, and graphs use $G=(V,E)$. For observation vector
$\mathbf{x}\in\mathbb{R}^{d}$, model score $s=f_\theta(\mathbf{x})$, label
$y\in\{0,1\}$, threshold $\tau$, and decision $\hat y$, the simplest rule is
$\hat y=\mathbf{1}[s\ge\tau]$. Let $C_{FP}$ and $C_{FN}$ denote false-positive
and false-negative costs. They are context-dependent quantities, not universal
constants. A security metric is meaningful only with a population, time
window, prevalence, and action attached.
