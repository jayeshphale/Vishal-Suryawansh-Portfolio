import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Cpu, Shield, Database, Cloud, Bot, Activity } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    { text: "Initializing Azure Cloud Services...", icon: <Cloud className="text-blue-400" size={18} /> },
    { text: "Connecting Cognitive AI Agents...", icon: <Bot className="text-purple-400" size={18} /> },
    { text: "Loading Enterprise Microservices...", icon: <Cpu className="text-cyan-400" size={18} /> },
    { text: "Starting Event-Driven Service Bus...", icon: <Activity className="text-emerald-400" size={18} /> },
    { text: "Authenticating Secure IAM Credentials...", icon: <Shield className="text-amber-400" size={18} /> },
    { text: "Loading Solution Architect Profile...", icon: <Database className="text-violet-400" size={18} /> },
    { text: "Access Granted: Welcome Vishal Suryawanshi...", icon: <Terminal className="text-white" size={18} /> }
  ];

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 28);

    // Step text change interval
    const stepInterval = setInterval(() => {
      setStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          return prev;
        }
      });
    }, 400);

    // Call onComplete when finished
    const timeout = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(timeout);
    };
  }, [onComplete, steps.length]);

  return (
    <div className="fixed inset-0 z-100 bg-[#020617] flex flex-col items-center justify-center p-6 select-none font-mono" id="portal-command-loader">
      {/* Laser Scanning Line */}
      <motion.div
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.8)] pointer-events-none"
      />

      <div className="max-w-md w-full text-center relative z-10">
        {/* Command Logo */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 360, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-500 p-[1.5px] mx-auto mb-8 shadow-lg shadow-blue-500/10"
        >
          <div className="w-full h-full bg-[#020617] rounded-[14px] flex items-center justify-center">
            <Cpu size={28} className="text-cyan-400 stroke-[1.5]" />
          </div>
        </motion.div>

        {/* Title */}
        <h2 className="text-white font-display font-bold text-sm tracking-[0.2em] uppercase mb-1">
          Enterprise Command Center
        </h2>
        <p className="text-[10px] text-slate-500 tracking-wider mb-8">SECURE AUTHORIZATION SYSTEM V10.4</p>

        {/* Dynamic Step Text */}
        <div className="h-14 flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2.5 text-slate-300 text-xs text-center"
            >
              {steps[step].icon}
              <span className="font-semibold text-xs text-slate-200">{steps[step].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Progress Bar */}
        <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden relative mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="flex justify-between items-center text-[10px] text-slate-500">
          <span>SECURE_BOOT_SEQUENCE</span>
          <span className="text-cyan-400 font-bold">{progress}%</span>
        </div>
      </div>

      {/* Under Background Details */}
      <div className="absolute bottom-6 left-6 text-[8px] text-slate-600 space-y-1 text-left hidden sm:block">
        <p>SYSTEM_ID: COM_NODE_83F4DBB0</p>
        <p>RESTful API CONTROLLER: ACTIVE</p>
      </div>

      <div className="absolute bottom-6 right-6 text-[8px] text-slate-600 space-y-1 text-right hidden sm:block">
        <p>LOCAL_TIME: {new Date().toISOString()}</p>
        <p>LICENSE: ENTERPRISE_COMPLIANT</p>
      </div>
    </div>
  );
}
