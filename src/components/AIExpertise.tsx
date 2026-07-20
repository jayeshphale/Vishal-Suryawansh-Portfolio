import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Bot, Terminal, Cpu, ArrowRight, Workflow, Database, Play, RefreshCw, Send, Check } from "lucide-react";

export default function AIExpertise() {
  const [activeStep, setActiveStep] = useState(0);
  const [inputText, setInputText] = useState("Generate SLA Architecture report using Azure AD configuration...");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [flowLog, setFlowLog] = useState<string[]>([]);

  const aiCaps = [
    {
      title: "Microsoft Copilot Studio",
      desc: "Architecting enterprise conversational copilots integrated into SharePoint, Microsoft Teams, and website channels. Formulating complex dialog structures, trigger topics, entity models, and API fallbacks.",
      metric: "95% accuracy"
    },
    {
      title: "Azure AI & Cognitive Services",
      desc: "Leveraging Azure OpenAI, cognitive search tools, and vector embeddings to formulate Retrieval-Augmented Generation (RAG) models for secure private-data access controls.",
      metric: "RAG Pipelines"
    },
    {
      title: "AI Agents & Autonomous Workflows",
      desc: "Creating agent configurations backed by custom prompt chains and Power Automate system triggers that execute automated tasks such as document synthesis and live querying.",
      metric: "Zero-touch loops"
    },
    {
      title: "Prompt Engineering & Guardrails",
      desc: "Formulating stable, highly structured prompt templates and conversational policies that keep model answers accurate, constructive, safe, and aligned with enterprise brand rules.",
      metric: "OWASP Hardened"
    }
  ];

  const tools = [
    "ChatGPT Plus", "Claude 3.5 Sonnet", "GitHub Copilot", "Azure AI Search", 
    "Semantic Kernel", "Power Automate", "SharePoint APIs", "LlamaIndex"
  ];

  // Simulated AI agent engine states
  const agentSteps = [
    { id: "input", name: "User Input Gateway", detail: "Accepts prompts, scans credentials, and checks semantic security parameters." },
    { id: "guardrails", name: "Prompt Guardrails", detail: "Validates inputs against OWASP policies and applies brand alignment constraints." },
    { id: "orchestrator", name: "Copilot Studio Orchestration", detail: "Routes queries using entity classifiers, dialog loops, and adaptive intent models." },
    { id: "knowledge", name: "Knowledge Bases (RAG)", detail: "Queries SharePoint indexing, SQL Server, and Azure Search Vector stores." },
    { id: "llm", name: "Cognitive Models", detail: "Invokes Azure OpenAI, ChatGPT-4o, or Claude-3.5 APIs for smart synthesis." },
    { id: "automation", name: "Power Automate Actions", detail: "Executes enterprise API gateways, emails summaries, or updates databases." }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isProcessing) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          const next = prev + 1;
          if (next >= agentSteps.length) {
            setIsProcessing(false);
            setFlowLog((logs) => [...logs, "➜ [STATUS] System processed successfully. Response dispatched."]);
            return 0;
          }
          
          // Log dynamic events based on step
          const currentDetail = agentSteps[next].name;
          setFlowLog((logs) => [...logs, `➜ [EXEC] Activating Node: ${currentDetail}...`]);
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isProcessing]);

  const handleTriggerSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setSubmittedQuery(inputText);
    setIsProcessing(true);
    setActiveStep(0);
    setFlowLog([
      `➜ [INIT] Incoming prompt query received: "${inputText}"`,
      "➜ [EXEC] Authorizing user security context...",
      "➜ [EXEC] Node " + agentSteps[0].name + " is now handling the payload."
    ]);
  };

  return (
    <section id="ai-expertise" className="py-20 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">05 / INTELLIGENCE SUITE</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            AI Engineering & <span className="text-gradient-purple">Copilot Architecture</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            A specialized overview of cognitive software engineering, smart conversational systems, and generative agent flows built for enterprise customers.
          </p>
          <div className="w-12 h-[3px] bg-purple-600 mt-4 rounded" />
        </div>

        {/* Console Workspace Demo Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12">
          
          {/* Interactive Flow Diagram Console */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-panel p-6 rounded-2xl border border-white/5 bg-slate-950 relative overflow-hidden h-full min-h-[500px]">
            {/* Header circles */}
            <div className="flex items-center justify-between mb-5 border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full inline-block animate-pulse" />
                <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block" />
                <span className="w-3 h-3 bg-emerald-500 rounded-full inline-block" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Enterprise AI Orchestrator</span>
            </div>

            {/* Interactive Flow visualization diagram */}
            <div className="relative py-4 flex-grow flex flex-col justify-center">
              
              {/* Interactive SVG Flow Connectors Background */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <svg className="w-full h-full" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 200,30 L 200,75 M 200,115 L 200,160 M 200,200 L 110,230 M 200,200 L 290,230 M 110,260 L 200,290 M 290,260 L 200,290" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Glowing Flow Paths during simulation */}
                  {isProcessing && (
                    <>
                      <path d="M 200,30 L 200,75 M 200,115 L 200,160 M 200,200 L 110,230 M 200,200 L 290,230 M 110,260 L 200,290 M 290,260 L 200,290" stroke="url(#flowGlow)" strokeWidth="2.5" strokeDasharray="10 150" strokeDashoffset="-20" className="animate-dash" />
                    </>
                  )}
                  
                  <defs>
                    <linearGradient id="flowGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Node Layout Elements */}
              <div className="space-y-4 relative z-10 flex flex-col items-center">
                
                {/* Row 1: Input */}
                <div className={`w-44 p-2.5 rounded-xl border text-center transition-all ${activeStep === 0 ? "bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] scale-105 text-white" : "bg-slate-900/80 border-white/5 text-slate-400"}`}>
                  <span className="text-[9px] font-mono block uppercase">01 / Input</span>
                  <p className="text-[11px] font-bold">User Input Gateway</p>
                </div>

                {/* Row 2: Guardrails */}
                <div className={`w-44 p-2.5 rounded-xl border text-center transition-all ${activeStep === 1 ? "bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] scale-105 text-white" : "bg-slate-900/80 border-white/5 text-slate-400"}`}>
                  <span className="text-[9px] font-mono block uppercase">02 / Security</span>
                  <p className="text-[11px] font-bold">Prompt Guardrails</p>
                </div>

                {/* Row 3: Orchestrator */}
                <div className={`w-48 p-3 rounded-xl border text-center transition-all ${activeStep === 2 ? "bg-cyan-500/10 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-105 text-white" : "bg-slate-900/80 border-white/5 text-slate-400"}`}>
                  <span className="text-[9px] font-mono block uppercase text-cyan-400">03 / Central Engine</span>
                  <p className="text-xs font-bold font-display">Copilot Studio</p>
                </div>

                {/* Row 4: Bifurcated Knowledge and LLM */}
                <div className="flex gap-6 w-full justify-center">
                  <div className={`w-40 p-2.5 rounded-xl border text-center transition-all ${activeStep === 3 ? "bg-blue-500/10 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-105 text-white" : "bg-slate-900/80 border-white/5 text-slate-400"}`}>
                    <span className="text-[9px] font-mono block uppercase">04-A / Search</span>
                    <p className="text-[10px] font-bold">SharePoint / Azure AI</p>
                  </div>
                  <div className={`w-40 p-2.5 rounded-xl border text-center transition-all ${activeStep === 4 ? "bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] scale-105 text-white" : "bg-slate-900/80 border-white/5 text-slate-400"}`}>
                    <span className="text-[9px] font-mono block uppercase">04-B / LLM APIs</span>
                    <p className="text-[10px] font-bold">Azure OpenAI / ChatGPT</p>
                  </div>
                </div>

                {/* Row 5: Automation */}
                <div className={`w-44 p-2.5 rounded-xl border text-center transition-all ${activeStep === 5 ? "bg-emerald-500/10 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-105 text-white" : "bg-slate-900/80 border-white/5 text-slate-400"}`}>
                  <span className="text-[9px] font-mono block uppercase text-emerald-400">05 / Outflow</span>
                  <p className="text-[11px] font-bold">Power Automate Flow</p>
                </div>

              </div>

            </div>

            {/* Input Prompt Control Center Console */}
            <form onSubmit={handleTriggerSimulation} className="mt-6 border-t border-white/5 pt-4">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2.5 text-left">SIMULATION_CONTROLLER</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter a prompt topic to trace standard routing..."
                  className="flex-grow bg-slate-900 border border-white/5 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors font-mono"
                />
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center gap-1.5 transition-colors disabled:opacity-40 cursor-pointer focus:outline-none text-xs font-mono font-semibold shrink-0"
                >
                  {isProcessing ? <RefreshCw size={13} className="animate-spin" /> : <Play size={13} />}
                  Trace Flow
                </button>
              </div>
            </form>

            {/* Micro Terminal Trace Logs */}
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5 mt-4 text-left">
              <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest block mb-2">COGNITIVE_TRACE_LOG</span>
              <div className="font-mono text-[9px] text-slate-400 max-h-[100px] overflow-y-auto space-y-1.5" id="ai-trace-logs">
                {flowLog.length === 0 ? (
                  <p className="text-slate-600 italic">No simulation active. Input query and click Trace Flow to review active system logs.</p>
                ) : (
                  flowLog.map((log, idx) => (
                    <p key={idx} className={log.includes("[STATUS]") ? "text-emerald-400" : log.includes("[EXEC]") ? "text-cyan-400" : "text-slate-400"}>
                      {log}
                    </p>
                  ))
                )}
              </div>
            </div>

          </div>

          {/* AI capabilities cards bento list */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiCaps.map((cap, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between hover-gradient-purple"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-purple-400">
                        <Bot size={18} />
                      </div>
                      <span className="text-[9px] font-mono text-purple-400 bg-purple-400/5 px-2 py-0.5 rounded border border-purple-500/10">
                        {cap.metric}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-white mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 mt-5 pt-3 border-t border-white/[0.03]">
                    <span>CAP_STATUS: CERTIFIED</span>
                    <ArrowRight size={10} className="text-purple-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Real AI platforms visualization blocks */}
            <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-slate-950/40 text-left">
              <h4 className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-3.5">Integrated Cognitive Platforms</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-xs font-semibold text-white">ChatGPT Core</span>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-xs font-semibold text-white">Azure AI Search</span>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0" />
                  <span className="text-xs font-semibold text-white">Claude 3.5 Sonnet</span>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0" />
                  <span className="text-xs font-semibold text-white">Copilot Studio</span>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0" />
                  <span className="text-xs font-semibold text-white">Semantic Kernel</span>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-500 shrink-0" />
                  <span className="text-xs font-semibold text-white">GitHub Copilot</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* AI Tech Tools Pills Footer */}
        <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">Cognitive Toolkit & Orchestrators</h4>
            <p className="text-xs text-slate-500 mt-1">Tools and frameworks integrated regularly to achieve conversational excellence.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {tools.map((tool, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono text-slate-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-white/5 shadow-sm hover:border-purple-500/10 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
