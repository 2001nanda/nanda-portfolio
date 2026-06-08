export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "tools";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  icon: string;
}

export interface GitHubStats {
  contributions: number;
  repos: number;
  stars: number;
  followers: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
