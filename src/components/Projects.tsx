import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { Project } from "../types";
import { ExternalLink, Github, Filter, Code, Info, Shield, Layers, HelpCircle, CheckCircle, ChevronRight, X } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ["All", "Cloud & Integrations", "Full Stack Web", "AI & Automation", "E-Commerce", "OTT & Streaming"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Helper to generate a unique responsive visual representation based on project id
  const renderProjectArtwork = (id: string) => {
    const gradients: Record<string, string> = {
      "proj-bh": "from-blue-600 via-blue-500 to-cyan-400",
      "proj-ldg": "from-cyan-500 via-teal-400 to-emerald-500",
      "proj-crl": "from-emerald-500 via-blue-500 to-cyan-400",
      "proj-chatbot": "from-purple-600 via-violet-500 to-blue-500",
      "proj-rx": "from-violet-600 via-pink-500 to-red-500",
      "proj-ultrag": "from-blue-600 via-slate-800 to-indigo-700"
    };

    const gradient = gradients[id] || "from-blue-600 to-cyan-400";

    return (
      <div className={`relative w-full aspect-video bg-gradient-to-tr ${gradient} flex items-center justify-center p-6 overflow-hidden rounded-t-xl group`}>
        {/* Animated pattern in background */}
        <div className="absolute inset-0 grid-overlay opacity-20 group-hover:opacity-35 transition-opacity duration-300" />
        
        {/* Abstract vector shape representing systems integration */}
        <div className="relative z-10 w-20 h-20 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center text-white shadow-xl shadow-slate-950/30 group-hover:scale-105 transition-transform duration-300">
          <Code size={36} className="text-white opacity-85" />
        </div>

        {/* Small badge overlay */}
        <span className="absolute bottom-3 right-3 text-[9px] font-mono uppercase bg-slate-950/80 px-2.5 py-1 rounded border border-white/10 text-slate-300 tracking-wider">
          Enterprise Node
        </span>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">07 / PROJECT PORTFOLIO</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Featured <span className="text-gradient-azure">Enterprise Projects</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            A comprehensive gallery of enterprise systems, automated workflows, custom ecommerce services, and cloud integrations built for worldwide clients.
          </p>
          <div className="w-12 h-[3px] bg-blue-600 mt-4 rounded" />
        </div>

        {/* Filter Category Control */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/5" id="projects-filter-container">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold font-display tracking-wide transition-all focus:outline-none cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-slate-900/60 border border-white/5 text-slate-400 hover:text-white"
              }`}
            >
              {cat === "All" && <Filter size={12} />}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              layout
              key={proj.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card flex flex-col justify-between h-full rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/5 group"
            >
              <div>
                {/* Artwork Area */}
                {renderProjectArtwork(proj.id)}

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase block bg-cyan-400/5 px-2.5 py-0.5 rounded border border-cyan-500/10">
                      {proj.category}
                    </span>
                    {proj.role && (
                      <span className="text-[9px] font-mono text-slate-500 truncate max-w-[150px]">
                        ROLE: {proj.role.toUpperCase()}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-base md:text-lg text-white group-hover:text-cyan-400 transition-colors mt-2">
                    {proj.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed mt-2 line-clamp-3">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Badges and Call-To-Actions Footer */}
              <div className="p-6 pt-0 border-t border-white/[0.03] mt-4 flex flex-col gap-4">
                <div className="flex flex-wrap gap-1 mt-3">
                  {proj.tech.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.tech.length > 4 && (
                    <span className="text-[9px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-white/5">
                      +{proj.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2.5 items-center justify-between border-t border-white/5 pt-4">
                  <button
                    onClick={() => setActiveProjectModal(proj)}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                  >
                    <span>EXPLORE_SPECIFICATIONS</span>
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-white/20"
                        aria-label="GitHub Repository"
                      >
                        <Github size={13} />
                      </a>
                    )}
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-white/20"
                        aria-label="Live Demo Link"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Project Details Modal Overlay */}
        <AnimatePresence>
          {activeProjectModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" id="project-details-overlay">
              {/* Backing shadow click closer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProjectModal(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-2xl bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/5 z-10 flex flex-col max-h-[85vh]"
              >
                {/* Header Title with background gradient */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-slate-900/40">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                      {activeProjectModal.category}
                    </span>
                    <h3 className="font-display font-bold text-lg md:text-xl text-white">
                      {activeProjectModal.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="p-2 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-colors focus:outline-none"
                    aria-label="Close modal"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Scrollable details */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm">
                  {/* General Overview */}
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Info size={12} className="text-blue-500" /> Executive Overview
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-xs md:text-sm">
                      {activeProjectModal.description}
                    </p>
                  </div>

                  {/* Technical Meta Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/60 p-4 rounded-xl border border-white/5 text-xs">
                    <div>
                      <span className="text-slate-500 font-mono block">My Role / Direct Assignment</span>
                      <span className="text-white font-medium block mt-0.5">{activeProjectModal.role || "Lead Software Engineer"}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-mono block">Architectural Framework</span>
                      <span className="text-white font-medium block mt-0.5">{activeProjectModal.architecture || "Domain Driven Clean Architecture"}</span>
                    </div>
                  </div>

                  {/* Core Duties */}
                  {activeProjectModal.responsibilities && (
                    <div>
                      <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                        <Layers size={12} className="text-cyan-400" /> Core Responsibilities
                      </h4>
                      <ul className="space-y-2 pl-1">
                        {activeProjectModal.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex gap-2 text-xs text-slate-300">
                            <span className="text-blue-500 shrink-0">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Problem & Solution block */}
                  {activeProjectModal.challenges && activeProjectModal.solution && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="p-4 rounded-xl border border-amber-500/10 bg-amber-500/5">
                        <h5 className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <HelpCircle size={12} /> Technical Challenge
                        </h5>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {activeProjectModal.challenges}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5">
                        <h5 className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <CheckCircle size={12} /> Implemented Solution
                        </h5>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {activeProjectModal.solution}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Full stack components */}
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Complete Stack & Integrations</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProjectModal.tech.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-white/5 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 border-t border-white/5 bg-slate-900/40 flex items-center justify-end gap-3">
                  {activeProjectModal.githubUrl && (
                    <a
                      href={activeProjectModal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Github size={14} />
                      View Code
                    </a>
                  )}
                  {activeProjectModal.demoUrl && (
                    <a
                      href={activeProjectModal.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2 rounded-xl bg-slate-900 border border-white/5 hover:border-white/20 text-slate-400 hover:text-white text-xs font-semibold transition-colors focus:outline-none cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
