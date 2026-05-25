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
import DocumentsArchive from "../components/ArchiveFile";
import GallerySlide from "../components/GallerySlide";
import EndSlide from "../components/EndSlide";
import SecretQuiz from "../components/SecretQuiz"; // Импортируем наш секретный тест

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const slideAnimation = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: false, amount: 0.1 },
    transition: { duration: 0.8 }
  };

  return (
    <ReactLenis root>
      <main className="bg-[#FFF4E4] font-sans selection:bg-[#68191E] selection:text-white">
        
        <Navigation />
        
        {/* Передаем функцию открытия теста в Hero */}
        <Hero onSecretClick={() => setIsQuizOpen(true)} />
        
        <motion.div {...slideAnimation}><CrisisSlide /></motion.div>
        <motion.div {...slideAnimation}><SecondSlide /></motion.div>
        <motion.div {...slideAnimation}><ReformSlide /></motion.div>
        <motion.div {...slideAnimation}><ArchivesTable /></motion.div>
        <motion.div {...slideAnimation}><FinanceSlide /></motion.div>
        <motion.div {...slideAnimation}><ScissorsSlide /></motion.div>
        <motion.div {...slideAnimation}><ConclusionSlide /></motion.div>
        <motion.div {...slideAnimation}><ConsequencesSlide /></motion.div>
        <motion.div {...slideAnimation}><DocumentsArchive /></motion.div>
        <motion.div {...slideAnimation}><GallerySlide /></motion.div>
        <motion.div {...slideAnimation}><EndSlide /></motion.div>

        {/* Сам тест, который всплывает поверх всего */}
        <SecretQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

        <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-[100] bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      </main>
    </ReactLenis>
  );
}