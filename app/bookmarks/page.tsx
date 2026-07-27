import { LearningHeader } from "@/components/learning-header";
import { ReadingLibrary } from "@/components/reading-library";

export default function BookmarksPage() {
  return (
    <main className="learning-shell">
      <LearningHeader />
      <section className="directory-hero">
        <span className="eyebrow">Saved privately on this device</span>
        <h1>Bookmarks</h1>
        <p>Bookmark a chapter from its reading toolbar, then return here to continue or remove it. No account is required.</p>
      </section>
      <section className="reading-library-shell">
        <ReadingLibrary bookmarksOnly />
      </section>
    </main>
  );
}
