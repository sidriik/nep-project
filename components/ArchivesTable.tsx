"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, BarChart3, Pin } from "lucide-react";

// (Массив dossiers оставляешь без изменений, как в прошлом коде)

export default function ArchivesTable() {
  const [openId, setOpenId] = useState<string | null>(null);
  const current = dossiers.find(d => d.id === openId);

  return (
    <section id="archives" className="min-h-screen w-full bg-[#1e231f] flex border-b-[8px] md:border-b-[16px] border-[#141414] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] pointer-events-none" />

      {/* Левая полоса */}
      <div className="w-10 md:w-20 lg:w-28 bg-[#141414] flex items-center justify-center border-r-2 md:border-r-4 border-[#68191E]/50 shrink-0 z-30 relative">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-xl md:text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic opacity-60 whitespace-nowrap">
          СОВНАРКОМ
        </h2>
      </div>

      <div className="flex-1 p-4 md:p-8 lg:p-16 relative z-10 flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#FFF4E4] uppercase tracking-tighter font-[family-name:var(--font-oswald)] mb-8 leading-tight">
            Рабочий стол <span className="text-[#68191E]">СССР</span>
        </h2>

        {/* ПАПКИ: 2 колонки на мобиле */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-8 lg:gap-12">
          {dossiers.map((d, i) => (
            <motion.div
              key={d.id}
              whileHover={{ y: -5 }}
              onClick={() => setOpenId(d.id)}
              className="cursor-pointer group relative"
            >
              <div className="w-full aspect-[3/4] bg-[#c4a484] border-l-[4px] md:border-l-[10px] border-[#8b7355] shadow-lg flex flex-col justify-between p-2 md:p-4">
                <span className="text-[6px] md:text-[10px] font-black uppercase text-[#4a3f35]">Дело №{200 + i}</span>
                <h4 className="text-[10px] md:text-2xl font-black uppercase text-[#2a251f] text-center leading-none">{d.name}</h4>
                <div className="flex justify-between items-end"><Pin size={10} className="md:w-4 md:h-4 text-[#8b7355]" /><span className="text-[6px] md:text-[8px] font-bold text-[#4a3f35]">1922-26</span></div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {openId && current && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
            >
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}
                className="bg-[#FFF4E4] w-full max-w-5xl h-[90vh] md:h-auto border-[6px] md:border-[12px] border-[#68191E] relative flex flex-col lg:flex-row overflow-hidden"
              >
                <button onClick={() => setOpenId(null)} className="absolute top-2 right-2 p-2 bg-[#141414] text-white z-[210]"><X size={24}/></button>

                <div className="flex-1 p-6 lg:p-12 overflow-y-auto">
                   <h3 className="text-2xl md:text-5xl font-black uppercase text-[#141414] mb-4 border-b-2 border-[#68191E] pb-2">{current.name}</h3>
                   <div className="space-y-4">
                      <p className="text-sm md:text-xl lg:text-2xl font-medium italic text-[#141414]">«{current.content}»</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-[#141414] p-4 text-white"><p className="text-lg md:text-2xl font-black text-[#68191E] uppercase">{current.stat}</p></div>
                        <div className="bg-white p-4 border-2 border-[#141414]"><p className="text-[10px] md:text-sm font-bold leading-tight">{current.contrast}</p></div>
                      </div>
                   </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}