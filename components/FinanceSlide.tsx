"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coins } from "lucide-react";

export default function FinanceSlide() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0.6, 0.9], [0, 360]);

  return (
    <section className="min-h-screen w-full bg-[#141414] text-[#FFF4E4] flex border-b-[16px] border-[#68191E] relative overflow-hidden">
      <div className="w-20 lg:w-28 bg-[#FFF4E4] flex items-center justify-center border-r-4 border-[#141414] shrink-0 z-30">
        <h2 className="rotate-180 text-[#141414] font-black text-4xl lg:text-5xl tracking-tighter [writing-mode:vertical-lr] uppercase italic">ФИНАНСЫ</h2>
      </div>

      <div className="flex-1 p-10 lg:p-24 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <h2 className="text-6xl lg:text-8xl font-black uppercase mb-8 tracking-tighter font-[family-name:var(--font-oswald)]">
            Золотой <span className="text-[#68191E]">Червонец</span>
          </h2>
          <div className="bg-[#68191E] p-8 shadow-[20px_20px_0px_0px_#FFF4E4]">
             <p className="text-2xl font-medium italic leading-relaxed">
               «Наш червонец — это победа над разрухой. Впервые после революции мы создали валюту, которую признает весь мир».
             </p>
             <p className="mt-4 font-black uppercase">— Г. Сокольников</p>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center relative">
          {/* МОНЕТА (используй картинку posters_6.jpg или icon.png) */}
          <motion.div style={{ rotate }} className="relative">
             <img src="/icon.png" className="w-64 h-64 lg:w-96 lg:h-96 rounded-full border-8 border-[#68191E] shadow-[0_0_100px_rgba(104,25,30,0.5)]" alt="Coin" />
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full" />
          </motion.div>
          
          {/* Летающие факты */}
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-0 right-0 bg-[#FFF4E4] text-[#141414] p-4 font-black uppercase text-xs rotate-12">
            10 рублей золотом
          </motion.div>
          <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute bottom-0 left-0 bg-[#68191E] text-white p-4 font-black uppercase text-xs -rotate-12">
            Твердая валюта
          </motion.div>
        </div>
      </div>
    </section>
  );
}