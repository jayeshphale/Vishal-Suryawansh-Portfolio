import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, MapPin, Cpu, Database, Cloud } from "lucide-react";
import { personalInfo } from "../data";
import Avatar from "./Avatar";

export default function Hero() {
  const words = [
    "Senior Software Engineer",
    "Solution Architect",
    "Technical Lead",
    "Azure Cloud Engineer",
    "AI Engineer",
    "Generative AI Specialist",
    "Microsoft Copilot Studio Expert",
    ".NET Full Stack Developer",
    "REST API Developer",
    "Microservices Architect"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          // Pause at the end of typing
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
        } else {
          setTypingSpeed(45);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1hIRO5t082dMrSSa0v9Rk1qesQtmjZG4B/view", "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Copy and CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs w-max mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Enterprise Solutions & Architecture
          </motion.div>

          {/* Large Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl xl:text-7xl leading-[1.1] text-white tracking-tight">
              Hello, I'm <br />
              <span className="text-gradient-azure inline-flex flex-wrap">
                {"VISHAL SURYAWANSHI".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.2 + index * 0.04,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          {/* Typing Animation Role */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-10 md:h-12 flex items-center mt-4 mb-6"
          >
            <p className="text-lg md:text-2xl text-slate-300 font-display font-medium">
              A professional{" "}
              <span className="text-gradient-purple font-bold font-mono typing-cursor px-1 bg-violet-500/5 rounded">
                {currentText}
              </span>
            </p>
          </motion.div>

          {/* Summary Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mb-8"
          >
            Senior Technical Lead with over a decade of hands-on expertise building cloud-native architectures, enterprise backend networks on .NET Core, and intelligent AI chatbots with Azure & Copilot Studio.
          </motion.p>

          {/* Action Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 group cursor-pointer focus:outline-none"
            >
              View Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer focus:outline-none"
            >
              <Download size={14} />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3.5 rounded-xl text-slate-400 hover:text-white text-xs font-semibold transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              Hire Me
            </button>
          </motion.div>

          {/* Quick Contact Specs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-y-3 gap-x-6 text-slate-400 text-xs font-mono border-t border-white/5 pt-6"
          >
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin size={14} className="text-blue-500" />
              Pune, Maharashtra, India
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-cyan-500" />
              vishalgoneado@gmail.com
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-emerald-500" />
              +91 9158926915
            </span>
          </motion.div>
        </div>

        {/* Right Side: Interactive Visual Avatar representation */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center gap-6">
          <Avatar />
          
          {/* Social Links underneath the Avatar */}
          <div className="flex justify-center gap-4 z-20">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-all hover:scale-105"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Down mouse */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-[10px] font-mono select-none pointer-events-none">
        <span className="tracking-widest uppercase">Scroll Down</span>
        <div className="w-[18px] h-[30px] rounded-full border border-slate-700 p-1 flex justify-center">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full bg-cyan-400"
          />
        </div>
      </div>
    </section>
  );
}
