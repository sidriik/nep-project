"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrainFront } from "lucide-react";

// Добавляем пропс onSecretClick, чтобы связать с главным файлом
export default function Hero({ onSecretClick }: { onSecretClick: () => void }) {
  const duration = 8; 

  return (
    <section id="hero" className="min-h-screen w-full flex overflow-hidden relative border-b-[16px] border-[#141414] bg-[#FFF4E4]">
      
      {/* 1. ЛЕВАЯ ПОЛОСА */}
      <div className="w-20 lg:w-28 bg-[#68191E] flex items-center justify-center border-r-4 border-[#141414] relative z-20 shrink-0">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic">
          Эксперимент 1921 — 1928
        </h2>
      </div>

      {/* 2. ОСНОВНОЙ КОНТЕНТ */}
      <div className="flex-1 flex flex-col relative z-10 h-screen">
        
        {/* ВЕРХНЯЯ ПАНЕЛЬ */}
        <div className="p-8 lg:p-12 flex justify-between items-start">
           <div className="flex flex-col gap-1">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#68191E]">Исследовательский проект</span>
             <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Module IV / History</span>
           </div>
        </div>

        {/* ЦЕНТРАЛЬНЫЙ ТЕКСТ */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-24">
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-[#141414] italic">Введение НЭПа в 20-е годы</h3>
            <h1 className="text-[18vw] font-black text-[#141414] leading-none uppercase tracking-tighter font-[family-name:var(--font-oswald)] drop-shadow-[10px_10px_0px_#68191E]">НЭП</h1>
            <div className="bg-[#141414] text-[#FFF4E4] px-8 py-4 shadow-[10px_10px_0px_0px_#68191E]">
              <span className="text-xl md:text-4xl font-black uppercase italic whitespace-nowrap">Новая экономическая политика</span>
            </div>
          </div>
        </div>

        {/* ПАСХАЛКА: СЕКРЕТНЫЙ ШТАМП */}
        <motion.button
          onClick={onSecretClick}
          initial={{ opacity: 0.15, rotate: -15 }}
          whileHover={{ opacity: 1, scale: 1.1, rotate: -10, transition: { duration: 0.2 } }}
          className="absolute bottom-40 right-10 z-40 border-4 border-[#68191E] text-[#68191E] px-4 py-2 font-black uppercase text-2xl cursor-pointer select-none group"
        >
          Секретно
          <div className="absolute inset-0 border-2 border-[#68191E] m-1 opacity-50 group-hover:animate-pulse" />
        </motion.button>

        {/* 3. НИЖНЯЯ ПАНЕЛЬ: РЕЛЬСЫ И ПАРОВОЗ */}
        <div className="h-40 w-full relative px-10 lg:px-24 border-t-2 border-[#141414]/10 flex items-center">
          
          {/* Пути */}
          <div className="absolute left-0 right-0 h-8 flex flex-col justify-between pointer-events-none opacity-30">
             <div className="w-full h-[2px] bg-[#141414]" />
             <div className="w-full h-[2px] bg-[#141414]" />
             <div className="absolute inset-0 flex justify-around items-center">
                {[...Array(60)].map((_, i) => (<div key={i} className="w-[1px] h-10 bg-[#141414]" />))}
             </div>
          </div>

          <div className="relative w-full h-full flex items-center">
            
            {/* ЦИТАТА */}
            <motion.div 
              initial={{ clipPath: "inset(0 100% 0 0)" }} 
              animate={{ clipPath: "inset(0 0% 0 0)" }} 
              transition={{ duration: duration, ease: "linear" }} 
              className="absolute left-0 z-10"
            >
              <p className="text-lg md:text-2xl font-black italic text-[#141414] uppercase tracking-tighter whitespace-nowrap">
                «Эту политику мы проводим всерьёз и надолго, но, конечно, не навсегда» 
                <span className="text-[#68191E] ml-4 font-bold">— В.И. ЛЕНИН</span>
              </p>
            </motion.div>

            {/* ПАРОВОЗ */}
            <motion.div 
              initial={{ left: "0%" }} 
              animate={{ left: "100%" }} 
              transition={{ duration: duration, ease: "linear" }} 
              className="absolute z-30"
              style={{ x: "-50%" }} 
            >
               <motion.div 
                 animate={{ y: [0, -2, 0] }} 
                 transition={{ repeat: Infinity, duration: 0.15 }} 
                 className="relative flex flex-col items-center"
               >
                 {/* Дым */}
                 {[...Array(4)].map((_, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0 }} 
                     animate={{ opacity: [0, 0.4, 0], scale: [1, 4], y: [-20, -80], x: [10, 30] }} 
                     transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }} 
                     className="absolute top-0 left-6 w-8 h-8 bg-gray-400/40 rounded-full blur-xl" 
                   />
                 ))}
                 
                 <TrainFront 
                    size={80} 
                    fill="#141414" 
                    className="text-[#141414] drop-shadow-[6px_6px_0px_#68191E]" 
                 />
               </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}