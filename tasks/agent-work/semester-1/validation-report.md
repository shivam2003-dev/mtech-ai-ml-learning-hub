# Semester 1 Independent Plan Validation

Review date: 2026-07-28  
Reviewer role: independent plan quality reviewer  
Scope: the Mathematical Foundations for Machine Learning and Introduction to Statistical Methods planning bundles only

## Executive decision

Both bundles are **acceptable as provisional planning artifacts**. Neither bundle is safe for unrestricted reference-content generation yet.

| Subject | Planning-artifact decision | Reference-content generation decision |
| --- | --- | --- |
| Mathematical Foundations for Machine Learning | Pass with remediation | **Conditional hold**: Chapter 1 specification may proceed after the shared-scope decision; bulk chapters and project content are not approved |
| Introduction to Statistical Methods | Pass with remediation | **Hold**: reconcile the hours model and probability ownership before any full reference chapter |

The official source boundary is handled well in both plans. The hold is caused by integration and specification issues, not fabricated syllabus claims.

## Inputs reviewed

| Bundle file | SHA-256 |
| --- | --- |
| `mathematical-foundations/plan.md` | `616afa8fe63fbec53854b4b520c69ba999bb799c8b86dc0e8b29a4a295bfa52a` |
| `mathematical-foundations/completion-report.json` | `2ff709424efdeef195da1d72a3ba20b653ef3855e3e4e7a4832caabdbdf47dfe` |
| `statistical-methods/plan.md` | `14dcf4e47b693421ae344faf33828d7bdc45ade91ed7beba485330e30cc44811` |
| `statistical-methods/completion-report.json` | `6a6fe630d4ac01c07500d82ee94b634215d494abd7aa1bc2a0c49a64f645d754` |

## Quality-gate matrix

| Gate | Mathematical Foundations | Statistical Methods | Reviewer finding |
| --- | --- | --- | --- |
| Source-of-truth labeling | Pass | Pass | Both state that the brochure verifies only the title and Semester 1 placement. Proposed topics, outcomes, prerequisites, and hours are explicitly non-official. |
| Chapter count | Pass: 12 | Pass: 12 | Both fall within the required 8-16 range. |
| Topic classification | Pass | Pass | Required Prerequisite, Supplementary, Advanced extension, and Industry application labels are used. |
| Learning outcomes and prerequisite map | Pass | Pass | Both are clearly provisional and sufficiently detailed for planning. |
| Knowledge graph | Pass | Pass | Relationship types are coherent; no strict prerequisite cycle is visible. |
| Resource count | Pass: 26 | Pass: 26 | Both fall within the required 15-30 preliminary range. |
| Resource metadata completeness | Pass with normalization advisory | Pass | Required human-readable fields are present. Mathematical Foundations sometimes relies on the section heading/title to carry year or resource type rather than a consistently named field. |
| Exact duplicate resources | Pass | Pass | No duplicate DOI exists within either registry and no DOI overlaps across the two plans. Reading-path reuse of a registered resource is intentional, not duplication. |
| Paper identifiers and destinations | Pass with access-control note | Pass with access-control note | See identifier audit below; no dead URL was observed. |
| Paper-path categories | Pass | Pass | Mathematical Foundations provides 4 foundational, 6 established, 5 modern, 3 survey/tutorial, and 2 applied papers. Statistical Methods provides sufficient category counts, with intentional reuse across survey/applied views. |
| Project count and tiers | Pass: 2/2/1/1 | Pass: 2/2/1/1 | Both meet beginner/intermediate/advanced/research tier counts. |
| Project field completeness | **Fail for project generation** | Pass with dataset advisory | Mathematical Foundations projects omit explicit learning objectives, prerequisites, extension ideas, and deployment guidance. Statistical Methods covers the required fields, but several public datasets remain generically described rather than identified and licensed. |
| Hour arithmetic | Pass | **Fail** | Mathematical Foundations chapter hours sum to 116 and total components sum to 160. Statistical Methods chapter rows sum to 196, while the prose also decomposes the same 196 into 140 guided + 36 assignments + 20 project/review hours; the relationship is ambiguous and risks double counting. |
| Cross-subject scope | **Fail jointly** | **Fail jointly** | Mathematical Foundations Chapters 8-9 and Statistical Methods Chapters 2-4 substantially duplicate probability, random variables, distributions, expectation, LLN, and CLT. Ownership and cross-links must be decided before prose generation. |
| Completion contract | Pass | Pass with auditability advisory | Both JSON files parse and contain all mandatory output-contract keys. Statistical Methods aggregates its 26 resources into one `sourcesUsed` catalogue record; listing resource IDs would improve traceability. |
| Full chapters absent | Pass | Pass | Neither bundle drafted a full chapter. |

## Identifier and URL audit

- Extracted **38 unique DOI values** across both plans.
- Crossref returned metadata successfully for 28 during the concurrent review; 10 requests returned HTTP 429 after throttling. The latter are rate-limit results, not invalid-identifier evidence, and the plans contain prior publisher/Crossref verification records for them.
- Extracted and probed **54 unique external URLs** from the plans.
- Results: 31 returned HTTP 200, one returned HTTP 202, and 22 returned HTTP 403 from publisher/access-control endpoints.
- No checked URL returned 404, 410, 500, or a connection-failure status.
- DOI matching, official JMLR/PMLR/OpenReview/arXiv destinations, and university/publisher URLs are internally consistent with the cited titles.

Decision: identifiers and URLs pass for the planning gate. Re-run the citation pipeline serially with caching before publication so access throttling is not represented as verification failure.

## Blocking findings

### VAL-S1-001 - Probability scope is duplicated

Severity: major, joint.

- Mathematical Foundations proposes full chapters on probability and random variables/distributions, including LLN/CLT intuition.
- Statistical Methods proposes probability, random variables/distributions, and sampling distributions as its first inferential foundation.
- Generating both independently would violate the cross-subject consistency and repeated-explanation gates.

Required remediation:

1. Assign Mathematical Foundations ownership of notation, probability axioms, conditional probability, Bayes' rule, random-variable mechanics, expectation, variance, covariance, and distribution transformations.
2. Assign Statistical Methods ownership of sampling design, sampling distributions, standard errors, LLN/CLT as inferential tools, estimation, intervals, testing, regression, and robustness.
3. Replace repeated derivations in Statistical Methods with concise refreshers and explicit cross-links, while keeping a readiness diagnostic for students who enter directly.
4. Freeze shared notation before drafting.

### VAL-S1-002 - Statistical Methods hours are internally ambiguous

Severity: major.

The 12 chapter rows total 196 hours. The prose then calls 196 the total of 140 guided, 36 assignment, and 20 project/review hours. It is unclear whether chapter-row hours already include those activities.

Required remediation:

- Define one additive hours schema: reading/derivation, labs, assignments/quizzes, and projects.
- Recalculate every chapter and route from that schema.
- Keep the 144-hour Chapters 1-9 route only if its components reconcile with the same model.

### VAL-S1-003 - Mathematical Foundations project specifications are incomplete

Severity: major for project generation; minor for Chapter 1 prose.

The projects have problems, architecture/data, milestones, deliverables/evaluation, tests, and ethics notes. They do not consistently state:

- learning objectives;
- prerequisite chapters/skills;
- extension ideas;
- deployment guidance.

The percentage evaluation lines can serve as rubrics, but they should be normalized into the common rubric schema.

Required remediation: add all missing project fields before generating project pages or assigning project writers.

## Non-blocking findings

### VAL-S1-004 - Dataset identity is not final

Several Statistical Methods projects say “documented open” or “public” dataset without naming a dataset, license, version, or canonical URL. Keep synthetic data as the default until exact provenance is approved.

### VAL-S1-005 - Resource metadata should become structured data

Both plans are readable, but downstream validation will be safer if each resource is moved into a schema with stable ID, title, authors/organisation, year, type, URL, DOI/arXiv/provider ID, venue, access date, difficulty, relevance, prerequisites, access status, confidence, and verification status.

### VAL-S1-006 - Completion-source traceability differs

The Mathematical Foundations completion report lists R01-R26 individually. Statistical Methods records the catalogue as a count and pointer. This is contract-compliant but less auditable; include its resource IDs in the next report.

## Approval boundaries

### Mathematical Foundations for Machine Learning

- Safe now: subject-page metadata, roadmap card, provisional outline display, prerequisite diagnostic specification, and Chapter 1 task specification.
- Not safe now: independent probability chapters, bulk chapter generation, or project-page generation.
- Approval condition: resolve VAL-S1-001 and VAL-S1-003; retain the visible `official-title-only` notice.

### Introduction to Statistical Methods

- Safe now: subject-page metadata, provisional outline display, knowledge-graph integration, and research-resource catalogue.
- Not safe now: full chapter generation or final project publication.
- Approval condition: resolve VAL-S1-001 and VAL-S1-002; identify datasets before project implementation.

## Re-review acceptance tests

1. A single cross-subject ownership matrix maps every overlapping probability concept to one primary chapter and one or more cross-links.
2. Statistical Methods hours add exactly once across a documented activity schema.
3. All six Mathematical Foundations projects contain every required specification field.
4. Statistical Methods non-synthetic datasets have title, provider, version/date, license, URL, and intended fields.
5. Resource catalogues validate against a common metadata schema.
6. Updated completion reports list remediation tests and do not claim full-content completion.

## Reviewer conclusion

The plans demonstrate strong source discipline, academically credible research, and appropriate master’s-level ambition. Their remaining problems are concrete and repairable. Approval is limited to integration of the provisional planning artifacts and non-content scaffolding; unrestricted reference-content generation remains on hold pending the re-review tests above.
