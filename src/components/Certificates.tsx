"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    title: "Full Stack Development In React and Node",
    provider: "LPU",
    date: "2025",
    image: "/lpu-certificate.png",
    link: "https://drive.google.com/file/d/16Bmzoc-knvBZ6wtX_O--odKSBK_piFR9/view",
  },
  {
    title: "Java Programming",
    provider: "iamNeo",
    date: "2025",
    image: "/iamneo-certificate.png",
    link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX19NIzQFOJju63TK0tlAXf0ZByJ8W5pfzyc%3D",
  },
  {
    title: "Design Thinking",
    provider: "HP",
    date: "2025",
    image: "/hp-certificate.png",
    link: "https://drive.google.com/file/d/168bwIh0G75fkwoohRKWEZPYNpq3P0c55/view",
  },
  {
    title: "Cloud Computing",
    provider: "NPTEL",
    date: "2025",
    image: "/nptel-certificate.png",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S143730119504229562.pdf",
  },
  {
    title: "Course: The Bits and Bytes of Computer Networking",
    provider: "Google",
    date: "2024",
    image: "/google-certificate.png",
    link: "https://www.coursera.org/account/accomplishments/verify/1G8CAVW81NKZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
];

export default function Certificates() {
  return (
    <section className="w-full min-h-screen snap-start snap-always flex flex-col px-8 md:px-24 py-32 bg-transparent">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Section Header */}
        <div className="border-t border-neutral-200 pt-6 mb-20 flex justify-between items-baseline">
          <span className="text-neutral-400 italic text-sm md:text-base tracking-wider underline underline-offset-8 decoration-neutral-100">Credentials & Badges</span>
          <span className="text-neutral-300 text-xs font-mono uppercase tracking-[0.3em] hidden md:block">Verification of Expertise</span>
        </div>

        {/* Certificates Flex Layout (3 on top, 2 centered below) */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white border border-neutral-100 rounded-[1.5rem] overflow-hidden hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-700 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm cursor-pointer"
            >
              {/* Top: Details */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-0.5 rounded-full bg-neutral-50 text-neutral-400 text-[9px] font-mono uppercase tracking-widest border border-neutral-100">
                    {cert.provider}
                  </span>
                  <span className="text-neutral-300 text-[10px] font-mono">{cert.date}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-neutral-900 group-hover:text-black transition-colors duration-500 mb-4 leading-tight">
                  {cert.title}
                </h3>
              </div>

              {/* Bottom: Picture Below Details */}
              <div className="relative w-full aspect-video overflow-hidden bg-neutral-50 border-t border-neutral-100">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale-0 opacity-100 md:grayscale md:opacity-80 md:group-hover:grayscale-0 md:group-hover:opacity-100 scale-100 md:group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Overlay Detail on Hover - Desktop Only */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/20 to-transparent translate-y-full md:group-hover:translate-y-0 transition-transform duration-700 hidden md:block">
                   <div className="flex items-center gap-2 text-white text-[9px] font-mono tracking-widest uppercase">
                      <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                      View Credential
                   </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
