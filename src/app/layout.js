// app/layout.js
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

// ✅ SEO metadata config
export const metadata = {
  title: "Sticky Board – Drop Notes. Share Ideas. Stay Anonymous.",
  description:
    "Sticky Board is a collaborative canvas where anyone can anonymously post quick thoughts, ideas, or project links. Built with React, Tailwind, Framer Motion & Appwrite.",
  keywords: [
    "Sticky Board",
    "Anonymous Notes",
    "Sticky Notes App",
    "Collaboration Tool",
    "Digital Notice Board",
    "React Note App",
    "Hackathon Wall",
    "Framer Motion UI",
    "Tailwind Canvas",
  ],
  metadataBase: new URL("https://sticky-board.vercel.app"), // change to your deployed domain
  openGraph: {
    title: "Sticky Board – Anonymous Notes App",
    description:
      "Post ideas anonymously and let them expire in 30 days. No login. Just creativity.",
    url: "https://sticky-board.vercel.app",
    siteName: "Sticky Board",
    images: [
      {
        url: "/og-image.png", // Add an actual Open Graph image in public folder
        width: 1200,
        height: 630,
        alt: "Sticky Board UI Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sticky Board – Share Notes. No Login.",
    description:
      "Drop ideas, social links, or shoutouts anonymously on Sticky Board.",
    creator: "@dru429", // optional Twitter handle
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico", // drop favicon.ico in public folder
  },
  authors: [{ name: "Dru", url: "https://github.com/Dru-429" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
