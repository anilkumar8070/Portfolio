"use client";

import { MapPin, Mail, Phone, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutDetails() {
  const infoItems = [
    {
      icon: <MapPin size={18} className="text-neutral-900" />,
      label: "Location",
      value: "Jodhpur, Rajasthan",
      href: "https://www.google.com/maps/place/Jodhpur,+Rajasthan"
    },
    {
      icon: <Mail size={18} className="text-neutral-900" />,
      label: "Email",
      value: "anilprajapati8070@gmail.com",
      href: "mailto:anilprajapati8070@gmail.com"
    },
    {
      icon: <Phone size={18} className="text-neutral-900" />,
      label: "Phone",
      value: "+91 8955434243",
      href: "tel:+918955434243"
    },
    {
      icon: <GraduationCap size={18} className="text-neutral-900" />,
      label: "University",
      value: "LPU (2023-2027)",
      href: "https://www.lpu.in"
    },
  ];

  return (
    <section id="about-details" className="w-full min-h-screen snap-start snap-always flex flex-col justify-center px-8 md:px-24 py-16 text-black bg-transparent">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Bio Paragraphs */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[40px] border border-neutral-100 bg-neutral-50/20"
            >
              <p className="text-lg md:text-xl font-light text-neutral-600 leading-relaxed mb-8">
                I'm an aspiring software engineer from Jodhpur, Rajasthan, driven by problem-solving and analytical thinking. My passion lies in building scalable, user-focused solutions using emerging technologies.
              </p>
              <p className="text-lg md:text-xl font-light text-neutral-600 leading-relaxed">
                I actively participate in hackathons and tech communities, demonstrating teamwork, leadership, and innovation. My goal is to evolve into a versatile and impactful software professional while continuously enhancing my skills.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Info Cards Grid (2x2) */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {infoItems.map((item, index) => {
              const Content = (
                <div className="flex flex-col gap-4">
                  <div className="p-2.5 bg-neutral-100 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-1">
                      {item.label}
                    </span>
                    <span className="text-base font-light text-neutral-600 leading-snug">
                      {item.value}
                    </span>
                  </div>
                </div>
              );

              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl border border-neutral-100 bg-white hover:bg-neutral-50 transition-all duration-300 group shadow-sm flex flex-col justify-between min-h-[160px]"
                >
                  {Content}
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
