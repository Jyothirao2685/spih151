'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

export default function ResponsibleAI() {
  return (
    <section className="py-24 lg:py-32 mx-4 lg:mx-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl container mx-auto py-16 lg:py-20 px-8 lg:px-16"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight uppercase">
            WHEN THE EVIDENCE ISN'T THERE,<br />
            BIOMINDQ SAYS SO.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* High Evidence */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6">
            <CheckCircle className="w-6 h-6 text-emerald-500 mb-4" />
            <h3 className="text-emerald-700 font-bold text-sm tracking-widest uppercase mb-2">HIGH EVIDENCE</h3>
            <p className="text-sm text-emerald-600/80">Multiple relevant sources support the finding.</p>
          </div>
          
          {/* Limited Evidence */}
          <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">
            <AlertTriangle className="w-6 h-6 text-amber-500 mb-4" />
            <h3 className="text-amber-700 font-bold text-sm tracking-widest uppercase mb-2">LIMITED EVIDENCE</h3>
            <p className="text-sm text-amber-600/80">Evidence exists but is limited or inconsistent.</p>
          </div>

          {/* Insufficient Evidence */}
          <div className="rounded-2xl bg-red-50 border border-red-100 p-6">
            <XCircle className="w-6 h-6 text-red-500 mb-4" />
            <h3 className="text-red-700 font-bold text-sm tracking-widest uppercase mb-2">INSUFFICIENT EVIDENCE</h3>
            <p className="text-sm text-red-600/80">Available data is not enough to support a conclusion.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl lg:text-3xl font-bold tracking-tight uppercase text-gray-300">
            NO SUFFICIENT EVIDENCE.<br />
            NO CONFIDENT CLAIM.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Research & informational use only. BioMindQ does not provide medical diagnosis, treatment recommendations, or clinical advice.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
