import React, { useState } from "react";
import { motion } from "motion/react";
import { Network, Database, RefreshCw, Activity, Layers, ArrowRight, Settings } from "lucide-react";

export default function Architecture() {
  const [activeTab, setActiveTab] = useState<"clean" | "microservices" | "cicd">("clean");

  return (
    <section id="architecture" className="py-20 relative bg-slate-950/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">06 / SYSTEM ENGINEERING</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Enterprise <span className="text-gradient-azure">Architecture Blueprints</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Interactive visual maps demonstrating Clean Architecture separations, decoupled messaging patterns via Azure Service Bus, and modern CI/CD deployment chains.
          </p>
          <div className="w-12 h-[3px] bg-cyan-500 mt-4 rounded" />
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/5" id="architecture-tabs-container">
          <button
            onClick={() => setActiveTab("clean")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold font-display tracking-wide transition-all focus:outline-none cursor-pointer ${
              activeTab === "clean"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-slate-900/60 border border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            <Layers size={14} />
            Clean Architecture (.NET Core)
          </button>
          <button
            onClick={() => setActiveTab("microservices")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold font-display tracking-wide transition-all focus:outline-none cursor-pointer ${
              activeTab === "microservices"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-slate-900/60 border border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            <Network size={14} />
            Azure Service Bus Pub-Sub & API Flow
          </button>
          <button
            onClick={() => setActiveTab("cicd")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold font-display tracking-wide transition-all focus:outline-none cursor-pointer ${
              activeTab === "cicd"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-slate-900/60 border border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            <RefreshCw size={14} />
            Cloud Native CI/CD & APM Pipelines
          </button>
        </div>

        {/* Interactive SVGs Screen wrapper */}
        <div className="glass-panel p-6 md:p-10 rounded-2xl border border-white/5 bg-slate-950/60 relative overflow-hidden flex flex-col items-center justify-center">
          
          {/* Static design accents inside visual layout */}
          <div className="absolute top-4 left-6 flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase">
            <Settings size={10} className="animate-spin-slow text-blue-500" />
            <span>Active Blueprint: {activeTab === "clean" ? "Clean_Architecture_v3" : activeTab === "microservices" ? "Event_Bus_Workflow" : "SRE_CI_CD_Chain"}</span>
          </div>

          <div className="w-full max-w-[800px] aspect-[16/9] mt-8 flex justify-center items-center">
            {activeTab === "clean" && (
              <svg viewBox="0 0 800 450" className="w-full h-full font-sans select-none" id="svg-clean-architecture">
                {/* Background circles representing clean architecture boundary layers */}
                {/* Outer Presentation/API Layer */}
                <circle cx="400" cy="225" r="210" fill="none" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="2" />
                {/* Infrastructure Layer */}
                <circle cx="400" cy="225" r="155" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="2" strokeDasharray="6 4" />
                {/* Application Core */}
                <circle cx="400" cy="225" r="105" fill="none" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="2" />
                {/* Core Domain / Entities */}
                <circle cx="400" cy="225" r="55" fill="rgba(37, 99, 235, 0.05)" stroke="#2563EB" strokeWidth="2.5" />

                {/* Animated flowing dots showing inward dependency rule */}
                <path d="M 400 15 A 400 210 0 0 1 400 435" fill="none" stroke="transparent" id="dependency-flow-path">
                  <animate attributeName="stroke" values="rgba(37,99,235,0)" dur="2s" repeatCount="indefinite" />
                </path>

                {/* Inner Core Label */}
                <text x="400" y="222" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">DOMAIN</text>
                <text x="400" y="235" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">Entities & Rules</text>

                {/* Application Layer Label */}
                <text x="400" y="145" fill="#a78bfa" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">APPLICATION LAYER</text>
                <text x="400" y="157" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">CQRS, Services, Interfaces</text>

                {/* Infrastructure Layer Label */}
                <text x="400" y="95" fill="#22d3ee" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">INFRASTRUCTURE LAYER</text>
                <text x="400" y="107" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">EF Core, Key Vault, Service Bus</text>

                {/* Presentation / Web API Layer Label */}
                <text x="400" y="45" fill="#3b82f6" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">PRESENTATION (WEB API)</text>
                <text x="400" y="57" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">ASP.NET Controllers, Middleware</text>

                {/* Inward Dependency arrows */}
                <path d="M 400 70 L 400 115" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <path d="M 400 120 L 400 165" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1.5" markerEnd="url(#arrow)" />
                
                {/* Arrow markers definitions */}
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 2 L 8 5 L 0 8 z" fill="#2563EB" />
                  </marker>
                </defs>

                {/* Technical architecture principles labels in background corners */}
                <text x="35" y="40" fill="#475569" fontSize="9" fontFamily="monospace">SOLID_COMPLIANT: TRUE</text>
                <text x="35" y="60" fill="#475569" fontSize="9" fontFamily="monospace">REPOSITORY_PATTERN: ACTIVE</text>
                <text x="590" y="40" fill="#475569" fontSize="9" fontFamily="monospace">DEP_INJECTION: AUTOFAC</text>
                <text x="590" y="60" fill="#475569" fontSize="9" fontFamily="monospace">TEST_COVERAGE: 85%</text>
              </svg>
            )}

            {activeTab === "microservices" && (
              <svg viewBox="0 0 800 450" className="w-full h-full font-sans select-none" id="svg-microservices">
                {/* Client / API Gateway node */}
                <rect x="30" y="195" width="120" height="60" rx="8" fill="rgba(30, 41, 59, 0.8)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <text x="90" y="225" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">Client App / SPA</text>
                <text x="90" y="238" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">React / Angular</text>

                {/* Arrow to Gateway */}
                <line x1="150" y1="225" x2="200" y2="225" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 3" />

                {/* API Gateway */}
                <rect x="200" y="145" width="120" height="160" rx="10" fill="rgba(37, 99, 235, 0.05)" stroke="#2563eb" strokeWidth="1.5" />
                <text x="260" y="215" fill="#2563eb" fontSize="12" fontWeight="bold" textAnchor="middle">API Gateway</text>
                <text x="260" y="230" fill="#94a3b8" fontSize="9" textAnchor="middle">Rate Limiting / Routing</text>
                <text x="260" y="245" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">Ocelot / YARP</text>

                {/* Split lines to Microservices */}
                <path d="M 320 225 L 370 145" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 320 225 L 370 305" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Microservice 1: ASP.NET Web API */}
                <rect x="370" y="115" width="130" height="60" rx="8" fill="rgba(30, 41, 59, 0.8)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <text x="435" y="145" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Order Microservice</text>
                <text x="435" y="157" fill="#22d3ee" fontSize="8" fontFamily="monospace" textAnchor="middle">ASP.NET Core Web API</text>

                {/* Microservice 2: Laravel/PHP or secondary service */}
                <rect x="370" y="275" width="130" height="60" rx="8" fill="rgba(30, 41, 59, 0.8)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <text x="435" y="305" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Catalog Microservice</text>
                <text x="435" y="317" fill="#8b5cf6" fontSize="8" fontFamily="monospace" textAnchor="middle">Laravel API / Node.js</text>

                {/* Connections to Service Bus */}
                <path d="M 500 145 L 560 195" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
                <path d="M 500 305 L 560 255" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" />

                {/* Azure Service Bus Queue */}
                <rect x="560" y="175" width="190" height="100" rx="12" fill="rgba(6, 182, 212, 0.05)" stroke="#06b6d4" strokeWidth="2" />
                <text x="655" y="215" fill="#06b6d4" fontSize="12" fontWeight="bold" textAnchor="middle">Azure Service Bus</text>
                <text x="655" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle">Asynchronous Event Queue</text>
                <text x="655" y="248" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">PUBLISH / SUBSCRIBE TOPICS</text>

                {/* Background telemetry markers */}
                <circle cx="435" cy="145" r="45" fill="none" stroke="rgba(6,182,212,0.08)" strokeWidth="1" />
                <circle cx="435" cy="305" r="45" fill="none" stroke="rgba(139,92,246,0.08)" strokeWidth="1" />
              </svg>
            )}

            {activeTab === "cicd" && (
              <svg viewBox="0 0 800 450" className="w-full h-full font-sans select-none" id="svg-cicd">
                {/* Stage 1: Developer Commit */}
                <rect x="30" y="195" width="110" height="60" rx="8" fill="rgba(30, 41, 59, 0.8)" stroke="rgba(255,255,255,0.08)" />
                <text x="85" y="225" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Code Commit</text>
                <text x="85" y="238" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">GitHub / Git Branch</text>

                {/* Flow lines */}
                <line x1="140" y1="225" x2="190" y2="225" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Stage 2: GitHub Actions / CI pipeline */}
                <rect x="190" y="165" width="130" height="120" rx="10" fill="rgba(37, 99, 235, 0.05)" stroke="#2563eb" strokeWidth="1.5" />
                <text x="255" y="200" fill="#2563eb" fontSize="11" fontWeight="bold" textAnchor="middle">GitHub Actions</text>
                <text x="255" y="218" fill="#94a3b8" fontSize="9" textAnchor="middle">Linter & Unit Tests</text>
                <text x="255" y="235" fill="#94a3b8" fontSize="9" textAnchor="middle">Docker Image Build</text>
                <text x="255" y="252" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">SYS_TRIGGER: ON_PUSH</text>

                <line x1="320" y1="225" x2="370" y2="225" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Stage 3: Azure Container Registry / Cloud Deployment */}
                <rect x="370" y="180" width="150" height="90" rx="10" fill="rgba(6, 182, 212, 0.05)" stroke="#06b6d4" strokeWidth="1.5" />
                <text x="445" y="215" fill="#06b6d4" fontSize="11" fontWeight="bold" textAnchor="middle">Azure Web App Service</text>
                <text x="445" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle">Cloud Hosting & Auth</text>
                <text x="445" y="248" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">DOCKER_CONTAINER_V10</text>

                <line x1="520" y1="225" x2="570" y2="225" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Stage 4: APM Monitoring & Logging */}
                <rect x="570" y="165" width="190" height="120" rx="10" fill="rgba(139, 92, 246, 0.05)" stroke="#8b5cf6" strokeWidth="1.5" />
                <text x="665" y="195" fill="#8b5cf6" fontSize="11" fontWeight="bold" textAnchor="middle">Telemetry & Monitoring</text>
                <text x="665" y="215" fill="#ffffff" fontSize="9" textAnchor="middle">Dynatrace Distributed Traces</text>
                <text x="665" y="230" fill="#ffffff" fontSize="9" textAnchor="middle">Azure Application Insights</text>
                <text x="665" y="252" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">STATUS: HEALTY & STABLE</text>
                <text x="665" y="265" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">SLA_LOG: CAPTURING</text>
              </svg>
            )}

          </div>
        </div>

        {/* Visual architecture footer list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-card p-5 rounded-xl border border-white/5 flex flex-col justify-between">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" /> Scalability Patterns
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Decoupled message queues prevent backend system failure, handling up to 5,000+ operations/min smoothly.
            </p>
          </div>
          <div className="glass-card p-5 rounded-xl border border-white/5 flex flex-col justify-between">
            <h4 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Repository Pattern & DI
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Safeguards direct database queries, allowing frictionless mocks during automated testing procedures.
            </p>
          </div>
          <div className="glass-card p-5 rounded-xl border border-white/5 flex flex-col justify-between">
            <h4 className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" /> SRE Production Support
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dynatrace distributed tracing maps dependencies end-to-end for rapid crash recovery under 5 minutes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
