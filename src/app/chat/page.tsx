import ChatInterface from "./chat-interface";
import AnimatedBackground from "@/components/animated-background";

export default function ChatPage() {
  return (
    <main className="w-full h-[100dvh] bg-[#f4f4f4] relative overflow-hidden flex flex-col">
      <AnimatedBackground />
      <div className="z-10 w-full flex-1 flex flex-col overflow-hidden">
        <ChatInterface />
      </div>
    </main>
  );
}
