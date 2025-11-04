"use client";
import { useEffect, useState } from "react";
import { GamificationState, loadGamification } from "@/lib/gamification";

export default function GamificationHUD() {
  const [state, setState] = useState<GamificationState | null>(null);
  useEffect(() => { setState(loadGamification()); }, []);
  if (!state) return null;
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="badge">?? {state.coins} coins</span>
      <span className="badge">? {state.xp} XP</span>
      <span className="badge">?? {state.streak} day streak</span>
    </div>
  );
}
