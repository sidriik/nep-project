"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Landmark, ShieldCheck, Coins, Zap } from "lucide-react";

export default function FinanceSlide() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Монета будет медленно вращаться при скролле
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={ref} id="finance" className="min-h-screen w-full bg-[#141414] text-[#FFF4E4] flex border-b-[16px] border-[#68191E] relative overflow-hidden">
      
      {/* 1. ЛЕВАЯ ПОЛОСА — Стандарт 100px */}
      <div className="w-20 lg:w-28 bg-[#FFF4E4] flex items-center justify-center border-r-4 border-[#141414] shrink-0 z-30">
        <h2 className="rotate-180 text-[#141414] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic">
          ФИНАНСЫ
        </h2>
      </div>

      <div className="flex-1 p-6 lg:p-20 flex flex-col justify-center relative">
        
        {/* Декоративная сетка на фоне */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
          
          {/* ЛЕВАЯ ЧАСТЬ: АНАЛИТИКА */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Landmark className="text-[#68191E]" size={40} />
                <span className="text-[#68191E] font-black uppercase tracking-[0.4em] text-sm">Реформа Сокольникова / 1922-1924</span>
              </div>

              <h2 className="text-6xl lg:text-8xl font-black uppercase leading-tight tracking-tighter font-[family-name:var(--font-oswald)] mb-10">
                Твердая <br /> <span className="text-[#68191E]">Валюта</span>
              </h2>

              <div className="space-y-8 max-w-2xl">
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic border-l-4 border-[#68191E] pl-8">
                  «Главная цель реформы — остановить гиперинфляцию "совзнаков" и вернуть доверие к рублю через введение червонца, обеспеченного золотом на 25%».
                </p>

                {/* Факты из статьи */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#222] p-6 border-l-4 border-green-600 shadow-xl">
                    <div className="flex items-center gap-2 mb-2 text-green-600">
                      <ShieldCheck size={18} />
                      <span className="font-black uppercase text-[10px]">Стабильность</span>
                    </div>
                    <p className="text-sm font-bold uppercase italic opacity-80">Червонец стал конвертируемой валютой, котировавшейся на биржах Лондона и Рима.</p>
                  </div>
                  <div className="bg-[#222] p-6 border-l-4 border-[#68191E] shadow-xl">
                    <div className="flex items-center gap-2 mb-2 text-[#68191E]">
                      <Zap size={18} />
                      <span className="font-black uppercase text-[10px]">Результат</span>
                    </div>
                    <p className="text-sm font-bold uppercase italic opacity-80">Ликвидация бюджетного дефицита и насыщение внутреннего рынка товарами.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: МОНЕТА */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
             {/* Вращающаяся монета */}
             <motion.div 
               style={{ rotate }}
               className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
             >
                {/* Эффект свечения за монетой */}
                <div className="absolute inset-0 bg-[#68191E]/20 blur-[100px] rounded-full" />
                
                <img 
                  src="/chervonets.png" 
                  alt="Золотой Червонец" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(104,25,30,0.8)]"
                  onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400?text=COIN")}
                />
             </motion.div>

             {/* Техническая плашка под монетой */}
             <motion.div 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               className="mt-10 bg-[#FFF4E4] p-6 text-[#141414] shadow-[15px_15px_0px_0px_#68191E] border-2 border-[#141414] rotate-[-2deg]"
             >
                <div className="flex items-center gap-3 mb-2">
                  <Coins className="text-[#68191E]" size={24} />
                  <h4 className="font-black uppercase text-xl">Спецификация 1923</h4>
                </div>
                <div className="space-y-1 font-bold text-xs uppercase tracking-widest opacity-70">
                   <p>Металл: Золото 900 пробы</p>
                   <p>Вес: 8.6 грамма (7.74г чистого золота)</p>
                   <p>Тираж: 2 751 000 штук</p>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}