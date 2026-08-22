"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="relative w-full min-h-screen bg-[#f4f4f4]  py-32 flex flex-col font-sans ">
      {/* Background Blobs - positioned differently from trust-data to create flow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-300 rounded-full blur-[130px] opacity-20 pointer-events-none" />

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
            <span className="text-[#007b8f] font-bold text-sm tracking-widest uppercase">2. The Problem</span>
          </motion.div>
          
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[0.9] text-black max-w-5xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Biomedical Research<br />Is Fragmented.
          </motion.h2>
        </div>

        {/* 3 Points - Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-auto">
          {/* Point 1 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col  pt-8"
          >
            <span className="text-4xl lg:text-5xl font-light text-black/30 mb-6 font-serif">01</span>
            <h3 className="text-2xl font-bold text-black mb-4 tracking-tight leading-tight">Too much information</h3>
            <p className="text-[#455f6e] text-lg leading-relaxed">
              Thousands of papers and datasets are published constantly, making it impossible to manually process all available insights.
            </p>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col  pt-8"
          >
            <span className="text-4xl lg:text-5xl font-light text-black/30 mb-6 font-serif">02</span>
            <h3 className="text-2xl font-bold text-black mb-4 tracking-tight leading-tight">Data is scattered</h3>
            <p className="text-[#455f6e] text-lg leading-relaxed">
              Literature, clinical trials, and compound data live in entirely different, disconnected sources and databases.
            </p>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col  pt-8"
          >
            <span className="text-4xl lg:text-5xl font-light text-black/30 mb-6 font-serif">03</span>
            <h3 className="text-2xl font-bold text-black mb-4 tracking-tight leading-tight">AI can hallucinate</h3>
            <p className="text-[#455f6e] text-lg leading-relaxed">
              Generic LLMs invent facts. Researchers need answers they can strictly verify against grounded medical evidence.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
