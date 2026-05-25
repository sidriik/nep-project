"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ArrowRight, Bookmark, Quote, Zap } from "lucide-react";

const links = [
  { name: "Старт", id: "hero" },
  { name: "Кризис 1920", id: "crisis" },
  { name: "Ленин", id: "lenin" },
  { name: "Механика НЭП", id: "reform" },
  { name: "Регионы", id: "archives" },
  { name: "Червонец", id: "finance" },
  { name: "Ножницы цен", id: "scissors" },
  { name: "Итоги", id: "results" },
  { name: "Литература", id: "sources" },
  { name: "Галерея", id: "gallery" },
];

const facts = [
  "В начале 1921 года буханка хлеба стоила около 1 миллиона рублей — деньги возили в мешках и тачках.",
  "Золотой червонец «Сеятель» имел такой высокий авторитет, что его принимали к оплате на биржах Лондона и Берлина.",
  "НЭПманы считались «лишенцами»: у них были деньги, но не было права голоса и права на бесплатную медицину.",
  "Американский промышленник Арманд Хаммер получил первую концессию в СССР — он открыл завод по производству карандашей.",
  "В разгар НЭПа в Москве работало более 300 частных ресторанов и казино, пока деревня переходила на продналог.",
  "Термин «Ножницы цен» придумал Лев Троцкий, чтобы описать разрыв между дорогими сапогами и дешевым зерном.",
  "К 1925 году в СССР было восстановлено более 80% посевных площадей, заброшенных за годы Гражданской войны.",
  "На 1 золотой червонец в 1924 году можно было купить около 100 килограммов отборной говядины.",
  "В эпоху НЭПа возник «хозрасчет» — предприятиям разрешили оставлять часть прибыли себе для развития.",
  "Официально НЭП не отменяли до 1931 года, хотя фактически его свернули в пользу пятилеток уже в 1928-м."
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [randomFact, setFact] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setFact(facts[Math.floor(Math.random() * facts.length)]);
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Маленькая аккуратная кнопка-бургер */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-[150] bg-[#141414] text-[#FFF4E4] p-3 border-2 border-[#68191E] hover:bg-[#68191E] transition-all flex items-center gap-2 group shadow-lg"
      >
        <Menu size={20} />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] hidden md:block">Навигация</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Затемнение фона при клике */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[190] bg-black/40 backdrop-blur-sm"
            />

            {/* САМО МЕНЮ (БОКОВАЯ ПАНЕЛЬ) */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-full max-w-[350px] z-[200] bg-[#141414] border-l-8 border-[#68191E] p-8 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-between items-center mb-10">
                <Bookmark className="text-[#68191E]" size={24} />
                <button onClick={() => setIsOpen(false)} className="text-[#FFF4E4]/50 hover:text-white transition-colors">
                  <X size={32} />
                </button>
              </div>

              {/* Прогресс-бар скролла прямо в меню */}
              <div className="w-full h-1 bg-white/10 mb-8 relative">
                 <motion.div 
                  style={{ scaleX: scrollYProgress }} 
                  className="absolute inset-0 bg-[#68191E] origin-left"
                 />
                 <span className="absolute -top-5 left-0 text-[8px] font-black text-[#68191E] uppercase tracking-widest">Прогресс чтения</span>
              </div>

              <nav className="flex-1 overflow-y-auto space-y-1 custom-scrollbar">
                {links.map((link, i) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="w-full text-left py-3 px-4 group flex items-center justify-between border-b border-white/5 hover:bg-white/5 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[#68191E] font-mono text-xs">0{i}</span>
                      <span className="text-[#FFF4E4] text-lg font-bold uppercase tracking-tight group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <ChevronSmallIcon />
                  </button>
                ))}
              </nav>

              {/* ПРИКОЛЮХА: Блок с фактом */}
              <div className="mt-8 bg-[#68191E]/20 border-2 border-[#68191E] p-6 relative group">
                <motion.button 
                    whileTap={{ rotate: 180 }}
                    onClick={() => setFact(facts[Math.floor(Math.random() * facts.length)])}
                    className="absolute -top-4 -right-2 bg-[#68191E] text-white p-2 rounded-full shadow-lg hover:scale-110 transition-all"
                    title="Узнать другой факт"
                >
                    <motion.div animate={{ rotate: isOpen ? 0 : 360 }}>
                    <Zap size={14} fill="currentColor" />
                    </motion.div>
                </motion.button>

                <Quote className="absolute -top-3 -left-3 text-[#68191E] bg-[#141414] rounded-full p-1" size={24} />
                
                <AnimatePresence mode="wait">
                    <motion.p 
                    key={randomFact}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-[#FFF4E4] text-[11px] font-medium leading-relaxed italic"
                    >
                    {randomFact}
                    </motion.p>
                </AnimatePresence>
                
                <span className="block mt-3 text-[8px] font-black text-[#68191E] uppercase tracking-[0.3em]">
                    Сводка из архива
                </span>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function ChevronSmallIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#68191E] opacity-0 group-hover:opacity-100 transition-opacity">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}