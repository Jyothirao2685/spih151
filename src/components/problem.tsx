"use client";

import { motion } from "framer-motion";

export default function Problem() {
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
            <span className="text-[#007b8f] font-bold text-sm tracking-widest uppercase">
              2. The Problem
            </span>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[0.9] text-black max-w-5xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Biomedical Research
            <br />
            Is Fragmented.
          </motion.h2>
        </div>

        {/* 3 Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-auto">

          {/* Point 1 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col pt-8"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-[2px] bg-black mb-6"
            />

            <span className="text-4xl lg:text-5xl font-light text-black/30 mb-6 font-serif">
              01
            </span>

            <h3 className="text-2xl font-bold text-black mb-4 tracking-tight leading-tight">
              Too much information
            </h3>

            <p className="text-[#455f6e] text-lg leading-relaxed">
              Thousands of papers make it difficult to find the evidence that
              actually matters.
            </p>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col pt-8"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-[2px] bg-black mb-6"
            />

            <span className="text-4xl lg:text-5xl font-light text-black/30 mb-6 font-serif">
              02
            </span>

            <h3 className="text-2xl font-bold text-black mb-4 tracking-tight leading-tight">
              Data is scattered
            </h3>

            <p className="text-[#455f6e] text-lg leading-relaxed">
              Research papers and compound data live across separate sources.
            </p>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col pt-8"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-[2px] bg-black mb-6"
            />

            <span className="text-4xl lg:text-5xl font-light text-black/30 mb-6 font-serif">
              03
            </span>

            <h3 className="text-2xl font-bold text-black mb-4 tracking-tight leading-tight">
              AI can hallucinate
            </h3>

            <p className="text-[#455f6e] text-lg leading-relaxed">
              Researchers need answers they can trace back to real evidence.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}