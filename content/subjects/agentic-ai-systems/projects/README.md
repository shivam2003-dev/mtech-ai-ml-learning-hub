# Project ladder

These six contracts are supplementary educational projects derived from the
verified topic description. They intentionally move from deterministic traces
to research evaluation; none is presented as an official university assignment.

## 1. Beginner — Trace-first file assistant

- **Problem and objectives:** Build a read-only assistant for five local text
  fixtures. Learn state, observations, allow-lists, and explicit stopping.
- **Prerequisites and architecture:** Python CLI, typed `Action`/`State`, one
  `read_text` tool, JSONL trace writer, and a pure fixture policy.
- **Dataset/licence:** Hand-authored synthetic incident notes under an MIT-style
  project licence; include SHA-256 checksums.
- **Milestones and metrics:** parser; tool contract; safe path handling; tests;
  report success, refusal, unsupported request, and median latency over 50 runs.
- **Deliverables/tests:** source, type hints, unit tests, run log, threat model,
  and one deliberately failing test with a documented fix.
- **Deployment/ethics/extensions:** package locally; never connect to production
  logs; add citation line numbers and a deletion command for traces.
- **Rubric:** 30% correctness, 25% safety, 20% tests, 15% reproducibility, 10%
  communication.

## 2. Beginner — Grounded study-question agent

- **Problem and objectives:** Answer ten questions from a small licensed corpus,
  refusing when no passage supports a claim; learn retrieval and provenance.
- **Prerequisites and architecture:** chunker, lexical retriever, evidence
  record, deterministic answer template, and a browser-free static report.
- **Dataset/licence:** Public-domain or self-authored course notes; record
  licence, version, checksum, and access date.
- **Milestones and metrics:** retrieval fixtures; citation validator; paraphrase
  test; measure recall@5, citation precision, refusal precision, and latency.
- **Deliverables/tests:** reproducible corpus, tests for stale and contradictory
  passages, five trace examples, and a privacy note.
- **Deployment/ethics/extensions:** keep access control with the corpus owner;
  add document expiry checks; do not infer sensitive student attributes.
- **Rubric:** 25% retrieval, 25% evidence, 20% refusal behavior, 20% tests, 10%
  report quality.

## 3. Intermediate — ReAct versus Plan-and-Execute evaluator

- **Problem and objectives:** Compare two controllers on 30 multi-step fixture
  tasks while holding model responses and tool budget constant.
- **Prerequisites and architecture:** controller interface, replayable model
  stubs, read-only tools, trace schema, and statistical evaluation notebook.
- **Dataset/licence:** Synthetic tasks plus explicitly licensed public examples;
  publish fixture hashes and no personal data.
- **Milestones and metrics:** baseline; controller adapters; injected failures;
  measure task success, evidence coverage, tool calls, p50/p95 latency, cost,
  and unsafe-action rate with confidence intervals.
- **Deliverables/tests:** code, frozen responses, evaluation script, ablation of
  stopping rules, and a limitation explaining external validity.
- **Deployment/ethics/extensions:** run offline; add a human-confirmation mode;
  test whether plans amplify an incorrect initial assumption.
- **Rubric:** 25% experimental design, 25% implementation, 20% metrics, 20%
  reproducibility, 10% ethics.

## 4. Intermediate — Memory and retention service

- **Problem and objectives:** Implement working and episodic memory with expiry,
  user deletion, provenance, and per-tenant access checks.
- **Prerequisites and architecture:** SQLite or a local document store, typed
  records, embedding-free lexical lookup, retention worker, and audit events.
- **Dataset/licence:** Synthetic conversations and generated personal-data
  markers; document the synthetic-data generator and licence.
- **Milestones and metrics:** schema; retrieval; expiry; deletion; adversarial
  tenant tests; measure leakage rate, deletion completion time, retrieval recall,
  and storage growth.
- **Deliverables/tests:** migration, API contract, access-control tests,
  deletion evidence, incident playbook, and backup/restore notes.
- **Deployment/ethics/extensions:** default to minimum retention; never store
  secrets; add consent and export flows; test stale-memory correction.
- **Rubric:** 30% privacy/security, 25% correctness, 20% tests, 15% operations,
  10% documentation.

## 5. Advanced — Multi-agent evidence review pipeline

- **Problem and objectives:** Coordinate researcher, calculator, critic, and
  adjudicator roles to produce a cited technical brief without losing ownership.
- **Prerequisites and architecture:** message envelopes, idempotent workers,
  deterministic checker, queue simulator, and human escalation state.
- **Dataset/licence:** Ten licensed papers or official documents with selected
  passages; store DOI/URL, version, and citation metadata.
- **Milestones and metrics:** role contracts; replay; disagreement handling;
  measure claim support, duplicate work, disagreement resolution, latency, and
  unsafe tool proposals.
- **Deliverables/tests:** architecture diagram, message fixtures, checker,
  failure-injection suite, trace bundle, and rollback procedure.
- **Deployment/ethics/extensions:** require human approval before publication;
  redact private notes; test correlated hallucinations by sharing a false hint.
- **Rubric:** 25% contracts, 25% evidence quality, 20% reliability, 20% safety,
  10% research report.

## 6. Research — Safe agent benchmark and governance card

- **Problem and objectives:** Create a reproducible benchmark covering useful,
  unsupported, malicious, unavailable, and irreversible tasks, then propose a
  governance card for the evaluated system.
- **Prerequisites and architecture:** experiment runner, frozen model/tool
  adapters, statistical analysis, threat modelling, and review protocol.
- **Dataset/licence:** 100 synthetic task fixtures plus 20 licensed source
  questions; publish manifest, checksums, licenses, and a redaction policy.
- **Milestones and metrics:** preregister hypotheses; implement baselines;
  run failure matrix; report success, refusal, evidence entailment, calibration,
  cost, latency, privacy incidents, and confidence intervals.
- **Deliverables/tests:** benchmark repository, governance card, model/tool
  inventory, audit traces, reproducibility script, and independent review log.
- **Deployment/ethics/extensions:** no autonomous external writes; include
  appeal and incident response; test demographic and language variation only
  with ethically reviewed data and avoid proxy harms.
- **Rubric:** 20% scientific design, 20% safety/governance, 20% benchmark
  quality, 20% reproducibility, 20% analysis and limitations.
