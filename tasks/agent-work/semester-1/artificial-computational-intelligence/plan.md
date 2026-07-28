# Artificial and Computational Intelligence — Subject Plan

Status: planning draft for validation  
Subject Lead: `subject-lead-003`  
Official title: **Artificial and Computational Intelligence**  
Programme position: Semester 1 compulsory subject  
Curriculum source: BITS Pilani WILP, *M.Tech. AI & ML_New Brochure_2026 copy*  
Curriculum source SHA-256: `fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b`  
Research access date: 2026-07-28

## 1. Scope decision and uncertainty boundary

The official brochure verifies the subject title and its Semester 1 compulsory status, but does **not** print a subject description, unit list, topic list, prerequisite list, learning outcomes, or assessment-specific syllabus for this course. Consequently:

- no chapter below is represented as an official BITS Pilani unit;
- no proposed learning outcome is represented as a university-issued outcome;
- every topic is explicitly classified as **Prerequisite**, **Supplementary**, **Advanced extension**, or **Industry application**;
- full chapter generation remains conditional on either approval of this proposed interpretation or receipt of an official detailed syllabus;
- an official detailed syllabus, if later supplied, overrides this plan and triggers a traceability review.

This proposal interprets the conjunction in the title as a bridge between two families:

1. **Artificial intelligence:** rational agents, symbolic representation, search, reasoning, planning, and decision-making under uncertainty.
2. **Computational intelligence:** adaptive and nature-inspired numerical approaches, especially neural computation, fuzzy systems, evolutionary computation, and swarm intelligence.

That interpretation is supported as an educational framing—not as evidence of the university syllabus—by the IEEE Computational Intelligence Society’s published scope and by graduate AI course structures from Stanford and UC Berkeley. IEEE describes computational intelligence through neural networks, evolutionary algorithms, fuzzy systems, and hybrid intelligent systems. Stanford CS221 and Berkeley CS188 cover problem solving, reasoning, decision-making, learning, logic, probability, search, CSPs, games, and MDPs. These sources justify a coherent survey, but do not prove which topics BITS assesses.

### Uncertainty register

| ID | Uncertainty | Impact | Treatment |
|---|---|---|---|
| U-01 | No official topic-level syllabus | Highest: chapter coverage cannot be called official | Label every proposed chapter; block “official syllabus matched” approval until a detailed source appears |
| U-02 | Intended balance between symbolic AI and computational intelligence is unknown | Chapter weighting and assessment emphasis may differ | Use a balanced 4-chapter AI / 4-chapter CI / 4 integration-and-practice structure |
| U-03 | Expected mathematics depth is unknown | Risk of duplication with Mathematical Foundations and Statistical Methods | State prerequisites and cross-link rather than reteach proofs unnecessarily |
| U-04 | Expected programming language/tools are unknown | Lab stack may not match university practice | Use portable Python-first examples; keep tool-specific work supplementary |
| U-05 | Relationship to the separate Machine Learning course is unknown | Risk of duplicate supervised-learning content | Limit neural learning here to computational-intelligence foundations and direct detailed ML coverage to the Machine Learning subject |
| U-06 | Examination format is programme-level, not subject-specific | Assessment design is provisional | Provide varied formative tasks and a mock exam blueprint, clearly labelled supplementary |
| U-07 | “Computational intelligence” can be defined differently across communities | Terminology may conflict | Open with competing definitions and retain IEEE’s scope as one authoritative professional framing |

### Validation condition before chapters

The subject outline can advance only when a reviewer confirms:

1. every proposed topic carries one of the four non-official labels;
2. the plan does not claim the brochure contains topic-level detail;
3. overlap boundaries with Machine Learning, Statistical Methods, Mathematical Foundations, Deep Neural Networks, Deep Reinforcement Learning, Automated Reasoning, and Metaheuristics are explicit;
4. at least one academic reviewer approves the breadth for a Semester 1 bridge course;
5. references and identifiers in the preliminary catalogue pass automated link/metadata checks.

## 2. Proposed subject interpretation

The proposed subject asks a unifying question: **How can a computational system select useful actions or conclusions when the world is large, uncertain, partially observed, or too complex for exhaustive rules?**

Classical AI contributes explicit state, symbols, rules, constraints, goals, and search. Computational intelligence contributes adaptive function approximation, gradual membership, populations of candidate solutions, stochastic exploration, and emergent collective behaviour. Neither family is universally superior. Symbolic systems can be inspectable but brittle; adaptive numerical systems can generalize from data but be difficult to interpret; nature-inspired optimizers can explore non-convex spaces but offer no universal guarantee of global optimality. The educational centre of the subject should therefore be **representation–inference–search–learning–evaluation trade-offs**, not a list of fashionable algorithms.

The course is planned as a comparative foundation. Students repeatedly express one problem in more than one paradigm, identify assumptions, implement a small deterministic baseline, measure complexity and uncertainty, and then justify whether a hybrid is warranted.

## 3. Proposed learning outcomes

All outcomes below are **Supplementary** proposals pending official syllabus confirmation. By the end of the planned subject, a student should be able to:

1. distinguish rational-agent, symbolic, probabilistic, neural, fuzzy, evolutionary, and swarm-based formulations;
2. formulate a problem using states, actions, goals, path cost, constraints, utility, uncertainty, or fitness as appropriate;
3. implement and compare uninformed and informed search while explaining completeness, optimality, time, and space trade-offs;
4. represent small knowledge bases in propositional or first-order form and trace sound inference steps;
5. explain how planning and sequential decision problems differ from one-shot prediction;
6. derive the forward computation and gradient updates of a small multilayer perceptron and connect the equations to tested Python;
7. construct membership functions and a rule-based fuzzy inference system, including defuzzification and sensitivity analysis;
8. implement genetic algorithms, particle swarm optimization, and ant-colony-style search from first principles;
9. diagnose premature convergence, sensitivity to hyperparameters, stochastic variance, leakage, and invalid baselines;
10. design experiments using repeated trials, fixed seeds, uncertainty intervals, ablations, and compute-aware reporting;
11. choose an AI/CI method based on problem structure rather than novelty;
12. evaluate transparency, robustness, safety, fairness, privacy, misuse, and human-oversight implications;
13. read a primary paper by separating its stated claims, experimental evidence, limitations, and later interpretation;
14. design a hybrid intelligent system while defending why each component is necessary.

## 4. Prerequisite map

### Required preparation

| Prerequisite | Level | Diagnostic evidence | Remediation |
|---|---|---|---|
| Python 3 programming | **Prerequisite** | Can write functions, classes, tests, and use NumPy arrays | Python/NumPy diagnostic notebook |
| Discrete mathematics | **Prerequisite** | Sets, relations, Boolean logic, graphs, proof language | Logic and graph refresher |
| Algorithms and data structures | **Prerequisite** | Queues, stacks, priority queues, trees, graphs, asymptotic notation | Search-complexity worksheet |
| Linear algebra | **Prerequisite** | Vectors, matrices, dot products, derivatives of simple vector expressions | Cross-link Mathematical Foundations |
| Probability | **Prerequisite** | Conditional probability, expectation, random variables | Cross-link Statistical Methods |
| Calculus and optimization basics | **Prerequisite** | Gradients, chain rule, local/global extrema | Cross-link Mathematical Foundations |
| Experimental method | **Prerequisite** | Train/test separation, random seeds, meaningful comparison | Short reproducibility lab |

### Dependency sequence

```text
Python + algorithms + discrete mathematics
        ├──> state-space search ──> CSPs/games ──> planning
        └──> symbolic representation ────────────> inference

linear algebra + calculus + probability
        ├──> neural computation ──> hybrid learning systems
        ├──> fuzzy sets/rules ────> neuro-fuzzy systems
        └──> objective functions ─> evolutionary/swarm optimization

experimental method
        └──> fair comparison, ablation, robustness and responsible deployment
```

### Cross-subject boundaries

- Mathematical derivations defer foundational vector calculus and optimization proofs to **Mathematical Foundations for Machine Learning**.
- Statistical estimation and hypothesis testing defer depth to **Introduction to Statistical Methods**.
- Supervised-learning breadth and generalization theory defer to **Machine Learning**.
- deep architectures and optimization at scale defer to **Deep Neural Networks**.
- RL algorithms beyond a conceptual MDP bridge defer to **Deep Reinforcement Learning**.
- theorem proving depth defers to **Automated Reasoning**.
- metaheuristic taxonomy and advanced convergence analysis defer to **Metaheuristics for Optimization**.

### Concept ownership and cross-link contract

This matrix turns the prose boundaries into an enforceable drafting contract. A
chapter author may include the ACI treatment shown below, but must link to the
named owner rather than reproducing its principal derivation or evaluation
framework.

| Shared concept | Primary derivation owner | ACI allowance | ACI stopping rule and required cross-link |
|---|---|---|---|
| Vector calculus, gradients, and optimization proofs | Mathematical Foundations for Machine Learning | Use previously defined gradients and the chain rule in small worked examples. | Do not reteach vector-calculus foundations, convergence proofs, or general convex analysis; link before Chapter 6 derivations. |
| Probability, estimation, confidence intervals, and hypothesis tests | Introduction to Statistical Methods | Define experiment variables and interpret repeated-run uncertainty using an approved shared notation. | Do not derive probability distributions, estimators, intervals, or tests; Chapter 11 links to their primary treatment. |
| Supervised-learning workflow and model evaluation | Machine Learning | Use a small perceptron or multilayer network only to explain the computational-intelligence lineage and contrast paradigms. | Do not survey supervised algorithms, generalization theory, or own the end-to-end evaluation workflow; Chapter 6 and Chapter 11 link to Machine Learning. |
| Multilayer-network optimization and modern architectures | Deep Neural Networks | Derive one small forward/backward pass and validate it numerically. | Stop before depth-specific architecture design, large-scale training, regularization surveys, transformers, or production optimization; Chapter 6 links onward. |
| Markov decision processes and reinforcement learning | Deep Reinforcement Learning | Introduce state, action, transition, reward, policy, and value only as a conceptual sequential-decision bridge. | Do not derive Bellman algorithms, Q-learning updates, policy gradients, or deep RL; Chapter 4 links to Deep Reinforcement Learning. |
| Logic, proof procedures, and knowledge representation | Automated Reasoning | Teach executable facts/rules, entailment, and small forward/backward-chaining traces. | Stop before theorem-prover completeness machinery, SAT/SMT architecture, or advanced proof calculi; Chapter 2 links onward. |
| Evolutionary and swarm metaheuristics | Metaheuristics for Optimization | Teach representative GA, PSO, and ACO mechanisms and fair empirical comparison. | Do not claim a complete taxonomy or general convergence theory; Chapters 8–9 link to the elective. |
| Responsible deployment and system lifecycle | Architecting AI Systems and MLOps | Create risk, reproducibility, and reporting artefacts for the chapter-scale systems. | Do not replace production architecture, governance, monitoring, or lifecycle automation; Chapters 11–12 link onward. |

Notation ownership follows the primary subject: ACI reuses the shared symbols
for probability, gradients, losses, MDPs, and evaluation metrics. Any local
variation must be declared in the chapter notation table and mapped back to the
shared registry.

## 5. Proposed 12-chapter outline

Each row is a planning unit, not a full chapter and not an official university unit.

| Ch. | Label | Proposed title | Core questions and planned depth | Practical anchor | Est. hours |
|---:|---|---|---|---|---:|
| 1 | **Prerequisite** | Intelligence as Computation: Problems, Agents, and Evidence | What counts as an intelligent computation? Rationality versus imitation; environment/task specification; deterministic/stochastic and observable/partially observable environments; limits of benchmarks; competing AI/CI definitions | Specify a delivery-routing agent and critique its performance measure | 10 |
| 2 | **Supplementary** | Symbolic Knowledge Representation and Logical Inference | Propositions, predicates, models, entailment, soundness/completeness, forward/backward chaining; closed-world assumptions; brittleness and explainability | Small rule-based troubleshooting assistant in Python or SWI-Prolog | 13 |
| 3 | **Supplementary** | State-Space Search, Heuristics, and Constraint Satisfaction | BFS, DFS, uniform-cost, greedy, A*; admissibility/consistency; CSP variables/domains/constraints, propagation and ordering; time/space analysis | Route planning and exam-timetabling benchmark | 16 |
| 4 | **Supplementary** | Games, Planning, and Decisions under Uncertainty | Minimax, alpha–beta, expectimax, planning states/actions, utilities, MDP vocabulary, value of information; conceptual boundary with RL | Game-playing agent plus a small stochastic gridworld | 15 |
| 5 | **Supplementary** | Computational Intelligence as Adaptive Search | IEEE scope, soft computing, objective/fitness design, exploration/exploitation, stochastic evaluation, No-Free-Lunch intuition, multi-objective trade-offs | Benchmark harness with repeated runs and confidence intervals | 12 |
| 6 | **Supplementary** | Neural Computation from Threshold Units to Backpropagation | McCulloch–Pitts units, perceptron, multilayer networks, differentiable activations, loss functions, chain rule, backpropagation, numerical stability; boundary with ML/DNN courses | NumPy XOR network from scratch and PyTorch equivalent | 18 |
| 7 | **Supplementary** | Fuzzy Sets, Linguistic Variables, and Rule-Based Control | Crisp versus graded membership, t-norms/t-conorms, Mamdani-style inference, aggregation, defuzzification, sensitivity, difference from probability | Explainable fuzzy controller using scikit-fuzzy | 14 |
| 8 | **Supplementary** | Evolutionary Computation and Genetic Algorithms | Representations, initialization, fitness, selection, crossover, mutation, elitism, constraint handling, schema intuition, premature convergence, multi-objective extensions | From-scratch GA and DEAP comparison | 16 |
| 9 | **Supplementary** | Swarm Intelligence: Particle and Ant-Based Search | PSO update dynamics, personal/social bests, topology, inertia, ACO pheromone construction and evaporation, stochastic failure modes | PSO for continuous optimization; ACO for routing | 16 |
| 10 | **Advanced extension** | Hybrid and Neuro-Symbolic Intelligent Systems | When and why to combine paradigms; neuro-fuzzy systems, evolutionary hyperparameter search, learned heuristics, search plus neural policies, representation mismatch | Controlled ablation of a hybrid solver | 14 |
| 11 | **Industry application** | Evaluation, Reproducibility, Scalability, and Systems Trade-offs | Baselines, repeated trials, statistical uncertainty, profiling, memory/latency/energy, parallel fitness evaluation, observability, versioning, failure recovery | Reproducible experiment package with model/system card | 13 |
| 12 | **Industry application** | Responsible Computational Intelligence | Robustness, distribution shift, unsafe objectives, reward hacking, fairness, privacy, dual use, human oversight, NIST AI RMF, red-teaming and incident learning | Risk register and deployment go/no-go review | 11 |

**Core planned learning time:** 168 hours, detailed in Section 12. Full principal chapters, if later authorized, must independently satisfy the platform’s 3,000 meaningful-prose-word gate.

## 6. Knowledge-graph edges

These proposed edges use the platform relationship vocabulary.

| Source | Relation | Target | Rationale |
|---|---|---|---|
| discrete mathematics | `prerequisite_of` | symbolic inference | Logical syntax and semantics require sets and relations |
| graph theory | `prerequisite_of` | state-space search | Search spaces are commonly represented as graphs |
| probability | `prerequisite_of` | decisions under uncertainty | Expected utility and stochastic transitions use probability |
| calculus | `prerequisite_of` | neural computation | Backpropagation applies the chain rule |
| linear algebra | `prerequisite_of` | neural computation | Layers operate on vectors and matrices |
| optimization | `used_by` | neural computation | Training minimizes an objective |
| heuristic functions | `implemented_by` | A* search | A* orders frontier states using path cost and heuristic |
| constraint propagation | `used_by` | constraint satisfaction | Propagation removes inconsistent domain values |
| fuzzy membership | `alternative_to` | crisp set membership | It represents graded membership, not random uncertainty |
| genetic algorithms | `extension_of` | population-based search | Candidate populations are varied and selected |
| particle swarm optimization | `related_to` | evolutionary computation | Both are stochastic population methods but update differently |
| ant colony optimization | `applied_in` | combinatorial routing | Pheromone-guided construction fits graph problems |
| neural networks | `used_by` | deep neural networks | Deep networks extend multilayer neural computation |
| Markov decision processes | `prerequisite_of` | deep reinforcement learning | MDPs formalize sequential decision-making |
| model evaluation | `evaluated_by` | statistical methods | Claims require uncertainty-aware comparison |
| symbolic reasoning | `related_to` | automated reasoning | Automated reasoning deepens proof procedures and logic |
| evolutionary computation | `related_to` | metaheuristics for optimization | Evolutionary methods form a major metaheuristic family |
| hybrid intelligent systems | `extension_of` | symbolic and computational intelligence | Hybrids integrate complementary representations |
| AI risk management | `applied_in` | architecting AI systems | Risk controls influence system lifecycle decisions |
| reproducible experimentation | `prerequisite_of` | MLOps | Repeatable evidence precedes operational automation |

## 7. Research-query plan

Queries will be executed against official course sites, Crossref, OpenAlex, Semantic Scholar, arXiv, IEEE Xplore metadata, ACM Digital Library metadata, publisher pages, and official conference proceedings. Google Scholar is not required.

### Scope and pedagogy

1. `"Artificial and Computational Intelligence" syllabus filetype:pdf university`
2. `site:cis.ieee.org computational intelligence neural fuzzy evolutionary hybrid scope`
3. `site:stanford.edu artificial intelligence principles techniques search logic MDP`
4. `site:berkeley.edu CS188 search CSP logic textbook`
5. `computational intelligence curriculum neural fuzzy evolutionary swarm graduate course`

### Symbolic AI and search

6. `heuristic search admissible consistent A* original paper DOI`
7. `constraint satisfaction survey propagation variable ordering official proceedings`
8. `knowledge representation logical agents graduate lecture notes university`
9. `neuro-symbolic AI survey site:arxiv.org OR site:dl.acm.org`

### Neural, fuzzy, evolutionary, and swarm methods

10. `McCulloch Pitts perceptron backpropagation original paper DOI`
11. `Zadeh fuzzy sets original paper DOI`
12. `genetic algorithms evolutionary computation foundational paper book publisher`
13. `particle swarm optimization original IEEE DOI`
14. `ant system colony cooperating agents original IEEE DOI`
15. `computational intelligence benchmark reproducibility stochastic optimizers`

### Modern integration and responsible practice

16. `neural guided search planning primary paper official conference`
17. `hybrid neuro fuzzy evolutionary systems review reproducibility`
18. `AI safety objective misspecification reward hacking distribution shift primary paper`
19. `NIST AI RMF trustworthy AI evaluation official`
20. `model cards system cards documentation primary paper DOI`

### Screening rules

- Keep original papers, official standards, university material, maintained official documentation, and established publisher books.
- Record exact title, creator, year, venue, identifier, access, prerequisites, relevance, and verification evidence.
- Reject SEO summaries, unverifiable mirrors, invented identifiers, inaccessible metadata-only records without educational value, and duplicate versions.
- Deduplicate by DOI, arXiv ID, then normalized title plus first author.
- Re-verify URLs and current-state claims at chapter publication time.

## 8. Preliminary verified resource catalogue

This core catalogue contains 30 resources. “Verified” means the metadata and destination were checked on 2026-07-28 against the official host, publisher page, DOI/Crossref record, or official proceedings. It does not mean every result or claim has completed chapter-level fact checking. Five additional chapter-selector records are itemized separately below so the global reading-path additions remain auditable without disguising them as part of the 15–30 core catalogue target.

### Curriculum, courses, books, standards, and tools

| ID | Title | Author/organisation; year | Type / venue | URL / identifier | Difficulty; relevance; prerequisites | Access | Confidence / status |
|---|---|---|---|---|---|---|---|
| R01 | M.Tech. AI & ML_New Brochure_2026 copy | BITS Pilani WILP; 2026 | Official programme brochure | Local verified source `/Users/shivamkumar/Downloads/mtech-ai-ml.pdf`; SHA-256 above | Introductory; authoritative for title/placement only; none | Private local copy | 1.00 / visually verified |
| R02 | Computational Intelligence | IEEE Computational Intelligence Society; current page | Official professional-society scope | https://resourcecenter.cis.ieee.org/cis-computational-intelligence | Introductory; defines neural/evolutionary/fuzzy/hybrid scope; none | Free | 0.99 / verified official |
| R03 | CS221: Artificial Intelligence: Principles and Techniques | Stanford University; current bulletin | Graduate course description | https://bulletin.stanford.edu/courses/1057301 | Intermediate; comparison curriculum for search, CSPs, MDPs, graphs, ML, logic; programming/discrete math/probability/algorithms | Free | 0.99 / verified official |
| R04 | Introduction to Artificial Intelligence | Nikhil Sharma, Josh Hug, Jacky Liang, Henry Zhu et al.; maintained through 2025 | UC Berkeley CS188 open textbook | https://inst.eecs.berkeley.edu/~cs188/textbook/ | Beginner–intermediate; search, CSP, games, MDPs, probability, ML, logic; Python and discrete math | Free, CC BY-SA 4.0 | 0.99 / verified official |
| R05 | Artificial Intelligence: A Modern Approach, 4th ed. | Stuart Russell and Peter Norvig; 2020 | Book, Pearson | https://aima.cs.berkeley.edu/ ; ISBN 978-0134610993 | Intermediate–advanced; comprehensive AI reference; algorithms/probability | Paid book; free companion material | 0.99 / verified author site |
| R06 | Deep Learning | Ian Goodfellow, Yoshua Bengio, Aaron Courville; 2016 | Book, MIT Press | https://www.deeplearningbook.org/ | Intermediate–advanced; neural computation and optimization; linear algebra/calculus/probability | Free HTML; paid print | 0.99 / verified author/publisher site |
| R07 | Reinforcement Learning: An Introduction, 2nd ed. | Richard S. Sutton and Andrew G. Barto; 2018 | Book, MIT Press | http://incompleteideas.net/book/the-book-2nd.html | Intermediate–advanced; MDP/RL bridge; probability/calculus | Free author-hosted PDF; paid print | 0.96 / metadata verified; host intermittently timed out |
| R08 | Artificial Intelligence Risk Management Framework 1.0 | NIST; 2023 | Standard/guidance, NIST AI 100-1 | https://doi.org/10.6028/NIST.AI.100-1 | Intermediate; operational trustworthiness and risk; AI lifecycle basics | Free | 0.99 / verified official |
| R09 | PyTorch Tutorials | PyTorch Foundation; continuously maintained | Official implementation documentation | https://docs.pytorch.org/tutorials/ | Beginner–advanced; library neural/RL examples; Python/NumPy | Free | 0.98 / verified official |
| R10 | DEAP Documentation | DEAP Project, Université Laval; maintained 2025 | Official evolutionary-computation framework docs | https://deap.readthedocs.io/en/master/ | Intermediate; evolutionary algorithms, CMA-ES, multi-objective tools; Python | Free | 0.98 / verified official |
| R11 | scikit-fuzzy Documentation | scikit-fuzzy contributors; maintained documentation | Official fuzzy-logic library docs | https://scikit-fuzzy.readthedocs.io/en/latest/ | Intermediate; membership, defuzzification, fuzzy control; NumPy | Free | 0.97 / verified official |
| R12 | NetworkX Documentation | NetworkX developers; version 3.6.1 observed | Official graph library docs | https://networkx.org/documentation/stable/ | Beginner–intermediate; graph models for search/routing; Python | Free | 0.98 / verified official |
| R13 | SWI-Prolog Reference Manual and Quick Start | SWI-Prolog project; current | Official logic-programming documentation | https://www.swi-prolog.org/pldoc/man?section=quickstart | Intermediate; executable facts/rules/inference; logic basics | Free | 0.98 / verified official |

### Primary papers and reviews

| ID | Title | Author(s); year | Type / venue | URL / identifier | Difficulty; relevance; prerequisites | Access | Confidence / status |
|---|---|---|---|---|---|---|---|
| R14 | Computing Machinery and Intelligence | A. M. Turing; 1950 | Journal article, *Mind* 59(236), 433–460 | https://doi.org/10.1093/mind/LIX.236.433 | Intermediate; historical framing and learning machines; none | Publisher access varies | 1.00 / DOI and publisher verified |
| R15 | A Formal Basis for the Heuristic Determination of Minimum Cost Paths | Peter Hart, Nils Nilsson, Bertram Raphael; 1968 | Journal article, *IEEE Transactions on Systems Science and Cybernetics* 4(2) | https://doi.org/10.1109/TSSC.1968.300136 | Advanced; A* foundations; graph theory/asymptotics | Publisher access varies | 1.00 / Crossref DOI metadata verified |
| R16 | Fuzzy Sets | L. A. Zadeh; 1965 | Journal article, *Information and Control* 8(3), 338–353 | https://doi.org/10.1016/S0019-9958(65)90241-X | Advanced; foundational graded-set formalism; set theory | Publisher access varies | 1.00 / Crossref DOI metadata verified |
| R17 | A Logical Calculus of the Ideas Immanent in Nervous Activity | Warren S. McCulloch, Walter Pitts; 1943 | Journal article, *Bulletin of Mathematical Biophysics* 5, 115–133 | https://doi.org/10.1007/BF02478259 | Advanced; threshold neural computation and logic; Boolean logic | Free-to-read status may vary | 1.00 / DOI and publisher verified |
| R18 | The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain | Frank Rosenblatt; 1958 | Journal article, *Psychological Review* 65(6), 386–408 | https://doi.org/10.1037/h0042519 | Advanced; foundational learning unit; probability/linear algebra | Publisher access varies | 1.00 / Crossref DOI metadata verified |
| R19 | Learning Representations by Back-propagating Errors | David E. Rumelhart, Geoffrey E. Hinton, Ronald J. Williams; 1986 | Letter, *Nature* 323, 533–536 | https://doi.org/10.1038/323533a0 | Advanced; backpropagation; calculus/linear algebra | Abstract free; full access varies | 1.00 / DOI and publisher verified |
| R20 | Particle Swarm Optimization | James Kennedy, Russell Eberhart; 1995 | IEEE ICNN proceedings, pp. 1942–1948 | https://doi.org/10.1109/ICNN.1995.488968 | Advanced; foundational PSO; vectors/optimization/probability | Publisher access varies | 1.00 / IEEE and Crossref verified |
| R21 | Ant System: Optimization by a Colony of Cooperating Agents | Marco Dorigo, Vittorio Maniezzo, Alberto Colorni; 1996 | *IEEE Transactions on Systems, Man, and Cybernetics, Part B* 26(1), 29–41 | https://doi.org/10.1109/3477.484436 | Advanced; foundational ant-system algorithm; graphs/probability | Publisher access varies | 1.00 / Crossref DOI metadata verified |
| R22 | Q-learning | Christopher J. C. H. Watkins, Peter Dayan; 1992 | Technical note, *Machine Learning* 8, 279–292 | https://doi.org/10.1007/BF00992698 | Advanced; sequential adaptive decision-making bridge; probability/MDPs | Free PDF on publisher page observed | 1.00 / DOI and publisher verified |
| R23 | Deep Learning | Yann LeCun, Yoshua Bengio, Geoffrey Hinton; 2015 | Review, *Nature* 521, 436–444 | https://doi.org/10.1038/nature14539 | Intermediate–advanced; review of representation learning; neural basics | Publisher access varies | 1.00 / DOI and publisher verified |
| R24 | Mastering the Game of Go with Deep Neural Networks and Tree Search | David Silver et al.; 2016 | Research article, *Nature* 529, 484–489 | https://doi.org/10.1038/nature16961 | Advanced; search-learning hybrid; neural nets/RL/MCTS | Publisher access varies | 1.00 / DOI and publisher verified |
| R25 | Attention Is All You Need | Ashish Vaswani et al.; 2017 | NeurIPS 2017 proceedings | https://papers.neurips.cc/paper/7181-attention-is-all-you-need ; arXiv:1706.03762 | Advanced extension; modern neural architecture and scalability; linear algebra/neural nets | Free | 1.00 / official proceedings verified |
| R26 | Concrete Problems in AI Safety | Dario Amodei, Chris Olah, Jacob Steinhardt, Paul Christiano, John Schulman, Dan Mané; 2016 | arXiv preprint | https://arxiv.org/abs/1606.06565 ; arXiv:1606.06565 | Intermediate–advanced; objective misspecification, shift, safe exploration; ML/RL basics | Free | 0.99 / arXiv metadata verified |
| R27 | Model Cards for Model Reporting | Margaret Mitchell et al.; 2019 | FAccT 2019 proceedings | https://doi.org/10.1145/3287560.3287596 | Intermediate; transparent model reporting; evaluation basics | Publisher access varies; author copies may exist | 1.00 / ACM Crossref metadata verified |
| R28 | Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model | Julian Schrittwieser et al.; 2020 | Research article, *Nature* 588, 604–609 | https://doi.org/10.1038/s41586-020-03051-4 | Advanced extension; learned models plus tree search; RL/search/neural nets | Publisher access varies | 0.99 / publisher page verified |
| R29 | DeepProbLog: Neural Probabilistic Logic Programming | Robin Manhaeve, Sebastijan Dumančić, Angelika Kimmig, Thomas Demeester, Luc De Raedt; 2018 | NeurIPS 2018 proceedings | https://proceedings.neurips.cc/paper/2018/hash/dc5d637ed5e62c36ecb73b654b05ba2a-Abstract.html | Advanced; modern integration of neural predicates with probabilistic logic; logic/probability/neural basics | Free official paper and supplement | 1.00 / official NeurIPS record verified |
| R30 | A Fast and Elitist Multiobjective Genetic Algorithm: NSGA-II | Kalyanmoy Deb, Amrit Pratap, Sameer Agarwal, T. Meyarivan; 2002 | *IEEE Transactions on Evolutionary Computation* 6(2), 182–197 | https://doi.org/10.1109/4235.996017 | Advanced; established multi-objective evolutionary algorithm; optimization/evolutionary basics | Publisher access varies | 1.00 / IEEE and DOI metadata verified |

### Resource-quality notes

- R01 is authoritative only for curriculum facts it actually prints.
- R03–R13 are teaching/implementation resources, not substitutes for original-paper citations.
- R14–R30 are preliminary reading candidates. Chapter authors must read the relevant paper before describing methods or findings.
- “Publisher access varies” is deliberately not labelled free. Availability must be checked again when paper pages are authored.
- Confidence measures metadata/host verification, not endorsement of every claim or suitability for every learner.

### Structured chapter-selector records

These records were already used by the global reading path or were selected
during remediation for a specific chapter role. They are accepted sources, not
unresolved placeholders, and their identifiers are included in the completion
report.

| ID | Title | Author(s); year | Type / venue | URL / identifier | Chapter role and boundary | Verification |
|---|---|---|---|---|---|---|
| S01 | Ant Colony System: A Cooperative Learning Approach to the Traveling Salesman Problem | Marco Dorigo, Luca Maria Gambardella; 1997 | *IEEE Transactions on Evolutionary Computation* 1(1), 53–66 | https://doi.org/10.1109/4235.585892 | Established ACO follow-on for Chapter 9; does not replace the original Ant System source | DOI/publisher metadata verified |
| S02 | Concrete Problems in AI Safety, Revisited | Inioluwa Deborah Raji, Roel Dobbe; 2024 | arXiv preprint | https://arxiv.org/abs/2401.10899 | Modern socio-technical critique for Chapters 1, 7, and 12; not a fuzzy-method authority | arXiv title/author metadata verified; final publication status still to be checked |
| S03 | (Computational) Intelligence: What’s in a Name? | James C. Bezdek; 2016 | *IEEE Systems, Man, and Cybernetics Magazine* | https://doi.org/10.1109/MSMC.2016.2558778 | Terminology/history tutorial for Chapters 1, 5, and 10 | DOI and IEEE CIS host metadata verified |
| S04 | Particle Swarm Optimization: A Survey of Historical and Recent Developments with Hybridization Perspectives | Saptarshi Sengupta, Sanchita Basak, Richard Alan Peters II; 2019 | *Machine Learning and Knowledge Extraction* 1(1) | https://doi.org/10.3390/make1010010 | Modern survey/tutorial for Chapter 9; secondary map, not a replacement for R20 | DOI/publisher metadata verified |
| S05 | pymoo: Multi-objective Optimization in Python | Julian Blank, Kalyanmoy Deb; 2020 | *IEEE Access* 8, 89497–89509 | https://doi.org/10.1109/ACCESS.2020.2990567 ; arXiv:2002.04504; docs https://pymoo.org/ | Modern applied multi-objective extension and implementation companion for Chapter 8 | IEEE/arXiv metadata and official project documentation verified |

## 9. Proposed paper reading path

Papers may appear in more than one pedagogical role; the sequence below avoids ranking solely by citations.

### A. Foundational path (5)

1. Turing (1950), **Computing Machinery and Intelligence** — problem framing and intellectual history.
2. McCulloch and Pitts (1943), **A Logical Calculus...** — logic and early neural computation.
3. Zadeh (1965), **Fuzzy Sets** — formal treatment of graded membership.
4. Hart, Nilsson, and Raphael (1968), **A Formal Basis...** — principled heuristic search.
5. Rosenblatt (1958), **The Perceptron...** — early adaptive neural model.

### B. Important established path (6)

1. Rumelhart, Hinton, and Williams (1986), **Learning Representations by Back-propagating Errors**.
2. Watkins and Dayan (1992), **Q-learning**.
3. Kennedy and Eberhart (1995), **Particle Swarm Optimization**.
4. Dorigo, Maniezzo, and Colorni (1996), **Ant System**.
5. Dorigo and Gambardella (1997), **Ant Colony System: A Cooperative Learning Approach to the Traveling Salesman Problem**, DOI `10.1109/4235.585892` (verified supplementary established paper).
6. LeCun, Bengio, and Hinton (2015), **Deep Learning** (also the principal review bridge).

### C. Modern or state-shaping path (5)

1. Silver et al. (2016), **Mastering the Game of Go with Deep Neural Networks and Tree Search**.
2. Vaswani et al. (2017), **Attention Is All You Need**.
3. Mitchell et al. (2019), **Model Cards for Model Reporting**.
4. Schrittwieser et al. (2020), **Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model**.
5. Raji and Dobbe (2024), **Concrete Problems in AI Safety, Revisited**, arXiv:2401.10899 — a modern socio-technical critique; verify final publication status at authoring time.

### D. Survey/tutorial path (3)

1. LeCun, Bengio, and Hinton (2015), **Deep Learning**.
2. Bezdek (2016), **(Computational) Intelligence: What’s in a Name?**, DOI `10.1109/MSMC.2016.2558778` — terminology/history, hosted by IEEE CIS.
3. Sengupta, Basak, and Peters (2019), **Particle Swarm Optimization: A Survey of Historical and Recent Developments with Hybridization Perspectives**, DOI `10.3390/make1010010` — open review; use as a secondary map, not a replacement for Kennedy–Eberhart.

### E. Applied/industry-oriented path (4)

1. Silver et al. (2016), **AlphaGo** — combines learned functions and tree search in a demanding benchmark.
2. Mitchell et al. (2019), **Model Cards** — documentation and stakeholder reporting.
3. Amodei et al. (2016), **Concrete Problems in AI Safety** — operational failure modes.
4. NIST (2023), **AI RMF 1.0** — lifecycle risk practice; a standard rather than a research paper.

### Per-chapter reading contracts

Every row now names a verified record for the four required pedagogical roles.
“Foundational/authoritative” permits an authoritative textbook, standard, or
course when inventing a single origin paper would be historically misleading.
A modern reading may be a critical or applied connection rather than a claim
that it introduced the chapter’s core method. Chapter authors must preserve the
limits in the contract column.

| Ch. | Foundational or authoritative | Modern connection | Survey or tutorial | Implementation | Reading contract |
|---:|---|---|---|---|---|
| 1 | R14 Turing (1950) | S02 Raji–Dobbe (2024) | S03 Bezdek (2016) | R04 Berkeley CS188 introduction | Compare historical and current definitions without presenting imitation, rational agency, or the IEEE framing as the sole definition of intelligence. |
| 2 | R17 McCulloch–Pitts (1943), used only as a logic/computation bridge | R29 DeepProbLog (2018) | R05 AIMA logic chapters | R13 SWI-Prolog manual | Teach syntax, semantics, entailment, and executable rules first; DeepProbLog is a bounded modern integration case, not evidence that neural methods replace sound symbolic inference. |
| 3 | R15 Hart–Nilsson–Raphael (1968) | R24 AlphaGo (2016), for learned guidance inside search | R04 Berkeley CS188 search/CSP chapters | R12 NetworkX documentation | Derive classical guarantees before the modern case; do not transfer AlphaGo results to generic A* or CSPs, and do not imply a learned heuristic preserves admissibility. |
| 4 | R22 Watkins–Dayan (1992), read only as a boundary marker | R24 AlphaGo (2016) | R07 Sutton–Barto MDP chapters | R04 Berkeley CS188 games/MDPs | Keep MDPs conceptual and game search explicit; Q-learning and deep-RL derivations belong to Deep Reinforcement Learning. |
| 5 | R16 Zadeh (1965), as one CI paradigm rather than a universal origin | R28 MuZero (2020), as an adaptive learned-search case | S03 Bezdek (2016) | R10 DEAP documentation for a reproducible stochastic-search harness | Compare representations, objectives, and evidence across paradigms; do not treat a learned planning system as a general definition of computational intelligence. |
| 6 | R18 Rosenblatt (1958) and R19 Rumelhart et al. (1986) | R25 Vaswani et al. (2017), only as an architecture extension | R23 LeCun et al. (2015) | R09 PyTorch tutorials | End after one small forward/backward derivation and tested implementation; deep architecture and large-scale optimization belong to Deep Neural Networks. |
| 7 | R16 Zadeh (1965) | S02 Raji–Dobbe (2024), for auditing explanation and deployment claims | S03 Bezdek (2016), supplemented by R05’s fuzzy treatment where used | R11 scikit-fuzzy documentation | Zadeh defines graded membership; the modern reading critiques socio-technical explanation claims and is not a fuzzy-inference authority. Keep fuzziness distinct from probability. |
| 8 | R05 AIMA’s evolutionary-search treatment as the authoritative teaching entry | R30 NSGA-II (2002) and S05 pymoo (2020) | R10 DEAP documentation and references | R10 DEAP plus S05 pymoo documentation | Make no unsupported “first genetic algorithm” claim. Teach a basic GA before multi-objective extensions, compare under equal fitness budgets, and record operator/version choices. |
| 9 | R20 Kennedy–Eberhart (1995), R21 Dorigo et al. (1996) | S04 Sengupta et al. (2019), for contemporary hybridization context | S04 Sengupta et al. (2019) | R10 DEAP/custom NumPy, checked against S01’s ACO specification | The survey fills both modern-context and tutorial roles transparently; algorithm definitions and historical claims remain anchored to R20, R21, and S01. |
| 10 | R24 AlphaGo (2016), as an established search-learning hybrid | R29 DeepProbLog (2018) and R28 MuZero (2020) | S03 Bezdek (2016), as a broad hybrid-CI map | R09 PyTorch and R13 SWI-Prolog for a two-component ablation | Treat each paper as one hybrid design, require component ablations, and do not claim that “hybrid” automatically improves accuracy, guarantees, or interpretability. |
| 11 | R08 NIST AI RMF as authoritative lifecycle guidance | R27 Model Cards (2019) | R08 NIST AI RMF measurement/evaluation guidance | R27 reporting artefact plus the tested profiling harness specified by the chapter | Separate statistical inference, owned by Statistical Methods, from systems evidence. Record seeds, versions, hardware, failures, and uncertainty without promoting one-machine timings to universal claims. |
| 12 | R26 Amodei et al. (2016) | S02 Raji–Dobbe (2024) | R08 NIST AI RMF | R08 risk-map template and R27 model-card structure | Distinguish each source’s claims from the chapter’s interpretation; use the sources to structure risk questions, not to certify a deployment as safe or compliant. |

The source-selection gate is closed at planning level: no chapter row contains
an unresolved citation placeholder. This permits chapter task specification,
not automatic publication. Chapter authors must still read the selected sources,
validate claims and identifiers at authoring time, and pass independent
citation review.

## 10. Practical project portfolio

Every project is proposed **Supplementary**, **Advanced extension**, or **Industry application**, not official coursework.

### Beginner project B1 — Transparent Route-Finding Laboratory

- **Label:** Supplementary.
- **Problem:** implement BFS, uniform-cost search, greedy best-first, and A* on the same weighted map.
- **Objectives:** connect data structures to completeness/optimality; test admissible and inadmissible heuristics.
- **Prerequisites:** Python, graphs, priority queues, asymptotic notation.
- **Architecture:** map loader → search interface → algorithm implementations → trace recorder → metrics/visualizer.
- **Dataset:** synthetic grids plus a small openly licensed road-graph subset generated or sourced with provenance.
- **Milestones:** baseline BFS/UCS; heuristic design; A*; counterexample suite; report.
- **Requirements:** typed Python, deterministic fixtures, no hidden library search call in from-scratch mode.
- **Metrics:** path cost, expanded nodes, peak frontier, runtime, success rate.
- **Deliverables:** package, tests, experiment notebook, comparison report, README.
- **Testing:** known shortest paths, unreachable goals, zero-cost edges, inconsistent heuristic case.
- **Extensions:** bidirectional search, memory-bounded search.
- **Deployment:** static interactive visualization or CLI; no server required.
- **Ethics:** discuss how “shortest” can ignore accessibility, safety, or community impact.
- **Rubric:** correctness 35%, analysis 25%, tests 20%, reproducibility 10%, communication/ethics 10%.

### Beginner project B2 — Explainable Fuzzy Comfort Controller

- **Label:** Supplementary.
- **Problem:** control fan/heating intensity from noisy temperature, humidity, and occupancy inputs.
- **Objectives:** design membership functions, rules, aggregation, and defuzzification; compare with crisp thresholds.
- **Prerequisites:** sets, simple control logic, NumPy.
- **Architecture:** validated sensor input → fuzzification → rule engine → aggregation → defuzzification → explanation.
- **Dataset:** synthetic scenarios with a documented generator; optional public building-sensor data.
- **Milestones:** crisp baseline; fuzzy sets; rule base; sensitivity study; explanation view.
- **Requirements:** from-scratch small inference engine plus scikit-fuzzy implementation.
- **Metrics:** comfort error against declared target model, control smoothness, rule coverage, latency.
- **Deliverables:** code, tests, membership plots, scenario report, limitations.
- **Testing:** boundary values, missing sensor, impossible input, monotonicity expectations.
- **Extensions:** learn membership parameters, uncertainty intervals.
- **Deployment:** browser demo or local API with input validation.
- **Ethics:** energy use, accessibility of comfort assumptions, surveillance implications of occupancy sensing.
- **Rubric:** model clarity 25%, correctness 25%, comparison 20%, testing 15%, ethics 15%.

### Intermediate project I1 — Evolutionary Timetable Optimizer

- **Label:** Supplementary.
- **Problem:** build feasible course/exam timetables under hard and soft constraints.
- **Objectives:** encode candidates, penalties, repair, selection, crossover, mutation, and repeated-run evidence.
- **Prerequisites:** combinatorial optimization, probability, experimental method.
- **Architecture:** schema validator → chromosome/decoder → constraint evaluator → GA → experiment tracker.
- **Dataset:** synthetic, privacy-safe institution specification; no real student identifiers.
- **Milestones:** greedy baseline; representation; operators; constraint handling; ablation; report.
- **Requirements:** from-scratch GA and DEAP comparison with identical fitness budget.
- **Metrics:** hard violations, soft cost, evaluations to target, variance, wall time.
- **Deliverables:** solver, config, seeds, tests, run logs, Pareto/fitness plots.
- **Testing:** infeasible instance, duplicated resource, empty course set, deterministic seed, mutation bounds.
- **Extensions:** NSGA-II, parallel fitness evaluation.
- **Deployment:** containerized CLI or FastAPI batch endpoint.
- **Ethics:** fairness of undesirable slots and transparent appeal mechanisms.
- **Rubric:** feasibility/correctness 30%, experimental rigour 25%, algorithm design 20%, software quality 15%, fairness 10%.

### Intermediate project I2 — PSO versus Gradient-Based Training

- **Label:** Supplementary.
- **Problem:** compare PSO and backpropagation for a small neural-network task under a matched compute budget.
- **Objectives:** understand objective landscapes, stochastic variance, scaling limits, and invalid comparison risks.
- **Prerequisites:** neural networks, optimization, probability.
- **Architecture:** dataset pipeline → fixed network → two optimizers → budget controller → repeated evaluation.
- **Dataset:** XOR plus a small UCI/OpenML dataset whose licence and version are recorded.
- **Milestones:** neural baseline; PSO implementation; matched-budget protocol; 20+ seeded runs; analysis.
- **Requirements:** no headline claim from a single seed; record evaluations, time, and hardware.
- **Metrics:** validation loss, test score, evaluations, wall time, memory, variance.
- **Deliverables:** code, tests, environment lock, results table, limitations statement.
- **Testing:** shape checks, finite values, reproducibility, leakage guard, constant-feature data.
- **Extensions:** hybrid PSO initialization followed by gradient training.
- **Deployment:** reproducible batch job; not a real-time service.
- **Ethics:** energy/compute accounting and avoiding misleading superiority claims.
- **Rubric:** fair protocol 30%, correctness 25%, analysis 25%, reproducibility 15%, ethics 5%.

### Advanced project A1 — Hybrid Neural-Guided Search

- **Label:** Advanced extension.
- **Problem:** learn a heuristic or state-value estimate, then use it within a search procedure without losing sight of correctness conditions.
- **Objectives:** integrate learned and symbolic components; compare search quality, generalization, and failure.
- **Prerequisites:** A*, supervised learning, PyTorch, experimental design.
- **Architecture:** instance generator → exact solver labels → neural estimator → guarded search → evaluator.
- **Dataset:** procedurally generated puzzle/route instances with train/test difficulty separation.
- **Milestones:** exact baseline; dataset; model; integration; out-of-distribution evaluation; ablation.
- **Requirements:** compare against admissible handcrafted heuristic; document when guarantees are lost.
- **Metrics:** solution cost ratio, node expansions, success, latency, calibration, OOD degradation.
- **Deliverables:** reproducible repository, trained small artifact, model card, paper-style report.
- **Testing:** solvable/unsolvable instances, adversarial heuristic outputs, NaN/fallback, OOD sizes.
- **Extensions:** uncertainty-aware fallback, heuristic correction.
- **Deployment:** guarded inference service or local application with baseline fallback.
- **Ethics:** reliability of learned components in safety-relevant planning.
- **Rubric:** integration 25%, experimental validity 25%, correctness/fallback 20%, analysis 20%, documentation 10%.

### Research project R1 — Reproducibility Audit of Stochastic Optimizers

- **Label:** Advanced extension / research-oriented.
- **Problem:** test whether published-style optimizer comparisons survive seeds, budgets, and tuned baselines.
- **Objectives:** formulate hypotheses, pre-register protocol, quantify uncertainty, and distinguish evidence from interpretation.
- **Prerequisites:** GA/PSO/ACO, statistics, benchmarking.
- **Architecture:** benchmark registry → optimizer adapters → budget scheduler → run store → statistical analysis.
- **Dataset:** established analytic benchmark functions and a small combinatorial suite, versioned and documented.
- **Milestones:** literature protocol; pre-registration; implementation validation; experiments; robustness checks; paper.
- **Requirements:** at least three optimizers plus non-stochastic baseline; identical evaluation budgets; correction for multiple comparisons where applicable.
- **Metrics:** best-so-far curves, success probability, expected running time, effect sizes, uncertainty intervals.
- **Deliverables:** protocol, code, raw results, analysis notebook, negative results, 6–8 page report.
- **Testing:** known optima, invariants, seed logging, interruption/resume, checksumed outputs.
- **Extensions:** benchmark leakage and hyperparameter overfitting study.
- **Deployment:** archival reproducibility package rather than production service.
- **Ethics:** report all runs; do not cherry-pick seeds or conceal compute.
- **Rubric:** research design 30%, reproducibility 25%, analysis 25%, implementation 10%, scholarly writing 10%.

### Research project R2 — Neuro-Symbolic Failure Taxonomy

- **Label:** Advanced extension / research-oriented.
- **Problem:** compare a rule system, a learned classifier, and a hybrid on a controlled reasoning task.
- **Objectives:** classify complementary errors, explanation fidelity, data dependence, and rule incompleteness.
- **Prerequisites:** logic, neural learning, evaluation, responsible AI.
- **Architecture:** controlled task generator → symbolic baseline → learned baseline → hybrid → failure analyser.
- **Dataset:** synthetic logic/rule tasks with controllable noise and explicit ground truth.
- **Milestones:** taxonomy; baselines; hybrid; perturbation suite; human-readable case analysis; report.
- **Requirements:** separate task accuracy from explanation fidelity; state what the hybrid genuinely contributes.
- **Metrics:** accuracy, consistency, rule violations, calibration, explanation faithfulness, compute.
- **Deliverables:** code, dataset generator, benchmark card, failure catalogue, paper draft.
- **Testing:** contradictory rules, missing rules, label noise, unseen combinations, random baseline.
- **Extensions:** probabilistic logic or uncertainty-aware rule repair.
- **Deployment:** research demo with explicit non-production warning.
- **Ethics:** explanation claims must not overstate causal faithfulness.
- **Rubric:** novelty/question 20%, controlled design 25%, technical quality 20%, failure analysis 25%, communication 10%.

## 11. Assignment and quiz plan

### Assignments

| Assessment | Label | Coverage | Expected work | Validation focus |
|---|---|---|---|---|
| A1: Agent and problem formulation | Supplementary | Ch. 1 | PEAS/task environment, alternative formulations, failure metric critique | Assumptions and measurability |
| A2: Logic and search proofs | Supplementary | Ch. 2–3 | entailment traces, A* admissibility/consistency reasoning, complexity | Formal correctness |
| A3: Search/CSP coding lab | Supplementary | Ch. 3 | tested solver plus empirical comparison | Correctness, edge cases, profiling |
| A4: Decision-making worksheet | Supplementary | Ch. 4 | minimax/expectimax/MDP numerical problems | Symbol definitions and calculations |
| A5: Neural derivation and implementation | Supplementary | Ch. 6 | manual forward/backward pass, finite-difference gradient check | Dimensions, chain rule, numerical stability |
| A6: Fuzzy controller critique | Supplementary | Ch. 7 | design and sensitivity analysis | Difference between fuzziness and probability |
| A7: Population-method benchmark | Supplementary | Ch. 8–9 | GA/PSO/ACO comparison under fixed budget | Seeds, variance, fair baselines |
| A8: Responsible-system review | Industry application | Ch. 11–12 | model/system card, NIST-style risk map, go/no-go argument | Evidence, affected stakeholders, controls |

### Quiz design

- Twelve low-stakes chapter quizzes, 8–12 items each.
- Item mix: conceptual multiple choice, select-all-that-apply, short calculation, trace-an-algorithm, identify-invalid-claim, and one reflection.
- Randomization limited to values that preserve difficulty and unambiguous answers.
- Each quiz includes answer rationale, not only the correct option.
- Question bank target: 180 reviewed items, with at least two variants for calculation questions.
- No quiz asks learners to memorize citation counts, transient rankings, or unsupported “state of the art” labels.

### Mock examination blueprint

This is **Supplementary**, not an official exam forecast:

- 20% precise definitions and comparisons;
- 25% algorithm tracing and complexity;
- 20% mathematics/derivation;
- 20% design and experimental critique;
- 15% responsible-AI and failure analysis.

## 12. Estimated learning hours

| Activity | Hours |
|---|---:|
| Reading and concept study across 12 chapters | 66 |
| Worked mathematical and algorithmic examples | 18 |
| Guided Python laboratories | 34 |
| Eight assignments | 24 |
| Curated paper reading and notes | 18 |
| Quizzes, revision, and mock examination | 8 |
| **Core total** | **168** |

Recommended project effort is additional:

- one beginner project: 12–18 hours;
- one intermediate project: 25–35 hours;
- advanced project: 45–60 hours;
- research project: 60–90 hours.

The subject page should show 168 core hours and clearly mark project pathways as selectable rather than implying that all seven projects fit one semester.

## 13. Plan-level quality validation

### Passed

- Official title and Semester 1 placement traced to the verified brochure.
- Topic-level syllabus absence is explicit.
- All proposed chapters are labelled with allowed non-official classifications.
- Twelve chapters fall inside the required 8–16 range.
- Thirty core preliminary resources fall inside the required 15–30 range; five
  additional selector records are separately itemized and traceable.
- Resource catalogue uses official/primary/authoritative sources and records access, confidence, and verification state.
- Reading path contains 5 foundational, 6 established, 5 modern, 3 survey/tutorial, and 4 applied/industry entries.
- Every chapter has a selected foundational/authoritative, modern, survey/tutorial, and implementation reading contract with explicit scope limits.
- Project portfolio contains 2 beginner, 2 intermediate, 1 advanced, and 2 research-oriented projects.
- Knowledge graph uses approved relationship types.
- Shared concepts have a primary owner, a bounded ACI allowance, and a stopping rule.
- Full chapter generation has not begun.

### Open validation tasks

1. Obtain or locate the official detailed subject syllabus.
2. Have a curriculum reviewer approve the proposed balance of symbolic AI and CI.
3. Verify final free/paid access at content-authoring time.
4. Re-run DOI, URL, BibTeX, and duplicate checks when the resource records are promoted into the content data store.
5. Coordinate the ownership matrix and notation with the neighbouring Subject Leads.
6. Approve a single reference implementation style before code authors work in parallel.
7. Approve exact identity, version/date, licence, URL, and intended fields before any optional external project dataset replaces a synthetic default.

## 14. Recommended next tasks

1. Mark this plan `technical-review`.
2. Run syllabus-scope review against any additional official source.
3. Have the Machine Learning, Statistical Methods, Mathematical Foundations, Deep Neural Networks, Deep Reinforcement Learning, Automated Reasoning, Metaheuristics, MLOps, and AI Systems leads ratify the ownership rows that affect them.
4. Promote verified resource records into the shared resource schema.
5. Re-run live identifier checks and generate the BibTeX bundle from the structured records.
6. After approval, create front matter, roadmap, and bounded chapter task manifests; do not generate all chapters at once.
