"use client";
import React from "react";
import { motion } from "framer-motion";

export default function EndSlide() {
  return (
    <section className="min-h-screen w-full bg-[#141414] relative overflow-hidden flex border-b-[16px] border-[#68191E]">
      {/* Левая полоса (одинаковая ширина) */}
      <div className="w-20 lg:w-28 bg-[#68191E] flex items-center justify-center border-r-4 border-[#141414] shrink-0 z-30">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic">
          ФИНАЛ ЭПОХИ
        </h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-10 relative">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-[15vw] font-black text-[#68191E] leading-none uppercase font-[family-name:var(--font-oswald)] drop-shadow-[10px_10px_0px_#FFF4E4]">
            НЭП-ЭНД
          </h1>
          
          {/* МЕМ / КАРИКАТУРА */}
          <motion.div 
            initial={{ y: 100, rotate: 10 }}
            whileInView={{ y: 0, rotate: -5 }}
            className="w-64 md:w-80 mx-auto mt-[-50px] border-8 border-[#FFF4E4] shadow-2xl relative bg-white p-2"
          >
            <img src="/posters_1.jpg" alt="Meme" className="w-full h-auto grayscale hover:grayscale-0 transition-all" />
            <div className="absolute -bottom-4 -right-4 bg-[#68191E] text-white px-4 py-1 font-black uppercase text-sm">
              1928: GAME OVER
            </div>
          </motion.div>

          {/* АВТОРСКИЕ ПОДПИСИ */}
          <div className="mt-20 space-y-2">
            <p className="text-[#FFF4E4] font-black uppercase tracking-[0.5em] text-sm opacity-50">Дизайн и разработка</p>
            <h3 className="text-[#FFF4E4] text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              ОЛЕСЯ СИДОРОВА
            </h3>
            <p className="text-[#68191E] font-bold text-xl uppercase tracking-widest">Проект по истории / 4 модуль</p>
          </div>
        </motion.div>

        {/* Декор на фоне */}
        <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none flex flex-wrap gap-10 p-10">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-[#FFF4E4] font-black text-4xl uppercase italic">The End</span>
          ))}
        </div>
      </div>
    </section>
  );
}