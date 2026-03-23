"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "Node.js", "Express.js", "React", "MongoDB"],
  },
  {
    title: "Android Development",
    skills: ["Jetpack Compose", "Android UI"],
  },
  {
    title: "Core Concepts",
    skills: ["DSA (Java)", "OOPS", "DBMS"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "REST APIs", "Android Studio", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full min-h-screen snap-start snap-always flex flex-col justify-center px-8 md:px-24 py-16 text-black bg-transparent">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="border-t border-neutral-200 pt-6 mb-20">
          <span className="text-neutral-400 italic text-sm md:text-base tracking-wider">Expertise & Skills</span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-light mb-10 tracking-tight text-neutral-900"
              >
                {category.title}
              </motion.h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      opacity: { duration: 0.4, delay: (catIndex * 0.1) + (skillIndex * 0.05), ease: "easeOut" },
                      scale: { duration: 0.4, delay: (catIndex * 0.1) + (skillIndex * 0.05), ease: "easeOut" },
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -4,
                      scale: 1.02,
                      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#000", 
                      color: "#fff",
                      borderColor: "#000",
                      transition: { duration: 0.2, ease: "easeInOut" }
                    }}
                    className="px-6 py-3 rounded-full border border-neutral-200 text-neutral-600 text-sm md:text-base cursor-default bg-white"
                  >
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Typography Quote or Detail */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <p className="text-4xl md:text-6xl font-light tracking-tighter text-neutral-300 pointer-events-none select-none">
            Code. Design. Build.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
