"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";
import { X } from "lucide-react";

// Mock Project Data
const projects = [
  { id: 1, title: "E-Commerce Experience", category: "Web Development", year: "2025", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Creative Agency", category: "Interactive Design", year: "2024", image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Fintech Dashboard", category: "UI/UX & Frontend", year: "2024", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  // Advanced Physics for Floating Thumbnail
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for silky smooth tracking
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Velocity tracking to tilt the image based on mouse speed
  const velocityX = useVelocity(smoothX);
  const rotateValue = useTransform(velocityX, [-1000, 1000], [-15, 15], { clamp: false });

  // Update mouse position for the floating image
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset slightly to center the currently smaller floating div 
      mouseX.set(e.clientX - 150); // Desktop width (300) / 2
      mouseY.set(e.clientY - 100); // Desktop height (200) / 2
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleProjectClick = (e: React.MouseEvent, id: number) => {
    setClickPos({ x: e.clientX, y: e.clientY });
    setSelectedProject(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="w-full min-h-screen snap-start snap-always flex flex-col px-8 md:px-24 pt-32 pb-16 relative">
      <div className="w-full max-w-6xl mx-auto flex flex-col relative z-10">
        <div className="border-t border-neutral-200 pt-6 mb-16">
          <span className="italic text-sm md:text-base text-neutral-400">Selected Works</span>
        </div>

        {/* Project List */}
        <div className="flex flex-col w-full group">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full border-b border-neutral-200 cursor-pointer hover:px-6 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={(e) => handleProjectClick(e, project.id)}
            >
              <div className="w-full flex justify-between items-center py-10 md:py-16">
                <h3 className="text-2xl md:text-4xl font-light tracking-tight text-neutral-900 group-hover:text-neutral-400 hover:!text-black transition-colors duration-500">
                  {project.title}
                </h3>
                <div className="flex flex-col items-end text-neutral-400 uppercase tracking-widest text-xs font-mono">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Physics-Based Floating Image */}
      <AnimatePresence>
        {hoveredProject !== null && selectedProject === null && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[100] w-[200px] h-[130px] md:w-[300px] md:h-[200px] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-neutral-800"
            style={{
              x: smoothX,
              y: smoothY,
              rotate: rotateValue
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
          >
             <img 
               src={projects.find(p => p.id === hoveredProject)?.image} 
               alt="Thumbnail" 
               className="w-full h-full object-cover brightness-75 scale-105" 
             />
             {/* Glassmorphic View Badge */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xs font-medium tracking-widest border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                  VIEW
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Staggered Vertical Shutters Modal / Project Screen */}
      <AnimatePresence>
        {selectedProject !== null && (
          <>
            {/* The Shutters Background */}
            <div className="fixed inset-0 z-50 flex pointer-events-none">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-1/5 h-full bg-black border-r border-neutral-900/20"
                  initial={{ y: "-100%" }}
                  animate={{ 
                    y: "0%", 
                    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * 0.05 } 
                  }}
                  exit={{ 
                    y: "100%", 
                    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 + (i * 0.05) } 
                  }}
                />
              ))}
            </div>

            {/* The Project Content */}
            <motion.div
              className="fixed inset-0 z-[51] text-white flex flex-col px-8 md:px-24 pt-32 pb-16 pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1, 
                transition: { delay: 0.6, duration: 0.4 } 
              }}
              exit={{ 
                opacity: 0, 
                transition: { delay: 0, duration: 0.3 } 
              }}
            >
              <div className="w-full max-w-6xl mx-auto flex flex-col h-full relative z-10">
                <button 
                  className="absolute top-0 right-0 text-white hover:text-neutral-400 transition-colors"
                  onClick={closeModal}
                >
                  <X size={40} strokeWidth={1} />
                </button>

                <motion.div 
                  className="mt-32"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: 1, y: 0, 
                    transition: { delay: 0.8, duration: 0.8, ease: "easeOut" } 
                  }}
                  exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
                >
                  <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h2>
                  <p className="text-xl md:text-3xl text-neutral-400 max-w-3xl font-light leading-relaxed">
                    Project case study loading... Add incredible imagery and descriptions about this project here.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
