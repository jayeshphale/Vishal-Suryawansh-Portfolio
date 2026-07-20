import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, Terminal, Cloud, Monitor, Database, Settings, 
  Layers, Workflow, Users, FileCode, Cpu, ShieldCheck, Box
} from "lucide-react";

interface SkillCardProps {
  key?: string;
  name: string;
  percentage: number;
  years: number;
  projects: number;
  icon: React.ReactNode;
}

function SkillCard({ name, percentage, years, projects, icon }: SkillCardProps) {
  // Simple 3D hover tilt states
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Normalizing tilt value to max 12 degrees
    setRotateX(-y / (box.height / 2) * 10);
    setRotateY(x / (box.width / 2) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="glass-card p-6 rounded-2xl border border-white/5 bg-slate-950/40 relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-200 text-left flex flex-col justify-between min-h-[190px]"
    >
      {/* Dynamic Hover Radial Light */}
      <div className="absolute -inset-px bg-radial-glow opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300" />
      
      <div>
        {/* Header containing Name and Icon */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-cyan-400">
            {icon}
          </div>
          <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-400/5 px-2 py-0.5 rounded border border-cyan-400/10">
            {percentage}%
          </span>
        </div>

        {/* Technical Title */}
        <h4 className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
          {name}
        </h4>
      </div>

      {/* Progress track */}
      <div className="mt-4">
        <div className="relative h-1.5 w-full bg-slate-950/60 rounded-full overflow-hidden border border-white/5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-400"
          />
        </div>

        {/* Visual telemetry values (Years XP, Projects, level status) */}
        <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 mt-4 pt-2.5 border-t border-white/[0.03]">
          <div>
            <span className="text-slate-600 uppercase">EXP:</span> <span className="text-white font-semibold">{years} YRS</span>
          </div>
          <div>
            <span className="text-slate-600 uppercase">PROJ:</span> <span className="text-white font-semibold">{projects}+</span>
          </div>
          <div>
            <span className="text-cyan-500/80 font-bold uppercase tracking-tight">{percentage >= 90 ? "EXPERT" : percentage >= 80 ? "LEAD" : "SENIOR"}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("architecture");

  const categories = [
    { id: "architecture", label: "Architecture", icon: <Layers size={14} /> },
    { id: "backend", label: "Backend", icon: <Cpu size={14} /> },
    { id: "frontend", label: "Frontend", icon: <Monitor size={14} /> },
    { id: "cloud", label: "Cloud", icon: <Cloud size={14} /> },
    { id: "ai", label: "AI & GenAI", icon: <Sparkles size={14} /> },
    { id: "devops", label: "DevOps", icon: <Workflow size={14} /> },
    { id: "database", label: "Database", icon: <Database size={14} /> },
    { id: "cms", label: "CMS Systems", icon: <FileCode size={14} /> },
    { id: "leadership", label: "Leadership", icon: <Users size={14} /> }
  ];

  // Specific high fidelity lists mapped strictly to Vishal's qualifications
  const skillsData: Record<string, SkillCardProps[]> = {
    architecture: [
      { name: "Clean Architecture", percentage: 95, years: 8, projects: 32, icon: <Layers size={16} /> },
      { name: "CQRS Pattern", percentage: 90, years: 6, projects: 18, icon: <Workflow size={16} /> },
      { name: "Repository Pattern", percentage: 95, years: 10, projects: 45, icon: <Database size={16} /> },
      { name: "Dependency Injection", percentage: 95, years: 10, projects: 50, icon: <Box size={16} /> },
      { name: "Microservices Topology", percentage: 92, years: 7, projects: 20, icon: <Cpu size={16} /> },
      { name: "SOLID System Design", percentage: 95, years: 10, projects: 50, icon: <ShieldCheck size={16} /> }
    ],
    backend: [
      { name: "C# Language Core", percentage: 95, years: 10, projects: 50, icon: <Terminal size={16} /> },
      { name: "ASP.NET Core", percentage: 95, years: 8, projects: 35, icon: <Cpu size={16} /> },
      { name: "RESTful Web APIs", percentage: 94, years: 10, projects: 50, icon: <Settings size={16} /> },
      { name: "Entity Framework Core", percentage: 92, years: 8, projects: 30, icon: <Database size={16} /> },
      { name: "Node.js Core", percentage: 80, years: 4, projects: 12, icon: <Terminal size={16} /> },
      { name: "Laravel / PHP", percentage: 82, years: 6, projects: 15, icon: <FileCode size={16} /> }
    ],
    frontend: [
      { name: "TypeScript", percentage: 88, years: 6, projects: 18, icon: <Monitor size={16} /> },
      { name: "JavaScript (ES6+)", percentage: 92, years: 9, projects: 35, icon: <Terminal size={16} /> },
      { name: "React System", percentage: 82, years: 4, projects: 10, icon: <Monitor size={16} /> },
      { name: "Angular Core", percentage: 78, years: 3, projects: 8, icon: <Monitor size={16} /> },
      { name: "Tailwind CSS", percentage: 92, years: 5, projects: 20, icon: <Layers size={16} /> },
      { name: "HTML5 & CSS3 Spec", percentage: 95, years: 10, projects: 50, icon: <FileCode size={16} /> }
    ],
    cloud: [
      { name: "Microsoft Azure", percentage: 92, years: 8, projects: 28, icon: <Cloud size={16} /> },
      { name: "Azure Service Bus", percentage: 90, years: 6, projects: 15, icon: <Workflow size={16} /> },
      { name: "Azure Key Vault", percentage: 95, years: 8, projects: 30, icon: <ShieldCheck size={16} /> },
      { name: "Azure App Services", percentage: 94, years: 8, projects: 32, icon: <Cloud size={16} /> },
      { name: "Azure Active Directory", percentage: 88, years: 7, projects: 20, icon: <Users size={16} /> },
      { name: "AWS (EC2 / S3)", percentage: 75, years: 3, projects: 6, icon: <Cloud size={16} /> }
    ],
    ai: [
      { name: "Copilot Studio", percentage: 95, years: 3, projects: 15, icon: <Sparkles size={16} /> },
      { name: "Azure AI Search", percentage: 90, years: 4, projects: 12, icon: <Database size={16} /> },
      { name: "Generative AI Agents", percentage: 92, years: 3, projects: 10, icon: <Users size={16} /> },
      { name: "Prompt Engineering", percentage: 94, years: 4, projects: 25, icon: <Terminal size={16} /> },
      { name: "RAG Systems", percentage: 90, years: 3, projects: 8, icon: <Layers size={16} /> },
      { name: "ChatGPT / Claude API", percentage: 92, years: 3, projects: 12, icon: <Cpu size={16} /> }
    ],
    devops: [
      { name: "CI/CD Automations", percentage: 88, years: 6, projects: 18, icon: <Workflow size={16} /> },
      { name: "GitHub Actions", percentage: 90, years: 5, projects: 15, icon: <Settings size={16} /> },
      { name: "Azure DevOps Pipelines", percentage: 86, years: 6, projects: 14, icon: <Cloud size={16} /> },
      { name: "Docker Containerization", percentage: 80, years: 4, projects: 8, icon: <Box size={16} /> },
      { name: "Jenkins Automation", percentage: 78, years: 4, projects: 7, icon: <Workflow size={16} /> },
      { name: "Dynatrace Analytics", percentage: 82, years: 4, projects: 9, icon: <Monitor size={16} /> }
    ],
    database: [
      { name: "MS SQL Server", percentage: 94, years: 10, projects: 45, icon: <Database size={16} /> },
      { name: "Redis Cache Core", percentage: 86, years: 5, projects: 12, icon: <Box size={16} /> },
      { name: "PostgreSQL Database", percentage: 85, years: 5, projects: 10, icon: <Database size={16} /> },
      { name: "MySQL Datastores", percentage: 88, years: 8, projects: 22, icon: <Database size={16} /> },
      { name: "T-SQL Stored Procedures", percentage: 94, years: 10, projects: 40, icon: <Terminal size={16} /> },
      { name: "Cosmos DB", percentage: 80, years: 4, projects: 6, icon: <Cloud size={16} /> }
    ],
    cms: [
      { name: "WordPress CMS Core", percentage: 90, years: 8, projects: 25, icon: <FileCode size={16} /> },
      { name: "WooCommerce Plugins", percentage: 88, years: 6, projects: 14, icon: <Box size={16} /> },
      { name: "PowerApps Configurations", percentage: 84, years: 4, projects: 10, icon: <Workflow size={16} /> },
      { name: "SharePoint Integrations", percentage: 86, years: 5, projects: 12, icon: <FileCode size={16} /> }
    ],
    leadership: [
      { name: "Technical Team Lead", percentage: 92, years: 5, projects: 15, icon: <Users size={16} /> },
      { name: "Agile & Scrum Sprinting", percentage: 90, years: 6, projects: 20, icon: <Workflow size={16} /> },
      { name: "Client Architecture Sync", percentage: 94, years: 8, projects: 25, icon: <Users size={16} /> },
      { name: "SRE Best Practices", percentage: 88, years: 5, projects: 12, icon: <ShieldCheck size={16} /> }
    ]
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">03 / STACK & CAPABILITIES</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            The Interactive <span className="text-gradient-azure">AI Skill Command</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            My skill profile represents an active telemetry breakdown of legacy C#/.NET foundations paired with leading-edge Azure Cloud architecture, DevOps, and Enterprise Generative AI.
          </p>
          <div className="w-12 h-[3px] bg-blue-600 mt-4 rounded" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/5" id="skill-tabs-container">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold font-display tracking-wide transition-all focus:outline-none cursor-pointer ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-slate-900/60 border border-white/5 text-slate-400 hover:text-white"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="skills-cards-grid"
        >
          {skillsData[activeCategory]?.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              years={skill.years}
              projects={skill.projects}
              icon={skill.icon}
            />
          ))}
        </motion.div>

        {/* Skill Summary Badge list footer */}
        <div className="mt-12 bg-slate-900/40 border border-white/5 rounded-2xl p-6 text-left">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">Verified Technology Ecosystem & Integrators</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "ASP.NET Core Web API", "Entity Framework Core", "LINQ", "Azure AD", 
              "Azure Service Bus", "Azure Key Vault", "Azure Storage", "Application Insights",
              "Dynatrace Core", "GitHub Actions", "Azure DevOps Pipelines", "Docker Containerization",
              "WordPress & WooCommerce", "Microsoft Copilot Studio", "Azure AI Search", "Semantic Kernel"
            ].map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono text-slate-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-white/5 shadow-sm hover:border-slate-700 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
