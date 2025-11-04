"use client";
import { PERSONALITIES, PersonalityId } from "@/lib/personality";

export default function PersonalitySelector({ value, onChange }: { value: PersonalityId; onChange: (v: PersonalityId) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {PERSONALITIES.map((p) => (
        <button
          key={p.id}
          onClick={() => onChange(p.id)}
          className={`badge ${value === p.id ? 'ring-2 ring-brand' : ''}`}
          aria-pressed={value === p.id}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}
