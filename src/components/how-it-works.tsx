"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full min-h-screen bg-[#f4f4f4] overflow-hidden py-32 flex flex-col font-sans border-t border-gray-200">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-200 rounded-full blur-[150px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 flex flex-col justify-between h-full min-h-[70vh]">
        
        {/* Thick Editorial Line */}
        <div className="w-full h-1.5 bg-black mb-16" />

        {/* Header */}
        <div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="text-[#007b8f] font-bold text-sm tracking-widest uppercase">3. How BioMindQ Works</span>
          </motion.div>
          
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[0.9] text-black max-w-5xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            From Question<br />to Evidence.
          </motion.h2>
        </div>

        {/* The Flow */}
        <div className="mt-24 md:mt-32">
          <motion.div 
            className="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-start md:justify-between gap-y-12 gap-x-4 w-full"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {["Ask", "Retrieve", "Analyze", "Verify"].map((step, index, arr) => (
              <div key={step} className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-col md:flex-row">
                <span className="text-5xl md:text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight text-black">
                  {step}
                </span>
                {index < arr.length - 1 && (
                  <span className="text-4xl lg:text-5xl text-cyan-500/50 font-light md:rotate-0 rotate-90 hidden md:block">
                    &rarr;
                  </span>
                )}
                {index < arr.length - 1 && (
                  <span className="text-4xl text-cyan-500/50 font-light rotate-90 block md:hidden">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Short Line */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-24 pt-12  w-full"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-tight max-w-4xl tracking-tight">
            BioMindQ retrieves relevant biomedical data, analyzes it with AI, and shows the sources behind the answer.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
