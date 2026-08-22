'use client';

import { motion } from 'framer-motion';
import { MessageSquare, FlaskConical, BookOpen, Link2, BarChart3 } from 'lucide-react';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="py-24 bg-[#F5F6F6]">
      <div className="mx-4 lg:mx-8 py-16 lg:py-24 px-8 lg:px-16 bg-white rounded-3xl">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl lg:text-5xl font-bold tracking-tight uppercase text-neutral-950"
          >
            Built for Biomedical Research.
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14"
        >
          {/* Feature 01 */}
          <motion.div variants={itemVariants} className="border-t border-gray-100 pt-8">
            <MessageSquare className="w-8 h-8 text-cyan-500/60 mb-4" />
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-600">
              Feature 01
            </div>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight mt-2 text-neutral-900">
              Biomedical Q&A
            </h3>
            <p className="text-sm lg:text-base text-gray-500 mt-3 leading-relaxed">
              Ask research questions and receive answers grounded in retrieved evidence.
            </p>
          </motion.div>

          {/* Feature 02 */}
          <motion.div variants={itemVariants} className="border-t border-gray-100 pt-8">
            <FlaskConical className="w-8 h-8 text-cyan-500/60 mb-4" />
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-600">
              Feature 02
            </div>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight mt-2 text-neutral-900">
              Compound Intelligence
            </h3>
            <p className="text-sm lg:text-base text-gray-500 mt-3 leading-relaxed">
              Explore compound properties, targets, interactions and research.
            </p>
          </motion.div>

          {/* Feature 03 - Full Width */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 border-t border-gray-100 pt-8 bg-cyan-50/50 -mx-8 px-8 pb-8 rounded-2xl mt-4 lg:mt-0"
          >
            <BookOpen className="w-8 h-8 text-cyan-500/60 mb-4 mt-8" />
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-600">
              Feature 03
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mt-2 text-neutral-900">
              Research Retrieval
            </h3>
            <p className="text-base lg:text-lg text-gray-500 mt-3 leading-relaxed max-w-3xl">
              Find relevant biomedical literature without manually searching through everything.
            </p>
          </motion.div>

          {/* Feature 04 */}
          <motion.div variants={itemVariants} className="border-t border-gray-100 pt-8 mt-4 lg:mt-0">
            <Link2 className="w-8 h-8 text-cyan-500/60 mb-4" />
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-600">
              Feature 04
            </div>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight mt-2 text-neutral-900">
              Source Traceability
            </h3>
            <p className="text-sm lg:text-base text-gray-500 mt-3 leading-relaxed">
              See exactly where the information behind an answer came from.
            </p>
          </motion.div>

          {/* Feature 05 */}
          <motion.div variants={itemVariants} className="border-t border-gray-100 pt-8 mt-4 lg:mt-0">
            <BarChart3 className="w-8 h-8 text-cyan-500/60 mb-4" />
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-600">
              Feature 05
            </div>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight mt-2 text-neutral-900">
              Evidence & Uncertainty
            </h3>
            <p className="text-sm lg:text-base text-gray-500 mt-3 leading-relaxed">
              Understand whether available evidence is strong, limited or insufficient.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
