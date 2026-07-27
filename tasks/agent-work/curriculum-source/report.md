# Curriculum Source Analysis Report

## Verification status

**Verified local source found.** The uploaded brochure is sufficient to establish the programme structure, all 45 taught-course titles, elective-pool groupings, the compulsory/elective semester pattern, and course-level topic descriptions for 15 subjects. It is **not** sufficient to establish detailed units, prerequisites, outcomes, tools, or chapter outlines for every individual subject.

No topic below has been added from general knowledge. Where the brochure supplies only a course title, that limitation is stated explicitly.

## Source identity

| Field | Verified value |
| --- | --- |
| Local path | `/Users/shivamkumar/Downloads/mtech-ai-ml.pdf` |
| PDF metadata title | `M.Tech. AI & ML_New Brochure_2026 copy` |
| Document-facing title | `M.Tech. Artificial Intelligence and Machine Learning for working professionals` |
| Institution/programme owner shown | BITS Pilani Work Integrated Learning Programmes (WILP) |
| Document type | Programme brochure |
| Length | 23 physical PDF pages |
| Relevant cohort language | Admissions open for July 2026 batch; fee schedule for academic year 2026-27 |
| SHA-256 | `fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b` |
| Curriculum evidence | Physical PDF pages 12-13, printed pages 10-11 |
| Course-topic evidence | Physical PDF pages 14-17, printed pages 12-15 |
| Programme/tool evidence | Physical PDF pages 4-5 and 9-10, printed pages 2-3 and 7-8 |
| Extraction methods | PDF metadata inspection, `pdftotext -layout`, and rendered-page inspection at 120 DPI |

Page references in this report use **physical PDF page numbers first**, followed by the number printed in the brochure where one is present.

## Programme-level facts

- The programme has four semesters and is described as having 12 courses: four courses in each of Semesters 1-3, followed by a dissertation or capstone project in Semester 4. **Evidence:** PDF p.4 (printed p.2).
- The curriculum table is more specific: Semester 1 has four compulsory subjects; Semester 2 has two compulsory subjects and two electives; Semester 3 has four electives; Semester 4 has a dissertation. **Evidence:** PDF p.12 (printed p.10).
- The brochure therefore defines **45 unique taught-course subjects** in total: 6 compulsory subjects and 39 elective-pool subjects. The dissertation is a separate project requirement, not counted as a taught subject. **Evidence:** PDF pp.12-13 (printed pp.10-11).
- The brochure provides programme-level eligibility, not subject-specific prerequisites: relevant degrees and marks/work-experience conditions, working knowledge of computing, and programming. **Evidence:** PDF p.4 (printed p.2).
- It gives programme-level objectives but no separate learning outcomes for every subject. **Evidence:** PDF p.5 (printed p.3).

## Semester structure

### Semester 1 - compulsory

1. Mathematical Foundations for Machine Learning
2. Introduction to Statistical Methods
3. Artificial and Computational Intelligence
4. Machine Learning

**Evidence:** PDF p.12 (printed p.10).

### Semester 2 - compulsory plus electives

1. Deep Neural Networks
2. Deep Reinforcement Learning
3. Elective 1
4. Elective 2

**Evidence:** PDF p.12 (printed p.10).

### Semester 3 - electives

1. Elective 3
2. Elective 4
3. Elective 5
4. Elective 6

**Evidence:** PDF p.12 (printed p.10).

### Semester 4 - project

- Dissertation

**Evidence:** PDF pp.12-13 (printed pp.10-11).

The brochure does **not** map any named elective specifically to Semester 2 or Semester 3. Any such mapping must remain configurable until a registration/advising source is supplied.

## Official subject registry and specialization grouping

The numbering below is for audit convenience; it does not appear in the brochure.

### Compulsory subjects (6)

1. Mathematical Foundations for Machine Learning - Semester 1
2. Introduction to Statistical Methods - Semester 1
3. Artificial and Computational Intelligence - Semester 1
4. Machine Learning - Semester 1
5. Deep Neural Networks - Semester 2
6. Deep Reinforcement Learning - Semester 2

**Evidence:** PDF p.12 (printed p.10).

### General elective pool (17)

7. AI and ML for Robotics
8. AI and ML Techniques for Cyber Security
9. Advanced Data Mining
10. API-driven Cloud Native Solutions
11. Automated Reasoning
12. Architecting AI Systems
13. Agentic AI Systems
14. Design of Algorithms
15. Data Management for Machine Learning
16. Introduction to Parallel and Distributed Programming
17. MLOps
18. Metaheuristics for Optimization
19. Multimodal AI
20. Multimodal Information Retrieval
21. Probabilistic Graphical Models
22. Quantum Machine Learning
23. Software Engineering for Machine Learning

**Evidence:** PDF p.12 (printed p.10).

### NLP specialization elective pool (8)

24. Advanced Reasoning and Planning
25. Conversational AI
26. Information Retrieval
27. Large Language Models for Generative AI
28. Natural Language Processing - marked `#`
29. NLP Applications
30. Speech Processing
31. Social Media Analytics

The brochure states that at least three courses are required, including the course marked `#`; the rendered page places `#` on Natural Language Processing. **Evidence:** PDF p.13 (printed p.11).

### Deep Learning specialization elective pool (7)

32. Computational Learning Theory
33. Distributed Machine Learning
34. Fair, Interpretable, Trustworthy Machine Learning
35. Graph Neural Networks
36. ML System Optimization
37. Machine Learning on the Edge
38. Unsupervised Deep Learning - marked `#`

The brochure states that at least three courses are required, including the course marked `#`; the rendered page places `#` on Unsupervised Deep Learning. **Evidence:** PDF p.13 (printed p.11).

### Audio and Vision elective pool (7)

39. Audio Analysis - marked `#`
40. Computer Vision - marked `#`
41. Computational Photography
42. Computational Imaging
43. Contemporary Computer Graphics
44. 3D Computer Vision
45. Video Analysis

The rendered page marks both Audio Analysis and Computer Vision with `#`, while the note says, in the singular, "including the course marked in #." The likely requirement is to include the marked courses, but the exact rule is ambiguous and must be confirmed before encoding it as a validation rule. The heading reads "Pool of Electives - Audio and Vision"; unlike the two preceding headings, it does not visibly include the word "Specialization." **Evidence:** PDF p.13 (printed p.11).

## Course-topic descriptions available in the brochure

The brochure calls this section "Courses Wise Syllabus," but it presents prose topic lists rather than numbered units. These descriptions may be used to build **provisional syllabus interpretations**, not to claim official unit boundaries.

### Deep Neural Networks

Official topics: introduction to neural networks; linear neural networks for regression and classification; deep feedforward neural networks; backpropagation; deep network training; regularization and optimization; transfer learning and fine-tuning; convolutional neural networks; recurrent neural networks; attention mechanisms; transformers; vision transformers.

**Evidence:** PDF p.14 (printed p.12).

### Machine Learning

Official topics: introduction to machine learning; kinds of learning; supervised and unsupervised learning; machine-learning workflow; Bayesian learning; MAP hypothesis; Bayes optimal classifier; naive Bayes classifier; linear models for regression and classification; non-linear models; decision trees; MDL principle; instance-based learning; support vector machines; ensemble learning; clustering; k-means; GMM; model evaluation and comparison.

**Evidence:** PDF p.14 (printed p.12).

### Computer Vision

Official topics: introduction and applications; vision fundamentals; image features including edges, corners, texture, and keypoint descriptors; CNNs for vision; ResNet and EfficientNet; YOLO and R-CNN families; U-Net and Mask R-CNN; visual transformers; GAN and diffusion image generation; vision-language models; image captioning; visual question answering; agentic AI for vision; ethics and privacy.

**Evidence:** PDF p.14 (printed p.12).

### Video Analysis

Official topics: introduction and applications; spatial, temporal, motion, optical-flow, and spatio-temporal fundamentals; 3D CNNs and video transformers; action recognition and temporal action detection; object detection and tracking; segmentation; anomaly and deepfake detection; captioning and question answering; GAN, diffusion, and text-to-video generation; summarization; agentic AI for video; ethics and privacy.

**Evidence:** PDF p.14 (printed p.12).

### Audio Analysis

Official topics: introduction and applications; audio fundamentals and feature extraction; healthcare monitoring, industrial predictive maintenance, and ultrasound applications; CNNs, RNNs/LSTMs, and audio transformers; classification and tagging; ASR, TTS, and voice assistants; music analysis and recommendation; audio captioning and question answering; GAN, diffusion, text-to-audio, and music generation; agentic AI for audio; ethics and privacy.

**Evidence:** PDF p.15 (printed p.13).

### Large Language Models for Generative AI

Official topics: LLM foundations; pre-trained LLMs; inference; fine-tuning; preference alignment; prompt engineering and reasoning; scaling and optimization; retrieval-augmented and retrieval-enhanced language models; LLMs as agents; structured-data handling; evaluation; challenges; security and privacy; advanced topics.

**Evidence:** PDF p.15 (printed p.13).

### NLP Applications

Official topics: sentiment analysis and opinion mining; machine translation including Indic languages; question answering and conversational AI; information extraction; knowledge-graph/RAG applications; security, privacy, and ethics; scalable and efficient NLP systems; implementation using state-of-the-art generative-AI and agentic-AI technologies.

**Evidence:** PDF p.15 (printed p.13).

### Conversational AI

Official description covers designing and building autonomous conversational agents; LLMs, memory, tool integration, and information retrieval; production architecture, security, ethical considerations, cost optimization, and monitoring; and design, implementation, evaluation, and deployment of scalable enterprise conversational agents.

**Evidence:** PDF p.15 (printed p.13).

### Social Media Analytics

Official topics: collection, preprocessing, and analysis of noisy unstructured multimodal social data; social-network analysis; influencer detection; sentiment analysis; trend discovery; user behaviour and information diffusion; multimodal analytics and visualization; fake-account, bot, spam, and misinformation detection; privacy, ethics, regulatory compliance, and responsible governance.

**Evidence:** PDF p.16 (printed p.14).

### AI and ML Techniques for Cyber Security

Official topics: AI/ML in cybersecurity; vulnerabilities, threats, attack vectors, and defence; gradient-boosting vulnerability management; graph-based static analysis; GNNs for malware call graphs, attack paths, and code vulnerabilities; supervised/deep-learning malware detection; NLP/transformer phishing and email security; deep-learning traffic analysis; autoencoder-based user/entity anomaly detection; adversarial ML; generative AI and LLMs in security operations; reinforcement-learning automated response.

**Evidence:** PDF p.16 (printed p.14).

### Agentic AI Systems

Official topics: foundations and industry use cases; LLMs as autonomous agents; prompt engineering; ReAct, Plan-and-Execute, and Reflexion agents; memory and context; knowledge-grounded agents; multi-agent collaboration; safety, governance, and explainability; evaluation, deployment, and MLOps; building a goal-driven tool-calling LLM agent.

**Evidence:** PDF p.16 (printed p.14).

### Advanced Reasoning and Planning

Official topics: reasoning and planning; LLM reasoning; large reasoning models; reasoning-oriented prompting; inference-time scaling; verification; reinforcement learning for reasoning; knowledge representation and memory; hybrid reasoning; LLM-based planning; multi-LLM collaboration; evaluation; safety; state of the art.

**Evidence:** PDF p.16 (printed p.14).

### Multimodal AI

Official topics: multimodal-ML foundations; input modalities; multimodal fusion and fission; models and pretraining; cross-modal alignment and grounding; visual understanding and reasoning; generative multimodal AI; temporal intelligence; embodied AI; ethics and safety; advanced topics.

**Evidence:** PDF p.17 (printed p.15).

### Architecting AI Systems

Official topics: end-to-end AI system design and patterns; components; architectural styles; agentic-AI architecture; ADLC; MCP/A2A gateways and agent protocols; system-level principles; scalability; performance; resiliency; domain blueprints; infrastructure integration; production considerations; governance.

**Evidence:** PDF p.17 (printed p.15).

### Advanced Data Mining

Official topics: foundations and record-data mining; association analysis and pattern discovery; complex data structures; tree/graph, sequence, web/text, stream, spatiotemporal, multivariate time-series, high-dimensional, and social-network mining; multi-relational mining; privacy-preserving data mining; distributed computing for data-intensive mining.

**Evidence:** PDF p.17 (printed p.15).

## Subjects with no detailed topic description in this brochure

The following 30 subjects are official by title and grouping, but no chapter/unit topics for them appear in the "Courses Wise Syllabus" pages:

- Mathematical Foundations for Machine Learning
- Introduction to Statistical Methods
- Artificial and Computational Intelligence
- Deep Reinforcement Learning
- AI and ML for Robotics
- API-driven Cloud Native Solutions
- Automated Reasoning
- Design of Algorithms
- Data Management for Machine Learning
- Introduction to Parallel and Distributed Programming
- MLOps
- Metaheuristics for Optimization
- Multimodal Information Retrieval
- Probabilistic Graphical Models
- Quantum Machine Learning
- Software Engineering for Machine Learning
- Information Retrieval
- Natural Language Processing
- Speech Processing
- Computational Learning Theory
- Distributed Machine Learning
- Fair, Interpretable, Trustworthy Machine Learning
- Graph Neural Networks
- ML System Optimization
- Machine Learning on the Edge
- Unsupervised Deep Learning
- Computational Photography
- Computational Imaging
- Contemporary Computer Graphics
- 3D Computer Vision

Detailed outlines for these subjects must be marked **unverified/provisional**, or work must pause until a course handout or official detailed syllabus is supplied.

## Programme-level tools (not subject allocations)

The brochure lists programme-wide technologies across NLP/RAG, deep learning, computer vision/video, audio/speech, agentic/multimodal AI, robotics/reinforcement learning, MLOps/AI engineering, and cloud/API platforms. Examples include Python, PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face, OpenCV, ROS2, Gymnasium, MLflow, Docker, Kubernetes, FastAPI, AWS services, and OpenAI APIs.

These must **not** be silently copied into every subject's metadata because the brochure does not give a subject-by-subject allocation. **Evidence:** PDF p.10 (printed p.8).

## Comparison with the user-provided 45-subject list

The user's 45 listed subjects are a complete provisional registry because they match the brochure's 45 unique taught-course titles in substance and grouping. The brochure should control canonical display text where wording differs:

- Use official `API-driven Cloud Native Solutions` unless editorial normalization is explicitly recorded; the user wrote `API-Driven Cloud-Native Solutions`.
- Use official `Fair, Interpretable, Trustworthy Machine Learning`; the user inserted `and`.
- Retain `Audio and Vision` as the exact brochure pool heading while recording that the user's specification treats it as a specialization.
- Do not map named electives to Semester 2 or 3 yet.

Accordingly, the 45 user-listed subjects may be used as an **explicitly source-checked registry of course identities**, but not as evidence for detailed units beyond the 15 descriptions documented above.

## Uncertainty and blocker register

| ID | Issue | Required treatment |
| --- | --- | --- |
| CURR-001 | No named elective is assigned specifically to Semester 2 or Semester 3. | Keep elective semester mapping configurable/unassigned. |
| CURR-002 | Detailed topics are absent for 30 of 45 subjects. | Do not call generated topic outlines official; label them provisional/supplementary, or obtain official handouts. |
| CURR-003 | No formal numbered units are shown, even for the 15 described courses. | Treat descriptions as official topic coverage, not official unit boundaries. |
| CURR-004 | No subject-specific prerequisites, learning outcomes, hours, assessment weights, or tool mappings are given. | Store these fields as unknown until verified; programme-level facts may be stored separately. |
| CURR-005 | Audio and Vision shows two `#` markers although its note refers to "the course" in the singular. | Do not enforce the specialization rule without confirmation. |
| CURR-006 | The Audio and Vision heading omits the word "Specialization" used by the NLP and Deep Learning headings. | Preserve the exact pool name and flag semantic interpretation separately. |
| CURR-007 | Brochure wording is marketing/programme material and may not be the registered detailed course handout. | Use it as the current curriculum source, while preferring official course handouts if supplied later. |
| CURR-008 | "Courses Wise Syllabus" covers only 15 subjects and does not explain whether omissions are intentional. | Never infer that omitted subjects lack content; record only that this brochure omits their details. |

## Recommended integration rules

1. Record the source hash and exact local path in the curriculum audit.
2. Create all 45 subject identities; do not omit any.
3. Mark the 6 compulsory courses with fixed semesters.
4. Mark all 39 electives as eligible for configurable Semester 2/3 placement; preserve their pool/specialization group.
5. Store the dissertation separately as the Semester 4 project.
6. Import official topic coverage only for the 15 described subjects.
7. Require a `sourceStatus` or equivalent value such as `official-title-only`, `official-topics`, or `provisional-extension`.
8. Prevent generated chapter outlines for the 30 title-only courses from being represented as official syllabus units.

## Output contract

```json
{
  "agentId": "curriculum-source-analyst",
  "subject": "M.Tech. Artificial Intelligence and Machine Learning programme",
  "task": "Locate and verify the uploaded programme brochure; extract curriculum evidence without inventing topics",
  "status": "completed",
  "filesCreated": [
    "tasks/agent-work/curriculum-source/report.md"
  ],
  "filesModified": [],
  "sourcesUsed": [
    {
      "type": "uploaded-programme-brochure",
      "path": "/Users/shivamkumar/Downloads/mtech-ai-ml.pdf",
      "title": "M.Tech. AI & ML_New Brochure_2026 copy",
      "institution": "BITS Pilani Work Integrated Learning Programmes",
      "sha256": "fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b",
      "pagesUsed": [4, 5, 10, 12, 13, 14, 15, 16, 17]
    }
  ],
  "citationsVerified": 45,
  "citationsRejected": 0,
  "wordCount": 2700,
  "testsRun": [
    "PDF metadata and page-count inspection",
    "SHA-256 source fingerprint",
    "layout-aware text extraction",
    "rendered visual inspection of PDF pages 12-17",
    "45-subject uniqueness and grouping reconciliation"
  ],
  "validationResults": {
    "sourceFound": true,
    "sourceIdentityVerified": true,
    "physicalPageCount": 23,
    "uniqueTaughtSubjects": 45,
    "compulsorySubjects": 6,
    "electiveSubjects": 39,
    "subjectsWithOfficialTopicDescriptions": 15,
    "subjectsWithoutOfficialTopicDescriptions": 30,
    "semesterStructureVerified": true,
    "namedElectiveSemesterMappingVerified": false,
    "formalUnitBoundariesAvailable": false,
    "subjectSpecificPrerequisitesAvailable": false
  },
  "openIssues": [
    "Obtain official detailed course handouts for the 30 title-only subjects",
    "Confirm the Semester 2 versus Semester 3 mapping for selected electives",
    "Confirm Audio and Vision specialization marker semantics",
    "Confirm whether Audio and Vision is formally named a specialization"
  ],
  "recommendedNextTasks": [
    "Build the source-status-aware subject registry from this evidence",
    "Keep all unverified unit outlines explicitly provisional",
    "Request or locate official subject handouts before final content validation"
  ]
}
```

## Registry integration completion report

```json
{
  "agentId": "curriculum-source-analyst",
  "subject": "M.Tech. Artificial Intelligence and Machine Learning subject registry",
  "task": "Create the source-verified 45-subject YAML registry from the brochure analysis",
  "status": "completed",
  "filesCreated": [
    "content/curriculum/subject-registry.yaml"
  ],
  "filesModified": [
    "tasks/agent-work/curriculum-source/report.md"
  ],
  "sourcesUsed": [
    {
      "type": "verified-curriculum-analysis",
      "path": "tasks/agent-work/curriculum-source/report.md"
    },
    {
      "type": "uploaded-programme-brochure",
      "path": "/Users/shivamkumar/Downloads/mtech-ai-ml.pdf",
      "title": "M.Tech. AI & ML_New Brochure_2026 copy",
      "institution": "BITS Pilani Work Integrated Learning Programmes",
      "sha256": "fee3ec5d142deb610e1f0a86df9267e3c9355f1dfdda4419d21f49b45207de1b",
      "pagesUsed": [12, 13, 14, 15, 16, 17]
    }
  ],
  "citationsVerified": 45,
  "citationsRejected": 0,
  "wordCount": 0,
  "testsRun": [
    "Ruby Psych YAML parse",
    "exact subject-count validation",
    "unique ID validation",
    "unique slug validation",
    "compulsory/elective count reconciliation",
    "official-description availability count reconciliation",
    "officialTopics exclusion check for all title-only subjects",
    "explicit uncertainty-flag check for all title-only subjects"
  ],
  "validationResults": {
    "yamlValid": true,
    "subjects": 45,
    "uniqueIds": 45,
    "uniqueSlugs": 45,
    "compulsorySubjects": 6,
    "electiveSubjects": 39,
    "subjectsWithOfficialTopics": 15,
    "titleOnlySubjects": 30,
    "titleOnlySubjectsWithOfficialTopics": 0,
    "titleOnlySubjectsMissingUncertaintyFlag": 0,
    "namedElectivesFixedToSemester2Or3": 0,
    "canonicalBrochureNamingPreserved": true
  },
  "openIssues": [
    "Official detailed course handouts remain unavailable for 30 title-only subjects",
    "Named elective placement between Semester 2 and Semester 3 remains configurable",
    "Audio and Vision specialization naming and required-marker semantics remain uncertain"
  ],
  "recommendedNextTasks": [
    "Validate downstream schemas against configurable-2-3 semester values",
    "Use officialTopics only as coverage evidence, not as invented formal unit boundaries",
    "Keep supplementary chapter planning visibly separated from official brochure topics"
  ]
}
```
