import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AmiVerse - AI Companion & Life Assistant",
  description: "Multi-personality AI companion with voice, memory, mood, and gamification.",
  manifest: "/manifest.json",
  icons: [{ rel: "icon", url: "/icon.svg" }],
  themeColor: "#6C5CE7",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-gray-200 dark:border-gray-900">
          <div className="container-page flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#6C5CE7"/>
                <path d="M8 13c1 1 2 2 4 2s3-1 4-2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="9" cy="10" r="1.2" fill="white"/>
                <circle cx="15" cy="10" r="1.2" fill="white"/>
              </svg>
              <span>AmiVerse</span>
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/chat" className="hover:underline">Chat</Link>
              <Link href="/story" className="hover:underline">Stories</Link>
              <Link href="/mood" className="hover:underline">Mood</Link>
              <Link href="/pricing" className="hover:underline">Pricing</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </nav>
          </div>
        </header>
        <main className="container-page py-8">
          {children}
        </main>
        <footer className="mt-16 border-t border-gray-200 py-6 text-sm text-gray-500 dark:border-gray-900">
          <div className="container-page flex items-center justify-between">
            <span>? {new Date().getFullYear()} AmiVerse</span>
            <span>
              <a className="hover:underline" href="/about">Concept</a>
            </span>
          </div>
        </footer>
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js').catch(()=>{});
            });
          }
        ` }} />
      </body>
    </html>
  );
}
