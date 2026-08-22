'use client';

import { motion } from 'framer-motion';

const questions = [
  "What is known about Metformin and cancer research?",
  "What targets are associated with Aspirin?",
  "What compounds have been studied for Alzheimer's research?",
  "What evidence exists for the relationship between Compound X and Target Y?"
];

export default function ExampleQuestions() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter uppercase text-center text-[#2a3f4c]">
          START WITH A QUESTION.
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-16 max-w-4xl mx-auto">
          {questions.map((q, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-full bg-white border border-black/5 px-7 py-4 text-sm font-medium text-[#455f6e] hover:border-[#06B6D4]/30 hover:text-[#2a3f4c] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all cursor-pointer shadow-sm"
            >
              {q}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
