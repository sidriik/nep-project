"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, RotateCcw, Skull, Flame, Coins, Info, Ghost } from "lucide-react";

const questions = [
  {
    text: "Бюджет страны равен нулю, в кармане только семечки. Что делаем?",
    options: [
      { text: "Разрешаем продавать всё всем. Пусть крутятся как могут.", p: { bukharin: 2, lenin: 1 } },
      { text: "Отбираем хлеб силой. У нас революция или где?!", p: { trotsky: 2, stalin: 1 } },
      { text: "Срочно ищем золото и привязываем к нему рубль. Магия!", p: { sokolnikov: 3 } }
    ]
  },
  {
    text: "НЭПман в цилиндре купил последнюю бутылку шампанского в Москве. Твоя реакция?",
    options: [
      { text: "Красиво жить не запретишь. Главное — налоги заплочены.", p: { bukharin: 2 } },
      { text: "Записываю его фамилию в блокнотик. Пригодится в 1937-м.", p: { stalin: 3 } },
      { text: "Это оскорбление пролетариата! Конфисковать и выпить вместе.", p: { trotsky: 2 } }
    ]
  },
  {
    text: "Американский миллионер хочет построить у нас завод карандашей. Согласен?",
    options: [
      { text: "Конечно! Капиталисты сами продадут нам веревку...", p: { lenin: 3, sokolnikov: 1 } },
      { text: "Никаких концессий! Только наш, сермяжный, красный карандаш.", p: { trotsky: 2 } },
      { text: "Пусть строит. А охранять завод будут мои ребята.", p: { stalin: 2 } }
    ]
  },
  {
    text: "Твой стиль руководства — это...",
    options: [
      { text: "Переобуться в воздухе, если это спасет власть.", p: { lenin: 3 } },
      { text: "Завалить всех графиками и цифрами. Я умный.", p: { sokolnikov: 2, bukharin: 1 } },
      { text: "Кричать с броневика, пока не охрипнешь.", p: { trotsky: 3 } }
    ]
  },
  {
    text: "Вечеринка в Кремле. Что ты принесешь?",
    options: [
      { text: "Отчет о закупке импортных станков.", p: { sokolnikov: 2 } },
      { text: "Стихи и надежду на светлое будущее.", p: { bukharin: 2 } },
      { text: "Трубку и очень тяжелый взгляд.", p: { stalin: 2 } }
    ]
  }
];

const profiles: any = {
  lenin: { 
    name: "В.И. Ленин", 
    role: "Мастер Переобувания", 
    desc: "Ты — легенда тактики. Можешь вчера топить за коммунизм, а сегодня разрешить частные лавки и глазом не моргнуть. Главное — выжить!",
    img: "/quiz_lenin.png",
    color: "#68191E"
  },
  stalin: { 
    name: "И.В. Сталин", 
    role: "Скрытый Игрок", 
    desc: "Пока остальные спорят, ты тихо заполняешь анкеты и ждешь. Твое время настанет в 1928-м, и тогда всем мало не покажется.", 
    img: "/quiz_stalin.jpg",
    color: "#141414"
  },
  trotsky: { 
    name: "Л.Д. Троцкий", 
    role: "Огненный Демон", 
    desc: "Для тебя НЭП — это скучно. Тебе подавай мировые пожары, бронепоезда и трудовые армии. Слишком много энергии для мирного времени!", 
    img: "/quiz_trorzkii.jpg",
    color: "#FF4500"
  },
  bukharin: { 
    name: "Н.И. Бухарин", 
    role: "Крестьянский Бро", 
    desc: "Ты — душка. Веришь в мир и любовь (между мужиком и партией). Твой девиз: 'Обогащайтесь!', но Сталину это не понравится.", 
    img: "/quiz_buh.jpg",
    color: "#D4AF37"
  },
  sokolnikov: { 
    name: "Г.Я. Сокольников", 
    role: "Крипто-бро 1922", 
    desc: "Тебе вообще всё равно на политику. Ты веришь в золото. Пока все митингуют, ты считаешь червонцы. Единственный адекватный в этой компании.", 
    img: "/quiz_sok.jpg",
    color: "#008080"
  }
};

export default function SecretQuiz({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [userScores, setUserScores] = useState({ lenin: 0, stalin: 0, trotsky: 0, bukharin: 0, sokolnikov: 0 });
  const [finished, setFinished] = useState(false);

  const handleAnswer = (p: any) => {
    const nextScores = { ...userScores };
    Object.keys(p).forEach(k => { (nextScores as any)[k] += p[k]; });
    setUserScores(nextScores);
    if (step < questions.length - 1) setStep(step + 1);
    else setFinished(true);
  };

  const winner = Object.keys(userScores).reduce((a, b) => (userScores as any)[a] > (userScores as any)[b] ? a : b);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.9 }} 
          className="fixed inset-0 z-[2000] bg-[#141414] flex items-center justify-center p-4"
        >
          {/* Глитч-эффект на фоне */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUic9V94r9n9B/giphy.gif')]" />

          <motion.div 
            layoutId="quiz-box"
            className="w-full max-w-2xl bg-[#FFF4E4] border-[10px] border-[#141414] shadow-[20px_20px_0px_0px_#68191E] p-8 lg:p-12 relative overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-[#141414] hover:rotate-90 transition-all"><X size={32}/></button>
            
            {!finished ? (
              <motion.div key="q" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <div className="flex items-center gap-2 mb-8">
                  <Ghost className="text-[#68191E] animate-bounce" size={20} />
                  <span className="font-black uppercase text-[10px] tracking-widest bg-[#141414] text-white px-2 py-0.5">Внеочередная проверка</span>
                </div>
                
                <h3 className="text-2xl md:text-4xl font-black uppercase italic text-[#141414] mb-10 leading-tight">
                  {questions[step].text}
                </h3>
                
                <div className="grid gap-3">
                  {questions[step].options.map((o, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleAnswer(o.p)} 
                      className="text-left p-5 border-2 border-[#141414] hover:bg-[#68191E] hover:text-white hover:border-[#68191E] transition-all font-bold uppercase text-xs flex justify-between items-center group"
                    >
                      {o.text} <ChevronRight size={16} className="opacity-0 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-[#68191E] blur-2xl opacity-30 animate-pulse" />
                  <img src={profiles[winner].img} className="w-full h-full object-cover rounded-full border-4 border-[#141414] grayscale hover:grayscale-0 transition-all" alt="winner" />
                </div>
                
                <p className="text-[10px] font-black uppercase text-[#68191E] mb-2 tracking-[0.4em]">Твой диагноз:</p>
                <h1 className="text-5xl font-black uppercase italic text-[#141414] mb-2">{profiles[winner].name}</h1>
                <div className="bg-[#141414] text-[#FFF4E4] inline-block px-3 py-1 font-black uppercase text-[10px] mb-6">
                  {profiles[winner].role}
                </div>
                
                <p className="text-sm font-bold italic text-[#141414]/70 mb-8 border-l-4 border-[#68191E] pl-4 max-w-sm mx-auto text-left">
                  {profiles[winner].desc}
                </p>
                
                <button 
                  onClick={() => { setStep(0); setFinished(false); setUserScores({ lenin: 0, stalin: 0, trotsky: 0, bukharin: 0, sokolnikov: 0 }); }}
                  className="text-[10px] font-black uppercase border-b-2 border-[#141414] hover:text-[#68191E] hover:border-[#68191E] transition-all"
                >
                  Пересмотреть дело
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}