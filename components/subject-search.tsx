"use client";

import { useMemo, useState } from "react";

type SearchSubject = {
  id: string;
  title: string;
  slug: string;
  group: string;
  specialization: string;
  topics: string[];
};

export function SubjectSearch({ subjects }: { subjects: SearchSubject[] }) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("all");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return subjects.filter((subject) => {
      const matchesGroup = group === "all" || subject.group === group;
      const haystack = `${subject.title} ${subject.specialization} ${subject.topics.join(" ")}`.toLowerCase();
      return matchesGroup && (!needle || haystack.includes(needle));
    });
  }, [group, query, subjects]);

  return (
    <section className="search-workspace">
      <div className="search-controls">
        <label>
          <span>Search title or verified topic</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try machine learning, vision, agents…" />
        </label>
        <label>
          <span>Filter group</span>
          <select value={group} onChange={(event) => setGroup(event.target.value)}>
            <option value="all">All groups</option>
            <option value="semester-1">Semester 1</option>
            <option value="semester-2">Semester 2 compulsory</option>
            <option value="general">General electives</option>
            <option value="nlp">NLP specialization</option>
            <option value="deep-learning">Deep Learning specialization</option>
            <option value="audio-and-vision">Audio and Vision</option>
          </select>
        </label>
      </div>
      <p className="search-count" role="status">{visible.length} of {subjects.length} subjects</p>
      <div className="subject-list-grid">
        {visible.map((subject) => (
          <a className="subject-list-card" href={`${basePath}/subjects/${subject.slug}/`} key={subject.id}>
            <span>{subject.id}</span>
            <h2>{subject.title}</h2>
            <p>{subject.topics.length ? `${subject.topics.slice(0, 4).join(" · ")}${subject.topics.length > 4 ? "…" : ""}` : "Official title verified; topic-level outline remains explicitly provisional."}</p>
            <small>{subject.specialization} · {subject.group.replaceAll("-", " ")}</small>
          </a>
        ))}
      </div>
    </section>
  );
}
