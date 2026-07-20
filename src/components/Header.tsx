import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal, Cpu, Award, Mail, Phone, Download, MapPin } from "lucide-react";
import { personalInfo } from "../data";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "competencies", label: "Core" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "ai-expertise", label: "AI Space" },
    { id: "architecture", label: "Architecture" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Open real resume from Google Drive
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1hIRO5t082dMrSSa0v9Rk1qesQtmjZG4B/view", "_blank");
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-900 z-55">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-slate-950/20"
            : "bg-transparent py-6"
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <Terminal size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="font-display font-bold text-white text-lg tracking-tight block">
                VISHAL <span className="text-cyan-400">S.</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider block uppercase">
                Solution Architect
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium font-display tracking-wide transition-all duration-300 focus:outline-none ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-white/[0.06] border border-white/[0.04] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 shadow-sm focus:outline-none"
              id="download-resume-btn"
            >
              <Download size={14} />
              Resume
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-medium text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 active:scale-95 focus:outline-none"
              id="hire-me-btn"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900/60 border border-white/5 text-slate-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-trigger"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[65px] bg-slate-950/95 backdrop-blur-xl z-40 lg:hidden border-t border-white/5"
            id="mobile-drawer"
          >
            <div className="flex flex-col h-full justify-between p-8 overflow-y-auto">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-3 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                      activeSection === item.id
                        ? "bg-blue-600/10 text-blue-400 border border-blue-500/20"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.02]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-white/5">
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/[0.02] active:scale-[0.98] transition-all"
                  id="mobile-download-resume"
                >
                  <Download size={16} />
                  Download Resume
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all text-center"
                  id="mobile-contact-me"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
