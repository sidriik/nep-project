"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, BarChart3, UserCircle, Pin, PenTool } from "lucide-react";

const dossiers = [
  { 
    id: "rsfsr", 
    name: "РСФСР", 
    narkom: "А. И. Рыков", 
    portrait: "/narkom_rsfsr.jpg", 
    content: "Индустриальное ядро. Внедрение хозрасчета и концессий. К 1925 году промышленность восстановилась на 75%.", 
    stat: "75% индустрии СССР", 
    compare: "Лидер по привлечению иностранных инвестиций.",
    contrast: "В отличие от аграрных окраин, здесь НЭП столкнулся с острой проблемой безработицы в крупных промышленных центрах."
  },
  { 
    id: "ukr", 
    name: "УССР", 
    narkom: "В. Я. Чубарь", 
    portrait: "/narkom_ukr.jpg", 
    content: "Главный аграрный донор. Донбасс обеспечил 80% угля. Мощная сельхозкооперация победила голод.", 
    stat: "80% добычи угля", 
    compare: "Второе место по объему частного капитала.",
    contrast: "Сравнение: Украина восстановилась быстрее РСФСР благодаря более мощному и гибкому частному крестьянскому сектору."
  },
  { 
    id: "blr", 
    name: "БССР", 
    narkom: "И. А. Адамович", 
    portrait: "/narkom_blr.jpg", 
    content: "Деревообработка и легкая пром-сть. НЭП восстановил артели и торговлю лесом с Европой.", 
    stat: "40% рост легпрома", 
    compare: "Самый высокий процент мелких артелей.",
    contrast: "Контраст: В БССР темпы кооперации были в 1.5 раза выше, чем в среднем по Союзу из-за близости к западной границе."
  },
  { 
    id: "cau", 
    name: "ЗСФСР", 
    narkom: "Г. К. Орджоникидзе", 
    portrait: "/narkom_cau.jpg", 
    content: "Валютный цех. Баку давал нефть за золото. Концессии Shell модернизировали вышки.", 
    stat: "100% экспорта нефти", 
    compare: "Уникальный режим внешней торговли.",
    contrast: "Особенность: Единственный регион, где рыночные отношения напрямую зависели от западных технологий добычи."
  },
  { 
    id: "asia", 
    name: "Ср. Азия", 
    narkom: "Ф. Ходжаев", 
    portrait: "/narkom_asia.jpg", 
    content: "Хлопковый суверенитет. Восстановление ирригации. Льготы дехканам за выращивание сырья.", 
    stat: "Рост хлопка в 3.5 раза", 
    compare: "Медленная смычка из-за традиционного уклада.",
    contrast: "В сравнении с центром: НЭП здесь тормозился из-за пережитков феодализма и слабого развития железных дорог."
  }
];

export default function ArchivesTable() {
  const [openId, setOpenId] = useState<string | null>(null);
  const current = dossiers.find(d => d.id === openId);

  return (
    <section id="archives" className="min-h-screen w-full bg-[#1e231f] flex border-b-[16px] border-[#141414] relative overflow-hidden">
      {/* ЭФФЕКТ ЗЕЛЕНОГО СУКНА СТОЛА */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)] pointer-events-none" />

      {/* Левая полоса */}
      <div className="w-20 lg:w-28 bg-[#141414] flex items-center justify-center border-r-4 border-[#68191E]/50 shrink-0 z-30 relative">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic opacity-60">
          СОВНАРКОМ
        </h2>
      </div>

      <div className="flex-1 p-8 lg:p-16 relative z-10">
        <div className="mb-12">
            <h2 className="text-5xl lg:text-7xl font-black text-[#FFF4E4] uppercase tracking-tighter font-[family-name:var(--font-oswald)] drop-shadow-lg">
                Рабочий стол <span className="text-[#68191E]">СССР</span>
            </h2>
            <div className="h-1 w-32 bg-[#68191E] mt-4" />
        </div>

        {/* ДЕКОРАТИВНЫЕ ЭЛЕМЕНТЫ */}
        <div className="absolute top-20 right-20 opacity-10 pointer-events-none rotate-12">
            <img src="/posters_6.jpg" className="w-40 grayscale" alt="" />
        </div>

        {/* ПАПКИ */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-12 mt-10">
          {dossiers.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
              onClick={() => setOpenId(d.id)}
              className="cursor-pointer group relative"
            >
              <div className="w-full aspect-[3/4] bg-[#c4a484] border-l-[10px] border-[#8b7355] shadow-[10px_10px_20px_rgba(0,0,0,0.5)] flex flex-col justify-between p-4 transition-colors group-hover:bg-[#d4b494]">
                <div className="border-b-2 border-[#8b7355]/30 pb-2">
                    <span className="text-[10px] font-black uppercase text-[#4a3f35]">Дело №{200 + i}</span>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="text-2xl lg:text-3xl font-black uppercase text-[#2a251f] text-center leading-none">
                        {d.name}
                    </h4>
                    <div className="w-12 h-1 bg-[#68191E] mt-2 opacity-50" />
                </div>
                <div className="flex justify-between items-end">
                    <Pin size={16} className="text-[#8b7355] -rotate-45" />
                    <span className="text-[8px] font-bold text-[#4a3f35] uppercase">1922-1926</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* МОДАЛЬНОЕ ОКНО */}
        <AnimatePresence>
          {openId && current && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            >
              <motion.div 
                initial={{ scale: 0.9, rotate: -2 }} animate={{ scale: 1, rotate: 0 }}
                className="bg-[#FFF4E4] w-full max-w-5xl border-[12px] border-[#68191E] shadow-[0_0_100px_rgba(0,0,0,0.8)] relative flex flex-col lg:flex-row overflow-hidden"
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

                <button onClick={() => setOpenId(null)} className="absolute top-4 right-4 z-50 p-2 bg-[#141414] text-white hover:bg-[#68191E] transition-colors">
                  <X size={32} />
                </button>

                <div className="flex-1 p-8 lg:p-12 border-b-8 lg:border-b-0 lg:border-r-8 border-[#141414]/10 overflow-y-auto">
                   <div className="flex items-center gap-4 mb-8">
                      <FileText size={40} className="text-[#68191E]" />
                      <h3 className="text-5xl font-black uppercase text-[#141414] tracking-tighter">{current.name}</h3>
                   </div>
                   
                   <div className="space-y-8">
                      <div className="bg-white/50 p-6 border-l-8 border-[#68191E]">
                        <span className="text-[10px] font-black uppercase text-[#68191E] tracking-widest block mb-2 underline">Краткая сводка:</span>
                        <p className="text-xl lg:text-2xl font-medium italic leading-relaxed text-[#141414]">«{current.content}»</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#141414] p-6 text-white shadow-xl">
                           <BarChart3 className="text-[#68191E] mb-2" size={24} />
                           <span className="text-[10px] uppercase font-black opacity-40 block mb-1 text-white">Статистика</span>
                           <p className="text-2xl font-black text-[#68191E] uppercase">{current.stat}</p>
                        </div>
                        
                        {/* ВОТ ЭТОТ НОВЫЙ БЛОК ДЛЯ КРИТЕРИЯ №5 */}
                        <div className="bg-white p-6 border-2 border-[#141414] shadow-md relative overflow-hidden">
                           <div className="flex items-center gap-2 mb-1">
                              <div className="w-1 h-3 bg-[#68191E]" />
                              <span className="text-[10px] uppercase font-black text-[#68191E]">Региональный контраст (анализ)</span>
                           </div>
                           <p className="text-sm font-bold italic leading-tight text-[#141414]">{current.contrast}</p>
                        </div>
                   </div>
                   </div>
                </div>

                <div className="w-full lg:w-1/3 bg-[#141414] p-8 lg:p-12 flex flex-col items-center justify-center relative">
                   <div className="relative z-10 text-center">
                      <div className="border-8 border-white p-2 rotate-3 shadow-2xl bg-white mb-6 relative">
                         <img 
                            src={current.portrait} 
                            alt={current.narkom} 
                            className="w-48 h-64 object-cover grayscale contrast-125"
                            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/200x300?text=FOTO")}
                         />
                      </div>
                      <h4 className="text-[#FFF4E4] font-black uppercase text-xl leading-none mb-1">{current.narkom}</h4>
                      <span className="text-[9px] text-[#68191E] font-black uppercase tracking-[0.3em]">Народный Комиссар</span>
                   </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}