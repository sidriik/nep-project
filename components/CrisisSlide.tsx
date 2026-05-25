"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertCircle, TrendingDown, Zap, Ghost } from "lucide-react";

export default function ThirdSlide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const data = [
    { label: "Промышленность", val: "14%", desc: "от уровня 1913 года", icon: <TrendingDown /> },
    { label: "Сельское хозяйство", val: "60%", desc: "сокращение посевов", icon: <AlertCircle /> },
    { label: "Транспорт", val: "0%", desc: "полная остановка путей", icon: <Zap /> },
  ];

  return (
    <section id = "crisis" ref={ref} className="min-h-screen w-full bg-[#141414] text-[#FFF4E4] relative overflow-hidden flex border-b-[16px] border-[#68191E]">
      
      {/* Левая полоса (Индикатор тревоги) */}
      <div className="w-20 lg:w-28 bg-[#68191E] flex items-center justify-center border-r-4 border-[#FFF4E4]/10 shrink-0 z-30">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic">
          КРИЗИС 1920
        </h2>
      </div>

      <div className="flex-1 p-10 lg:p-20 flex flex-col justify-center relative">
        
        {/* Огромная надпись на фоне "BANKRUPTCY" */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
           <span className="text-[30vw] font-black uppercase">КРАХ</span>
        </div>

        <div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ТЕКСТОВАЯ ЧАСТЬ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl lg:text-8xl font-black uppercase leading-none mb-8 tracking-tighter font-[family-name:var(--font-oswald)]">
              ТОЧКА <br /> <span className="text-[#68191E]">НЕВОЗВРАТА</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic opacity-80 border-l-4 border-[#68191E] pl-8 mb-12">
              «Военный коммунизм» выполнил свою роль в войне, но в мирное время он привел страну к полному экономическому и духовному банкротству.
            </p>

            {/* ГАЗЕТНЫЕ ЗАГОЛОВКИ */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-[#FFF4E4] text-[#141414] p-4 font-black uppercase text-xl rotate-[-1deg] shadow-lg">
                Кронштадтский мятеж: власть под угрозой
              </div>
              <div className="bg-[#68191E] text-[#FFF4E4] p-4 font-black uppercase text-xl rotate-[1deg] translate-x-4 shadow-lg">
                Антоновщина: крестьяне не отдадут хлеб
              </div>
              <div className="bg-transparent border-2 border-[#FFF4E4] p-4 font-black uppercase text-xl rotate-[-2deg] shadow-lg">
                Голод в поволжье: 5 миллионов жертв
              </div>
            </div>
          </motion.div>

          {/* ИНТЕРАКТИВНЫЕ ДАТЧИКИ */}
          <div className="grid grid-cols-1 gap-8">
            {data.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.2 }}
                className="bg-[#FFF4E4]/5 border border-[#FFF4E4]/10 p-8 flex items-center justify-between hover:bg-[#68191E] transition-all group"
              >
                <div>
                  <div className="flex items-center gap-3 text-[#68191E] group-hover:text-[#FFF4E4] mb-2">
                    {item.icon}
                    <span className="font-black uppercase text-sm">{item.label}</span>
                  </div>
                  <p className="text-sm opacity-50 group-hover:opacity-100">{item.desc}</p>
                </div>
                <span className="text-6xl font-black font-[family-name:var(--font-oswald)] group-hover:scale-110 transition-transform">
                  {item.val}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}