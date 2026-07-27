import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function LearningHeader() {
  return (
    <header className="learning-header">
      <a className="learning-brand" href={`${basePath}/`}>
        <Image src={`${basePath}/toon-shivam.png`} width={46} height={46} alt="" />
        <span><strong>Shivam&apos;s Learning Hub</strong><small>M.Tech AI & ML</small></span>
      </a>
      <nav aria-label="Learning hub navigation">
        <a href={`${basePath}/roadmap/`}>Roadmap</a>
        <a href={`${basePath}/semesters/`}>Semesters</a>
        <a href={`${basePath}/subjects/`}>Subjects</a>
        <a href={`${basePath}/papers/`}>Papers</a>
        <a href={`${basePath}/projects/`}>Projects</a>
      </nav>
    </header>
  );
}
