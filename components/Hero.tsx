"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrainFront, Plus } from "lucide-react";

export default function Hero() {
  const duration = 8; 

  return (
    <section className="min-h-screen w-full flex overflow-hidden relative border-b-[8px] md:border-b-[16px] border-[#141414] bg-[#FFF4E4]">
      
      {/* 1. ЛЕВАЯ ПОЛОСА — Адаптивная ширина: w-12 на телефонах, w-28 на десктопе */}
      <div className="w-12 md:w-20 lg:w-28 bg-[#68191E] flex items-center justify-center border-r-2 md:border-r-4 border-[#141414] relative z-20 shrink-0">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic">
          Эксперимент 1921 — 1928
        </h2>
      </div>

      {/* 2. ОСНОВНОЙ КОНТЕНТ */}
      <div className="flex-1 flex flex-col relative z-10 h-screen">
        
        {/* ВЕРХНЯЯ ПАНЕЛЬ */}
        <div className="p-4 md:p-8 lg:p-12 flex justify-between items-start">
           <div className="flex flex-col gap-1">
             <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#68191E]">Исследовательский проект</span>
             <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">Module IV / History</span>
           </div>
           <div className="flex items-center gap-2 md:gap-6">
              <div className="w-8 h-8 md:w-12 md:h-12 border-[2px] md:border-[3px] border-[#141414] rounded-full flex items-center justify-center font-black text-xs md:text-base">№04</div>
              <Plus size={24} className="md:w-8 md:h-8 text-[#68191E]" strokeWidth={1} />
           </div>
        </div>

        {/* ЦЕНТРАЛЬНЫЙ ТЕКСТ */}
        <div className="flex-1 flex flex-col justify-center px-4 md:px-10 lg:px-24">
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <h3 className="text-sm md:text-xl lg:text-2xl font-black uppercase tracking-[0.1em] text-[#141414] italic leading-tight">
              Введение НЭПа в 20-е годы
            </h3>
            
            {/* Адаптивный НЭП: на мобилках 5xl, на десктопе огромный */}
            <h1 className="text-6xl md:text-[15vw] lg:text-[18vw] font-black text-[#141414] leading-none uppercase tracking-tighter font-[family-name:var(--font-oswald)] drop-shadow-[5px_5px_0px_#68191E] md:drop-shadow-[10px_10px_0px_#68191E]">
              НЭП
            </h1>
            
            {/* Плашка: на мобилках текст переносится, на десктопе в строку */}
            <div className="bg-[#141414] text-[#FFF4E4] px-4 md:px-8 py-2 md:py-4 shadow-[5px_5px_0px_0px_#68191E] md:shadow-[10px_10px_0px_0px_#68191E]">
              <span className="text-xs md:text-3xl lg:text-4xl font-black uppercase italic leading-tight">
                Новая экономическая политика
              </span>
            </div>
          </div>
        </div>

        {/* 3. НИЖНЯЯ ПАНЕЛЬ: РЕЛЬСЫ И ПАРОВОЗ */}
        <div className="h-32 md:h-40 w-full relative px-4 md:px-10 lg:px-24 border-t border-[#141414]/10 flex items-center">
          
          {/* Пути */}
          <div className="absolute left-0 right-0 h-4 md:h-8 flex flex-col justify-between pointer-events-none opacity-40">
             <div className="w-full h-[1px] md:h-[2px] bg-[#141414]" />
             <div className="w-full h-[1px] md:h-[2px] bg-[#141414]" />
             <div className="absolute inset-0 flex justify-around items-center">
                {[...Array(30)].map((_, i) => (<div key={i} className="w-[1px] h-4 md:h-10 bg-[#141414]" />))}
             </div>
          </div>

          <div className="relative w-full h-full flex items-center">
            
            {/* ЦИТАТА: Уменьшен шрифт для телефонов, чтобы влезло в строку */}
            <motion.div 
              initial={{ clipPath: "inset(0 100% 0 0)" }} 
              animate={{ clipPath: "inset(0 0% 0 0)" }} 
              transition={{ duration: duration, ease: "linear" }} 
              className="absolute left-0 z-10"
            >
              <p className="text-[9px] md:text-xl lg:text-2xl font-black italic text-[#141414] uppercase tracking-tighter whitespace-nowrap">
                «Эту политику мы проводим всерьёз и надолго...» 
                <span className="text-[#68191E] ml-2 font-bold">— В.И. ЛЕНИН</span>
              </p>
            </motion.div>

            {/* ПАРОВОЗ: Уменьшен размер на мобилках */}
            <motion.div 
              initial={{ left: "0%" }} 
              animate={{ left: "100%" }} 
              transition={{ duration: duration, ease: "linear" }} 
              className="absolute z-30"
              style={{ x: "-50%" }}
            >
               <motion.div 
                 animate={{ y: [0, -1, 0] }} 
                 transition={{ repeat: Infinity, duration: 0.15 }} 
                 className="relative flex flex-col items-center"
               >
                 {/* Дым */}
                 {[...Array(3)].map((_, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0 }} 
                     animate={{ opacity: [0, 0.4, 0], scale: [1, 3], y: [-10, -40], x: [2, 10] }} 
                     transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.4 }} 
                     className="absolute top-0 left-3 md:left-6 w-3 h-3 md:w-6 md:h-6 bg-gray-400/40 rounded-full blur-lg" 
                   />
                 ))}
                 
                 {/* Иконка: size 40 на мобилках, 80 на десктопе */}
                 <TrainFront 
                    className="w-10 h-10 md:w-20 md:h-20 text-[#141414] fill-[#141414] drop-shadow-[3px_3px_0px_#68191E] md:drop-shadow-[6px_6px_0px_#68191E]" 
                 />
               </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}