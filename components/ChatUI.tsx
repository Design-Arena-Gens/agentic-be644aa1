"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import PersonalitySelector from "./PersonalitySelector";
import EmotionBadge from "./EmotionBadge";
import VoiceControls from "./VoiceControls";
import AdBanner from "./AdBanner";
import GamificationHUD from "./GamificationHUD";
import ImageAnalyzer from "./ImageAnalyzer";
import { Emotion, detectEmotionFromText } from "@/lib/emotion";
import { PERSONALITIES, PersonalityId } from "@/lib/personality";
import { safeGet, safeSet } from "@/lib/storage";
import { awardForMessage, loadGamification } from "@/lib/gamification";

interface Msg { role: "user" | "bot"; text: string; emotion?: Emotion; ts: number; }

const CHAT_KEY = "amiverse_chat_v1";
const PROFILE_KEY = "amiverse_profile";

function loadChat(): Msg[] { return safeGet(CHAT_KEY, [] as Msg[]); }
function saveChat(list: Msg[]) { safeSet(CHAT_KEY, list); }

export default function ChatUI() {
  const [personality, setPersonality] = useState<PersonalityId>(safeGet("amiverse_personality", "friend" as PersonalityId));
  const [messages, setMessages] = useState<Msg[]>(loadChat());
  const [input, setInput] = useState("");
  const [profile, setProfile] = useState<{ name?: string; prefs?: string }>(safeGet(PROFILE_KEY, {}));
  const [lastReply, setLastReply] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => safeSet("amiverse_personality", personality), [personality]);
  useEffect(() => saveChat(messages), [messages]);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages.length]);

  const persona = useMemo(() => PERSONALITIES.find(p => p.id === personality)!, [personality]);

  useEffect(() => {
    if (messages.length === 0) {
      const intro: Msg = { role: "bot", text: persona.greeting, emotion: "happy", ts: Date.now() };
      setMessages([intro]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function respond(userText: string) {
    const emotion = detectEmotionFromText(userText);
    const memoryHint = profile.name ? `, and I remember you're ${profile.name}` : "";
    const style = persona.systemStyle;
    const response = generateLocalReply(userText, style, emotion, memoryHint);
    const reply: Msg = { role: "bot", text: response, emotion, ts: Date.now() };
    setLastReply(response);
    setMessages((m) => [...m, reply]);
    awardForMessage();
  }

  function onSend(text: string) {
    if (!text.trim()) return;
    const msg: Msg = { role: "user", text: text.trim(), ts: Date.now() };
    setMessages((m) => [...m, msg]);
    setInput("");
    respond(text);
  }

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <PersonalitySelector value={personality} onChange={setPersonality} />
        <GamificationHUD />
      </div>

      <div className="card max-h-[60vh] overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`mb-3 flex ${m.role==='user'?'justify-end':'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg px-3 py-2 ${m.role==='user'? 'bg-brand text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
              <div className="text-sm whitespace-pre-wrap">{m.text}</div>
              {m.role==='bot' && m.emotion && <div className="mt-1 text-xs opacity-80"><EmotionBadge emotion={m.emotion} /></div>}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="flex items-center gap-2">
        <input
          className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand dark:border-gray-700 dark:bg-gray-900"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key==='Enter') onSend(input); }}
        />
        <button className="btn-primary" onClick={() => onSend(input)}>Send</button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <VoiceControls onTranscript={(t)=> onSend(t)} lastReply={lastReply} />
        <div className="text-xs text-gray-500">Profile: <input className="ml-2 rounded border px-2 py-1 dark:bg-gray-900" placeholder="Your name" value={profile.name||''} onChange={e=> { const p={...profile, name:e.target.value}; setProfile(p); safeSet(PROFILE_KEY, p); }} /></div>
      </div>

      <ImageAnalyzer onInsight={(text)=> setMessages(m=>[...m, { role:'bot', text, emotion:'calm', ts: Date.now() }])} />

      <AdBanner />
    </div>
  );
}

function generateLocalReply(userText: string, style: string, emotion: Emotion, memoryHint: string): string {
  const prefaces: Record<Emotion,string> = {
    happy: "??",
    calm: "??",
    sad: "??",
    excited: "?",
    angry: "??",
    supportive: "??",
  };
  const base = `${prefaces[emotion]} (${style}${memoryHint})`;
  if (/story|tell.*story|once upon/i.test(userText)) {
    return `${base} Here's a tiny tale: On a quiet evening, a spark of courage opened a door that had always been there.`;
  }
  if (/advice|help|guide|what should i do/i.test(userText)) {
    return `${base} Let's take a small step: define a 5-minute action you can do right now.`;
  }
  if (/joke|funny|laugh/i.test(userText)) {
    return `${base} Why did the neuron apply for a job? It had the right connections.`;
  }
  return `${base} I hear you: "${userText}". Tell me more?what outcome do you want?`;
}
