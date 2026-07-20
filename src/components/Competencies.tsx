import React from "react";
import { motion } from "motion/react";
import { Layers, Cloud, Sparkles, Sliders, GitBranch, ShieldAlert, Cpu } from "lucide-react";
import { competencies } from "../data";

export default function Competencies() {
  // Mapping competencies list to corresponding design icons
  const iconsMap: Record<number, React.ReactNode> = {
    0: <Layers size={22} className="text-blue-400" />,
    1: <Cpu size={22} className="text-cyan-400" />,
    2: <Sparkles size={22} className="text-violet-400" />,
    3: <Cloud size={22} className="text-indigo-400" />,
    4: <Sliders size={22} className="text-emerald-400" />,
    5: <GitBranch size={22} className="text-amber-400" />
  };

  return (
    <section id="competencies" className="py-20 relative bg-slate-950/25">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">02 / CORE EXPERTISE</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Key Architectural <span className="text-gradient-purple">Competencies</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            My engineering and architecting principles focus on highly cohesive and loosely coupled frameworks, optimized performance, and secured infrastructure.
          </p>
          <div className="w-12 h-[3px] bg-purple-500 mt-4 rounded" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group flex flex-col justify-between min-h-[250px] ${
                idx === 0 || idx === 3 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* Background gradient highlights */}
              <div className="absolute top-0 right-0 w-40 h-40 radial-glow-primary opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header Line */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center shadow-inner">
                    {iconsMap[idx] || <Cpu size={22} className="text-blue-400" />}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                    COMPETENCY_0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {comp.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  {comp.description}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-white/5">
                {comp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Micro System Design Concept Quote */}
        <div className="mt-12 glass-card p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-blue-500/20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
              <ShieldAlert size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Adherence to Enterprise Compliance & Governance</h4>
              <p className="text-xs text-slate-400 mt-0.5">Every line of code and architectural layout aligns strictly with OWASP standards and Azure Security Center definitions.</p>
            </div>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-400/5 px-3 py-1.5 rounded-full border border-cyan-400/10 shrink-0">
            SLA_METRIC_99.99%
          </span>
        </div>

      </div>
    </section>
  );
}
