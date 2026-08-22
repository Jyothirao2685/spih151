'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Database, Activity } from 'lucide-react';
import React from 'react';

export default function Hero() {
  return (
    <div className="mx-4 lg:mx-8 mt-20 min-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-sm flex items-center">
      <div className="w-full flex flex-col lg:flex-row items-stretch lg:items-center p-6 lg:p-12 gap-12 lg:gap-8 h-full">
        
        {/* Left Column */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 text-cyan-700 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
              <Activity className="w-3 h-3" />
              AI-POWERED BIOMEDICAL RESEARCH
            </span>
          </motion.div>

          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] uppercase text-[#0A0A0A]"
            >
              RESEARCH SMARTER.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] uppercase text-[#0A0A0A] mt-2"
            >
              <span className="underline decoration-cyan-400 decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-[12px]">VERIFY</span> EVERY ANSWER.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-[#6B7280] max-w-lg mt-8 leading-relaxed font-light"
          >
            Explore biomedical research and compound data with AI grounded in real scientific evidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button className="flex items-center justify-center gap-2 bg-[#0A0A0A] text-white rounded-full px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-gray-800 transition">
              EXPLORE BIOMINDQ <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-full px-8 py-4 text-sm font-semibold tracking-wide uppercase text-gray-600 hover:border-gray-400 transition">
              HOW IT WORKS <ArrowDown className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-[500px] flex items-stretch py-4 lg:py-12"
        >
          <div className="w-full h-full min-h-[400px] lg:min-h-[600px] bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 rounded-2xl flex items-center justify-center p-6 md:p-8 lg:p-12 relative overflow-hidden">
            
            <div className="w-full h-full border-2 border-dashed border-cyan-200 rounded-xl flex items-center justify-center relative min-h-[300px]">
              <span className="text-cyan-300 font-medium tracking-wide">Scientific Imagery Placeholder</span>
              
              {/* Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: [-4, 4, -4]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.7 },
                  x: { duration: 0.6, delay: 0.7 },
                  y: { 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear'
                  }
                }}
                className="absolute top-4 right-4 md:top-8 md:-right-4 lg:top-12 lg:-right-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-white/50 p-5 z-10 max-w-[220px]"
              >
                <div className="text-xs font-bold tracking-widest uppercase text-cyan-600">EVIDENCE-FIRST AI</div>
                <div className="text-sm text-[#6B7280] mt-1 font-light leading-snug">Answers grounded in real biomedical data.</div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: [4, -4, 4]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.9 },
                  x: { duration: 0.6, delay: 0.9 },
                  y: { 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear'
                  }
                }}
                className="absolute bottom-4 left-4 md:bottom-8 md:-left-4 lg:bottom-12 lg:-left-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-white/50 p-4 z-10"
              >
                <div className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] flex items-center gap-1.5">
                  <Database className="w-3 h-3" /> PUBMED · CHEMBL · VERIFIED SOURCES
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                  <div className="text-xs text-[#6B7280] font-medium uppercase tracking-wider">Evidence Retrieved</div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
