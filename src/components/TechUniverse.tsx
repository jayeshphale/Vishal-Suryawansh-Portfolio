import React, { useState } from "react";
import { motion } from "motion/react";
import { Cpu, Cloud, Bot, Database, Globe, Layers } from "lucide-react";

interface OrbitItem {
  name: string;
  angle: number;
  color: string;
}

export default function TechUniverse() {
  const [activeSystem, setActiveSystem] = useState<string>("all");

  // Systems configurations
  const systems = [
    {
      id: "dotnet",
      center: { name: ".NET Core", color: "text-purple-400 bg-purple-500/10 border-purple-500/30", icon: <Layers size={24} /> },
      orbits: [
        { name: "C#", angle: 0, color: "text-purple-300" },
        { name: "ASP.NET Core", angle: 72, color: "text-indigo-300" },
        { name: "Entity Framework", angle: 144, color: "text-violet-300" },
        { name: "Web API", angle: 216, color: "text-fuchsia-300" },
        { name: "LINQ", angle: 288, color: "text-purple-400" }
      ]
    },
    {
      id: "azure",
      center: { name: "Azure Cloud", color: "text-blue-400 bg-blue-500/10 border-blue-500/30", icon: <Cloud size={24} /> },
      orbits: [
        { name: "Service Bus", angle: 0, color: "text-blue-300" },
        { name: "Key Vault", angle: 60, color: "text-cyan-300" },
        { name: "App Insights", angle: 120, color: "text-sky-300" },
        { name: "Azure AD", angle: 180, color: "text-indigo-300" },
        { name: "Functions", angle: 240, color: "text-blue-400" },
        { name: "API Gateway", angle: 300, color: "text-teal-300" }
      ]
    },
    {
      id: "chatgpt",
      center: { name: "Generative AI", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30", icon: <Bot size={24} /> },
      orbits: [
        { name: "Copilot Studio", angle: 0, color: "text-emerald-300" },
        { name: "Azure OpenAI", angle: 72, color: "text-teal-300" },
        { name: "Prompt Eng.", angle: 144, color: "text-green-300" },
        { name: "AI Agents", angle: 216, color: "text-emerald-400" },
        { name: "RAG Automation", angle: 288, color: "text-cyan-300" }
      ]
    },
    {
      id: "javascript",
      center: { name: "JavaScript", color: "text-amber-400 bg-amber-500/10 border-amber-500/30", icon: <Globe size={24} /> },
      orbits: [
        { name: "React", angle: 0, color: "text-cyan-300" },
        { name: "TypeScript", angle: 90, color: "text-blue-400" },
        { name: "Vite & ESM", angle: 180, color: "text-yellow-300" },
        { name: "Tailwind CSS", angle: 270, color: "text-teal-300" }
      ]
    },
    {
      id: "sqlserver",
      center: { name: "SQL Server", color: "text-red-400 bg-red-500/10 border-red-500/30", icon: <Database size={24} /> },
      orbits: [
        { name: "T-SQL", angle: 0, color: "text-red-300" },
        { name: "Redis Cache", angle: 90, color: "text-orange-300" },
        { name: "PostgreSQL", angle: 180, color: "text-rose-300" },
        { name: "Drizzle / EF", angle: 270, color: "text-amber-300" }
      ]
    }
  ];

  return (
    <section id="tech-universe" className="py-20 relative bg-slate-950/40 border-y border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">08 / TECHNICAL GRAVITY</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            The Interactive <span className="text-gradient-azure">Technology Universe</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl mx-auto">
            A dynamic orbital visualization displaying engineering systems slowly rotating around central tech paradigms. Select a system node to study local gravitational clusters.
          </p>
          <div className="w-12 h-[3px] bg-blue-600 mt-4 rounded mx-auto" />
        </div>

        {/* System Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16" id="universe-system-selectors">
          <button
            onClick={() => setActiveSystem("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
              activeSystem === "all"
                ? "bg-blue-500/10 border-blue-500/30 text-white"
                : "bg-slate-900/60 border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            SHOW_ALL_COSMOS
          </button>
          {systems.map((sys) => (
            <button
              key={sys.id}
              onClick={() => setActiveSystem(sys.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all uppercase cursor-pointer ${
                activeSystem === sys.id
                  ? "bg-cyan-500/10 border-cyan-500/30 text-white"
                  : "bg-slate-900/60 border-white/5 text-slate-400 hover:text-white"
              }`}
            >
              Orbit: {sys.id}
            </button>
          ))}
        </div>

        {/* Orbit Map Board */}
        <div className="relative w-full min-h-[600px] flex items-center justify-center p-4">
          <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />

          {/* Universe Container */}
          <div className="relative w-full max-w-[650px] aspect-square flex items-center justify-center">
            
            {/* Displaying Orbital Systems */}
            {systems.map((sys, sysIdx) => {
              const isVisible = activeSystem === "all" || activeSystem === sys.id;
              
              // Positioning systems nicely around center if "all" is active, or centered if selected
              const angleOffset = (sysIdx * (360 / systems.length) * Math.PI) / 180;
              const radius = activeSystem === "all" ? 190 : 0;
              const xPos = radius * Math.cos(angleOffset);
              const yPos = radius * Math.sin(angleOffset);

              return (
                <motion.div
                  key={sys.id}
                  animate={{
                    x: xPos,
                    y: yPos,
                    scale: isVisible ? 1 : 0.4,
                    opacity: isVisible ? 1 : 0.08
                  }}
                  transition={{ type: "spring", stiffness: 70, damping: 15 }}
                  className="absolute"
                  style={{
                    width: activeSystem === "all" ? "140px" : "320px",
                    height: activeSystem === "all" ? "140px" : "320px",
                    zIndex: activeSystem === sys.id ? 20 : 10
                  }}
                >
                  {/* Gravitational Circular Orbit Rings */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/5 animate-spin-slow" style={{ animationDuration: `${20 + sysIdx * 5}s` }}>
                    {/* Orbit lines and paths */}
                    <svg className="w-full h-full absolute inset-0 pointer-events-none overflow-visible">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="50%"
                        fill="none"
                        stroke="rgba(37, 99, 235, 0.04)"
                        strokeWidth="1.5"
                      />
                    </svg>

                    {/* Orbiting Satellite Tech Names */}
                    {sys.orbits.map((sat, satIdx) => {
                      const satAngle = (sat.angle * Math.PI) / 180;
                      const satRadius = 50; // Percentage basis
                      const satLeft = `calc(50% + ${Math.cos(satAngle) * satRadius}%)`;
                      const satTop = `calc(50% + ${Math.sin(satAngle) * satRadius}%)`;

                      return (
                        <div
                          key={sat.name}
                          className="absolute -translate-x-1/2 -translate-y-1/2 select-none"
                          style={{ left: satLeft, top: satTop }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.15, zIndex: 30 }}
                            className="bg-slate-950/90 border border-white/10 px-2 py-1 rounded-md text-[9px] font-mono whitespace-nowrap shadow-md flex items-center gap-1 cursor-crosshair text-slate-300 hover:text-white"
                          >
                            <span className="w-1 h-1 rounded-full bg-cyan-400" />
                            {sat.name}
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Central Body representation of the paradigm */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      onClick={() => setActiveSystem(sys.id)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border flex flex-col items-center justify-center p-2 text-center cursor-pointer shadow-lg backdrop-blur-md transition-all ${sys.center.color}`}
                    >
                      {sys.center.icon}
                      <span className="text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-tight mt-1 truncate max-w-full">
                        {sys.center.name}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}

            {/* Central Master Hub Connector representing the Solution Architect Core */}
            {activeSystem === "all" && (
              <div className="absolute w-24 h-24 rounded-full bg-slate-950 border border-white/10 flex flex-col items-center justify-center text-center shadow-2xl z-0">
                <Cpu size={22} className="text-blue-500 animate-pulse" />
                <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest mt-1">SLA_CORE</span>
              </div>
            )}

          </div>
        </div>

        {/* Explanatory Info Card */}
        <div className="max-w-md mx-auto p-4 rounded-xl glass-card border border-white/5 bg-slate-950/60 text-left font-mono mt-8 flex gap-3 items-start">
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
            <Layers size={14} />
          </div>
          <div className="text-[10px] text-slate-400 space-y-1">
            <p className="text-white font-bold">GRAVITATIONAL MAP METADATA</p>
            <p>• Nodes spin at relative celestial frequencies mimicking async processing speeds.</p>
            <p>• Hover over individual orbital particles to inspect active engineering libraries.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
