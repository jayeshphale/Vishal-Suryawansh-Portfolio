import React from "react";
import { motion } from "motion/react";
import { Shield, Eye, Award, Briefcase, Zap, HeartHandshake, FileText, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data";

export default function About() {
  const pillars = [
    {
      icon: <Shield size={24} className="text-blue-500" />,
      title: "Architectural Integrity",
      desc: "Architecting high-scale backend networks adhering to Clean Architecture, SOLID, and resilient cloud integration patterns."
    },
    {
      icon: <Zap size={24} className="text-cyan-400" />,
      title: "Digital Transformation",
      desc: "Enabling enterprise business process automation by systematically upgrading legacy networks and designing cloud solutions."
    },
    {
      icon: <Eye size={24} className="text-purple-400" />,
      title: "Intelligent AI Integration",
      desc: "Empowering businesses through conversational agents, Copilot Studio pipelines, and smart context-aware search engines."
    },
    {
      icon: <HeartHandshake size={24} className="text-emerald-400" />,
      title: "Technical Mentoring",
      desc: "Leading cross-functional developer teams, conducting code reviews, and fostering technical and engineering excellence."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">01 / PROFESSIONAL SUMMARY</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            About My <span className="text-gradient-azure">Career Journey</span>
          </h2>
          <div className="w-12 h-[3px] bg-blue-600 mt-4 rounded" />
        </div>

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Story Text */}
          <div className="lg:col-span-7 text-slate-300 space-y-6 text-sm md:text-base leading-relaxed">
            <p className="text-lg font-display text-white font-medium">
              A Seasoned Solution Architect, Technical Lead, and .NET Specialist delivering reliable enterprise software systems for over a decade.
            </p>
            <p>
              I specialize in designing and delivering enterprise-grade applications using Microsoft Technologies, Azure Cloud, AI, and Microservices. My technical experience spans across the complete SDLC, from initial system analysis and database design to cloud deployment, automated CI/CD automation, and SRE monitoring.
            </p>
            <p>
              I have successfully delivered cloud and full-stack software solutions across diverse business domains, including <strong className="text-white">Healthcare, Pharmaceuticals, Real Estate, Education, ERP, CRM, OTT, E-Commerce, and Intelligent Chatbots</strong>.
            </p>
            <p>
              In addition to my strong core in C# and the .NET ecosystem, I possess extensive technical familiarity with Node.js, Laravel (PHP), Java Spring Boot, and modern web frameworks such as Angular and React, allowing me to approach software architecture from a thoroughly holistic perspective.
            </p>
          </div>

          {/* Quick Pillars Panel */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center items-center h-40">
              <span className="block text-4xl md:text-5xl font-display font-extrabold text-white">10+</span>
              <span className="block text-xs font-mono text-cyan-400 uppercase tracking-widest mt-2">Years Exp</span>
              <p className="text-[10px] text-slate-400 mt-1">Enterprise Delivery</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center items-center h-40">
              <span className="block text-4xl md:text-5xl font-display font-extrabold text-white">50+</span>
              <span className="block text-xs font-mono text-blue-400 uppercase tracking-widest mt-2">Projects</span>
              <p className="text-[10px] text-slate-400 mt-1">Across Multi-Domains</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center items-center h-40">
              <span className="block text-4xl md:text-5xl font-display font-extrabold text-white">100+</span>
              <span className="block text-xs font-mono text-purple-400 uppercase tracking-widest mt-2">REST APIs</span>
              <p className="text-[10px] text-slate-400 mt-1">Designed & Tested</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center items-center h-40">
              <span className="block text-4xl md:text-5xl font-display font-extrabold text-white">20+</span>
              <span className="block text-xs font-mono text-emerald-400 uppercase tracking-widest mt-2">AI Agents</span>
              <p className="text-[10px] text-slate-400 mt-1">Designed & Tuned</p>
            </div>

          </div>
        </div>

        {/* Pillars / Values Section */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-xl text-white mb-8 flex items-center gap-2">
            <CheckCircle2 size={20} className="text-blue-500" />
            Core Architectural Principles & Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl hover-gradient-blue flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center border border-white/5 mb-5 shadow-inner">
                  {pillar.icon}
                </div>
                <h4 className="font-display font-semibold text-white text-base mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-auto">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
            <span className="text-xs font-mono text-blue-400 tracking-wider uppercase block mb-3">Professional Statement</span>
            <h4 className="font-display font-bold text-lg text-white mb-3">Our Engineering Mission</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              To build highly secure, self-healing, and performant backend infrastructures on Microsoft Azure that translate complex business requirements into elegant and scalable digital solutions, maintaining the highest standards of clean code.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block mb-3">Professional Statement</span>
            <h4 className="font-display font-bold text-lg text-white mb-3">Our AI & Automation Vision</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              To bridge the gap between traditional enterprise logic and generative intelligence, deploying cognitive agents, prompt chains, and automated copilots that optimize workflows, scale user support, and accelerate decision making.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
