'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// import removed
import React from 'react';

export default function Hero() {
  return (
    <div className="w-full min-h-[600px] md:min-h-screen relative flex flex-col bg-transparent">
      {/* Full bleed container - Removed overflow-hidden so artwork can spill over if needed */}
      <div className="w-full h-full flex-1 relative flex flex-col">
        
        {/* DNA Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <img 
              src="/hero.png" 
              alt="Biomedical DNA Background"
              className="w-full h-full object-cover object-center mix-blend-multiply"
              style={{ maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" }}
            />
          </motion.div>
        </div>

        {/* Navbar inside hero container */}
        <header className="grid grid-cols-3 items-center px-6 md:px-12 lg:px-16 pt-8 pb-4 z-20">
          <nav className="hidden md:flex items-center gap-8 justify-start">
            <a href="#about" className="text-xs font-semibold text-black hover:text-black/70 uppercase tracking-widest">ABOUT</a>
            <a href="#features" className="text-xs font-semibold text-black hover:text-black/70 uppercase tracking-widest">FEATURES</a>
            <a href="#how-it-works" className="text-xs font-semibold text-black hover:text-black/70 uppercase tracking-widest">HOW IT WORKS</a>
          </nav>
          
          <div className="flex items-center justify-center">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-black">
              BioMindQ
            </span>
          </div>
          
          <div className="flex items-center justify-end">
            <Link href="/chat">
              <button className="flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 text-xs font-bold hover:bg-gray-800 transition tracking-wider shadow-sm">
                LAUNCH APP <span className="font-light">&rarr;</span>
              </button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start pt-12 md:pt-20 relative z-20">
          
          <div className="relative flex flex-col items-center w-full max-w-5xl px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[110px] font-medium tracking-tighter leading-[0.92] text-center text-black"
            >
              Biomedical
              <br />
              Research Assistant
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-xl md:text-2xl text-[#455f6e] text-center max-w-2xl leading-relaxed"
            >
              Explore biomedical research and compound data with AI grounded in real scientific evidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex items-center justify-center gap-4 text-sm font-bold tracking-widest text-[#007b8f] uppercase"
            >
              <span>PubMed</span>
              <span>&middot;</span>
              <span>ChEMBL</span>
              <span>&middot;</span>
              <span>Evidence-Based</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/launch">
              <button className="bg-black text-white hover:bg-gray-800 rounded-full px-10 py-4 text-sm font-bold tracking-widest uppercase transition shadow-lg flex items-center gap-3">
                LAUNCH BIOMINDQ <span>&rarr;</span>
              </button>
            </Link>
          </motion.div>
        </div>


      </div>
    </div>
  );
}
