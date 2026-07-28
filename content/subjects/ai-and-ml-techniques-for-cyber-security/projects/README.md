# Projects

These six project contracts are educational planning artifacts. Each uses
synthetic or explicitly licensed defensive data, excludes exploit execution,
and requires human review. Full implementation pages will be published only
after independent dataset, code, security, and citation review.

## Beginner 1 — Alert-budget calculator

- **Problem:** Compare precision, recall, and expected review cost at several
  thresholds on the chapter's synthetic fixture.
- **Objectives/prerequisites:** confusion matrices, NumPy, and plotting.
- **Architecture/data:** a deterministic notebook, generated rows, no personal
  data; a threshold table and calibration plot.
- **Milestones:** contract; fixture; metric functions; sensitivity analysis;
  written decision memo.
- **Evaluation/deliverables:** exact unit tests, reproducible seed, report at a
  fixed daily budget, and a limitation section. Test invalid shapes and
  thresholds.
- **Extensions/deployment/ethics:** add drift simulation; deployment guidance
  is “offline decision support only”; explain why identifiers are excluded.
- **Rubric:** contract 25%, tests 25%, cost analysis 25%, communication 25%.

## Beginner 2 — Vulnerability triage data card

- **Problem:** Design a schema for ranking synthetic package records for review.
- **Objectives/prerequisites:** vulnerability, asset, label, leakage, and CSV
  validation concepts.
- **Architecture/data:** a versioned CSV generated locally with advisory age,
  exposure, asset count, and an explicit review label.
- **Milestones:** data card; label policy; temporal split; baseline rule; audit.
- **Evaluation/deliverables:** schema tests, class counts, missingness report,
  and a two-page evidence contract. Never fetch or install packages.
- **Extensions/deployment/ethics:** add a redacted public advisory sample;
  document that severity is not exploitation evidence.
- **Rubric:** provenance 25%, split and leakage 25%, tests 25%, safety 25%.

## Intermediate 1 — Temporal malware-feature benchmark

- **Problem:** Compare a transparent linear model with gradient boosting on
  pre-extracted, licensed EMBER features without executing binaries.
- **Objectives/prerequisites:** supervised learning, imbalance, drift, and
  static feature provenance.
- **Architecture/data:** feature-only files, chronological train/test split,
  model card, and a read-only pipeline.
- **Milestones:** checksum/data card; baseline; model; time-shift experiment;
  error analysis.
- **Evaluation/deliverables:** PR-AUC, recall at review budget, calibration,
  confidence ranges, memory/time accounting, and a reproducible environment.
  The pipeline must fail closed on raw executable input.
- **Extensions/deployment/ethics:** family-held-out split and analyst appeal;
  deployment guidance is a review aid, never automatic quarantine.
- **Rubric:** provenance 20%, temporal evidence 25%, implementation/tests 25%,
  threat and ethics 20%, communication 10%.

## Intermediate 2 — Phishing triage with safe text

- **Problem:** Rank synthetic or consented email metadata/text for analyst review.
- **Objectives/prerequisites:** tokenisation, precision/recall, privacy, and
  distribution shift.
- **Architecture/data:** redacted text, sender-domain category, time split,
  linear baseline before a Transformer comparison.
- **Milestones:** redaction policy; baseline; subgroup/error review; ablation;
  human-in-the-loop workflow.
- **Evaluation/deliverables:** fixed queue budget, false-positive examples,
  prompt-injection test for any LLM component, and deletion procedure.
- **Extensions/deployment/ethics:** multilingual evaluation; do not infer
  intent from identity, accent, or protected attributes.
- **Rubric:** safety 25%, data contract 20%, evaluation 25%, tests 20%, report 10%.

## Advanced — Graph attack-path prioritisation

- **Problem:** Rank synthetic graph paths for defensive review while preserving
  analyst control.
- **Objectives/prerequisites:** graph theory, NetworkX, leakage, and cost-aware
  ranking.
- **Architecture/data:** generated asset/service graph with labelled paths,
  graph features, baseline ranking, and optional GNN proposal.
- **Milestones:** threat model; graph generator; split by campaign; baseline;
  robustness and explainability review.
- **Evaluation/deliverables:** path recall at top-k, analyst workload, graph
  perturbation test, model card, and rollback plan. No live network discovery.
- **Extensions/deployment/ethics:** compare graph families and missing-edge
  scenarios; treat inferred relationships as uncertain.
- **Rubric:** threat model 20%, graph integrity 20%, evidence 25%, safety 20%,
  reproducibility 15%.

## Research — Reproducible adversarial drift study

- **Problem:** Measure how a feature-only detector changes under documented,
  non-deployable perturbations and temporal drift.
- **Objectives/prerequisites:** adversarial ML threat models, experimental
  design, confidence intervals, and responsible disclosure.
- **Architecture/data:** EMBER-like synthetic vectors or approved features,
  fixed seeds, attack budget stated before experiments, and no exploit code.
- **Milestones:** preregister hypotheses; reproduce baseline; perturbation
  matrix; mitigation comparison; limitations and release review.
- **Evaluation/deliverables:** primary metric, uncertainty, compute budget,
  negative results, code tests, data checksum, and paper-style appendix.
- **Extensions/deployment/ethics:** evaluate abstention and monitoring;
  disclose only defensive findings and coordinate any real vulnerability.
- **Rubric:** hypothesis 20%, experimental validity 30%, reproducibility 25%,
  safety/disclosure 15%, writing 10%.
