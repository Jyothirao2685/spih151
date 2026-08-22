'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white border-t border-gray-100 mt-8"
    >
      <div className="py-16 px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="text-lg font-bold tracking-widest uppercase text-foreground mb-1">
              BIO MINDQ
            </div>
            <p className="text-sm text-gray-400">AI-powered biomedical research.</p>
          </div>
          
          <div className="flex flex-wrap gap-8">
            {['About', 'Features', 'How It Works', 'Evidence', 'Launch App'].map((link) => (
              <a key={link} href="#" className="text-sm text-gray-500 hover:text-foreground transition">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-6">
          <p className="text-xs text-gray-400">
            BioMindQ is a research and informational tool and is not intended for medical diagnosis, treatment or clinical decision-making.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
