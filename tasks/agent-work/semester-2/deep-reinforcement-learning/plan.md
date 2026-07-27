# Deep Reinforcement Learning - Subject Lead Planning Bundle

## 0. Planning status and authority boundary

**Agent:** `SUBJ-006`  
**Accountable role:** Subject Lead, Deep Reinforcement Learning  
**Programme:** M.Tech. Artificial Intelligence and Machine Learning  
**Verified placement:** compulsory subject, Semester 2  
**Planning date:** 2026-07-28  
**Plan status:** proposed subject plan; ready for outline validation, not approved
for chapter generation

The curriculum source of truth is the programme brochure:

- *M.Tech. AI & ML_New Brochure_2026 copy*, BITS Pilani Work Integrated
  Learning Programmes, physical PDF page 12 / printed page 10, accessed
  2026-07-28 from `/Users/shivamkumar/Downloads/mtech-ai-ml.pdf`.

Visual inspection and text extraction verify only:

1. the exact subject title **Deep Reinforcement Learning**; and
2. its placement as a compulsory **Second Semester** subject.

The brochure does **not** provide topic-level units, prerequisites, learning
outcomes, assessment weights, contact hours, or an official reading list for
this subject. Consequently, every topic below is explicitly classified as one
of:

- **Prerequisite** - knowledge needed to read and implement the proposed DRL
  material;
- **Supplementary** - a proposed core teaching topic that is educationally
  appropriate but not verified as an official unit;
- **Advanced extension** - research-level depth beyond a minimum introductory
  DRL treatment; or
- **Industry application** - engineering, evaluation, governance, or deployment
  practice.

No proposed topic is represented as official syllabus content. Full chapter
generation remains blocked until this outline is reviewed against any future
detailed university syllabus.

## 1. Subject purpose

This proposed subject studies how neural function approximators can be combined
with sequential decision-making. The unifying question is not merely “which
algorithm scores highest?” It is:

> How can an agent learn a policy from delayed, correlated, policy-dependent
> data while controlling estimation error, optimization instability,
> exploration risk, and experimental uncertainty?

The plan therefore treats algorithms as reasoned design choices. Students first
establish Markov decision process and temporal-difference foundations, then
connect them to deep value functions, policy gradients, actor-critic methods,
continuous control, model-based learning, offline data, safety, distributed
systems, and reproducible evaluation.

The intended reader already programs in Python and has studied the Semester 1
mathematics, statistics, and machine-learning subjects. Neural-network mechanics
are owned by the Semester 2 **Deep Neural Networks** subject and are used here
rather than retaught in full.

## 2. Proposed learning outcomes

All outcomes are **Supplementary proposed outcomes**, not brochure-verified
outcomes. After completing the subject, a student should be able to:

1. formulate a sequential decision problem as a finite- or infinite-horizon
   Markov decision process and state its assumptions;
2. derive Bellman expectation and optimality equations for values and
   action-values, explaining the role of discounting and terminal conditions;
3. distinguish Monte Carlo, temporal-difference, on-policy, off-policy,
   bootstrapped, and model-based targets;
4. implement and test tabular prediction/control baselines before introducing a
   neural approximator;
5. explain why replay, target networks, clipping, entropy, double estimators,
   normalization, and delayed updates can change DRL stability;
6. derive the policy-gradient estimator and explain baselines, advantages,
   generalized advantage estimation, bias, and variance;
7. compare DQN-family, PPO/TRPO, DDPG/TD3, and SAC methods by action space,
   data reuse, optimization objective, failure modes, and compute cost;
8. design a correct Gymnasium experiment that distinguishes termination from
   truncation and controls random seeds;
9. diagnose learning curves using multiple seeds, confidence intervals,
   ablations, evaluation policies, and environment-step budgets;
10. recognize extrapolation error and policy-distribution shift in offline RL,
    and explain why online off-policy algorithms cannot be transferred
    mechanically to a fixed dataset;
11. compare model-free and model-based DRL, including planning with learned
    models and latent world models;
12. evaluate safety, reward specification, privacy, compute, and human-impact
    risks before deployment;
13. reproduce a published result at reduced scale while separating the paper's
    claims, the student's observations, and the student's interpretation;
14. communicate uncertainty, implementation deviations, and negative results in
    a research-quality report.

## 3. Prerequisite map and diagnostic gates

| ID | Classification | Required knowledge | Owning subject | Entry evidence |
|---|---|---|---|---|
| P1 | **Prerequisite** | Vectors, matrices, norms, gradients, Jacobians, chain rule, constrained optimization basics | Mathematical Foundations for Machine Learning | Derive gradients of a two-layer scalar objective and check dimensions. |
| P2 | **Prerequisite** | Conditional probability, expectation, variance, covariance, sampling, estimators, confidence intervals | Introduction to Statistical Methods | Compute an empirical return mean and uncertainty interval without confusing within-run variance with across-seed uncertainty. |
| P3 | **Prerequisite** | Regression, classification, train/validation/test separation, generalization, loss functions, regularization | Machine Learning | Fit and diagnose a supervised regression baseline. |
| P4 | **Prerequisite** | Backpropagation, optimizers, initialization, normalization, CNN/MLP/RNN basics, PyTorch training loops | Deep Neural Networks | Train a small neural network reproducibly and explain gradient flow. |
| P5 | **Prerequisite** | Python 3, NumPy, plotting, unit tests, environments, dependency isolation | Programme-level computing knowledge; proposed bridge | Pass a deterministic array/test harness. |
| P6 | **Prerequisite** | Basic algorithms, asymptotic reasoning, queues/buffers, numerical stability | Mathematical Foundations / Design of Algorithms | Analyze replay-buffer and dense-layer time/space costs. |
| P7 | **Supplementary bridge** | Markov chains, stationary distributions, contraction intuition | Statistical Methods / Mathematical Foundations | Work a two-state Markov-chain example. |
| P8 | **Supplementary bridge** | Reproducible experiment configuration, structured logging, version capture | MLOps | Produce a run manifest with seed, package versions, configuration, and artifact hashes. |

### Entry sequence

1. P1-P6 diagnostics are mandatory.
2. Failed mathematics/statistics diagnostics route to cross-linked bridge
   material owned by the corresponding Semester 1 subject.
3. P7-P8 are taught as short bridges, not independent principal chapters.
4. Students must complete the tabular baseline gate before training a deep
   agent; neural-network complexity may not hide an incorrect MDP or target.

## 4. Ownership boundaries and anti-duplication rules

| Topic | Deep Reinforcement Learning owns | Other subject owns | Boundary rule |
|---|---|---|---|
| Linear algebra and calculus | Applied derivations of Bellman targets, policy gradients, natural-gradient/trust-region intuition | Mathematical Foundations | Link to proofs of matrix calculus and optimization fundamentals; do not re-create a general calculus chapter. |
| Probability and statistics | Return distributions, sampling under a policy, importance ratios, across-seed evaluation | Statistical Methods | Probability distributions, expectation/variance, estimators, hypothesis tests, and interval construction remain principal coverage in Statistics. |
| Classical ML | Sequential targets, non-i.i.d. replay data, policy-dependent distribution shift | Machine Learning | Regression/generalization fundamentals are prerequisites, not repeated principal chapters. |
| Neural networks | Why deep approximators alter RL stability; architecture choices tied to observations/actions | Deep Neural Networks | DNN owns backpropagation, CNN/RNN/Transformer mechanics, initialization, and optimizers. |
| Dynamic programming | Bellman evaluation/control as the conceptual baseline for MDPs | Design of Algorithms | General DP paradigms and unrelated combinatorial problems remain with Algorithms. |
| Robotics and control | Benchmark control tasks and safe simulator protocols | AI and ML for Robotics | Robot dynamics, ROS2, state estimation, motion planning, hardware integration, and sim-to-real are Robotics principal coverage. |
| Distributed systems | Actor-learner staleness, throughput, replay transport, synchronization trade-offs | Parallel and Distributed Programming / Distributed ML | General distributed-system primitives and cluster operations stay with those subjects. |
| Production systems | DRL-specific experiment provenance, policy evaluation, guardrails, rollback criteria | MLOps / Architecting AI Systems | Packaging, orchestration, observability platforms, and general serving architecture are cross-linked. |
| Multi-agent learning | Non-stationarity and centralized-training/decentralized-execution overview | Agentic AI / Robotics where configured | Full game theory, communication protocols, and coordination systems are advanced cross-subject extensions. |
| Ethics and safety | Reward misspecification, unsafe exploration, constraints, off-policy evaluation limits | Fair/Trustworthy ML and domain subjects | DRL contextualizes sequential harms; broader fairness/governance frameworks remain cross-linked. |

## 5. Proposed subject roadmap

The plan contains 12 principal chapters. This count is deliberately within the
8-16 chapter range and is based on conceptual dependencies rather than a forced
template.

| Ch. | Proposed title | Classification | Principal concepts | Gate/output | Hours |
|---:|---|---|---|---|---:|
| 1 | Sequential Decision-Making and the DRL Experimental Contract | **Prerequisite** | agent/environment loop; states, observations, actions, rewards, episodes; horizon; termination vs truncation; reward versus objective; reproducible run manifest | Correct Gymnasium interaction loop and problem statement | 7 |
| 2 | Markov Decision Processes, Values, and Bellman Reasoning | **Prerequisite** | Markov property; policies; occupancy intuition; returns; value/action-value functions; Bellman expectation/optimality equations; contraction intuition; policy/value iteration | Derive and numerically verify a small MDP | 11 |
| 3 | Sampling, Monte Carlo, Temporal Difference, and Tabular Control | **Prerequisite** | MC prediction; TD(0); n-step returns; eligibility-trace intuition; SARSA; expected SARSA; Q-learning; exploration schedules; on/off-policy distinction | Tabular baseline with convergence diagnostics | 10 |
| 4 | Function Approximation and the Stability Problem | **Supplementary** | semi-gradient learning; projected targets; replay; target networks; deadly triad; overestimation; normalization; gradient clipping; representation drift | Failure-case notebook and stability checklist | 10 |
| 5 | Deep Value-Based Learning: DQN to Distributional and Rainbow Agents | **Supplementary** | DQN objective; replay/target networks; Double DQN; dueling networks; prioritized replay; multi-step targets; noisy exploration; distributional value learning; Rainbow ablations | DQN from first principles plus controlled ablation | 13 |
| 6 | Policy Gradients, Credit Assignment, and Variance Reduction | **Supplementary** | likelihood-ratio estimator; policy-gradient theorem; reward-to-go; baselines; advantage functions; entropy; GAE; bias-variance trade-off | Derive and implement REINFORCE with baseline | 11 |
| 7 | Actor-Critic and Constrained Policy Updates | **Supplementary** | actor/critic coupling; A2C/A3C; importance ratios; trust-region intuition; TRPO surrogate; PPO clipping/KL diagnostics; implementation sensitivities | PPO implementation audit and multi-seed evaluation | 13 |
| 8 | Continuous-Control DRL: DDPG, TD3, and Soft Actor-Critic | **Supplementary** | deterministic policy gradient; target policy smoothing; twin critics; delayed policy updates; maximum entropy; temperature tuning; bounded actions | Compare TD3/SAC on a small continuous-control task | 13 |
| 9 | Model-Based Deep RL, Planning, and World Models | **Advanced extension** | learned dynamics; compounding model error; Dyna; MCTS interface; latent dynamics; MuZero; Dreamer; model-free/model-based compute and data trade-offs | Small latent/world-model planning prototype | 11 |
| 10 | Offline Reinforcement Learning and Sequential Models | **Advanced extension** | fixed datasets; support mismatch; extrapolation error; behavior policies; conservative value learning; D4RL; CQL; IQL; Decision Transformer; off-policy evaluation limits | Offline benchmark with dataset card and policy constraints | 11 |
| 11 | Exploration, Safety, Evaluation, and Reproducibility | **Advanced extension** + **Industry application** | intrinsic motivation overview; risk/constraints; reward hacking; safe exploration; evaluation protocols; seeds; uncertainty; ablations; Deep RL That Matters; incident/rollback criteria | Reproducibility dossier and safety case | 10 |
| 12 | Scaling, Multi-Agent Systems, and Responsible Deployment | **Advanced extension** + **Industry application** | vector environments; asynchronous actor-learners; IMPALA/V-trace; policy lag; replay services; multi-agent non-stationarity; monitoring; shadow/canary evaluation; governance | Architecture review and deployment readiness decision | 8 |
|  | **Principal chapter total** |  |  |  | **128** |

### Chapter dependency sequence

```text
P1-P8 diagnostics
  -> Ch1 interaction contract
  -> Ch2 MDP/Bellman foundations
  -> Ch3 tabular sampling/control
  -> Ch4 function approximation and stability
       -> Ch5 deep value methods
       -> Ch6 policy gradients
            -> Ch7 actor-critic/PPO
                 -> Ch8 continuous control
       -> Ch9 model-based/world models
       -> Ch10 offline RL
  -> Ch11 safety/evaluation/reproducibility
  -> Ch12 scaling/multi-agent/deployment
```

Chapters 9 and 10 may run in parallel after Chapters 4, 6, and 7. Chapter 11
starts early as a recurring laboratory rubric but is consolidated after the
algorithm families. Chapter 12 depends on evaluation competence, not only on
algorithm implementation.

## 6. Subject knowledge graph

### Concept nodes

- sequential decision process
- Markov decision process
- policy
- return
- state-value function
- action-value function
- Bellman operator
- occupancy measure
- Monte Carlo estimator
- temporal-difference error
- bootstrapping
- on-policy learning
- off-policy learning
- importance sampling
- replay buffer
- target network
- function approximation
- deadly triad
- exploration
- DQN
- policy gradient
- advantage estimator
- actor-critic
- trust region
- entropy regularization
- continuous control
- learned dynamics
- world model
- offline dataset
- distribution shift
- conservative value estimate
- constrained/safe policy
- evaluation protocol
- actor-learner architecture
- policy lag
- multi-agent non-stationarity

### Typed relationships

| From | Relationship | To |
|---|---|---|
| probability and expectation | `prerequisite_of` | return and value functions |
| Markov chain | `prerequisite_of` | Markov decision process |
| Markov decision process | `implemented_by` | environment API |
| policy | `evaluated_by` | value function |
| Bellman operator | `implemented_by` | dynamic programming and TD targets |
| Monte Carlo return | `alternative_to` | bootstrapped TD target |
| temporal-difference error | `used_by` | value learning and actor-critic |
| Q-learning | `extended_by` | DQN |
| function approximation + bootstrapping + off-policy data | `related_to` | deadly triad |
| replay buffer | `used_by` | DQN, DDPG, TD3, SAC |
| target network | `used_by` | DQN-family and off-policy actor-critic |
| policy-gradient theorem | `implemented_by` | REINFORCE and actor-critic |
| baseline | `evaluated_by` | gradient variance |
| advantage estimator | `used_by` | PPO and actor-critic |
| trust region | `approximated_by` | PPO clipping/KL control |
| entropy regularization | `used_by` | SAC |
| learned dynamics | `used_by` | planning and world models |
| offline dataset | `related_to` | support mismatch |
| support mismatch | `mitigated_by` | conservative/implicit offline RL |
| evaluation protocol | `evaluated_by` | multi-seed uncertainty and ablations |
| actor-learner decoupling | `applied_in` | IMPALA |
| policy lag | `evaluated_by` | off-policy correction |
| reward specification | `related_to` | safety and ethics |
| DRL | `applied_in` | games, robotics, resource control, simulation |

### Cross-subject edges

| Source subject/concept | Relationship | DRL concept |
|---|---|---|
| Mathematical Foundations: gradients | `prerequisite_of` | policy gradients |
| Mathematical Foundations: optimization | `prerequisite_of` | trust-region and actor updates |
| Statistical Methods: conditional probability | `prerequisite_of` | stochastic policies and transition kernels |
| Statistical Methods: estimators and intervals | `prerequisite_of` | multi-seed evaluation |
| Machine Learning: function approximation | `prerequisite_of` | deep value/policy networks |
| Deep Neural Networks: backpropagation | `prerequisite_of` | all deep agent updates |
| Deep Neural Networks: sequence models | `used_by` | Decision Transformer and recurrent agents |
| Robotics: dynamics and control | `applied_in` | continuous-control benchmarks |
| Distributed Programming | `implemented_by` | actor-learner systems |
| MLOps | `implemented_by` | experiment tracking and policy release gates |
| Fair/Trustworthy ML | `evaluated_by` | safety, constraints, governance |

## 7. Research-discovery queries

Queries are task manifests, not published claims. Search results must be
deduplicated by DOI, arXiv ID, OpenReview ID, or normalized title/first author.

| QID | Query | Preferred endpoints | Intended chapter |
|---|---|---|---|
| Q01 | `"Markov decision process" Bellman contraction policy iteration tutorial` | MIT Press, university notes, original papers | 2 |
| Q02 | `"Q-learning" Watkins Dayan convergence DOI` | Crossref, Springer, author page | 3 |
| Q03 | `"REINFORCE" Williams 1992 policy gradient DOI` | Crossref, Springer | 6 |
| Q04 | `"deadly triad" reinforcement learning function approximation counterexample` | Sutton/Barto, JMLR, PMLR | 4 |
| Q05 | `DQN replay target network Double DQN prioritized replay dueling distributional Rainbow` | Nature, AAAI, PMLR, arXiv | 5 |
| Q06 | `policy gradient theorem baseline advantage GAE variance derivation` | NeurIPS, arXiv, PMLR | 6 |
| Q07 | `TRPO PPO clipping KL implementation details reproducibility` | PMLR, arXiv, ICLR/OpenReview | 7 |
| Q08 | `DDPG TD3 SAC continuous control twin critics entropy temperature` | arXiv, PMLR | 8 |
| Q09 | `model-based deep reinforcement learning MuZero Dreamer world model model bias` | Nature, arXiv, author code | 9 |
| Q10 | `offline reinforcement learning survey CQL IQL Decision Transformer support mismatch` | arXiv, NeurIPS, OpenReview | 10 |
| Q11 | `safe reinforcement learning constrained MDP survey reward hacking exploration` | JMLR, IEEE, ACM | 11 |
| Q12 | `deep reinforcement learning reproducibility seeds confidence interval evaluation protocol` | AAAI, JMLR, NeurIPS | 11 |
| Q13 | `IMPALA V-trace policy lag actor learner distributed reinforcement learning` | PMLR | 12 |
| Q14 | `multi-agent reinforcement learning non-stationarity centralized training decentralized execution survey` | AAMAS, NeurIPS, JMLR | 12 |
| Q15 | `Gymnasium termination truncation bootstrapping API` | Farama official documentation | 1 |
| Q16 | `Stable-Baselines3 CleanRL benchmark implementation tests` | JMLR, official repositories | Labs |

## 8. Verified preliminary resource registry

Verification date for every row: **2026-07-28**. “Verified” means the metadata
and URL were checked against a primary publisher, proceedings, journal, arXiv,
OpenReview, or official documentation page. It does not mean every empirical
claim has been independently reproduced.

Legend: difficulty `F` foundation, `I` intermediate, `A` advanced; confidence is
metadata confidence, not a quality score.

| ID | Title | Author/organization | Year | Type / venue | Identifier and verified URL | Difficulty; relevance; prerequisites; access | Confidence / status |
|---|---|---|---:|---|---|---|---|
| R01 | *Reinforcement Learning: An Introduction*, 2nd ed. | Richard S. Sutton; Andrew G. Barto | 2018 | Book; MIT Press | ISBN `9780262039246`; https://mitpress.mit.edu/9780262039246/reinforcement-learning/ | F-I; complete conceptual spine; calculus/probability; publisher page and open-access resources | 1.00 / verified |
| R02 | Q-learning | Christopher J. C. H. Watkins; Peter Dayan | 1992 | Journal article; *Machine Learning* 8, 279-292 | DOI `10.1007/BF00992698`; https://doi.org/10.1007/BF00992698 | I; foundational off-policy control; MDP/TD; abstract free, access may vary | 1.00 / Crossref DOI verified |
| R03 | Simple statistical gradient-following algorithms for connectionist reinforcement learning | Ronald J. Williams | 1992 | Journal article; *Machine Learning* 8, 229-256 | DOI `10.1007/BF00992696`; https://doi.org/10.1007/BF00992696 | I; REINFORCE foundation; probability/calculus; abstract free, access may vary | 1.00 / Crossref DOI verified |
| R04 | Human-level control through deep reinforcement learning | Volodymyr Mnih et al. | 2015 | Article; *Nature* 518, 529-533 | DOI `10.1038/nature14236`; https://www.nature.com/articles/nature14236 | I; DQN reference; CNN/Q-learning; abstract free, access may vary | 1.00 / publisher verified |
| R05 | Trust Region Policy Optimization | John Schulman et al. | 2015 | ICML; PMLR 37, 1889-1897 | PMLR `v37/schulman15`; https://proceedings.mlr.press/v37/schulman15.html | A; trust-region derivation; policy gradients/KL; free | 1.00 / proceedings verified |
| R06 | Asynchronous Methods for Deep Reinforcement Learning | Volodymyr Mnih et al. | 2016 | ICML; PMLR 48, 1928-1937 | PMLR `v48/mniha16`; https://proceedings.mlr.press/v48/mniha16.html | I-A; A3C/scaling; actor-critic; free | 1.00 / proceedings verified |
| R07 | Proximal Policy Optimization Algorithms | John Schulman et al. | 2017 | arXiv preprint | arXiv `1707.06347`; https://arxiv.org/abs/1707.06347 | I-A; PPO objective; policy gradients/importance ratios; free | 0.99 / arXiv metadata verified |
| R08 | Continuous Control with Deep Reinforcement Learning | Timothy P. Lillicrap et al. | 2015 | arXiv / ICLR 2016 | arXiv `1509.02971`; https://arxiv.org/abs/1509.02971 | I-A; DDPG; actor-critic/continuous actions; free | 0.99 / arXiv metadata verified |
| R09 | Soft Actor-Critic: Off-Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor | Tuomas Haarnoja et al. | 2018 | ICML; PMLR 80, 1861-1870 | PMLR `v80/haarnoja18b`; https://proceedings.mlr.press/v80/haarnoja18b.html | A; entropy/continuous control; actor-critic; free | 1.00 / proceedings verified |
| R10 | A Distributional Perspective on Reinforcement Learning | Marc G. Bellemare; Will Dabney; Remi Munos | 2017 | ICML; PMLR 70, 449-458 | PMLR `v70/bellemare17a`; https://proceedings.mlr.press/v70/bellemare17a.html | A; return distributions; Bellman operators/probability; free | 1.00 / proceedings verified |
| R11 | Rainbow: Combining Improvements in Deep Reinforcement Learning | Matteo Hessel et al. | 2018 | AAAI 32(1) | DOI `10.1609/aaai.v32i1.11796`; https://ojs.aaai.org/index.php/AAAI/article/view/11796 | I-A; DQN synthesis/ablation; DQN extensions; free | 1.00 / AAAI DOI verified |
| R12 | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures | Lasse Espeholt et al. | 2018 | ICML; PMLR 80, 1407-1416 | PMLR `v80/espeholt18a`; https://proceedings.mlr.press/v80/espeholt18a.html | A; distributed actors/V-trace; actor-critic/importance sampling; free | 1.00 / proceedings verified |
| R13 | Mastering the Game of Go with Deep Neural Networks and Tree Search | David Silver et al. | 2016 | Article; *Nature* 529, 484-489 | DOI `10.1038/nature16961`; https://www.nature.com/articles/nature16961 | A; applied planning/self-play; DNN/MCTS/RL; abstract free, access may vary | 1.00 / Crossref and publisher verified |
| R14 | A General Reinforcement Learning Algorithm that Masters Chess, Shogi, and Go through Self-Play | David Silver et al. | 2018 | Article; *Science* 362, 1140-1144 | DOI `10.1126/science.aar6404`; https://doi.org/10.1126/science.aar6404 | A; applied self-play; search/model-based RL; abstract access varies | 1.00 / Crossref DOI verified |
| R15 | Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model | Julian Schrittwieser et al. | 2020 | Article; *Nature* 588, 604-609 | DOI `10.1038/s41586-020-03051-4`; https://www.nature.com/articles/s41586-020-03051-4 | A; MuZero/model-based RL; planning/value/policy networks; abstract free, access may vary | 1.00 / Crossref and publisher verified |
| R16 | Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems | Sergey Levine; Aviral Kumar; George Tucker; Justin Fu | 2020 | Tutorial/review; arXiv | arXiv `2005.01643`; https://arxiv.org/abs/2005.01643 | I-A; offline RL map; off-policy RL/statistics; free | 0.99 / arXiv metadata verified |
| R17 | Conservative Q-Learning for Offline Reinforcement Learning | Aviral Kumar; Aurick Zhou; George Tucker; Sergey Levine | 2020 | NeurIPS 33 | arXiv `2006.04779`; https://proceedings.neurips.cc/paper/2020/hash/0d2b2061826a5df3221116a5085a6052-Abstract.html | A; conservative offline values; Q-learning/distribution shift; free | 1.00 / proceedings verified |
| R18 | Decision Transformer: Reinforcement Learning via Sequence Modeling | Lili Chen et al. | 2021 | NeurIPS 34 | arXiv `2106.01345`; https://proceedings.neurips.cc/paper_files/paper/2021/hash/7f489f642a0ddb10272b5c31057f0663-Abstract.html | A; sequence-model view; Transformers/offline RL; free | 1.00 / proceedings verified |
| R19 | Offline Reinforcement Learning with Implicit Q-Learning | Ilya Kostrikov; Ashvin Nair; Sergey Levine | 2022 | ICLR 2022 | OpenReview `68n2s9ZJWF8`; https://openreview.net/forum?id=68n2s9ZJWF8 | A; avoids explicit OOD action evaluation; offline actor-critic; free | 0.99 / OpenReview record verified |
| R20 | D4RL: Datasets for Deep Data-Driven Reinforcement Learning | Justin Fu et al. | 2020 | Dataset/benchmark; arXiv | arXiv `2004.07219`; https://arxiv.org/abs/2004.07219 | I-A; offline benchmark design; Gym/off-policy evaluation; free, dataset licenses vary by component | 0.99 / arXiv metadata verified |
| R21 | A Comprehensive Survey on Safe Reinforcement Learning | Javier Garcia; Fernando Fernandez | 2015 | Survey; JMLR 16, 1437-1480 | https://jmlr.org/papers/v16/garcia15a.html | I-A; safety taxonomy; MDP/risk basics; free | 1.00 / journal verified |
| R22 | Deep Reinforcement Learning That Matters | Peter Henderson et al. | 2018 | AAAI 32(1) | DOI `10.1609/aaai.v32i1.11694`; https://doi.org/10.1609/aaai.v32i1.11694 | I; reproducibility/evaluation; experimental statistics; free | 1.00 / Crossref and AAAI DOI verified |
| R23 | Stable-Baselines3: Reliable Reinforcement Learning Implementations | Antonin Raffin et al. | 2021 | Software paper; JMLR 22(268), 1-8 | https://www.jmlr.org/papers/v22/20-1364.html | F-I; reference implementations; Python/PyTorch/Gymnasium; free | 1.00 / journal verified |
| R24 | CleanRL: High-quality Single-file Implementations of Deep Reinforcement Learning Algorithms | Shengyi Huang et al. | 2022 | Software paper; JMLR 23 | https://www.jmlr.org/papers/v23/21-1342.html | I; inspectable implementations; Python/PyTorch; free | 1.00 / journal verified |
| R25 | Gymnasium: a standard interface for reinforcement learning environments | Farama Foundation / Mark Towers et al. | 2024 | Official docs and software paper | arXiv `2407.17032`; https://gymnasium.farama.org/ | F; correct environment API; Python; free | 0.99 / official documentation verified |
| R26 | Mastering Diverse Control Tasks through World Models | Danijar Hafner; Jurgis Pasukonis; Jimmy Ba; Timothy Lillicrap | 2025 | Article; *Nature* 640, 647-653 | DOI `10.1038/s41586-025-08744-2`; https://www.nature.com/articles/s41586-025-08744-2 | A; modern world models/DreamerV3; model-based DRL; free/open access | 1.00 / publisher verified |

### Resource-selection cautions

- An authoritative URL verifies bibliographic identity, not correctness of every
  theorem, implementation, or empirical conclusion.
- Empirical scores must be taken from the original paper and reported with
  environment version, preprocessing, data budget, and evaluation protocol.
- ArXiv resources are identified as preprints even when associated with a
  conference.
- Stable software documentation changes. Chapter citations must pin versions
  and access dates.
- D4RL components have environment- and dataset-specific licenses; projects
  must verify the exact asset before redistribution.

## 9. Curated paper reading path

### Foundation - read first (4)

1. **R01 Sutton and Barto (2018)** - Chapters on MDPs, dynamic programming,
   Monte Carlo, TD, and function approximation establish vocabulary.
2. **R02 Watkins and Dayan (1992)** - connects Bellman optimality to off-policy
   tabular control and convergence conditions.
3. **R03 Williams (1992)** - foundational likelihood-ratio policy gradient.
4. **R04 Mnih et al. (2015)** - the canonical deep value-learning transition.

### Established deep-RL methods (8)

1. **R05 TRPO** - theoretically motivated constrained update.
2. **R06 A3C** - actor-critic and asynchronous experience collection.
3. **R07 PPO** - practical surrogate objectives; read critically with R22.
4. **R08 DDPG** - deterministic continuous control.
5. **R09 SAC** - stochastic maximum-entropy continuous control.
6. **R10 Distributional RL** - models the return distribution.
7. **R11 Rainbow** - component combination plus ablation.
8. **R12 IMPALA** - actor/learner separation and off-policy correction.

### Modern and advanced directions (7)

1. **R15 MuZero** - learned model for planning without reconstructing all
   observations.
2. **R17 CQL** - pessimistic/conservative values under offline shift.
3. **R18 Decision Transformer** - conditional sequence-model formulation.
4. **R19 IQL** - offline learning without directly evaluating unseen actions.
5. **R20 D4RL** - dataset design and benchmark limitations.
6. **R26 DreamerV3** - robust world-model learning across diverse domains.
7. **R16 Offline RL tutorial** - use as the bridge connecting R17-R20.

### Survey/tutorial path (3)

1. **R01** for the broad RL foundation;
2. **R16** for offline RL;
3. **R21** for safe RL.

### Applied and industry-oriented path (5)

1. **R13 AlphaGo** - deep policy/value learning plus tree search.
2. **R14 AlphaZero** - general self-play algorithm across board games.
3. **R15 MuZero** - planning with a learned model across games.
4. **R22 Deep RL That Matters** - evidence and reproducibility requirements.
5. **R23/R24/R25** - reliable baselines, readable implementations, and correct
   environment APIs.

### Chapter-to-reading map

| Chapter | Foundation | Modern/established | Survey/tutorial | Implementation |
|---:|---|---|---|---|
| 1 | R01 | R25 | R01 | R25 |
| 2 | R01 | R13 | R01 | small custom MDP |
| 3 | R02 | R04 | R01 | R25 |
| 4 | R01 | R22 | R01 | R24 |
| 5 | R04 | R10, R11 | R01 | R24 |
| 6 | R03 | R05 | R01 | R24 |
| 7 | R05, R06 | R07 | R22 | R23, R24 |
| 8 | R08 | R09 | R01 | R23 |
| 9 | R13 | R15, R26 | R01 | author repositories after license check |
| 10 | R16 | R17, R18, R19 | R16 | R20 |
| 11 | R22 | R21 | R21 | R23/R24 evaluation harness |
| 12 | R06 | R12 | R22 | R25 vector environments |

## 10. Project portfolio - six complete contracts

All projects are proposed material, not official brochure requirements.

### Project B1 - Tiny MDP Solver and Policy Laboratory

**Level/classification:** Beginner; **Prerequisite/Supplementary**

**Problem statement:** Build a transparent finite-MDP laboratory that performs
iterative policy evaluation, policy iteration, value iteration, Monte Carlo
prediction, SARSA, and Q-learning on the same small environment.

**Learning objectives:** connect equations to arrays; distinguish planning from
learning; verify Bellman residuals; compare on/off-policy behavior; explain
convergence assumptions.

**Prerequisites:** Chapters 1-3, NumPy, probability/expectation bridge.

**Architecture and data:** typed Python package with `mdp.py`, `solvers.py`,
`agents.py`, `evaluation.py`, and tests; synthetic gridworld transition table;
no personal data.

**Milestones:** (1) environment contract and exact solution; (2) DP solvers;
(3) sampled prediction/control; (4) convergence plots; (5) report.

**Implementation requirements:** deterministic seeds; terminal/truncation
distinction; input validation; Bellman residual; from-scratch algorithms; no
library agent implementation.

**Evaluation metrics:** policy return; Bellman residual; steps/samples to a
predeclared threshold; agreement with exact value within tolerance.

**Expected deliverables:** code, tests, environment specification, plots,
experiment manifest, 1,500-2,000 word report.

**Testing requirements:** transition probabilities sum to one; terminal targets
do not bootstrap; known MDP values; seed reproducibility; invalid action/state
tests.

**Extension ideas:** stochastic rewards; eligibility traces; non-stationary
transition variant; occupancy visualization.

**Deployment guidance:** package as a local educational CLI/notebook; no public
service is needed; pin dependencies and export results as static artifacts.

**Ethical considerations:** avoid implying toy-grid convergence transfers to
high-stakes domains; disclose simplifying assumptions.

**Marking rubric:** mathematical correctness 30%; implementation 25%; tests 20%;
evaluation 15%; communication/limitations 10%.

### Project B2 - Correct Gymnasium Experiment Harness

**Level/classification:** Beginner; **Industry application**

**Problem statement:** Build a reusable, tested interaction/evaluation harness
that handles reset, step, termination, truncation, seeding, video capture, and
structured run metadata correctly.

**Learning objectives:** understand the environment/agent boundary; prevent
time-limit bootstrapping errors; create reproducible baselines; separate train
and evaluation behavior.

**Prerequisites:** Chapter 1, Python packaging/testing, basic Gymnasium.

**Architecture and data:** `env_factory`, wrapper stack, random/tabular baseline,
evaluator, JSONL metrics, config file, artifact manifest; CartPole/FrozenLake or
another permissively licensed reference environment.

**Milestones:** API contract; deterministic smoke tests; baseline; evaluation
runner; artifact/report packaging.

**Implementation requirements:** current Gymnasium API; explicit
`terminated`/`truncated`; seed environment/action space/framework; fixed
evaluation episodes; exception-safe close; no global mutable configuration.

**Evaluation metrics:** test pass rate; reproducibility of seeded traces;
episodes/s; completeness of run metadata; baseline return.

**Expected deliverables:** installable package, CLI, tests, configuration,
sample logs, video, README.

**Testing requirements:** mocked environment edge cases; truncation and
termination targets; corrupted configuration; missing dependency; repeated seed
trace.

**Extension ideas:** vector environments; asynchronous collectors; resource
monitoring; property-based wrapper tests.

**Deployment guidance:** release as a versioned internal experiment utility;
never expose arbitrary environment loading to untrusted users; use allowlists.

**Ethical considerations:** logs must not capture secrets or personal data;
videos and environment assets must follow licenses.

**Marking rubric:** API correctness 30%; reproducibility 25%; tests 20%;
usability 15%; security/licensing documentation 10%.

### Project I1 - DQN Reproduction and Component Ablation

**Level/classification:** Intermediate; **Supplementary**

**Problem statement:** Implement a compact DQN from first principles and test
the contribution of replay, target-network update schedules, Double DQN, and
multi-step returns on a computationally modest environment.

**Learning objectives:** map Bellman targets to PyTorch; diagnose instability;
design fair ablations; report seed uncertainty; compare against a trusted
implementation without copying it.

**Prerequisites:** Chapters 1-5, PyTorch/DNN training, statistical evaluation.

**Architecture and data:** Gymnasium environment, online/target networks, replay
buffer, learner, evaluator, experiment configuration, metrics store; generated
interaction data only.

**Milestones:** random/tabular baseline; vanilla DQN; test harness; component
variants; multi-seed runs; ablation report.

**Implementation requirements:** target detachment; terminal masks; replay
sampling; gradient clipping policy; deterministic evaluation; environment-step
budget; implementation hashes.

**Evaluation metrics:** mean/median return by environment steps; interquartile
range or confidence interval across at least five seeds where compute permits;
wall time; sample efficiency; failure rate.

**Expected deliverables:** code, unit tests, run configs, raw tidy metrics,
learning curves, ablation table, 2,500-word report.

**Testing requirements:** replay capacity/sampling; target equation; network
copy/update; no-gradient target; known batch loss; checkpoint round trip.

**Extension ideas:** prioritized replay; dueling heads; distributional output;
NoisyNet exploration.

**Deployment guidance:** deploy only the deterministic evaluator in a sandbox;
training remains offline; record model/environment versions and rollback to a
baseline policy.

**Ethical considerations:** do not claim general intelligence from benchmark
scores; report compute/energy and failed seeds; avoid unsafe real-world control.

**Marking rubric:** algorithm correctness 25%; experiment design 25%; tests 15%;
analysis 25%; reproducibility/ethics 10%.

### Project I2 - PPO versus SAC in Continuous Control

**Level/classification:** Intermediate; **Supplementary**

**Problem statement:** Compare an on-policy clipped actor-critic with an
off-policy maximum-entropy actor-critic under equal environment-step budgets.

**Learning objectives:** distinguish data reuse and action distributions;
interpret entropy/KL/critic diagnostics; identify when equal steps do not mean
equal compute; perform sensitivity analysis.

**Prerequisites:** Chapters 1-4 and 6-8, continuous probability distributions,
PyTorch.

**Architecture and data:** one low-cost continuous Gymnasium environment;
student PPO implementation or carefully audited reference; SAC reference and
optional from-scratch critic/actor; shared evaluator.

**Milestones:** random baseline; PPO validation; SAC validation; budget-matched
runs; sensitivity/ablation; final comparison.

**Implementation requirements:** bounded action transform and log-probability
correction; advantage normalization policy; entropy/KL logs; replay warm-up;
twin critic checks; fixed evaluation protocol.

**Evaluation metrics:** return, sample efficiency, wall-clock time, actor/critic
loss diagnostics, entropy, approximate KL, seed dispersion, inference latency.

**Expected deliverables:** configs, code/audit notes, tests, raw metrics, model
cards, comparative report.

**Testing requirements:** action bounds; log-probability correction; GAE on a
hand-worked trajectory; target-network update; evaluation determinism.

**Extension ideas:** TD3; automatic entropy tuning ablation; observation/reward
normalization; partial observability.

**Deployment guidance:** use simulator-only shadow evaluation; specify action
rate limits, fallback controller, and performance/safety rollback thresholds
before any physical integration.

**Ethical considerations:** continuous-control success in simulation does not
establish physical safety; disclose simulator and reward misspecification.

**Marking rubric:** mathematical/implementation accuracy 25%; fairness of
comparison 25%; tests 15%; analysis 25%; safety documentation 10%.

### Project A1 - Offline RL Dataset Shift and Conservative Learning

**Level/classification:** Advanced; **Advanced extension**

**Problem statement:** Compare behavior cloning, a standard off-policy baseline,
and one offline-specific method such as CQL or IQL on a documented D4RL-style
dataset, emphasizing support mismatch rather than leaderboard ranking.

**Learning objectives:** identify extrapolation error; audit dataset coverage;
explain conservative/implicit objectives; separate offline selection from
online evaluation; construct a dataset card.

**Prerequisites:** Chapters 1-8 and 10, density/support intuition, actor-critic.

**Architecture and data:** immutable versioned dataset; loader/validator;
behavior-cloning baseline; offline learner; evaluator; dataset and model cards.
Use only an asset whose exact license is verified.

**Milestones:** license/provenance gate; dataset audit; supervised baseline;
offline method; hyperparameter protocol; evaluation and limitations.

**Implementation requirements:** no online data during training; train/selection
protocol fixed in advance; OOD-action diagnostics; normalized-score definition;
configuration and artifact hashes.

**Evaluation metrics:** return under a separately controlled simulator when
permitted; behavior-cloning gap; Q-value calibration diagnostics; dataset
coverage; seed uncertainty; compute.

**Expected deliverables:** dataset card, code, tests, raw metrics, checkpoints,
model card, 3,000-word technical report.

**Testing requirements:** dataset immutability/hash; episode-boundary parsing;
no online-step leakage; normalization calculation; checkpoint reproducibility.

**Extension ideas:** Decision Transformer; IQL/CQL comparison; uncertainty-aware
policy selection; safe offline constraint.

**Deployment guidance:** do not deploy solely from offline return estimates;
require independent off-policy evaluation, simulator stress tests, shadow
deployment, human approval, and rollback.

**Ethical considerations:** logged data can encode historical harms and consent
limitations; document provenance, population coverage, privacy, and excluded
uses.

**Marking rubric:** data/provenance 20%; method correctness 25%; evaluation 20%;
tests/reproducibility 15%; limitations/safety/ethics 20%.

### Project R1 - Reproducing Model-Free versus World-Model Claims at Reduced Scale

**Level/classification:** Research; **Advanced extension**

**Problem statement:** Formulate and execute a preregistered reduced-scale study
comparing a model-free baseline with a learned-world-model agent or planning
prototype under matched interaction and compute reporting.

**Learning objectives:** translate paper claims into falsifiable hypotheses;
define evaluation units; measure model error and policy return; analyze negative
results; distinguish reproduction from replication.

**Prerequisites:** Chapters 1-9 and 11; PyTorch; sequence models; statistical
experimental design.

**Architecture and data:** one procedurally generated or pixel/vector benchmark;
model-free baseline; latent dynamics/reward model; planner or imagined
actor-critic; experiment registry; preregistration and evidence archive.

**Milestones:** literature/claim matrix; preregistration; environment and
baseline validation; world-model validation; controlled runs; analysis;
artifact release.

**Implementation requirements:** fixed data/compute budgets; multiple seeds;
model-prediction metrics; open-loop rollout diagnostics; implementation
deviation log; raw result preservation.

**Evaluation metrics:** return versus environment steps; wall-clock/GPU hours;
model prediction/reconstruction or latent consistency metrics; seed
uncertainty; robustness under environment variations.

**Expected deliverables:** preregistration, source trail, code, tests, raw
metrics, checkpoints where licensing permits, paper-style report, negative
result appendix.

**Testing requirements:** world-model tensor shapes; rollout horizon; reset and
terminal semantics; determinism; metric calculation; checkpoint restoration;
data leakage checks.

**Extension ideas:** Dreamer-style latent imagination; MuZero-style value/reward
dynamics; uncertainty ensembles; offline pretraining.

**Deployment guidance:** research artifact only; do not claim readiness for
unbounded environments; provide resource limits, failure examples, and model
card.

**Ethical considerations:** report compute and environmental cost; avoid
anthropomorphic claims; assess whether reward optimization could produce
harmful behavior; respect environment/data licenses.

**Marking rubric:** research question/design 20%; technical execution 25%;
evidence quality 20%; analysis/original insight 20%; reproducibility and
responsible reporting 15%.

## 11. Workload arithmetic

| Activity | Calculation | Hours |
|---|---:|---:|
| Principal chapters | sum of chapter estimates | 128 |
| Prerequisite diagnostics and P7-P8 bridge | 4 diagnostics + 2 short bridges | 8 |
| Guided laboratories | 7 labs x 4 hours | 28 |
| Paper reading and annotation | 12 guided papers x 2 hours | 24 |
| Project work | B1 5 + B2 5 + I1 7 + I2 7 + A1 7 + R1 7 | 38 |
| Quizzes, assignment review, oral defense | 8 + 4 | 12 |
| **Estimated total learning time** | **128 + 8 + 28 + 24 + 38 + 12** | **238 hours** |

This is a planning estimate, not an official credit-hour statement. The research
project is scoped as a small reproducibility study; full-paper reproduction may
require substantially more compute and time.

## 12. Proposed assessment architecture

All assessment weights are **Supplementary proposals**:

- low-stakes chapter quizzes: 10%;
- mathematical derivations and tabular assignment: 15%;
- implementation/testing laboratories: 20%;
- DQN/PPO-SAC experimental report: 20%;
- advanced offline or model-based project: 20%;
- research reading oral defense and reproducibility dossier: 15%.

Every empirical submission must include raw tidy metrics, seed-level results,
environment/version identifiers, configuration, compute budget, and known
limitations. A single favorable learning curve is insufficient evidence.

## 13. Validation gates before chapter generation

- [x] Exact title and Semester 2 placement verified visually in the brochure.
- [x] Absence of topic-level official units documented.
- [x] Every chapter classified as prerequisite, supplementary, advanced
  extension, or industry application.
- [x] Chapter count is within 8-16.
- [x] Ownership boundaries with mathematics, statistics, ML, DNN, robotics,
  distributed systems, and MLOps are explicit.
- [x] Knowledge graph uses typed relationships.
- [x] 26 preliminary resources use primary/official records.
- [x] DOI/arXiv/OpenReview identifiers were checked where used.
- [x] Reading path contains foundational, established, modern, survey, and
  applied resources.
- [x] Six projects include complete required contracts.
- [x] Workload arithmetic is explicit and sums to 238 hours.
- [ ] Independent curriculum/editorial review.
- [ ] Independent citation review of chapter-level claim placement.
- [ ] Any future detailed official syllabus reconciliation.
- [ ] Compute and licensing approval before D4RL/MuJoCo/Atari assets are used.

## 14. Citation audit and rejected candidates

### Accepted verification methods

- Crossref records for DOI identity and core metadata;
- publisher version-of-record pages for Nature, Science, Springer, and MIT
  Press;
- PMLR and NeurIPS proceedings pages;
- JMLR article records;
- arXiv abstract records;
- OpenReview's accepted-paper record;
- official Farama documentation.

### Rejected or excluded

| Candidate | Decision | Reason |
|---|---|---|
| Unattributed candidate DOI `10.5555/3305890.3306035` | Rejected | Crossref lookup returned no record in this verification run; it is not used. |
| Search-result citation counts | Excluded | Counts are time-varying, provider-dependent, and irrelevant to educational selection. |
| Google Scholar scraping | Excluded | Not required; structured/publisher sources provide traceable metadata. |
| Random “best DRL algorithms” blogs | Excluded | Secondary SEO material is not suitable as primary academic evidence. |
| `incompleteideas.net` as the sole bibliographic authority for R01 | Replaced for metadata verification | Local TLS verification failed; the MIT Press official book page supplies verified title, authors, edition, date, and ISBN. The author site may still be offered later as a free companion after link validation in CI. |
| MIT Press page HTTP 403 in the final automated link probe | Not a citation rejection | The official page was independently retrieved through web discovery and verified the title, authors, edition, publication dates, publisher, and ISBN; CI should distinguish anti-bot responses from dead links. |
| Science page HTTP 403 in automated link probe | Not a citation rejection | Crossref verified DOI `10.1126/science.aar6404`; CI should treat publisher anti-bot responses separately from dead links. |

No paper, author, DOI, arXiv ID, venue, or empirical result is invented in this
plan. Resource inclusion does not imply endorsement of every claim.

## 15. Risks, assumptions, and open decisions

1. **Official-detail risk:** the brochure is title-only. A detailed syllabus may
   require chapter reordering, deletion, or reclassification.
2. **Scope risk:** 238 hours is ambitious. A credit-linked official workload may
   require a core/extension split.
3. **Compute risk:** Atari, MuJoCo, Dreamer, MuZero, and multi-seed studies can
   exceed student hardware. Reduced-scale alternatives and explicit budgets are
   mandatory.
4. **Benchmark risk:** scores are not comparable across environment versions,
   wrappers, action repeats, termination rules, preprocessing, and data budgets.
5. **Reproducibility risk:** DRL is sensitive to seeds and implementation
   details; the plan requires seed-level raw evidence and negative results.
6. **Safety risk:** simulator success cannot authorize real-world control.
7. **Licensing risk:** environment binaries, ROMs, MuJoCo assets, and D4RL
   datasets require per-asset review.
8. **Specialization risk:** multi-agent, robotics, model-based, and offline RL
   can each become a full subject; they remain bounded extensions here.
9. **Tool drift:** Gymnasium and libraries change. Published chapters must pin
   versions and distinguish termination from truncation.
10. **Elective mapping:** relationships to Robotics, MLOps, Distributed ML, and
    trustworthy ML depend on the student's later elective choices.

## 16. Subject Lead recommendation

Approve this bundle for **independent outline, citation, and workload review**.
Do not begin 3,000-word chapter generation until:

1. an independent reviewer confirms the ownership boundaries;
2. the institution provides no contradictory detailed syllabus;
3. a core-versus-extension workload decision is recorded;
4. compute/licensing limits are defined; and
5. chapter-level paper claims receive source-specific citation tasks.
