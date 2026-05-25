"use client";
import React from "react";
import { motion } from "framer-motion";
import { Scale, TrendingUp, TrendingDown } from "lucide-react";

export default function ConsequencesSlide() {
  return (
    <section className="min-h-screen w-full bg-[#68191E] flex border-b-[16px] border-[#141414] relative">
      <div className="w-20 lg:w-28 bg-[#141414] flex items-center justify-center border-r-4 border-[#FFF4E4]/20 shrink-0">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic">ИТОГИ</h2>
      </div>

      <div className="flex-1 p-10 lg:p-24 flex flex-col justify-center text-[#FFF4E4]">
        <h2 className="text-6xl lg:text-8xl font-black uppercase mb-16 tracking-tighter font-[family-name:var(--font-oswald)]">
          Баланс <span className="text-[#141414]">Последствий</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-[#141414] bg-[#FFF4E4]">
          {/* Позитив */}
          <div className="p-10 border-r-4 border-[#141414] text-[#141414]">
            <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
              <TrendingUp className="text-green-700" /> Позитивные
            </h3>
            <ul className="space-y-4 font-bold uppercase italic text-lg">
              <li className="border-b border-[#141414]/10 pb-2">• Ликвидация массового голода</li>
              <li className="border-b border-[#141414]/10 pb-2">• Стабильная валюта (Червонец)</li>
              <li className="border-b border-[#141414]/10 pb-2">• Рост легкой промышленности</li>
            </ul>
          </div>

          {/* Негатив */}
          <div className="p-10 text-[#141414]">
            <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
              <TrendingDown className="text-[#68191E]" /> Негативные
            </h3>
            <ul className="space-y-4 font-bold uppercase italic text-lg">
              <li className="border-b border-[#141414]/10 pb-2">• «Ножницы цен» (Кризис 1923)</li>
              <li className="border-b border-[#141414]/10 pb-2">• Имущественное расслоение</li>
              <li className="border-b border-[#141414]/10 pb-2">• Рост безработицы в городах</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}