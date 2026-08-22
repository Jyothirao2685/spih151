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
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight uppercase">
            <span className="block">UNDERSTAND THE COMPOUND.</span>
            <span className="block">THEN EXPLORE THE RESEARCH.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row"
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
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                COMPOUND
              </p>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight mt-2 text-neutral-900">
                METFORMIN
              </h3>
              <p className="text-lg text-gray-400 font-mono mt-1">C₄H₁₁N₅</p>
              
              <div className="border-t border-gray-100 my-6"></div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                    Molecular Weight
                  </p>
                  <p className="text-sm font-semibold text-neutral-900">129.16 g/mol</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                    ChEMBL ID
                  </p>
                  <p className="text-sm font-semibold text-cyan-600">CHEMBL1431</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                    Type
                  </p>
                  <p className="text-sm font-semibold text-neutral-900">Small Molecule</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                    Phase
                  </p>
                  <span className="bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded-full text-xs font-bold inline-block">
                    Approved
                  </span>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                    Evidence Level
                  </p>
                  <span className="bg-amber-50 text-amber-700 border border-amber-200/60 px-2.5 py-0.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    MODERATE
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-12">
              <button className="rounded-full bg-neutral-950 text-white px-6 py-3 text-sm font-semibold tracking-wide uppercase hover:bg-neutral-800 transition">
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
            className="w-full lg:w-[55%] bg-gradient-to-br from-cyan-50/50 to-sky-50/30 p-10 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-100"
          >
            <div className="flex-grow flex flex-col">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                MOLECULAR STRUCTURE
              </p>
              <div className="rounded-2xl border-2 border-dashed border-cyan-200/60 bg-white/50 flex items-center justify-center min-h-[250px] flex-grow text-cyan-400 font-medium text-sm">
                Structure Visualization Placeholder
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                RESEARCH EVIDENCE
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Relevant studies available</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Associated targets identified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
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
