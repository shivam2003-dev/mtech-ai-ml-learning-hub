import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam Kumar — DevOps, SRE & Cloud Engineering",
  description:
    "Practical writing, learning resources, and project notes about DevOps, SRE, cloud engineering, Kubernetes, and infrastructure automation.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Shivam Kumar — Learn. Build. Share.",
    description: "DevOps, SRE, and cloud engineering field notes.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Kumar — Learn. Build. Share.",
    description: "DevOps, SRE, and cloud engineering field notes.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
