"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CrisisSlide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} id="crisis" className="min-h-screen w-full bg-[#141414] flex border-b-[8px] md:border-b-[16px] border-[#68191E] relative overflow-hidden">
      
      <div className="w-10 md:w-20 lg:w-28 bg-[#68191E] flex items-center justify-center border-r-2 md:border-r-4 border-[#141414] shrink-0 z-30 relative">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-xl md:text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic opacity-60 whitespace-nowrap">
          ТОЧКА НЕВОЗВРАТА
        </h2>
      </div>

      <div className="flex-1 p-6 md:p-10 lg:p-20 flex flex-col justify-center relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
           <span className="text-[40vw] font-black uppercase">КРАХ</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="z-10 max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-[#FFF4E4] uppercase leading-tight mb-8">
              Кризис <span className="text-[#68191E]">1920</span> года
            </h2>
            <p className="text-base md:text-2xl font-medium leading-relaxed italic text-[#FFF4E4]/80 border-l-4 border-[#68191E] pl-4 md:pl-8 mb-10">
              «Военный коммунизм» привел страну к полному экономическому и духовному банкротству.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
               {["Голод в Поволжье", "Восстание в Кронштадте", "Инфляция 1 000 000%", "Остановка заводов"].map(txt => (
                 <div key={txt} className="bg-[#FFF4E4] text-[#141414] p-3 md:p-4 font-black uppercase text-xs md:text-xl shadow-lg">
                   {txt}
                 </div>
               ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}