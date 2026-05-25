"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, TrendingUp, TrendingDown, HelpCircle } from "lucide-react";

export default function ScissorsSlide() {
  const [year, setYear] = useState(1921);
  
  const getGap = () => {
    if (year <= 1923) return (year - 1921) * 25;
    return 50 - (year - 1923) * 10;
  };

  const gap = getGap();

  return (
    <section id = "scissors" className="min-h-screen w-full bg-[#FFF4E4] flex border-b-[16px] border-[#141414] relative overflow-hidden">
      <div className="w-20 lg:w-28 bg-[#68191E] flex items-center justify-center border-r-4 border-[#141414] shrink-0 z-30">
        <h2 className="rotate-180 text-[#FFF4E4] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic">КРИЗИС 1923</h2>
      </div>

      <div className="flex-1 p-6 lg:p-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ИСТОРИЧЕСКАЯ СПРАВКА */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 text-[#68191E]">
               <HelpCircle size={32} />
               <h2 className="text-4xl font-black uppercase tracking-tighter font-[family-name:var(--font-oswald)] text-[#141414]">Что это <br/> такое?</h2>
            </div>
            <div className="bg-[#141414] p-6 text-[#FFF4E4] shadow-[10px_10px_0px_0px_#68191E]">
               <p className="text-sm md:text-base leading-relaxed italic">
                 Термин предложил Л. Троцкий. «Ножницы» — это расхождение цен: промышленные товары (плуги, ткани) дорожали, а сельскохозяйственные (хлеб) дешевели.
               </p>
               <p className="mt-4 text-sm font-bold border-t border-white/20 pt-4">
                 <span className="text-[#68191E]">ПОЧЕМУ ЭТО ВАЖНО:</span> Если «лезвия» разойдутся слишком широко, крестьяне перестанут продавать зерно, и городам будет нечего есть. Это ставило под угрозу всю идею НЭПа.
               </p>
            </div>
          </div>

          {/* ГРАФИК */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div className="relative w-full max-w-3xl h-[400px] bg-[#141414] border-8 border-[#68191E] flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF4E4_1px,transparent_1px)] [background-size:20px_20px]" />
              
              <motion.div animate={{ rotate: -gap / 2 }} className="absolute h-3 w-[70%] bg-[#68191E] origin-center flex items-center justify-end px-10">
                <span className="text-white font-black uppercase text-[10px]">Цена промтоваров ↑</span>
              </motion.div>

              <motion.div animate={{ rotate: gap / 2 }} className="absolute h-3 w-[70%] bg-[#FFF4E4] origin-center flex items-center justify-end px-10">
                <span className="text-[#141414] font-black uppercase text-[10px]">Цена зерна ↓</span>
              </motion.div>

              <div className="z-20 bg-[#68191E] p-4 rounded-full border-4 border-[#FFF4E4]"><Scissors size={40} className="text-white" /></div>
              
              {year === 1923 && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-10 bg-white text-[#68191E] p-4 border-4 border-[#68191E] font-black uppercase text-sm animate-bounce z-30">
                  ПИК КРИЗИСА: РАЗРЫВ МАКСИМАЛЕН
                </motion.div>
              )}
            </div>

            <div className="mt-10 w-full max-w-xl bg-white p-6 border-4 border-[#141414]">
              <input type="range" min="1921" max="1928" step="1" value={year} onChange={(e) => setYear(parseInt(e.target.value))}
                className="w-full h-4 bg-[#E3E3E3] rounded-none appearance-none cursor-pointer accent-[#68191E]" />
              <div className="flex justify-between mt-4 font-black text-2xl">
                <span>1921</span>
                <span className="text-[#68191E]">{year} ГОД</span>
                <span>1928</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}