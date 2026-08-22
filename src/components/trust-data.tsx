'use client';

import { motion } from 'framer-motion';

export default function TrustData() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F5F6F6]">
      <motion.div
        className="max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-center text-3xl lg:text-4xl font-bold tracking-tight uppercase"
        >
          GROUNDED IN REAL BIOMEDICAL DATA
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-6 justify-center mt-12"
        >
          <div className="rounded-full bg-white border border-gray-200 px-6 py-3 text-sm font-semibold tracking-widest uppercase text-gray-700 shadow-sm">
            PUBMED
          </div>
          <div className="rounded-full bg-white border border-gray-200 px-6 py-3 text-sm font-semibold tracking-widest uppercase text-gray-700 shadow-sm">
            CHEMBL
          </div>
          <div className="rounded-full bg-white border border-gray-200 px-6 py-3 text-sm font-semibold tracking-widest uppercase text-gray-700 shadow-sm">
            CURATED DATA
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-500 max-w-2xl mx-auto mt-8"
        >
          BioMindQ retrieves relevant biomedical information before generating its response.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-row items-center justify-center gap-6 mt-16"
        >
          <div className="rounded-xl bg-cyan-50 text-cyan-700 px-5 py-2.5 text-sm font-bold tracking-wide">
            RETRIEVED EVIDENCE
          </div>
          <div className="text-2xl text-gray-300 font-light">
            ≠
          </div>
          <div className="rounded-xl bg-gray-100 text-gray-600 px-5 py-2.5 text-sm font-bold tracking-wide">
            AI SYNTHESIS
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
