"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Trophy, Code, Target } from "lucide-react";

const achievements = [
  {
    title: "First Runner Up in Hackathon 101",
    desc: "Secured First Runner Up position among 200+ teams.",
    icon: <Trophy size={18} />,
  },
  {
    title: "400+ Coding Questions",
    desc: "Solved more than 400 problems across various platforms like LeetCode, CodeChef, etc.",
    icon: <Code size={18} />,
  },
  {
    title: "Final Round Qualifier",
    desc: "Qualified final rounds in 5+ hackathons with 100+ teams each.",
    icon: <Target size={18} />,
  },
];

const education = [
  {
    level: "BTech",
    school: "Lovely Professional University",
    detail: "Current 7.97 CGPA",
    icon: <GraduationCap size={18} />,
  },
  {
    level: "12th Standard",
    school: "Career Point World School",
    detail: "Scored 72%",
    icon: <BookOpen size={18} />,
  },
  {
    level: "10th Standard",
    school: "Career Point World School",
    detail: "Scored 87%",
    icon: <Award size={18} />,
  },
];

export default function Achievements() {
  return (
    <section className="w-full min-h-screen snap-start snap-always flex flex-col justify-center px-8 md:px-24 py-32 bg-transparent">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Section Header */}
        <div className="border-t border-neutral-200 pt-6 mb-20 flex justify-between items-baseline">
          <span className="text-neutral-400 italic text-sm md:text-base tracking-wider uppercase tracking-[0.2em] font-mono">Experience & Growth</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-16">
          
          {/* Achievements Left Column */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900 mb-16 underline underline-offset-[12px] decoration-neutral-100">
              Achievements
            </h2>
            
            <div className="flex flex-col gap-12">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl font-normal text-neutral-900 mb-2 tracking-tight transition-colors duration-500 group-hover:text-black">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 font-light leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Right Column */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900 mb-16 underline underline-offset-[12px] decoration-neutral-100">
              Education
            </h2>
            
            <div className="flex flex-col gap-12">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-row-reverse lg:flex-row gap-6 group text-right lg:text-left"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl font-normal text-neutral-900 mb-2 tracking-tight transition-colors duration-500 group-hover:text-black">
                      {item.level}
                    </h3>
                    <div className="flex flex-col">
                       <p className="text-neutral-500 font-medium tracking-tight">
                          {item.school}
                       </p>
                       <p className="text-neutral-400 font-light italic text-sm">
                          {item.detail}
                       </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
