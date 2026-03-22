"use client";

import { useState, useEffect, useRef } from "react";
import SplashScreen from "@/components/SplashScreen";
import Menu from "@/components/Menu";
import AboutDetails from "@/components/AboutDetails";
import Domains from "@/components/Domains";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import ExtraCurricular from "@/components/ExtraCurricular";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // Background color: white for most sections, each dark section manages its own bg

  // Logo only visible on the hero section — hides once user scrolls past it
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowLogo(latest < 0.04);
  });

  // Prevent scrolling while splash screen is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <motion.main 
      ref={containerRef as any}
      className="relative h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory font-sans selection:bg-neutral-800 bg-white"
    >
      <AnimatePresence>
        {isLoading && <SplashScreen finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {/* Header Logo — only visible on Hero section */}
      <motion.div 
        className="fixed top-6 left-6 md:top-10 md:left-10 z-40 pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showLogo ? 1 : 0, y: 0 }}
        transition={{ duration: 0.8, delay: showLogo ? 1.2 : 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3">
          {/* Geometric AP monogram icon */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer square grid */}
            <rect x="1" y="1" width="34" height="34" rx="4" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
            {/* A shape */}
            <path d="M8 27L14 9H18L24 27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 21H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
            {/* P shape */}
            <path d="M26 27V9" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M26 9H30C31.657 9 33 10.343 33 12V15C33 16.657 31.657 18 30 18H26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {/* Name wordmark */}
          <div className="flex flex-col leading-none">
            <span className="text-white text-[15px] font-bold tracking-tight leading-tight">Anil</span>
            <span className="text-neutral-400 text-[11px] font-medium tracking-[0.15em] uppercase">Prajapat</span>
          </div>
        </div>
      </motion.div>

      <Menu />

      {/* Hero Section — dark background applied directly */}
      <section className="w-full h-screen snap-start snap-always relative flex flex-col md:flex-row items-center justify-between px-8 md:px-24 pt-20 md:pt-32 pb-10 md:pb-16 text-neutral-50 bg-[#0a0a0a]">
        {/* Left Side: Massive Typography */}
        <div className="flex flex-col w-full md:w-3/5 z-10">
          <div className="overflow-hidden">
            <motion.h1 
              className="text-5xl md:text-[8rem] lg:text-[10rem] font-medium leading-[0.9] tracking-tighter"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
            >
              Creative
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              className="text-5xl md:text-[8rem] lg:text-[10rem] font-medium leading-[0.9] tracking-tighter text-neutral-500"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 1.3, ease: [0.76, 0, 0.24, 1] }}
            >
              Developer
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-6 md:mt-12">
            <motion.p 
              className="text-lg md:text-2xl text-neutral-400 max-w-md font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            >
              Turning abstract ideas into striking digital experiences through code and design.
            </motion.p>
          </div>
        </div>

        {/* Right Side: Photo Placeholder */}
        <motion.div 
          className="w-full md:w-2/5 h-[50vh] md:h-[70vh] mt-8 md:mt-0 relative flex justify-center md:items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Replace src with your actual image path later, e.g., /me.jpg */}
          <div className="w-[160px] md:w-[288px] h-[250px] md:h-[450px] bg-black rounded-[20px] md:rounded-[40px] overflow-hidden relative shadow-2xl flex items-center justify-center border border-neutral-800 group/photo mx-auto md:mx-0">
            <img 
              src="/profile.jpg" 
              alt="Anil Prajapat" 
              className="w-full h-full object-cover md:grayscale md:group-hover/photo:grayscale-0 transition-all duration-1000 ease-[0.16, 1, 0.3, 1]" 
            />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
        >
          <div className="w-px h-16 bg-neutral-800 relative overflow-hidden">
            <motion.div 
              className="w-full h-1/2 bg-white absolute top-0"
              animate={{ top: ["-50%", "150%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono -rotate-90 origin-left translate-y-8 absolute left-6">Scroll</span>
        </motion.div>
      </section>

      {/* About Section (Light Theme content, transparent background) */}
      <section className="w-full h-screen snap-start snap-always text-black flex flex-col px-8 md:px-24 pt-32 pb-16">
        <div className="w-full max-w-6xl mx-auto flex flex-col h-full justify-center">
          
          {/* Top Border & Subtitle */}
          <div className="border-t border-neutral-200 pt-6 mb-16 md:mb-32">
            <span className="text-neutral-400 italic text-sm md:text-base">This is me.</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0">
            {/* Left Column: Greeting & Button */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-16">
                Hi, I'm Anil.
              </h2>
              
              <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full w-fit hover:bg-neutral-800 transition-colors group">
                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span className="font-medium">Get in Touch</span>
              </button>
            </div>

            {/* Right Column: Text Paragraphs */}
            <div className="w-full md:w-1/2 flex flex-col gap-8 text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-xl">
              <p>
                I'm a creative web developer dedicated to turning ideas into powerful digital solutions. I specialize in creating seamless and intuitive user experiences with modern technologies.
              </p>
              <p>
                I'm involved in every step of the process: from discovery and design to development, testing, and deployment. I focus on delivering high-quality, scalable results that drive positive user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Details Section (Light Theme content, transparent background) */}
      <AboutDetails />

      {/* Domains Section (Dark Theme content, transparent background) */}
      <Domains scrollContainer={containerRef} />

      {/* Skills Section (Light Theme content, transparent background) */}
      <Skills />

      {/* Projects Section (Light Theme content, transparent background) */}
      <Projects />

      {/* Certificates Section (Light Theme content, transparent background) */}
      <Certificates />

      {/* Achievements & Education Section (Light Theme content, transparent background) */}
      <Achievements />

      {/* Extra-Curricular Activities Section (Light Theme content, transparent background) */}
      <ExtraCurricular />

      {/* Contact Section (Final High-Impact Dark Theme) */}
      <Contact />

      {/* Detailed Footer Section (Dark Theme) */}
      <Footer />

    </motion.main>
  );
}
