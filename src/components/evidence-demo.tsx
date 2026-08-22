"use client";

import { motion } from "framer-motion";
import { Sparkles, Database } from "lucide-react";

export default function EvidenceDemo() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const evidenceVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 lg:py-32 mx-4 lg:mx-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight uppercase max-w-3xl">
            DON&apos;T JUST TRUST THE ANSWER.<br />
            SEE THE <span className="text-cyan-600">EVIDENCE</span>.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm"
        >
          {/* Top bar of mock interface */}
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="text-sm font-medium text-gray-400">BioMindQ</div>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>

          {/* Query area */}
          <div className="px-8 py-6 border-b border-gray-100">
            <motion.div variants={itemVariants}>
              <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                QUERY
              </div>
              <div className="text-lg font-medium mt-2">
                What is known about Metformin in cancer research?
              </div>
            </motion.div>
          </div>

          {/* Two-column content area */}
          <div className="flex flex-col md:flex-row">
            {/* Left column — AI SUMMARY */}
            <div className="w-full md:w-[60%] px-8 py-6">
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-cyan-600 uppercase">
                  <Sparkles size={12} />
                  AI SUMMARY
                </div>
                <div className="text-sm text-gray-600 leading-relaxed mt-3">
                  Metformin has been investigated across several mechanisms relevant to cancer research, including AMPK activation, mTOR pathway inhibition, and potential anti-proliferative effects. Multiple studies have explored its role in various cancer types.
                </div>
                <div className="h-px bg-gray-100 my-4"></div>
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">EVIDENCE LEVEL</span>
                  <span className="rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-xs font-bold">MODERATE</span>
                </div>
              </motion.div>
            </div>

            {/* Right column — RETRIEVED EVIDENCE */}
            <div className="w-full md:w-[40%] bg-gray-50/50 border-t md:border-t-0 md:border-l border-gray-100 px-6 py-6">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-emerald-600 uppercase mb-3">
                <Database size={12} />
                RETRIEVED EVIDENCE
              </div>
              
              <div className="flex flex-col gap-3">
                <motion.div variants={evidenceVariants} className="rounded-xl bg-white border border-gray-200 p-4">
                  <span className="rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-0.5 inline-block mb-2">PUBMED</span>
                  <div className="text-sm font-medium">Metformin and Cancer: From the Old Medicine...</div>
                  <div className="text-xs text-gray-500 mt-1">Evidence suggests AMPK-dependent mechanisms...</div>
                  <div className="text-[10px] font-bold text-cyan-600 tracking-widest mt-2 cursor-pointer hover:text-cyan-700 transition-colors">
                    VIEW SOURCE &rarr;
                  </div>
                </motion.div>
                
                <motion.div variants={evidenceVariants} className="rounded-xl bg-white border border-gray-200 p-4">
                  <span className="rounded-full bg-purple-50 text-purple-600 text-[10px] font-bold px-2.5 py-0.5 inline-block mb-2">CHEMBL</span>
                  <div className="text-sm font-medium">Metformin &mdash; Compound Record</div>
                  <div className="text-xs text-gray-500 mt-1">Target associations and bioactivity data available.</div>
                  <div className="text-[10px] font-bold text-cyan-600 tracking-widest mt-2 cursor-pointer hover:text-cyan-700 transition-colors">
                    VIEW SOURCE &rarr;
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
