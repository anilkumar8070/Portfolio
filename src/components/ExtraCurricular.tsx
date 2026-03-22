"use client";

import { motion } from "framer-motion";
import { Youtube, Gamepad2, Share2 } from "lucide-react";

const activities = [
  {
    title: "Content Creation",
    desc: "Running a YouTube channel where I create and share content. Exploring creativity, consistency, and audience engagement.",
    icon: <Youtube size={24} />,
  },
  {
    title: "Gaming",
    desc: "Passionate about gaming and exploring different game mechanics. Helps improve strategic thinking, focus, and decision-making.",
    icon: <Gamepad2 size={24} />,
  },
  {
    title: "Digital Engagement",
    desc: "Stay updated with trends through social platforms. Interested in digital content, tech trends, and online communities.",
    icon: <Share2 size={24} />,
  },
];

export default function ExtraCurricular() {
  return (
    <section className="w-full min-h-screen snap-start snap-always flex flex-col justify-center px-8 md:px-24 py-20 bg-transparent">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="w-8 h-[1px] bg-neutral-200" />
          <span className="text-neutral-400 uppercase tracking-[0.3em] text-xs font-mono">Outside of Code</span>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              <div className="mb-8 p-4 w-fit rounded-2xl bg-neutral-50 border border-neutral-100 text-neutral-400 group-hover:bg-black group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                {activity.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-normal text-neutral-900 mb-6 tracking-tight">
                {activity.title}
              </h3>
              
              <p className="text-neutral-500 font-light leading-relaxed text-sm md:text-base">
                {activity.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
