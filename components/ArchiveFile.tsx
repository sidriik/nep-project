"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileDown, BookText, Link2, Quote } from "lucide-react";

export default function DocumentsArchive() {
  const bibliography = [
    "Мягкова Е.М., Репников А.В. Новая экономическая политика в документах РГАЭ. — М.: Кучково поле, 2021.",
    "Ленин В.И. Доклад о замене разверстки натуральным налогом. ПСС, т. 43.",
    "Голанд Ю.М. Кризисы, разрушившие НЭП. Валютное регулирование. — М.: Начала, 1998.",
    "Цакунов С.В. В лабиринте доктрины. Из опыта разработки экономического курса в 1920-е годы.",
    "Данилов В.П. Кооперативно-колхозное строительство в СССР. 1923–1927. — М.: Наука, 1991."
  ];

  return (
    <section id = "sources" className="min-h-screen w-full bg-[#141414] flex border-b-[16px] border-[#68191E] relative">
      <div className="w-20 lg:w-28 bg-[#FFF4E4] flex items-center justify-center border-r-4 border-[#141414] shrink-0 z-30">
        <h2 className="rotate-180 text-[#141414] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic">ИССЛЕДОВАНИЕ</h2>
      </div>

      <div className="flex-1 p-6 lg:p-20 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* ЛЕВАЯ ЧАСТЬ: СКАЧАТЬ РАБОТУ */}
          <div className="space-y-10">
            <h2 className="text-5xl lg:text-7xl font-black text-[#FFF4E4] uppercase leading-tight tracking-tighter font-[family-name:var(--font-oswald)]">
              Полный текст <br /> <span className="text-[#68191E]">Исследования</span>
            </h2>
            
            <p className="text-[#FFF4E4]/70 text-xl italic border-l-4 border-[#68191E] pl-6 max-w-lg">
              «В данной работе проведен комплексный анализ архивных документов и периодической печати 1920-х годов, раскрывающий противоречия перехода к рынку».
            </p>

            {/* КНОПКА СКАЧИВАНИЯ */}
            <motion.a
              href="/research_nep.docx" // Положи свой Word файл в папку public с этим именем!
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-6 bg-[#68191E] text-[#FFF4E4] p-8 border-4 border-[#FFF4E4] shadow-[15px_15px_0px_0px_rgba(255,255,255,0.1)] group transition-all"
            >
              <FileDown size={50} className="group-hover:animate-bounce" />
              <div>
                <span className="block font-black text-2xl uppercase tracking-tighter">Скачать .DOCX</span>
                <span className="text-xs font-bold opacity-50 uppercase tracking-widest">Полная версия исследования </span>
              </div>
            </motion.a>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: СПИСОК ЛИТЕРАТУРЫ */}
          <div className="bg-[#FFF4E4] p-10 lg:p-14 shadow-[20px_20px_0px_0px_#68191E] relative">
            <div className="flex items-center gap-4 mb-10 border-b-4 border-[#141414] pb-4">
               <BookText size={32} className="text-[#68191E]" />
               <h3 className="text-3xl font-black uppercase text-[#141414]">Библиография</h3>
            </div>
            
            <ul className="space-y-6">
              {bibliography.map((item, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <span className="text-[#68191E] font-black italic">0{i+1}.</span>
                  <p className="text-[#141414] font-bold uppercase text-sm leading-tight group-hover:text-[#68191E] transition-colors">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-[#141414]/10">
               <div className="flex items-center gap-2 mb-2">
                 <Link2 size={16} className="text-[#68191E]" />
                 <span className="text-[10px] font-black uppercase opacity-40">Цифровые архивы:</span>
               </div>
               <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase underline decoration-[#68191E] decoration-2">
                  <a href="https://rgae.ru" target="_blank">РГАЭ.РФ</a>
                  <a href="https://histrf.ru" target="_blank">ИСТОРИЯ.РФ</a>
                  <a href="https://archives.gov.ru" target="_blank">АРХИВЫ РОССИИ</a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}