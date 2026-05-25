"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, TrendingDown, ShieldAlert, Award, ArrowRight } from "lucide-react";

export default function ConsequencesSlide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Варианты анимации для появления списка
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const achievements = [
    { t: "Экономический рывок", d: "К 1925–1926 гг. промышленность достигла уровня 1913 года." },
    { t: "Аграрное возрождение", d: "Сельское хозяйство выросло на 20%, полностью ликвидирован массовый голод." },
    { t: "Валютный триумф", d: "Золотой червонец вошел в число самых стабильных валют мира." }
  ];

  const failures = [
    { t: "Социальный раскол", d: "Появление 'нэпманов' вызвало острое недовольство рабочих и бедноты." },
    { t: "Технологический лаг", d: "Мелкий частный сектор не мог обеспечить индустриализацию страны." },
    { t: "Политический тупик", d: "Рыночная свобода вступила в конфликт с жесткой диктатурой партии." }
  ];

  return (
    <section id = "results" ref={ref} className="min-h-screen w-full bg-[#68191E] flex border-b-[16px] border-[#141414] relative overflow-hidden">
      
      {/* 1. ЛЕВАЯ ПОЛОСА — Тот самый стандарт 100px */}
      <div className="w-20 lg:w-28 bg-[#141414] flex items-center justify-center border-r-4 border-[#FFF4E4]/10 shrink-0 z-30">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic opacity-60">
          ИТОГИ ИССЛЕДОВАНИЯ
        </h2>
      </div>

      {/* 2. КОНТЕНТ */}
      <div className="flex-1 p-6 lg:p-20 flex flex-col justify-center relative">
        
        {/* Декор фона */}
        <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
          <Award size={400} className="text-[#FFF4E4]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <h2 className="text-6xl lg:text-8xl font-black text-[#FFF4E4] uppercase leading-none tracking-tighter font-[family-name:var(--font-oswald)]">
            Баланс <br /> <span className="text-[#141414]">Эпохи</span>
          </h2>
          <div className="h-2 w-32 bg-[#141414] mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 z-10">
          
          {/* БЛОК ПОЗИТИВА */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#FFF4E4] p-8 lg:p-12 border-4 border-[#141414] shadow-[15px_15px_0px_0px_#141414] hover:shadow-[20px_20px_0px_0px_#141414] transition-all"
          >
            <div className="flex items-center gap-4 mb-8 border-b-4 border-[#68191E] pb-4">
              <TrendingUp className="text-green-700" size={40} />
              <h3 className="text-3xl font-black uppercase text-[#141414]">Достижения</h3>
            </div>
            
            <ul className="space-y-6">
              {achievements.map((item, i) => (
                <motion.li key={i} variants={itemVariants} className="flex gap-4">
                   <ArrowRight className="text-[#68191E] shrink-0 mt-1" size={20} />
                   <div>
                     <h4 className="text-lg font-black uppercase leading-none mb-1">{item.t}</h4>
                     <p className="text-sm font-bold opacity-70 italic">{item.d}</p>
                   </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* БЛОК НЕГАТИВА */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#141414] p-8 lg:p-12 border-4 border-[#FFF4E4] shadow-[15px_15px_0px_0px_#68191E] hover:shadow-[20px_20px_0px_0px_#68191E] transition-all"
          >
            <div className="flex items-center gap-4 mb-8 border-b-4 border-[#68191E] pb-4 text-[#FFF4E4]">
              <TrendingDown className="text-[#68191E]" size={40} />
              <h3 className="text-3xl font-black uppercase">Противоречия</h3>
            </div>
            
            <ul className="space-y-6">
              {failures.map((item, i) => (
                <motion.li key={i} variants={itemVariants} className="flex gap-4 text-[#FFF4E4]">
                   <ShieldAlert className="text-[#68191E] shrink-0 mt-1" size={20} />
                   <div>
                     <h4 className="text-lg font-black uppercase leading-none mb-1">{item.t}</h4>
                     <p className="text-sm font-bold opacity-60 italic">{item.d}</p>
                   </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* ФИНАЛЬНЫЙ ВЫВОД (РЕЗУЛЬТАТ ИССЛЕДОВАНИЯ) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 p-8 bg-[#FFF4E4]/10 border-2 border-dashed border-[#FFF4E4]/30 text-[#FFF4E4] text-center"
        >
          <p className="text-xl lg:text-2xl font-black uppercase italic tracking-widest">
            Итог: НЭП спас страну от гибели, но пал жертвой <br /> 
            политической борьбы и курса на «Великий перелом» 1928 года.
          </p>
        </motion.div>

      </div>
    </section>
  );
}