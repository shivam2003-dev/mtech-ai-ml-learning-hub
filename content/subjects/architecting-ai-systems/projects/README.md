# Project ladder

These six contracts are proposed educational projects, not official assessment.
Each requires a README, reproducible commands, tests, raw results, source
licences, assumptions, limitations, and an ethical or safety note.

## 1. Beginner — Architecture manifest and component map

- **Problem/objectives:** turn the running document-triage case into typed
  components, owners, trust zones, inputs, outputs, and fallback policies.
- **Prerequisites/architecture:** Python dataclasses or JSON Schema; a local
  CLI and deterministic validator.
- **Dataset/licence:** hand-authored synthetic manifests, fixed seed, published
  SHA-256 hashes; no personal data.
- **Milestones/metrics:** schema, valid fixture, five invalid fixtures, report
  validation precision and execution time on 100 generated manifests.
- **Deliverables/tests:** source, type hints, unit tests, architecture diagram,
  manifest examples, and a decision record.
- **Deployment/ethics:** local static tool only; explain that structural validity
  cannot prove safety, fairness, or availability.
- **Rubric:** 30% boundaries, 25% tests, 20% explanation, 15% reproducibility,
  10% limitations.

## 2. Beginner — ADLC evidence ledger

- **Problem/objectives:** build a small ledger linking data, code, model, policy,
  evaluation, approval, and deployment artefacts across one release.
- **Prerequisites/architecture:** JSON Lines, hashing, a versioned directory,
  and a read-only report generator.
- **Dataset/licence:** synthetic manifests and public sample metadata with
  source and licence fields.
- **Milestones/metrics:** missing-edge detection, hash verification, reproducible
  rebuild; report coverage and false alarms.
- **Deliverables/tests:** fixtures for absent, changed, and redacted artefacts;
  exportable evidence report and retention note.
- **Deployment/ethics:** do not store raw user documents; redact identifiers and
  document who may read the ledger.
- **Rubric:** 25% provenance, 25% validation, 20% tests, 20% privacy, 10% clarity.

## 3. Intermediate — Style comparison workload lab

- **Problem/objectives:** implement equivalent document scoring as a modular
  process, service call, and queue worker; compare style trade-offs.
- **Prerequisites/architecture:** Python HTTP or in-process interfaces, a local
  queue simulation, fixed model stub, and latency recorder.
- **Dataset/licence:** generated payloads and delays; record generator seed and
  no real identifiers.
- **Milestones/metrics:** correctness parity, p50/p95/p99 latency, error rate,
  duplicate handling, and CPU/memory measurements.
- **Deliverables/tests:** load script, raw JSONL, plots, failure matrix, and
  architecture decision record with rejected alternatives.
- **Deployment/ethics:** local benchmark only; do not generalize synthetic
  results to a cloud or domain without new evidence.
- **Rubric:** 25% equivalence, 25% measurement, 20% analysis, 20%
  reproducibility, 10% responsible claims.

## 4. Intermediate — Safe tool gateway for a bounded agent

- **Problem/objectives:** implement a goal loop that can call read-only search
  and calculator tools, while rejecting undeclared arguments and side effects.
- **Prerequisites/architecture:** typed JSON schemas, allow-list policy, budget,
  timeout, audit trace, and a deterministic mock planner.
- **Dataset/licence:** synthetic documents and tool responses; include prompt
  injection fixtures with no private text.
- **Milestones/metrics:** valid-call rate, policy violations blocked, tool-call
  count, timeout handling, and trace completeness.
- **Deliverables/tests:** malformed arguments, replay, injection, denial, and
  budget exhaustion tests; threat model and human approval design.
- **Deployment/ethics:** sandbox locally; never grant delete, send, or credential
  tools; disclose the mock planner’s limits.
- **Rubric:** 30% policy boundary, 25% negative tests, 20% trace quality, 15%
  safety, 10% documentation.

## 5. Advanced — Resilient multi-domain blueprint

- **Problem/objectives:** design and exercise a healthcare-like, retail, or
  industrial architecture with domain-specific data, latency, and harm limits.
- **Prerequisites/architecture:** service decomposition, queue/backpressure,
  readiness, canary, fallback, observability, and infrastructure-as-code plan.
- **Dataset/licence:** public or synthetic domain data with documented licence;
  no production personal data.
- **Milestones/metrics:** dependency failure injection, recovery time, error
  budget consumption, cost estimate, and safe-degradation rate.
- **Deliverables/tests:** blueprint, runbook, chaos scenarios, dashboards,
  rollback procedure, and governance/system card.
- **Deployment/ethics:** local or sandbox environment; justify domain controls
  and human recourse; do not claim regulatory compliance from a diagram.
- **Rubric:** 25% domain fit, 25% resiliency, 20% operations, 20% governance,
  10% evidence.

## 6. Research — Reproduce a systems architecture claim

- **Problem/objectives:** select a foundational systems paper, reproduce a
  declared workload slice, and test one architecture or tail-latency hypothesis.
- **Prerequisites/architecture:** paper audit, pinned environment, benchmark
  manifest, statistical analysis, and independent result checker.
- **Dataset/licence:** original public benchmark or an approved substitute;
  record unavailable inputs and every deviation.
- **Milestones/metrics:** faithful baseline, held-out workload, ablation, p50/p95
  and p99, confidence intervals, cost, and failure behavior.
- **Deliverables/tests:** source commit, environment lock, raw results, scripts,
  figures, reviewer checklist, and negative-result discussion.
- **Deployment/ethics:** publish aggregate logs when traces reveal sensitive
  structure; do not turn one benchmark family into a universal claim.
- **Rubric:** 25% source fidelity, 25% experimental design, 20% analysis, 20%
  reproducibility, 10% responsible interpretation.
