'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="mx-4 lg:mx-8 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 py-24 lg:py-32 px-8 text-center relative"
      >
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight uppercase">
            RESEARCH THE EVIDENCE.<br />
            NOT JUST THE ANSWER.
          </h2>
          
          <p className="text-lg text-gray-500 max-w-xl mx-auto mt-6">
            Explore biomedical literature, investigate compounds and verify AI-generated insights in one place.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <button className="bg-foreground text-white rounded-full px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:opacity-90 transition">
              LAUNCH BIOMINDQ &rarr;
            </button>
            <button className="border border-gray-300 rounded-full px-8 py-4 text-sm font-semibold tracking-wide uppercase text-gray-600 hover:bg-black/5 transition">
              EXPLORE FEATURES &rarr;
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
