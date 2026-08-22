'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Database, Brain, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    label: 'ASK',
    desc: 'Ask about a disease, compound or biomedical topic.',
    icon: MessageCircle,
  },
  {
    num: '02',
    label: 'RETRIEVE',
    desc: 'Find relevant information from biomedical sources.',
    icon: Database,
  },
  {
    num: '03',
    label: 'ANALYZE',
    desc: 'AI processes the retrieved information.',
    icon: Brain,
  },
  {
    num: '04',
    label: 'VERIFY',
    desc: 'See the answer, evidence and sources.',
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-[#F5F6F6]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold tracking-tight uppercase text-center text-[#0A0A0A]"
        >
          FROM QUESTION TO EVIDENCE.
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-stretch justify-center mt-16 gap-8 md:gap-0"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={step.num} className="flex-1 flex flex-col md:flex-row items-center">
                <motion.div 
                  variants={itemVariants}
                  className="bg-white border border-gray-100 rounded-2xl p-8 relative flex-1 h-full w-full"
                >
                  <div className="absolute top-8 right-8">
                    <Icon className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-500/30 tracking-tighter">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold tracking-wide uppercase mt-3 text-[#0A0A0A]">
                    {step.label}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
                
                {!isLast && (
                  <div className="hidden md:flex items-center justify-center w-8 lg:w-12 shrink-0">
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
