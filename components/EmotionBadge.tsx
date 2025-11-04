import { Emotion, emotionEmoji } from "@/lib/emotion";

export default function EmotionBadge({ emotion }: { emotion: Emotion }) {
  return <span className="badge" title={emotion}>{emotionEmoji(emotion)} <span className="ml-1 capitalize">{emotion}</span></span>;
}
