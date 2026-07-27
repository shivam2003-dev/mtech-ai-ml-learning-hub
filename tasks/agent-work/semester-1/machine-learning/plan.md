# Subject Planning Bundle: Machine Learning

Subject ID: `SUBJ-004`  
Status: proposed, awaiting subject-level validation  
Subject Lead: `subject-lead:machine-learning`  
Web-resource access date: 2026-07-28  
Scope: planning only; no full 3,000-word chapter has been drafted

## 1. Official curriculum interpretation

### Verified course identity

- **Official title:** Machine Learning.
- **Official placement:** Semester 1 compulsory course.
- **Institution/programme:** BITS Pilani Work Integrated Learning Programmes, M.Tech. Artificial Intelligence and Machine Learning.
- **Curriculum evidence:** programme brochure, physical PDF page 12 (printed page 10).
- **Topic evidence:** “Courses Wise Syllabus,” physical PDF page 14 (printed page 12).
- **Source file:** `/Users/shivamkumar/Downloads/mtech-ai-ml.pdf`.
- **SHA-256:** `fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b`.

### Official topic description, preserved

The brochure explicitly lists:

> introduction to machine learning; kinds of learning; supervised and unsupervised learning; machine-learning workflow; Bayesian learning; MAP hypothesis; Bayes optimal classifier; naive Bayes classifier; linear models for regression and classification; non-linear models; decision trees; MDL principle; instance-based learning; support vector machines; ensemble learning; clustering; k-means; GMM; model evaluation and comparison.

This plan preserves all of those topics. The brochure supplies a prose topic list, not numbered units. Consequently, the proposed chapter boundaries and order are educational interpretations, not official unit boundaries.

### Classification policy

- **Official topic:** explicitly named in the brochure.
- **Prerequisite:** knowledge needed to learn an official topic but not stated as a subject prerequisite.
- **Supplementary:** useful depth or a concrete algorithm under a broad official heading.
- **Advanced extension:** research-oriented continuation beyond the stated breadth.
- **Industry application:** reliable implementation, governance, or production practice.

The brochure does not specify subject-level prerequisites, learning outcomes, hours, assessment weights, datasets, or tools. It gives only programme-level working knowledge of computing and programming. Proposed details in those fields remain non-official.

### Topic-to-chapter coverage audit

| Official brochure topic | Planned location | Treatment |
| --- | --- | --- |
| Introduction to machine learning | Chapter 1 | Official topic |
| Kinds of learning | Chapter 1 | Official topic |
| Supervised learning | Chapter 1 and Chapters 3-9 | Official topic |
| Unsupervised learning | Chapter 1 and Chapters 10-11 | Official topic |
| Machine-learning workflow | Chapters 1 and 12 | Official topic |
| Bayesian learning | Chapter 2 | Official topic |
| MAP hypothesis | Chapter 2 | Official topic |
| Bayes optimal classifier | Chapter 2 | Official topic |
| Naive Bayes classifier | Chapter 2 | Official topic |
| Linear models for regression | Chapter 3 | Official topic |
| Linear models for classification | Chapter 4 | Official topic |
| Non-linear models | Chapter 5 | Official topic; specific basis/kernel examples are supplementary |
| Decision trees | Chapter 6 | Official topic |
| MDL principle | Chapter 6 | Official topic |
| Instance-based learning | Chapter 7 | Official topic |
| Support vector machines | Chapter 8 | Official topic |
| Ensemble learning | Chapter 9 | Official topic |
| Clustering | Chapter 10 | Official topic |
| k-means | Chapter 10 | Official topic |
| GMM | Chapter 11 | Official topic |
| Model evaluation and comparison | Chapter 12 | Official topic |

The audit expands the brochure's combined phrases “Supervised Learning, Unsupervised Learning” and “Linear Models for Regression; Linear Models for Classification” into separate instructional rows, yielding **21 atomic official-topic rows**.

Coverage rule: no official topic may disappear during later editorial restructuring. Additions must retain their labels in navigation, metadata, and prose.

## 2. Proposed learning outcomes

These are **Supplementary educational outcomes**, not brochure-defined outcomes. A successful learner should be able to:

1. explain major kinds of learning and decide whether a problem is supervised or unsupervised;
2. translate a real problem into inputs, targets or latent structure, loss/utility, validation design, and success criteria;
3. derive Bayesian updating, MAP hypotheses, Bayes-optimal decisions, and common naive-Bayes variants while stating conditional-independence assumptions;
4. derive and implement linear regression and linear classification models and diagnose optimization, conditioning, and calibration issues;
5. explain how basis functions and kernels create nonlinear decision functions without confusing feature-space linearity with input-space linearity;
6. construct, prune, and interpret decision trees and connect tree complexity to the MDL principle;
7. implement nearest-neighbour learning and reason about metrics, scaling, indexing, memory, and the curse of dimensionality;
8. derive the hard- and soft-margin SVM objectives, explain the kernel trick, and interpret support vectors and regularization;
9. compare bagging, random forests, boosting, and stacking, including their assumptions and failure modes;
10. implement and evaluate k-means and explain initialization sensitivity, scaling, empty clusters, and non-spherical structure;
11. derive Gaussian-mixture likelihoods and EM updates and contrast soft mixture membership with hard k-means assignments;
12. design leakage-resistant model evaluation, select metrics for the decision context, compare models with uncertainty, and report limitations;
13. reproduce representative experiments with deterministic seeds, tests, provenance, and versioned environments;
14. distinguish a paper’s empirical claim from educational interpretation and from evidence observed in a local reproduction.

## 3. Proposed prerequisites and readiness map

All entries are non-official.

| Level | Classification and prerequisite | Readiness check | Remediation |
| --- | --- | --- | --- |
| P0 | **Prerequisite: Python programming** | Write functions, classes, tests, comprehensions, and file-safe data loaders. | Python/pytest refresher; programme brochure supports only general computing/programming familiarity. |
| P0 | **Prerequisite: data handling** | Work with tabular arrays and distinguish rows, features, targets, and identifiers. | NumPy/pandas shape and dtype lab. |
| P1 | **Prerequisite: linear algebra** | Use vectors, matrix multiplication, norms, projections, rank, and eigen/SVD vocabulary. | Mathematical Foundations Chapters 2-4. |
| P1 | **Prerequisite: calculus and optimization** | Compute gradients; interpret a convex objective; follow gradient descent. | Mathematical Foundations Chapters 5-6. |
| P1 | **Prerequisite: probability** | Use conditional probability, Bayes' rule, expectation, variance, covariance, and Gaussian distributions. | Mathematical Foundations Chapters 8-9. |
| P1 | **Prerequisite: statistical reasoning** | Distinguish population/sample, parameter/estimate, bias/variance, and uncertainty. | Coordinate with Introduction to Statistical Methods; no inference unit is silently duplicated. |
| P2 | **Supplementary: scientific Python** | Use NumPy broadcasting, scikit-learn estimator APIs, pipelines, and random states. | Reproducible baseline notebook. |
| P2 | **Industry application: data governance** | Identify target leakage, proxy variables, personal data, and licensing constraints. | Workflow threat-model checklist before any real dataset. |

Dependency flow:

```text
Python + data handling
      |
      +--> linear algebra + calculus ------> Chapters 3-9
      |
      +--> probability + statistics ------> Chapters 2, 11, 12
      |
      +--> scientific Python -------------> every implementation lab
      |
      +--> governance readiness ----------> Chapters 1, 12 and all projects
```

## 4. Proposed chapter outline

The 12 chapters are within the required 8-16 range.

| Ch. | Title | Classified coverage | Hours | Planned practical output |
| --- | --- | --- | ---: | --- |
| 1 | Learning Problems and the ML Workflow | **Official topics:** introduction, kinds of learning, supervised/unsupervised learning, workflow. **Supplementary:** problem framing, empirical risk, train/validation/test roles. **Industry application:** data provenance, leakage threat model, baselines, reproducibility. | 8 | problem-framing canvas and leakage-safe baseline |
| 2 | Bayesian Learning and Optimal Decisions | **Official topics:** Bayesian learning, MAP hypothesis, Bayes optimal classifier, naive Bayes. **Prerequisite:** conditional probability and likelihood. **Supplementary:** decision loss and smoothing. | 12 | naive Bayes from scratch plus calibrated comparison |
| 3 | Linear Models for Regression | **Official topic:** linear regression models. **Supplementary:** least squares, regularization, polynomial design matrices, bias-variance. **Industry application:** conditioning, residual checks, robust pipelines. | 12 | tested linear/ridge regression implementation |
| 4 | Linear Models for Classification | **Official topic:** linear classification models. **Supplementary:** perceptron, logistic regression, discriminative loss, multiclass strategies, calibration. | 12 | perceptron and logistic classifier with gradient checks |
| 5 | From Linear to Nonlinear Models | **Official topic:** non-linear models. **Supplementary:** basis expansions, feature maps, polynomial models, kernels, bandwidth/complexity. **Advanced extension:** Gaussian-process connection is reading-only. | 10 | nonlinear decision-boundary laboratory |
| 6 | Decision Trees and Minimum Description Length | **Official topics:** decision trees, MDL principle. **Supplementary:** impurity, information gain, pruning, regression trees. **Industry application:** missing values, unstable splits, feature-importance cautions. | 12 | tree learner and MDL-style complexity study |
| 7 | Instance-Based Learning | **Official topic:** instance-based learning. **Supplementary:** k-nearest-neighbour classification/regression, metrics, weighting, local methods. **Industry application:** scaling, KD/ball trees, approximate search boundaries. | 10 | vectorized k-NN with complexity benchmark |
| 8 | Support Vector Machines | **Official topic:** SVM. **Prerequisite:** constrained optimization. **Supplementary:** margins, slack variables, duality, kernels, multiclass decomposition. | 12 | primal linear SVM and library kernel study |
| 9 | Ensemble Learning | **Official topic:** ensemble learning. **Supplementary:** bagging, random forests, AdaBoost, gradient boosting, stacking, diversity. **Industry application:** probability quality, interpretation, compute trade-offs. | 12 | ensemble benchmark with ablations |
| 10 | Clustering and k-Means | **Official topics:** clustering and k-means. **Supplementary:** objectives, Lloyd's algorithm, initialization, hierarchical/density/spectral context. **Industry application:** stability, scaling, empty clusters, cluster-use ethics. | 12 | k-means from scratch and stability report |
| 11 | Gaussian Mixture Models and EM | **Official topic:** GMM. **Supplementary:** latent variables, likelihood, responsibilities, EM derivation, covariance constraints, model selection. **Advanced extension:** variational-mixture reading. | 12 | log-stable GMM/EM implementation |
| 12 | Model Evaluation, Comparison, and Responsible Reporting | **Official topic:** model evaluation and comparison; workflow synthesis. **Supplementary:** cross-validation, nested selection, regression/classification/clustering metrics, uncertainty and significance cautions. **Industry application:** leakage, slices, calibration, interpretability limits, model cards, technical debt. | 12 | reproducible comparison report and model card |

### Chapter standards

- Every official topic is identifiable in front matter through a brochure evidence locator.
- A concrete algorithm introduced under broad wording such as “non-linear models” is marked Supplementary.
- Every mathematical symbol and shape is defined before use.
- From-scratch implementations are compared against an established library.
- Library output is not treated as proof of correctness; tests use analytic, invariant, and edge-case oracles.
- Current performance or state-of-the-art claims require publication-time verification.
- Principal chapters target 3,000-5,000 meaningful prose words, with Chapters 2, 8, and 11 allowed 4,000-7,000 due to derivations.

## 5. Estimated study time

These are **Supplementary planning estimates**, not official credit/contact hours.

| Activity | Hours |
| --- | ---: |
| Readiness diagnostic, environment, and front matter | 4 |
| Twelve chapters: reading, derivations, code, exercises, quizzes | 136 |
| One selected project pathway from six alternatives | 24 |
| Revision, cumulative assignment, and examination preparation | 16 |
| **Total** | **180** |

Suggested pacing is 11-12 hours per week across 16 weeks. A lighter path uses Chapters 1-4, 6-12 as core and treats advanced sections of Chapter 5 as optional, but no official brochure topic is removed.

## 6. Proposed knowledge graph

Relationships are **Supplementary educational guidance** unless the node itself is marked official. The brochure does not specify course prerequisites.

### Nodes

| Node ID | Type | Curriculum status |
| --- | --- | --- |
| `subject:machine-learning` | subject | Official Semester 1 course |
| `subject:mathematical-foundations-for-machine-learning` | subject | Official Semester 1 course |
| `subject:introduction-to-statistical-methods` | subject | Official Semester 1 course |
| `subject:deep-neural-networks` | subject | Official Semester 2 course |
| `subject:deep-reinforcement-learning` | subject | Official Semester 2 course |
| `subject:advanced-data-mining` | subject | Official elective |
| `subject:probabilistic-graphical-models` | subject | Official elective |
| `subject:mlops` | subject | Official elective |
| `concept:bayesian-learning` | concept | Official ML topic |
| `concept:linear-models` | concept | Official ML topic |
| `concept:decision-trees` | concept | Official ML topic |
| `concept:instance-learning` | concept | Official ML topic |
| `concept:support-vector-machines` | concept | Official ML topic |
| `concept:ensemble-learning` | concept | Official ML topic |
| `concept:clustering` | concept | Official ML topic |
| `concept:gaussian-mixture-models` | concept | Official ML topic |
| `concept:model-evaluation` | concept | Official ML topic |
| `concept:data-leakage` | concept | Industry application addition |

### Edges

| From | Type | To | Classification/reason |
| --- | --- | --- | --- |
| `subject:mathematical-foundations-for-machine-learning` | `prerequisite_of` | `subject:machine-learning` | Supplementary ordering; mathematical tools support the algorithms. |
| `subject:introduction-to-statistical-methods` | `related_to` | `subject:machine-learning` | Supplementary co-requisite relation; uncertainty and evaluation overlap. |
| `concept:bayesian-learning` | `used_by` | `subject:probabilistic-graphical-models` | Supplementary downstream relation. |
| `concept:linear-models` | `prerequisite_of` | `subject:deep-neural-networks` | Supplementary conceptual ordering, not an official course rule. |
| `concept:model-evaluation` | `used_by` | `subject:deep-neural-networks` | Supplementary downstream relation. |
| `concept:model-evaluation` | `used_by` | `subject:deep-reinforcement-learning` | Supplementary downstream relation. |
| `concept:clustering` | `used_by` | `subject:advanced-data-mining` | Supplementary downstream relation. |
| `concept:gaussian-mixture-models` | `extension_of` | `concept:clustering` | Supplementary soft probabilistic clustering relationship. |
| `concept:ensemble-learning` | `extension_of` | `concept:decision-trees` | Supplementary for tree ensembles; ensembles are not limited to trees. |
| `concept:support-vector-machines` | `used_by` | `subject:machine-learning` | Official in-course topic relationship. |
| `concept:data-leakage` | `evaluated_by` | `concept:model-evaluation` | Industry addition: split and pipeline audits test leakage risk. |
| `concept:model-evaluation` | `applied_in` | `subject:mlops` | Supplementary operational relationship. |
| `subject:machine-learning` | `prerequisite_of` | `subject:deep-neural-networks` | Supplementary recommended order, not brochure-specified. |
| `subject:machine-learning` | `related_to` | `subject:deep-reinforcement-learning` | Supplementary relation; avoids asserting an official prerequisite. |

Strict `prerequisite_of` edges must remain acyclic. Every endpoint must resolve, and the UI must distinguish official topic membership from proposed cross-course ordering.

## 7. Research query plan

| ID | Provider/domain | Reproducible query |
| --- | --- | --- |
| Q1 | Crossref | exact title/DOI verification for each historical and established paper |
| Q2 | OpenAlex | `machine learning AND (Bayesian OR linear model OR decision tree OR SVM OR ensemble OR clustering)` with work type and venue filters |
| Q3 | Semantic Scholar | `machine learning model evaluation data leakage reproducibility` |
| Q4 | JMLR | `supervised learning`, `classification`, `clustering`, and `software` resource search |
| Q5 | PMLR | `ensemble learning`, `model selection`, `mixture models`, and reproducibility |
| Q6 | arXiv | `cat:cs.LG AND ("model evaluation" OR "data leakage")`; discovery only until venue/identity verification |
| Q7 | NeurIPS proceedings | exact-title search for model interpretation and ML systems papers |
| Q8 | ACM Digital Library | exact-title/DOI search for XGBoost, LIME, and model cards |
| Q9 | Springer | exact book and paper DOI pages for PRML, ESL, decision trees, SVM, bagging, random forests |
| Q10 | Wiley/RSS | Bayesian/EM historical paper metadata |
| Q11 | IEEE Xplore | nearest-neighbour historical paper metadata |
| Q12 | Stanford CS229 | official lecture notes for generative, discriminative, SVM, learning-theory, model-selection, and clustering topics |
| Q13 | scikit-learn | stable official documentation for APIs, pitfalls, metrics, clustering, mixture models, and pipelines |
| Q14 | Publisher/author sites | free/paid status, edition, errata, code, and dataset provenance for books |

Selection scoring weights: direct syllabus relevance 25%, educational value 20%, methodological/historical importance 15%, reproducibility/code 10%, venue/source authority 10%, accessibility 10%, modern relevance 10%. Citation count is not a ranking rule.

## 8. Verified preliminary resources

Metadata was checked on 2026-07-28 against publisher, author, institutional course, official proceedings/journal, DOI/Crossref, or stable project documentation. “Verified” means identity metadata matched; it does not imply full-text access or uncritical endorsement.

### A. Books, courses, and documentation (6)

#### R01 — *Pattern Recognition and Machine Learning*

- Author/organisation: Christopher M. Bishop; Springer.
- Year/type/venue: 2006; graduate textbook; Information Science and Statistics, Springer.
- DOI/identifier: `10.1007/978-0-387-45528-0`; ISBN `978-0-387-31073-2`.
- URL: https://doi.org/10.1007/978-0-387-45528-0.
- Difficulty/relevance: advanced; probabilistic models, linear models, kernels, mixture models, EM.
- Prerequisites/access: linear algebra, calculus, probability; paid/subscription, bibliographic preview free.
- Verification: verified; confidence `0.99`; accessed 2026-07-28.

#### R02 — *The Elements of Statistical Learning*, second edition

- Authors/organisation: Trevor Hastie; Robert Tibshirani; Jerome Friedman; Springer.
- Year/type/venue: 2009; graduate textbook; Springer Series in Statistics.
- DOI/identifier: `10.1007/978-0-387-84858-7`; ISBN `978-0-387-84857-0`.
- URL: https://hastie.su.domains/ElemStatLearn/.
- Difficulty/relevance: intermediate-to-advanced; linear methods, trees, SVMs, ensembles, clustering, model assessment.
- Prerequisites/access: linear algebra, calculus, probability/statistics; free author-hosted corrected PDF with publisher permission, paid print.
- Verification: verified; confidence `0.99`; accessed 2026-07-28.

#### R03 — *Understanding Machine Learning: From Theory to Algorithms*

- Authors/organisation: Shai Shalev-Shwartz; Shai Ben-David; Cambridge University Press.
- Year/type/venue: 2014; graduate textbook; Cambridge University Press.
- DOI/identifier: `10.1017/CBO9781107298019`; ISBN `978-1-107-05713-5`.
- URL: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf.
- Difficulty/relevance: advanced; learning formalization, ERM, MDL/SRM, linear predictors, kernels, trees, nearest neighbours, clustering.
- Prerequisites/access: proofs, probability, linear algebra; free author-hosted PDF, paid print/digital.
- Verification: verified; confidence `0.99`; accessed 2026-07-28.

#### R04 — *Probabilistic Machine Learning: An Introduction*

- Author/organisation: Kevin P. Murphy; MIT Press.
- Year/type/venue: 2022; graduate textbook; Adaptive Computation and Machine Learning series.
- DOI/identifier: no DOI asserted; ISBN `978-0-262-04682-4`.
- URL: https://mitpress.mit.edu/9780262046824/probabilistic-machine-learning/.
- Difficulty/relevance: intermediate-to-advanced; unifying probabilistic treatment of learning and decision theory.
- Prerequisites/access: calculus, linear algebra, probability, programming; paid book, author companion material/code available separately.
- Verification: verified on MIT Press; confidence `0.99`; accessed 2026-07-28.

#### R05 — Stanford CS229 *Machine Learning* course materials

- Author/organisation: Stanford University CS229 instructional staff.
- Year/type/venue: continuously maintained; graduate course notes and problem sets; Stanford University.
- DOI/identifier: none.
- URL: https://cs229.stanford.edu/materials.html-full.
- Difficulty/relevance: intermediate-to-advanced; discriminative/generative learning, SVMs, regularization/model selection, perceptron, k-means.
- Prerequisites/access: probability, linear algebra, calculus, programming; free public notes, some course functions restricted.
- Verification: verified institutional course page; confidence `0.98`; accessed 2026-07-28.

#### R06 — scikit-learn User Guide

- Author/organisation: scikit-learn developers.
- Year/type/venue: continuously versioned documentation; official open-source project documentation.
- DOI/identifier: documentation has no DOI; software-paper citation appears as R25.
- URL: https://scikit-learn.org/stable/user_guide.
- Difficulty/relevance: beginner-to-intermediate implementation reference; supervised/unsupervised methods, model selection, pipelines, pitfalls.
- Prerequisites/access: Python, NumPy, ML concepts; free under project documentation terms.
- Verification: verified official documentation; confidence `0.99`; accessed 2026-07-28.

### B. Foundational papers (4)

#### R07 — Fisher (1936), “The Use of Multiple Measurements in Taxonomic Problems”

- Author/venue: R. A. Fisher; *Annals of Eugenics* 7(2), 179-188.
- DOI/arXiv: `10.1111/j.1469-1809.1936.tb02137.x`; no arXiv ID.
- URL: https://doi.org/10.1111/j.1469-1809.1936.tb02137.x.
- Difficulty/relevance: advanced historical; discriminant analysis and multivariate classification.
- Prerequisites/access: covariance, linear algebra, classification; publisher conditions vary, metadata free.
- Verification: verified via Crossref/Wiley metadata; confidence `0.99`; accessed 2026-07-28.

#### R08 — Rosenblatt (1958), “The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain”

- Author/venue: Frank Rosenblatt; *Psychological Review* 65(6), 386-408.
- DOI/arXiv: `10.1037/h0042519`; no arXiv ID.
- URL: https://doi.org/10.1037/h0042519.
- Difficulty/relevance: intermediate historical; linear classification and online updates.
- Prerequisites/access: vectors and linear decision boundaries; paid/subscription, metadata/abstract free.
- Verification: verified via Crossref/APA metadata; confidence `0.99`; accessed 2026-07-28.

#### R09 — Cover and Hart (1967), “Nearest Neighbor Pattern Classification”

- Authors/venue: Thomas M. Cover; Peter E. Hart; *IEEE Transactions on Information Theory* 13(1), 21-27.
- DOI/arXiv: `10.1109/TIT.1967.1053964`; no arXiv ID.
- URL: https://doi.org/10.1109/TIT.1967.1053964.
- Difficulty/relevance: advanced historical; error behavior of nearest-neighbour classification.
- Prerequisites/access: probability, metrics, classification risk; paid/subscription, metadata/abstract free.
- Verification: verified via Crossref/IEEE metadata; confidence `0.99`; accessed 2026-07-28.

#### R10 — MacQueen (1967), “Some Methods for Classification and Analysis of Multivariate Observations”

- Author/venue: J. MacQueen; *Proceedings of the Fifth Berkeley Symposium on Mathematical Statistics and Probability*, Volume 1, 281-297; University of California Press.
- DOI/arXiv: no DOI or arXiv ID asserted; Project Euclid record `bsmsp/1200512992`.
- URL: https://projecteuclid.org/euclid.bsmsp/1200512992.
- Difficulty/relevance: intermediate historical; foundational k-means formulation.
- Prerequisites/access: vectors, squared distance, means; free Project Euclid record.
- Verification: verified on Project Euclid; confidence `0.98`; accessed 2026-07-28.

### C. Important established papers (6)

#### R11 — Dempster, Laird, and Rubin (1977), “Maximum Likelihood from Incomplete Data via the EM Algorithm”

- Authors/venue: A. P. Dempster; N. M. Laird; D. B. Rubin; *Journal of the Royal Statistical Society, Series B* 39(1), 1-38.
- DOI/arXiv: `10.1111/j.2517-6161.1977.tb01600.x`; no arXiv ID.
- URL: https://doi.org/10.1111/j.2517-6161.1977.tb01600.x.
- Difficulty/relevance: advanced; expectation-maximization for latent-variable likelihoods and GMMs.
- Prerequisites/access: likelihood, conditional expectation, optimization; publisher conditions vary.
- Verification: verified via Crossref/Wiley metadata; confidence `0.99`; accessed 2026-07-28.

#### R12 — Quinlan (1986), “Induction of Decision Trees”

- Author/venue: J. R. Quinlan; *Machine Learning* 1, 81-106.
- DOI/arXiv: `10.1007/BF00116251`; no arXiv ID.
- URL: https://doi.org/10.1007/BF00116251.
- Difficulty/relevance: intermediate; decision-tree induction and information-based splitting.
- Prerequisites/access: entropy, classification, recursion; paid/subscription, metadata/abstract free.
- Verification: verified via Crossref/Springer metadata; confidence `0.99`; accessed 2026-07-28.

#### R13 — Cortes and Vapnik (1995), “Support-Vector Networks”

- Authors/venue: Corinna Cortes; Vladimir Vapnik; *Machine Learning* 20, 273-297.
- DOI/arXiv: `10.1007/BF00994018`; no arXiv ID.
- URL: https://doi.org/10.1007/BF00994018.
- Difficulty/relevance: advanced; soft-margin support-vector classification and kernels.
- Prerequisites/access: convex optimization, duality, inner products; publisher article is openly accessible.
- Verification: verified via Crossref/Springer metadata; confidence `0.99`; accessed 2026-07-28.

#### R14 — Breiman (1996), “Bagging Predictors”

- Author/venue: Leo Breiman; *Machine Learning* 24, 123-140.
- DOI/arXiv: `10.1007/BF00058655`; no arXiv ID.
- URL: https://doi.org/10.1007/BF00058655.
- Difficulty/relevance: intermediate; bootstrap aggregation and predictor instability.
- Prerequisites/access: resampling, variance, prediction error; publisher access conditions vary.
- Verification: verified via Crossref/Springer metadata; confidence `0.99`; accessed 2026-07-28.

#### R15 — Freund and Schapire (1997), “A Decision-Theoretic Generalization of On-Line Learning and an Application to Boosting”

- Authors/venue: Yoav Freund; Robert E. Schapire; *Journal of Computer and System Sciences* 55(1), 119-139.
- DOI/arXiv: `10.1006/jcss.1997.1504`; no arXiv ID asserted.
- URL: https://doi.org/10.1006/jcss.1997.1504.
- Difficulty/relevance: advanced; AdaBoost and weighted online decision theory.
- Prerequisites/access: probability, exponential weighting, classification; publisher conditions vary.
- Verification: verified via Crossref/Elsevier metadata; confidence `0.99`; accessed 2026-07-28.

#### R16 — Breiman (2001), “Random Forests”

- Author/venue: Leo Breiman; *Machine Learning* 45, 5-32.
- DOI/arXiv: `10.1023/A:1010933404324`; no arXiv ID.
- URL: https://doi.org/10.1023/A:1010933404324.
- Difficulty/relevance: intermediate; randomized tree ensembles, strength, correlation, variable importance.
- Prerequisites/access: decision trees, bagging, probability; publisher article is openly accessible.
- Verification: verified via Crossref/Springer metadata; confidence `0.99`; accessed 2026-07-28.

### D. Modern papers and responsible extensions (5)

#### R17 — Chen and Guestrin (2016), “XGBoost: A Scalable Tree Boosting System”

- Authors/venue: Tianqi Chen; Carlos Guestrin; *Proceedings of the 22nd ACM SIGKDD*, 785-794.
- DOI/arXiv: `10.1145/2939672.2939785`; arXiv `1603.02754`.
- URL: https://doi.org/10.1145/2939672.2939785.
- Difficulty/relevance: intermediate-to-advanced; regularized boosting, sparsity handling, approximate split finding, systems design.
- Prerequisites/access: trees, gradient boosting, optimization; paid/ACM access conditions vary, arXiv preprint free.
- Verification: verified via Crossref/ACM metadata; confidence `0.99`; accessed 2026-07-28.

#### R18 — Ribeiro, Singh, and Guestrin (2016), “‘Why Should I Trust You?’: Explaining the Predictions of Any Classifier”

- Authors/venue: Marco Tulio Ribeiro; Sameer Singh; Carlos Guestrin; *Proceedings of the 22nd ACM SIGKDD*, 1135-1144.
- DOI/arXiv: `10.1145/2939672.2939778`; arXiv `1602.04938`.
- URL: https://doi.org/10.1145/2939672.2939778.
- Difficulty/relevance: intermediate; local surrogate explanations and their assumptions.
- Prerequisites/access: classification, local models, sampling; ACM conditions vary, arXiv preprint free.
- Verification: verified via Crossref/ACM metadata; confidence `0.99`; accessed 2026-07-28.

#### R19 — Lundberg and Lee (2017), “A Unified Approach to Interpreting Model Predictions”

- Authors/venue: Scott M. Lundberg; Su-In Lee; *Advances in Neural Information Processing Systems 30*.
- DOI/arXiv: no DOI asserted; arXiv `1705.07874`.
- URL: https://papers.nips.cc/paper/2017/hash/8a20a8621978632d76c43dfd28b67767-Abstract.html.
- Difficulty/relevance: advanced; additive feature attribution and SHAP.
- Prerequisites/access: conditional expectation, cooperative-game attribution, regression; free official proceedings.
- Verification: verified on official NeurIPS proceedings; confidence `0.99`; accessed 2026-07-28.

#### R20 — Kapoor and Narayanan (2023), “Leakage and the Reproducibility Crisis in Machine-Learning-Based Science”

- Authors/venue: Sayash Kapoor; Arvind Narayanan; *Patterns* 4(9), 100804.
- DOI/arXiv: `10.1016/j.patter.2023.100804`; arXiv `2207.07048`.
- URL: https://doi.org/10.1016/j.patter.2023.100804.
- Difficulty/relevance: intermediate; leakage taxonomy, reproducibility, and evaluation design.
- Prerequisites/access: workflow and model evaluation; open access.
- Verification: verified via Crossref/Cell Press metadata; confidence `0.99`; accessed 2026-07-28.

#### R21 — Mitchell et al. (2019), “Model Cards for Model Reporting”

- Authors/venue: Margaret Mitchell; Simone Wu; Andrew Zaldivar; Parker Barnes; Lucy Vasserman; Ben Hutchinson; Elena Spitzer; Inioluwa Deborah Raji; Timnit Gebru; *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 220-229.
- DOI/arXiv: `10.1145/3287560.3287596`; arXiv `1810.03993`.
- URL: https://doi.org/10.1145/3287560.3287596.
- Difficulty/relevance: beginner-to-intermediate; structured reporting of intended use, evaluation, limitations, and ethical considerations.
- Prerequisites/access: evaluation metrics and stakeholder analysis; ACM conditions vary, arXiv preprint free.
- Verification: verified via Crossref/ACM metadata; confidence `0.99`; accessed 2026-07-28.

### E. Surveys and tutorials (3)

#### R22 — Domingos (2012), “A Few Useful Things to Know about Machine Learning”

- Author/venue: Pedro Domingos; *Communications of the ACM* 55(10), 78-87.
- DOI/arXiv: `10.1145/2347736.2347755`; no arXiv ID asserted.
- URL: https://doi.org/10.1145/2347736.2347755.
- Difficulty/relevance: beginner-to-intermediate tutorial; generalization, representation, overfitting, dimensionality, and practical reasoning.
- Prerequisites/access: introductory ML; ACM access conditions vary, author versions may be available.
- Verification: verified via Crossref/ACM metadata; confidence `0.99`; accessed 2026-07-28.

#### R23 — Kotsiantis, Zaharakis, and Pintelas (2007), “Machine Learning: A Review of Classification and Combining Techniques”

- Authors/venue: S. B. Kotsiantis; I. D. Zaharakis; P. E. Pintelas; *Artificial Intelligence Review* 26, 159-190.
- DOI/arXiv: `10.1007/s10462-007-9052-3`; no arXiv ID.
- URL: https://doi.org/10.1007/s10462-007-9052-3.
- Difficulty/relevance: intermediate review; classification families and combining methods.
- Prerequisites/access: probability and basic classification; paid/subscription, metadata/abstract free.
- Verification: verified via Crossref/Springer metadata; confidence `0.98`; accessed 2026-07-28.

#### R24 — von Luxburg (2007), “A Tutorial on Spectral Clustering”

- Author/venue: Ulrike von Luxburg; *Statistics and Computing* 17, 395-416.
- DOI/arXiv: `10.1007/s11222-007-9033-z`; arXiv `0711.0189`.
- URL: https://doi.org/10.1007/s11222-007-9033-z.
- Difficulty/relevance: advanced tutorial; graph Laplacians, clustering objectives, and spectral algorithms.
- Prerequisites/access: linear algebra, graphs, clustering; publisher access conditions vary, arXiv preprint free.
- Verification: verified via Crossref/Springer metadata; confidence `0.99`; accessed 2026-07-28.

### F. Applied and implementation papers (2)

#### R25 — Pedregosa et al. (2011), “Scikit-learn: Machine Learning in Python”

- Authors/venue: Fabian Pedregosa; Gaël Varoquaux; Alexandre Gramfort; Vincent Michel; Bertrand Thirion; Olivier Grisel; Mathieu Blondel; Peter Prettenhofer; Ron Weiss; Vincent Dubourg; Jake VanderPlas; Alexandre Passos; David Cournapeau; Matthieu Brucher; Matthieu Perrot; Édouard Duchesnay; *Journal of Machine Learning Research* 12(85), 2825-2830.
- DOI/arXiv: no DOI listed by JMLR.
- URL: https://www.jmlr.org/papers/v12/pedregosa11a.html.
- Difficulty/relevance: beginner-to-intermediate; consistent implementations of the course's core model families.
- Prerequisites/access: Python, NumPy, introductory ML; free.
- Verification: verified on official JMLR page; confidence `0.99`; accessed 2026-07-28.

#### R26 — Sculley et al. (2015), “Hidden Technical Debt in Machine Learning Systems”

- Authors/venue: D. Sculley; Gary Holt; Daniel Golovin; Eugene Davydov; Todd Phillips; Dietmar Ebner; Vinay Chaudhary; Michael Young; Jean-François Crespo; Dan Dennison; *Advances in Neural Information Processing Systems 28*.
- DOI/arXiv: no DOI asserted; no canonical arXiv ID used here.
- URL: https://papers.nips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html.
- Difficulty/relevance: intermediate applied reading; system entanglement, data dependencies, feedback, monitoring, and maintenance.
- Prerequisites/access: workflow and software-engineering basics; free official proceedings.
- Verification: verified on official NeurIPS proceedings; confidence `0.99`; accessed 2026-07-28.

## 9. Curated paper reading path

The sequence meets the target categories: 4 foundational, 6 established, 5 modern, 3 survey/tutorial, and 2 applied papers.

### Stage 1 — Foundational (4)

1. R07 Fisher after Chapter 4: rewrite the discriminant construction in modern notation and identify historical assumptions.
2. R08 Rosenblatt after Chapter 4: connect updates to linear separability and note what the paper does and does not establish.
3. R09 Cover-Hart after Chapter 7: trace asymptotic/error assumptions before running finite-sample experiments.
4. R10 MacQueen after Chapter 10: compare the historical formulation with modern Lloyd-style implementation.

### Stage 2 — Established algorithms (6)

5. R11 Dempster-Laird-Rubin after Chapter 11: derive the lower-bound/expectation logic used by GMM EM.
6. R12 Quinlan after Chapter 6: connect information-based splits, recursion, and complexity control.
7. R13 Cortes-Vapnik after Chapter 8: map margin, slack, dual coefficients, and kernels.
8. R14 Breiman bagging after Chapter 9: test instability and variance reduction.
9. R15 Freund-Schapire after Chapter 9: follow the weight update and decision-theoretic framing.
10. R16 Breiman random forests after Chapter 9: distinguish empirical claims from common folklore about importance.

### Stage 3 — Modern and responsible extensions (5)

11. R17 XGBoost: connect objective regularization and split approximation to system design.
12. R18 LIME: test locality/kernel/surrogate sensitivity rather than treating an explanation as ground truth.
13. R19 SHAP: distinguish theoretical properties of a chosen value function from causal interpretation.
14. R20 leakage: audit split dependence, preprocessing, temporal structure, and duplicate samples.
15. R21 model cards: turn Chapter 12 evaluation into a bounded, stakeholder-aware report.

### Stage 4 — Surveys/tutorials (3)

16. R22 Domingos before the cumulative review: critique each maxim with examples and boundary conditions.
17. R23 Kotsiantis et al. after Chapters 4-9: use as a taxonomy, then verify dated claims against primary papers.
18. R24 von Luxburg after Chapter 10: treat spectral clustering as a supplementary contrast to k-means.

### Stage 5 — Applied implementation (2)

19. R25 Pedregosa et al.: connect mathematical estimators to a tested API and reproducible pipelines.
20. R26 Sculley et al.: connect model choice/evaluation to long-term system cost and feedback.

### Chapter reading matrix

| Chapter | Foundational/established | Modern | Survey/tutorial | Implementation/applied |
| --- | --- | --- | --- | --- |
| 1 | R07 | R20-R21 | R22 | R25-R26 |
| 2 | R07, R11 | R20 | R22 | R25 |
| 3 | R07 | R20 | R22 | R25 |
| 4 | R07-R08 | R18-R19 | R23 | R25 |
| 5 | R13 | R18-R19 | R22 | R25 |
| 6 | R12, R14, R16 | R17, R19 | R23 | R25 |
| 7 | R09 | R18 | R22 | R25 |
| 8 | R13 | R18-R19 | R23 | R25 |
| 9 | R14-R16 | R17, R19 | R23 | R25-R26 |
| 10 | R10 | R20 | R24 | R25 |
| 11 | R11 | R20 | R22 | R25 |
| 12 | R14-R16 | R18-R21 | R22-R24 | R25-R26 |

An authoritative book/course may replace a forced “foundational paper” where no historically meaningful paper aligns with a chapter. Paper claims, educational interpretation, and reproduction observations must be visually separated.

## 10. Proposed projects

All projects are non-official educational additions.

The six specifications are alternatives. The 180-hour route budgets **24 hours for one selected project's base requirements**; extension ideas are optional and excluded from that total.

### Beginner 1 — Linear Regression from First Principles

- **Classification:** Official-topic implementation + Supplementary validation.
- **Problem statement:** recover linear and ridge coefficients reliably when controlled noise, collinearity, and outliers challenge a naive least-squares implementation.
- **Learning objectives:** derive the objective and solution assumptions; implement fit/predict interfaces; compare normal-equation, QR/library least-squares, and ridge solutions; connect conditioning and residual evidence to numerical reliability.
- **Prerequisites:** Chapter 3; vectors, matrices, least squares, basic NumPy, pytest, and train/test reasoning.
- **Architecture:** typed NumPy package, pytest, Matplotlib; compare normal equation, QR/library least squares, and ridge.
- **Dataset:** versioned seeded synthetic generator with declared coefficient vector, controllable noise, collinearity, and outlier parameters.
- **Milestones:** data generator; fit/predict API; analytic tests; conditioning sweep; residual report.
- **Implementation requirements:** Python 3.12+, type hints, deterministic seed, shape and finite-value validation, explicit failure messages, complexity notes, and expected-output examples.
- **Evaluation metrics:** coefficient error against ground truth, held-out RMSE, condition number, residual diagnostics, runtime, and agreement with the library solution within declared tolerances.
- **Expected deliverables:** source package, tests, environment lock, notebook, generated-data manifest, CLI example, and two-page analysis.
- **Testing requirements:** noiseless analytic recovery; rank-deficient and ill-conditioned matrices; invalid shapes/non-finite values; seed repeatability; ridge-limit behavior; library-agreement tolerance.
- **Extension ideas:** heteroskedastic noise, robust regression, iterative solvers, confidence intervals, and continuous-integration execution.
- **Deployment guidance:** package and local CLI demonstration only; do not expose it as a decision service.
- **Ethical considerations:** use synthetic data only and state that numerical recovery does not establish causal or real-world validity.
- **Marking rubric:** correctness 40%, tests 20%, numerical reasoning 25%, communication 15%.

### Beginner 2 — Naive Bayes Text Classifier

- **Classification:** Official-topic implementation + Industry application.
- **Problem statement:** build a leakage-safe multinomial naive Bayes classifier for a small text task while making smoothing, vocabulary, provenance, and domain limitations explicit.
- **Learning objectives:** derive posterior scoring in log space; implement vocabulary and likelihood estimation; compare against scikit-learn; evaluate discrimination, calibration, and language/domain failure modes.
- **Prerequisites:** Chapter 2 and Chapter 12; conditional probability, logarithms, sparse counts, basic text preprocessing, and classification metrics.
- **Architecture:** tokenizer, vocabulary, multinomial naive Bayes, scikit-learn baseline, deterministic split.
- **Dataset:** a small openly licensed corpus selected only after licence/provenance review, or a documented synthetic corpus with generator and checksum.
- **Milestones:** leakage-safe preprocessing; smoothing; log-probability implementation; confusion/calibration analysis.
- **Implementation requirements:** Python 3.12+, type hints, deterministic split, training-only vocabulary fitting, configurable smoothing, log-space computation, input validation, error handling, and dependency lock.
- **Evaluation metrics:** macro/micro F1, per-class precision/recall, log loss, calibration error, confusion matrix, vocabulary coverage, and baseline agreement.
- **Expected deliverables:** reusable pipeline, tests, experiment manifest, notebook/report, corpus licence record, and model card.
- **Testing requirements:** empty documents; unseen tokens; zero class/token counts; invalid labels; log-underflow resistance; deterministic split; training-only vocabulary assertion; baseline agreement on a toy corpus.
- **Extension ideas:** Bernoulli naive Bayes, character features, prior-shift correction, calibration, drift checks, and multilingual error analysis.
- **Deployment guidance:** local read-only demonstration only; no public text collection or production moderation decision.
- **Ethical considerations:** remove personal text, respect corpus licence and consent context, and document language, dialect, class, and domain bias.
- **Marking rubric:** derivation 25%, implementation 30%, evaluation 25%, provenance and limitations 20%.

### Intermediate 1 — Instance Methods versus SVMs

- **Classification:** Official-topic comparison.
- **Problem statement:** determine how dimension, overlap, feature scale, class imbalance, and sample size affect k-NN, linear SVM, and kernel SVM behavior.
- **Learning objectives:** implement vectorized k-NN; design leakage-safe nested validation; explain metric, margin, and kernel trade-offs; measure predictive and computational scaling.
- **Prerequisites:** Chapters 7, 8, and 12; distance metrics, feature scaling, cross-validation, classification metrics, and basic complexity analysis.
- **Architecture:** scikit-learn pipelines plus from-scratch k-NN; nested validation.
- **Dataset:** versioned seeded synthetic classification generators spanning controlled dimension, overlap, scale, imbalance, and sample-size grids.
- **Milestones:** preregister hypotheses; scaling ablation; metric/kernel search; runtime/memory profiling.
- **Implementation requirements:** Python 3.12+, typed vectorized k-NN, preprocessing inside pipelines, deterministic nested splits, bounded search grids, resource measurement, validation, and expected-output example.
- **Evaluation metrics:** balanced accuracy, macro F1, ROC-AUC where valid, calibration, fit/predict latency, peak memory, and sensitivity across experimental factors.
- **Expected deliverables:** benchmark package, tests, experiment manifest, result table, plots, environment lock, and reproducible comparison report.
- **Testing requirements:** hand-calculated distance/neighbor oracle; scaling confined to training folds; tie handling; zero-variance features; invalid `k`; deterministic nested CV; no train/test overlap.
- **Extension ideas:** approximate nearest neighbours, multiclass decomposition, alternative kernels, probability calibration, and cost-sensitive evaluation.
- **Deployment guidance:** publish a static benchmark report or local CLI; do not present one synthetic winner as a production recommendation.
- **Ethical considerations:** make no real-person claims and explain that synthetic findings do not establish universal superiority or fairness.
- **Marking rubric:** method 30%, leakage control 25%, analysis 25%, tests 20%.

### Intermediate 2 — Decision Tree and MDL Laboratory

- **Classification:** Official-topic implementation + Supplementary complexity study.
- **Problem statement:** build a small classification tree and test how depth, leaf penalties, pruning, and explicit description-length proxies trade fit against complexity.
- **Learning objectives:** implement deterministic splitting and prediction; relate impurity reduction to tree construction; state MDL proxy assumptions; compare complexity controls and instability across resamples.
- **Prerequisites:** Chapter 6; entropy/impurity, recursion, categorical labels, validation, and basic coding-length intuition.
- **Architecture:** typed Python tree nodes, impurity/split module, pruning/penalty experiment, library baseline.
- **Dataset:** seeded synthetic classification datasets with known rules, noise, redundant features, class imbalance, and resampling manifests.
- **Milestones:** deterministic splitter; edge-case tests; pruning; MDL assumptions; stability across resamples.
- **Implementation requirements:** Python 3.12+, typed nodes, deterministic tie-breaking, configurable stopping/pruning, explicit description-length proxy, input validation, complexity notes, and library comparison.
- **Evaluation metrics:** held-out error, node/leaf count, depth, description-length proxy, resample stability, runtime, and agreement with hand-worked split examples.
- **Expected deliverables:** tested implementation, experiment manifest, complexity curves, tree visualization, library comparison, and written critique.
- **Testing requirements:** pure node; constant feature; tied split; minimum leaf; invalid labels/shapes; pruning monotonicity checks; deterministic resampling; hand-calculated impurity oracle.
- **Extension ideas:** regression trees, cost-complexity pruning, missing-value strategies, surrogate splits, and minimum-description-length sensitivity analysis.
- **Deployment guidance:** local educational package and static report only; avoid decision deployment without data and risk review.
- **Ethical considerations:** do not treat impurity importance as causal evidence; examine instability before interpreting paths or feature rankings.
- **Marking rubric:** correctness 35%, MDL reasoning 25%, experiments 25%, clarity 15%.

### Advanced — Ensemble Reliability and Interpretation Audit

- **Classification:** Official ensemble topic + Industry application.
- **Problem statement:** audit bagging, random forests, AdaBoost, and gradient boosting under noise, imbalance, missingness, subgroup shift, and explanation perturbations.
- **Learning objectives:** design nested evaluation for ensembles; quantify calibration and slice uncertainty; compare predictive and computational trade-offs; test whether feature explanations are stable enough for their stated use.
- **Prerequisites:** Chapters 9 and 12; resampling, boosting, cross-validation, calibration, subgroup metrics, uncertainty intervals, and model-interpretation limits.
- **Architecture:** versioned pipeline, nested CV, calibration, slice metrics, permutation importance, LIME/SHAP sensitivity tests.
- **Dataset:** versioned seeded synthetic generator with controlled noise, imbalance, missingness, subgroup membership, and shift scenarios; real data remains optional pending licence and risk review.
- **Milestones:** data cards; baselines; uncertainty intervals; explanation perturbation tests; model card.
- **Implementation requirements:** Python 3.12+, locked environment, deterministic outer/inner splits, preprocessing inside pipelines, calibrated predictions, bounded explanation sampling, resource logs, and failure-safe configuration validation.
- **Evaluation metrics:** macro F1/ROC-AUC where valid, log loss, calibration error, slice gaps with intervals, shift degradation, explanation rank stability, latency, memory, and training cost.
- **Expected deliverables:** repository, tests, reproducibility manifest, data/model cards, uncertainty tables, explanation sensitivity evidence, and audit report.
- **Testing requirements:** split disjointness; preprocessing fit only on training folds; deterministic scenarios; missing-value path; metric edge cases; calibration invariants; explanation perturbation repeatability.
- **Extension ideas:** cost-sensitive learning, conformal prediction, monotonic constraints, online monitoring simulation, and explanation methods beyond LIME/SHAP.
- **Deployment guidance:** isolated audit environment only; no high-stakes deployment or automated action.
- **Ethical considerations:** explanation methods are diagnostics rather than causal proof; report subgroup uncertainty and avoid ranking people from synthetic or proxy attributes.
- **Marking rubric:** experimental validity 30%, evaluation 25%, interpretation caution 20%, engineering 15%, ethics 10%.

### Research-oriented — Leakage and Reproducibility Replication Audit

- **Classification:** Industry application + Advanced extension.
- **Problem statement:** replicate one open ML study or benchmark, preregister a leakage checklist, and compare the reported protocol with corrected split and preprocessing alternatives.
- **Learning objectives:** distinguish exact, partial, and conceptual reproduction; threat-model leakage; reconstruct provenance; measure how corrected protocols change conclusions; report negative and ambiguous evidence responsibly.
- **Prerequisites:** Chapters 1 and 12; experimental design, statistical comparison, Git, environment locking/containers, dataset licensing, checksums, and research-ethics basics.
- **Architecture:** immutable raw-data checksums, split manifest, experiment tracker, container/lockfile, statistical comparison.
- **Dataset:** one open study or benchmark with accessible code/data selected only after identity, licence, provenance, sensitive-data, and split-suitability review.
- **Milestones:** study selection and licence check; protocol reconstruction; leakage threat model; exact/partial reproduction; corrected analysis; limitations.
- **Implementation requirements:** immutable raw inputs, content hashes, explicit split/preprocessing manifest, pinned environment, deterministic seeds where valid, experiment tracking, input validation, and no silent deviation from the source protocol.
- **Evaluation metrics:** reconstruction fidelity, reproduced-versus-reported effect difference, leakage impact, uncertainty, run-to-run variance, environment reconstruction success, runtime, and evidence completeness.
- **Expected deliverables:** code, tests, licence/provenance record, evidence log, immutable manifests, negative results, corrected analysis, and paper-style report.
- **Testing requirements:** checksum and manifest validation; split disjointness; preprocessing fit only on training data; deterministic rerun where applicable; environment rebuild; duplicate-run detection; analysis sanity checks.
- **Extension ideas:** multi-study replication, adversarial leakage injection, registered-report format, alternative benchmark, and meta-analysis of protocol sensitivity.
- **Deployment guidance:** archive a reproducibility package or container; do not deploy the reproduced model as a service.
- **Ethical considerations:** do not accuse authors beyond evidence; distinguish error, ambiguity, and inference; protect sensitive records and exclude restricted data.
- **Marking rubric:** fidelity 25%, leakage analysis 25%, reproducibility 20%, statistics 15%, transparency and ethics 15%.

## 11. Validation gates

The plan must pass before drafting:

- [ ] official title, placement, brochure pages, and source hash match the curriculum record;
- [ ] all 21 atomic official-topic rows map to at least one chapter;
- [ ] proposed chapters are not described as official units;
- [ ] every addition is labeled Prerequisite, Supplementary, Advanced extension, or Industry application;
- [ ] chapter count is 12 and total study estimate is 180 hours;
- [ ] prerequisite and knowledge-graph statements are marked non-official;
- [ ] graph endpoints exist, edge types are allowed, and strict prerequisite edges are acyclic;
- [ ] 26 resource records contain author/organisation, year, type, URL, identifier when available, venue, access date, difficulty, relevance, prerequisites, free/paid status, confidence, and verification status;
- [ ] DOI, arXiv, proceedings, and journal identifiers match titles;
- [ ] paper path contains 4 foundational, 6 established, 5 modern, 3 survey/tutorial, and 2 applied papers;
- [ ] projects contain two beginner, two intermediate, one advanced, and one research-oriented idea;
- [ ] evaluation chapters coordinate with Introduction to Statistical Methods rather than duplicating formal inference;
- [ ] no current benchmark or state-of-the-art claim is published without fresh verification;
- [ ] no full chapter is generated until Subject Lead, citation, mathematics, code, and editorial planning reviews pass.

## 12. Open issues and recommended next tasks

### Open issues

1. The brochure gives topic coverage but no official numbered units, outcomes, hours, tools, or assessment scheme.
2. “Non-linear models” is broad; the selected basis/kernel treatment needs academic-review confirmation.
3. Scope boundaries with Introduction to Statistical Methods and Mathematical Foundations require joint review.
4. Project datasets remain candidates until licence, documentation, sensitive attributes, and split suitability are checked.
5. Paywalled historical sources require lawful access or author/open versions for full-paper educational notes.

### Recommended next tasks

1. Obtain an official course handout/LMS unit list and reconcile chapter order and assessment scope.
2. Run a three-lead cross-review with Mathematical Foundations and Statistical Methods.
3. Freeze notation for loss/risk, priors/posteriors, class probabilities, matrices, and expectations.
4. Generate BibTeX and APA displays from verified records and rerun DOI/title validation.
5. Approve detailed Chapter 1 and Chapter 2 specifications before long-form drafting.
6. Build the subject page with official-topic coverage and provisional chapter status visibly separated.
