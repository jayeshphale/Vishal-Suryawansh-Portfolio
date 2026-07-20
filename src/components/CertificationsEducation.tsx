import React from "react";
import { motion } from "motion/react";
import { certifications, education } from "../data";
import { Award, GraduationCap, Calendar, Star, Building2, CheckCircle2 } from "lucide-react";

export default function CertificationsEducation() {
  return (
    <section id="certifications" className="py-20 relative bg-slate-950/15">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7">
            {/* Section Header */}
            <div className="mb-10">
              <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">08 / CREDENTIALS & LICENSES</p>
              <h2 className="font-display font-bold text-3xl text-white tracking-tight">
                Certifications & <span className="text-gradient-azure">Training</span>
              </h2>
              <div className="w-12 h-[3px] bg-blue-600 mt-4 rounded" />
            </div>

            {/* Certifications Cards Stack */}
            <div className="space-y-4" id="certifications-stack">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-card p-5 rounded-xl border border-white/5 hover:border-blue-500/10 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-blue-400 shrink-0 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Award size={18} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-display font-bold text-sm md:text-base text-white truncate group-hover:text-cyan-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-mono">
                      {cert.issuer} {cert.year && `• ${cert.year}`}
                    </p>
                  </div>
                  {cert.year === "Pursuing" && (
                    <span className="text-[9px] font-mono font-bold uppercase bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 px-2.5 py-1 rounded-full shrink-0">
                      Active
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5">
            {/* Section Header */}
            <div className="mb-10">
              <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-2">09 / ACADEMICS</p>
              <h2 className="font-display font-bold text-3xl text-white tracking-tight">
                Educational <span className="text-gradient-purple">Background</span>
              </h2>
              <div className="w-12 h-[3px] bg-purple-500 mt-4 rounded" />
            </div>

            {/* Education Timeline Cards */}
            <div className="relative border-l border-slate-800 pl-6 space-y-8" id="education-timeline">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline node */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-slate-950 border-2 border-purple-500 text-purple-400" />

                  <div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-purple-500/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap size={16} className="text-purple-400" />
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                        Academic Milestone
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-sm md:text-base text-white">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-xs text-slate-300 font-medium mt-1.5 flex items-center gap-1.5">
                      <Building2 size={12} className="text-slate-500" />
                      {edu.institution}
                    </p>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mt-4 pt-3 border-t border-white/[0.03]">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {edu.year}
                      </span>
                      <span className="text-emerald-400 bg-emerald-400/5 px-2 py-0.5 rounded border border-emerald-400/10">
                        Score: {edu.percentage}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Dossier Details */}
            <div className="mt-8 bg-slate-900/30 border border-white/5 rounded-xl p-5 space-y-3 text-xs text-slate-400 font-mono">
              <h4 className="text-xs font-mono text-slate-300 uppercase tracking-widest border-b border-white/5 pb-2">Personal Dossier</h4>
              <div className="flex justify-between">
                <span>Date of Birth:</span>
                <span className="text-white">31 August 1990</span>
              </div>
              <div className="flex justify-between">
                <span>Nationality:</span>
                <span className="text-white">Indian</span>
              </div>
              <div className="flex justify-between">
                <span>Languages:</span>
                <span className="text-white">English, Hindi, Marathi</span>
              </div>
              <div className="flex justify-between">
                <span>Passport Validity:</span>
                <span className="text-white">Valid till 2031</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
