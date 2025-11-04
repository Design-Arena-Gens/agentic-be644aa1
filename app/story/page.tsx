"use client";
import { useState } from "react";
import PersonalitySelector from "@/components/PersonalitySelector";
import { PersonalityId } from "@/lib/personality";
import { generateLocalStory } from "@/lib/story";

export default function StoryPage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState<PersonalityId>("adventurer");
  const [story, setStory] = useState("");
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Story Generator</h1>
      <div className="card grid gap-3">
        <label className="text-sm">Prompt</label>
        <input className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900" value={prompt} onChange={e=> setPrompt(e.target.value)} placeholder="e.g., a rainy city with neon lights" />
        <div>
          <label className="text-sm">Style</label>
          <div className="mt-2"><PersonalitySelector value={style} onChange={setStyle} /></div>
        </div>
        <button className="btn-primary w-fit" onClick={()=> setStory(generateLocalStory(prompt, style))}>Generate</button>
      </div>
      {story && <div className="card whitespace-pre-wrap">{story}</div>}
    </div>
  );
}
