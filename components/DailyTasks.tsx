"use client";
import { safeGet, safeSet } from "@/lib/storage";
import { useEffect, useState } from "react";

interface Task { id: string; text: string; done: boolean; }

const KEY = "amiverse_daily_tasks";

function loadTasks(): Task[] { return safeGet<Task[]>(KEY, [
  { id: "checkin", text: "Daily mood check-in", done: false },
  { id: "hydrate", text: "Drink water", done: false },
  { id: "move", text: "5-minute stretch", done: false },
]); }

export default function DailyTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => setTasks(loadTasks()), []);
  useEffect(() => safeSet(KEY, tasks), [tasks]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Daily Tasks</h3>
        <button className="text-xs underline" onClick={() => setTasks(tasks.map(t=>({ ...t, done:false })))}>Reset</button>
      </div>
      <ul className="mt-2 space-y-2">
        {tasks.map(t => (
          <li key={t.id} className="flex items-center gap-2">
            <input id={t.id} type="checkbox" checked={t.done} onChange={e=> setTasks(tasks.map(x => x.id===t.id ? { ...x, done: e.target.checked } : x))} />
            <label htmlFor={t.id} className={t.done?"line-through text-gray-500":""}>{t.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
