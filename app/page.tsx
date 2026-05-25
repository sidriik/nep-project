"use client";
import React, { useState } from "react";
import { ReactLenis } from '@studio-freight/react-lenis'
import { motion } from "framer-motion";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import CrisisSlide from "../components/CrisisSlide";
import SecondSlide from "../components/SecondSlide";
import ReformSlide from "../components/ReformSlide";
import ArchivesTable from "../components/ArchivesTable";
import FinanceSlide from "../components/FinanceSlide";
import ScissorsSlide from "../components/ScissorsSlide";
import ConclusionSlide from "../components/ConclusionSlide";
import ConsequencesSlide from "../components/ConsequencesSlide";
import DocumentsArchive from "../components/DocumentsArchive";
import GallerySlide from "../components/GallerySlide";
import EndSlide from "../components/EndSlide";
import SecretQuiz from "../components/SecretQuiz";

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Мы убрали объект slideAnimation и пропишем настройки прямо в компоненты, 
  // чтобы TypeScript не путался в типах.

  return (
    <ReactLenis root>
      <main className="bg-[#FFF4E4] font-sans selection:bg-[#68191E] selection:text-white">
        
        <Navigation />
        
        <Hero onSecretClick={() => setIsQuizOpen(true)} />
        
        <div className="flex flex-col w-full">
            {/* Анимация прописана напрямую для каждого слайда */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}><CrisisSlide /></motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}><SecondSlide /></motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}><ReformSlide /></motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}><ArchivesTable /></motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}><FinanceSlide /></motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}><ScissorsSlide /></motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}><ConclusionSlide /></motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}><ConsequencesSlide /></motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}><DocumentsArchive /></motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}><GallerySlide /></motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}><EndSlide /></motion.div>
        </div>

        <SecretQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

        <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-[100] bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      </main>
    </ReactLenis>
  );
}