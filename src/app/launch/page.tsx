import Link from "next/link";
import { Bot } from "lucide-react";
import AnimatedBackground from "@/components/animated-background";

export default function LaunchPage() {
  return (
    <div className="w-full min-h-screen bg-[#f4f4f4] flex flex-col items-center justify-center font-sans p-6 text-center relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col items-center">
        <div className="bg-white/60 backdrop-blur-xl p-8 rounded-full border border-white/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] mb-8">
          <Bot size={80} strokeWidth={1.5} className="text-[#007b8f]" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-black mb-6">
          Beep Boop...
        </h1>
        
        <p className="text-xl md:text-2xl text-[#455f6e] max-w-lg mb-12 leading-relaxed">
          Our AI mascot is still hard at work in the lab building the BioMindQ platform! We are not quite ready to launch yet.
        </p>

        <Link href="/">
          <button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-sm font-bold tracking-widest uppercase transition shadow-lg flex items-center gap-2">
            <span>&larr;</span> BACK TO SAFETY
          </button>
        </Link>
      </div>
    </div>
  );
}
