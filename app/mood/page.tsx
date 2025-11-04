"use client";
import { useEffect, useState } from "react";
import { Emotion, detectEmotionFromText, emotionEmoji } from "@/lib/emotion";
import { safeGet, safeSet } from "@/lib/storage";

interface MoodEntry { ts: number; text: string; mood: Emotion }
const KEY = "amiverse_mood";

export default function MoodPage() {
  const [text, setText] = useState("");
  const [list, setList] = useState<MoodEntry[]>(safeGet(KEY, [] as MoodEntry[]));
  useEffect(() => safeSet(KEY, list), [list]);

  const mood = detectEmotionFromText(text || "");

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Mood Tracker</h1>
      <div className="card grid gap-3">
        <label className="text-sm">How are you feeling?</label>
        <textarea className="min-h-[120px] rounded-md border border-gray-300 bg-white p-3 text-sm dark:border-gray-700 dark:bg-gray-900" value={text} onChange={e=> setText(e.target.value)} />
        <div className="text-sm">Detected mood: <span className="badge">{emotionEmoji(mood)} {mood}</span></div>
        <button className="btn-primary w-fit" onClick={()=> setList([{ ts: Date.now(), text, mood }, ...list])}>Save</button>
      </div>
      <div className="card">
        <h3 className="font-semibold">History</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {list.map((e,i)=> (
            <li key={i} className="flex items-center justify-between">
              <span>{new Date(e.ts).toLocaleString()}</span>
              <span className="truncate px-2">{e.text.slice(0,80)}</span>
              <span>{emotionEmoji(e.mood)} {e.mood}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
