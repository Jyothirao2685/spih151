'use client';

import { motion } from 'framer-motion';
import { Microscope, GraduationCap, FlaskConical, Dna } from 'lucide-react';

export default function UseCases() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 lg:py-32 px-6 bg-[#f4fcfe]/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-bold tracking-tight uppercase text-center text-[#2a3f4c]">
          BUILT FOR PEOPLE DOING BIOMEDICAL RESEARCH.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16">
          <motion.div variants={itemVariants} className="text-center bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,120,150,0.06)] border border-[#e0f7fc]/50">
            <Microscope className="w-10 h-10 text-[#007b8f] mx-auto mb-4" />
            <h3 className="text-sm font-bold tracking-wide uppercase mt-4 text-[#2a3f4c]">Biomedical Researchers</h3>
            <p className="text-sm text-[#455f6e] mt-2">Accelerate comprehensive literature review and research synthesis.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,120,150,0.06)] border border-[#e0f7fc]/50">
            <GraduationCap className="w-10 h-10 text-[#007b8f] mx-auto mb-4" />
            <h3 className="text-sm font-bold tracking-wide uppercase mt-4 text-[#2a3f4c]">Research Students</h3>
            <p className="text-sm text-[#455f6e] mt-2">Deep dive into complex biomedical topics and discover insights.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,120,150,0.06)] border border-[#e0f7fc]/50">
            <FlaskConical className="w-10 h-10 text-[#007b8f] mx-auto mb-4" />
            <h3 className="text-sm font-bold tracking-wide uppercase mt-4 text-[#2a3f4c]">Drug Discovery Teams</h3>
            <p className="text-sm text-[#455f6e] mt-2">Explore target-compound relationships and existing clinical data.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,120,150,0.06)] border border-[#e0f7fc]/50">
            <Dna className="w-10 h-10 text-[#007b8f] mx-auto mb-4" />
            <h3 className="text-sm font-bold tracking-wide uppercase mt-4 text-[#2a3f4c]">Bioinformatics Researchers</h3>
            <p className="text-sm text-[#455f6e] mt-2">Analyze and verify complex relationships in biological systems.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
