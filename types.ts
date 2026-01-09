
export type Language = 'es' | 'en';

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  isHighlight?: boolean;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'languages' | 'tools' | 'soft' | 'qa';
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  about: string;
  email: string;
  linkedin: string;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  certifications: string[];
}
