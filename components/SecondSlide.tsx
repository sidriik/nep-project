"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Plus } from "lucide-react";

export default function SecondSlide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="min-h-screen w-full bg-[#68191E] relative overflow-hidden flex border-b-[8px] md:border-b-[16px] border-[#141414]">
      
      {/* 1. ЛЕВАЯ ПОЛОСА — Адаптивная ширина */}
      <div className="w-12 md:w-20 lg:w-28 bg-[#141414] flex items-center justify-center border-r-2 md:border-r-4 border-[#FFF4E4]/20 relative z-30 shrink-0">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic opacity-80">
          МАРТ 1921
        </h2>
      </div>

      {/* 2. ОСНОВНОЙ КОНТЕНТ */}
      <div className="flex-1 relative h-full flex flex-col justify-center px-6 md:px-10 lg:px-20 py-20">
        
        {/* ФОНОВАЯ ТЕКСТУРА */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#FFF4E4_3px,transparent_3px)] [background-size:30px_30px] md:[background-size:40px_40px]" />

        {/* ТЕКСТОВАЯ ЧАСТЬ */}
        <div className="z-10 max-w-full lg:max-w-xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
              <FileText className="text-[#FFF4E4] w-6 h-6 md:w-8 md:h-8" />
              <span className="text-[#FFF4E4] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm italic">
                Архив РГАЭ / Лист 02
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-[5vw] font-black text-[#FFF4E4] uppercase leading-tight mb-6 md:mb-10 tracking-tighter font-[family-name:var(--font-oswald)]">
              Экономика <br /> 
              <span className="text-[#141414] bg-[#FFF4E4] px-2 md:px-6 inline-block mt-2 transform -rotate-1 shadow-[5px_5px_0px_0px_#141414] md:shadow-[15px_15px_0px_0px_#141414]">
                Компромисса
              </span>
            </h2>

            {/* САМ КВАДРАТ (Адаптивные отступы) */}
            <div className="bg-[#141414] p-6 md:p-10 shadow-[10px_10px_0px_0px_#FFF4E4] md:shadow-[20px_20px_0px_0px_#FFF4E4] border border-[#FFF4E4]/10">
              <p className="text-[#FFF4E4] text-sm md:text-xl lg:text-2xl font-medium leading-relaxed italic border-l-4 border-[#68191E] pl-4 md:pl-6">
                «Для преодоления продовольственного и финансового кризиса требовалось создать экономику компромисса, главной задачей которой было не ломать старого уклада...»
              </p>
              <div className="mt-6 flex justify-between items-center border-t border-[#FFF4E4]/10 pt-4 md:pt-6">
                 <span className="text-[#FFF4E4]/40 text-[8px] md:text-xs uppercase font-black tracking-widest italic font-mono">Источник: РГАЭ / Док. №305</span>
                 <Plus className="text-[#FFF4E4] opacity-20 w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. ЛЕНИН (Адаптивное позиционирование) */}
        <div className="absolute right-0 bottom-0 w-[70%] md:w-[60%] h-[50vh] md:h-[95vh] flex items-end justify-end pointer-events-none z-0">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="relative h-full w-full flex items-end justify-end"
          >
            {/* Контур (скрыт на самых маленьких экранах, чтобы не мешать) */}
            <div className="hidden md:block absolute inset-0 z-0 flex items-end justify-end">
               <div className="w-[105%] h-[105%] border-[4px] md:border-[6px] border-dashed border-white/10 rounded-[50px] md:rounded-[100px] absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10" />
            </div>

            <div className="relative h-full flex items-end pr-2 md:pr-4">
               <img 
                 src="/lenin-cutout.png" 
                 alt="Ленин" 
                 className="h-full w-auto object-contain object-bottom grayscale contrast-[1.1] brightness-110"
                 style={{
                   filter: `
                     drop-shadow(4px 4px 0px white) 
                     drop-shadow(-4px -4px 0px white) 
                     drop-shadow(4px -4px 0px white) 
                     drop-shadow(-4px 4px 0px white)
                   `
                 }}
               />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}