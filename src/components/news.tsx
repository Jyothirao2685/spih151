"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    category: "Exhibitions",
    title: "ISBT 2026 Kuala Lumpur",
    date: "August 2026",
    excerpt: "Join us at the International Society of Blood Transfusion congress where we will be showcasing our latest innovations in biomedical AI.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
  {
    id: 2,
    category: "Company Milestone",
    title: "30 Years of Excellence",
    date: "July 2026",
    excerpt: "Celebrating three decades of pioneering advancements in biotechnology and driving the future of intelligent healthcare solutions.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    category: "Announcements",
    title: "MDR CE Certification Received",
    date: "June 2026",
    excerpt: "We are proud to announce that our core AI diagnostic platform has received the Medical Device Regulation (MDR) CE mark.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function News() {
  return (
    <section className="py-24 bg-[#f4fcfe]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#2a3f4c] mb-4">
              News & <span className="font-medium text-cyan-600">Updates</span>
            </h2>
            <p className="text-lg text-[#455f6e] font-light">
              Stay informed about our latest breakthroughs, regulatory milestones, and global appearances.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[#2a3f4c] font-medium hover:text-cyan-600 transition-colors group pb-2">
            View all news
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {newsItems.map((news) => (
            <motion.div
              key={news.id}
              variants={item}
              className="group bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(42,63,76,0.04)] hover:shadow-[0_8px_32px_rgba(42,63,76,0.08)] transition-all duration-300 border border-black/[0.03] flex flex-col h-full cursor-pointer"
            >
              <div className="mb-6 flex justify-between items-start">
                <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${news.color} ${news.bgColor}`}>
                  {news.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-[#455f6e]">
                  <Calendar className="w-3.5 h-3.5" />
                  {news.date}
                </span>
              </div>
              
              <h3 className="text-xl font-medium text-[#2a3f4c] mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                {news.title}
              </h3>
              
              <p className="text-[#455f6e] font-light leading-relaxed mb-8 flex-grow">
                {news.excerpt}
              </p>
              
              <div className="mt-auto pt-6 border-t border-[#f4fcfe] flex items-center justify-between">
                <span className="text-sm font-medium text-[#2a3f4c] group-hover:text-cyan-600 transition-colors">
                  Read article
                </span>
                <div className="w-8 h-8 rounded-full bg-[#f4fcfe] flex items-center justify-center group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
