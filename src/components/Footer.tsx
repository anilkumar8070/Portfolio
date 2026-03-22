"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Achievements", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Skills", href: "#" },
  { name: "Education", href: "#" },
  { name: "Extra-Curricular", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full min-h-screen snap-start snap-always flex flex-col justify-center px-8 md:px-24 py-32 bg-[#0a0a0a] text-white">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-16">
        
        {/* Left Column: Bio & Action */}
        <div className="flex flex-col">
          <span className="text-neutral-500 font-mono text-xs uppercase tracking-[0.4em] mb-8">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Anil Prajapat</h2>
          <p className="text-neutral-400 font-light leading-relaxed mb-12 max-w-sm">
            Full-stack engineer crafting thoughtful, high-performance experiences for ambitious ideas. 
            Passionate about developer experience, backend architecture, and polished front-end interactions.
          </p>
          
          <div className="flex flex-col gap-6">
            <button className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 text-white px-8 py-4 rounded-full w-fit hover:bg-white hover:text-black transition-all duration-500 group">
              <Download size={18} className="text-neutral-500 group-hover:text-black" />
              <span className="font-medium">Download Resume</span>
            </button>
            <div className="flex items-center gap-2 text-neutral-500 text-sm font-light">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               <span className="ml-2 font-mono uppercase tracking-widest text-xs">Open to opportunities</span>
            </div>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="flex flex-col lg:items-center">
          <div className="flex flex-col">
            <span className="text-neutral-500 font-mono text-xs uppercase tracking-[0.4em] mb-12">Quick Links</span>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {quickLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <span className="w-0 group-hover:w-4 h-[1px] bg-neutral-500 transition-all duration-500" />
                  <span className="font-light">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Stay Connected Cards */}
        <div className="flex flex-col">
          <span className="text-neutral-500 font-mono text-xs uppercase tracking-[0.4em] mb-12 lg:text-right">Stay Connected</span>
          
          <div className="flex flex-col gap-4">
            {[
              { label: "Email", value: "anilprajapati8070@gmail.com", icon: <Mail size={16} /> },
              { label: "Github", value: "anilkumar8070", icon: <Github size={16} /> },
              { label: "Linkedin", value: "anilprajapati8070", icon: <Linkedin size={16} /> }
            ].map((contact, i) => (
              <div 
                key={i}
                className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-all duration-500 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-neutral-500 group-hover:text-white">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-600 mb-0.5">{contact.label}</p>
                    <p className="text-sm font-light text-neutral-300 group-hover:text-white transition-colors">{contact.value}</p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-neutral-700 group-hover:text-white transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>

          <div className="flex gap-8 mt-12 lg:justify-end">
             <Github size={20} className="text-neutral-600 hover:text-white cursor-pointer transition-colors" />
             <Linkedin size={20} className="text-neutral-600 hover:text-white cursor-pointer transition-colors" />
             <Mail size={20} className="text-neutral-600 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

      </div>

      {/* Decorative Bottom */}
      <div className="mt-32 pt-12 border-t border-neutral-900 flex justify-between items-center opacity-30">
         <span className="text-[10px] font-mono tracking-[0.4em]">AP &copy; 2026</span>
         <span className="text-[10px] font-mono tracking-[0.4em]">Developed with passion</span>
      </div>
    </footer>
  );
}
