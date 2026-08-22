"use client";

import Link from "next/link";
import { Bot } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animated-background";

export default function LaunchPage() {
  return (
    <div className="w-full min-h-screen bg-[#f4f4f4] flex flex-col items-center justify-center font-sans p-6 text-center relative overflow-hidden">
      <AnimatedBackground />

      {/* DNA Background Image (same as Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-70">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <img 
            src="/hero.png" 
            alt="Biomedical DNA Background"
            className="w-full h-full object-cover object-center mix-blend-multiply"
            style={{ maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)" }}
          />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/50 backdrop-blur-2xl p-8 rounded-full border border-white/80 shadow-[0_20px_40px_-15px_rgba(0,123,143,0.15)] mb-8"
        >
          <Bot size={80} strokeWidth={1.5} className="text-[#007b8f]" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.92] text-black mb-6"
        >
          Building...
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#3b5463] mb-12 leading-relaxed"
        >
          Our AI mascot is hard at work in the lab building the BioMindQ platform. We are not quite ready to launch yet!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link href="/">
            <button className="bg-black text-white hover:bg-gray-800 rounded-full px-10 py-4 text-sm font-bold tracking-widest uppercase transition shadow-lg flex items-center gap-3">
              <span>&larr;</span> BACK TO SAFETY
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
