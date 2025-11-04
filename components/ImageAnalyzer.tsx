"use client";
import { useState } from "react";

export default function ImageAnalyzer({ onInsight }: { onInsight: (text: string) => void }) {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Photo Chat</h3>
        <input type="file" accept="image/*" onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const url = URL.createObjectURL(file);
          setPreview(url);
          const name = file.name.toLowerCase();
          const ext = name.split('.').pop() || '';
          const insight = `I see a ${Math.random()>.5? 'bright' : 'soft'} scene. File looks like a ${ext.toUpperCase()} image. What would you like me to notice?`;
          onInsight(insight);
        }} />
      </div>
      {preview && (
        <div className="mt-3">
          <img src={preview} alt="uploaded" className="max-h-48 rounded-md border"/>
        </div>
      )}
    </div>
  );
}
