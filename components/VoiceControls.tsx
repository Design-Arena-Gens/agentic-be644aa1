"use client";
import { listen, speak } from "@/lib/sttTts";
import { useRef, useState } from "react";

export default function VoiceControls({ onTranscript, lastReply }: { onTranscript: (t: string) => void; lastReply: string }) {
  const stopRef = useRef<() => void>();
  const [listening, setListening] = useState(false);

  return (
    <div className="flex gap-2">
      <button
        className={`btn-secondary ${listening ? 'ring-2 ring-brand' : ''}`}
        onClick={() => {
          if (!listening) {
            stopRef.current = listen((t) => onTranscript(t));
            setListening(true);
          } else {
            stopRef.current?.();
            setListening(false);
          }
        }}
      >{listening ? 'Stop Listening' : 'Voice Input'}</button>
      <button className="btn-secondary" onClick={() => speak(lastReply)}>Speak Reply</button>
    </div>
  );
}
