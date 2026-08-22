"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full min-h-[80vh] bg-transparent py-32 flex flex-col font-sans">
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
            <span className="text-[#007b8f] font-bold text-sm tracking-widest uppercase">7. Start Now</span>
          </motion.div>
          
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[0.9] text-black max-w-5xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Research the<br />Evidence.
          </motion.h2>
        </div>

        {/* Content */}
        <div className="mt-auto  pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-xl md:text-2xl text-[#455f6e] leading-relaxed">
              Explore biomedical literature, investigate compounds, and verify AI-generated insights.
            </p>
          </motion.div>
          
          <Link href="/launch">
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-white text-xl font-bold rounded-full tracking-tight hover:bg-gray-900 transition-colors flex items-center gap-3 whitespace-nowrap"
            >
              Launch BioMindQ <span>&rarr;</span>
            </motion.button>
          </Link>
        </div>
        
      </div>
    </section>
  );
}
