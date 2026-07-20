import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "competencies", label: "Core" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "ai-expertise", label: "AI Space" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <footer className="border-t border-white/5 bg-[#020617] py-12 relative overflow-hidden" id="global-footer">
      {/* Visual background details */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[20vw] radial-glow-primary opacity-5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* Left Side: Brand Credits */}
        <div className="text-left max-w-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white">
              <Terminal size={16} />
            </div>
            <span className="font-display font-bold text-white text-base tracking-tight">
              VISHAL <span className="text-cyan-400">S.</span>
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-3 leading-relaxed">
            Architecting scalable cloud infrastructures, secure RESTful API integrations, and conversational enterprise AI agents. Pune, India.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono text-slate-400 max-w-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                const el = document.getElementById(item.id);
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = el.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="hover:text-cyan-400 transition-colors focus:outline-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Side: Social links and Back to top */}
        <div className="flex items-center gap-6 self-start md:self-auto">
          <div className="flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 hover:border-white/20 hover:text-white text-slate-400 flex items-center justify-center transition-all hover:-translate-y-0.5"
              aria-label="GitHub Repository"
            >
              <Github size={15} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 hover:border-white/20 hover:text-white text-slate-400 flex items-center justify-center transition-all hover:-translate-y-0.5"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 hover:border-white/20 hover:text-white text-slate-400 flex items-center justify-center transition-all hover:-translate-y-0.5"
              aria-label="Send Direct Email"
            >
              <Mail size={15} />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95 cursor-pointer focus:outline-none"
            aria-label="Scroll back to top of page"
            id="back-to-top-btn"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      {/* Under copyright notice */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 border-t border-white/[0.03] mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-600">
        <span>© {new Date().getFullYear()} VISHAL SURYAWANSHI. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED & ENGINEERED FOR HIGH-SCALE SLA COMPLIANCE</span>
      </div>
    </footer>
  );
}
