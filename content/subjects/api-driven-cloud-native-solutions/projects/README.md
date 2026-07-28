# Project ladder

These six proposed projects are educational contracts, not official assessment.
Each contract includes the required problem, outcomes, prerequisites,
architecture, data, milestones, implementation constraints, metrics,
deliverables, tests, extensions, deployment guidance, ethics, and rubric.

## 1. Beginner — Typed prediction API

- **Problem:** expose a deterministic scikit-learn-style score over JSON without
  accepting malformed or oversized requests.
- **Objectives/prerequisites:** learn Pydantic validation, OpenAPI, HTTP errors,
  and pytest-style contract tests; know Python and basic ML metrics.
- **Architecture/data:** FastAPI service, in-memory model, synthetic tabular
  fixture committed with a seed; no personal data.
- **Milestones/requirements:** schema first; implement `/predict`; add health,
  structured errors, and a Dockerfile; test valid, invalid, and unknown fields.
- **Metrics/deliverables:** accuracy on a fixed fixture, p95 latency, OpenAPI
  document, source, tests, image digest, and a one-page threat model.
- **Testing/extensions/deployment:** run unit and container smoke tests; add
  model versioning; deploy to a non-production container platform only after
  secrets and limits are reviewed.
- **Ethics/rubric:** 25% contract, 25% tests, 25% reliability evidence, 25%
  report; document synthetic-data limits and never log request payloads.

## 2. Beginner — Batch-to-API adapter

- **Problem:** convert a slow batch scoring script into an asynchronous job API.
- **Objectives/prerequisites:** understand job identifiers, polling, timeouts,
  and idempotency; know files, JSON, and Python exceptions.
- **Architecture/data:** API, bounded worker queue, local object-store stub, and
  versioned CSV fixture; no untrusted file execution.
- **Milestones/requirements:** design `POST /jobs` and `GET /jobs/{id}`; reject
  duplicate idempotency keys; expire abandoned jobs; provide a status machine.
- **Metrics/deliverables:** completion rate, queue wait p95, duplicate suppression,
  state-transition tests, API contract, and runbook.
- **Testing/extensions/deployment:** inject worker failures and restart the API;
  add durable storage and a dead-letter queue; package with Compose for local use.
- **Ethics/rubric:** 20% state model, 30% failure tests, 25% observability, 25%
  report; explain retention and deletion of uploaded data.

## 3. Intermediate — Model gateway with shadow traffic

- **Problem:** route requests between two model versions while measuring a new
  version without exposing its output to callers.
- **Objectives/prerequisites:** learn compatibility, sampling, and statistical
  comparison; know classification metrics and HTTP middleware.
- **Architecture/data:** gateway, two deterministic model adapters, feature
  flag, metrics sink, and a privacy-safe fixture.
- **Milestones/requirements:** define a stable response schema; sample shadow
  requests; compare latency/error/calibration; implement instant rollback.
- **Metrics/deliverables:** agreement rate, p95/p99 latency, error budget, rollout
  decision record, dashboards, and a reproducible load script.
- **Testing/extensions/deployment:** contract-test both versions and simulate a
  timeout; add canary percentages; deploy only with a signed image and change
  approval.
- **Ethics/rubric:** 25% compatibility, 25% experiment design, 25% rollback,
  25% privacy and report; do not retain shadow features by default.

## 4. Intermediate — Event-driven feature service

- **Problem:** serve a feature assembled from events while avoiding stale or
  inconsistent values.
- **Objectives/prerequisites:** learn freshness, replay, and consistency trade-
  offs; know queues, timestamps, and basic probability.
- **Architecture/data:** event producer, bounded consumer, feature API, and
  synthetic event stream with duplicate and out-of-order records.
- **Milestones/requirements:** define event schema and version; implement
  idempotent consumption, watermark handling, and a stale-feature response.
- **Metrics/deliverables:** freshness lag, duplicate rate, replay correctness,
  schema registry note, tests, and an incident drill.
- **Testing/extensions/deployment:** property-test ordering and retries; add a
  durable log; deploy with least-privilege service accounts and retention limits.
- **Ethics/rubric:** 20% schema, 30% correctness, 25% observability, 25% risk
  analysis; explain whether a feature can encode sensitive attributes.

## 5. Advanced — Multi-region intelligent API

- **Problem:** design a latency-aware service that survives one region failing
  without silently changing model or data semantics.
- **Objectives/prerequisites:** reason about consistency, recovery, and cost;
  know containers, DNS, TLS, SLOs, and model evaluation.
- **Architecture/data:** global gateway, two regional API deployments, replicated
  model registry, immutable fixture, and explicit data-residency boundary.
- **Milestones/requirements:** write an architecture decision record; define
  health/readiness; test failover, stale model, and partial network loss; provide
  rollback and recovery-time objectives.
- **Metrics/deliverables:** availability, p99 latency by region, recovery time,
  cost estimate, chaos test log, topology diagram, and runbook.
- **Testing/extensions/deployment:** use a local two-process simulation before
  any cloud; add mTLS and signed artefacts; deployment requires reviewed IAM and
  residency controls.
- **Ethics/rubric:** 20% architecture, 25% resilience evidence, 20% cost,
  20% security, 15% report; state what the design cannot guarantee.

## 6. Research — Reproducible API serving experiment

- **Problem:** reproduce a published systems result about tail latency or ML
  serving and test one clearly stated extension.
- **Objectives/prerequisites:** learn research protocol, baselines, confidence
  intervals, and artifact evaluation; know Python benchmarking and statistics.
- **Architecture/data:** version-pinned service, load generator, result store,
  and public/synthetic workload with a documented license.
- **Milestones/requirements:** preregister hypothesis; freeze image and hardware;
  repeat runs with seeds; publish raw aggregate data and an explanation of
  deviations from the paper.
- **Metrics/deliverables:** p50/p95/p99 latency, throughput, error rate, cost per
  request, confidence intervals, paper critique, and reproducibility bundle.
- **Testing/extensions/deployment:** automate smoke and benchmark tests; test a
  batching or caching extension; never benchmark production users without
  written authorization.
- **Ethics/rubric:** 20% protocol, 25% validity, 20% analysis, 20% artifact,
  15% limitations; disclose negative or non-reproducible results.
