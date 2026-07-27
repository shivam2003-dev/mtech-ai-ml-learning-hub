# Content Strategy

## Audience and promise

The hub serves a working technologist who can program but may need mathematical ideas rebuilt carefully. Every chapter follows:

```text
intuition -> simple example -> definition -> mathematics -> visual model
-> implementation -> application -> limitations -> research extension
```

The result must remain useful for examinations, engineering practice and research-paper reading.

## Curriculum boundaries

- **Official:** explicitly present in the BITS Pilani WILP brochure.
- **Prerequisite:** needed to understand an official topic.
- **Supplementary:** useful depth not stated in the brochure.
- **Advanced extension:** research-oriented continuation.
- **Industry application:** production practice connected to the topic.

No supplementary topic may be presented as an official syllabus unit.

## Book structure

Each subject contains front matter, 8-16 syllabus-shaped chapters, papers, projects, assignments, quizzes, datasets, references, glossary and further reading. Chapter counts vary with scope.

Principal chapters require at least 3,000 meaningful prose words, excluding code, metadata, navigation, references and boilerplate. Mathematical chapters normally target 4,000-7,000 words.

## Chapter experience

The chapter experience follows the successful explanatory pattern of Shivam's
existing *Speech and Language Processing* companion, adapted as original work
for this platform. It is a narrative learning arc, not a long checklist of
micro-headings. A chapter normally exposes **8-10 reader-facing sections** in
its table of contents:

1. Begin with a concrete problem or running story.
2. Give a conceptual map and explain what connects to what.
3. Build intuition before introducing formal language.
4. Derive the central result and work through a small case.
5. Implement it from first principles and, when useful, with a library.
6. Explain the real application and the engineering contract.
7. Cover failure modes, edge cases, evaluation, complexity, scale, safety and research links.
8. End with a study lab or assignment that produces inspectable evidence.
9. Use oral-exam questions and a complete summary to consolidate the chapter.

Learning objectives, prerequisites, symbols, readings, exercises, quiz
guidance, industry practice and next steps are required content, but belong in
the relevant narrative section or an H3/H4 sub-section. They must not inflate
the reader-facing table of contents into a 29- or 33-item compliance list.
Each chapter opens with a short **one-minute version**, a running example, and
a **chapter promise**. It closes with an original-scope notice where a source
book or external curriculum is discussed.

## Editorial standard

- Clear international English.
- Every symbol defined before use.
- Assumptions and applicability conditions stated.
- Intermediate derivation steps retained.
- Claims classified as definition, mathematical result, historical claim, experiment, current state of the art, industry recommendation or educational explanation.
- Types A-F require suitable support; current claims require recent verification.
- Source claims, educational interpretation and analogy are visually distinguished.

## Research source hierarchy

1. Official curriculum, original papers, official documentation, standards, established publishers and university lectures.
2. Recognised academic and research organisations and maintained open-source documentation.
3. High-quality practitioner material.
4. Community material only as supplementary context.

Discovery uses OpenAlex, Crossref, arXiv, Semantic Scholar, ACL Anthology, PubMed when relevant, official conference archives and author or university pages. Google Scholar scraping is excluded.

## Paper reading paths

Every subject plan targets:

- 3-5 foundational papers
- 5-10 established papers
- 5-10 modern papers
- 2-5 surveys
- 2-5 applied papers

Every chapter includes a foundational source when applicable, a modern paper, a survey or authoritative tutorial and an implementation resource where applicable.

## Practical work

Each subject has at least two beginner, two intermediate, one advanced and one research-oriented project. Project specifications include architecture, data, milestones, evaluation, tests, ethics, rubric and deployment guidance.

## Review states

`planned -> researching -> drafting -> technical-review -> citation-review -> editorial-review -> approved -> published`

Exceptional states are `needs-update` and `blocked`.

## Initial reference implementation

The first complete reference is **Mathematical Foundations for Machine Learning**. Its first chapter establishes the MDX, mathematics, code, citation, exercise, progress and accessibility conventions used by later books.
