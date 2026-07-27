# MLOps — Subject Lead Planning Bundle

**Agent:** `subject-lead-elective-mlops`
**Subject ID:** `SUBJ-017`
**Status:** planning complete; no full chapters generated
**Version:** 1.0.0
**Prepared and sources accessed:** 2026-07-28

## 1. Official curriculum boundary

### Verified facts

- **Official title:** MLOps.
- **Subject type:** general elective.
- **Semester:** configurable between Semester 2 and Semester 3; the brochure does not assign MLOps to a fixed semester.
- **Primary source:** BITS Pilani Work Integrated Learning Programmes, *M.Tech. Artificial Intelligence and Machine Learning for working professionals* brochure.
- **Source file:** `/Users/shivamkumar/Downloads/mtech-ai-ml.pdf`.
- **SHA-256:** `fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b`.
- **Evidence:** physical PDF page 12 / printed page 10, “Pool of Electives General.”
- **Official detailed syllabus availability:** title only.

The brochure does **not** provide MLOps units, topics, prerequisites, outcomes, hours, assessment weights, tools, datasets, or an official definition. Consequently, this plan contains no “official topic” claims. Every proposed topic is visibly classified as:

- **Prerequisite** — readiness needed to study the proposed material;
- **Supplementary** — academically useful content inferred from authoritative literature, not the university syllabus;
- **Advanced extension** — research-facing depth beyond a core route;
- **Industry application** — operational practice, reliability, governance, or security.

This title-only notice must remain visible on the subject page and in every future chapter's metadata. A later official syllabus must be compared and reconciled rather than silently overwritten.

## 2. Proposed subject interpretation

This plan uses **MLOps** to mean the socio-technical discipline that makes the machine-learning lifecycle repeatable, testable, governable, observable, secure, and reliably releasable. It connects product intent and data provenance to experimentation, automated pipelines, artifact promotion, deployment, production monitoring, incident response, and retirement.

The educational centre is not a catalogue of tools. It is a set of invariants and evidence:

1. code, data, configuration, environment, and model lineage can be reconstructed;
2. pipeline components have explicit contracts and idempotent boundaries;
3. tests cover software, data, model behaviour, and serving integration;
4. promotion decisions use declared gates rather than a single offline score;
5. training-serving skew, drift, reliability, security, cost, and stakeholder harm are monitored;
6. rollback, fallback, retraining, and retirement are designed before failure;
7. people, ownership, approvals, and risk acceptance are part of the system.

A stack using Kubernetes and MLflow is not automatically mature MLOps. A smaller system with reproducible artifacts, strong tests, explicit ownership, observable behaviour, and safe releases may be better engineered.

## 3. Proposed learning outcomes

All outcomes are **Supplementary**. A learner should be able to:

1. distinguish model development from an end-to-end ML product lifecycle and map responsibilities across product, data, ML, software, operations, security, and governance roles;
2. define business, model, data, and service objectives with guardrails and an explicit non-ML baseline;
3. reconstruct an experiment from versioned code, data references, configuration, environment, randomness, lineage, and artifacts;
4. design immutable artifact identities, metadata schemas, retention policies, and promotion states;
5. validate data schemas, distributions, labels, leakage risks, feature freshness, and training-serving consistency;
6. explain feature-store benefits and failure modes without treating a feature store as mandatory;
7. design idempotent, retry-safe, cached, observable ML pipelines with explicit component contracts;
8. implement CI gates for code, data, models, containers, infrastructure definitions, and end-to-end integration;
9. design continuous delivery and carefully governed continuous training while separating build, approval, deployment, and activation;
10. package and serve models through batch, online, streaming, or edge patterns and justify the choice;
11. use canary, shadow, champion-challenger, blue-green, rollback, and fallback patterns with valid metrics;
12. create monitoring that joins infrastructure, service, data, model, and outcome signals while controlling alert fatigue;
13. diagnose drift and performance degradation without assuming every distribution change requires retraining;
14. write SLOs, runbooks, incident records, recovery objectives, and retirement plans for ML systems;
15. threat-model data, pipelines, model artifacts, dependencies, credentials, and inference interfaces;
16. apply provenance, supply-chain, privacy, fairness, documentation, and risk-management controls proportionately;
17. compare platform architecture and build-versus-buy choices using reliability, portability, skill, cost, and governance constraints;
18. read MLOps research critically, separating measured evidence, practitioner guidance, vendor claims, and educational synthesis.

## 4. Proposed prerequisites and boundaries

### Readiness map

| Level | Classification | Readiness | Diagnostic/remediation |
| --- | --- | --- | --- |
| P0 | **Prerequisite: Python and shell** | packages, tests, CLIs, files, processes, structured logs | Build and test a deterministic training CLI |
| P0 | **Prerequisite: Git and CI** | commits, branches, pull requests, artifacts, secrets, workflow gates | Create a non-deploying CI workflow with test artifacts |
| P1 | **Prerequisite: ML workflow** | splits, metrics, leakage, reproducibility, model limitations | Machine Learning workflow/evaluation review |
| P1 | **Prerequisite: data engineering** | schemas, partitions, batch/stream concepts, data quality | Validate a small partitioned dataset |
| P1 | **Prerequisite: software engineering** | APIs, dependency management, testing pyramid, configuration | Refactor a notebook into tested modules |
| P1 | **Prerequisite: containers/cloud** | images, registries, networks, storage, identity, least privilege | Containerize a read-only prediction service |
| P2 | **Supplementary: distributed systems** | retries, idempotency, consistency, queues, backpressure | Failure-injection lab |
| P2 | **Industry application: governance** | data licences, personal data, approvals, risk ownership | Complete a data/model risk intake |

### Cross-subject ownership

- **Machine Learning** owns algorithmic learning, metric foundations, and general model evaluation. MLOps operationalizes approved evaluation.
- **Data Management for Machine Learning** owns data models, storage, retrieval, and feature-data architecture. MLOps owns operational lineage, validation gates, version references, and freshness contracts.
- **Software Engineering for Machine Learning** owns detailed requirements, design, testing theory, maintainability, and team practices. MLOps owns lifecycle automation and release evidence.
- **API-Driven Cloud-Native Solutions** owns general API, container, Kubernetes, networking, and cloud-native design. MLOps applies a bounded subset to model delivery.
- **Introduction to Parallel and Distributed Programming** and **Distributed Machine Learning** own parallel algorithms, collective communication, and distributed training. MLOps treats training jobs as orchestrated components.
- **Architecting AI Systems** owns whole-system architecture and organization-wide trade-offs. MLOps owns the lifecycle platform and operating model.
- **ML System Optimization** owns compiler/runtime, hardware, throughput, quantization, and low-level serving optimization. MLOps measures and gates deployable artifacts.
- **Fair, Interpretable and Trustworthy ML** owns fairness/explainability methods. MLOps integrates approved checks into monitoring and governance.
- **Cyber Security** owns adversarial ML depth. MLOps owns secure development, provenance, secrets, access control, and incident interfaces.

## 5. Proposed 12-chapter outline

Every chapter is proposed, not official.

| Ch. | Proposed title | Classification and planned depth | Practical output | Hours |
| ---: | --- | --- | --- | ---: |
| 1 | From Model to Operated ML Product | **Supplementary:** lifecycle, roles, feedback loops, baselines, objectives. **Industry application:** system context and responsibility map. | Product/model canvas and lifecycle threat map | 12 |
| 2 | Reproducibility and Versioned Artifacts | **Supplementary:** code/data/config/environment/randomness identity. **Industry application:** immutable artifacts, retention, reproducible builds. | Reproduce a run from a clean checkout | 13 |
| 3 | Experiment Tracking, Metadata, and Lineage | **Supplementary:** runs, parameters, metrics, artifacts, lineage graphs. **Industry application:** access, retention, comparison, audit. | MLflow experiment plus lineage record | 14 |
| 4 | Data and Feature Operations | **Supplementary:** schemas, statistics, leakage, drift, labels, feature reuse. **Industry application:** contracts, freshness, offline/online parity. | Data validation and feature-contract pipeline | 14 |
| 5 | Workflow Orchestration and Pipeline Design | **Supplementary:** DAGs, component boundaries, caching. **Industry application:** idempotency, retries, backfill, scheduling, failure recovery. | Local orchestrated training DAG with injected failures | 14 |
| 6 | Continuous Integration for ML | **Supplementary:** test taxonomy. **Industry application:** code/data/model/container/IaC gates, evidence, policy, secrets. | Non-deploying CI pipeline with quality reports | 14 |
| 7 | Registry, Continuous Delivery, and Continuous Training | **Supplementary:** model registry and states. **Industry application:** promotion, approvals, canary/shadow, rollback, retraining triggers. | Signed promotion manifest and release simulation | 15 |
| 8 | Packaging and Serving Patterns | **Supplementary:** batch/online/stream/edge, schemas, serialization. **Industry application:** container, API, autoscaling, fallback, compatibility. | FastAPI model service and load/failure tests | 16 |
| 9 | Observability, Drift, and Outcome Monitoring | **Supplementary:** drift and performance concepts. **Industry application:** traces/logs/metrics, delayed labels, slices, alerts, dashboards. | Joined service-data-model monitoring report | 15 |
| 10 | Reliability Engineering and Incident Response | **Supplementary:** failure taxonomy. **Industry application:** SLI/SLO, error budget, RTO/RPO, runbook, rollback, post-incident learning. | Game-day exercise and blameless incident report | 13 |
| 11 | Security, Privacy, Supply Chain, and Governance | **Supplementary:** lifecycle risk model. **Industry application:** SSDF, SLSA, SBOM, identity, provenance, privacy, documentation, NIST AI RMF. | Threat model, provenance attestation, risk register | 16 |
| 12 | MLOps Platforms, Economics, and Maturity | **Supplementary:** reference architectures and maturity. **Industry application:** build/buy, multi-tenancy, cost, golden paths, adoption metrics, decommissioning. | Architecture decision record and platform roadmap | 14 |

**Chapter-guided core:** 170 hours.

## 6. Knowledge graph

| Source | Relation | Target | Note |
| --- | --- | --- | --- |
| product objective | `prerequisite_of` | ML system objective | Prevent proxy-metric drift |
| source control | `implemented_by` | code versioning | Git is one implementation |
| immutable identity | `used_by` | artifact lineage | Content digest preferred |
| data contract | `used_by` | pipeline validation | Schema plus semantic expectations |
| experiment metadata | `used_by` | reproducibility | Metadata alone is insufficient |
| model registry | `used_by` | promotion workflow | Registry is not an approval policy |
| pipeline component | `implemented_by` | container or package | Choose proportionate isolation |
| idempotency | `prerequisite_of` | safe retry | External effects need explicit keys |
| CI | `prerequisite_of` | continuous delivery | Passing tests does not authorize deployment |
| continuous training | `extension_of` | scheduled training | Trigger and approval are separate |
| shadow deployment | `alternative_to` | canary activation | No user-facing output in shadow mode |
| service SLO | `evaluated_by` | latency/error metrics | Outcome quality needs separate signals |
| data drift | `related_to` | model degradation | Neither implies the other |
| delayed label | `used_by` | outcome monitoring | Requires join and attribution design |
| trace context | `implemented_by` | OpenTelemetry | Avoid sensitive payload capture |
| provenance | `used_by` | supply-chain verification | Covers code, dependencies, data, models |
| model card | `used_by` | governance review | Must match actual artifact/version |
| incident review | `used_by` | reliability learning | Avoid blame and unsupported causality |
| platform golden path | `implemented_by` | reusable templates | Escape hatches remain governed |
| retirement policy | `used_by` | lifecycle closure | Delete/retain according to obligations |

## 7. Research query plan

| ID | Source | Query/purpose |
| --- | --- | --- |
| Q01 | brochure/local registry | verify MLOps title, pool, semester uncertainty, and lack of topic prose |
| Q02 | Crossref | exact-title DOI verification for ML Test Score, TFX, data documentation, MLOps architecture, Borg, ICSE case study |
| Q03 | Google Research | technical debt, production readiness, TFX, and data-validation primary records |
| Q04 | ACM/IEEE official metadata | production platforms, documentation, human/data failures, architecture |
| Q05 | JMLR | underspecification and production-reliability evidence |
| Q06 | arXiv | `MLOps AND (architecture OR taxonomy OR survey)`; discovery until venue verified |
| Q07 | USENIX | ML lifecycle/platform and operations presentations |
| Q08 | official standards | NIST AI RMF, SSDF, SLSA, provenance and supply-chain controls |
| Q09 | CNCF/project docs | Kubernetes, OpenTelemetry, OpenLineage, Kubeflow, KServe |
| Q10 | tool docs | MLflow, DVC, Feast; record exact current versions at implementation |
| Q11 | practitioner primary sources | Google Rules of ML, SRE books, Meta platform account, CD4ML |
| Q12 | citation graph | corrections, replications, limits, and later operational evidence |
| Q13 | security sources | model deserialization, dependency, CI runner, artifact-store, and inference threats |
| Q14 | case studies | failure and post-incident evidence with identifiable context; exclude marketing-only claims |
| Q15 | economics | unit cost, utilization, toil, lead time, change failure, and decommissioning evidence |

Selection score: direct syllabus-title relevance 20, methodological quality 15, educational value 15, reproducibility 10, primary/official status 10, operational applicability 10, accessibility 5, limitation/negative-evidence value 5, venue quality 5, recency where material 5. Citation count and vendor popularity do not determine inclusion.

Deduplicate by DOI, persistent identifier, normalized title plus first author, then canonical documentation URL. Cache verification and interpret 403/429 as access controls or throttling rather than invalidity.

## 8. Verified preliminary resources

All 30 records were checked on 2026-07-28. Documentation is version-sensitive and must be pinned when used in code. Confidence means identity/host verification, not endorsement of every claim.

### Standards, official documentation, and authoritative practice

| ID | Title | Author/organisation; year | Type | URL/identifier | Difficulty; relevance; prerequisites | Access | Confidence/status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R01 | Rules of Machine Learning | Martin Zinkevich / Google; n.d.; accessed 2026-07-28 | Official engineering guide | https://developers.google.com/machine-learning/guides/rules-of-ml/ | Intermediate; lifecycle/product lessons; ML workflow | Free | 1.00 / official host |
| R02 | Site Reliability Engineering books | Google SRE authors; 2016 onward | Books | https://sre.google/books/ | Intermediate-advanced; SLOs/incidents/toil; systems basics | Free official HTML; print varies | 1.00 / official host |
| R03 | MLflow Documentation | MLflow project; n.d.; accessed 2026-07-28 | Official docs | https://mlflow.org/docs/latest/ | Intermediate; tracking/registry/packaging; Python/SQL/storage | Free | 1.00 / official docs |
| R04 | Kubeflow Documentation | Kubeflow/CNCF; n.d.; accessed 2026-07-28 | Official docs | https://www.kubeflow.org/docs/ | Advanced; pipelines/platform; Kubernetes | Free | 1.00 / official docs |
| R05 | DVC Documentation | Iterative; n.d.; accessed 2026-07-28 | Official docs | https://dvc.org/doc | Intermediate; data/pipeline version references; Git/storage | Free | 1.00 / official docs |
| R06 | Feast Documentation | Feast project; n.d.; accessed 2026-07-28 | Official docs | https://docs.feast.dev/ | Advanced; feature-store concepts; data engineering | Free | 1.00 / official docs |
| R07 | Kubernetes Documentation | Kubernetes/CNCF; n.d.; accessed 2026-07-28 | Official docs | https://kubernetes.io/docs/ | Advanced; orchestration/deployment substrate; containers/networking | Free | 1.00 / official docs |
| R08 | Docker Documentation | Docker; n.d.; accessed 2026-07-28 | Official docs | https://docs.docker.com/ | Intermediate; reproducible packaging; Linux/processes | Free | 1.00 / official docs |
| R09 | OpenTelemetry Specifications | CNCF; n.d.; accessed 2026-07-28 | Open specification | https://opentelemetry.io/docs/specs/ | Advanced; telemetry semantics/context; distributed systems | Free | 1.00 / official spec |
| R10 | Artificial Intelligence Risk Management Framework 1.0 | Elham Tabassi / NIST; 2023 | Standard/guidance, NIST AI 100-1 | DOI `10.6028/NIST.AI.100-1`; https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10 | Intermediate; lifecycle risk; governance basics | Free | 1.00 / NIST verified |
| R11 | Secure Software Development Framework 1.1 | Souppaya, Scarfone, Dodson / NIST; 2022 | Standard, SP 800-218 | DOI `10.6028/NIST.SP.800-218`; https://csrc.nist.gov/pubs/sp/800/218/final | Advanced; secure lifecycle; software security | Free | 1.00 / NIST verified |
| R12 | SLSA Specification v1.2 | OpenSSF/SLSA; n.d.; accessed 2026-07-28 | Open specification | https://slsa.dev/spec/v1.2/ | Advanced; build provenance/supply chain; CI/build systems | Free | 1.00 / official spec |
| R13 | OpenLineage Documentation | OpenLineage project; n.d.; accessed 2026-07-28 | Open specification/docs | https://openlineage.io/docs/ | Advanced; job/dataset lineage; data pipelines | Free | 1.00 / official host |
| R14 | KServe Documentation | KServe/CNCF; n.d.; accessed 2026-07-28 | Official docs | https://kserve.github.io/website/docs/getting-started | Advanced; model serving patterns; Kubernetes | Free | 1.00 / official docs |

### Primary papers, surveys, and industry case records

| ID | Citation/record | Type/venue | Identifier/URL | Difficulty; relevance; prerequisites | Access | Confidence/status |
| --- | --- | --- | --- | --- | --- | --- |
| R15 | Sculley, D., et al. (2015). “Hidden Technical Debt in Machine Learning Systems.” | NeurIPS 2015 | https://research.google/pubs/hidden-technical-debt-in-machine-learning-systems/ | Intermediate; system debt taxonomy; ML/software basics | Free | 1.00 / Google Research |
| R16 | Breck, E., et al. (2017). “The ML Test Score: A Rubric for ML Production Readiness and Technical Debt Reduction.” | IEEE Big Data | DOI `10.1109/BigData.2017.8258038`; https://doi.org/10.1109/BigData.2017.8258038 | Intermediate; test/monitoring rubric; ML lifecycle | Publisher varies | 1.00 / Crossref |
| R17 | Baylor, D., et al. (2017). “TFX: A TensorFlow-Based Production-Scale Machine Learning Platform.” | KDD 2017 | DOI `10.1145/3097983.3098021`; https://doi.org/10.1145/3097983.3098021 | Advanced; platform/pipeline case; data systems | Publisher varies | 1.00 / Crossref and Google Research |
| R18 | Dunn, J. (2016). “Introducing FBLearner Flow: Facebook's AI backbone.” | Meta engineering case record | https://engineering.fb.com/2016/05/09/core-infra/introducing-fblearner-flow-facebook-s-ai-backbone/ | Intermediate; platform workflow; ML engineering | Free | 0.98 / primary organisation |
| R19 | Zaharia, M., et al. (2019). “Accelerating the Machine Learning Lifecycle with MLflow.” | USENIX OpML 2019 | https://www.usenix.org/conference/opml19/presentation/tut5 | Intermediate; open lifecycle platform; Python/ML | Free | 0.99 / official USENIX |
| R20 | Polyzotis, N., et al. (2019). “TensorFlow Data Validation: Data Analysis and Validation in Continuous ML Pipelines.” | SysML 2019 | https://research.google/pubs/tensorflow-data-validation-data-analysis-and-validation-in-continuous-ml-pipelines/ | Advanced; scalable validation; statistics/data systems | Free | 0.99 / Google Research |
| R21 | Sambasivan, N., et al. (2021). “Everyone wants to do the model work, not the data work: Data Cascades in High-Stakes AI.” | CHI 2021 | DOI `10.1145/3411764.3445518`; https://doi.org/10.1145/3411764.3445518 | Intermediate; socio-technical data failures; qualitative methods | Publisher varies | 1.00 / Crossref |
| R22 | Gebru, T., et al. (2021). “Datasheets for Datasets.” | Communications of the ACM 64(12), 86-92 | DOI `10.1145/3458723`; https://doi.org/10.1145/3458723 | Intermediate; dataset documentation; governance | Publisher varies | 1.00 / Crossref |
| R23 | Mitchell, M., et al. (2019). “Model Cards for Model Reporting.” | FAT* 2019 | DOI `10.1145/3287560.3287596`; https://doi.org/10.1145/3287560.3287596 | Intermediate; model documentation; evaluation/stakeholders | Publisher varies | 1.00 / Crossref |
| R24 | D'Amour, A., et al. (2022). “Underspecification Presents Challenges for Credibility in Modern Machine Learning.” | JMLR 23(226), 1-61 | arXiv `2011.03395`; https://jmlr.org/papers/v23/20-1335.html | Advanced; production-equivalent models with divergent behaviour; statistics/ML | Free | 1.00 / official JMLR |
| R25 | Kreuzberger, D., Kühl, N., & Hirschl, S. (2023). “Machine Learning Operations (MLOps): Overview, Definition, and Architecture.” | IEEE Access 11, 31866-31879 | DOI `10.1109/ACCESS.2023.3262138`; arXiv `2205.02302`; https://doi.org/10.1109/ACCESS.2023.3262138 | Intermediate-advanced; definition/reference architecture; software/ML | Open access | 1.00 / Crossref and arXiv |
| R26 | Amershi, S., et al. (2019). “Software Engineering for Machine Learning: A Case Study.” | ICSE-SEIP 2019 | DOI `10.1109/ICSE-SEIP.2019.00042`; https://doi.org/10.1109/ICSE-SEIP.2019.00042 | Intermediate; roles/challenges/process; software engineering | Publisher plus author copy | 1.00 / Crossref |
| R27 | Verma, A., et al. (2015). “Large-scale cluster management at Google with Borg.” | EuroSys 2015 | DOI `10.1145/2741948.2741964`; https://doi.org/10.1145/2741948.2741964 | Advanced; orchestration substrate context; distributed systems | Publisher varies | 1.00 / Crossref |
| R28 | Sato, D., Wider, A., & Windheuser, C. (2019). “Continuous Delivery for Machine Learning.” | Primary practitioner article | https://martinfowler.com/articles/cd4ml.html | Intermediate; CD4ML process; CI/CD and ML | Free | 0.99 / author-hosted primary article |
| R29 | Faubel, L., Schmid, K., & Eichelberger, H. (2023). “MLOps Challenges in Industry 4.0.” | SN Computer Science 4, 828; systematic literature review plus industry-focused analysis | DOI `10.1007/s42979-023-02282-2`; https://doi.org/10.1007/s42979-023-02282-2 | Advanced; MLOps activities and industrial constraints; software engineering/Industry 4.0 | Open access | 1.00 / Crossref and Springer |
| R30 | Liu, Y., Ling, Z., Huo, B., Wang, B., Chen, T., & Mouine, E. (2020). “Building A Platform for Machine Learning Operations from Open Source Frameworks.” | IFAC-PapersOnLine 53(5), 704-709 | DOI `10.1016/j.ifacol.2021.04.161`; https://doi.org/10.1016/j.ifacol.2021.04.161 | Advanced; applied platform architecture; ML lifecycle/open-source frameworks | Free article page; PDF availability varies | 1.00 / Crossref and Elsevier |

### Citation rejects

1. **DOI `10.1145/2939672.2939716` as an identifier for FBLearner Flow** — rejected. Crossref resolves it to “Domain Adaptation in the Absence of Source Domain Data,” an unrelated KDD paper. R18 uses Meta's primary engineering record and asserts no DOI.
2. **DOI `10.48550/arXiv.2205.02302` as the final IEEE identifier for R25** — rejected for the final-publication role. It identifies the 2022 preprint; the 2023 IEEE article uses `10.1109/ACCESS.2023.3262138`. The arXiv ID remains a related-version identifier.

## 9. Reading path

### Foundational systems path (4)

1. R15 Hidden Technical Debt — map feedback loops, glue code, entanglement, and undeclared consumers.
2. R16 ML Test Score — critique and adapt its tests rather than using the score as universal certification.
3. R17 TFX — identify component contracts, metadata, validation, and continuous refresh evidence.
4. R27 Borg — understand orchestration substrate principles without equating Borg/Kubernetes with MLOps.

### Established paper path (5)

5. R19 MLflow — separate lifecycle interfaces from a complete operating model.
6. R20 TensorFlow Data Validation — connect statistics, anomalies, schemas, and pipeline placement.
7. R23 Model Cards — bind reporting practice to a versioned model and evaluated context.
8. R26 Software Engineering for ML — map roles and challenges to ownership and team design.
9. R30 Open-source MLOps platform — examine an applied platform architecture assembled from open-source frameworks.

### Modern/reliability path (5)

10. R21 Data Cascades — trace compounding data failures and organizational causes.
11. R22 Datasheets — design documentation as an operational control, not paperwork.
12. R24 Underspecification — explain why equal test performance may not imply equal production behaviour.
13. R25 MLOps architecture — compare its definition and components with observed platform needs.
14. R29 MLOps Challenges in Industry 4.0 — test general MLOps assumptions against cyber-physical constraints.

### Survey/review paper path (2)

15. R25 MLOps architecture — primary taxonomy/reference map.
16. R29 MLOps Challenges in Industry 4.0 — systematic review of MLOps activities followed by analysis of industrial constraints.

### Applied/industry paper path (4)

17. R17 TFX — production-scale platform architecture and operational component contracts.
18. R20 TensorFlow Data Validation — production pipeline evidence for scalable data analysis and validation.
19. R26 Software Engineering for ML — industry case evidence about roles, process, and engineering challenges.
20. R30 Open-source MLOps platform — applied platform design and integration evidence.

### Chapter-resource matrix

| Ch. | Primary/research | Survey/practice | Implementation/standard |
| ---: | --- | --- | --- |
| 1 | R15, R26 | R01, R25 | R10 |
| 2 | R15, R24 | R01 | R05, R08, R12 |
| 3 | R17-R19 | R25 | R03, R13 |
| 4 | R20-R22 | R01 | R06, R13 |
| 5 | R17-R20 | R25, R28 | R04 |
| 6 | R16, R25-R26 | R01, R28 | R11-R12 |
| 7 | R16-R19, R25 | R28 | R03-R04, R12 |
| 8 | R17, R27 | R02, R25 | R07-R08, R14 |
| 9 | R20, R24 | R02 | R03, R09 |
| 10 | R15-R16, R24 | R02 | R09-R10 |
| 11 | R21-R23 | R10 | R11-R12 |
| 12 | R17-R19, R25-R27 | R01-R02 | R03-R07 |

For this matrix, R15-R20, R23, R26-R27, and R30 provide foundational or established papers; R21-R22, R24-R25, and R29 provide modern papers. Every chapter therefore has at least one foundational/established paper where applicable, one modern paper, one survey/tutorial or authoritative practice resource, and one implementation resource or standard where applicable.

## 10. Complete project portfolio

All projects are non-official alternatives.

### Beginner B1 — Reproducible Training Package

- **Classification:** Supplementary + Industry application.
- **Problem statement:** turn a notebook-style scikit-learn experiment into a deterministic, tested CLI package reproducible from a clean checkout.
- **Learning objectives:** separate configuration/code/data; capture environment and seeds; verify artifact identity.
- **Prerequisites:** Chapters 1-2, Python, Git, basic ML.
- **Architecture:** synthetic-data generator → validated config → trainer → evaluator → artifact manifest.
- **Dataset:** seeded synthetic classification with versioned generator; no external licence.
- **Milestones:** baseline; package; tests; lockfile; clean-room run; evidence report.
- **Implementation requirements:** Python 3.12, type hints, pytest, input validation, no absolute paths, content hashes.
- **Evaluation metrics:** deterministic metric tolerance, setup time, test coverage evidence, artifact checksum parity.
- **Expected deliverables:** repository, CLI, tests, lockfile, manifest, README.
- **Testing requirements:** invalid config, missing data, seed replay, clean environment, artifact round trip.
- **Extension ideas:** DVC references, container build, signed manifest.
- **Deployment guidance:** no production service; publish a local reproducibility bundle.
- **Ethical considerations:** synthetic conclusions must not be generalized to people.
- **Marking rubric:** reproducibility 30%, correctness 25%, tests 20%, design 15%, documentation 10%.

### Beginner B2 — Experiment Tracking and Model Registry

- **Classification:** Supplementary + Industry application.
- **Problem statement:** track controlled experiments and promote exactly one approved artifact through explicit registry states.
- **Learning objectives:** design run metadata; compare runs; separate registration, approval, deployment, and activation.
- **Prerequisites:** Chapters 1-3, SQL/storage basics.
- **Architecture:** training CLI → MLflow tracking → artifact store → registry → approval manifest.
- **Dataset:** seeded synthetic regression with controlled drift.
- **Milestones:** tracking server; schema; five runs; comparison; registry; rejected promotion test.
- **Implementation requirements:** pinned MLflow, database backend, redacted secrets, artifact digests.
- **Evaluation metrics:** lineage completeness, reproducibility, rejected-invalid promotions, metadata query latency.
- **Expected deliverables:** compose file, code, tests, run exports, approval record, threat notes.
- **Testing requirements:** duplicate run, missing metric, corrupt artifact, unauthorized promotion, restore.
- **Extension ideas:** OpenLineage event, remote artifact storage, retention job.
- **Deployment guidance:** local isolated stack; no public endpoint or cloud credentials.
- **Ethical considerations:** logs must exclude personal data and secret values.
- **Marking rubric:** metadata 25%, controls 25%, implementation 20%, tests 20%, security 10%.

### Intermediate I1 — Data Contract and Feature Pipeline

- **Classification:** Supplementary + Industry application.
- **Problem statement:** build a batch feature pipeline that detects schema, semantic, leakage, and freshness failures before training.
- **Learning objectives:** express data contracts; make retries safe; track lineage; distinguish anomaly from harm.
- **Prerequisites:** Chapters 1-5, pandas/SQL, statistics.
- **Architecture:** versioned generator → raw zone → validator → feature transform → offline store → lineage events.
- **Dataset:** synthetic transactions with explicit delayed labels, protected-like test attributes, and injected failures.
- **Milestones:** contract; baseline; failure catalogue; validation; backfill; lineage; report.
- **Implementation requirements:** typed schemas, content hashes, idempotency keys, no silent coercion, quarantine output.
- **Evaluation metrics:** injected-failure recall/precision, false alarms, backfill parity, runtime, lineage completeness.
- **Expected deliverables:** pipeline, tests, contracts, lineage graph, runbook, data card.
- **Testing requirements:** schema evolution, duplicates, late data, null bursts, leakage, replay.
- **Extension ideas:** Feast offline/online parity, streaming input, contract compatibility.
- **Deployment guidance:** scheduled local/container batch job with quarantine; not live financial use.
- **Ethical considerations:** protected-like attributes are for auditing, not discriminatory decision rules.
- **Marking rubric:** contracts 25%, correctness 25%, failure tests 20%, lineage 15%, ethics/reporting 15%.

### Intermediate I2 — CI/CD Model Service with Safe Release

- **Classification:** Industry application.
- **Problem statement:** build, test, package, and simulate release of a prediction API using immutable artifacts and canary/rollback gates.
- **Learning objectives:** implement ML-specific CI; validate interfaces; separate deployment from traffic activation.
- **Prerequisites:** Chapters 1-8, FastAPI, Docker, CI basics.
- **Architecture:** source → CI gates → image/model attestations → staging service → canary simulator → rollback.
- **Dataset:** synthetic requests and a frozen evaluation set generated in-repository.
- **Milestones:** service; tests; image; SBOM; staging; canary metrics; rollback drill.
- **Implementation requirements:** non-root image, schemas, timeouts, health/readiness, digest pins, no embedded secret.
- **Evaluation metrics:** gate detection, p95 latency, error rate, rollback time, image size, vulnerability findings.
- **Expected deliverables:** code, workflow, image recipe, test evidence, manifests, runbook.
- **Testing requirements:** unit/contract/integration/load, corrupt model, incompatible schema, timeout, rollback.
- **Extension ideas:** KServe manifest, shadow mode, signed provenance.
- **Deployment guidance:** local cluster or simulation only; do not publish externally.
- **Ethical considerations:** no real-person data; document misuse and access controls.
- **Marking rubric:** delivery safety 25%, tests 25%, service reliability 20%, security 15%, documentation 15%.

### Advanced A1 — Production Monitoring and Incident Game Day

- **Classification:** Advanced extension + Industry application.
- **Problem statement:** operate a simulated model service through covariate shift, concept degradation, delayed labels, dependency failure, and rollback.
- **Learning objectives:** join telemetry layers; define SLOs; tune alerts; diagnose without unsupported causality.
- **Prerequisites:** Chapters 1-10, statistics, observability.
- **Architecture:** traffic/label simulator → service → OpenTelemetry → metric store/dashboard → detector → incident workflow.
- **Dataset:** procedural requests/labels with versioned incident scenarios.
- **Milestones:** SLOs; instrumentation; baseline; detectors; game day; recovery; post-incident review.
- **Implementation requirements:** correlation IDs, bounded-cardinality metrics, privacy filter, alert ownership, fallback.
- **Evaluation metrics:** detection delay, false-alert rate, time to acknowledge/recover, outcome/service SLOs, telemetry cost.
- **Expected deliverables:** stack, dashboards, tests, runbook, timeline, blameless report.
- **Testing requirements:** missing labels, clock skew, telemetry outage, high cardinality, detector false positive, rollback.
- **Extension ideas:** champion-challenger, adaptive thresholds, cost-aware sampling.
- **Deployment guidance:** isolated environment with capped resources and synthetic traffic.
- **Ethical considerations:** monitoring must not capture raw sensitive features; operator surveillance is out of scope.
- **Marking rubric:** observability 25%, incident rigour 25%, reliability 20%, tests 15%, privacy/reporting 15%.

### Research R1 — Evidence-Based MLOps Maturity Experiment

- **Classification:** Research-oriented Advanced extension.
- **Problem statement:** test whether selected lifecycle controls improve reproducibility, lead time, failure detection, and recovery on repeated project changes.
- **Learning objectives:** operationalize maturity claims; preregister hypotheses; measure trade-offs; report negative results.
- **Prerequisites:** all chapters, experimental design, statistics.
- **Architecture:** baseline workflow and controlled MLOps workflow → standardized change scenarios → event log → analysis.
- **Dataset:** synthetic tabular generator plus versioned change catalogue; no external data.
- **Milestones:** literature review; preregistration; baseline; treatment; pilots; 10+ repeated trials; analysis; paper.
- **Implementation requirements:** same tasks/models/hardware budget, blinded failure seeds where practical, immutable evidence.
- **Evaluation metrics:** successful reproduction, lead time, change-failure rate, detection/recovery time, toil proxy, compute/cost.
- **Expected deliverables:** protocol, code, event data, analysis notebook, negative results, paper-style report.
- **Testing requirements:** scenario parity, event completeness, duplicate detection, analysis sensitivity, environment reconstruction.
- **Extension ideas:** team study with ethics approval, alternative orchestrator, security-control treatment.
- **Deployment guidance:** research environment only; publish anonymized synthetic evidence.
- **Ethical considerations:** do not monitor worker productivity or infer organizational causality from a synthetic experiment.
- **Marking rubric:** design 25%, measurement validity 25%, implementation 20%, analysis 15%, transparency/ethics 15%.

## 11. Learning hours

| Activity | Hours |
| --- | ---: |
| Readiness diagnostic/remediation | 8 |
| Guided reading and architecture reasoning | 56 |
| Hands-on labs | 60 |
| Assignments and quizzes | 32 |
| Guided paper reading | 22 |
| One selected project pathway | 32 |
| Cumulative review/oral defence | 10 |
| **Total** | **220** |

The four chapter activities sum to the chapter table's 170 hours (`56 + 60 + 32 + 22`). The full total is `8 + 170 + 32 + 10 = 220`. Projects are alternatives; all six are not included in 220.

## 12. Validation gates, risks, and next tasks

### Planning gate

- [x] brochure identity and title-only boundary recorded;
- [x] every proposed topic classified as non-official;
- [x] 12 proposed chapters within 8-16;
- [x] outcomes, prerequisites, graph, queries, resources, reading path, projects, and hours present;
- [x] 30 resources contain title, author/organisation, publication year or `n.d.`, access date, type, URL/identifier, access status, difficulty, relevance, prerequisites, confidence, and verification;
- [x] six projects meet 2 beginner / 2 intermediate / 1 advanced / 1 research and all contract fields;
- [x] workload adds once;
- [x] citation rejects documented;
- [x] no full chapter drafted.

### Principal risks

1. **Curriculum uncertainty:** title-only source. Mitigation: maintain labels and reconcile any future official syllabus.
2. **Tool churn:** APIs and versions change. Mitigation: teach invariants, pin implementation versions, archive evidence.
3. **Vendor bias:** case studies may report selective success. Mitigation: separate claims, context, limitations, and reproductions.
4. **Scope collision:** cloud, data, software, security, architecture, and distributed topics overlap electives. Mitigation: enforce ownership matrix.
5. **Unsafe automation:** continuous training/deployment may amplify failure. Mitigation: approval, canary, rollback, fallback, and risk gates.
6. **Sensitive telemetry:** features, predictions, labels, and traces may expose people. Mitigation: minimization, redaction, access, retention.
7. **Artifact threats:** unsafe deserialization, poisoned inputs, dependencies, and credentials. Mitigation: SSDF/SLSA, scanning, signing, isolation.
8. **Metrics gaming:** one maturity score can hide risk. Mitigation: balanced evidence and qualitative review.
9. **Infrastructure cost:** labs can over-provision. Mitigation: local-first, quotas, teardown, and cost reporting.

### Chapter approval gate

Before publication each chapter must exceed 3,000 meaningful original prose words, pass claim/citation and mathematics review, run all code/tests in a pinned environment, validate links/identifiers, finalize dataset licences/checksums, meet accessibility/metadata rules, and contain no placeholders or internal instructions.

### Recommended next tasks

1. Integrate this provisional outline while preserving the title-only notice.
2. Freeze the cross-subject ownership matrix.
3. Pin one local-first reference stack for labs; keep architecture tool-neutral.
4. Approve Chapter 1 and Chapter 2 task specifications before prose.
5. Build cached DOI/link and documentation-version validators.
6. Run independent security, reliability, code, citation, accessibility, and academic-editor reviews.
