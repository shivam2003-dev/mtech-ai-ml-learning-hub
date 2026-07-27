import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import YAML from "yaml";

const root = process.cwd();

async function readJson(path) {
  return JSON.parse(await readFile(resolve(root, path), "utf8"));
}

async function readYaml(path) {
  return YAML.parse(await readFile(resolve(root, path), "utf8"));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const curriculum = await readYaml("content/curriculum/official-curriculum.yaml");
const subjects = await readYaml("content/curriculum/subject-registry.yaml");
const graph = await readYaml("content/curriculum/prerequisite-graph.yaml");
const agents = await readJson("tasks/subject-agent-registry.json");
const master = await readJson("tasks/master-task-manifest.json");

assert(curriculum.programme?.title, "Curriculum is missing programme.title");
assert(curriculum.programme?.verificationStatus === "visually-verified", "Curriculum source is not visually verified");
assert(Array.isArray(subjects.subjects), "Subject registry must contain subjects[]");
assert(subjects.subjects.length === 45, `Expected 45 subjects, received ${subjects.subjects.length}`);

const subjectIds = subjects.subjects.map((subject) => subject.id);
const subjectSlugs = subjects.subjects.map((subject) => subject.slug);
assert(new Set(subjectIds).size === subjectIds.length, "Subject IDs must be unique");
assert(new Set(subjectSlugs).size === subjectSlugs.length, "Subject slugs must be unique");

const compulsory = subjects.subjects.filter((subject) => subject.subjectType === "compulsory");
const electives = subjects.subjects.filter((subject) => subject.subjectType === "elective");
assert(compulsory.length === 6, `Expected 6 compulsory subjects, received ${compulsory.length}`);
assert(electives.length === 39, `Expected 39 electives, received ${electives.length}`);

assert(Array.isArray(agents.subjectLeads), "Agent registry must contain subjectLeads[]");
assert(agents.subjectLeads.length === 45, `Expected 45 subject leads, received ${agents.subjectLeads.length}`);
const leadSubjects = agents.subjectLeads.map((lead) => lead.subjectId);
assert(new Set(leadSubjects).size === 45, "Every subject must have exactly one accountable lead");
assert(subjectIds.every((id) => leadSubjects.includes(id)), "Every registered subject needs a subject lead");

assert(master.concurrency?.maximumWorkerAgents === 3, "Worker concurrency must reserve one slot for the orchestrator");
assert(Array.isArray(master.phases) && master.phases.length === 9, "Master manifest must define phases 0 through 8");

const graphNodeIds = new Set(graph.nodes.map((node) => node.id));
for (const edge of graph.edges) {
  assert(graphNodeIds.has(edge.from), `Graph edge has missing source node: ${edge.from}`);
  assert(graphNodeIds.has(edge.to), `Graph edge has missing target node: ${edge.to}`);
}

console.log(
  JSON.stringify(
    {
      status: "passed",
      subjects: subjects.subjects.length,
      compulsory: compulsory.length,
      electives: electives.length,
      subjectLeads: agents.subjectLeads.length,
      graphNodes: graph.nodes.length,
      graphEdges: graph.edges.length
    },
    null,
    2
  )
);
