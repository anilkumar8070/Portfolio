"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants: Variants = {
    initial: {
      clipPath: "circle(0px at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    animate: {
      clipPath: "circle(2000px at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    exit: {
      clipPath: "circle(0px at calc(100% - 40px) 40px)",
      transition: {
        delay: 0.2, // wait for list items to disappear
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 md:top-12 md:right-12 z-40 flex items-center gap-4 text-white mix-blend-difference hover:opacity-70 transition-opacity group"
        aria-label="Open Menu"
      >
        <span className="text-xl font-medium tracking-wide lowercase">menu</span>
        <div className="flex flex-col gap-2 mt-1">
          <span className="w-8 h-[2px] bg-current block rounded-full transition-transform group-hover:translate-x-1" />
          <span className="w-8 h-[2px] bg-current block rounded-full transition-transform group-hover:-translate-x-1" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.3 } }}
          >
            {/* Dark overlay for the left side if the menu isn't completely fullscreen on desktop.
                Based on bencodes.de, the menu covers the right half or full screen.
                Let's make it cover the right half on large screens. */}
            <div 
              className="hidden md:block w-1/2 h-full bg-black/50 backdrop-blur-sm cursor-pointer" 
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              className="w-full md:w-1/2 h-full bg-white text-black p-10 md:p-20 flex flex-col justify-between ml-auto shadow-2xl origin-top-right relative"
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-black hover:opacity-70 transition-opacity"
                aria-label="Close Menu"
              >
                <X size={32} strokeWidth={1.5} />
              </button>

              <div className="flex flex-col h-full justify-between pt-16">
                <div className="flex gap-16 md:gap-32">
                  {/* Social Column */}
                  <motion.div 
                    className="flex flex-col"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={{
                      animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                      exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                    }}
                  >
                    <motion.span variants={itemVariants} className="text-gray-500 text-sm mb-6 uppercase tracking-widest">Social</motion.span>
                    <motion.a href="https://www.linkedin.com/in/anilprajapati8070/" target="_blank" rel="noopener noreferrer" variants={itemVariants} className="text-lg mb-4 hover:opacity-60 transition-opacity">LinkedIn</motion.a>
                    <motion.a href="https://www.instagram.com/anil_prajapat.i/" target="_blank" rel="noopener noreferrer" variants={itemVariants} className="text-lg mb-4 hover:opacity-60 transition-opacity">Instagram</motion.a>
                    <motion.a href="https://github.com/anilkumar8070" target="_blank" rel="noopener noreferrer" variants={itemVariants} className="text-lg mb-4 hover:opacity-60 transition-opacity">Github</motion.a>
                  </motion.div>

                  {/* Menu Column */}
                  <motion.div 
                    className="flex flex-col"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={{
                      animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
                      exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                    }}
                  >
                    <motion.span variants={itemVariants} className="text-gray-500 text-sm mb-6 uppercase tracking-widest">Menu</motion.span>
                    <motion.a href="#" variants={itemVariants} className="text-4xl md:text-5xl font-light mb-6 hover:opacity-60 transition-opacity">About Me</motion.a>
                    <motion.a href="#" variants={itemVariants} className="text-4xl md:text-5xl font-light mb-6 hover:opacity-60 transition-opacity">Projects</motion.a>
                    <motion.a href="#" variants={itemVariants} className="text-4xl md:text-5xl font-light mb-6 hover:opacity-60 transition-opacity">Contact</motion.a>
                  </motion.div>
                </div>

                {/* Footer / Contact */}
                <motion.div 
                  className="flex flex-col mt-auto"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={{
                    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
                    exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                  }}
                >
                  <motion.span variants={itemVariants} className="text-gray-500 text-sm mb-2 uppercase tracking-widest">Get in touch</motion.span>
                  <motion.a href="mailto:anilprajapati8070@gmail.com" variants={itemVariants} className="text-xl font-light hover:opacity-60 transition-opacity break-all">
                    anilprajapati8070@gmail.com
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
