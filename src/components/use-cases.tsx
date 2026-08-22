'use client';

import { motion } from 'framer-motion';
import { Microscope, GraduationCap, FlaskConical, Dna } from 'lucide-react';

export default function UseCases() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight uppercase text-center">
          BUILT FOR PEOPLE DOING BIOMEDICAL RESEARCH.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
          <div className="text-center">
            <Microscope className="w-8 h-8 text-cyan-500 mx-auto" />
            <h3 className="text-sm font-bold tracking-wide uppercase mt-4">Biomedical Researchers</h3>
            <p className="text-xs text-gray-500 mt-1">Accelerate comprehensive literature review and research synthesis.</p>
          </div>
          <div className="text-center">
            <GraduationCap className="w-8 h-8 text-cyan-500 mx-auto" />
            <h3 className="text-sm font-bold tracking-wide uppercase mt-4">Research Students</h3>
            <p className="text-xs text-gray-500 mt-1">Deep dive into complex biomedical topics and discover insights.</p>
          </div>
          <div className="text-center">
            <FlaskConical className="w-8 h-8 text-cyan-500 mx-auto" />
            <h3 className="text-sm font-bold tracking-wide uppercase mt-4">Drug Discovery Teams</h3>
            <p className="text-xs text-gray-500 mt-1">Explore target-compound relationships and existing clinical data.</p>
          </div>
          <div className="text-center">
            <Dna className="w-8 h-8 text-cyan-500 mx-auto" />
            <h3 className="text-sm font-bold tracking-wide uppercase mt-4">Bioinformatics Researchers</h3>
            <p className="text-xs text-gray-500 mt-1">Analyze and verify complex relationships in biological systems.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
