import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Camera, Upload, Trash2, Cpu, Cloud, 
  ShieldCheck, RefreshCw, Sparkles, Terminal
} from "lucide-react";

export default function Avatar() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load avatar from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("vishal_avatar_base64");
    if (saved) {
      setImageSrc(saved);
    }
  }, []);

  // Handle image upload and convert to base64
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem("vishal_avatar_base64", base64String);
        setImageSrc(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Remove the uploaded image and revert to the high-tech hologram fallback
  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem("vishal_avatar_base64");
    setImageSrc(null);
  };

  // Mouse move effect for 3D card tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    setRotateX(-y / (box.height / 2) * 12);
    setRotateY(x / (box.width / 2) * 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div className="w-full max-w-[380px] flex flex-col items-center">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        className="relative w-full aspect-square rounded-2xl glass-card border border-white/10 overflow-hidden p-6 group cursor-pointer transition-all duration-300 hover:border-cyan-500/30 shadow-2xl shadow-blue-950/20"
        onClick={imageSrc ? undefined : triggerFileInput}
      >
        {/* Glowing Background Radial Core */}
        <div className="absolute inset-0 bg-radial-glow opacity-10 group-hover:opacity-20 pointer-events-none transition-opacity duration-300" />
        
        {/* Dynamic scanning grid */}
        <div className="absolute inset-0 grid-overlay opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none" />

        {/* Real-time Bio-Scanner Laser Line */}
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20 pointer-events-none"
          style={{ boxShadow: "0 0 10px #22d3ee, 0 0 20px #0891b2" }}
        />

        {/* Aesthetic Corner Brackets (HUD overlay) */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40 pointer-events-none group-hover:border-cyan-400 transition-colors" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-500/40 pointer-events-none group-hover:border-cyan-400 transition-colors" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-500/40 pointer-events-none group-hover:border-cyan-400 transition-colors" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40 pointer-events-none group-hover:border-cyan-400 transition-colors" />

        {/* Main Content Area */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {imageSrc ? (
              // Display Real Uploaded Photo
              <motion.div
                key="real-image"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full rounded-xl overflow-hidden border border-white/5 bg-slate-950/60"
              >
                <img
                  src={imageSrc}
                  alt="Vishal Suryawanshi"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Laser Overlay tint */}
                <div className="absolute inset-0 bg-cyan-500/5 mix-blend-color pointer-events-none" />

                {/* Hover controls overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 transition-opacity duration-200"
                >
                  <button
                    onClick={triggerFileInput}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold font-display shadow-lg transition-all transform hover:scale-105"
                  >
                    <Upload size={12} />
                    Change Photo
                  </button>
                  <button
                    onClick={handleRemoveImage}
                    className="flex items-center gap-2 px-4 py-2 bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-500/20 hover:border-red-500/40 rounded-xl text-xs font-semibold font-display transition-all transform hover:scale-105"
                  >
                    <Trash2 size={12} />
                    Reset to Hologram
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              // Display High-Tech Digital Hologram Fallback
              <motion.div
                key="hologram"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full flex flex-col items-center justify-center text-center p-4"
              >
                {/* Abstract spinning rings */}
                <div className="absolute w-60 h-60 border border-blue-500/10 rounded-full animate-spin-slow flex items-center justify-center pointer-events-none">
                  <div className="w-44 h-44 border border-cyan-400/10 rounded-full animate-spin flex items-center justify-center" style={{ animationDirection: "reverse" }}>
                    <div className="w-28 h-28 border border-purple-500/15 rounded-full" />
                  </div>
                </div>

                {/* Center digital CPU/AI brain icon */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-xl shadow-blue-500/20 mb-5 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <Cpu size={36} className="text-cyan-400 stroke-[1.5] animate-pulse" />
                  </div>
                  {/* Small absolute indicator lamps */}
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-display font-semibold text-white text-base tracking-wide">VISHAL SURYAWANSHI</h3>
                  <p className="text-[10px] font-mono text-cyan-400 mt-1 uppercase tracking-wider">HOLOGRAPHIC_NODE_V10</p>
                  
                  {/* Prompt to upload photo */}
                  <div className="mt-6 flex flex-col items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                      <Camera size={14} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">Click to import real photo</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Real-time Matrix HUD Telemetry Bar */}
      <div className="w-full mt-4 bg-slate-950/60 border border-white/5 rounded-xl px-4 py-2 flex items-center justify-between text-[9px] font-mono text-slate-500">
        <div className="flex items-center gap-1.5">
          <Cloud size={10} className="text-blue-500 animate-pulse" />
          <span>SYS: <span className="text-emerald-400 font-bold">ACTIVE</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={10} className="text-cyan-400" />
          <span>AZURE_CORE: <span className="text-cyan-400">ONLINE</span></span>
        </div>
        <div className="text-right">
          <span>PORT: <span className="text-white">3000</span></span>
        </div>
      </div>

      {/* Hidden file input for upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
