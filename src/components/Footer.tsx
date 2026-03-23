"use client";

import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

const quickLinks = [
  { name: "About", id: "about-me" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Contact", id: "contact" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Extra-Curricular", id: "extra-curricular" },
];

export default function Footer() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="w-full min-h-screen snap-start snap-always flex flex-col justify-between px-8 md:px-24 pt-24 pb-8 bg-[#0a0a0a] text-white">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
        
        {/* Left Column: Bio & Action */}
        <div className="flex flex-col pt-8">
          <span className="text-neutral-500 font-mono text-xs uppercase tracking-[0.4em] mb-8">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Anil Prajapat</h2>
          <p className="text-neutral-400 font-light leading-relaxed mb-12 max-w-sm">
            Full-stack engineer crafting thoughtful, high-performance experiences for ambitious ideas. 
            Passionate about developer experience, backend architecture, and polished front-end interactions.
          </p>
          
          <div className="flex flex-col gap-6">
            <a
              href="/Anil_Prajapat_Resume.pdf" 
              download="Anil_Prajapat_Resume.pdf"
              className="flex items-center gap-3 bg-neutral-900/80 border border-neutral-800 text-white px-8 py-4 rounded-full w-fit hover:bg-white hover:text-black transition-all duration-500 group"
            >
              <Download size={18} className="text-neutral-500 group-hover:text-black" />
              <span className="font-medium">Download Resume</span>
            </a>
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
        <div className="flex flex-col lg:items-center pt-8">
          <div className="flex flex-col">
            <span className="text-neutral-500 font-mono text-xs uppercase tracking-[0.4em] mb-12">Quick Links</span>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {quickLinks.map((link, i) => (
                <button 
                  key={i} 
                  onClick={() => handleScroll(link.id)}
                  className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 text-left"
                >
                  <span className="w-4 overflow-hidden">
                    <span className="block w-4 h-px bg-neutral-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  <span className="font-light whitespace-nowrap transform transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Stay Connected Cards */}
        <div className="flex flex-col pt-8">
          <span className="text-neutral-500 font-mono text-xs uppercase tracking-[0.4em] mb-12 lg:text-right">Stay Connected</span>
          
          <div className="flex flex-col gap-4 lg:items-end">
            {[
              { label: "Email", value: "anilprajapati8070@gmail.com", icon: <Mail size={16} />, href: "mailto:anilprajapati8070@gmail.com" },
              { label: "Github", value: "anilkumar8070", icon: <Github size={16} />, href: "https://github.com/anilkumar8070" },
              { label: "Linkedin", value: "anilprajapati8070", icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/anilprajapati8070/" }
            ].map((contact, i) => (
              <a 
                key={i}
                href={contact.href}
                target={contact.label !== "Email" ? "_blank" : undefined}
                rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group w-full lg:max-w-115 p-6 rounded-2xl bg-[#111111] border border-neutral-800 hover:border-neutral-600 transition-all duration-500 flex items-center justify-between cursor-pointer"
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
              </a>
            ))}
          </div>

          <div className="flex gap-8 mt-10 lg:justify-end">
             <a href="https://github.com/anilkumar8070" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="text-neutral-600 hover:text-white cursor-pointer transition-colors" />
             </a>
             <a href="https://www.linkedin.com/in/anilprajapati8070/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="text-neutral-600 hover:text-white cursor-pointer transition-colors" />
             </a>
             <a href="mailto:anilprajapati8070@gmail.com">
                <Mail size={20} className="text-neutral-600 hover:text-white cursor-pointer transition-colors" />
             </a>
          </div>
        </div>

      </div>

      <div className="w-full max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-900/80" />
    </footer>
  );
}
