"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Camera, Hash } from "lucide-react";

const gallery = [
  { 
    img: "/posters_2.jpg", 
    title: "Идеология перехода", 
    meta: "1922 год",
    desc: "Лозунг «Из России нэповской...» — попытка Ленина доказать, что временный возврат к рынку не означает отказ от идей революции." 
  },
  { 
    img: "/poster_bread.jpg", 
    title: "Реклама хлеба", 
    meta: "Моссельпром / 1923",
    desc: "Родченко и Маяковский создавали шедевры для госпредприятий, которые при НЭПе начали конкурировать с частным сектором." 
  },
  { 
    img: "/poster_gum.jpg", 
    title: "Советский люкс", 
    meta: "ГУМ / 1923",
    desc: "Реклама часов 'Мозер'. НЭП вернул в города элементы красивой жизни, что вызывало споры среди радикальных коммунистов." 
  },
  { 
    img: "/poster_plane.jpg", 
    title: "Добролет", 
    meta: "Акционерный капитал",
    desc: "При НЭПе граждане могли покупать акции. 'Один рубль золотом делает каждого акционером' — основа гражданской авиации СССР." 
  },
  { 
    img: "/poster_woman.jpg", 
    title: "Ликбез", 
    meta: "1923 год",
    desc: "Экономике НЭПа требовались грамотные кадры. Ликвидация безграмотности была инвестицией в новую рабочую силу." 
  },
  { 
    img: "/posters_6.jpg", 
    title: "Золотой червонец", 
    meta: "Гознак / 1922",
    desc: "Главный символ успеха реформ. Твердая валюта позволила остановить хаос и запустить торговлю между городом и деревней." 
  },
  { 
    img: "/poster_shoes.jpg", 
    title: "Резинотрест", 
    meta: "Стиль Конструктивизм",
    desc: "Знаменитая реклама галош. Попытка через современный дизайн наладить 'смычку' и продать городские товары крестьянам." 
  },
  { 
    img: "/poster_film.jpg", 
    title: "Культурный взрыв", 
    meta: "Киноплакат / 1925",
    desc: "Эпоха НЭПа — золотой век кино. В условиях смешанной экономики искусство пользовалось относительной свободой." 
  },
  { 
    img: "/poster_crab.jpg", 
    title: "Главрыба", 
    meta: "Маркетинг 20-х",
    desc: "При НЭПе закладывались основы советского продвижения товаров, чтобы насытить рынок продуктами после лет голода." 
  },
  { 
    img: "/posters_1.jpg", 
    title: "Сатира на нэпманов", 
    meta: "Журнал 'Крокодил'",
    desc: "Оборотная сторона: появление богатых перекупщиков высмеивалось, готовя почву для свертывания политики к 1928 году." 
  }
];

export default function GallerySlide() {
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="h-screen w-full bg-[#141414] flex border-b-[16px] border-[#68191E] relative overflow-hidden">
      
      {/* Левая полоса (одинаковая ширина 100px) */}
      <div className="w-20 lg:w-28 bg-[#68191E] flex items-center justify-center border-r-4 border-[#141414] shrink-0 z-30">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic opacity-60">
          ФОТОХРОНИКА
        </h2>
      </div>

      <div className="flex-1 flex flex-col p-6 lg:p-10 relative overflow-hidden">
        
        {/* Заголовок слайда (сделали компактнее) */}
        <div className="flex justify-between items-end mb-6 border-b-2 border-[#68191E] pb-3">
          <div>
            <span className="text-[#68191E] font-black uppercase text-[10px] tracking-[0.3em]">Archive Report</span>
            <h2 className="text-3xl lg:text-5xl font-black uppercase text-[#FFF4E4] tracking-tighter font-[family-name:var(--font-oswald)]">Визуальный архив</h2>
          </div>
          <div className="flex gap-2 mb-1">
            <button onClick={() => setIndex((index - 1 + gallery.length) % gallery.length)} className="p-2 border border-white/20 hover:bg-[#68191E] transition-all text-white">
              <ArrowLeft size={20}/>
            </button>
            <button onClick={() => setIndex((index + 1) % gallery.length)} className="p-2 border border-white/20 hover:bg-[#68191E] transition-all text-white">
              <ArrowRight size={20}/>
            </button>
          </div>
        </div>

        {/* Контент: картинка и текст (ограничили высоту) */}
        <div className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0">
          
          {/* ФОТО (ограничили через max-h) */}
          <div className="flex-[1.5] relative bg-black/20 border-2 border-[#333] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={gallery[index].img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-h-[55vh] lg:max-h-[65vh] w-auto object-contain"
                alt="Archive poster"
              />
            </AnimatePresence>
            <div className="absolute top-2 left-2 bg-black/60 text-[#68191E] px-2 py-1 font-black text-[10px] flex items-center gap-2">
               <Hash size={10} /> {index + 1} / {gallery.length}
            </div>
          </div>

          {/* ТЕКСТ (справа, компактный) */}
          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="inline-block bg-[#68191E] text-white px-3 py-1 font-black uppercase text-[10px] tracking-widest">
                   {gallery[index].meta}
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-[#FFF4E4] uppercase leading-none italic">
                  {gallery[index].title}
                </h3>
                <div className="h-1 w-16 bg-[#68191E]" />
                <p className="text-base lg:text-lg font-medium italic text-[#FFF4E4]/70 leading-snug">
                  {gallery[index].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

    </section>
  );
}