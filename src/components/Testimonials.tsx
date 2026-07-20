import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonials } from "../data";
import { Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 relative bg-slate-950/20">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">10 / CORPORATE TRUST</p>
          <h2 className="font-display font-bold text-3xl text-white tracking-tight">
            Client & Peer <span className="text-gradient-azure">Testimonials</span>
          </h2>
          <div className="w-12 h-[3px] bg-blue-600 mt-4 rounded" />
        </div>

        {/* Quote Icon */}
        <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mx-auto mb-6 shadow-inner">
          <Quote size={24} className="stroke-[1.5]" />
        </div>

        {/* Recommendation Slider with AnimatePresence */}
        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="px-4"
            >
              <p className="text-sm md:text-base text-slate-300 leading-relaxed italic max-w-2xl mx-auto">
                "{testimonials[currentIndex].feedback}"
              </p>

              <div className="mt-6 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 mb-2.5">
                  <User size={18} />
                </div>
                <h4 className="font-display font-bold text-white text-sm md:text-base">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[10px] md:text-xs font-mono text-cyan-400 uppercase mt-0.5">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows & Pagination */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-xl bg-slate-900/60 border border-white/5 hover:border-white/20 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
            aria-label="Previous testimonial"
            id="testimonial-prev-btn"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5" id="testimonial-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none cursor-pointer ${
                  currentIndex === idx ? "bg-blue-500 w-6" : "bg-slate-800"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-xl bg-slate-900/60 border border-white/5 hover:border-white/20 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
            aria-label="Next testimonial"
            id="testimonial-next-btn"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
