export interface Profile {
  id: string;
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  displayOrder: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  displayOrder: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  startDate: string | null;
  endDate: string | null;
  githubUrl: string | null;
  liveUrl: string | null;
  displayOrder: number;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}
