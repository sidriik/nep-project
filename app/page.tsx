"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // Плавный скролл
import Hero from "../components/Hero";
import CrisisSlide from "../components/CrisisSlide";
import SecondSlide from "../components/SecondSlide";
import ReformSlide from "../components/ReformSlide";
import ConsequencesSlide from "../components/ConsequencesSlide"; // Новый
import GallerySlide from "../components/GallerySlide";
import EndSlide from "../components/EndSlide";
// ... импорты
import ArchivesTable from "../components/ArchivesTable";
import ScissorsSlide from "../components/ScissorsSlide";
import FinanceSlide from "../components/FinanceSlide";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-[#FFF4E4] font-sans">
      <Hero />
      <CrisisSlide />
      <SecondSlide />
      <ReformSlide />
      <ConsequencesSlide />
      <ArchivesTable />   {/* Папки */}
      <FinanceSlide />    {/* Монета */}
      <ScissorsSlide /> 
      <GallerySlide />
      <EndSlide />

      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-[100] bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
    </main>
  );
}