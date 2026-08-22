"use client";

import { motion } from "framer-motion";

export default function ResponsibleAI() {
  return (
    <section className="relative w-full min-h-screen bg-transparent py-32 flex flex-col font-sans">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 flex flex-col justify-between h-full">
        
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="text-[#007b8f] font-bold text-sm tracking-widest uppercase">6. Responsible AI</span>
          </motion.div>
          
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[0.9] text-black max-w-5xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            When Evidence Isn&apos;t<br />Enough, We Say So.
          </motion.h2>
        </div>

        {/* Content */}
        <div className="mt-auto  pt-12 max-w-4xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-4xl text-black font-medium leading-tight tracking-tight">
              BioMindQ is a research and informational tool — not medical advice. <span className="text-black/40">That&apos;s it.</span>
            </p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
