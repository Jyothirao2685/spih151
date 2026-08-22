'use client';

import { motion } from 'framer-motion';

export default function Problem() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#F5F6F6] py-10">
      <motion.div
        className="bg-white rounded-3xl mx-4 lg:mx-8 py-20 lg:py-28 px-8 lg:px-16 shadow-sm border border-black/5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl lg:text-5xl font-bold tracking-tight uppercase max-w-3xl"
        >
          BIOMEDICAL RESEARCH IS FRAGMENTED.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-500 max-w-2xl mt-6 leading-relaxed"
        >
          Researchers work across thousands of papers, compound databases and scientific records. Finding and connecting the right information takes time.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mt-20"
        >
          <div>
            <div className="text-5xl lg:text-6xl font-bold text-gray-200 tracking-tighter">01</div>
            <h3 className="text-sm font-bold tracking-widest uppercase mt-4">INFORMATION OVERLOAD</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Relevant research is difficult to process manually.
            </p>
          </div>
          <div>
            <div className="text-5xl lg:text-6xl font-bold text-gray-200 tracking-tighter">02</div>
            <h3 className="text-sm font-bold tracking-widest uppercase mt-4">FRAGMENTED DATA</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Important information is spread across different sources.
            </p>
          </div>
          <div>
            <div className="text-5xl lg:text-6xl font-bold text-gray-200 tracking-tighter">03</div>
            <h3 className="text-sm font-bold tracking-widest uppercase mt-4">UNVERIFIED AI</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              AI can generate answers without showing where the information came from.
            </p>
          </div>
        </motion.div>

        <motion.h3
          variants={itemVariants}
          className="text-2xl lg:text-3xl font-bold tracking-tight mt-24 text-center"
        >
          BioMindQ brings the <span className="text-cyan-600">evidence</span> together.
        </motion.h3>
      </motion.div>
    </section>
  );
}
