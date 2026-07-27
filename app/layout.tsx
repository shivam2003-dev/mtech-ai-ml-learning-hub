import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivam2003-dev.github.io/mtech-ai-ml-learning-hub";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shivam's M.Tech AI & ML Learning Hub",
  description:
    "A master's-level, beginner-friendly learning platform for artificial intelligence, machine learning, research papers, mathematics, code, and projects.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: "Shivam's M.Tech AI & ML Learning Hub",
    description: "Learn deeply. Build purposefully. Research carefully.",
    images: [`${basePath}/og.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam's M.Tech AI & ML Learning Hub",
    description: "Learn deeply. Build purposefully. Research carefully.",
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shivam's M.Tech AI & ML Learning Hub",
    url: siteUrl,
    author: { "@type": "Person", name: "Shivam Kumar" },
    inLanguage: "en",
    educationalLevel: "Postgraduate",
    about: ["Artificial Intelligence", "Machine Learning", "Computer Science"],
  };
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
