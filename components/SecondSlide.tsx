"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Plus } from "lucide-react";

export default function SecondSlide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="min-h-screen w-full bg-[#68191E] relative overflow-hidden grid grid-cols-12 border-b-[16px] border-[#141414]">
      
      {/* 1. ЛЕВАЯ ПОЛОСА */}
      <div className="w-20 lg:w-28 bg-[#141414] flex items-center justify-center border-r-4 border-[#FFF4E4]/20 relative z-20">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic opacity-80">
          МАРТ 1921
        </h2>
      </div>

      {/* 2. ОСНОВНОЙ КОНТЕНТ */}
      <div className="col-span-11 relative h-full flex items-center px-10 lg:px-20">
        
        {/* ФОНОВАЯ ТЕКСТУРА */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#FFF4E4_3px,transparent_3px)] [background-size:40px_40px]" />

        {/* ТЕКСТОВАЯ ЧАСТЬ (Сделал блок уже через max-w-xl) */}
        <div className="z-10 max-w-xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <FileText className="text-[#FFF4E4]" size={32} />
              <span className="text-[#FFF4E4] font-black uppercase tracking-[0.4em] text-sm italic">
                Архив РГАЭ / Лист 02
              </span>
            </div>

            <h2 className="text-6xl md:text-[5vw] font-black text-[#FFF4E4] uppercase leading-none mb-10 tracking-tighter font-[family-name:var(--font-oswald)]">
              Экономика <br /> 
              <span className="text-[#141414] bg-[#FFF4E4] px-6 inline-block mt-2 transform -rotate-1 shadow-[15px_15px_0px_0px_#141414]">
                Компромисса
              </span>
            </h2>

            {/* САМ КВАДРАТ (Теперь уже) */}
            <div className="bg-[#141414] p-8 md:p-10 shadow-[20px_20px_0px_0px_#FFF4E4] border border-[#FFF4E4]/10">
              <p className="text-[#FFF4E4] text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#68191E] pl-6">
                «Для преодоления продовольственного и финансового кризиса требовалось создать экономику компромисса, главной задачей которой было не ломать старого общественно-экономического уклада, торговли, мелкого предпринимательства, а оживлять торговлю, осторожно и постепенно овладевая ими...»
              </p>
              <div className="mt-8 flex justify-between items-center border-t border-[#FFF4E4]/10 pt-6">
                 <span className="text-[#FFF4E4]/40 text-xs uppercase font-black tracking-widest italic font-mono">Источник: РГАЭ / Документ №305</span>
                 <Plus className="text-[#FFF4E4] opacity-20" size={32} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. ЛЕНИН (Сделал ГИГАНТСКИМ) */}
        <div className="absolute right-0 bottom-0 w-[60%] h-[95vh] flex items-end justify-end pointer-events-none z-0">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="relative h-full w-full flex items-end justify-end"
          >
            {/* Статичный контур сзади */}
            <div className="absolute inset-0 z-0 flex items-end justify-end">
               <div className="w-[105%] h-[105%] border-[6px] border-dashed border-[#FFF4E4]/10 rounded-[100px] absolute -bottom-10 -right-10" />
            </div>

            <div className="relative h-full flex items-end pr-4">
               {/* ЛЕНИН (Размер h-full — на всю высоту контента) */}
               <img 
                 src="/lenin-cutout.png" 
                 alt="Ленин" 
                 className="h-full w-auto object-contain object-bottom grayscale contrast-[1.1] brightness-110"
                 style={{
                   filter: `
                     drop-shadow(6px 6px 0px white) 
                     drop-shadow(-6px -6px 0px white) 
                     drop-shadow(6px -6px 0px white) 
                     drop-shadow(-6px 6px 0px white)
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