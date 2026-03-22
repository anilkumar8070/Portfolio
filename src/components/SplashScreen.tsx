"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello", // English
  "Bonjour", // French
  "Ciao", // Italian
  "Hola", // Spanish
  "Привет", // Russian
  "こんにちは", // Japanese
  "안녕하세요", // Korean
  "नमस्ते", // Hindi
  "مرحبا", // Arabic
];

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === greetings.length - 1) {
      const timeout = setTimeout(() => {
        finishLoading();
      }, 1000); // Perfect middle ground for final word
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 190); // Smooth but not sluggish
    
    return () => clearTimeout(timeout);
  }, [index, finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white origin-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1, 
        filter: "blur(20px)",
        transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="text-4xl md:text-6xl font-medium tracking-wider"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }} // Smoother text transition
        >
          {index === 0 ? "• " : ""}{greetings[index]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
