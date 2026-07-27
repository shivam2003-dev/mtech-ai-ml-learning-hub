# Deep Neural Networks — Subject Lead Planning Bundle

**Agent:** `subject-lead-sem-02-deep-neural-networks`
**Subject ID:** `SUBJ-005`
**Status:** planning complete; full chapters not generated
**Plan version:** 1.0.0
**Prepared and sources accessed:** 2026-07-28

## 1. Official curriculum interpretation

### Verified course identity

- **Official title:** Deep Neural Networks.
- **Placement:** Semester 2 compulsory subject.
- **Primary source:** BITS Pilani Work Integrated Learning Programmes, *M.Tech. Artificial Intelligence and Machine Learning for working professionals* brochure.
- **Source file:** `/Users/shivamkumar/Downloads/mtech-ai-ml.pdf`.
- **SHA-256:** `fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b`.
- **Placement evidence:** physical PDF page 12 / printed page 10.
- **Course-description evidence:** physical PDF page 14 / printed page 12.

### Official course-topic description, preserved exactly

> Introduction to neural networks, linear neural networks for regression and classification, deep feedforward neural networks, backpropagation, deep network training, regularization and optimization, transfer learning and fine-tuning, convolutional neural networks, recurrent neural networks, attention mechanisms, transformers and vision transformers.

The brochure supplies a course-topic description, but it does not define official units, prerequisites, outcomes, hours, tools, datasets, assessment weights, or chapter ordering. Nothing in this plan converts a proposed chapter into an official university unit.

### Classification policy

- **Official topic:** one of the twelve phrases transcribed above.
- **Prerequisite:** readiness knowledge needed to study an official topic.
- **Supplementary:** explanatory or practical depth added for a coherent postgraduate course.
- **Advanced extension:** research-facing material beyond the brochure wording.
- **Industry application:** reproducibility, safety, efficiency, governance, or deployment practice.

Every non-official addition must retain one of these labels in later metadata and prose.

### Complete official-topic mapping

| # | Official brochure topic | Planned primary location | Coverage decision |
| ---: | --- | --- | --- |
| 1 | Introduction to neural networks | Chapter 1 | Definitions, representations, neuron/layer abstractions, computation graphs, capacity, and responsible problem framing |
| 2 | Linear neural networks for regression and classification | Chapter 2 | Linear regression, softmax classification, losses, vectorization, and from-scratch implementations |
| 3 | Deep feedforward neural networks | Chapter 3 | Layer composition, activation functions, expressivity, architecture design, and initialization bridge |
| 4 | Backpropagation | Chapter 4 | Chain rule, reverse-mode automatic differentiation, tensor shape checks, gradient checking, and numerical stability |
| 5 | Deep network training | Chapter 5 | Training loop, initialization, learning-rate behaviour, normalization, diagnostics, and reproducible experiments |
| 6 | Regularization and optimization | Chapter 6 | Explicit/implicit regularization, dropout, augmentation, SGD family, Adam, schedules, and generalization cautions |
| 7 | Transfer learning and fine-tuning | Chapter 7 | Feature reuse, freezing, discriminative learning rates, domain shift, parameter-efficient adaptation, and evaluation |
| 8 | Convolutional neural networks | Chapter 8 | Discrete convolution, receptive fields, padding/stride, pooling, residual connections, and CNN implementation |
| 9 | Recurrent neural networks | Chapter 9 | Recurrence, unrolling, BPTT, vanishing/exploding gradients, gated units, masking, and sequence evaluation |
| 10 | Attention mechanisms | Chapter 10 | Query-key-value attention, masking, multi-head construction, complexity, and interpretability limits |
| 11 | Transformers | Chapter 11 | Encoder/decoder blocks, position information, residual paths, normalization, training/inference, and scaling |
| 12 | Vision transformers | Chapter 12 | Patch embeddings, class/readout tokens, positional encodings, data/compute trade-offs, and CNN comparison |

**Coverage result:** 12 official phrases mapped to 12 chapters; no omission and no silent merging.

## 2. Proposed learning outcomes

These outcomes are **Supplementary**, not brochure-defined. A learner completing the approved subject should be able to:

1. express a neural model as tensor transformations and a computation graph while tracking shapes, parameters, assumptions, and differentiability;
2. derive and implement linear neural regression and multiclass classification from first principles;
3. explain why composing affine maps with nonlinear activations changes representational capacity and identify where universal-approximation claims do not guarantee trainability or generalization;
4. derive reverse-mode backpropagation through scalar, vector, matrix, branching, and shared-parameter graphs;
5. use finite differences and framework autograd to test gradients without confusing numerical agreement with model correctness;
6. construct a deterministic, observable training loop with appropriate initialization, batching, metrics, checkpoints, and failure diagnostics;
7. compare SGD, momentum, adaptive optimizers, schedules, normalization, weight decay, dropout, augmentation, and early stopping without making universal-superiority claims;
8. design a transfer-learning or fine-tuning protocol that prevents leakage and measures domain shift and subgroup performance;
9. derive convolution output shapes, parameter counts, receptive fields, and residual mappings and implement a compact CNN;
10. derive recurrent updates and backpropagation through time and diagnose long-dependency, padding, and state-management failures;
11. derive scaled dot-product and multi-head attention, explain masks, and calculate their time and memory costs;
12. implement a small transformer and explain positional information, normalization placement, residual streams, decoding constraints, and evaluation;
13. construct and critique a vision transformer, comparing its inductive biases and data requirements with a CNN under a controlled budget;
14. read primary papers by separating reported results, assumptions, later interpretation, and locally reproduced evidence;
15. report reproducibility, compute, energy, privacy, bias, robustness, security, and intended-use limitations for a deep model;
16. connect DNN concepts to Machine Learning, Computer Vision, NLP, Multimodal AI, Distributed ML, MLOps, and ML System Optimization without duplicating their task-specific depth.

## 3. Proposed prerequisites and readiness

All entries are non-official.

| Level | Classification | Required readiness | Diagnostic and remediation |
| --- | --- | --- | --- |
| P0 | **Prerequisite: Python** | Functions, classes, iterators, type hints, environments, tests, NumPy arrays | Implement a seeded minibatch iterator and test invalid shapes |
| P0 | **Prerequisite: data practice** | Train/validation/test roles, leakage, identifiers, labels, normalization | Audit a deliberately leaky preprocessing pipeline |
| P1 | **Prerequisite: linear algebra** | Vectors, matrices, tensors, products, transpose, norms, rank, broadcasting | Mathematical Foundations review plus tensor-shape worksheet |
| P1 | **Prerequisite: calculus** | Partial derivatives, gradients, Jacobian-vector products, chain rule | Differentiate a branched scalar graph by hand |
| P1 | **Prerequisite: probability/statistics** | Expectation, variance, likelihood, sampling, uncertainty, confidence intervals | Statistical Methods refresher and repeated-seed analysis |
| P1 | **Prerequisite: optimization** | Objectives, gradient descent, convexity vocabulary, constraints | Compare a quadratic's analytic solution with gradient descent |
| P1 | **Prerequisite: classical ML** | Regression/classification, losses, overfitting, regularization, metrics | Machine Learning Chapters 1-5 and 12 readiness quiz |
| P2 | **Supplementary: systems** | CPU/GPU memory, vectorization, profiling, serialization | Profile one matrix operation and document device/dtype |
| P2 | **Industry application: governance** | Dataset licence, personal data, model cards, threat models | Complete a data/model risk checklist before a real-data lab |

Dependency flow:

```text
Python + tensor algebra + calculus
       └──> linear neural models ──> feedforward networks ──> backpropagation
                                              │
probability + optimization + ML evaluation ───┴──> training and regularization
                                                        │
                              ┌─────────────────────────┼─────────────────────┐
                              v                         v                     v
                             CNNs                     RNNs                transfer
                                                        │
                                                        v
                                                    attention
                                                        │
                                                        v
                                                  transformers ──> ViTs
```

### Cross-subject ownership boundaries

- **Mathematical Foundations for Machine Learning** owns foundational tensor algebra, multivariable calculus, probability, and optimization proofs. This subject applies them to neural computation.
- **Machine Learning** owns general supervised-learning workflow, linear-model breadth, classical generalization/evaluation, and algorithm comparison. DNN Chapter 2 uses linear neural models as a bridge, not a replacement.
- **Artificial and Computational Intelligence** may introduce threshold units and backpropagation historically. This subject owns the detailed computational-graph derivation, training diagnostics, and architecture consequences.
- **Introduction to Statistical Methods** owns formal estimation, hypothesis testing, uncertainty, and comparison methodology. DNN uses repeated-seed intervals and links to those derivations.
- **Computer Vision** owns image features, detection, segmentation, generation, vision-language systems, and task-specific architecture surveys. DNN owns convolution and ViT mechanics.
- **Natural Language Processing and LLM electives** own tokenization, language modelling objectives, linguistic tasks, alignment, retrieval, and application-specific evaluation. DNN owns generic attention and transformer architecture.
- **Distributed Machine Learning** owns collective communication, data/model/pipeline parallelism, distributed correctness, and large-cluster training. DNN mentions scaling only to explain constraints.
- **ML System Optimization, MLOps, and Architecting AI Systems** own compilers, serving, observability, deployment pipelines, and production architecture. DNN records basic profiles and artifacts but does not duplicate those courses.

## 4. Proposed 12-chapter outline

Each row is a planning unit, not a full chapter or an official university unit.

| Ch. | Proposed title | Classified planned depth | Practical anchor | Hours |
| ---: | --- | --- | --- | ---: |
| 1 | Neural Networks as Differentiable Programs | **Official:** introduction. **Prerequisite:** tensors/calculus. **Supplementary:** computation graphs, shapes, parameters, activations, capacity versus evidence. **Industry application:** task/data/model cards. | Inspect a tiny network's forward graph and shape invariants | 10 |
| 2 | Linear Neural Models for Regression and Classification | **Official:** linear neural networks. **Supplementary:** MSE, likelihood bridge, sigmoid/softmax, cross-entropy, vectorization, decision boundaries, conditioning. | NumPy linear regressor and softmax classifier with tests | 14 |
| 3 | Deep Feedforward Networks and Representation | **Official:** deep feedforward networks. **Supplementary:** affine-nonlinear composition, activations, width/depth, universal approximation limits, initialization preview. | MLP decision surfaces and activation ablation | 15 |
| 4 | Backpropagation and Automatic Differentiation | **Official:** backpropagation. **Supplementary:** reverse mode, local Jacobians, branching, shared weights, gradient checking, nondifferentiability and floating-point error. | Small autodiff engine plus PyTorch comparison | 18 |
| 5 | Training Deep Networks Reliably | **Official:** deep network training. **Supplementary:** initialization, minibatches, normalization, learning curves, plateaus, exploding/vanishing signals, checkpoints. **Industry application:** determinism and experiment manifests. | Failure-injection training laboratory | 15 |
| 6 | Regularization, Optimization, and Generalization | **Official:** regularization and optimization. **Supplementary:** SGD/momentum/Adam, schedules, weight decay, dropout, augmentation, early stopping, label smoothing. **Advanced extension:** sharpness/implicit-bias reading. | Matched-budget optimizer and regularizer study | 17 |
| 7 | Transfer Learning and Fine-Tuning | **Official:** transfer learning and fine-tuning. **Supplementary:** frozen features, full/partial tuning, discriminative rates, domain shift. **Advanced extension:** adapters and LoRA. **Industry application:** provenance and licence. | Controlled frozen-versus-fine-tuned experiment | 13 |
| 8 | Convolutional Neural Networks | **Official:** CNNs. **Supplementary:** convolution arithmetic, receptive fields, equivariance limits, pooling, normalization, residual connections. | CNN from primitives and framework version | 17 |
| 9 | Recurrent Neural Networks and Sequence Memory | **Official:** RNNs. **Supplementary:** unrolling, BPTT, gradient dynamics, LSTM/GRU, masking, teacher forcing boundaries, state leakage. | Character or sensor-sequence model with masked batches | 16 |
| 10 | Attention Mechanisms | **Official:** attention. **Supplementary:** Q/K/V, scaled dot product, masks, heads, cross-attention, complexity. **Industry application:** memory profiling and explanation cautions. | Attention from scratch with mask/property tests | 15 |
| 11 | Transformers | **Official:** transformers. **Supplementary:** encoder/decoder stacks, positional methods, residual/norm variants, objectives, decoding, caching. **Advanced extension:** scaling laws and efficient adaptation. | Small encoder/decoder transformer and ablations | 18 |
| 12 | Vision Transformers and Architectural Comparison | **Official:** vision transformers. **Supplementary:** patchification, tokens, positional embeddings, augmentation/data scale, CNN-ViT inductive-bias comparison. **Industry application:** robustness and compute reporting. | Tiny ViT versus matched CNN on one controlled dataset | 16 |

**Core chapter hours:** 184.

### Chapter quality contract for later drafting

Every principal chapter must contain at least 3,000 meaningful prose words, all required platform sections, defined notation, derivation steps, numerical examples, tested first-principles and library code where useful, complexity/scalability analysis, security/ethics/privacy discussion where relevant, and claim-level references. The Mathematics Reviewer must approve Chapters 2-6 and 8-12. No full chapter is authorized by this planning artifact.

## 5. Workload model

The workload is additive exactly once:

| Activity | Hours | Included work |
| --- | ---: | --- |
| Readiness diagnostic and remediation | 8 | Python, tensors, calculus, evaluation checks |
| Chapter-guided study | 82 | Original prose, equations, worked examples |
| Guided implementation labs | 50 | From-scratch and PyTorch/Keras work |
| Exercises, assignments, and quizzes | 30 | Formative and assessed practice |
| Guided primary-paper reading | 22 | Structured reading questions and evidence tables |
| One selected project pathway | 32 | One substantial project; not all six portfolio options |
| Cumulative review and oral defence | 12 | Concept map, derivation check, project defence |
| **Total** | **236** | `8 + 82 + 50 + 30 + 22 + 32 + 12` |

The four chapter-study categories sum to the 184 hours shown in the chapter table (`82 + 50 + 30 + 22`). The six projects are alternatives. Completing all six would require additional hours and is not included in 236.

## 6. Proposed knowledge graph

| Source concept | Relation | Target concept | Ownership/use |
| --- | --- | --- | --- |
| tensor algebra | `prerequisite_of` | neural layers | Mathematical Foundations owns foundations |
| chain rule | `implemented_by` | backpropagation | DNN primary derivation |
| computation graph | `used_by` | reverse-mode autodiff | DNN |
| linear models | `prerequisite_of` | feedforward networks | Machine Learning bridge |
| nonlinear activation | `used_by` | deep representation | DNN |
| initialization | `used_by` | stable deep training | DNN |
| stochastic optimization | `implemented_by` | SGD and Adam | DNN application; math proof cross-link |
| regularization | `evaluated_by` | validation protocol | ML/Statistics cross-link |
| pretrained representation | `used_by` | transfer learning | DNN |
| convolution | `implemented_by` | CNN layer | DNN mechanics |
| local receptive field | `used_by` | CNN inductive bias | DNN |
| recurrence | `implemented_by` | RNN | DNN |
| gating | `extension_of` | vanilla recurrence | DNN |
| attention | `alternative_to` | recurrent bottleneck | DNN, not universal replacement |
| scaled dot-product attention | `implemented_by` | multi-head attention | DNN |
| positional representation | `used_by` | transformer | DNN |
| transformer | `used_by` | NLP and multimodal models | Applications owned by electives |
| patch embedding | `implemented_by` | vision transformer | DNN |
| CNN | `alternative_to` | vision transformer | Conditional on data/task/budget |
| data parallelism | `applied_in` | large-scale training | Distributed ML owns details |
| model card | `evaluated_by` | intended-use review | Industry application |
| adversarial perturbation | `evaluated_by` | robustness test | DNN introduction; security elective extends |

No strict prerequisite cycle is introduced. Related/alternative edges must not be rendered as chronological prerequisites.

## 7. Research-discovery plan

Queries are templates, not evidence. Results enter content only after author, title, venue, identifier, and claim verification.

| ID | Service/source | Query and purpose |
| --- | --- | --- |
| Q01 | Crossref/OpenAlex | exact-title search for backpropagation, universal approximation, LSTM, transfer, optimization |
| Q02 | NeurIPS proceedings | AlexNet, sequence-to-sequence, attention, compute-optimal training |
| Q03 | PMLR | batch normalization and optimization/training papers |
| Q04 | JMLR | dropout and reproducible implementation resources |
| Q05 | arXiv | `cat:cs.LG AND (deep training OR optimization)`, discovery only until venue verified |
| Q06 | arXiv | exact IDs for Adam, ViT, LoRA, scaling laws, Chinchilla, adversarial examples |
| Q07 | OpenReview | accepted ICLR records for ViT and LoRA; reject withdrawn lookalikes |
| Q08 | IEEE/Crossref | CNN, transfer-learning survey, and proceedings metadata |
| Q09 | ACM/Crossref | model reporting and responsible-computing records |
| Q10 | official books | chapter coverage for feedforward, optimization, CNN, RNN, attention, transformers |
| Q11 | PyTorch/TensorFlow docs | executable APIs, reproducibility, transfer learning, attention primitives |
| Q12 | Stanford CS231n/CS224N | authoritative lecture routes for CNNs, RNNs, attention, transformers |
| Q13 | Papers With Code/code repositories | implementation discovery only; never sole support for scientific claims |
| Q14 | citation graph | later corrections, replications, limitations, and negative evidence for each anchor paper |
| Q15 | dataset repositories | exact version, licence, checksum, sensitive attributes, and intended use before project approval |

Selection score (100 points): syllabus relevance 25, methodological/historical importance 15, educational value 15, reproducibility/code/data 10, source/venue quality 10, accessibility 10, influence on later work 5, recency where relevant 5, limitations/negative-evidence value 5. Citation count alone never determines inclusion.

Deduplicate by DOI, then arXiv/OpenReview/proceedings ID, then normalized title plus first author. Cache metadata, use bounded concurrency, and interpret HTTP 403/429 as access control or throttling rather than invalidity.

## 8. Verified preliminary resource catalogue

All 29 resources were checked on 2026-07-28. Confidence describes metadata/host verification, not agreement with every claim. Publisher access conditions may change.

### Authoritative books, courses, and implementation documentation

| ID | Title | Author/organisation; year | Type/venue | URL / identifier | Difficulty; relevance; prerequisites | Access | Confidence / status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R01 | *Deep Learning* | Ian Goodfellow, Yoshua Bengio, Aaron Courville; 2016 | MIT Press book | https://www.deeplearningbook.org/ | Intermediate-advanced; mathematical and architectural reference; linear algebra/calculus/probability | Free official HTML; paid print | 1.00 / official author site verified |
| R02 | *Dive into Deep Learning* | Aston Zhang, Zachary C. Lipton, Mu Li, Alexander J. Smola; 2023 | Cambridge UP interactive book | https://d2l.ai/ | Beginner-advanced; executable math/code path; Python and ML | Free official site; paid print | 1.00 / official project metadata verified |
| R03 | PyTorch Tutorials | PyTorch Foundation; n.d.; accessed 2026-07-28 | Official documentation/tutorials | https://docs.pytorch.org/tutorials/ | Beginner-advanced; tested framework patterns; Python/tensors | Free | 1.00 / official documentation verified |
| R04 | Keras Guide | TensorFlow/Google; n.d.; accessed 2026-07-28 | Official documentation | https://www.tensorflow.org/guide/keras | Beginner-intermediate; second framework perspective; Python | Free | 1.00 / official documentation verified |
| R05 | CS231n: Deep Learning for Computer Vision | Stanford University; n.d.; accessed 2026-07-28 | University course archive | https://cs231n.stanford.edu/ | Intermediate-advanced; CNN/training/vision lectures; calculus/ML | Free materials | 0.99 / institutional host verified |
| R06 | CS224N: Natural Language Processing with Deep Learning | Stanford University; n.d.; accessed 2026-07-28 | University course archive | https://web.stanford.edu/class/cs224n/ | Advanced; RNN/attention/transformer teaching; probability/ML | Free public materials | 0.99 / institutional host verified |

### Foundational papers

| ID | Citation metadata | Identifier / URL | Difficulty; relevance; prerequisites | Access | Confidence / status |
| --- | --- | --- | --- | --- | --- |
| R07 | Rosenblatt, F. (1958). “The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain.” *Psychological Review*, 65(6), 386-408. | DOI `10.1037/h0042519`; https://doi.org/10.1037/h0042519 | Advanced historical; linear neural classifier; probability/linear algebra | Publisher conditions vary | 1.00 / Crossref metadata verified |
| R08 | Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). “Learning representations by back-propagating errors.” *Nature*, 323, 533-536. | DOI `10.1038/323533a0`; https://doi.org/10.1038/323533a0 | Advanced; backpropagation; calculus/neural units | Publisher conditions vary | 1.00 / Crossref and resolver verified |
| R09 | Hornik, K., Stinchcombe, M., & White, H. (1989). “Multilayer feedforward networks are universal approximators.” *Neural Networks*, 2(5), 359-366. | DOI `10.1016/0893-6080(89)90020-8`; https://doi.org/10.1016/0893-6080(89)90020-8 | Advanced; expressivity theorem and limitations; analysis/probability | Publisher conditions vary | 1.00 / Crossref verified |
| R10 | LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998). “Gradient-Based Learning Applied to Document Recognition.” *Proceedings of the IEEE*, 86(11), 2278-2324. | DOI `10.1109/5.726791`; https://doi.org/10.1109/5.726791 | Advanced; CNN system lineage; convolution/backprop | Publisher conditions vary | 1.00 / Crossref and DOI resolver verified |
| R11 | Hochreiter, S., & Schmidhuber, J. (1997). “Long Short-Term Memory.” *Neural Computation*, 9(8), 1735-1780. | DOI `10.1162/neco.1997.9.8.1735`; https://doi.org/10.1162/neco.1997.9.8.1735 | Advanced; gated recurrence; BPTT/calculus | Publisher conditions vary | 1.00 / Crossref verified |

### Important established papers

| ID | Citation metadata | Identifier / URL | Difficulty; relevance; prerequisites | Access | Confidence / status |
| --- | --- | --- | --- | --- | --- |
| R12 | Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). “ImageNet Classification with Deep Convolutional Neural Networks.” *NeurIPS 25*. | Official proceedings: https://papers.neurips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks | Advanced; deep CNN training; CNN/GPU basics | Free | 1.00 / official proceedings verified |
| R13 | Srivastava, N., Hinton, G., Krizhevsky, A., Sutskever, I., & Salakhutdinov, R. (2014). “Dropout: A Simple Way to Prevent Neural Networks from Overfitting.” *JMLR*, 15, 1929-1958. | https://jmlr.org/papers/v15/srivastava14a.html | Intermediate-advanced; regularization; probability/training | Free | 1.00 / official journal verified |
| R14 | Ioffe, S., & Szegedy, C. (2015). “Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift.” *ICML 2015*, PMLR 37, 448-456. | arXiv `1502.03167`; https://proceedings.mlr.press/v37/ioffe15.html | Advanced; normalization and training; statistics/backprop | Free | 1.00 / official PMLR and arXiv metadata verified |
| R15 | Kingma, D. P., & Ba, J. (2015). “Adam: A Method for Stochastic Optimization.” *ICLR 2015*. | arXiv `1412.6980`; https://arxiv.org/abs/1412.6980 | Advanced; adaptive optimization; gradients/moments | Free | 0.99 / arXiv identity and ICLR venue verified |
| R16 | He, K., Zhang, X., Ren, S., & Sun, J. (2016). “Deep Residual Learning for Image Recognition.” *CVPR 2016*, 770-778. | DOI `10.1109/CVPR.2016.90`; https://doi.org/10.1109/CVPR.2016.90 | Advanced; residual optimization and CNNs; convolution | Publisher page/author preprint | 1.00 / Crossref and DOI resolver verified |
| R17 | Sutskever, I., Vinyals, O., & Le, Q. V. (2014). “Sequence to Sequence Learning with Neural Networks.” *NeurIPS 27*. | arXiv `1409.3215`; https://papers.neurips.cc/paper/5346-sequence-to-sequence-learning-with-neural-networks | Advanced; sequence modelling bridge; RNN/LSTM | Free | 1.00 / official proceedings and arXiv verified |

### Modern and state-shaping papers

| ID | Citation metadata | Identifier / URL | Difficulty; relevance; prerequisites | Access | Confidence / status |
| --- | --- | --- | --- | --- | --- |
| R18 | Vaswani, A., et al. (2017). “Attention Is All You Need.” *NeurIPS 30*. | arXiv `1706.03762`; https://papers.neurips.cc/paper/7181-attention-is-all-you-need | Advanced; transformer foundation; attention/linear algebra | Free | 1.00 / official proceedings and arXiv verified |
| R19 | Dosovitskiy, A., et al. (2021). “An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale.” *ICLR 2021*. | arXiv `2010.11929`; OpenReview `YicbFdNTTy`; https://openreview.net/forum?id=YicbFdNTTy | Advanced; ViT; transformer/CNN/evaluation | Free | 1.00 / accepted OpenReview and arXiv verified |
| R20 | Hu, E. J., et al. (2022). “LoRA: Low-Rank Adaptation of Large Language Models.” *ICLR 2022*. | arXiv `2106.09685`; OpenReview `nZeVKeeFYf9`; https://openreview.net/forum?id=nZeVKeeFYf9 | Advanced extension; parameter-efficient tuning; transformers/low rank | Free | 1.00 / accepted OpenReview and arXiv verified |
| R21 | Kaplan, J., et al. (2020). “Scaling Laws for Neural Language Models.” arXiv preprint. | arXiv `2001.08361`; https://arxiv.org/abs/2001.08361 | Advanced extension; empirical scaling; statistics/compute | Free | 1.00 / arXiv metadata verified |
| R22 | Hoffmann, J., et al. (2022). “An empirical analysis of compute-optimal large language model training.” *NeurIPS 35*. The related arXiv version is titled “Training Compute-Optimal Large Language Models.” | DOI `10.52202/068431-2176`; official proceedings: https://papers.neurips.cc/paper_files/paper/2022/hash/c1e2faff6f588870935f114ebe04a3e5-Abstract-Conference.html; arXiv `2203.15556` | Advanced extension; compute/data trade-offs; transformers/statistics | Free proceedings and preprint | 1.00 / official NeurIPS, DOI, and arXiv identities verified |
| R28 | Guo, C., Pleiss, G., Sun, Y., & Weinberger, K. Q. (2017). “On Calibration of Modern Neural Networks.” *ICML 2017*, PMLR 70, 1321-1330. | https://proceedings.mlr.press/v70/guo17a.html | Advanced; modern softmax confidence calibration; classification/probability/evaluation | Free | 1.00 / official PMLR verified |
| R29 | Baydin, A. G., Pearlmutter, B. A., Syme, D., Wood, F., & Torr, P. H. S. (2022). “Gradients without Backpropagation.” arXiv preprint. | arXiv `2202.08587`; https://arxiv.org/abs/2202.08587 | Advanced; forward-gradient contrast to reverse-mode backpropagation; calculus/autodiff/probability | Free | 1.00 / arXiv and institutional author record verified |

### Surveys, tutorials, and applied/responsible papers

| ID | Citation metadata | Role | Identifier / URL | Difficulty; relevance; prerequisites | Access | Confidence / status |
| --- | --- | --- | --- | --- | --- | --- |
| R23 | LeCun, Y., Bengio, Y., & Hinton, G. (2015). “Deep learning.” *Nature*, 521, 436-444. | Survey/review | DOI `10.1038/nature14539`; https://doi.org/10.1038/nature14539 | Intermediate-advanced; broad architecture/history map; ML and neural fundamentals | Publisher conditions vary | 1.00 / Crossref verified |
| R24 | Pan, S. J., & Yang, Q. (2010). “A Survey on Transfer Learning.” *IEEE TKDE*, 22(10), 1345-1359. | Survey | DOI `10.1109/TKDE.2009.191`; https://doi.org/10.1109/TKDE.2009.191 | Advanced; transfer taxonomy and assumptions; probability and ML evaluation | Publisher conditions vary | 1.00 / Crossref and DOI resolver verified |
| R25 | Bottou, L., Curtis, F. E., & Nocedal, J. (2018). “Optimization Methods for Large-Scale Machine Learning.” *SIAM Review*, 60(2), 223-311. | Survey/tutorial | DOI `10.1137/16M1080173`; https://doi.org/10.1137/16M1080173 | Advanced; optimization theory/practice bridge; calculus, probability, and optimization | Publisher conditions vary; author copies may exist | 1.00 / Crossref verified |
| R26 | Szegedy, C., et al. (2014). “Intriguing properties of neural networks.” *ICLR 2014*. | Applied robustness/security | arXiv `1312.6199`; https://arxiv.org/abs/1312.6199 | Advanced; adversarial vulnerability evidence; gradients, CNNs, and evaluation | Free | 1.00 / arXiv and venue identity verified |
| R27 | Mitchell, M., et al. (2019). “Model Cards for Model Reporting.” *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 220-229. | Applied governance/reporting | DOI `10.1145/3287560.3287596`; https://doi.org/10.1145/3287560.3287596 | Intermediate; intended-use and limitation reporting; evaluation and stakeholder analysis | ACM conditions vary; author copies may exist | 1.00 / Crossref verified |

### Citation rejects

1. **DOI `10.1145/3065386` as the original 2012 NeurIPS AlexNet citation** — rejected for that role. Crossref identifies a 2017 *Communications of the ACM* republication. R12 uses the official 2012 NeurIPS record so year and venue claims remain exact.
2. **DOI `10.48550/arXiv.1207.0580` as the identifier for the 2014 JMLR Dropout paper** — rejected. It identifies the related 2012 preprint “Improving neural networks by preventing co-adaptation of feature detectors,” with a different title and author record. R13 cites the official JMLR article.

## 9. Curated paper reading path

### Foundational path (5)

1. R07 Rosenblatt — identify the linear decision rule and separate historical claims from modern terminology.
2. R08 Rumelhart, Hinton, and Williams — reconstruct the chain-rule argument and note the paper's scope.
3. R09 Hornik, Stinchcombe, and White — distinguish representational existence from optimization, sample efficiency, and generalization.
4. R10 LeCun et al. — connect convolution, backpropagation, and an end-to-end document system.
5. R11 Hochreiter and Schmidhuber — trace cell-state and gating equations against the long-dependency problem.

### Important established path (6)

6. R12 AlexNet — evaluate architecture, data, augmentation, compute, and historical context.
7. R13 Dropout — compare the training rule, ensemble interpretation, experiments, and modern implementation.
8. R14 Batch Normalization — reproduce a bounded result and read later caveats before repeating the original causal story.
9. R15 Adam — derive moment updates and test sensitivity against well-tuned SGD.
10. R16 ResNet — connect identity paths to optimization evidence without claiming all depth problems are solved.
11. R17 sequence-to-sequence — understand encoder-decoder recurrence before attention removes the fixed-vector bottleneck.

### Modern path (5)

12. R18 Transformer — derive attention, masks, multi-head composition, and complexity.
13. R19 ViT — inspect patch/token design and compare budgets rather than headline accuracy.
14. R20 LoRA — connect low-rank updates to parameter/memory accounting and adaptation limits.
15. R21 scaling laws — separate empirical fits in a defined regime from universal laws.
16. R22 compute-optimal training — compare assumptions and compute accounting with R21.
17. R28 calibration — connect softmax outputs to confidence calibration and decision-facing evaluation.
18. R29 forward gradients — contrast an unbiased forward-gradient estimator with reverse-mode backpropagation and inspect variance/cost limits.

### Survey/tutorial path (3)

19. R23 deep-learning review — build a historical map, then verify individual scientific claims in primary papers.
20. R24 transfer-learning survey — use the taxonomy while noting its age and later deep-transfer changes.
21. R25 large-scale optimization review — connect convergence assumptions to non-convex practice and system constraints.

### Applied/responsible path (2)

22. R26 adversarial properties — reproduce a small perturbation study and distinguish vulnerability evidence from security guarantees.
23. R27 model cards — turn the final experiment into bounded intended-use, metric, subgroup, and limitation reporting.

### Chapter reading matrix

| Chapter | Foundational/established | Modern | Survey/tutorial | Implementation/applied |
| ---: | --- | --- | --- | --- |
| 1 | R07-R08 | R21 | R23 | R02-R04, R27 |
| 2 | R07 | R28 | R01-R02 | R03-R04 |
| 3 | R08-R09 | R21 | R23 | R01-R03 |
| 4 | R08 | R29 | R01 | R03 |
| 5 | R12, R14 | R21-R22 | R25 | R03-R04 |
| 6 | R13-R16 | R21-R22 | R25 | R03, R26 |
| 7 | — | R20 | R24 | R03-R04, R27 |
| 8 | R10, R12, R16 | R19 | R23 | R03, R05, R26 |
| 9 | R11, R17 | R18 as transition | R01-R02 | R03, R06 |
| 10 | R17-R18 | R19 | R02 | R03, R06 |
| 11 | R18 | R20-R22 | R02, R25 | R03-R04, R06 |
| 12 | R10, R16 | R19 | R02, R23 | R03, R05, R26-R27 |

An authoritative book or official implementation guide fills the tutorial/implementation role where forcing an unrelated paper would reduce educational quality.

## 10. Complete project portfolio

Every project is non-official. The six are alternatives and exceed the one-project core workload.

### Beginner B1 — Linear Neural Models from First Principles

- **Classification:** Official-topic implementation + Supplementary validation.
- **Problem statement:** implement seeded minibatch linear regression and softmax classification without an autograd library, then compare with PyTorch.
- **Learning objectives:** derive losses/gradients; vectorize updates; validate shapes; distinguish optimization failure from modelling error.
- **Prerequisites:** Chapters 1-2, NumPy, derivatives, train/validation/test roles.
- **Architecture:** synthetic-data generator → validated batch loader → model/loss/gradient modules → trainer → evaluator.
- **Dataset:** deterministic synthetic regression and multiclass Gaussian data with documented generator parameters; no external licence dependency.
- **Milestones:** data/tests; forward pass; analytic gradients; finite-difference check; optimizer; PyTorch parity; report.
- **Implementation requirements:** Python 3.12, NumPy, PyTorch, type hints, seed control, invalid-shape errors, expected-output example.
- **Evaluation metrics:** parameter recovery, MSE, accuracy/log loss, gradient relative error, runtime and memory.
- **Expected deliverables:** package, tests, notebook, derivation note, environment lock, README.
- **Testing requirements:** empty batches, incompatible shapes, extreme logits, gradient checks, deterministic rerun.
- **Extension ideas:** class weighting, label smoothing, sparse inputs.
- **Deployment guidance:** local CLI/notebook only; serialize configuration and weights, not a public decision API.
- **Ethical considerations:** synthetic findings do not establish performance or fairness on people.
- **Marking rubric:** derivation 25%, correctness 30%, tests 20%, evaluation 15%, communication/ethics 10%.

### Beginner B2 — Training Failure and Regularization Laboratory

- **Classification:** Official training/regularization + Industry application.
- **Problem statement:** diagnose underfitting, overfitting, unstable gradients, bad initialization, leakage, and miscalibration in a small MLP.
- **Learning objectives:** read learning curves; isolate one intervention; compare dropout/weight decay/early stopping; report uncertainty.
- **Prerequisites:** Chapters 1-6, pytest, basic statistics.
- **Architecture:** scenario registry → MLP → intervention config → repeated-seed runner → diagnostic report.
- **Dataset:** UCI Optical Recognition of Handwritten Digits, DOI `10.24432/C50P49`, canonical UCI record; exact downloaded snapshot/checksum and current UCI licence must be recorded before execution.
- **Milestones:** provenance; baseline; injected failures; fixes; five-seed comparison; model card.
- **Implementation requirements:** PyTorch, deterministic split manifest, no test-set tuning, configurable dtype/device, checkpoint recovery.
- **Evaluation metrics:** loss, accuracy, calibration error, gradient/activation norms, variance, time, peak memory.
- **Expected deliverables:** tested runner, configs, plots, evidence log, model card.
- **Testing requirements:** split disjointness, seed repeatability, finite losses, checkpoint round trip, intentionally leaky negative test.
- **Extension ideas:** mixup, label smoothing, stochastic depth.
- **Deployment guidance:** static diagnostic report; no public prediction endpoint.
- **Ethical considerations:** digit benchmark is not evidence for handwriting identity, educational attainment, or demographic performance.
- **Marking rubric:** diagnosis 25%, experimental control 25%, implementation 20%, testing 15%, reporting/ethics 15%.

### Intermediate I1 — CNN Architecture and Receptive-Field Study

- **Classification:** Official CNN topic + Supplementary architecture study.
- **Problem statement:** build a compact CNN from primitives and compare receptive field, parameter count, residual connections, and a matched MLP.
- **Learning objectives:** calculate output shapes/receptive fields; implement convolution blocks; design matched-budget comparisons.
- **Prerequisites:** Chapters 1-8, image tensors, experimental design.
- **Architecture:** versioned image loader → primitive CNN/residual CNN/MLP → budget matcher → evaluator/profiler.
- **Dataset:** same versioned UCI Digits record as B2, reshaped only according to documented fields; no hidden augmentation.
- **Milestones:** arithmetic worksheet; primitive convolution test; baselines; residual model; ablation; report.
- **Implementation requirements:** from-scratch educational convolution for a tiny case plus PyTorch training; record parameters/FLOP estimate/hardware.
- **Evaluation metrics:** accuracy/log loss, sample efficiency, parameters, estimated operations, latency, peak memory, seed variance.
- **Expected deliverables:** code, tests, architecture diagrams, ablation table, limitations.
- **Testing requirements:** convolution against trusted library, padding/stride edge cases, shape properties, deterministic data splits.
- **Extension ideas:** depthwise convolution, anti-aliasing, equivariance tests.
- **Deployment guidance:** export only after parity test; local inference benchmark, not high-stakes use.
- **Ethical considerations:** compute accounting, benchmark overclaiming, and dataset representativeness.
- **Marking rubric:** math/correctness 25%, experiment 25%, software/tests 20%, efficiency 15%, analysis/ethics 15%.

### Intermediate I2 — Recurrent Models for Sensor Sequences

- **Classification:** Official RNN topic + Industry application.
- **Problem statement:** compare a vanilla RNN, GRU/LSTM, and non-recurrent baseline on windowed activity-sensor sequences.
- **Learning objectives:** implement masking/state handling; diagnose gradient dynamics; avoid participant leakage; evaluate sequence models.
- **Prerequisites:** Chapters 1-6 and 9, probability, time-series splitting.
- **Architecture:** immutable participant-level split → window pipeline → recurrent/baseline adapters → evaluator.
- **Dataset:** UCI Human Activity Recognition Using Smartphones, DOI `10.24432/C54S4K`; canonical UCI record, snapshot/checksum/licence recorded.
- **Milestones:** provenance and participant split; baseline; RNN; gated model; gradient analysis; error/slice report.
- **Implementation requirements:** PyTorch, packed or masked sequences, hidden-state reset tests, no random row split across participants.
- **Evaluation metrics:** macro-F1, class recall, calibration, latency, memory, seed variance, gradient norms.
- **Expected deliverables:** pipeline, tests, model/data cards, comparison report, reproducibility manifest.
- **Testing requirements:** participant disjointness, padding invariance, state reset, short/empty sequence errors, deterministic evaluation.
- **Extension ideas:** bidirectionality, temporal convolution, attention comparison.
- **Deployment guidance:** offline research prototype only; wearable deployment needs consent, drift monitoring, and device validation.
- **Ethical considerations:** activity inference can enable surveillance; do not infer health, productivity, or identity.
- **Marking rubric:** leakage control 25%, recurrent correctness 25%, evaluation 20%, tests 15%, ethics/reporting 15%.

### Advanced A1 — Parameter-Efficient Transfer under Domain Shift

- **Classification:** Official transfer/fine-tuning + Advanced extension.
- **Problem statement:** compare frozen features, partial/full fine-tuning, and low-rank adaptation under controlled synthetic visual domain shifts.
- **Learning objectives:** measure adaptation/forgetting; account for trainable parameters/memory; choose a tuning strategy from evidence.
- **Prerequisites:** Chapters 1-8 and 11, low-rank matrices, nested model selection.
- **Architecture:** procedural image generator → source pretraining → shift generator → adaptation strategies → robustness evaluator.
- **Dataset:** seeded procedural shapes/textures with source/target colour, noise, and geometry shifts; generator code/version is the dataset.
- **Milestones:** generator validation; source model; frozen baseline; full tuning; adapter/LoRA variant; OOD analysis.
- **Implementation requirements:** fixed pretrained checkpoint, equal search budget, parameter/memory accounting, fallback on adaptation failure.
- **Evaluation metrics:** target/source accuracy, forgetting, calibration, trainable parameters, time, peak memory, robustness by shift.
- **Expected deliverables:** repository, checkpoint manifests, model cards, ablations, paper-style report.
- **Testing requirements:** generator distribution tests, checkpoint integrity, frozen-parameter assertions, adapter merge parity, NaN recovery.
- **Extension ideas:** prompt tuning, continual adaptation, uncertainty-aware abstention.
- **Deployment guidance:** batch demonstrator with base-model fallback; no claim of real-world domain transfer.
- **Ethical considerations:** adaptation can preserve source bias or amplify target imbalance; report both source and target harms.
- **Marking rubric:** protocol 25%, implementation 25%, efficiency evidence 20%, robustness 15%, reporting/ethics 15%.

### Research R1 — CNN versus Vision Transformer under a Matched Budget

- **Classification:** Official CNN/ViT synthesis + Research-oriented extension.
- **Problem statement:** test how CNN and tiny ViT inductive biases interact with sample size, augmentation, corruption, and compute budget.
- **Learning objectives:** preregister hypotheses; match budgets; quantify uncertainty; separate observed evidence from architectural folklore.
- **Prerequisites:** Chapters 1-8 and 10-12, statistics, profiling, research writing.
- **Architecture:** procedural vision benchmark plus approved UCI Digits replication → model adapters → budget scheduler → run store → statistical analysis.
- **Dataset:** primary procedural benchmark with exact generator; secondary UCI Digits snapshot only after provenance/licence record.
- **Milestones:** literature protocol; preregistration; implementation parity; pilot; 10+ seeds per condition; robustness checks; paper.
- **Implementation requirements:** matched parameter and training-compute bands, identical splits/augmentations, corrected multiple comparisons where applicable.
- **Evaluation metrics:** accuracy/log loss/calibration, corruption robustness, sample efficiency, time, operations estimate, memory, uncertainty intervals.
- **Expected deliverables:** preregistration, tested code, immutable run manifests, negative results, paper-style report, reproducibility checklist.
- **Testing requirements:** parameter-budget assertions, patch reconstruction, attention-mask properties, data checksum, duplicate-run detection.
- **Extension ideas:** hybrid conv stem, distillation, token pruning, larger approved dataset.
- **Deployment guidance:** no production deployment; publish a static evidence package and environment.
- **Ethical considerations:** compute/energy budget, benchmark external validity, selective reporting, and reproducibility.
- **Marking rubric:** research design 25%, fairness of comparison 25%, technical correctness 20%, statistical analysis 15%, transparency/ethics 15%.

## 11. Planned assignments and quizzes

1. Tensor-shape and parameter-count worksheet.
2. Linear neural regression/classification derivation and implementation.
3. Backpropagation trace through a branched graph with shared weights.
4. Gradient-checking and numerical-stability laboratory.
5. Training-failure diagnosis memo.
6. Matched-budget optimizer/regularization experiment.
7. Convolution/receptive-field derivation and implementation.
8. RNN/BPTT gradient analysis.
9. Attention masks and complexity exercise.
10. Transformer/ViT architecture comparison.

Each chapter receives a 10-15 item mixed quiz: concept selection, tensor-shape calculation, derivation step, code-reading fault, experiment-design critique, and claim/source classification. Solutions must explain distractors and acceptable alternative notation.

## 12. Subject-level validation gates

The planning bundle may integrate only if:

- [x] brochure file identity and locators are recorded;
- [x] all 12 official phrases are preserved and mapped;
- [x] all additions are classified;
- [x] 12 chapters fall within the 8-16 range;
- [x] outcomes, prerequisites, knowledge graph, research queries, and hours are present;
- [x] 29 resources contain required human-readable metadata;
- [x] paper path meets category minima;
- [x] six projects meet 2 beginner / 2 intermediate / 1 advanced / 1 research and contain every contract field;
- [x] workload arithmetic adds once;
- [x] citation rejections are documented;
- [x] no full chapter was generated.

Before any chapter can become `approved`:

- [ ] its claims and exact citations are verified against read primary sources;
- [ ] all external links and identifiers are rechecked with cached, rate-aware validation;
- [ ] code runs in the pinned environment and reusable functions have tests;
- [ ] mathematical notation, dimensions, and derivations pass independent review;
- [ ] prose exceeds 3,000 meaningful original words without filler;
- [ ] source claims, educational interpretation, and local reproduction evidence are visibly distinct;
- [ ] dataset identity/licence/checksum is final;
- [ ] accessibility, heading, metadata, equation, and code-block checks pass;
- [ ] no placeholders or internal agent instructions remain;
- [ ] cross-subject ownership and links are enforced.

## 13. Recommended next tasks

1. Integrate this provisional outline and resource metadata into structured subject records.
2. Freeze the cross-subject ownership matrix before prose generation.
3. Create Chapter 1 and Chapter 4 task specifications; Chapter 4 is the mathematical review reference.
4. Resolve exact dataset snapshots and licences for B2, I1, I2, and R1.
5. Build cached DOI/arXiv/OpenReview verification and link-check scripts.
6. Draft the Chapter 1 reference only after academic-editor approval of terminology and boundaries.
7. Run Mathematics Reviewer, Code Author, Citation Verifier, Accessibility Reviewer, and Academic Editor gates independently.
