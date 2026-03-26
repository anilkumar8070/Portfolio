"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";
import { X } from "lucide-react";

// Mock Project Data
const projects = [
  { 
    id: 1, 
    title: "LokYatra", 
    category: "Bus Tracking App", 
    year: "2025", 
    image: "/lokyatra-1.png",
    images: [
      "/lokyatra-1.png",
      "/lokyatra-2.png",
      "/lokyatra-3.png"
    ],
    description: "Architected a real-time tracking system using WebSockets for live bus location updates every second. Integrated GPS module to fetch coordinates from IoT/mobile devices and push them to the backend. Implemented Leaflet map rendering with custom markers, route lines, and live movement animations.",
    techStack: ["MERN Stack", "WebSockets", "Leaflet Map", "GPS Integration", "Tailwind CSS"],
    github: "https://github.com/anilkumar8070/bus-tracker"
  },
  { 
    id: 2, 
    title: "Kartly", 
    category: "MERN E-Commerce Platform", 
    year: "2025", 
    image: "/kartly-1.png",
    images: ["/kartly-1.png", "/kartly-2.png", "/kartly-3.png"],
    description: "Developed end-to-end MERN architecture, including frontend UI, backend APIs, and database modeling. Implemented JWT-based authentication with role-based access for Admin, Seller, and Customers. Designed RESTful APIs for product listing, search, cart management, and orders.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/anilkumar8070/kartly-e-Commerce"
  },
  { 
    id: 3, 
    title: "Portfolio", 
    category: "Interactive Portfolio Platform", 
    year: "2026", 
    image: "/portfolio-1.png",
    images: ["/portfolio-1.png", "/portfolio-2.png", "/portfolio-3.png"],
    description: "Designed and developed a highly interactive developer portfolio featuring advanced GSAP-driven animations, Framer Motion transitions, and a custom physics-based project gallery. Built with Next.js and Tailwind CSS to showcase engineering expertise with a focused, minimal aesthetic.",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS", "Lucide React", "TypeScript"],
    github: "https://github.com/anilkumar8070/Portfolio"
  },
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
    <section id="projects" className="w-full min-h-screen snap-start snap-always flex flex-col px-8 md:px-24 pt-32 pb-16 relative">
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
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-neutral-900 group-hover:text-neutral-400 hover:!text-black transition-colors duration-500">
                  {project.title}
                </h3>
                <div className="flex flex-col items-end text-right text-neutral-400 uppercase tracking-widest text-[10px] md:text-xs font-mono max-w-[150px] md:max-w-none">
                  <span className="break-words w-full">{project.category}</span>
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
              <div className="w-full max-w-6xl mx-auto flex flex-col h-full relative z-10 overflow-y-auto scrollbar-hide pr-4">
                <button 
                  className="absolute top-0 right-0 text-white hover:text-neutral-400 transition-colors z-20"
                  onClick={closeModal}
                >
                  <X size={40} strokeWidth={1} />
                </button>

                <motion.div 
                  className="mt-20 pb-20"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: 1, y: 0, 
                    transition: { delay: 0.8, duration: 0.8, ease: "easeOut" } 
                  }}
                  exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
                >
                  <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight mb-8">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h2>
                  <p className="text-lg md:text-2xl lg:text-3xl text-neutral-400 max-w-4xl font-light leading-relaxed mb-12">
                    {projects.find(p => p.id === selectedProject)?.description}
                  </p>

                  {/* Project Images Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {projects.find(p => p.id === selectedProject)?.images.map((img, i) => (
                      <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
                        <img src={img} alt={`Project Detail ${i}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 border-t border-neutral-900 pt-16">
                    <div>
                      <h4 className="text-neutral-500 uppercase tracking-widest text-xs font-mono mb-6">Tech Stack</h4>
                      <div className="flex flex-wrap gap-3">
                        {projects.find(p => p.id === selectedProject)?.techStack?.map((tech, i) => (
                          <span key={i} className="px-4 py-2 border border-neutral-800 rounded-full text-sm text-neutral-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-neutral-500 uppercase tracking-widest text-xs font-mono mb-6">Year / Category</h4>
                      <p className="text-xl text-neutral-200">
                        {projects.find(p => p.id === selectedProject)?.year} — {projects.find(p => p.id === selectedProject)?.category}
                      </p>
                      
                      <a 
                        href={projects.find(p => p.id === selectedProject)?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-12 inline-flex items-center gap-2 text-white hover:text-neutral-400 transition-colors"
                      >
                        <span className="font-medium">VIEW GITHUB</span>
                        <X size={20} className="rotate-45" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
