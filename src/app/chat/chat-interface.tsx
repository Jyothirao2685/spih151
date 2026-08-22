"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Bot, ShieldAlert, FileText, Activity } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

// Note: Ensure uuid is installed: npm install uuid @types/uuid
// I will run that command shortly.

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  // Assistant specific fields from backend
  evidence_level?: string;
  claims?: any[];
  limitations?: string[];
  evidence?: any[];
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [activeMolecule, setActiveMolecule] = useState<{id: string, name: string, source: string} | null>(null);

  useEffect(() => {
    // Generate a unique session ID for this chat
    setConversationId(uuidv4());
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: uuidv4(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/v1/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Device-ID": "browser-session", // In a real app, persist this
        },
        body: JSON.stringify({
          conversation_id: conversationId,
          message: userMsg.content,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      
      const assistantMsg: Message = {
        id: data.message_id || uuidv4(),
        role: "assistant",
        content: data.answer.summary,
        evidence_level: data.answer.evidence_level,
        claims: data.answer.claims,
        limitations: data.answer.limitations,
        evidence: data.evidence,
      };

      setMessages((prev) => [...prev, assistantMsg]);

      // Check for molecule visualization
      const mol = data.evidence?.find((e: any) => e.source === "chembl" || e.source === "pubchem");
      if (mol) {
        setActiveMolecule({ id: mol.source_id, name: mol.title, source: mol.source });
      }

    } catch (error) {
      console.error("Chat error:", error);
      const errorMsg: Message = {
        id: uuidv4(),
        role: "assistant",
        content: "Sorry, I encountered an error connecting to the BioMindQ research servers. Please ensure the backend is running.",
        evidence_level: "insufficient",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderEvidenceBadge = (level?: string) => {
    if (!level) return null;
    
    let color = "bg-gray-100 text-gray-600 border-gray-200";
    let icon = <Activity size={12} />;
    let text = "UNKNOWN EVIDENCE";
    const lvl = level.toUpperCase();

    if (lvl === "HIGH") {
      color = "bg-[#007b8f]/10 text-[#007b8f] border-[#007b8f]/20";
      text = "HIGH EVIDENCE";
    } else if (lvl === "MODERATE") {
      color = "bg-amber-500/10 text-amber-600 border-amber-500/20";
      text = "MODERATE EVIDENCE";
    } else if (lvl === "LOW" || lvl === "VERY LOW") {
      color = "bg-orange-500/10 text-orange-600 border-orange-500/20";
      text = lvl + " EVIDENCE";
    } else if (lvl === "INSUFFICIENT") {
      color = "bg-red-500/10 text-red-600 border-red-500/20";
      text = "INSUFFICIENT EVIDENCE";
    } else if (lvl === "AI_KNOWLEDGE") {
      color = "bg-purple-500/10 text-purple-600 border-purple-500/20";
      text = "AI KNOWLEDGE (UNVERIFIED)";
    }

    return (
      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase ${color}`}>
        {icon}
        {text}
      </div>
    );
  };

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto flex h-full relative overflow-hidden">
      
      {/* Main Chat Column */}
      <div className="flex-1 flex flex-col h-full w-full relative transition-all duration-500">
        
        {/* Header */}
        <header className="py-6 px-8 flex items-center justify-between border-b border-black/5 bg-white/40 backdrop-blur-md rounded-b-3xl mb-4 mx-4 shadow-sm z-20">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white p-2 rounded-xl">
              <Bot size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-black leading-none">BioMindQ</h1>
              <p className="text-xs text-[#455f6e] font-medium tracking-wide">RESEARCH ASSISTANT</p>
            </div>
          </div>
        </header>

        {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 space-y-8 z-10 scroll-smooth">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
            <Bot size={64} className="mb-6 text-black" strokeWidth={1} />
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-black mb-4">
              How can I assist your research?
            </h2>
            <p className="text-lg text-[#3b5463] max-w-md">
              Ask about biomedical literature, specific compounds, or scientific consensus.
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={msg.id}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              {msg.role === "user" ? (
                <div className="bg-black text-white px-6 py-4 rounded-3xl rounded-tr-sm max-w-[85%] shadow-md">
                  <p className="text-[15px] leading-relaxed">{msg.content}</p>
                </div>
              ) : (
                <div className="bg-white/80 backdrop-blur-xl border border-black/5 px-6 py-6 rounded-3xl rounded-tl-sm w-full shadow-sm text-black">
                  
                  {/* Top metadata row */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-black/5">
                    <div className="flex items-center gap-2 text-[#007b8f] font-bold text-xs tracking-widest uppercase">
                      <Bot size={14} />
                      BIOMINDQ
                    </div>
                    {renderEvidenceBadge(msg.evidence_level)}
                  </div>

                  {/* Summary Content */}
                  <div className="text-[15px] leading-relaxed mb-6 font-medium text-gray-800">
                    {msg.content}
                  </div>

                  {/* Claims and Citations */}
                  {msg.claims && msg.claims.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold tracking-widest text-black/40 uppercase mb-3">Key Claims</h4>
                      <ul className="space-y-3">
                        {msg.claims.map((claim, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 bg-black/5 p-4 rounded-xl">
                            <span className="text-black font-bold opacity-30 mt-0.5">{idx + 1}.</span>
                            <div>
                              <span>{claim.text}</span>
                              {claim.evidence_ids && claim.evidence_ids.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-1">
                                  {claim.evidence_ids.map((eid: string) => (
                                    <span key={eid} className="inline-block bg-white border border-black/10 text-xs px-1.5 py-0.5 rounded-md text-black/60 font-mono">
                                      {eid}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Retrieved Evidence Sources */}
                  {msg.evidence && msg.evidence.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold tracking-widest text-black/40 uppercase mb-3 flex items-center gap-1.5">
                        <FileText size={14} /> Sources
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {msg.evidence.map((ev: any, idx: number) => (
                          <a 
                            key={idx} 
                            href={ev.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs border border-black/10 rounded-lg p-3 hover:bg-black/5 transition block group"
                          >
                            <div className="font-bold text-black group-hover:text-[#007b8f] transition line-clamp-2 mb-1">
                              {ev.title}
                            </div>
                            <div className="text-black/50 font-mono text-[10px] uppercase">
                              {ev.source}: {ev.source_id}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Limitations / Safety Warning */}
                  {msg.limitations && msg.limitations.length > 0 && (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
                      <ShieldAlert size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-xs font-bold tracking-widest text-amber-800 uppercase mb-1">Limitations</h4>
                        <ul className="list-disc list-inside text-xs text-amber-700 space-y-1">
                          {msg.limitations.map((limit, idx) => (
                            <li key={idx}>{limit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                </div>
              )}
            </motion.div>
          ))
        )}
        
        {/* Loading Indicator */}
        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start">
            <div className="bg-white/80 backdrop-blur-xl border border-black/5 px-6 py-5 rounded-3xl rounded-tl-sm shadow-sm flex items-center gap-3">
              <div className="flex gap-1.5">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-black/40 rounded-full" />
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-black/40 rounded-full" />
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-black/40 rounded-full" />
              </div>
              <span className="text-xs font-bold tracking-widest text-black/40 uppercase">Researching evidence...</span>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="p-4 md:p-8 pt-2 z-20">
        <form 
          onSubmit={handleSubmit}
          className="relative bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-black/5 rounded-full overflow-hidden flex items-center focus-within:ring-2 focus-within:ring-[#007b8f] transition"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about a compound, disease, or medical study..."
            className="w-full bg-transparent border-none py-5 pl-8 pr-16 text-black placeholder:text-black/30 focus:outline-none text-[15px]"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:hover:bg-black transition"
          >
            <Send size={18} />
          </button>
        </form>
        <p className="text-center text-[10px] text-black/40 font-medium tracking-wide mt-4 uppercase">
          BioMindQ is for research purposes only and does not provide medical advice.
        </p>
      </div>

      </div>

      {/* Right Sidebar for Molecule Visualization */}
      <AnimatePresence>
        {activeMolecule && (
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 380 }}
            exit={{ opacity: 0, width: 0 }}
            className="h-full border-l border-black/5 bg-white/40 backdrop-blur-md hidden xl:flex flex-col flex-shrink-0"
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-black/40 uppercase mb-1">Molecule Viewer</h3>
                <h2 className="text-xl font-bold text-black leading-none">{activeMolecule.name}</h2>
                <p className="text-[10px] text-black/40 font-mono uppercase mt-1.5">Source: {activeMolecule.source}</p>
              </div>
              <button 
                onClick={() => setActiveMolecule(null)}
                className="text-black/30 hover:text-black/60 text-xl font-bold p-2"
              >
                &times;
              </button>
            </div>
            
            <div className="flex-1 p-8 flex items-center justify-center">
               <img 
                 src={activeMolecule.source === "chembl" 
                    ? `https://www.ebi.ac.uk/chembl/api/data/image/${activeMolecule.id}.svg`
                    : `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${activeMolecule.id}/PNG?record_type=2d&image_size=large`
                 } 
                 alt={activeMolecule.name}
                 className="w-full h-auto max-w-full mix-blend-multiply"
                 onError={(e) => (e.currentTarget.style.display = 'none')}
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
