"use client";

import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="relative w-full min-h-screen bg-[#f4f4f4]  py-32 flex flex-col font-sans ">
      {/* Background Blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-blue-600 rounded-full blur-[200px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px] opacity-20 pointer-events-none" />

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
            <span className="text-[#007b8f] font-bold text-sm tracking-widest uppercase">4. Core Features</span>
          </motion.div>
          
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[0.9] text-black max-w-5xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            One Place for<br />Biomedical Research.
          </motion.h2>
        </div>

        {/* Features - 2x2 Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mt-auto">
          
          {/* Feature 1 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col  pt-8"
          >
            <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">Biomedical Q&A</h3>
            <p className="text-[#455f6e] text-xl leading-relaxed">
              Ask questions about diseases, compounds and research.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col  pt-8"
          >
            <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">Compound Intelligence</h3>
            <p className="text-[#455f6e] text-xl leading-relaxed">
              Explore compound properties, targets and research.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col  pt-8"
          >
            <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">Evidence & Sources</h3>
            <p className="text-[#455f6e] text-xl leading-relaxed">
              See the data and sources used to generate an answer.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col  pt-8"
          >
            <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">Uncertainty</h3>
            <p className="text-[#455f6e] text-xl leading-relaxed">
              Know when evidence is strong, limited or insufficient.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
