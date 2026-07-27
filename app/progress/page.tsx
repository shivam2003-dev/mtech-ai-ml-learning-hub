import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { LearningHeader } from "@/components/learning-header";
import { ReadingLibrary } from "@/components/reading-library";

type SubjectLead = {
  agentId: string;
  subjectId: string;
  subject: string;
  slug: string;
  semesterGroup: string;
  specialization: string;
  status: string;
  accountableRole: string;
};

async function getLeads(): Promise<SubjectLead[]> {
  const raw = await readFile(join(process.cwd(), "tasks", "subject-agent-registry.json"), "utf8");
  return (JSON.parse(raw) as { subjectLeads: SubjectLead[] }).subjectLeads;
}

export default async function ProgressPage() {
  const leads = await getLeads();
  const counts = leads.reduce<Record<string, number>>((accumulator, lead) => {
    accumulator[lead.status] = (accumulator[lead.status] ?? 0) + 1;
    return accumulator;
  }, {});

  return (
    <main className="learning-shell">
      <LearningHeader />
      <section className="directory-hero">
        <span className="eyebrow">Auditable production queue</span>
        <h1>Curriculum progress</h1>
        <p>Every brochure-verified subject has exactly one accountable Subject Lead. Bounded parallel batches protect source quality and prevent two workers from editing the same subject files.</p>
        <div className="subject-metrics">
          <span><strong>{leads.length}</strong> Subject Leads</span>
          {Object.entries(counts).map(([status, count]) => <span key={status}><strong>{count}</strong> {status}</span>)}
        </div>
      </section>
      <section className="reading-library-shell">
        <div className="directory-heading"><h2>Your reading progress</h2><span>browser-local</span></div>
        <ReadingLibrary />
      </section>
      <section className="progress-ledger" aria-label="Subject production ledger">
        <div className="progress-ledger-head">
          <span>Agent</span><span>Subject</span><span>Group</span><span>Status</span>
        </div>
        {leads.map((lead) => (
          <a href={`../subjects/${lead.slug}/`} key={lead.agentId}>
            <code>{lead.agentId}</code>
            <strong>{lead.subject}</strong>
            <span>{lead.semesterGroup.replaceAll("-", " ")} · {lead.specialization}</span>
            <b data-status={lead.status}>{lead.status}</b>
          </a>
        ))}
      </section>
    </main>
  );
}
