# Projects

These six contracts are educational planning artifacts, not official
university assignments. Use synthetic, consented, or explicitly licensed data;
do not publish individual event paths. Each project requires a data card,
reproducible environment, tests, a limitations section, and a human review of
the proposed action.

## Beginner 1 — Basket data card and quality gate

- **Problem:** validate a synthetic transaction table before mining patterns.
- **Objectives/prerequisites:** schemas, missingness, deduplication, pandas,
  and the Chapter 1 mining contract.
- **Architecture/data:** generated baskets with a fixed seed; no identifiers.
- **Milestones:** schema; provenance; duplicate policy; quality report; review.
- **Evaluation/deliverables:** tests for empty baskets, invalid item names,
  impossible rows, and a two-page data card.
- **Deployment/ethics:** offline only; explain why low-count baskets are not
  released. **Rubric:** provenance 30%, tests 25%, reasoning 25%, communication 20%.

## Beginner 2 — Support and lift explorer

- **Problem:** compare singleton and pair support, confidence, and lift across
  three thresholds using the chapter fixture.
- **Objectives/prerequisites:** probability, combinations, matplotlib, and
  unit testing.
- **Architecture/data:** deterministic notebook and CSV generated locally.
- **Milestones:** from-scratch counts; metric functions; sensitivity plot;
  rejected-pattern table; short decision memo.
- **Evaluation/deliverables:** exact expected values, invalid-input tests, and
  a warning against causal interpretation.
- **Deployment/ethics:** publish aggregates only. **Rubric:** correctness 35%,
  tests 25%, interpretation 25%, reproducibility 15%.

## Intermediate 1 — Closed-pattern course navigation study

- **Problem:** reduce redundant resource rules while preserving useful closure.
- **Objectives/prerequisites:** itemset lattices, Apriori or FP-Growth, and
  temporal validation.
- **Architecture/data:** weekly synthetic baskets, split by week, pattern
  registry, and stability report.
- **Milestones:** candidate miner; closed/maximal comparison; bootstrap;
  later-week validation; analyst review.
- **Evaluation/deliverables:** support counts, rank stability, runtime and
  memory, and a model/data card.
- **Deployment/ethics:** only navigation hypotheses; no learner ranking.
  **Rubric:** algorithm 25%, evidence 30%, tests 20%, privacy 15%, writing 10%.

## Intermediate 2 — Sequence-aware web event comparison

- **Problem:** compare unordered baskets with ordered sessions without treating
  clicks as evidence of ability.
- **Objectives/prerequisites:** sequence representation, leakage, evaluation,
  and SQL-style windows.
- **Architecture/data:** consented or synthetic events, session boundary rule,
  basket baseline, sequence baseline, and held-out week.
- **Milestones:** data contract; sessionizer; two representations; pattern
  comparison; human interpretation review.
- **Evaluation/deliverables:** coverage, stability, false-discovery discussion,
  tests for boundary cases, and a deletion procedure.
- **Deployment/ethics:** no individual path export. **Rubric:** contract 25%,
  temporal design 25%, implementation 25%, privacy 15%, communication 10%.

## Advanced — Graph-and-stream pattern operations

- **Problem:** discover recurring graph motifs in a changing synthetic service
  graph while bounding compute and false positives.
- **Objectives/prerequisites:** NetworkX, graph motifs, stream windows,
  complexity, and drift.
- **Architecture/data:** generated graph snapshots, windowed motif counts,
  baseline ranking, and alert budget.
- **Milestones:** generator; motif definition; window policy; perturbation test;
  cost-aware review dashboard.
- **Evaluation/deliverables:** motif recall on known fixtures, runtime, memory,
  missing-edge sensitivity, and rollback plan.
- **Deployment/ethics:** no live discovery or access escalation; inferred edges
  remain uncertain. **Rubric:** representation 20%, evidence 30%, safety 20%,
  scalability 20%, reporting 10%.

## Research — Stability of mined patterns under population shift

- **Problem:** measure which patterns survive changes in sampling, time, and
  item prevalence, without overclaiming generalisation.
- **Objectives/prerequisites:** bootstrap, multiple comparisons, drift, and
  reproducible experimental design.
- **Architecture/data:** synthetic multi-regime baskets with preregistered
  hypotheses, seeds, checksums, and a held-out regime.
- **Milestones:** hypotheses; baseline; perturbation matrix; confidence bounds;
  negative results; release review.
- **Evaluation/deliverables:** primary stability metric, uncertainty, compute
  budget, rejected patterns, code tests, and paper-style appendix.
- **Deployment/ethics:** report aggregate findings only; document who could be
  harmed by a pattern-based intervention. **Rubric:** hypotheses 20%, validity
  30%, reproducibility 25%, ethics 15%, writing 10%.
