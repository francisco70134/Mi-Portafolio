export type ProjectCategory =
  | "todos"
  | "fullstack"
  | "wordpress"
  | "corporate"
  | "academic";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface ProjectsContent {
  sectionTitle: string;
  filters: { id: ProjectCategory; label: string }[];
  projects: Project[];
}

export interface ProjectsData {
  es: ProjectsContent;
  en: ProjectsContent;
}
