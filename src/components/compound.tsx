'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Compound() {
  return (
    <section className="py-24 lg:py-32 mx-4 lg:mx-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight uppercase text-[#2a3f4c]">
            <span className="block">UNDERSTAND THE COMPOUND.</span>
            <span className="block">THEN EXPLORE THE RESEARCH.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="bg-white rounded-3xl border border-[#e0f7fc]/50 shadow-[0_8px_30px_rgba(0,120,150,0.06)]  flex flex-col lg:flex-row"
        >
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[45%] px-10 py-10 flex flex-col justify-between"
          >
            <div>
              <p className="bg-[#e0f7fc] text-[#007b8f] uppercase tracking-widest font-bold text-[10px] px-3 py-1 rounded-full inline-block">
                COMPOUND
              </p>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-[#2a3f4c]">
                METFORMIN
              </h3>
              <p className="text-lg text-[#455f6e] font-mono mt-1">C₄H₁₁N₅</p>
              
              <div className="border-t border-[#e0f7fc]/50 my-6"></div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-[#455f6e] uppercase mb-1">
                    Molecular Weight
                  </p>
                  <p className="text-sm font-semibold text-[#2a3f4c]">129.16 g/mol</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-[#455f6e] uppercase mb-1">
                    ChEMBL ID
                  </p>
                  <p className="text-sm font-semibold text-[#007b8f]">CHEMBL1431</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-[#455f6e] uppercase mb-1">
                    Type
                  </p>
                  <p className="text-sm font-semibold text-[#2a3f4c]">Small Molecule</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-[#455f6e] uppercase mb-1">
                    Phase
                  </p>
                  <span className="bg-[#e0f7fc] text-[#007b8f] px-2.5 py-0.5 rounded-full text-xs font-bold inline-block">
                    Approved
                  </span>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] font-bold tracking-widest text-[#455f6e] uppercase mb-1">
                    Evidence Level
                  </p>
                  <span className="bg-[#e0f7fc] text-[#007b8f] border border-[#007b8f]/20 px-2.5 py-0.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007b8f]"></span>
                    MODERATE
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-12">
              <button className="rounded-full bg-[#2a3f4c] text-white px-6 py-3 text-sm font-semibold tracking-wide uppercase hover:bg-[#1a2831] transition shadow-[0_8px_30px_rgba(0,120,150,0.06)]">
                EXPLORE COMPOUND →
              </button>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-[55%] bg-[#f4fcfe] p-10 flex flex-col border-t lg:border-t-0 lg:border-l border-[#e0f7fc]/50"
          >
            <div className="flex-grow flex flex-col">
              <p className="text-[10px] font-bold tracking-widest text-[#455f6e] uppercase mb-4">
                MOLECULAR STRUCTURE
              </p>
              <div className="rounded-2xl border-2 border-dashed border-[#007b8f]/30 bg-white/50 flex items-center justify-center min-h-[250px] flex-grow text-[#007b8f] font-medium text-sm">
                Structure Visualization Placeholder
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[10px] font-bold tracking-widest text-[#455f6e] uppercase mb-4">
                RESEARCH EVIDENCE
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#455f6e]">
                  <CheckCircle className="w-4 h-4 text-[#007b8f] flex-shrink-0" />
                  <span>Relevant studies available</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#455f6e]">
                  <CheckCircle className="w-4 h-4 text-[#007b8f] flex-shrink-0" />
                  <span>Associated targets identified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#455f6e]">
                  <CheckCircle className="w-4 h-4 text-[#007b8f] flex-shrink-0" />
                  <span>Bioactivity data recorded</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
