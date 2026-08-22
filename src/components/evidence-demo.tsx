"use client";

import { motion } from "framer-motion";

export default function EvidenceDemo() {
  return (
    <section className="relative w-full min-h-screen bg-transparent overflow-hidden py-32 flex flex-col font-sans ">

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
            <span className="text-[#007b8f] font-bold text-sm tracking-widest uppercase">5. Product Preview</span>
          </motion.div>
          
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[0.9] text-black max-w-5xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Don&apos;t Just Trust<br />the Answer.
          </motion.h2>
        </div>

        {/* UI Mockup - Editorial / Glassmorphic Theme */}
        <div className="mt-auto  pt-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-5xl mx-auto bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[2rem] p-8 md:p-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden"
          >
            {/* Mockup Header: User Question */}
            <div className="flex items-start gap-6 border-b border-black/10 pb-8 mb-8">
              <div className="w-14 h-14 shrink-0 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                US
              </div>
              <div>
                <span className="text-xs font-bold text-black/40 uppercase tracking-widest mb-2 block">You asked</span>
                <p className="text-2xl md:text-3xl font-medium text-black tracking-tight leading-tight">
                  What is the mechanism of action for Imatinib, and how strong is the evidence?
                </p>
              </div>
            </div>

            <div className="pl-0 md:pl-20">
              {/* AI Summary */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold text-sm">
                    AI
                  </div>
                  <span className="text-xs font-bold text-[#007b8f] uppercase tracking-widest">BioMindQ Analysis</span>
                </div>
                <p className="text-[#455f6e] text-xl leading-relaxed">
                  Imatinib is a small molecule kinase inhibitor. It specifically targets the BCR-ABL tyrosine kinase, the abnormal protein driving chronic myeloid leukemia (CML). By binding to the ATP-binding site of the enzyme, it prevents the phosphorylation of proteins involved in the cell cycle, thereby inducing apoptosis.
                </p>
              </div>

              {/* Retrieved Evidence */}
              <div className="mb-12 p-6 bg-black/[0.03] rounded-2xl border border-black/[0.05]">
                <span className="text-xs font-bold text-black/40 uppercase tracking-widest mb-4 block">Retrieved Evidence</span>
                <p className="text-black font-medium text-lg leading-relaxed border-l-4 border-cyan-400 pl-6">
                  "Imatinib mesylate functions as a specific inhibitor of a number of tyrosine kinase enzymes. It occupies the TK active site, leading to a decrease in activity."
                </p>
              </div>

              {/* Sources & Evidence Level */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 ">
                <div>
                  <span className="text-xs font-bold text-black/40 uppercase tracking-widest mb-3 block">Primary Sources</span>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full border border-black/10 shadow-sm">PubMed: 11504939</span>
                    <span className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full border border-black/10 shadow-sm">ChEMBL: 941</span>
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <span className="text-xs font-bold text-black/40 uppercase tracking-widest mb-3 block">Evidence Level</span>
                  <span className="px-4 py-2 bg-[#e6f7eb] text-[#1b5e20] text-sm font-bold rounded-full border border-[#c8e6d1] inline-block shadow-sm">
                    High Confidence
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
