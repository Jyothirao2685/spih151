"use client";

import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="relative w-full min-h-screen bg-transparent py-32 flex flex-col font-sans border-t border-gray-200">

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
            className="flex flex-row gap-6 pt-8"
          >
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-[2px] bg-black shrink-0"
            />
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">Biomedical Q&A</h3>
              <p className="text-[#455f6e] text-xl leading-relaxed">
                Ask questions about diseases, compounds and research.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-row gap-6 pt-8"
          >
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-[2px] bg-black shrink-0"
            />
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">Compound Intelligence</h3>
              <p className="text-[#455f6e] text-xl leading-relaxed">
                Explore compound properties, targets and research.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-row gap-6 pt-8"
          >
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-[2px] bg-black shrink-0"
            />
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">Evidence & Sources</h3>
              <p className="text-[#455f6e] text-xl leading-relaxed">
                See the data and sources used to generate an answer.
              </p>
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-row gap-6 pt-8"
          >
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-[2px] bg-black shrink-0"
            />
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">Uncertainty</h3>
              <p className="text-[#455f6e] text-xl leading-relaxed">
                Know when evidence is strong, limited or insufficient.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
