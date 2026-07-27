# Multi-Agent Production Plan

## Resource envelope

The runtime provides four concurrent slots. One remains assigned to the orchestrator, leaving a maximum of three active workers. Work therefore runs in dependency-aware waves rather than starting all 45 subject leads simultaneously.

## Accountability model

There is exactly one persistent Subject Lead task record per subject. A live worker may resume that task across several sessions, but responsibility never splits between leads.

Subject Lead responsibilities:

- interpret only verified syllabus material
- define knowledge graph, prerequisites, units and chapters
- schedule specialist work
- review terminology, mathematics, code and citations
- submit a machine-readable completion report

Specialist roles are scheduled as bounded child tasks: syllabus analyst, curriculum designer, researcher, writer, mathematics reviewer, code author, diagram planner, exercise designer, paper curator, citation verifier, fact checker, editor, originality reviewer and metadata generator.

## Isolation

Agents use one of:

- `agent/<subject>/<task>` branches and worktrees for publishable content
- `tasks/agent-work/<agent-id>/` for non-overlapping planning reports

No two agents receive the same writable path.

## Dependency graph

```text
repository assessment ----+
official PDF extraction --+--> subject registry --> prerequisite graph
                                                  |
                        +-------------------------+
                        v
                 subject planning waves
                        |
         research -> outline -> plan validation
                        |
      chapter writing + code + exercises + diagrams
                        |
      math review + fact check + citation verification
                        |
             subject editorial review
                        |
             cross-subject consistency
                        |
                 develop integration
                        |
                main release gate
```

## Failure handling

Every task records attempts, checkpoint path, last error and next safe action. A failed task retries at most three times. The second retry narrows the task; the third may change worker. Completed artifacts are preserved. File locks are lease-based and released on terminal state.

## Progress reporting

The master manifest records totals by subject and state. Each agent completion report includes files, sources, verification counts, prose word count, tests, validation results, open issues and recommended next tasks.

## Semester 1 pilot schedule

Wave A runs Mathematical Foundations, Statistical Methods and Artificial and Computational Intelligence planning concurrently. Wave B runs Machine Learning planning while the orchestrator validates Wave A. Full chapter drafting begins only after all four outlines pass the plan gates.

