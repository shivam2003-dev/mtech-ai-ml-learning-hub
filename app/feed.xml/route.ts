const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivam2003-dev.github.io/mtech-ai-ml-learning-hub";

export const dynamic = "force-static";

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Shivam's M.Tech AI &amp; ML Learning Hub</title>
    <link>${siteUrl}</link>
    <description>Verified curriculum plans, intuitive mathematics, Python, projects, and research reading notes.</description>
    <language>en</language>
    <lastBuildDate>Tue, 28 Jul 2026 00:00:00 GMT</lastBuildDate>
  </channel>
</rss>`;
  return new Response(xml, { headers: { "content-type": "application/rss+xml; charset=utf-8" } });
}
