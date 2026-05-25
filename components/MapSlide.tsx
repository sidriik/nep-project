"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Info, Globe, ChevronRight } from "lucide-react";

const regions = [
  { 
    id: "rsfsr", 
    name: "РСФСР", 
    title: "Промышленное ядро",
    desc: "Самая крупная республика. Здесь НЭП позволил запустить хозрасчет в трестах и привлечь крупнейшие иностранные концессии. К 1923 году доля частного сектора в рознице достигла 75%.",
    fact: "75% всей промышленности Союза",
    // Реалистичный силуэт основной части СССР (Север, Сибирь, Восток)
    path: "M 25,45 L 60,40 L 90,35 L 140,30 L 180,25 L 195,40 L 190,80 L 170,95 L 150,105 L 120,110 L 90,115 L 60,110 L 35,90 L 20,80 Z"
  },
  { 
    id: "ukr", 
    name: "УССР", 
    title: "Житница и Донбасс",
    desc: "Украинская ССР стала лидером сельхозкооперации. Восстановление Донбасса обеспечило страну углем, необходимым для работы заводов Москвы и Петрограда.",
    fact: "Лидер по темпам смычки города и деревни",
    // Юго-западный выступ (Украина)
    path: "M 20,80 L 35,90 L 45,110 L 40,130 L 20,135 L 10,115 Z"
  },
  { 
    id: "blr", 
    name: "БССР", 
    title: "Западный рубеж",
    desc: "Развитие деревообрабатывающей и легкой промышленности. НЭП позволил быстро восстановить мелкое кустарное производство и наладить торговлю с Польшей.",
    fact: "Рост легкой пром-сти на 40%",
    // Маленький кусочек на западе
    path: "M 15,70 L 30,70 L 35,90 L 20,80 Z"
  },
  { 
    id: "caucasus", 
    name: "ЗСФСР", 
    title: "Нефть и Валюта",
    desc: "Закавказская Федерация (Грузия, Армения, Азербайджан). Главный источник валюты за счет продажи бакинской нефти через иностранные концессии.",
    fact: "Концессии с Shell и Standard Oil",
    // Между морями на юге
    path: "M 45,110 L 65,115 L 60,135 L 40,130 Z"
  },
  { 
    id: "asia", 
    name: "Средняя Азия", 
    title: "Хлопковая база",
    desc: "Туркестанская АССР и республики Востока. НЭП помог восстановить ирригационные системы и вернуть хлопковую независимость стране.",
    fact: "Восстановление ирригации на 90%",
    // Большой южный блок
    path: "M 65,115 L 90,115 L 130,105 L 150,130 L 110,160 L 70,150 Z"
  }
];

export default function MapSlide() {
  const [selected, setSelected] = useState(regions[0]);

  return (
    <section className="min-h-screen w-full bg-[#141414] flex border-b-[16px] border-[#68191E] relative overflow-hidden">
      
      {/* 1. ЛЕВАЯ ПОЛОСА — Тот самый стандарт ширины 100px */}
      <div className="w-20 lg:w-28 bg-[#68191E] flex items-center justify-center border-r-4 border-[#141414] shrink-0 z-30">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic">
          ГЕОГРАФИЯ НЭПА
        </h2>
      </div>

      {/* 2. ОСНОВНОЙ КОНТЕНТ */}
      <div className="flex-1 p-6 lg:p-16 flex flex-col relative">
        
        {/* Декор фона: легкое свечение */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#68191E]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="mb-12 z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-8xl font-black text-[#FFF4E4] uppercase leading-tight tracking-tighter font-[family-name:var(--font-oswald)]"
          >
            География <span className="text-[#68191E]">Союза</span>
          </motion.h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="h-[2px] w-20 bg-[#68191E]" />
             <p className="text-[#FFF4E4]/40 font-bold uppercase tracking-[0.3em] text-xs">Интерактивная карта 1922-1924</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1 z-10">
          
          {/* КАРТА СССР */}
          <div className="lg:col-span-7 relative group">
            <svg viewBox="0 0 200 180" className="w-full h-auto filter drop-shadow-[0_0_15px_rgba(104,25,30,0.5)]">
              {regions.map((reg) => (
                <motion.path
                  key={reg.id}
                  d={reg.path}
                  fill={selected.id === reg.id ? "#68191E" : "#2a2a2a"}
                  stroke={selected.id === reg.id ? "#FFF4E4" : "#444"}
                  strokeWidth="0.8"
                  whileHover={{ 
                    fill: "#68191E", 
                    scale: 1.01,
                    stroke: "#FFF4E4"
                  }}
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setSelected(reg)}
                />
              ))}
            </svg>
            
            {/* Текстовые метки прямо на карте */}
            <div className="absolute bottom-[-20px] left-0 w-full flex flex-wrap gap-3 justify-center">
               {regions.map(reg => (
                 <button 
                  key={reg.id}
                  onClick={() => setSelected(reg)}
                  className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 border-b-2 transition-all ${
                    selected.id === reg.id ? 'text-[#FFF4E4] border-[#68191E]' : 'text-white/20 border-transparent hover:text-white/60'
                  }`}
                 >
                   {reg.name}
                 </button>
               ))}
            </div>
          </div>

          {/* ИНФОРМАЦИОННОЕ ДОСЬЕ */}
          <div className="lg:col-span-5 h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FFF4E4] p-8 lg:p-10 shadow-[20px_20px_0px_0px_#68191E] border-4 border-[#141414] relative"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-black uppercase text-[#141414] leading-none mb-1">{selected.name}</h3>
                    <p className="text-[#68191E] font-bold uppercase text-sm italic">{selected.title}</p>
                  </div>
                  <Globe className="text-[#141414]/10" size={50} />
                </div>

                <p className="text-lg lg:text-xl font-medium leading-relaxed italic text-[#141414]/80 mb-8 border-l-4 border-[#68191E] pl-6">
                  {selected.desc}
                </p>

                <div className="bg-[#141414] p-5">
                   <div className="flex items-center gap-2 mb-1">
                      <div className="w-1 h-3 bg-[#68191E]" />
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Аналитический показатель</span>
                   </div>
                   <p className="text-2xl font-black text-[#68191E] uppercase italic tracking-tighter">
                     {selected.fact}
                   </p>
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-[#141414]/30">
                   <ChevronRight size={14} />
                   <span className="text-[8px] font-black uppercase tracking-[0.4em]">Archive Reference: {selected.id.toUpperCase()}_v.24</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}