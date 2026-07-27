# Introduction to Statistical Methods - Subject Plan

## Source boundary and planning status

- **Official fact:** `Introduction to Statistical Methods` is a compulsory Semester 1 subject in the BITS Pilani WILP M.Tech. Artificial Intelligence and Machine Learning brochure, physical PDF page 12 (printed page 10).
- **Official limitation:** the brochure provides no topic-level description, numbered units, subject-specific prerequisites, learning outcomes, assessment weights, or prescribed texts for this subject.
- **Planning rule:** every proposed topic below is labeled **Prerequisite**, **Supplementary**, **Advanced extension**, or **Industry application**. These labels describe an academically justified learning plan around the verified course title; they do not claim university approval.
- **Full-chapter generation status:** blocked pending plan approval and, for “official syllabus” claims, a detailed BITS course handout.

## Subject intent

Build the statistical reasoning needed to design, analyse, and communicate empirical work in AI and machine learning. The plan emphasizes assumptions, uncertainty, estimands, effect sizes, reproducibility, and the difference between exploratory and confirmatory analysis. Mathematical Foundations for Machine Learning owns the full development of probability axioms, conditional probability, Bayes' rule, random variables, common distributions, expectation, variance, covariance, and transformations. This subject begins with a short readiness diagnostic and cross-linked bridge, then owns sampling and study design, estimation, inference, testing, resampling, regression, Bayesian statistical modelling, diagnostics, robustness, and decision practice.

## Proposed learning outcomes

After completing this proposed plan, a learner should be able to:

1. Translate an applied question into a population, sample, estimand, data-generating assumptions, and analysis plan.
2. Summarize distributions robustly and identify measurement, sampling, leakage, censoring, and missingness risks.
3. Apply probability and random-variable foundations from Mathematical Foundations as prerequisites, using a diagnostic to identify remediation needs rather than repeating their full derivations.
4. Explain sampling distributions, the law of large numbers, and central-limit reasoning specifically as foundations for estimators, standard errors, intervals, and tests.
5. Derive and compare method-of-moments, maximum-likelihood, and basic Bayesian estimators.
6. Distinguish estimator bias, variance, consistency, efficiency, standard error, confidence interval, and posterior uncertainty.
7. Formulate hypothesis tests, calculate power, interpret p-values correctly, and report effect sizes and uncertainty.
8. Apply parametric, categorical, rank-based, resampling, and multiple-testing methods with explicit assumptions.
9. Fit and diagnose linear models and ANOVA formulations, including interactions and uncertainty on predictions.
10. Use bootstrap, permutation, and Monte Carlo methods reproducibly.
11. Recognize missing-data mechanisms, outlier sensitivity, model misspecification, multiplicity, selective reporting, and causal overclaiming.
12. Produce a reproducible statistical report whose claims are auditable from data, code, assumptions, and citations.

## Prerequisite map

| Need | Expected entry level | Remediation | Unlocks |
| --- | --- | --- | --- |
| Algebra and functions | Rearrangement, logs, exponentials | Prerequisite Chapters 2-3 practice | Distributions, likelihood |
| Single-variable calculus | Derivatives and basic integrals | Mathematical Foundations cross-link | Density normalization, expectation, MLE |
| Linear algebra | Vectors, matrices, transpose, inverse intuition | Mathematical Foundations cross-link | Covariance matrices, regression |
| Programming | Python functions, arrays, loops, plotting | NumPy/pandas micro-lab | Simulation and reproducibility |
| Data literacy | Rows, variables, types, units | Prerequisite Chapter 1 | Study design and EDA |
| Probability and random variables | Required from Mathematical Foundations Chapters 8-9 | Short readiness diagnostic and cross-linked remediation; no duplicate full derivation here | Sampling distributions and all inferential chapters |

Recommended cross-subject order:

`Mathematical Foundations Chapters 8-9: probability and random variables` -> `Statistical Methods Chapter 2 diagnostic bridge` -> `Statistical Methods Chapters 3-11 inference and modelling` -> `Machine Learning: Bayesian and linear models`.

## Cross-subject scope ownership

| Concept | Primary owner | Statistical Methods treatment |
| --- | --- | --- |
| Probability axioms, events, conditional probability, independence, Bayes' rule | Mathematical Foundations Chapter 8 | Diagnostic questions, notation alignment, and direct cross-link only |
| PMF/PDF/CDF, expectation, variance, covariance, common distributions, transformations | Mathematical Foundations Chapter 9 | Brief reference table and assumed-prerequisite exercises only |
| LLN and CLT as probability limit results | Mathematical Foundations Chapter 9 | Cross-link to derivations; focus here on consequences for estimator behaviour and approximation validity |
| Sampling frames, designs, bias, estimands, sampling distributions, standard error | Statistical Methods | Full treatment |
| Estimation, likelihood, intervals, tests, power, resampling, regression, Bayesian modelling, diagnostics | Statistical Methods | Full treatment |

This boundary prevents two independently generated books from repeating the same foundational derivations.

## Proposed 11-chapter outline

No chapter below is an official BITS unit.

| Ch. | Label | Proposed title and coverage | Practical evidence | Theory | Lab | Assessment | Selected project | Total |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | **Prerequisite** | Statistical thinking, populations, samples, variables, estimands, measurement scales, observational versus experimental data, sampling bias, leakage, data provenance, exploratory versus confirmatory work | Audit a flawed AI dataset and write an estimand card | 7 | 2 | 2 | 0 | 11 |
| 2 | **Prerequisite** | Probability readiness bridge: diagnostic coverage of Mathematical Foundations Chapters 8-9; notation alignment; targeted remediation links; no independent re-derivation of probability axioms or distribution theory | Diagnose prerequisite gaps and reproduce one referenced simulation | 4 | 2 | 1 | 0 | 7 |
| 3 | **Supplementary** | Sampling designs and sampling distributions: frames, probability sampling, IID/exchangeability assumptions, statistics, LLN/CLT consequences for inference, standard errors, design effects, finite-sample cautions | Coverage simulation under normal, skewed, clustered, and heavy-tailed data | 8 | 3 | 2 | 0 | 13 |
| 4 | **Supplementary** | Estimation and likelihood: estimands, method of moments, likelihood/log-likelihood, MLE derivations, bias, variance, consistency, efficiency, Fisher information intuition | Derive and implement Bernoulli, Poisson, and normal estimators | 10 | 4 | 3 | 0 | 17 |
| 5 | **Supplementary** | Interval estimation and resampling: pivotal intervals, confidence semantics, bootstrap principle, percentile/basic bootstrap, permutation logic, Monte Carlo error | From-scratch bootstrap and SciPy comparison with tested reusable functions | 9 | 5 | 3 | 0 | 17 |
| 6 | **Supplementary** | Hypothesis testing and decisions: null/alternative, test statistic, Type I/II error, p-value, effect size, power, sample-size planning, practical versus statistical significance | Power curves and preregistered analysis simulation | 10 | 4 | 3 | 0 | 17 |
| 7 | **Supplementary** | Categorical, nonparametric, and multiple inference: contingency tables, chi-square, exact tests, rank methods, goodness of fit, family-wise error, false discovery rate | Compare parametric and permutation/rank tests; reproduce Benjamini-Hochberg | 8 | 4 | 3 | 0 | 15 |
| 8 | **Supplementary** | Linear models and ANOVA: least squares, assumptions, coefficient inference, prediction intervals, contrasts, interactions, diagnostics, heteroskedasticity awareness | Statsmodels analysis with residual and influence diagnostics | 11 | 5 | 4 | 5 | 25 |
| 9 | **Advanced extension** | Bayesian statistical modelling and computation: prior, likelihood, posterior, conjugacy, posterior predictive checks, credible intervals, Monte Carlo/MCMC foundations, convergence diagnostics | Beta-binomial inference from scratch and a small PyMC/Stan-style workflow | 10 | 5 | 3 | 5 | 23 |
| 10 | **Advanced extension** | Robustness, missing data, and causal awareness: MCAR/MAR/MNAR, complete-case limits, imputation principles, robust summaries, sensitivity analysis, confounding, association versus intervention | Missingness stress test and sensitivity report | 9 | 4 | 3 | 5 | 21 |
| 11 | **Industry application** | Production experimentation and statistical governance: A/B tests, sequential peeking risk, guardrails, sample-ratio mismatch, monitoring drift, reproducible reports, privacy, fairness, and decision logs | Deploy a tested FastAPI statistics service plus reproducible model card | 9 | 4 | 3 | 5 | 21 |

### Additive workload model

Every hour is counted exactly once:

| Activity | Hours |
| --- | ---: |
| Theory, reading, and derivation | 95 |
| Guided Python labs | 42 |
| Assignments and quizzes | 30 |
| Two selected project increments integrated into Chapters 8-11 | 20 |
| **Full 11-chapter route** | **187** |

The recommended semester core is Chapters 1-8, totaling **122 hours** under the same additive columns. Chapters 9-11 are a 65-hour advanced/industry extension. The six project specifications are options; the 20 project hours cover two selected project increments, not completion of all six projects.

## Knowledge graph

Relationship vocabulary follows the platform contract.

```text
measurement -> prerequisite_of -> descriptive_statistics
mathematical_foundations_probability -> prerequisite_of -> probability_readiness_diagnostic
probability_readiness_diagnostic -> prerequisite_of -> sampling_distributions
sampling_distributions -> prerequisite_of -> estimation
likelihood -> implemented_by -> maximum_likelihood_estimation
estimation -> prerequisite_of -> interval_estimation
interval_estimation -> related_to -> hypothesis_testing
resampling -> alternative_to -> asymptotic_approximation
hypothesis_testing -> evaluated_by -> type_i_error_power_effect_size
multiple_testing -> implemented_by -> false_discovery_rate_control
linear_algebra -> used_by -> linear_models
linear_models -> extension_of -> estimation
bayes_rule -> prerequisite_of -> bayesian_inference
monte_carlo -> implemented_by -> bootstrap_and_mcmc
missing_data_mechanism -> prerequisite_of -> imputation_strategy
study_design -> prerequisite_of -> causal_interpretation
statistical_methods -> used_by -> machine_learning
uncertainty_quantification -> used_by -> model_evaluation
reproducibility -> evaluated_by -> code_data_environment_audit
privacy_and_fairness -> applied_in -> production_experimentation
```

Cross-subject links:

- Mathematical Foundations -> owns probability notation/axioms, random variables, distributions, expectation, variance/covariance, transformations, calculus, and matrix algebra; this plan cross-links rather than repeats those foundations.
- Machine Learning -> Bayesian learning, model evaluation, regression, uncertainty, cross-validation.
- Artificial and Computational Intelligence -> evidence, uncertainty, decision making.
- Deep Neural Networks -> experimental design, optimization variability, calibration, ablation studies.
- MLOps -> drift monitoring, experiment tracking, reproducibility, governance.

## Research questions for source discovery

Queries are designed for OpenAlex, Crossref, Semantic Scholar, publisher sites, and official university repositories:

1. `"statistical inference" likelihood estimation graduate lecture notes site:.edu`
2. `"sampling distributions" central limit theorem simulation statistics education`
3. `"confidence interval" coverage simulation skewed heavy tailed`
4. `"bootstrap methods" review reproducibility DOI`
5. `"permutation tests" exact randomization inference tutorial`
6. `"p-value" interpretation effect size confidence interval ASA`
7. `"false discovery rate" independent dependent tests review`
8. `"power analysis" type S type M error`
9. `"linear model diagnostics" heteroskedasticity influence authoritative`
10. `"missing data" MCAR MAR MNAR sensitivity analysis review`
11. `"Bayesian workflow" posterior predictive checks convergence diagnostics`
12. `"MCMC convergence" multiple chains R-hat original paper`
13. `"A/B testing" sample ratio mismatch sequential testing`
14. `"reproducible statistics" preregistration open research standards`
15. `"statistical fairness" subgroup uncertainty multiple comparisons`
16. `"differential privacy" statistical inference uncertainty`

## Verified authoritative resources

Access date for every item: **2026-07-28**. “Verified” means the metadata and destination were checked during this planning run; it does not imply endorsement of every claim.

Stable resource IDs `STAT-R01` through `STAT-R26` correspond in order to numbered entries 1 through 26 below and are recorded in the completion report for source traceability.

### Courses, books, handbooks, and implementation references

1. **Statistics for Applications**; Philippe Rigollet / MIT OpenCourseWare; 2016; university course; MIT Mathematics; [URL](https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/); DOI/arXiv: none; difficulty: postgraduate bridge; relevance: theory, estimation, testing, regression; prerequisites: probability and calculus; access: free; confidence: 0.99; status: verified-official.
2. **STAT 415: Introduction to Mathematical Statistics**; Laura Simon / Pennsylvania State University; current web course, year not stated; university course notes; Penn State STAT ONLINE; [URL](https://online.stat.psu.edu/statprogram/stat415); DOI/arXiv: none; difficulty: advanced undergraduate/postgraduate bridge; relevance: estimation, tests, regression, ANOVA, chi-square, nonparametrics, Bayes; prerequisites: probability sequence equivalent to STAT 414; access: free; confidence: 0.99; status: verified-official.
3. **NIST/SEMATECH Engineering Statistics Handbook**; NIST Statistical Engineering Division and SEMATECH Statistical Methods Group; 2001, updated 2023; government handbook; NIST; [URL](https://www.itl.nist.gov/div898/software/dataplot/handbook.htm); DOI/arXiv: none; difficulty: intermediate; relevance: applied methods, process modelling, design, diagnostics; prerequisites: basic algebra/statistics; access: free; confidence: 0.99; status: verified-official.
4. **OpenIntro Statistics, 4th ed.**; David M. Diez, Mine Çetinkaya-Rundel, Christopher D. Barr; 2019; open textbook; OpenIntro; [URL](https://www.openintro.org/book/os/); DOI/arXiv: none; difficulty: beginner foundation; relevance: accessible data, probability, inference, regression labs; prerequisites: algebra; access: free PDF / paid print; confidence: 0.98; status: verified-author-site.
5. **All of Statistics: A Concise Course in Statistical Inference**; Larry Wasserman; 2004; textbook; Springer Texts in Statistics; [URL](https://link.springer.com/book/10.1007/978-0-387-21736-9); DOI: `10.1007/978-0-387-21736-9`; arXiv: none; difficulty: postgraduate; relevance: primary theory spine, bootstrap, testing, Bayesian inference, regression; prerequisites: calculus and basic linear algebra; access: paid/institutional preview; confidence: 1.00; status: verified-publisher.
6. **An Introduction to Statistical Learning with Applications in Python**; Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani, Jonathan Taylor; 2023; textbook and labs; Springer/author site; [URL](https://www.statlearning.com/); DOI: `10.1007/978-3-031-38747-0`; arXiv: none; difficulty: intermediate; relevance: regression, resampling, model assessment and Python labs; prerequisites: basic statistics and Python; access: free author-hosted PDF / paid print; confidence: 0.99; status: verified-author-site.
7. **Bayesian Data Analysis, 3rd ed.**; Andrew Gelman, John Carlin, Hal Stern, David Dunson, Aki Vehtari, Donald Rubin; 2013; textbook, datasets, demos; CRC Press/author site; [URL](https://sites.stat.columbia.edu/gelman/book/); DOI: `10.1201/b16018`; arXiv: none; difficulty: postgraduate; relevance: Bayesian extension and model checking; prerequisites: probability, calculus, statistical inference; access: free non-commercial author-hosted PDF / paid book; confidence: 0.99; status: verified-author-site.
8. **Statistical functions (`scipy.stats`)**; SciPy community; continuously maintained, documentation viewed as v1.18.0; official software documentation; SciPy; [URL](https://docs.scipy.org/doc/scipy/reference/stats.html); DOI: `10.1038/s41592-019-0686-2` for SciPy 1.0 paper; arXiv: none; difficulty: intermediate; relevance: distributions, tests, resampling, descriptive statistics; prerequisites: Python/NumPy and method assumptions; access: free/open source; confidence: 0.99; status: verified-official-docs.

### Original and interpretive research

9. **On the Mathematical Foundations of Theoretical Statistics**; R. A. Fisher; 1922; original paper; Philosophical Transactions of the Royal Society A; [URL](https://doi.org/10.1098/rsta.1922.0009); DOI: `10.1098/rsta.1922.0009`; arXiv: none; difficulty: advanced; relevance: likelihood, sufficiency, efficiency foundations; prerequisites: calculus and probability; access: publisher-dependent; confidence: 1.00; status: Crossref-verified.
10. **On the Problem of the Most Efficient Tests of Statistical Hypotheses**; Jerzy Neyman, Egon S. Pearson; 1933; original paper; Philosophical Transactions of the Royal Society A; [URL](https://doi.org/10.1098/rsta.1933.0009); DOI: `10.1098/rsta.1933.0009`; arXiv: none; difficulty: advanced; relevance: testing, power, optimal tests; prerequisites: probability and likelihood; access: publisher-dependent; confidence: 1.00; status: Crossref-verified.
11. **Equation of State Calculations by Fast Computing Machines**; Nicholas Metropolis, Arianna W. Rosenbluth, Marshall N. Rosenbluth, Augusta H. Teller, Edward Teller; 1953; original paper; Journal of Chemical Physics; [URL](https://doi.org/10.1063/1.1699114); DOI: `10.1063/1.1699114`; arXiv: none; difficulty: advanced; relevance: Monte Carlo/MCMC foundation; prerequisites: probability and computation; access: publisher-dependent; confidence: 1.00; status: Crossref-verified.
12. **Monte Carlo Sampling Methods Using Markov Chains and Their Applications**; W. K. Hastings; 1970; original paper; Biometrika; [URL](https://doi.org/10.1093/biomet/57.1.97); DOI: `10.1093/biomet/57.1.97`; arXiv: none; difficulty: advanced; relevance: general Metropolis-Hastings sampling; prerequisites: conditional probability and Markov chains; access: publisher-dependent; confidence: 1.00; status: Crossref-verified.
13. **Inference and Missing Data**; Donald B. Rubin; 1976; original paper; Biometrika; [URL](https://doi.org/10.1093/biomet/63.3.581); DOI: `10.1093/biomet/63.3.581`; arXiv: none; difficulty: advanced; relevance: missing-data mechanism framework; prerequisites: likelihood and conditional probability; access: publisher-dependent; confidence: 1.00; status: Crossref-verified.
14. **Bootstrap Methods: Another Look at the Jackknife**; Bradley Efron; 1979; original paper; Annals of Statistics; [URL](https://doi.org/10.1214/aos/1176344552); DOI: `10.1214/aos/1176344552`; arXiv: none; difficulty: advanced; relevance: resampling foundation; prerequisites: sampling distributions and estimation; access: free publisher page/PDF availability; confidence: 1.00; status: Crossref-and-publisher-verified.
15. **Inference from Iterative Simulation Using Multiple Sequences**; Andrew Gelman, Donald B. Rubin; 1992; original paper; Statistical Science; [URL](https://doi.org/10.1214/ss/1177011136); DOI: `10.1214/ss/1177011136`; arXiv: none; difficulty: advanced; relevance: MCMC convergence diagnosis; prerequisites: Bayesian inference and MCMC; access: free publisher page; confidence: 1.00; status: Crossref-verified.
16. **Controlling the False Discovery Rate: A Practical and Powerful Approach to Multiple Testing**; Yoav Benjamini, Yosef Hochberg; 1995; original paper; Journal of the Royal Statistical Society B; [URL](https://doi.org/10.1111/j.2517-6161.1995.tb02031.x); DOI: `10.1111/j.2517-6161.1995.tb02031.x`; arXiv: none; difficulty: advanced; relevance: multiplicity and FDR; prerequisites: hypothesis testing and ordered p-values; access: publisher marks article free; confidence: 1.00; status: Crossref-and-publisher-verified.
17. **Statistical Methods in Psychology Journals: Guidelines and Explanations**; Leland Wilkinson and APA Task Force on Statistical Inference; 1999; guidance paper; American Psychologist; [URL](https://doi.org/10.1037/0003-066X.54.8.594); DOI: `10.1037/0003-066X.54.8.594`; arXiv: none; difficulty: intermediate; relevance: reporting, assumptions, effect sizes, uncertainty; prerequisites: basic inference; access: publisher-dependent; confidence: 1.00; status: Crossref-verified.
18. **Logistic Regression in Rare Events Data**; Gary King, Langche Zeng; 2001; methodological paper; Political Analysis; [URL](https://doi.org/10.1093/oxfordjournals.pan.a004868); DOI: `10.1093/oxfordjournals.pan.a004868`; arXiv: none; difficulty: advanced; relevance: imbalance, bias, applied modelling; prerequisites: logistic regression and MLE; access: publisher-dependent; confidence: 1.00; status: Crossref-verified.
19. **Second Thoughts on the Bootstrap**; Bradley Efron; 2003; review/reflection; Statistical Science; [URL](https://doi.org/10.1214/ss/1063994968); DOI: `10.1214/ss/1063994968`; arXiv: none; difficulty: advanced; relevance: bootstrap strengths, limits, future directions; prerequisites: bootstrap and estimation; access: free publisher PDF; confidence: 1.00; status: Crossref-and-publisher-verified.
20. **Why Most Published Research Findings Are False**; John P. A. Ioannidis; 2005; analytical perspective; PLOS Medicine; [URL](https://doi.org/10.1371/journal.pmed.0020124); DOI: `10.1371/journal.pmed.0020124`; arXiv: none; difficulty: intermediate; relevance: base rates, bias, multiplicity, research reliability; prerequisites: hypothesis testing; access: open access; confidence: 1.00; status: Crossref-verified.
21. **False-Positive Psychology: Undisclosed Flexibility in Data Collection and Analysis Allows Presenting Anything as Significant**; Joseph P. Simmons, Leif D. Nelson, Uri Simonsohn; 2011; experimental/methodological paper; Psychological Science; [URL](https://doi.org/10.1177/0956797611417632); DOI: `10.1177/0956797611417632`; arXiv: none; difficulty: intermediate; relevance: researcher degrees of freedom and preregistration; prerequisites: p-values and experimental design; access: publisher-dependent; confidence: 1.00; status: Crossref-verified.
22. **Beyond Power Calculations: Assessing Type S and Type M Errors**; Andrew Gelman, John Carlin; 2014; methodological paper; Perspectives on Psychological Science; [URL](https://doi.org/10.1177/1745691614551642); DOI: `10.1177/1745691614551642`; arXiv: none; difficulty: advanced; relevance: sign and magnitude error beyond conventional power; prerequisites: testing and estimation; access: publisher-dependent; confidence: 1.00; status: Crossref-verified.
23. **Promoting an Open Research Culture**; Brian A. Nosek et al.; 2015; standards/policy paper; Science; [URL](https://doi.org/10.1126/science.aab2374); DOI: `10.1126/science.aab2374`; arXiv: none; difficulty: intermediate; relevance: transparency, data/code standards, reproducibility; prerequisites: research workflow; access: publisher-dependent; confidence: 1.00; status: Crossref-verified.
24. **The ASA Statement on p-Values: Context, Process, and Purpose**; Ronald L. Wasserstein, Nicole A. Lazar; 2016; professional statement; The American Statistician; [URL](https://doi.org/10.1080/00031305.2016.1154108); DOI: `10.1080/00031305.2016.1154108`; arXiv: none; difficulty: intermediate; relevance: correct interpretation and reporting; prerequisites: testing; access: publisher article; confidence: 1.00; status: Crossref-verified.
25. **Statistical Tests, P Values, Confidence Intervals, and Power: A Guide to Misinterpretations**; Sander Greenland et al.; 2016; tutorial/review; European Journal of Epidemiology; [URL](https://doi.org/10.1007/s10654-016-0149-3); DOI: `10.1007/s10654-016-0149-3`; arXiv: none; difficulty: intermediate; relevance: inference misconceptions and reporting; prerequisites: basic inference; access: open-access publisher page; confidence: 1.00; status: Crossref-verified.
26. **Moving to a World Beyond “p < 0.05”**; Ronald L. Wasserstein, Allen L. Schirm, Nicole A. Lazar; 2019; editorial/synthesis; The American Statistician; [URL](https://doi.org/10.1080/00031305.2019.1583913); DOI: `10.1080/00031305.2019.1583913`; arXiv: none; difficulty: intermediate; relevance: evidence, uncertainty, transparent decisions beyond thresholds; prerequisites: testing and effect sizes; access: publisher article; confidence: 1.00; status: Crossref-verified.

Resource count: **26**, within the required 15-30 preliminary range.

## Curated paper reading path

Read for concepts and historical context; do not treat older terminology or practices as automatically current.

### Foundations (4)

1. Fisher (1922) -> likelihood, sufficiency, efficiency.
2. Neyman and Pearson (1933) -> testing, Type II error, power.
3. Metropolis et al. (1953) -> computational sampling.
4. Hastings (1970) -> general MCMC transition rules.

### Established methods (6)

1. Rubin (1976) -> missingness mechanisms and likelihood.
2. Efron (1979) -> bootstrap principle.
3. Gelman and Rubin (1992) -> multi-chain convergence.
4. Benjamini and Hochberg (1995) -> false discovery rate.
5. Wilkinson et al. (1999) -> reporting and analysis guidance.
6. King and Zeng (2001) -> rare-event modelling failure mode.

### Modern/reform-era applications and extensions (7)

1. Ioannidis (2005) -> reliability under bias and low prior odds.
2. Simmons, Nelson, and Simonsohn (2011) -> undisclosed analytical flexibility.
3. Gelman and Carlin (2014) -> Type S and M errors.
4. Nosek et al. (2015) -> open-science standards.
5. Wasserstein and Lazar (2016) -> ASA p-value principles.
6. Greenland et al. (2016) -> inference misinterpretations.
7. Wasserstein, Schirm, and Lazar (2019) -> decisions beyond thresholding.

### Surveys/tutorials (3)

1. Efron (2003), *Second Thoughts on the Bootstrap*.
2. Greenland et al. (2016), misconception guide.
3. Wasserstein et al. (2019), synthesis on statistical significance.

### Applied/industry-oriented reading (4)

1. King and Zeng (2001) for rare-event products and security data.
2. Benjamini and Hochberg (1995) for high-dimensional experimentation.
3. Nosek et al. (2015) for reproducible research operations.
4. NIST/SEMATECH handbook case studies for engineering decisions.

Reading-note template: citation; claim versus interpretation; problem; estimand; assumptions; derivation; data/experiment; result; limitation; reproduction path; related chapter; three reader questions.

## Projects

Every project uses Python 3.12+, pinned dependencies, deterministic seeds where meaningful, tests, a data dictionary, and a reproducible report.

### Beginner 1 - Sampling Bias Observatory

- **Problem/objectives:** compare convenience, stratified, and probability samples; quantify bias and coverage.
- **Prerequisites/architecture:** Chapters 1-4; notebook -> reusable simulation module -> static HTML report.
- **Dataset:** seeded synthetic population plus UCI `Adult` dataset, repository version donated 1996, DOI `10.24432/C5XW20`, CC BY 4.0, https://archive.ics.uci.edu/dataset/2/adult. Use the dataset to audit sampling weights and representation, not to build a normative income classifier.
- **Milestones/implementation:** define estimand; implement samplers; run repeated samples; visualize estimator distributions.
- **Metrics/deliverables/tests:** bias, RMSE, 95% interval coverage; code, tests, report, data card; test seed stability and sample-size invariants.
- **Extensions/deployment/ethics:** unequal-probability weights; publish static report; discuss representation and harmful subgroup conclusions.
- **Rubric:** design 25%, correctness 30%, uncertainty 20%, reproducibility 15%, communication/ethics 10%.

### Beginner 2 - Distribution and CLT Explorer

- **Problem/objectives:** show when normal approximations work or fail.
- **Prerequisites/architecture:** Chapters 2-4; small Streamlit or static interactive app backed by NumPy/SciPy.
- **Dataset:** generated Bernoulli, exponential, lognormal, t, and mixture samples.
- **Milestones/implementation:** validate parameters; simulate sample means; overlay theoretical approximations; expose Monte Carlo error.
- **Metrics/deliverables/tests:** approximation error, coverage, runtime; app, module, unit tests, explanation; test invalid inputs and known moments.
- **Extensions/deployment/ethics:** dependent/heavy-tailed data; deploy read-only; warn against simulation as proof.
- **Rubric:** statistical accuracy 35%, implementation 25%, tests 15%, intuition 15%, accessibility 10%.

### Intermediate 1 - Experiment Analysis Workbench

- **Problem/objectives:** analyse a two-arm product experiment without p-value-only decisions.
- **Prerequisites/architecture:** Chapters 4-8; ingestion -> validation -> estimand -> effect/CI/test/power -> report.
- **Dataset:** synthetic event log with a published generator and injected sample-ratio mismatch.
- **Milestones/implementation:** preregister metrics; validate randomization; estimate effects; sensitivity and multiplicity analysis.
- **Metrics/deliverables/tests:** absolute/relative effect, interval, power, FDR; analysis package, decision memo, tests; test denominators and invariant assignment.
- **Extensions/deployment/ethics:** heterogeneous effects and sequential monitoring; CI-generated report; privacy-safe aggregation.
- **Rubric:** design 25%, validation 20%, inference 25%, reproducibility 15%, decision quality 15%.

### Intermediate 2 - Regression Diagnostics Clinic

- **Problem/objectives:** diagnose how nonlinearity, heteroskedasticity, leverage, and collinearity alter inference.
- **Prerequisites/architecture:** Chapters 5, 7, 9; simulation/data layer -> statsmodels fits -> diagnostic suite -> remediation comparison.
- **Dataset:** seeded synthetic benchmark plus UCI `Bike Sharing`, repository version donated 2013 with 2011-2012 observations, DOI `10.24432/C5W894`, CC BY 4.0, https://archive.ics.uci.edu/dataset/275/bike+sharing+dataset.
- **Milestones/implementation:** baseline OLS; residual/influence checks; robust-SE and transformed/spline alternatives; held-out assessment.
- **Metrics/deliverables/tests:** interval coverage, calibration, RMSE, coefficient stability; report and package; tests against known simulated coefficients.
- **Extensions/deployment/ethics:** subgroup diagnostics; containerized notebook; prevent causal wording from observational coefficients.
- **Rubric:** assumptions 25%, diagnosis 25%, remedies 20%, tests 15%, communication 15%.

### Advanced - Missing-Data Sensitivity Laboratory

- **Problem/objectives:** demonstrate why missingness assumptions, not imputation convenience, drive conclusions.
- **Prerequisites/architecture:** Chapters 5-7 and 11; complete-data generator -> MCAR/MAR/MNAR amputation -> methods -> sensitivity dashboard.
- **Dataset:** synthetic ground truth plus UCI `Heart Disease`, repository version cited as Janosi et al. 1989, DOI `10.24432/C52P4X`, CC BY 4.0, https://archive.ics.uci.edu/dataset/45/heart+disease. Use only the repository's de-identified fields and treat the exercise as methodological, not clinical advice.
- **Milestones/implementation:** missingness audit; complete-case and multiple-imputation comparison; delta-adjustment sensitivity.
- **Metrics/deliverables/tests:** bias, coverage, fraction missing information, conclusion stability; technical report, tests, model/data card.
- **Extensions/deployment/ethics:** selection/pattern-mixture models; private internal dashboard; prohibit fabricated certainty and expose unverifiable assumptions.
- **Rubric:** mechanism reasoning 30%, analysis 25%, sensitivity 20%, reproducibility 15%, ethics 10%.

### Research-oriented - Bootstrap Reliability Under Distribution Shift

- **Problem/objectives:** study interval coverage when IID/exchangeability assumptions weaken.
- **Prerequisites/architecture:** Chapters 4-6, 9, and Efron readings; experiment manifest -> simulation grid -> parallel runner -> analysis and paper-style report.
- **Dataset:** controlled heavy-tail, mixture, dependence, and covariate-shift generators.
- **Milestones/implementation:** literature protocol; baseline asymptotic/percentile/basic/bootstrap-t intervals; preregister scenarios; repeated-run audit.
- **Metrics/deliverables/tests:** coverage, width, failure rate, compute cost; replication package, negative results, paper note; unit/property tests and independent seed audit.
- **Extensions/deployment/ethics:** block/bootstrap and conformal comparison; archived container and DOI-ready package; report all conditions and avoid selective plots.
- **Rubric:** research question 15%, design 25%, correctness 20%, analysis 20%, reproducibility 10%, limitations/originality 10%.

## Preliminary dataset registry

Access and licence metadata verified on 2026-07-28.

| Dataset ID | Title/version | Provider | Identifier and URL | Licence | Intended use and constraints |
| --- | --- | --- | --- | --- | --- |
| DS-STAT-001 | Adult; UCI repository version donated 1996 | UCI Machine Learning Repository; Barry Becker and Ronny Kohavi | DOI `10.24432/C5XW20`; https://archive.ics.uci.edu/dataset/2/adult | CC BY 4.0 | Sampling-bias and representation audit. Contains sensitive demographic attributes and historical labels; no normative eligibility decisions. |
| DS-STAT-002 | Bike Sharing; UCI repository version donated 2013, observations from 2011-2012 | UCI Machine Learning Repository; Hadi Fanaee-T | DOI `10.24432/C5W894`; https://archive.ics.uci.edu/dataset/275/bike+sharing+dataset | CC BY 4.0 | Regression diagnostics. Preserve temporal order where relevant and avoid leaking component counts into their total. |
| DS-STAT-003 | Heart Disease; UCI repository citation version 1989 | UCI Machine Learning Repository; Andras Janosi, William Steinbrunn, Matthias Pfisterer, Robert Detrano | DOI `10.24432/C52P4X`; https://archive.ics.uci.edu/dataset/45/heart+disease | CC BY 4.0 | Missing-data sensitivity only. De-identified repository fields, no patient-level deployment, diagnosis, or clinical recommendation. |

Synthetic datasets remain the default for projects whose goal is to know the data-generating truth. Their generator source, seed, parameter manifest, and generated checksum become part of the deliverable.

## Assignment and quiz plan

| Assessment | Scope | Evidence required |
| --- | --- | --- |
| A1 Data and estimand audit | Ch. 1 | Data dictionary, DAG-like assumption sketch, bias register |
| A2 Probability readiness and sampling | Ch. 2-3 | Diagnostic remediation evidence plus sampling-distribution simulation |
| A3 Estimation and likelihood | Ch. 4 | Estimator derivation, consistency discussion, tested Python |
| A4 Bootstrap and testing | Ch. 5-6 | Coverage/power simulation and interpretation memo |
| A5 Multiplicity and nonparametrics | Ch. 7 | From-scratch BH procedure and assumption comparison |
| A6 Regression clinic | Ch. 8 | Diagnostics, robust alternative, prediction uncertainty |
| A7 Bayesian/missingness extension | Ch. 9-10 | Posterior check or missingness sensitivity analysis |
| A8 Industry decision report | Ch. 11 | Reproducible analysis package and decision log |

Quiz design:

- 11 low-stakes chapter quizzes, 8-12 questions each.
- At least 40% scenario interpretation, 30% calculation/derivation, 20% code/output diagnosis, 10% ethics/reproducibility.
- Distractors target common errors: confidence probability, p-value as null probability, independence versus zero correlation, data leakage, optional stopping, and association-as-causation.
- Every quiz has answer rationale, assumption statement, and remediation link.
- Two cumulative oral/code checks require explaining a simulation result and reviewing a flawed analysis.

## Content and technical validation gates

Before any chapter is approved:

1. Label remains non-official unless a detailed official source is added.
2. At least 3,000 meaningful prose words only after outline approval.
3. Every mathematical symbol and assumption is defined; derivations include intermediate steps and dimension checks.
4. Every A-F claim class has appropriate support; current claims are reverified.
5. DOI/title/author/venue metadata resolves through Crossref or the publisher.
6. Python uses supported versions, typed reusable functions, deterministic seeds, validation, expected output, complexity notes, and tests.
7. Simulations report Monte Carlo uncertainty and do not masquerade as proofs.
8. Examples distinguish exploratory, confirmatory, predictive, and causal goals.
9. Accessibility, equation rendering, code copy, heading structure, and print rendering pass.
10. No unresolved placeholders, copied prose, internal instructions, or invented university topics remain.

## Risks and open issues

- The absence of an official topic-level syllabus is the primary blocker to calling any outline “official.”
- A single-semester course may not have room for all 11 chapters; the 122-hour Chapters 1-8 path is the recommended pilot.
- Bayesian methods, causal awareness, MCMC, and production experimentation are academically useful extensions, not confirmed syllabus requirements.
- Some foundational papers use historical notation and assumptions that require modern editorial framing.
- Publisher access varies; each chapter must retain at least one free authoritative learning path.
- Software documentation versions can change; code examples must pin and revalidate dependencies.

## Subject Lead decision

**Plan status: remediated and approved for re-review as a provisional, source-transparent subject plan. Full chapter drafting remains subject to the independent validation gate.** Obtain the detailed BITS course handout before asserting official unit alignment.
