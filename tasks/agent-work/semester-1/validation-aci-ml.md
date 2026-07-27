# Semester 1 Independent Validation: ACI and Machine Learning

Review date: 2026-07-28  
Reviewer role: independent subject-plan quality reviewer  
Scope: the Artificial and Computational Intelligence and Machine Learning planning bundles only

## Executive decision

Both bundles are credible provisional plans, but neither is approved for unrestricted chapter generation.

| Subject | Planning-artifact decision | Content-generation decision |
| --- | --- | --- |
| Artificial and Computational Intelligence | **Pass with remediation** | **Conditional hold.** Subject scaffolding and project task specifications may proceed. Full chapters remain on hold until unresolved chapter-level sources and cross-subject ownership are closed. |
| Machine Learning | **Pass with remediation** | **Hold.** Correct the official-topic count, complete the project contracts, and record scope ownership before generating reference prose. |

The principal ML defect is not missing coverage. The official registry and the plan's own mapping contain **21 distinct brochure topics**, while the completion report and validation checklist claim “20 of 20.” All 21 are mapped, but the machine-readable assertion is false and must be corrected.

## Inputs reviewed

| Bundle file | SHA-256 |
| --- | --- |
| `artificial-computational-intelligence/plan.md` | `7bfedd6514d8e8a2d2461bc8a701c253b9f99b5da7c56593c5c2baac1c73b235` |
| `artificial-computational-intelligence/completion-report.json` | `d1225dfa0e57cad643e4be5486e9807b5087eb84f2305a36bc09713229c4282a` |
| `machine-learning/plan.md` | `5cfbd901774fd1212317c57ea2783392b38bb023c8496b882077a753ee9afb72` |
| `machine-learning/completion-report.json` | `bb8bc322b2791003abe66ef552b6ad46e01a2bd84f474c021f75d61d6d664005` |

The local brochure hash is `fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b`, matching the curriculum record and the ML completion report.

## Quality-gate matrix

| Gate | ACI | Machine Learning | Reviewer finding |
| --- | --- | --- | --- |
| Brochure boundary | Pass | Pass | ACI correctly states that only its title and Semester 1 placement are official. ML correctly identifies the official topic prose on physical PDF page 14 / printed page 12. |
| Official-topic coverage | Not applicable: title only | **Coverage pass; count fail** | The registry and plan mapping contain 21 topics, and every one maps to a chapter. The claimed `passed-20-of-20` result is inaccurate. |
| Non-official classification | Pass | Pass | Proposed prerequisites, supplementary material, extensions, industry material, outcomes, tools, and hours are visibly labelled. |
| Chapter count | Pass: 12 | Pass: 12 | Both are within the required 8-16 range. |
| Learning outcomes and prerequisites | Pass, provisional | Pass, provisional | Both are sufficiently detailed for planning and avoid claiming brochure authority. |
| Resource target | Pass: 28 catalogue entries | Pass: 26 catalogue entries | Both meet the requested 15-30 preliminary-resource range. |
| Paper-path mix | Pass | Pass | ACI lists 5 foundational, 6 established, 5 modern, 3 survey/tutorial, and 4 applied items. ML lists 4 foundational, 6 established, 5 modern, 3 survey/tutorial, and 2 applied items. |
| Chapter-level source readiness | **Fail for full chapters** | Pass for planning | ACI deliberately leaves modern, survey, or foundational selections unresolved for Chapters 2, 3, 5, and 7-11. The plan itself correctly says these entries block final chapter approval. |
| Identifier accuracy | Pass with bounded-check note | Pass with bounded-check note | DOI and arXiv identifiers checked were consistent with the named works. Access-control and throttling responses were not treated as invalid citations. |
| Duplicate resources | Advisory | Advisory | Rosenblatt's perceptron paper and Model Cards occur in both plans. This is legitimate reuse but should be represented once in the shared resource registry with subject links. |
| Project tier count | Pass: 2/2/1/2 | Pass: 2/2/1/1 | Both meet or exceed the required tier counts. |
| Project contract completeness | Pass with dataset advisory | **Fail for project generation** | ACI explicitly covers all required project fields. ML compresses several required fields and does not explicitly provide prerequisites, learning objectives, testing requirements, extension ideas, and deployment guidance for every project. |
| Hours arithmetic | Pass | Pass with workload-definition advisory | ACI chapter rows and activity categories each reconcile to 168 hours as two views of the same core plan. ML chapter rows total 136, and 4 + 136 + 24 + 16 = 180. ML must explain how six substantial project/assessment choices fit into only 24 hours. |
| Cross-subject scope | **Major remediation** | **Major remediation** | Neural networks/backpropagation, Bayesian/statistical inference, evaluation, and the MDP bridge overlap neighbouring Semester 1/2 subjects. The prose states boundaries, but no enforceable ownership matrix exists. |
| Completion contract | Pass with traceability defect | Pass with inaccurate validation result | Both JSON files parse and contain every required contract key. ACI's 32 verified citations can be reconciled as 28 catalogue entries plus four extra reading-path items, but they are not itemized; its one rejection is unexplained. ML's sources and two rejected DOI candidates are well documented, but `officialTopicCoverage` and `scopeIsolation` overclaim. |
| Full chapters absent | Pass | Pass | Neither planning agent generated a full chapter. |

## Machine Learning official-topic audit

The source-of-truth registry lists 21 items, not 20:

1. Introduction to Machine Learning
2. Various kinds of learning
3. Supervised Learning
4. Unsupervised Learning
5. Machine Learning workflow
6. Bayesian Learning
7. MAP Hypothesis
8. Bayes Optimal Classifier
9. Naive Bayes Classifier
10. Linear Models for Regression
11. Linear Models for Classification
12. Non-Linear models
13. Decision trees
14. MDL Principle
15. Instance Based Learning
16. Support Vector Machines
17. Ensemble Learning
18. Clustering
19. k-means
20. GMM
21. Machine Learning Model Evaluation/Comparison

The plan's topic-to-chapter table maps these to Chapters 1-12 without omission. Therefore:

- content coverage: **21/21, pass**;
- completion-report assertion `passed-20-of-20`: **fail**;
- validation checklist phrase “all 20 official brochure topics”: **fail**;
- required remediation: use one canonical 21-item list generated from `subject-registry.yaml`, then regenerate the count rather than maintaining a manual number.

No two source topics should be silently merged merely to preserve the number 20. If the programme owner later provides an official grouping convention, record that convention separately while retaining the 21 verbatim source phrases.

## Identifier and link audit

The review used bounded, concurrent checks with redirects and short timeouts:

- 33 unique DOI strings were extracted. Crossref returned HTTP 200 metadata for 32; the remaining AdaBoost DOI request was rate-limited (HTTP 429), while its DOI resolver returned HTTP 200.
- Nine unique arXiv IDs were queried together through the arXiv API. All nine returned titles matching the plans.
- 51 unique external URLs were probed: 36 returned HTTP 200, four returned HTTP 202, nine returned HTTP 403 from access-controlled or bot-protected endpoints, and two documentation hosts returned HTTP 429.
- No canonical checked URL was shown to be dead. An initial generic URL extractor truncated the parenthesized Zadeh DOI and produced a false 404; a direct check of the complete DOI returned HTTP 200. This parser limitation is excluded from the result.
- Stanford CS229's unusual `materials.html-full` URL returned HTTP 200 with the expected “CS 229: Machine Learning (Course handouts)” title.
- The ML report's two rejected DOI candidates are correctly retained as rejection evidence rather than published citations.

These checks establish identifier plausibility for the planning gate, not claim-level verification. Publication still requires cached, serial metadata validation and source reading.

## Blocking findings

### VAL-ACI-ML-001 — ML's official-topic count is wrong

Severity: major for integration.

The official registry and the plan contain 21 distinct topics, but the completion report claims `passed-20-of-20`. This makes the audit non-reproducible even though coverage is complete.

Required remediation:

1. Change all “20 official topics” assertions to 21.
2. Derive the count and mapping from the curriculum registry.
3. Re-run the completion report with `officialTopicCoverage: passed-21-of-21`.

### VAL-ACI-ML-002 — Cross-subject ownership is descriptive, not enforceable

Severity: major, joint.

- ACI Chapter 6 derives perceptrons, multilayer networks, and backpropagation, overlapping ML Chapters 4-5 and Deep Neural Networks.
- ACI Chapter 4 introduces MDP vocabulary and gridworld, overlapping Deep Reinforcement Learning.
- ACI Chapter 11 and ML Chapter 12 overlap Statistical Methods in uncertainty, comparison, and evaluation.
- ML Chapter 2 uses Bayesian learning and ML Chapter 12 uses uncertainty-aware comparison, requiring explicit boundaries with Mathematical Foundations and Statistical Methods.

Required remediation: create a concept ownership matrix that assigns one primary derivation, defines refresher depth elsewhere, records notation, and supplies cross-links. ACI's MDP content should remain a conceptual decision-making bridge; ML should own model-specific Bayesian use and evaluation workflow while linking to formal probability and inference foundations.

### VAL-ACI-ML-003 — ACI chapter citations are incomplete

Severity: major for full chapter generation.

The per-chapter matrix leaves source selections unresolved for Chapters 2, 3, 5, and 7-11. This is transparent and acceptable during planning, but it fails the chapter research gate.

Required remediation: resolve and verify each “to be selected” entry, add it to the structured resource registry, and record why it serves its pedagogical role before assigning chapter prose.

### VAL-ACI-ML-004 — ML project specifications do not satisfy the output contract

Severity: major for project generation.

The six ML projects have strong problems, data ideas, architectures, milestones, deliverables, rubrics, and ethics notes. They do not consistently contain explicit:

- learning objectives;
- prerequisites;
- testing requirements;
- extension ideas;
- deployment guidance.

Required remediation: normalize all six projects to the mandated field schema before project-page generation. Named external datasets must also include provider, version/date, licence, canonical URL, and intended fields.

### VAL-ACI-ML-005 — Completion reports overstate traceability

Severity: moderate.

- ACI reports 32 verified and one rejected citation. The 32 can be numerically reconstructed from 28 catalogue resources plus four extra reading-path sources, but `sourcesUsed` does not list those records and the rejected citation is not identified.
- ML's citation records and rejection evidence are traceable, but `scopeIsolation: passed` is unsupported until the ownership matrix exists.

Required remediation: list resource IDs/identifiers in ACI's report, document the rejected candidate and reason, and change both reports' affected validation results to provisional or remediation-required.

## Non-blocking findings

### VAL-ACI-ML-006 — Dataset provenance is not final

ACI refers to an optional public sensor dataset, a road-graph subset, a UCI/OpenML dataset, and benchmark suites without final identity/version/licence. ML similarly leaves its text corpus and replication target selectable. Synthetic data is safe as a planning default; any external dataset must be approved before implementation.

### VAL-ACI-ML-007 — Shared resources should be normalized

The two exact cross-plan DOI overlaps are pedagogically justified:

- `10.1037/h0042519` — Rosenblatt's perceptron paper;
- `10.1145/3287560.3287596` — Model Cards.

Store each once and attach multiple subject/chapter relationships. This prevents duplicate summaries and verification drift.

### VAL-ACI-ML-008 — ML's 24-hour practical allocation needs definition

The 180-hour arithmetic is correct, but “six selected practical/project assessments: 24 hours” is difficult to reconcile with six specifications that include implementation, tests, experiments, and reports. Define whether 24 hours is a sampler, supervised contact time, or an incremental assessment budget; otherwise provide realistic per-project estimates outside the 180-hour core.

## Approval boundaries

### Artificial and Computational Intelligence

- Safe now: subject-page metadata, provisional outline, prerequisite map, knowledge-graph edges, project task specifications, and Chapter 1 task specification.
- Not approved: full Chapter 2-12 prose, bulk chapter generation, or final citation pages.
- Approval conditions: resolve VAL-ACI-ML-002, VAL-ACI-ML-003, and ACI portions of VAL-ACI-ML-005; retain the visible official-title-only notice.

### Machine Learning

- Safe now: subject-page metadata, provisional outline display, resource catalogue, and knowledge-graph integration.
- Not approved: full reference chapter prose or project-page generation.
- Approval conditions: resolve VAL-ACI-ML-001, VAL-ACI-ML-002, VAL-ACI-ML-004, and ML portions of VAL-ACI-ML-005.

## Re-review acceptance tests

1. `subject-registry.yaml`, the ML mapping table, checklist, and completion report all report 21 official topics and 21/21 coverage.
2. A concept ownership matrix covers neural/backpropagation, Bayesian foundations, evaluation/statistics, and the MDP/RL bridge.
3. Every ACI chapter has verified foundational/authoritative, modern, tutorial/survey, and implementation resources where applicable.
4. Every ML project validates against the complete project schema.
5. Every selected external dataset has identity, version/date, licence, URL, and intended fields.
6. ACI's 32 accepted and one rejected source are individually traceable.
7. ML's practical-hour model states what the 24-hour allocation includes.
8. Updated completion reports record the remediation tests and do not claim unsupported scope isolation.

## Reviewer conclusion

The plans show strong academic intent and unusually good source-boundary discipline. ACI is appropriately explicit that its curriculum is a proposed educational interpretation of a title-only brochure entry. ML covers the full official source list. The remaining holds are precise: correct the 21-topic audit, close unresolved citations, make cross-subject ownership executable, and normalize project/report contracts before prose generation.
