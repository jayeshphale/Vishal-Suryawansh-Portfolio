/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Loader from "./components/Loader";
import GlowEffect from "./components/GlowEffect";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Competencies from "./components/Competencies";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AIExpertise from "./components/AIExpertise";
import TechUniverse from "./components/TechUniverse";
import Architecture from "./components/Architecture";
import Projects from "./components/Projects";
import CertificationsEducation from "./components/CertificationsEducation";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "competencies",
      "skills",
      "experience",
      "ai-expertise",
      "tech-universe",
      "architecture",
      "projects",
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Trigger active state when section takes up the primary view
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 selection:text-white" id="main-app-container">
      
      {/* Cinematic Loading Animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <Loader onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content (faded in when loading completes) */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background visual components */}
          <GlowEffect />

          {/* Navigation menu */}
          <Header activeSection={activeSection} />

          {/* Main sections */}
          <main className="relative" id="portfolio-sections-content">
            <Hero />
            <About />
            <Competencies />
            <Skills />
            <Experience />
            <AIExpertise />
            <TechUniverse />
            <Architecture />
            <Projects />
            <CertificationsEducation />
            <Testimonials />
            <Contact />
          </main>

          {/* Footer component */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
