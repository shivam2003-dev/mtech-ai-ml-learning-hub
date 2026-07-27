# Subject Planning Bundle: Mathematical Foundations for Machine Learning

Status: proposed, awaiting subject-level validation  
Subject Lead: `subject-lead:mathematical-foundations-for-machine-learning`  
Access date for web resources: 2026-07-28  
Scope: planning only; no 3,000-word chapter has been drafted

## 1. Curriculum evidence and interpretation

### Verified official facts

- **Official course title:** Mathematical Foundations for Machine Learning.
- **Official placement:** Semester 1 compulsory course.
- **Primary evidence:** BITS Pilani Work Integrated Learning Programmes, *M.Tech. Artificial Intelligence and Machine Learning for working professionals* brochure, physical PDF page 12 (printed page 10).
- **Evidence identity:** local file `/Users/shivamkumar/Downloads/mtech-ai-ml.pdf`; SHA-256 `fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b`.
- **Programme-level entry expectation:** working knowledge of computing and programming. This is not a subject-specific prerequisite.

### Material uncertainty

The verified brochure does **not** provide a topic list, numbered units, subject-specific prerequisites, learning outcomes, assessment weights, study hours, or tools for this course. It lists only the course title and Semester 1 placement. Therefore:

1. none of the proposed chapters below is an official syllabus unit;
2. every topic is explicitly classified as **Prerequisite**, **Supplementary**, **Advanced extension**, or **Industry application**;
3. chapter order, outcomes, projects, hours, and knowledge-graph edges are educational planning judgments;
4. the plan must be reconciled against an official course handout if one becomes available;
5. the site must display `officialSyllabusStatus: official-title-only` and a visible “provisional educational outline” notice.

### Proposed educational interpretation

The course is interpreted as the mathematical bridge from undergraduate programming to later work in statistical methods, machine learning, deep neural networks, reinforcement learning, probabilistic models, computer vision, NLP, and optimization. The book should teach mathematical objects three ways at once:

- as formal definitions and derivations;
- as geometry and probabilistic intuition;
- as numerical computations whose finite-precision behavior matters.

The plan emphasizes vectors, matrices, multivariable calculus, optimization, probability, information, and numerical reasoning because these are the recurring mathematical languages of machine learning. This is a **Supplementary educational interpretation**, not a claim about the official topic list.

## 2. Proposed learning outcomes

All outcomes in this section are **Supplementary** and non-official. After completing the proposed book, a learner should be able to:

1. distinguish scalars, vectors, matrices, tensors, sets, functions, and random variables, and check dimensions before manipulating them;
2. solve and geometrically interpret linear systems, subspaces, rank, bases, projections, and least-squares problems;
3. use eigenvalue and singular-value decompositions and explain when numerical algorithms prefer one factorization over another;
4. derive gradients, Jacobians, Hessians, and vector-Jacobian/Jacobian-vector products with all shape conventions stated;
5. connect computational graphs and automatic differentiation to the chain rule without conflating autodiff with symbolic or numerical differentiation;
6. formulate unconstrained and constrained optimization problems and assess convexity, stationarity, conditioning, and convergence assumptions;
7. reason about floating-point error, stability, conditioning, reproducibility, and the computational cost of core linear-algebra operations;
8. read probability notation used by later ML material, identify random variables and expectation operators, and follow the cross-link to Introduction to Statistical Methods for definitions, distributions, laws of large numbers, and central-limit results;
9. use entropy, cross-entropy, KL divergence, and mutual information while stating their probability prerequisites, domains, and asymmetry properties;
10. connect kernels, feature maps, norms, distances, and similarity measures to later machine-learning methods;
11. implement representative algorithms from first principles in NumPy and compare them with established scientific-Python implementations;
12. read mathematical ML papers critically by identifying assumptions, notation, proof goals, experimental approximations, and failure conditions.

## 3. Prerequisite and readiness map

This map is **Prerequisite planning guidance**, not an official prerequisite list.

| Level | Proposed prerequisite | Minimum readiness check | Remediation |
| --- | --- | --- | --- |
| P0 | **Prerequisite: arithmetic and algebra** | Rearrange equations; work with exponents, logarithms, summations, and inequalities. | Short algebra diagnostic and worked refresher. |
| P0 | **Prerequisite: functions and graphs** | Explain domain/range; compose functions; interpret slope and level sets. | Function-notation primer with plotting exercises. |
| P0 | **Prerequisite: basic programming** | Write Python functions, loops, comprehensions, and simple tests. | Python/NumPy setup lab; the brochure supports only programme-level computing/programming knowledge. |
| P1 | **Prerequisite: single-variable calculus** | Differentiate common functions; use product and chain rules; interpret an integral. | Calculus bridge before Chapters 5-6. |
| P1 | **Prerequisite: set notation and logic** | Read membership, subset, union, intersection, implication, and quantifiers. | Chapter 1 proof-and-notation clinic. |
| P1 | **Prerequisite: probability and descriptive statistics** | Recognize event, random-variable, distribution, expectation, variance, covariance, LLN, and CLT notation without needing to re-derive the theory here. | Complete the concise probability-notation bridge, then follow the explicit cross-link to Introduction to Statistical Methods for principal coverage. |
| P2 | **Supplementary: NumPy arrays and plotting** | Explain shape, broadcasting, axis reduction, dtype, and seed control. | Array-shape lab and debugging checklist. |
| P2 | **Supplementary: mathematical communication** | State assumptions, define symbols, and separate a claim from an example. | Structured derivation template used in every assignment. |

Gate sequence:

```text
P0 algebra + functions + programming
  -> P1 notation/logic
  -> Chapters 2-4 linear algebra
  -> Chapter 5 vector calculus
  -> Chapter 6 optimization

P0 algebra + P1 calculus
  -> concise probability-notation bridge
  -> Introduction to Statistical Methods for distributions, expectation,
     variance/covariance, LLN, CLT, and inferential use
  -> Chapter 8 information theory

Chapters 2-8
  -> Chapters 9-10 advanced/scalable extensions
```

## 4. Proposed chapter outline

There are 10 proposed principal chapters. Every row is non-official. Probability material is a concise prerequisite bridge outside the principal chapter count so the book does not duplicate Introduction to Statistical Methods.

| Ch. | Proposed title | Classified topic coverage | Planned hours | Principal outputs |
| --- | --- | --- | ---: | --- |
| 1 | Mathematical Language for Machine Learning | **Prerequisite:** sets, relations, functions, logic, quantifiers, proof patterns, notation, dimensions. **Supplementary:** counterexamples and assumption tracking in ML claims. | 6 | notation guide, proof clinic, dimension-checking quiz |
| 2 | Vectors, Matrices, Linear Systems, and Subspaces | **Prerequisite:** vector operations, matrix multiplication, systems of equations, span, independence, basis, dimension, rank, null/column spaces. **Industry application:** array shapes and batch dimensions. | 10 | Gaussian-elimination notebook, shape tests |
| 3 | Geometry, Orthogonality, Projections, and Least Squares | **Supplementary:** inner products, norms, distances, angles, orthogonality, Gram-Schmidt, projections, least squares, pseudoinverse. **Industry application:** regression residual diagnostics and conditioning. | 10 | projection visualizer, least-squares solver |
| 4 | Spectral Thinking and Matrix Factorizations | **Supplementary:** determinants as scaling, eigenvalues/eigenvectors, symmetric positive-definite matrices, eigendecomposition, SVD, LU, QR, low-rank approximation. **Advanced extension:** randomized decompositions. | 12 | PCA geometry lab, SVD compression study |
| 5 | Multivariable and Matrix Calculus | **Prerequisite:** partial and directional derivatives, gradients, Jacobians, Hessians, multivariable chain rule. **Supplementary:** matrix derivatives and differential notation. **Industry application:** computational graphs and automatic differentiation. | 12 | finite-difference checks, autodiff comparison |
| 6 | Optimization Foundations for Learning | **Supplementary:** objectives, constraints, convex sets/functions, first/second-order optimality, gradient descent, stochastic gradients, momentum, Newton/quasi-Newton methods, Lagrange multipliers, duality intuition. **Advanced extension:** natural gradient and structured preconditioning. | 12 | optimizer-from-scratch suite, convergence study |
| 7 | Numerical Computation, Conditioning, and Stability | **Industry application:** floating-point arithmetic, rounding, overflow/underflow, cancellation, stable log-sum-exp, condition numbers, reproducibility, vectorization, time/space complexity. **Supplementary:** backward error and iterative solvers. | 10 | numerical-failure casebook, precision benchmark |
| 8 | Information, Divergence, and Learning Objectives | **Supplementary:** entropy, cross-entropy, KL divergence, and mutual information, limited to their mathematical form and ML use. **Prerequisite bridge:** random-variable, distribution, and expectation notation is linked to Introduction to Statistical Methods rather than redeveloped. **Industry application:** stable cross-entropy computation and calibration cautions. | 8 | coding/entropy lab, divergence counterexamples |
| 9 | Similarity, Kernels, and High-Dimensional Geometry | **Advanced extension:** metric properties, Mahalanobis geometry, positive-semidefinite kernels, feature maps, reproducing-kernel intuition, concentration, random projections. **Supplementary:** kernel matrices and regularization. | 8 | kernel-validity tests, random-projection experiment |
| 10 | Scalable Mathematical Methods for Modern ML | **Advanced extension:** randomized numerical linear algebra, stochastic trace estimation, curvature approximations, second-order autodiff. **Industry application:** memory/compute trade-offs, sparse/batched operations, mixed precision, reproducible benchmarking. | 8 | paper-reproduction mini-study, scalability report |

### Probability notation bridge and ownership boundary

The bridge is **Prerequisite** material, estimated at two hours, and is not a principal chapter. It may define only the notation needed to read Chapters 6, 8, and 10:

- an event symbol and probability expression;
- a random variable as a mapping, without a catalogue of distributions;
- expectation and variance notation as operators, with one small discrete example;
- the names LLN and CLT solely to explain why later ML texts invoke them.

Introduction to Statistical Methods owns principal explanations, derivations, distribution families, joint/conditional models, expectation and covariance properties, LLN/CLT conditions, simulation studies, and inferential applications. This book cross-links to that material and does not publish a competing probability chapter, distribution explorer, calibration workbook, or LLN/CLT derivation.

### Chapter-level planning rules

- Chapters 1-8 are principal core chapters and target 4,000-7,000 meaningful prose words after approval.
- Chapters 9-10 are principal advanced chapters only if the Subject Lead and Mathematics Reviewer confirm they fit the available semester load; otherwise they become optional appendices.
- Chapter 1 remains unchanged by the probability ownership decision; it continues to cover mathematical language, logic, functions, notation, and dimensions only.
- Formal prerequisites appear before each derivation.
- Every major equation receives a scalar or low-dimensional numerical example.
- Code examples state Python/library versions, use deterministic seeds where practical, validate shapes, and include expected output and tests.
- No full chapter generation begins until this outline is reviewed against any newly supplied official handout.

## 5. Estimated study time

All hours are **Supplementary planning estimates**.

| Activity | Hours |
| --- | ---: |
| Readiness diagnostic and front matter | 4 |
| Chapters 1-10: reading, derivations, notebooks, quizzes | 96 |
| Concise probability-notation bridge and Statistical Methods cross-link | 2 |
| Six assessed project/lab selections | 24 |
| Assignments, cumulative review, and examination practice | 16 |
| **Estimated total** | **142** |

Recommended pacing is about 9 hours per week for 16 weeks. A reduced route uses Chapters 1-8 as the core and treats Chapters 9-10 as advanced extensions. This estimate is not an official credit-hour or university workload statement.

## 6. Proposed cross-subject knowledge graph

All nodes and edges below are **Supplementary** educational relationships. They do not represent brochure-specified prerequisites.

### Nodes

| Node ID | Type | Classification |
| --- | --- | --- |
| `concept:mathematical-notation` | concept | Prerequisite |
| `concept:linear-algebra` | concept | Prerequisite |
| `concept:vector-calculus` | concept | Prerequisite |
| `concept:probability` | concept | Prerequisite |
| `concept:optimization` | concept | Supplementary |
| `concept:numerical-stability` | concept | Industry application |
| `concept:information-theory` | concept | Supplementary |
| `concept:kernels` | concept | Advanced extension |
| `concept:randomized-linear-algebra` | concept | Advanced extension |
| `subject:mathematical-foundations-for-machine-learning` | subject | Official title only |
| `subject:introduction-to-statistical-methods` | subject | Official Semester 1 subject |
| `subject:machine-learning` | subject | Official Semester 1 subject |
| `subject:deep-neural-networks` | subject | Official Semester 2 subject |
| `subject:deep-reinforcement-learning` | subject | Official Semester 2 subject |
| `subject:probabilistic-graphical-models` | subject | Official elective title |
| `subject:quantum-machine-learning` | subject | Official elective title |

### Edges

| From | Relationship | To | Planning reason |
| --- | --- | --- | --- |
| `concept:mathematical-notation` | `prerequisite_of` | `subject:mathematical-foundations-for-machine-learning` | Formal reading and derivations require consistent notation. |
| `concept:linear-algebra` | `prerequisite_of` | `subject:machine-learning` | Feature vectors, linear models, kernels, PCA, and optimization use vector spaces and matrices. |
| `concept:probability` | `prerequisite_of` | `subject:introduction-to-statistical-methods` | Probability models uncertainty underlying inference. |
| `concept:probability` | `used_by` | `subject:machine-learning` | Probabilistic learning and evaluation use distributions and expectations. |
| `concept:vector-calculus` | `used_by` | `concept:optimization` | Gradients and Hessians define local optimization information. |
| `concept:optimization` | `used_by` | `subject:machine-learning` | Training commonly minimizes an objective. |
| `concept:optimization` | `used_by` | `subject:deep-neural-networks` | Gradient-based optimization trains deep networks. |
| `concept:numerical-stability` | `applied_in` | `subject:machine-learning` | Stable implementation is required for trustworthy computation. |
| `concept:information-theory` | `used_by` | `subject:deep-neural-networks` | Cross-entropy and divergence-based objectives recur in deep learning. |
| `concept:kernels` | `extension_of` | `concept:linear-algebra` | Kernel matrices extend inner-product reasoning. |
| `concept:kernels` | `used_by` | `subject:machine-learning` | Kernel methods appear in nonlinear learning. |
| `concept:probability` | `prerequisite_of` | `subject:probabilistic-graphical-models` | Graphical models combine probability and graph structure. |
| `concept:linear-algebra` | `used_by` | `subject:quantum-machine-learning` | Quantum state/operator notation relies on complex vector spaces. |
| `concept:randomized-linear-algebra` | `extension_of` | `concept:linear-algebra` | Randomization provides scalable approximate decompositions. |
| `concept:randomized-linear-algebra` | `applied_in` | `subject:machine-learning` | Low-rank approximation and trace estimation support scalable algorithms. |
| `subject:mathematical-foundations-for-machine-learning` | `related_to` | `subject:deep-reinforcement-learning` | Reinforcement learning uses probability, optimization, and linear algebra, but a formal course prerequisite is not claimed. |
| `subject:mathematical-foundations-for-machine-learning` | `related_to` | `subject:introduction-to-statistical-methods` | The former provides notation and mathematical interfaces; the latter owns principal probability, distribution, expectation, LLN, CLT, and inference coverage. |

Validation requirements: node endpoints must exist, edge types must be allowlisted, strict prerequisite cycles are forbidden, and every displayed recommendation must say that it is educational guidance. The `concept:probability` node signals a prerequisite dependency; it does not assign probability-content ownership to this subject.

## 7. Research query plan

Queries are provider-specific and intended for reproducible refreshes:

| ID | Provider/domain | Query |
| --- | --- | --- |
| Q1 | Crossref | `"mathematics for machine learning" AND (linear algebra OR calculus OR probability OR optimization)` |
| Q2 | OpenAlex | concepts: machine learning + linear algebra; sort by relevance; inspect primary-source works and surveys separately |
| Q3 | Semantic Scholar | `"numerical linear algebra" machine learning survey reproducibility` |
| Q4 | arXiv | `cat:cs.LG AND (all:"stochastic optimization" OR all:"automatic differentiation")` |
| Q5 | SIAM | `randomized numerical linear algebra machine learning foundations algorithms` |
| Q6 | JMLR | `optimization OR automatic differentiation OR scientific Python` |
| Q7 | PMLR | `curvature preconditioning stochastic tensor optimization` |
| Q8 | Royal Society/Crossref | exact-title verification for Bayes' 1763 essay |
| Q9 | Bell Labs/Wiley/Crossref | exact-title verification for Shannon's 1948 communication paper |
| Q10 | MIT OpenCourseWare | linear algebra, probability, multivariable-calculus prerequisite and exercise material |
| Q11 | Stanford | EE364a convex optimization lecture notes, examples, prerequisites, and assignments |
| Q12 | Cambridge/Springer/SIAM | publisher records for core books and verified edition/DOI metadata |
| Q13 | OpenReview | ICLR mathematical tooling, autodiff, curvature, and reproducibility papers |
| Q14 | NumPy/scikit-learn/JMLR | authoritative implementation resources tied to mathematical operations |

Refresh policy: cache provider responses; deduplicate by DOI, arXiv ID, provider ID, then normalized title plus first author; never rank solely by citation count; record rejected candidates and reasons; recheck current/state-of-the-art claims at publication time.

## 8. Verified preliminary academic resources

Verification means that title/authors/year/venue or publisher were checked against a primary publisher, proceedings, journal, institutional course page, or structured scholarly record on 2026-07-28. It does not mean every paywalled work was read in full. Confidence is metadata confidence, not an endorsement score.

### A. Books and university courses (6)

#### R01 — *Mathematics for Machine Learning*

- Authors/organisation: Marc Peter Deisenroth; A. Aldo Faisal; Cheng Soon Ong; Cambridge University Press.
- Year/type/venue: 2020; book; Cambridge University Press.
- DOI/arXiv: `10.1017/9781108679930`; no arXiv ID.
- URL: https://mml-book.github.io/ (publisher metadata: https://doi.org/10.1017/9781108679930).
- Difficulty/relevance: beginner-to-intermediate; direct bridge across linear algebra, geometry, decompositions, vector calculus, probability, optimization, and ML examples.
- Prerequisites/access: algebra and basic calculus; free author-hosted PDF, paid print/digital editions.
- Verification: verified, 2026-07-28; confidence `0.99`.

#### R02 — *Convex Optimization*

- Authors/organisation: Stephen Boyd; Lieven Vandenberghe; Cambridge University Press.
- Year/type/venue: 2004; graduate textbook; Cambridge University Press.
- DOI/arXiv: `10.1017/CBO9780511804441`; no arXiv ID.
- URL: https://web.stanford.edu/~boyd/cvxbook/ (publisher metadata: https://doi.org/10.1017/CBO9780511804441).
- Difficulty/relevance: intermediate-to-advanced; convex sets/functions, optimality, duality, and numerical methods.
- Prerequisites/access: linear algebra and multivariable calculus; free author-hosted book PDF, paid print/digital editions.
- Verification: verified, 2026-07-28; confidence `0.99`.

#### R03 — *Numerical Optimization*, second edition

- Authors/organisation: Jorge Nocedal; Stephen J. Wright; Springer.
- Year/type/venue: 2006; graduate textbook; Springer Series in Operations Research and Financial Engineering.
- DOI/arXiv: `10.1007/978-0-387-40065-5`; no arXiv ID.
- URL: https://link.springer.com/book/10.1007/978-0-387-40065-5.
- Difficulty/relevance: advanced; line search, trust regions, quasi-Newton methods, least squares, constrained optimization.
- Prerequisites/access: linear algebra, calculus, mathematical maturity; paid/subscription, abstract and bibliographic page free.
- Verification: verified, 2026-07-28; confidence `0.99`.

#### R04 — MIT 18.06SC *Linear Algebra*

- Author/organisation: Gilbert Strang; Massachusetts Institute of Technology OpenCourseWare.
- Year/type/venue: Fall 2011; open university course; MIT OpenCourseWare.
- DOI/arXiv: none.
- URL: https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/.
- Difficulty/relevance: beginner-to-intermediate; complete independent-study path with videos, notes, problems, solutions, and exams.
- Prerequisites/access: comfort with vectors/matrices; free under MIT OCW terms.
- Verification: verified, 2026-07-28; confidence `0.99`.

#### R05 — Harvard Stat 110 *Probability*

- Author/organisation: Joe Blitzstein; Harvard University Department of Statistics.
- Year/type/venue: continuously maintained, taught since 2006; open university course.
- DOI/arXiv: none.
- URL: https://stat110.hsites.harvard.edu/.
- Difficulty/relevance: intermediate; conditional probability, random variables, distributions, expectation, limit theorems, and problem-solving.
- Prerequisites/access: single-variable calculus and familiarity with matrices; free course materials/videos, optional paid certificate/book.
- Verification: verified, 2026-07-28; confidence `0.98`.

#### R06 — Stanford EE364a *Convex Optimization I*

- Author/organisation: Stephen Boyd and current course staff; Stanford University.
- Year/type/venue: maintained for academic year 2025-2026; university course and lecture resources.
- DOI/arXiv: none.
- URL: https://web.stanford.edu/class/ee364a/.
- Difficulty/relevance: graduate; convex analysis, least squares, linear/quadratic/semidefinite programs, optimality, duality, and applications.
- Prerequisites/access: strong linear algebra and probability, basic Python; public course page/slides free, enrollment-only material restricted.
- Verification: verified, 2026-07-28; confidence `0.98`.

### B. Foundational papers (4)

#### R07 — Bayes (1763), “An Essay towards Solving a Problem in the Doctrine of Chances”

- Authors/venue: Thomas Bayes; *Philosophical Transactions of the Royal Society of London*.
- Year/type: 1763; journal article, published posthumously.
- DOI/arXiv: `10.1098/rstl.1763.0053`; no arXiv ID.
- URL: https://doi.org/10.1098/rstl.1763.0053.
- Difficulty/relevance: advanced historical reading; foundation for inverse probability and Bayesian reasoning.
- Prerequisites/access: probability notation plus historical context; publisher access conditions vary, metadata/abstract free.
- Verification: verified through Crossref/Royal Society DOI metadata, 2026-07-28; confidence `0.99`.

#### R08 — Pearson (1901), “On Lines and Planes of Closest Fit to Systems of Points in Space”

- Author/venue: Karl Pearson; *The London, Edinburgh, and Dublin Philosophical Magazine and Journal of Science*.
- Year/type: 1901; journal article.
- DOI/arXiv: `10.1080/14786440109462720`; no arXiv ID.
- URL: https://doi.org/10.1080/14786440109462720.
- Difficulty/relevance: advanced historical reading; geometric basis for principal-components reasoning.
- Prerequisites/access: projections, least squares, covariance; publisher access conditions vary, metadata/abstract free.
- Verification: verified through Crossref/publisher DOI metadata, 2026-07-28; confidence `0.99`.

#### R09 — Shannon (1948), “A Mathematical Theory of Communication”

- Author/venue: Claude E. Shannon; *Bell System Technical Journal* 27.
- Year/type: 1948; journal article.
- DOI/arXiv: `10.1002/j.1538-7305.1948.tb01338.x` for the first published part; no arXiv ID.
- URL: https://doi.org/10.1002/j.1538-7305.1948.tb01338.x.
- Difficulty/relevance: intermediate-to-advanced; entropy and information as quantitative objects.
- Prerequisites/access: logarithms, probability, expectation; publisher access conditions vary, metadata/abstract free.
- Verification: verified through Crossref/Wiley DOI metadata, 2026-07-28; confidence `0.99`.

#### R10 — Robbins and Monro (1951), “A Stochastic Approximation Method”

- Authors/venue: Herbert Robbins; Sutton Monro; *The Annals of Mathematical Statistics* 22(3), 400-407.
- Year/type: 1951; journal article.
- DOI/arXiv: `10.1214/aoms/1177729586`; no arXiv ID.
- URL: https://doi.org/10.1214/aoms/1177729586.
- Difficulty/relevance: advanced; mathematical origin of stochastic-approximation methods underlying SGD.
- Prerequisites/access: probability, expectation, convergence, calculus; free through Project Euclid for this record.
- Verification: verified through Crossref/Project Euclid DOI metadata, 2026-07-28; confidence `0.99`.

### C. Important established papers (6)

#### R11 — Rumelhart, Hinton, and Williams (1986), “Learning Representations by Back-Propagating Errors”

- Authors/venue: David E. Rumelhart; Geoffrey E. Hinton; Ronald J. Williams; *Nature* 323, 533-536.
- DOI/arXiv: `10.1038/323533a0`; no arXiv ID.
- URL: https://doi.org/10.1038/323533a0.
- Difficulty/relevance: intermediate; connects the multivariable chain rule to learning representations.
- Prerequisites/access: derivatives, computational graphs, neural-network basics; paid/subscription, abstract free.
- Verification: verified through Crossref/Nature DOI metadata, 2026-07-28; confidence `0.99`.

#### R12 — Johnson and Lindenstrauss (1984), “Extensions of Lipschitz Mappings into a Hilbert Space”

- Authors/venue: William B. Johnson; Joram Lindenstrauss; *Contemporary Mathematics* 26.
- DOI/arXiv: `10.1090/conm/026/737400`; no arXiv ID.
- URL: https://doi.org/10.1090/conm/026/737400.
- Difficulty/relevance: advanced; foundation for random projection and high-dimensional distance preservation.
- Prerequisites/access: normed spaces, probability, proof maturity; publisher access conditions vary.
- Verification: verified through Crossref/American Mathematical Society DOI metadata, 2026-07-28; confidence `0.98`.

#### R13 — Goldfarb (1970), “A Family of Variable-Metric Methods Derived by Variational Means”

- Author/venue: Donald Goldfarb; *Mathematics of Computation* 24(109), 23-26.
- DOI/arXiv: `10.1090/S0025-5718-1970-0258249-6`; no arXiv ID.
- URL: https://doi.org/10.1090/S0025-5718-1970-0258249-6.
- Difficulty/relevance: advanced; one of the papers forming the BFGS quasi-Newton method.
- Prerequisites/access: gradients, Hessians, positive-definite matrices, optimization; publisher access conditions vary.
- Verification: verified through Crossref/AMS DOI metadata, 2026-07-28; confidence `0.99`.

#### R14 — Amari (1998), “Natural Gradient Works Efficiently in Learning”

- Author/venue: Shun-ichi Amari; *Neural Computation* 10(2), 251-276.
- DOI/arXiv: `10.1162/089976698300017746`; no arXiv ID.
- URL: https://doi.org/10.1162/089976698300017746.
- Difficulty/relevance: advanced; links parameter-space geometry and optimization.
- Prerequisites/access: gradients, probability models, Fisher information; paid/subscription, abstract free.
- Verification: verified through Crossref/MIT Press DOI metadata, 2026-07-28; confidence `0.99`.

#### R15 — Duchi, Hazan, and Singer (2011), “Adaptive Subgradient Methods for Online Learning and Stochastic Optimization”

- Authors/venue: John Duchi; Elad Hazan; Yoram Singer; *Journal of Machine Learning Research* 12(61), 2121-2159.
- DOI/arXiv: no DOI listed by JMLR; no canonical arXiv ID used here.
- URL: https://jmlr.org/papers/v12/duchi11a.html.
- Difficulty/relevance: advanced; AdaGrad, adaptive geometry, regret, and stochastic optimization.
- Prerequisites/access: convexity, subgradients, matrix roots, online learning; free.
- Verification: verified on the official JMLR article page, 2026-07-28; confidence `0.99`.

#### R16 — Halko, Martinsson, and Tropp (2011), “Finding Structure with Randomness”

- Authors/venue: Nathan Halko; Per-Gunnar Martinsson; Joel A. Tropp; *SIAM Review* 53(2), 217-288.
- DOI/arXiv: `10.1137/090771806`; arXiv `0909.4061`.
- URL: https://doi.org/10.1137/090771806.
- Difficulty/relevance: advanced; probabilistic algorithms for approximate matrix decompositions.
- Prerequisites/access: SVD, probability, numerical linear algebra; publisher version paid/subscription, author preprint available.
- Verification: verified through Crossref/SIAM DOI metadata, 2026-07-28; confidence `0.99`.

### D. Modern papers (5)

#### R17 — Kingma and Ba (2015), “Adam: A Method for Stochastic Optimization”

- Authors/venue: Diederik P. Kingma; Jimmy Ba; 3rd International Conference on Learning Representations (ICLR).
- Year/type: 2015 conference paper; initial arXiv posting 2014.
- DOI/arXiv: no DOI; arXiv `1412.6980`.
- URL: https://arxiv.org/abs/1412.6980.
- Difficulty/relevance: intermediate; adaptive moment optimization and its assumptions.
- Prerequisites/access: stochastic gradients, moments, online convex optimization; free.
- Verification: verified on arXiv with title/authors/identifier, 2026-07-28; confidence `0.98`.

#### R18 — Martens and Grosse (2015), “Optimizing Neural Networks with Kronecker-Factored Approximate Curvature”

- Authors/venue: James Martens; Roger Grosse; ICML 2015, PMLR 37, 2408-2417.
- DOI/arXiv: no DOI on PMLR; arXiv `1503.05671`.
- URL: https://proceedings.mlr.press/v37/martens15.html.
- Difficulty/relevance: advanced; structured Fisher/curvature approximation and Kronecker algebra.
- Prerequisites/access: matrix calculus, Fisher information, Kronecker products; free.
- Verification: verified on official PMLR proceedings page, 2026-07-28; confidence `0.99`.

#### R19 — Gupta, Koren, and Singer (2018), “Shampoo: Preconditioned Stochastic Tensor Optimization”

- Authors/venue: Vineet Gupta; Tomer Koren; Yoram Singer; ICML 2018, PMLR 80, 1842-1850.
- DOI/arXiv: no DOI on PMLR; arXiv `1802.09568`.
- URL: https://proceedings.mlr.press/v80/gupta18a.html.
- Difficulty/relevance: advanced; tensor-structured preconditioning and matrix trace inequalities.
- Prerequisites/access: tensors, positive-definite matrix powers, stochastic optimization; free.
- Verification: verified on official PMLR proceedings page, 2026-07-28; confidence `0.99`.

#### R20 — Dangel, Kunstner, and Hennig (2020), “BackPACK: Packing More into Backprop”

- Authors/venue: Felix Dangel; Frederik Kunstner; Philipp Hennig; ICLR 2020.
- DOI/arXiv: no DOI; arXiv `1912.10985`; OpenReview `BJlrF24twB`.
- URL: https://openreview.net/forum?id=BJlrF24twB.
- Difficulty/relevance: advanced applied mathematics; per-sample gradients and curvature quantities from autodiff.
- Prerequisites/access: backpropagation, Jacobians, Hessians, PyTorch; free.
- Verification: verified on the official OpenReview conference record, 2026-07-28; confidence `0.98`.

#### R21 — Meyer, Musco, Musco, and Woodruff (2021), “Hutch++: Optimal Stochastic Trace Estimation”

- Authors/venue: Raphael A. Meyer; Cameron Musco; Christopher Musco; David P. Woodruff; Symposium on Simplicity in Algorithms (SOSA), 142-155.
- DOI/arXiv: `10.1137/1.9781611976496.16`; arXiv `2010.09649`.
- URL: https://doi.org/10.1137/1.9781611976496.16.
- Difficulty/relevance: advanced; combines randomized low-rank approximation with stochastic trace estimation.
- Prerequisites/access: matrix-vector products, PSD matrices, probability, complexity; publisher access conditions vary, arXiv preprint free.
- Verification: verified on the official SIAM proceedings page, 2026-07-28; confidence `0.99`.

### E. Surveys and authoritative tutorials (3)

#### R22 — Baydin et al. (2018), “Automatic Differentiation in Machine Learning: A Survey”

- Authors/venue: Atilim Gunes Baydin; Barak A. Pearlmutter; Alexey Andreyevich Radul; Jeffrey Mark Siskind; *Journal of Machine Learning Research* 18(153), 1-43.
- DOI/arXiv: no DOI listed by JMLR; arXiv `1502.05767`.
- URL: https://www.jmlr.org/papers/v18/17-468.html.
- Difficulty/relevance: intermediate; forward/reverse mode, computational graphs, and AD terminology.
- Prerequisites/access: calculus and programming; free, CC BY 4.0 on the official paper.
- Verification: verified on the official JMLR page, 2026-07-28; confidence `0.99`.

#### R23 — Bottou, Curtis, and Nocedal (2018), “Optimization Methods for Large-Scale Machine Learning”

- Authors/venue: Léon Bottou; Frank E. Curtis; Jorge Nocedal; *SIAM Review* 60(2), 223-311.
- DOI/arXiv: `10.1137/16M1080173`; arXiv `1606.04838`.
- URL: https://doi.org/10.1137/16M1080173.
- Difficulty/relevance: advanced survey; optimization assumptions, stochastic gradients, scalability, and open issues.
- Prerequisites/access: calculus, probability, convex/nonconvex optimization; publisher access conditions vary, author preprint free.
- Verification: verified through Crossref/SIAM DOI metadata, 2026-07-28; confidence `0.99`.

#### R24 — Mahoney (2011), “Randomized Algorithms for Matrices and Data”

- Author/venue: Michael W. Mahoney; *Foundations and Trends in Machine Learning* 3(2), 123-224.
- DOI/arXiv: `10.1561/2200000035`; arXiv `1104.5557`.
- URL: https://doi.org/10.1561/2200000035.
- Difficulty/relevance: advanced tutorial; random sampling/projection methods for matrix problems and data analysis.
- Prerequisites/access: linear algebra, probability, algorithms; publisher access conditions vary, arXiv preprint free.
- Verification: verified through Crossref/publisher DOI metadata, 2026-07-28; confidence `0.99`.

### F. Applied and implementation papers (2)

#### R25 — Pedregosa et al. (2011), “Scikit-learn: Machine Learning in Python”

- Authors/venue: Fabian Pedregosa; Gaël Varoquaux; Alexandre Gramfort; Vincent Michel; Bertrand Thirion; Olivier Grisel; Mathieu Blondel; Peter Prettenhofer; Ron Weiss; Vincent Dubourg; Jake VanderPlas; Alexandre Passos; David Cournapeau; Matthieu Brucher; Matthieu Perrot; Édouard Duchesnay; *Journal of Machine Learning Research* 12(85), 2825-2830.
- DOI/arXiv: no DOI listed by JMLR.
- URL: https://www.jmlr.org/papers/v12/pedregosa11a.html.
- Difficulty/relevance: beginner-to-intermediate; implementation context for linear algebra, estimators, and reproducible experiments.
- Prerequisites/access: Python/NumPy and basic ML; free.
- Verification: verified on the official JMLR article page, 2026-07-28; confidence `0.99`.

#### R26 — Harris et al. (2020), “Array Programming with NumPy”

- Authors/venue: Charles R. Harris; K. Jarrod Millman; Stéfan J. van der Walt; Ralf Gommers; Pauli Virtanen; David Cournapeau; Eric Wieser; Julian Taylor; Sebastian Berg; Nathaniel J. Smith; Robert Kern; Matti Picus; Stephan Hoyer; Marten H. van Kerkwijk; Matthew Brett; Allan Haldane; Jaime Fernández del Río; Mark Wiebe; Pearu Peterson; Pierre Gérard-Marchant; Kevin Sheppard; Tyler Reddy; Warren Weckesser; Hameer Abbasi; Christoph Gohlke; Travis E. Oliphant; *Nature* 585, 357-362.
- DOI/arXiv: `10.1038/s41586-020-2649-2`; arXiv `2006.10256`.
- URL: https://doi.org/10.1038/s41586-020-2649-2.
- Difficulty/relevance: beginner-to-intermediate; array semantics and the computational foundation for Python numerical work.
- Prerequisites/access: Python and array basics; free author manuscript/open-access routes available, publisher metadata free.
- Verification: verified through Crossref/Nature DOI metadata, 2026-07-28; confidence `0.99`.

## 9. Curated paper reading path

The 20-paper path is sequenced by educational dependency, not citation count.

### Stage 1 — Foundational ideas (4)

1. R07 Bayes — read only after the probability bridge and the linked Statistical Methods material; focus on historical notation rather than using this book to teach Bayesian probability.
2. R08 Pearson — read after Chapters 3-4; reconstruct the geometric objective in modern matrix notation.
3. R09 Shannon — read after Chapter 8; distinguish source claims from modern ML interpretations.
4. R10 Robbins-Monro — read after Chapter 6 and the linked Statistical Methods material; identify the noise and convergence assumptions.

### Stage 2 — Established methods (6)

5. R11 Rumelhart-Hinton-Williams — connect reverse-mode differentiation to the chain rule.
6. R13 Goldfarb — derive the positive-definite update assumptions behind quasi-Newton methods.
7. R14 Amari — compare Euclidean and information-geometric steepest descent.
8. R15 Duchi-Hazan-Singer — connect adaptive learning rates to data geometry and regret.
9. R12 Johnson-Lindenstrauss — read after a guided proof outline; test distance preservation experimentally.
10. R16 Halko-Martinsson-Tropp — connect SVD, randomized range finding, error bounds, and cost.

### Stage 3 — Modern scalable mathematics (5)

11. R17 Adam — reproduce the update, then compare the paper's assumptions with later caveats.
12. R18 K-FAC — unpack Kronecker structure and Fisher approximations.
13. R19 Shampoo — trace how tensor structure reduces preconditioner storage.
14. R20 BackPACK — inspect how autodiff can expose per-sample and curvature information.
15. R21 Hutch++ — reproduce trace-estimation error versus matrix-vector product count.

### Stage 4 — Surveys/tutorials (3)

16. R22 Baydin et al. — use as the terminology authority for autodiff modes.
17. R23 Bottou-Curtis-Nocedal — use as the optimization map connecting theory and large-scale practice.
18. R24 Mahoney — use as the bridge from exact matrix methods to randomized algorithms.

### Stage 5 — Applied implementations (2)

19. R26 Harris et al. — study array semantics, interoperability, performance, and reproducibility.
20. R25 Pedregosa et al. — inspect how mathematical estimators become a consistent software API.

### Chapter-to-reading coverage

| Chapter | Foundational/established | Modern | Survey/tutorial | Implementation |
| --- | --- | --- | --- | --- |
| 1 | R07 as a historical notation exercise | R20 | R22 | R26 |
| 2 | R08 | R18 | R24 | R26 |
| 3 | R08, R13 | R21 | R23 | R25 |
| 4 | R12, R16 | R21 | R24 | R26 |
| 5 | R11 | R20 | R22 | R26 |
| 6 | R10, R13-R15 | R17-R19 | R23 | R25 |
| 7 | R16 | R20-R21 | R23-R24 | R26 |
| 8 | R09, R14 | R18 | R23 | R25 |
| 9 | R12, R16 | R21 | R24 | R25 |
| 10 | R16 | R18-R21 | R23-R24 | R25-R26 |

The probability bridge cross-links to R05 and Introduction to Statistical Methods; it is intentionally absent from the principal chapter matrix. For chapters where no genuine “foundational paper” is pedagogically appropriate, the table uses an established paper and the chapter should cite a verified textbook/course rather than forcing a misleading historical selection.

## 10. Proposed projects

Every idea is non-official. Dataset choices favor synthetic data or openly documented datasets to keep the mathematics observable.

### Beginner 1 — Linear Algebra Shape and Geometry Laboratory

- **Classification:** Prerequisite + Industry application.
- **Problem:** build a NumPy notebook that visualizes linear transformations, bases, rank, null spaces, and projections in 2D/3D.
- **Learning objectives:** connect matrix multiplication to geometry; diagnose rank and shape errors; verify projection identities numerically.
- **Prerequisites:** Chapters 1-3, basic Python functions, NumPy arrays, and plotting.
- **Architecture/data:** Python 3.12, NumPy, Matplotlib; seeded synthetic vectors and matrices.
- **Milestones:** validated vector operations; transformation plots; rank-deficiency cases; projection error tests.
- **Evaluation/deliverables:** numerical residuals, unit tests, notebook, short explanation; correctness 50%, explanation 25%, testing 15%, reproducibility 10%.
- **Extension ideas:** add affine transformations, change-of-basis animations, or a high-dimensional projection diagnostic without implying that 2D plots prove the general case.
- **Deployment guidance:** publish as a static, read-only notebook/HTML demonstration with pinned dependencies and no arbitrary code execution or uploads.
- **Ethics/security:** no personal data; warn that low-dimensional visuals are analogies, not proof for all dimensions.

### Beginner 2 — Gradient and Shape Verification Workshop

- **Classification:** Prerequisite + Supplementary.
- **Problem:** build a small checker that compares analytic gradients with central finite differences for scalar, vector, and matrix-shaped functions.
- **Learning objectives:** apply the chain rule; track gradient/Jacobian shapes; choose a finite-difference step; distinguish truncation error from floating-point error.
- **Prerequisites:** Chapters 1, 2, 5, and basic NumPy broadcasting.
- **Architecture/data:** Python 3.12 and NumPy; explicit synthetic arrays and analytic functions with known derivatives.
- **Milestones:** scalar checker; vector/Jacobian cases; relative-error threshold; deliberately incorrect-gradient diagnostics.
- **Evaluation/deliverables:** tested functions, notebook, error analysis, and quiz; derivation 35%, implementation 30%, numerical reasoning 25%, tests 10%.
- **Extension ideas:** add complex-step differentiation, directional-derivative checks, or a comparison with PyTorch/JAX autodiff.
- **Deployment guidance:** package as a local CLI or static notebook; do not expose unrestricted expression evaluation in a public service.
- **Ethics/security:** use no personal data and reject untrusted executable input.

### Intermediate 1 — Least Squares Under Stress

- **Classification:** Supplementary + Industry application.
- **Problem:** compare normal equations, QR, SVD, and library least-squares solvers as conditioning worsens.
- **Learning objectives:** connect factorization choice to conditioning; distinguish residual from parameter error; justify a solver using accuracy and cost evidence.
- **Prerequisites:** Chapters 2-4 and 7, floating-point basics, NumPy/SciPy arrays, and unit testing.
- **Architecture/data:** NumPy/SciPy; seeded synthetic matrices with controlled singular spectra.
- **Milestones:** solver implementations; condition-number sweep; residual/parameter-error analysis; runtime/memory profile.
- **Evaluation/deliverables:** tested package, benchmark report, plots; accuracy 35%, numerical reasoning 30%, software quality 20%, communication 15%.
- **Extension ideas:** sparse least squares, iterative solvers, mixed precision, or regularization under near-rank deficiency.
- **Deployment guidance:** distribute a versioned benchmark CLI and static report; record CPU/library versions and never present one-machine timings as universal.
- **Ethics/security:** disclose that synthetic benchmarks do not prove production performance.

### Intermediate 2 — Optimizer Observatory

- **Classification:** Supplementary + Industry application.
- **Problem:** implement gradient descent, momentum, AdaGrad, Adam, and BFGS for convex quadratics and a small logistic objective.
- **Learning objectives:** derive update rules; identify convergence assumptions; relate conditioning to convergence; design a fair optimizer comparison.
- **Prerequisites:** Chapters 2, 5-7 and the probability-notation bridge plus linked Statistical Methods material for stochastic-result interpretation.
- **Architecture/data:** typed Python, NumPy, SciPy reference solvers; synthetic and one small public tabular dataset with provenance.
- **Milestones:** gradient checks; deterministic optimizers; convergence traces; sensitivity/conditioning study.
- **Evaluation/deliverables:** code/tests, reproducibility file, report; mathematical correctness 35%, experimental design 25%, tests 20%, analysis 20%.
- **Extension ideas:** line search, trust regions, constrained objectives, or variance across repeated stochastic runs analyzed with Statistical Methods.
- **Deployment guidance:** publish an offline benchmark and static results dashboard; pin dataset/version/splits and keep training endpoints private unless resource limits and input validation are added.
- **Ethics/security:** prevent dataset leakage in preprocessing; do not imply optimizer results generalize to all tasks.

### Advanced — Automatic Differentiation Engine and Curvature Probes

- **Classification:** Advanced extension.
- **Problem:** implement a minimal scalar/tensor reverse-mode autodiff engine, then compare gradients, Jacobian-vector products, and Hessian-vector products with PyTorch.
- **Learning objectives:** construct a computational graph; implement reverse accumulation; validate higher-order products; explain time-memory trade-offs.
- **Prerequisites:** Chapters 1, 2, 5-7, Python classes, graph traversal, and tensor broadcasting.
- **Architecture/data:** Python, NumPy, PyTorch; synthetic functions with analytic derivatives.
- **Milestones:** computational graph; reverse pass; broadcasting rules; gradient/property tests; performance comparison.
- **Evaluation/deliverables:** library, tests, design note, benchmark; correctness 45%, API/design 20%, testing 20%, analysis 15%.
- **Extension ideas:** forward mode, checkpointing, sparse Jacobians, custom differentiation rules, or curvature-vector products.
- **Deployment guidance:** release only as an educational library with semantic versioning and explicit unsupported-operation errors; do not use it for safety-critical or production training.
- **Ethics/security:** reject unbounded graphs and invalid shapes; explain that an educational engine is not production-safe.

### Research-oriented — Randomized Matrix Algorithms Reproduction Study

- **Classification:** Advanced extension + Industry application.
- **Problem:** reproduce selected error/cost behavior from randomized SVD and Hutch++ using controlled spectra.
- **Learning objectives:** translate paper assumptions into tests; separate approximation error from stochastic variation; compare theoretical operation counts with measured cost; report failed reproduction faithfully.
- **Prerequisites:** Chapters 2-4, 7, 10, the probability-notation bridge, and the linked Statistical Methods treatment of expectation, variance, and repeated-run uncertainty.
- **Architecture/data:** Python, NumPy/SciPy; synthetic PSD and low-rank-plus-noise matrices; optional openly licensed sparse matrices after provenance review.
- **Milestones:** preregister hypotheses; implement baselines; reproduce one figure/table concept without copying presentation; ablation over rank, spectrum, tolerance, and random seed; report deviations.
- **Evaluation/deliverables:** code, environment lock, experiment log, report, paper-reading questions; fidelity 25%, method 25%, statistical reasoning 20%, reproducibility 20%, limitations 10%.
- **Extension ideas:** streaming matrices, GPU/mixed precision, alternate trace estimators, or confidence analysis coordinated with Statistical Methods.
- **Deployment guidance:** publish a reproducible research bundle and static report, not a claim-only demo; include checksums, licences, resource limits, seed logs, and hardware metadata.
- **Ethics/security:** preserve source attribution; distinguish the paper's claims from reproduced observations; never cherry-pick seeds.

## 11. Validation gates before chapter generation

The plan may advance only when:

- [ ] an editor confirms that every proposed topic carries a non-official classification;
- [ ] no plan text represents a proposed unit, prerequisite, outcome, tool, or hour as brochure-defined;
- [ ] official title, placement, source page, and source hash match the curriculum report;
- [ ] 10 principal chapters fit the allowed 8-16 range;
- [ ] probability/random-variable/distribution/expectation/LLN/CLT material is limited to the two-hour notation bridge and cross-links to Introduction to Statistical Methods for principal coverage;
- [ ] Chapter 1 remains scoped to mathematical language and is unaffected by the probability ownership decision;
- [ ] the Mathematics Reviewer checks dependency order and notation scope;
- [ ] all 26 resource records retain title, author/organisation, year, type, URL, identifier where available, venue, access date, difficulty, relevance, prerequisites, access status, confidence, and verification status;
- [ ] each DOI/arXiv/provider ID resolves and matches its title;
- [ ] the 20-paper path meets 4 foundational, 6 established, 5 modern, 3 survey/tutorial, and 2 applied selections;
- [ ] every graph endpoint exists and strict prerequisite edges are acyclic;
- [ ] project levels meet two beginner, two intermediate, one advanced, and one research-oriented requirement;
- [ ] every project explicitly declares learning objectives, prerequisites, extension ideas, and deployment guidance;
- [ ] chapter hours sum to 96, the probability bridge is 2 hours, and total planning hours sum to 142;
- [ ] an official course handout, if supplied later, triggers a reconciliation task before drafting.

## 12. Open issues and recommended next tasks

### Open issues

1. The official detailed course handout is missing; the topic plan remains provisional.
2. Assessment format and contact hours are unknown.
3. The ownership boundary is now explicit: Introduction to Statistical Methods owns principal probability/distribution/expectation/LLN/CLT treatment; final cross-links still require coordination with its Subject Lead.
4. Chapters 9-10 workload may exceed the core semester envelope and should remain removable as advanced extensions.
5. Some foundational publisher records are paywalled; full-text teaching excerpts must respect copyright and use original synthesis.

### Recommended next tasks

1. Obtain and verify the registered course handout or LMS unit list.
2. Conduct cross-review with the Statistical Methods and Machine Learning Subject Leads.
3. Freeze a shared notation registry for vectors, matrices, random variables, gradients, and expectations.
4. Validate all resource URLs/identifiers through the citation pipeline and generate BibTeX records.
5. Approve the Chapter 1 specification only after the outline, scope boundary, and prerequisite diagnostic pass.
6. Build the first subject page from this plan while keeping all chapters visibly `planned`.
