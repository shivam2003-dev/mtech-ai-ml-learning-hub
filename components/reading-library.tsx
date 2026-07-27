"use client";

import { useCallback, useEffect, useState } from "react";

type SavedChapter = {
  id: string;
  bookmarked: boolean;
  progress: number;
};

export function ReadingLibrary({ bookmarksOnly = false }: { bookmarksOnly?: boolean }) {
  const [chapters, setChapters] = useState<SavedChapter[]>([]);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const refresh = useCallback(() => {
    const prefix = "mtech-hub:chapter:";
    const saved: SavedChapter[] = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (!key?.startsWith(prefix)) continue;
      try {
        const value = JSON.parse(localStorage.getItem(key) ?? "{}") as { bookmarked?: boolean; progress?: number };
        saved.push({ id: key.slice(prefix.length), bookmarked: Boolean(value.bookmarked), progress: value.progress ?? 0 });
      } catch {
        // Ignore malformed local values without blocking other reading records.
      }
    }
    saved.sort((left, right) => right.progress - left.progress);
    setChapters(bookmarksOnly ? saved.filter((chapter) => chapter.bookmarked) : saved);
  }, [bookmarksOnly]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(refresh);
    return () => window.cancelAnimationFrame(frame);
  }, [refresh]);

  function removeBookmark(id: string) {
    const key = `mtech-hub:chapter:${id}`;
    const current = JSON.parse(localStorage.getItem(key) ?? "{}");
    localStorage.setItem(key, JSON.stringify({ ...current, bookmarked: false }));
    refresh();
  }

  if (!chapters.length) {
    return <p className="reading-empty">No {bookmarksOnly ? "bookmarked" : "started"} chapters on this device yet. Open a published chapter to begin.</p>;
  }

  return (
    <div className="reading-library">
      {chapters.map((chapter) => {
        const [subject, chapterSlug] = chapter.id.split("/");
        return (
          <article key={chapter.id}>
            <div>
              <small>{subject.replaceAll("-", " ")}</small>
              <h2>{chapterSlug.replaceAll("-", " ")}</h2>
              <span><i style={{ width: `${chapter.progress}%` }} /></span>
              <p>{chapter.progress}% read</p>
            </div>
            <a href={`${basePath}/subjects/${subject}/chapters/${chapterSlug}/`}>Continue</a>
            {bookmarksOnly && <button type="button" onClick={() => removeBookmark(chapter.id)}>Remove</button>}
          </article>
        );
      })}
    </div>
  );
}
