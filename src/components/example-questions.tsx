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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight uppercase text-center">
          START WITH A QUESTION.
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-4xl mx-auto">
          {questions.map((q, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-full bg-white border border-gray-200 px-6 py-3.5 text-sm text-gray-700 hover:border-cyan-300 hover:bg-cyan-50/50 transition-all cursor-pointer shadow-sm hover:shadow"
            >
              {q}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
