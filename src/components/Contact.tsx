import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, Download, ExternalLink, Globe } from "lucide-react";
import { personalInfo } from "../data";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/vishalgoneado@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          Name: formState.name,
          Email: formState.email,
          Subject: formState.subject || "Portfolio Contact Inquiry",
          Message: formState.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Transmission failed. Please try copying the email directly or trying again.");
      }
    } catch (err) {
      console.error("FormSubmit error:", err);
      alert("An error occurred. Please try copying the email directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1hIRO5t082dMrSSa0v9Rk1qesQtmjZG4B/view", "_blank");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">11 / HIRE OR INQUIRE</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Let's Collaborate On Your <span className="text-gradient-azure">Next Platform</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Submit an integration proposal, inquiry, or say hello. I typically respond to enterprise proposals within 24 business hours.
          </p>
          <div className="w-12 h-[3px] bg-blue-600 mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info & Map Spotlight */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Quick cards list */}
            <div className="space-y-4" id="direct-info-cards">
              
              <div className="glass-panel p-5 rounded-xl border border-white/5 flex items-start gap-4 hover:border-blue-500/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex-grow min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Primary Contact Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm text-white font-semibold truncate hover:text-cyan-400 transition-colors block mt-0.5">
                    {personalInfo.email}
                  </a>
                  <span className="text-[9px] text-slate-400 block mt-0.5">{personalInfo.altEmail}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-all focus:outline-none shrink-0"
                  aria-label="Copy primary email to clipboard"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-white/5 flex items-start gap-4 hover:border-blue-500/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div className="flex-grow min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Active Phone Line</span>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm text-white font-semibold hover:text-cyan-400 transition-colors block mt-0.5">
                    {personalInfo.phone}
                  </a>
                  <span className="text-[9px] text-slate-400 block mt-0.5">{personalInfo.altPhone}</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-all focus:outline-none shrink-0"
                  aria-label="Copy phone number to clipboard"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-white/5 flex items-start gap-4 hover:border-blue-500/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex-grow min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">HQ Geographic Location</span>
                  <span className="text-sm text-white font-semibold block mt-0.5">
                    Pune, Maharashtra, India
                  </span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">Timezone: GMT+5:30</span>
                </div>
              </div>

            </div>

            {/* Premium Visual Map Spotlight */}
            <div className="relative w-full aspect-[4/3] rounded-2xl glass-card border border-white/5 overflow-hidden p-6 flex flex-col justify-between group h-full">
              {/* Background Map Simulation Grid */}
              <div className="absolute inset-0 bg-[#0f172a]/20 grid-overlay opacity-30 group-hover:opacity-40 transition-opacity" />
              
              {/* Pulse rings representing geographic locator */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 rounded-full border border-blue-500/20 animate-ping absolute" />
                <div className="w-16 h-16 rounded-full border border-cyan-400/10 animate-pulse absolute" />
                <div className="w-8 h-8 rounded-full bg-blue-600/15 border border-blue-500/40 flex items-center justify-center absolute">
                  <Globe size={16} className="text-cyan-400 animate-spin-slow" />
                </div>
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-400/5 px-2.5 py-1 rounded border border-cyan-400/10">
                  Pune HQ Radar Active
                </span>
              </div>

              <div className="relative z-10 text-left">
                <h4 className="text-white font-display font-bold text-sm">Pune, India Spotlight</h4>
                <p className="text-[10px] text-slate-400 mt-1">Ready for worldwide remote assignments and onsite consulting roles.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Proposal Form */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-slate-950/40 h-full relative overflow-hidden flex flex-col justify-between min-h-[450px]">
              
              {/* Succession Overlay alert */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-slate-950/95 backdrop-blur-md z-10 flex flex-col items-center justify-center p-8 text-center"
                    id="contact-success-notification"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 animate-bounce">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="font-display font-bold text-white text-lg">PROPOSAL SENT SUCCESSFULLY!</h3>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-2">
                      Thank you for reaching out. Your transmission was encrypted and channeled to Vishal Suryawanshi's active queue.
                    </p>
                    <span className="text-[10px] font-mono text-slate-600 mt-6 uppercase tracking-wider block">QUEUE_ID: {Math.floor(Math.random() * 90000) + 10000}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form container */}
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-proposal-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-name" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Your Name *</label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. CTO / Hiring Manager"
                      className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-email" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Email Address *</label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. manager@enterprise.com"
                      className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-subject" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Subject Topic</label>
                  <input
                    type="text"
                    id="form-subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Solution Architect Proposal"
                    className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-message" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Proposal Specifications / Message *</label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your system integrations, timeline scope, technical specifications, or say hello..."
                    className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none disabled:opacity-50"
                  id="submit-proposal-btn"
                >
                  {submitting ? (
                    <span>TRANSMITTING_DATA...</span>
                  ) : (
                    <>
                      <Send size={13} />
                      Transmit Message
                    </>
                  )}
                </button>
              </form>

              {/* Auxiliary Download actions */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span className="text-slate-500 font-mono">ENCRYPTED_CONNECTION: SHA256</span>
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2 text-slate-400 hover:text-white font-semibold transition-colors cursor-pointer focus:outline-none"
                  id="contact-aux-download-btn"
                >
                  <Download size={13} />
                  View Resume (Google Drive)
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
