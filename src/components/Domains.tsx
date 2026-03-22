"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const domains = [
  { title: "Frontend", desc: "Crafting immersive user interfaces.", dir: -1 },
  { title: "Backend", desc: "Building robust system architectures.", dir: 1 },
  { title: "Android", desc: "Developing native mobile experiences.", dir: -1 },
  { title: "Devops", desc: "Scaling and deploying cloud solutions.", dir: 1 },
];

export default function Domains({ scrollContainer }: { scrollContainer: React.RefObject<HTMLElement | null> }) {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainer,
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Dramatic horizontal parallax. 
  // progress 0.5 is when the section is centered (snapped). 
  // We want offset 0 at 0.5.
  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-600, 0, 600]);
  const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [600, 0, -600]);

  return (
    <section 
      ref={targetRef}
      className="w-full min-h-[40vh] snap-start snap-always flex flex-col justify-center px-8 md:px-24 py-6 text-neutral-900 bg-white overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center">
          <span className="text-neutral-400 uppercase tracking-[0.4em] text-xs md:text-sm font-mono mb-4">Core Domains</span>
          <div className="w-12 h-[1px] bg-neutral-200" />
        </div>

        {/* Domains List (Centered) */}
        <div className="flex flex-col w-full items-center">
          {domains.map((domain, index) => {
            const x = domain.dir === -1 ? xLeft : xRight;

            return (
              <div
                key={index}
                className="group relative w-full border-b border-neutral-100/50 overflow-visible"
              >
                <motion.div
                  style={{ x }}
                  className="flex flex-col items-center py-3 md:py-6 cursor-default whitespace-nowrap"
                >
                  <h2 className="text-5xl md:text-[7rem] lg:text-[9rem] font-light leading-none tracking-tighter transition-colors duration-500 group-hover:text-neutral-400">
                    {domain.title}
                  </h2>
                  
                  <div className="mt-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <p className="text-neutral-400 text-sm md:text-lg font-mono uppercase tracking-widest text-center">
                      {domain.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
