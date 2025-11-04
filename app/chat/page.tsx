import ChatUI from "@/components/ChatUI";
import DailyTasks from "@/components/DailyTasks";

export default function ChatPage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-bold">Chat</h1>
      <ChatUI />
      <DailyTasks />
    </div>
  );
}
