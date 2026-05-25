"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Plus } from "lucide-react";

export default function SecondSlide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="min-h-screen w-full bg-[#68191E] relative overflow-hidden flex border-b-[8px] md:border-b-[16px] border-[#141414]">
      
      {/* ЛЕВАЯ ПОЛОСА — на мобилках уже (12), на ноуте шире (28) */}
      <div className="w-12 md:w-20 lg:w-28 bg-[#141414] flex items-center justify-center border-r-2 md:border-r-4 border-[#FFF4E4]/10 shrink-0 z-30">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-2xl md:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic opacity-60">
          МАРТ 1921
        </h2>
      </div>

      <div className="flex-1 relative flex flex-col justify-center px-6 md:px-20 z-10 py-20">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#FFF4E4_3px,transparent_3px)] [background-size:30px_30px]" />

        <div className="z-20 w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-[#FFF4E4]" size={20} />
              <span className="text-[#FFF4E4] font-black uppercase tracking-[0.2em] text-[10px] md:text-sm italic">Архив / Лист 02</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-[#FFF4E4] uppercase leading-tight mb-6 md:mb-10 font-[family-name:var(--font-oswald)]">
              Экономика <br /> 
              <span className="text-[#141414] bg-[#FFF4E4] px-2 md:px-4 inline-block transform -rotate-1 shadow-[5px_5px_0px_0px_#141414]">Компромисса</span>
            </h2>

            <div className="bg-[#141414] p-6 md:p-10 shadow-[15px_15px_0px_0px_#FFF4E4] border border-[#FFF4E4]/10 max-w-lg">
              <p className="text-[#FFF4E4] text-sm md:text-xl font-medium leading-relaxed italic border-l-4 border-[#68191E] pl-4 md:pl-6">
                «Для преодоления продовольственного и финансового кризиса требовалось создать экономику компромисса...»
              </p>
            </div>
          </motion.div>
        </div>

        {/* ГИГАНТСКИЙ ЛЕНИН — на мобилках становится полупрозрачной подложкой */}
        <div className="absolute right-0 bottom-0 w-[80%] md:w-[55%] h-[50vh] md:h-[90vh] flex items-end justify-end pointer-events-none z-0 opacity-40 md:opacity-100">
           <img 
             src="/lenin-cutout.png" 
             className="h-full w-auto object-contain object-bottom grayscale contrast-[1.1]"
             style={{ filter: "drop-shadow(4px 4px 0 white) drop-shadow(-4px -4px 0 white)" }}
           />
        </div>
      </div>
    </section>
  );
}