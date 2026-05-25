"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { History, PowerOff, Layers } from "lucide-react";

export default function ConclusionSlide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} id="conclusion" className="min-h-screen w-full bg-[#FFF4E4] flex border-b-[16px] border-[#141414] relative">
      <div className="w-20 lg:w-28 bg-[#141414] flex items-center justify-center border-r-4 border-[#68191E]/50 shrink-0 z-30">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic opacity-60">
          АНАЛИЗ ФИНАЛА
        </h2>
      </div>

      <div className="flex-1 p-6 lg:p-20 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* ЭТАПЫ (Для Цели проекта) */}
          <div>
            <h2 className="text-5xl lg:text-7xl font-black text-[#141414] uppercase leading-tight tracking-tighter font-[family-name:var(--font-oswald)] mb-10">
              Три этапа <br /> <span className="text-[#68191E]">Развития</span>
            </h2>
            <div className="space-y-6">
               <Step num="I" years="1921—1924" title="Восстановление" desc="Ликвидация голода, введение червонца, запуск рынков." />
               <Step num="II" years="1925—1926" title="Расцвет" desc="Пик производства. Попытка расширить НЭП вглубь деревни." />
               <Step num="III" years="1927—1928" title="Кризис и Свертывание" desc="Кризис хлебозаготовок, переход к форсированной индустриализации." />
            </div>
          </div>

          {/* ПРИЧИНЫ СВЕРТЫВАНИЯ (Критически важно!) */}
          <div className="bg-[#141414] p-10 lg:p-14 shadow-[25px_25px_0px_0px_#68191E] border border-[#FFF4E4]/10">
             <h3 className="text-3xl font-black text-[#FFF4E4] uppercase mb-8 italic border-b border-[#FFF4E4]/20 pb-4 flex items-center gap-4">
               <PowerOff className="text-[#68191E]" /> Почему НЭП закрыли?
             </h3>
             <ul className="space-y-8">
               <li className="flex gap-4">
                  <span className="text-[#68191E] font-black text-2xl">01</span>
                  <p className="text-[#FFF4E4] font-bold text-lg leading-snug">
                    Противоречие между рыночной экономикой и однопартийной диктатурой.
                  </p>
               </li>
               <li className="flex gap-4">
                  <span className="text-[#68191E] font-black text-2xl">02</span>
                  <p className="text-[#FFF4E4] font-bold text-lg leading-snug">
                    Необходимость огромных средств для индустриализации (рынок давал их слишком медленно).
                  </p>
               </li>
               <li className="flex gap-4">
                  <span className="text-[#68191E] font-black text-2xl">03</span>
                  <p className="text-[#FFF4E4] font-bold text-lg leading-snug">
                    Угроза «хлебной стачки»: крестьяне отказывались сдавать хлеб по низким госценам.
                  </p>
               </li>
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

function Step({ num, years, title, desc }: { num: string, years: string, title: string, desc: string }) {
  return (
    <div className="border-l-4 border-[#68191E] pl-6 relative">
      <span className="absolute -left-2 top-0 bg-[#68191E] text-white text-[10px] px-2 font-black">{num}</span>
      <span className="text-sm font-black text-[#68191E] uppercase tracking-widest">{years}</span>
      <h4 className="text-xl font-black uppercase text-[#141414]">{title}</h4>
      <p className="text-[#141414]/70 font-medium italic text-sm">{desc}</p>
    </div>
  );
}