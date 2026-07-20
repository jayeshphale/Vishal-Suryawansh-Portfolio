export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  role?: string;
  architecture?: string;
  responsibilities?: string[];
  challenges?: string;
  solution?: string;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  percentage: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  percentage: string;
}

export interface Competency {
  title: string;
  description: string;
  tags: string[];
}
