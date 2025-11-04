import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid gap-8">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Your Always-On AI Companion</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Chat with multi-personality AI, track your mood, stay motivated, and level up your life.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link className="btn-primary" href="/chat">Start Chatting</Link>
          <Link className="btn-secondary" href="/about">See Concept</Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="card">
          <h3 className="font-semibold">Multi-Personality AI</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Romantic, friend, mentor, funny, and more.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Voice + Emotions</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Talk out loud with mood-aware responses.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Memories</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Remembers preferences and important details.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Gamified Growth</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Earn coins, XP, and keep streaks alive.</p>
        </div>
      </section>

      <section className="card">
        <h3 className="font-semibold">Quick Links</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/story">Story Generator</Link>
          <Link className="btn-secondary" href="/mood">Mood Tracker</Link>
          <Link className="btn-secondary" href="/pricing">Pricing</Link>
        </div>
      </section>
    </div>
  );
}
