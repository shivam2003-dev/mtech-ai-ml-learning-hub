# Independent publication review — Sequential Decisions: From Rewards to Learning Contracts

## Decision

**PASS — approved for publication integration.**

The reviewed chapter meets the compact narrative standard used by the
Shivam2003 Speech and Language Processing companion: a concrete decision
problem, a short conceptual map, intuition before notation, a worked
derivation, tested code, failure analysis, evaluation and safety guidance, and
a study lab. It also meets the 3,000-word prose gate, explicit brochure
boundary, MathJax accessibility, source verification, static build, and
responsive-publication checks. One concrete edge-case issue was corrected in
the published NumPy example during review.

## Immutable reviewed snapshot

- Develop snapshot before review: `bc7c52ea70540dd3094376d315b97ebfc55799d4`
- Chapter: `content/subjects/deep-reinforcement-learning/chapters/01-sequential-decisions-and-the-drl-experimental-contract.mdx`
- Chapter SHA-256 after correction: `ad9c2bc6eee3fc614d0c6fe4febb75a9d8867ba6f8cd5c4001b1d129b471d573`
- Review date: 2026-07-28

Any chapter-hash change makes this chapter-specific approval stale.

## Curriculum boundary

The supplied BITS Pilani WILP brochure was rendered and checked against the
curriculum registry. Physical PDF page 12 (printed page 10) verifies the exact
title *Deep Reinforcement Learning* and compulsory Semester 2 placement. The
brochure provides no topic-level units, prerequisites, outcomes, assessment
weights, contact hours, or reading list for this subject. The chapter therefore
labels its proposed teaching material **Supplementary**, **Advanced extension**,
or **Industry application**, and does not present those proposals as official
units. No invented official syllabus detail was found.

## Editorial structure and originality

The chapter exposes nine reader-facing H2 sections, not a 29-item checklist.
Its narrative includes:

- Leena's pump-inspection decision contract as a running example;
- a one-pass map from interaction loop to MDP, Bellman reasoning, and Q-learning;
- intuition before formal MDP, return, value, and action-value definitions;
- an explicit Bellman expectation and optimality derivation;
- a numerical two-state worked update;
- first-principles NumPy implementation with terminal/truncation discussion;
- failure modes, data/reward problems, complexity, safety, privacy, and ethics;
- a research connection that separates paper claims, observations, and interpretation;
- practical exercise, assignment, oral questions, summary, and next reading.

The meaningful-prose script reports **3,949 words**, excluding frontmatter,
code, equations, headings, references, navigation, and URLs. The writing is an
original educational synthesis; no copied passage or suspicious imitation was
found in editorial review. This is an originality assessment, not a database
plagiarism certificate.

## Mathematics and code

The review confirms that:

- the finite-horizon return index includes each reward through the terminal step;
- the return recursion leads to the policy Bellman expectation equation;
- the optimality equations correctly replace policy averaging with a maximum;
- the two-state update `-1 + 0.9(0.8·2 + 0.2·0) = 0.44` is numerically correct;
- terminal targets omit the discounted next-Q term;
- truncation bootstrapping is explicitly marked as a task-dependent convention;
- the tabular Q-learning update and off-policy explanation agree;
- complexity statements are scoped to tabular lookup and approximate neural
  implementations.

The single Python fence was extracted from the MDX and executed on Python
3.14.6 with NumPy 2.3.4. Runtime checks cover terminal masking, terminal-start
episodes, finite Q values, dimensions, empty tables, non-numeric rewards,
non-callable terminal predicates, invalid state indices, and transition dtype.
The correction adds these checks without changing the chapter's teaching
contract.

## Sources and citations

The 12 chapter references were checked against their terminal bibliography and
canonical identifiers. Eleven DOI/arXiv endpoints resolved successfully; MIT
Press returned HTTP 403 from its anti-bot layer but remains an official,
independently identified publisher endpoint. The verified sources include
Sutton and Barto, Watkins and Dayan, Williams, Mnih et al., Schulman et al.,
Haarnoja et al., Bellemare et al., Hessel et al., García and Fernández,
Henderson et al., Raffin et al., and Towers et al. No fabricated DOI, URL,
author, venue, year, or experimental result was found.

## Render and repository checks

- `npm run validate:foundation` — passed (45 subjects, 45 leads).
- `GITHUB_PAGES=true GITHUB_REPOSITORY=shivam2003-dev/mtech-ai-ml-learning-hub npm run build:pages` — passed (77 static routes).
- `GITHUB_REPOSITORY=shivam2003-dev/mtech-ai-ml-learning-hub npm run validate:links` — passed (613 internal links).
- `npx tsc --noEmit --incremental false` — passed.
- `npm run lint` — passed.
- `node --test tests/rendered-html.test.mjs` — passed (3 of 3).
- Rendered chapter: exactly one H1, nine H2s, 67 MathJax expressions with
  accessible labels, syntax-highlighted Python, and reading controls.
- `git diff --check` — passed.

## Remaining scope

This approval covers Chapter 1 only. It does not approve the eleven planned
DRL chapters, production use of the educational tabular environment, or
restricted/high-cost benchmark assets. A future chapter or hash change needs a
new independent review.
