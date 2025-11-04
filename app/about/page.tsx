export default function AboutPage() {
  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <h1>AmiVerse ? Viral AI Companion & Life Assistant</h1>

      <h2>Concept</h2>
      <p>A lightweight, low-cost AI companion that blends multi-personality chat, emotional intelligence, voice, memory, photo chat, gamification, mood support, daily motivation, and story creation. Built web-first as a PWA for instant distribution and easy monetization.</p>

      <h2>Name Ideas</h2>
      <ul>
        <li>AmiVerse (final)</li>
        <li>HeartChat</li>
        <li>MoodMate</li>
        <li>VibePal</li>
        <li>Orbit AI</li>
      </ul>

      <h2>Target Audience & Problems</h2>
      <ul>
        <li>Gen Z/Young adults seeking companionship, accountability, and creativity.</li>
        <li>Busy professionals needing structure, reminders, and positive reinforcement.</li>
        <li>Casual users wanting fun, stories, and mood support.</li>
      </ul>

      <h2>Core Features</h2>
      <ul>
        <li>Multi-personality chat (romantic, friend, mentor, funny, adventurer)</li>
        <li>Emotion engine (mood-aware responses)</li>
        <li>Voice chat (browser TTS/STT)</li>
        <li>Memory (local profile + preferences)</li>
        <li>Daily tasks + streaks; coins and XP</li>
        <li>Photo chat (on-device insights)</li>
        <li>Mood tracking + journal</li>
        <li>Story generator (style by personality)</li>
      </ul>

      <h2>Monetization</h2>
      <ul>
        <li>Free tier: banner ads (AdSense) + limits</li>
        <li>Premium: ad-free, cloud AI (GPT/OSS), enhanced memory, premium voices</li>
        <li>Coins: cosmetic themes, voice styles, boosts</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li>Frontend: Next.js 14 (App Router), Tailwind CSS, PWA</li>
        <li>APIs: Web Speech (client), optional cloud AI via server routes</li>
        <li>DB: LocalStorage (MVP). Upgrade: Postgres/Supabase for memory & analytics.</li>
        <li>Hosting: Vercel (edge for chat when using cloud models)</li>
      </ul>

      <h2>User Flows & Chat UI</h2>
      <ul>
        <li>Onboard ? choose personality ? greet with mood badge ? chat</li>
        <li>Voice in/out, photo upload, quick actions (advice, story, joke)</li>
        <li>Gamification header shows coins/XP/streak; daily tasks component</li>
        <li>Mood page logs entries with auto-detected sentiment</li>
      </ul>

      <h2>Publish on Android (PWA ? Play)</h2>
      <ol>
        <li>Ensure PWA pass (manifest, SW, icons, HTTPS)</li>
        <li>Use Bubblewrap or PWABuilder to generate TWA APK</li>
        <li>Prepare assets: 512x512 icon, feature graphics, screenshots</li>
        <li>Upload to Play Console, production track, review</li>
        <li>Post-launch: monitor vitals and ratings, iterate weekly</li>
      </ol>

      <h2>Marketing & Viral Growth</h2>
      <ul>
        <li>Short-form demos (TikTok/Reels/Shorts) featuring voice emotions</li>
        <li>UGC prompts (story challenges, streak battles, mood glow-ups)</li>
        <li>Referral coins, creator program for personalities/voices</li>
        <li>SEO landers for "AI boyfriend/girlfriend", "AI mentor", "mood tracker"</li>
        <li>Weekly email digest of wins and streak milestones</li>
      </ul>

      <h2>Roadmap</h2>
      <ol>
        <li>MVP (this app): local chat logic, PWA, ads placeholder</li>
        <li>Cloud AI with per-user memory store and image understanding</li>
        <li>Subscriptions, paywall, ad mediation, voice packs</li>
        <li>Communities & co-op stories; creator marketplace</li>
      </ol>
    </div>
  );
}
