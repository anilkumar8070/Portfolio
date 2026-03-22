"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full min-h-screen snap-start snap-always flex flex-col justify-center px-8 md:px-24 py-32 bg-[#0a0a0a] text-white">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left Column: Kinetic Typography & Info */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-none mb-12">
              LET'S <br />
              <span className="text-neutral-500 italic font-light">BUILD</span> <br />
              SOMETHING <br />
              GREAT.
            </h2>
            
            <div className="flex flex-col gap-8 mt-16">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Mail size={18} />
                </div>
                <div>
                   <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">Email me at</p>
                   <p className="text-xl font-light">anilkprajapati8070@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Phone size={18} />
                </div>
                <div>
                   <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">Call me at</p>
                   <p className="text-xl font-light">+91 8955434243</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-16">
               {[
                 { icon: <Github size={20} />, link: "https://github.com" },
                 { icon: <Linkedin size={20} />, link: "https://linkedin.com" },
                 { icon: <Instagram size={20} />, link: "https://instagram.com" }
               ].map((social, i) => (
                 <motion.a
                   key={i}
                   href={social.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ y: -5 }}
                   className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-white transition-colors"
                 >
                   {social.icon}
                 </motion.a>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Minimalist Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-12 rounded-[2.5rem]"
        >
          <form className="flex flex-col gap-10">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="What's your name?"
                className="w-full bg-transparent border-b border-neutral-800 py-4 outline-none focus:border-white transition-colors transition-all duration-500 placeholder:text-neutral-600 text-lg font-light"
              />
            </div>

            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full bg-transparent border-b border-neutral-800 py-4 outline-none focus:border-white transition-colors transition-all duration-500 placeholder:text-neutral-600 text-lg font-light"
              />
            </div>

            <div className="relative group">
              <textarea 
                placeholder="Tell me about your project"
                rows={4}
                className="w-full bg-transparent border-b border-neutral-800 py-4 outline-none focus:border-white transition-colors transition-all duration-500 placeholder:text-neutral-600 text-lg font-light resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full py-6 rounded-2xl bg-white text-black font-medium text-lg flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors group"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>

      </div>

      {/* Subtle Footer */}
      <div className="absolute bottom-8 left-0 right-0 px-6 flex justify-center border-t border-neutral-900/50 pt-10">
        <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.1em] md:tracking-[0.4em] text-center">
          &copy; {new Date().getFullYear()} Anil Prajapat. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
