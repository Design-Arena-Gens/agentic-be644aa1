export default function PricingPage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-bold">Pricing</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card">
          <h3 className="text-lg font-semibold">Free</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            <li>Chat with personalities (local replies)</li>
            <li>Voice (Web Speech)</li>
            <li>Memories (local)</li>
            <li>Mood tracking & daily tasks</li>
            <li>Ads supported</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Premium</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            <li>Cloud AI models & better TTS</li>
            <li>Photo understanding & longer memory</li>
            <li>Ad-free, premium voices</li>
            <li>Early features & boosts</li>
          </ul>
          <button className="btn-primary mt-4">Upgrade (Coming Soon)</button>
        </div>
      </div>
      <div className="card text-sm">
        <h3 className="font-semibold">Monetization Strategy</h3>
        <p className="mt-2">Free tier with banner ads. Premium subscription unlocks cloud AI, voice packs, and ad-free mode. Optional coin packs for cosmetic themes and voice styles.</p>
      </div>
    </div>
  );
}
