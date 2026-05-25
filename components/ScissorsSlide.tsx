"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Scissors, AlertCircle } from "lucide-react";

export default function ScissorsSlide() {
  const [year, setYear] = useState(1921);
  
  // Расчет "разрыва" цен (упрощенно)
  const gap = (year - 1921) * 15; 

  return (
    <section className="min-h-screen w-full bg-[#FFF4E4] flex border-b-[16px] border-[#141414] relative">
      <div className="w-20 lg:w-28 bg-[#68191E] flex items-center justify-center border-r-4 border-[#141414] shrink-0 z-30">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic">КРИЗИС СБЫТА</h2>
      </div>

      <div className="flex-1 p-10 lg:p-24 flex flex-col justify-center items-center">
        <h2 className="text-5xl lg:text-7xl font-black text-[#141414] uppercase mb-4 text-center">
          Ножницы <span className="text-[#68191E]">Цен</span>
        </h2>
        <p className="text-xl font-bold uppercase mb-12 opacity-60">Двигай время, чтобы увидеть разрыв экономики</p>

        <div className="relative w-full max-w-4xl h-[400px] bg-white border-4 border-[#141414] shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Линия цен на промтовары */}
          <motion.div 
            animate={{ rotate: -gap/2 }}
            className="absolute h-2 w-[80%] bg-[#68191E] origin-center flex items-center justify-end px-4"
          >
            <span className="text-white font-black uppercase text-xs">Промтовары ↑</span>
          </motion.div>

          {/* Линия цен на хлеб */}
          <motion.div 
            animate={{ rotate: gap/2 }}
            className="absolute h-2 w-[80%] bg-[#141414] origin-center flex items-center justify-end px-4"
          >
            <span className="text-white font-black uppercase text-xs">Хлеб ↓</span>
          </motion.div>

          <Scissors size={80} className="text-[#141414] z-10 bg-white p-2 rounded-full border-4 border-[#141414]" />
          
          {year === 1923 && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-10 bg-[#68191E] text-white p-4 font-black uppercase italic animate-bounce">
              Пик кризиса! 1923 год
            </motion.div>
          )}
        </div>

        {/* ПОЛЗУНОК */}
        <div className="mt-16 w-full max-w-xl">
          <input 
            type="range" min="1921" max="1928" step="1" value={year} 
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="w-full h-4 bg-[#141414] rounded-lg appearance-none cursor-pointer accent-[#68191E]"
          />
          <div className="flex justify-between mt-4 font-black text-2xl text-[#141414]">
            <span>1921</span>
            <span className="text-[#68191E] text-4xl">{year}</span>
            <span>1928</span>
          </div>
        </div>
      </div>
    </section>
  );
}