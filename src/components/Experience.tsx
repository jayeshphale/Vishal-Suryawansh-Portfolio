import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { workExperience } from "../data";
import { Calendar, MapPin, Briefcase, ChevronDown, Award, Star } from "lucide-react";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <section id="experience" className="py-20 relative bg-slate-950/15">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">04 / HISTORY & TIMELINE</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Professional <span className="text-gradient-azure">Work Experience</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Over a decade of leading and architecting engineering pipelines for enterprise organizations, startups, and international digital portals.
          </p>
          <div className="w-12 h-[3px] bg-cyan-400 mt-4 rounded" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12 pb-8">
          {workExperience.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={exp.id} className="relative pl-8 md:pl-10">
                {/* Timeline node icon */}
                <span className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border-2 border-blue-500 text-blue-400 shadow-lg shadow-blue-500/20">
                  <Briefcase size={12} />
                </span>

                {/* Experience Card */}
                <div
                  className={`glass-card p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                    isExpanded
                      ? "border-blue-500/30 bg-slate-900/60 shadow-xl shadow-blue-500/5"
                      : "border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Card Title & Meta Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold text-lg md:text-xl text-white">
                          {exp.role}
                        </h3>
                        {idx === 0 && (
                          <span className="text-[9px] font-mono font-bold uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-display font-medium text-cyan-400 text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3.5 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-blue-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-cyan-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded-md border border-white/5 shadow-inner"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Accordion Description */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                    >
                      <span>{isExpanded ? "COLLAPSE_LOGS" : "EXPLORE_LOGS_AND_METRICS"}</span>
                      <ChevronDown
                        size={14}
                        className={`text-slate-500 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-cyan-400" : ""
                        }`}
                      />
                    </button>
                    <span className="text-[10px] font-mono text-slate-600">SYS_LOG_XP_0{idx + 1}</span>
                  </div>

                  {/* Expanded Information */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-6 border-t border-white/5 pt-6 space-y-6"
                      >
                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                            <Star size={12} className="fill-cyan-400/10" /> Core Duties & Architectural Contributions
                          </h4>
                          <ul className="space-y-3 pl-1">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
                                <span className="text-blue-500 text-sm mt-0.5 shrink-0">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="bg-blue-600/5 rounded-xl border border-blue-500/10 p-5">
                            <h4 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                              <Award size={13} /> Project Metrics & Achievements
                            </h4>
                            <ul className="space-y-2.5 pl-1">
                              {exp.achievements.map((ach, aIdx) => (
                                <li key={aIdx} className="flex gap-2 text-xs md:text-sm text-slate-300">
                                  <span className="text-emerald-400 font-semibold shrink-0">✓</span>
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
