# Project ladder

These six proposed projects are educational contracts, not official assessment.
Each contract names the evidence a reviewer should receive.

## 1. Beginner — Truth-table and CNF checker

- **Problem and objectives:** implement a truth-table evaluator and compare it
  with the bounded solver; learn syntax/semantics and countermodels.
- **Prerequisites and architecture:** Python functions for literals, clauses,
  assignments, and a CLI that reads a small JSON instance.
- **Dataset/licence:** hand-authored formulas committed with SHA-256 hashes;
  no external data.
- **Milestones and metrics:** parser, evaluator, solver comparison; report
  correctness on 50 formulas, malformed-input errors, and runtime.
- **Deliverables/tests:** source, type hints, unit tests, run log, and one
  failing test fixed by a documented patch.
- **Extensions/deployment/ethics:** add DIMACS output; package as a local
  teaching tool, never as a policy decision service; explain misleading labels.
- **Rubric:** 30% semantics, 25% tests, 20% clarity, 15% reproducibility, 10%
  limitations.

## 2. Beginner — DPLL search visualiser

- **Problem and objectives:** visualise decisions, unit propagation, and
  backtracking on formulas with at most 12 variables.
- **Prerequisites and architecture:** the Chapter 1 solver plus a trace schema,
  deterministic variable ordering, and a static HTML or notebook renderer.
- **Dataset/licence:** public DIMACS examples from the SAT Competition archive;
  retain the archive version, licence, and checksums.
- **Milestones and metrics:** event log, replay checker, visual timeline; report
  branch nodes, conflicts, propagation count, and replay agreement.
- **Deliverables/tests:** trace fixtures for SAT and UNSAT, snapshot tests, and
  an accessibility note for colour-independent explanations.
- **Extensions/deployment/ethics:** add watched literals; run offline because
  arbitrary formulas can consume resources; disclose timeout boundaries.
- **Rubric:** 25% trace correctness, 25% replay, 20% visual explanation, 20%
  tests, 10% safety note.

## 3. Intermediate — DIMACS benchmark runner

- **Problem and objectives:** build a reproducible runner that compares the
  first-principles solver with a library solver on bounded instances.
- **Prerequisites and architecture:** parser, sandboxed subprocess, JSONL result
  schema, and a report generator that separates status from timeout.
- **Dataset/licence:** SAT Competition benchmark release; record source URL,
  version, checksums, licence, CPU, memory, and timeout.
- **Milestones and metrics:** parser validation, 30-instance pilot, then a
  stratified run; report solved count, median/p95 time, nodes, and mismatches.
- **Deliverables/tests:** fixtures for comments, empty clauses, tautologies,
  malformed headers, plus a reproducibility script.
- **Extensions/deployment/ethics:** add proof logging; do not execute untrusted
  solver binaries without isolation; avoid reporting a benchmark as universal.
- **Rubric:** 25% data provenance, 25% runner correctness, 20% statistics, 20%
  reproducibility, 10% threat model.

## 4. Intermediate — Explainable schedule or Sudoku encoding

- **Problem and objectives:** encode a small scheduling or Sudoku instance and
  return either a valid model or a human-readable contradiction.
- **Prerequisites and architecture:** Boolean encoding, DIMACS export, model
  decoder, and a rule-to-clause provenance map.
- **Dataset/licence:** synthetic instances generated from a fixed seed; publish
  generator code and no personal data.
- **Milestones and metrics:** valid model decoder, UNSAT variant, explanation
  coverage; measure clause count, decode validity, and proof/reason trace.
- **Deliverables/tests:** 20 seed fixtures, solver cross-check, decoded-output
  tests, and a short encoding specification.
- **Extensions/deployment/ethics:** add weighted preferences; label hard
  constraints and soft preferences separately so a feasible schedule is not
  mistaken for a fair schedule.
- **Rubric:** 30% encoding, 25% decoder, 20% explanations, 15% tests, 10% ethics.

## 5. Advanced — SMT-backed configuration verifier

- **Problem and objectives:** verify numeric bounds and Boolean dependencies in
  a cloud configuration, returning a model, unsat status, or timeout.
- **Prerequisites and architecture:** Z3 or another verified API, typed schema,
  input canonicalisation, resource limits, and certificate/status logging.
- **Dataset/licence:** synthetic configurations and public non-sensitive schema
  examples; include licences and a redaction policy.
- **Milestones and metrics:** Boolean baseline, integer constraints, timeout
  handling, regression suite; report status accuracy and resource use.
- **Deliverables/tests:** parser fuzz fixtures, overflow/unknown cases, model
  validation, and deployment runbook.
- **Extensions/deployment/ethics:** add unsat-core explanations; isolate the
  verifier and require review before applying changes; do not infer compliance
  from satisfiability alone.
- **Rubric:** 25% formal model, 25% status safety, 20% tests, 20% operations,
  10% limitations.

## 6. Research — Reproduce a CDCL heuristic claim

- **Problem and objectives:** reproduce a selected published heuristic result on
  an identified benchmark slice, then test one robustness hypothesis.
- **Prerequisites and architecture:** paper audit, solver fork, pinned compiler,
  benchmark manifest, statistical analysis, and proof/checker validation.
- **Dataset/licence:** the paper's original benchmark or an approved public
  substitute; document any unavailable instances and deviations.
- **Milestones and metrics:** baseline, faithful reproduction, held-out test,
  ablation; report solved count, PAR-2 or an explicitly justified metric,
  variance, and proof validity.
- **Deliverables/tests:** source commit, environment lock, raw results, scripts,
  figures, reviewer checklist, and a negative-result discussion.
- **Extensions/deployment/ethics:** compare learned branching; publish only
  aggregate logs when formulas contain sensitive structure; never overstate a
  single benchmark family as general intelligence.
- **Rubric:** 25% source fidelity, 25% experimental design, 20% analysis, 20%
  reproducibility, 10% responsible claims.
