"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrainFront } from "lucide-react";

export default function Hero({ onSecretClick }: { onSecretClick: () => void }) {
  const duration = 8; 

  return (
    <section id="hero" className="min-h-screen w-full flex overflow-hidden relative border-b-[8px] md:border-b-[16px] border-[#141414] bg-[#FFF4E4]">
      
      {/* 1. ЛЕВАЯ ПОЛОСА — на мобилках узкая (10), на ноуте широкая (28) */}
      <div className="w-10 md:w-20 lg:w-28 bg-[#68191E] flex items-center justify-center border-r-2 md:border-r-4 border-[#141414] relative z-20 shrink-0">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-xl md:text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic whitespace-nowrap">
          Эксперимент 1921 — 1928
        </h2>
      </div>

      {/* 2. ОСНОВНОЙ КОНТЕНТ */}
      <div className="flex-1 flex flex-col relative z-10 h-screen min-w-0">
        
        <div className="p-4 md:p-8 lg:p-12 flex justify-between items-start">
           <div className="flex flex-col gap-1">
             <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#68191E]">Исследовательский проект</span>
           </div>
           <div className="w-8 h-8 md:w-12 md:h-12 border-[2px] md:border-[3px] border-[#141414] rounded-full flex items-center justify-center font-black text-xs md:text-base">№04</div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-4 md:px-10 lg:px-24">
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <h3 className="text-sm md:text-2xl font-black uppercase tracking-[0.1em] text-[#141414] italic leading-tight">
              Введение НЭПа в 20-е годы
            </h3>
            {/* Адаптивный размер букв НЭП */}
            <h1 className="text-7xl md:text-[15vw] lg:text-[18vw] font-black text-[#141414] leading-[0.8] uppercase tracking-tighter font-[family-name:var(--font-oswald)] drop-shadow-[5px_5px_0px_#68191E] md:drop-shadow-[10px_10px_0px_#68191E]">
              НЭП
            </h1>
            <div className="mt-2 md:mt-6 bg-[#141414] text-[#FFF4E4] px-3 py-2 md:px-8 md:py-4 shadow-[5px_5px_0px_0px_#68191E] md:shadow-[10px_10px_0px_0px_#68191E]">
              <span className="text-[10px] sm:text-xs md:text-3xl lg:text-4xl font-black uppercase italic leading-tight block">
                Новая экономическая политика
              </span>
            </div>
          </div>
        </div>

        {/* ПАСХАЛКА */}
        <motion.button
          onClick={onSecretClick}
          initial={{ opacity: 0.2, rotate: -15 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          className="absolute bottom-32 right-4 md:bottom-40 md:right-10 z-40 border-2 md:border-4 border-[#68191E] text-[#68191E] px-2 py-1 md:px-4 md:py-2 font-black uppercase text-xs md:text-2xl cursor-pointer"
        >
          Секретно
        </motion.button>

        {/* 3. НИЖНЯЯ ПАНЕЛЬ: РЕЛЬСЫ И ПАРОВОЗ */}
        <div className="h-24 md:h-40 w-full relative px-4 md:px-10 lg:px-24 border-t border-[#141414]/10 flex items-center">
          <div className="absolute left-0 right-0 h-4 md:h-8 flex flex-col justify-between opacity-30">
             <div className="w-full h-[1px] bg-[#141414]" />
             <div className="w-full h-[1px] bg-[#141414]" />
          </div>

          <div className="relative w-full h-full flex items-center overflow-hidden">
            <motion.div 
              initial={{ clipPath: "inset(0 100% 0 0)" }} 
              animate={{ clipPath: "inset(0 0% 0 0)" }} 
              transition={{ duration: duration, ease: "linear" }} 
              className="absolute left-0 z-10"
            >
              <p className="text-[8px] md:text-xl lg:text-2xl font-black italic text-[#141414] uppercase tracking-tighter whitespace-nowrap">
                «Эту политику мы проводим всерьёз...» <span className="text-[#68191E] ml-1 md:ml-4 font-bold">— В.И. ЛЕНИН</span>
              </p>
            </motion.div>

            <motion.div 
              initial={{ left: "0%" }} 
              animate={{ left: "100%" }} 
              transition={{ duration: duration, ease: "linear" }} 
              className="absolute z-30"
              style={{ x: "-50%" }} 
            >
               <div className="relative flex flex-col items-center">
                 <TrainFront className="w-8 h-8 md:w-20 md:h-20 text-[#141414] fill-[#141414] drop-shadow-[3px_3px_0px_#68191E]" />
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}