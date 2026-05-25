"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, AlertCircle, TrendingDown, Users, FileSearch } from "lucide-react";

export default function ReformSlide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const points = [
    { 
      t: "Провал «Военного коммунизма»", 
      d: "Политика, оправдавшая себя в войну, привела Россию к банкротству в мирное время. Военизированная экономика не обеспечивала людей необходимым.",
      icon: <TrendingDown className="text-[#68191E]" />
    },
    { 
      t: "Неэффективность принуждения", 
      d: "Принудительный труд перестал давать результаты. Крестьяне, получившие землю, не имели стимула производить больше минимума.",
      icon: <AlertCircle className="text-[#68191E]" />
    },
    { 
      t: "Разрыв города и деревни", 
      d: "Произошел глубокий экономический и духовный разрыв между рабочими и крестьянами. Смычка была разрушена.",
      icon: <Users className="text-[#68191E]" />
    }
  ];

  const tableRows = [
    { from: "Продразверстка", to: "Продналог" },
    { from: "Трудовая повинность", to: "Денежная оплата" },
    { from: "Запрет торговли", to: "Свободный рынок" },
    { from: "Гос. монополия", to: "Аренда и Концессии" }
  ];

  return (
    <section id = "reform" ref={ref} className="min-h-screen w-full bg-[#FFF4E4] relative overflow-hidden flex border-b-[16px] border-[#141414]">
      
      {/* 1. ЛЕВАЯ ПОЛОСА — Единый стандарт ширины */}
      <div className="w-20 lg:w-28 bg-[#141414] flex items-center justify-center border-r-4 border-[#68191E]/50 shrink-0 z-30">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic opacity-60">
          ПРИЧИНЫ ПЕРЕХОДА
        </h2>
      </div>

      <div className="flex-1 p-10 lg:p-20 relative flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ЛЕВЫЙ БЛОК: Текст и карточки (без визуальных изменений) */}
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}}>
              <h2 className="text-6xl lg:text-7xl font-black text-[#141414] uppercase leading-none mb-12 tracking-tighter font-[family-name:var(--font-oswald)]">
                Почему <br /> <span className="text-[#68191E]">Выхода</span> <br /> не было?
              </h2>
              
              <div className="space-y-8">
                {points.map((p, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="mt-1">{p.icon}</div>
                    <div>
                      <h4 className="text-xl font-black uppercase text-[#141414]">{p.t}</h4>
                      <p className="text-lg font-medium text-[#141414]/70 leading-snug">{p.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ПРАВЫЙ БЛОК: ТАБЛИЦА С ЭФФЕКТАМИ ДОКУМЕНТА */}
          <div className="lg:col-span-6 h-full flex flex-col justify-center">
             <motion.div 
               initial={{ opacity: 0, y: 50 }} 
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               whileHover={{ perspective: 1000, rotateY: -2, rotateX: 1 }} // Эффект наклона папки
               className="bg-[#141414] p-8 lg:p-12 shadow-[25px_25px_0px_0px_#68191E] border border-[#FFF4E4]/10 relative group overflow-hidden"
             >
                {/* Эффект сканирования документа (бегущая полоса) */}
                <motion.div 
                   animate={isInView ? { top: ["-100%", "200%"] } : {}}
                   transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                   className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none z-0"
                />

                <div className="absolute -top-4 -right-4 bg-[#68191E] text-white px-4 py-1 font-black text-xs uppercase italic z-10 shadow-lg">
                  Archive No. 1921-X
                </div>
                
                <h3 className="text-3xl font-black text-[#FFF4E4] uppercase mb-10 italic border-b border-white/20 pb-4 flex justify-between items-center relative z-10">
                  Суть изменений 
                  <FileSearch className="text-[#68191E] opacity-50" size={24} />
                </h3>
                
                <div className="space-y-6 relative z-10">
                  {tableRows.map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="grid grid-cols-11 gap-2 items-center group/row cursor-default"
                    >
                      <div className="col-span-5 text-right transition-all">
                        <span className="text-xs lg:text-sm font-bold text-white/40 uppercase tracking-widest group-hover/row:text-[#68191E] group-hover/row:line-through decoration-2">
                          {item.from}
                        </span>
                      </div>
                      
                      <div className="col-span-1 flex justify-center">
                        <motion.div
                          animate={isInView ? { opacity: [0.2, 1, 0.2] } : {}}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        >
                          <ArrowRight className="text-[#68191E]" size={18}/>
                        </motion.div>
                      </div>

                      <div className="col-span-5 text-left">
                        <span className="text-sm lg:text-lg font-black uppercase text-[#FFF4E4] tracking-tighter group-hover/row:text-white transition-colors group-hover/row:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                          {item.to}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Печать-штамп с анимацией "удара" */}
                <motion.div 
                  initial={{ scale: 3, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 0.8 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 1.5 }}
                  className="mt-12 p-4 border-4 border-double border-[#FFF4E4] text-[#FFF4E4] font-black uppercase text-center text-[10px] tracking-[0.4em] rotate-[-2deg]"
                >
                  МЕРА ВЫНУЖДЕННАЯ И ВО МНОГОМ ИМПРОВИЗАЦИЯ
                </motion.div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}