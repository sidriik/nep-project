"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Camera, Info } from "lucide-react";

const gallery = [
  { img: "/posters_2.jpg", title: "Ленинский курс", desc: "Знаменитый лозунг: «Из России нэповской будет Россия социалистическая»." },
  { img: "/posters_6.jpg", title: "Твердая валюта", desc: "Банковский билет 1922 года — золотой червонец, остановивший инфляцию." },
  { img: "/posters_3.jpg", title: "Борьба в деревне", desc: "Агитационный плакат против кулачества и за коллективный посев." },
  { img: "/posters_7.jpg", title: "Государственная промышленность", desc: "Реклама треста «Моссукно» — возрождение текстильной отрасли." },
  { img: "/posters_5.jpg", title: "Союз классов", desc: "Плакат «Смычка»: крестьянин кормит рабочего, рабочий помогает крестьянину." }
];

export default function GallerySlide() {
  const [index, setIndex] = useState(0);

  return (
    <section className="min-h-screen w-full bg-[#141414] text-[#FFF4E4] relative overflow-hidden flex flex-col p-6 lg:p-20 border-b-[16px] border-[#141414]">
      
      <div className="flex justify-between items-end mb-12 border-b-4 border-[#68191E] pb-6">
        <div>
          <h2 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter font-[family-name:var(--font-oswald)] text-[#68191E]">Визуальный</h2>
          <h2 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter font-[family-name:var(--font-oswald)]">Архив</h2>
        </div>
        <div className="flex gap-4 mb-2">
          <button onClick={() => setIndex((index - 1 + gallery.length) % gallery.length)} className="p-4 border-2 border-[#FFF4E4] hover:bg-[#68191E] transition-all">
            <ArrowLeft size={32}/>
          </button>
          <button onClick={() => setIndex((index + 1) % gallery.length)} className="p-4 border-2 border-[#FFF4E4] hover:bg-[#68191E] transition-all">
            <ArrowRight size={32}/>
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* ФОТО */}
        <div className="lg:col-span-8 h-[50vh] lg:h-[70vh] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="w-full h-full border-[10px] border-[#FFF4E4] shadow-[0_0_80px_rgba(104,25,30,0.4)] overflow-hidden bg-zinc-900"
            >
              <img 
                src={gallery[index].img} 
                className="w-full h-full object-contain" 
                alt="Archive Document"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600?text=ОШИБКА+ЗАГРУЗКИ+ФОТО";
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ОПИСАНИЕ */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-[#68191E] p-8 shadow-[15px_15px_0px_0px_#FFF4E4]">
              <div className="flex items-center gap-2 mb-4 opacity-50 uppercase font-black text-xs">
                <Camera size={16} /> Экспонат {index + 1}
              </div>
              <h3 className="text-3xl lg:text-4xl font-black uppercase mb-4 leading-none">{gallery[index].title}</h3>
              <p className="text-xl font-medium italic opacity-90 leading-tight border-l-2 border-[#FFF4E4] pl-4">{gallery[index].desc}</p>
           </div>
           <div className="p-6 border border-[#FFF4E4]/10 bg-[#FFF4E4]/5 text-xs font-bold uppercase tracking-[0.2em] opacity-40">
             <Info className="inline mr-2" size={14}/>
             Все документы взяты из открытых фондов РГАЭ и Музея Революции.
           </div>
        </div>
      </div>
    </section>
  );
}