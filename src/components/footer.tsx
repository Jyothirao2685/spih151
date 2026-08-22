"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#f4f4f4] pt-12 pb-0">
      <div className="bg-black text-white rounded-t-[2.5rem] md:rounded-t-[4rem] px-8 md:px-16 pt-20 md:pt-32 pb-12 w-full max-w-[1920px] mx-auto flex flex-col font-sans min-h-[500px] justify-between">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 w-full">
          <div>
            <h2 className="text-6xl md:text-8xl lg:text-[110px] font-medium tracking-tighter leading-none mb-6">
              BioMindQ
            </h2>
            <p className="text-white/60 font-bold tracking-widest uppercase text-sm md:text-base">
              AI-POWERED BIOMEDICAL RESEARCH
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-32 md:mt-auto pt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 w-full">
          
          {/* Left - Empty space for balance, or minimal brand text */}
          <div className="hidden md:block">
            {/* Keeping it clean as requested */}
          </div>

          {/* Right - Links and Copyright */}
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div className="flex flex-wrap gap-6 text-sm font-medium text-white/80">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
            
            <div className="flex justify-between items-center gap-12 w-full">
              <p className="text-white/50 text-sm">
                BioMindQ &copy; {new Date().getFullYear()}
              </p>
              <button 
                onClick={scrollToTop}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} strokeWidth={2} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
