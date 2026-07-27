"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  chapterId: string;
  citation: string;
};

export function ReadingTools({ chapterId, citation }: Props) {
  const storageKey = useMemo(() => `mtech-hub:chapter:${chapterId}`, [chapterId]);
  const [bookmarked, setBookmarked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    function updateProgress() {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const next = available > 0 ? Math.min(100, Math.round((window.scrollY / available) * 100)) : 100;
      setProgress(next);
      const latest = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
      localStorage.setItem(storageKey, JSON.stringify({ ...latest, progress: next }));
    }

    const article = document.querySelector(".chapter-prose");
    const codeBlocks = article?.querySelectorAll("pre") ?? [];
    codeBlocks.forEach((block) => {
      if (block.querySelector(".code-copy")) return;
      const button = document.createElement("button");
      button.className = "code-copy";
      button.type = "button";
      button.textContent = "Copy code";
      button.addEventListener("click", async () => {
        await navigator.clipboard.writeText(block.textContent?.replace("Copy code", "") ?? "");
        button.textContent = "Copied";
        window.setTimeout(() => { button.textContent = "Copy code"; }, 1200);
      });
      block.append(button);
    });

    window.addEventListener("scroll", updateProgress, { passive: true });
    const frame = window.requestAnimationFrame(() => {
      const saved = JSON.parse(localStorage.getItem(storageKey) ?? "{}") as {
        bookmarked?: boolean;
        progress?: number;
      };
      setBookmarked(Boolean(saved.bookmarked));
      setProgress(saved.progress ?? 0);
      const prefersDark = localStorage.getItem("mtech-hub:theme") === "dark";
      setDark(prefersDark);
      document.documentElement.classList.toggle("learning-dark", prefersDark);
      updateProgress();
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
    };
  }, [storageKey]);

  function toggleBookmark() {
    const next = !bookmarked;
    setBookmarked(next);
    const saved = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
    localStorage.setItem(storageKey, JSON.stringify({ ...saved, bookmarked: next, progress }));
    setMessage(next ? "Chapter bookmarked" : "Bookmark removed");
  }

  async function copyCitation() {
    await navigator.clipboard.writeText(citation);
    setMessage("Citation copied");
  }

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("mtech-hub:theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("learning-dark", next);
    setMessage(`${next ? "Dark" : "Light"} reading theme enabled`);
  }

  return (
    <div className="reading-tools" aria-label="Chapter tools">
      <span className="reading-progress"><span style={{ width: `${progress}%` }} /></span>
      <strong>{progress}% read</strong>
      <button type="button" onClick={toggleBookmark}>{bookmarked ? "★ Bookmarked" : "☆ Bookmark"}</button>
      <button type="button" onClick={copyCitation}>Copy citation</button>
      <button type="button" onClick={toggleTheme}>{dark ? "Light mode" : "Dark mode"}</button>
      <button type="button" onClick={() => window.print()}>Print</button>
      <span className="sr-status" role="status">{message}</span>
    </div>
  );
}
