import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillMatch ID | AI Skill-Based Recruitment",
  description:
    "Interactive pitch deck and prototype for SkillMatch ID, an AI-powered skill-based recruitment platform for students, fresh graduates, and companies in Indonesia.",
  icons: {
    icon: "/skillmatch-logo.png",
    shortcut: "/skillmatch-logo.png",
    apple: "/skillmatch-logo.png",
  },
  openGraph: {
    title: "SkillMatch ID | AI Skill-Based Recruitment",
    description:
      "Interactive pitch deck and prototype for SkillMatch ID, an AI-powered skill-based recruitment platform for students, fresh graduates, and companies in Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
