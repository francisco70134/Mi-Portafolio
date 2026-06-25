// src/data/projects.ts
import type { ProjectsData } from "../types/projects";

export const projectsInfo: ProjectsData = {
  es: {
    sectionTitle: "Proyectos Destacados",
    filters: [
      { id: "todos", label: "Todos" },
      { id: "fullstack", label: "Full-Stack (Código)" },
      { id: "wordpress", label: "WordPress & CMS" },
      { id: "corporate", label: "Corporativos" },
      { id: "academic", label: "Académicos / GitHub" },
    ],
    projects: [
      {
        id: "zoiper",
        title: "Sistema de Gestión de Colas Inteligente",
        category: "corporate",
        image: "/img/projects/zoiper-preview.jpg",
        description:
          "Desarrollo para NTT DATA PERU. Arquitectura de gestión de colas optimizando la atención y distribución. Integración de análisis en tiempo real.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "WebSockets", "FFMPEG"],
      },
      {
        id: "contactosport",
        title: "Contacto Sport E-Commerce",
        category: "wordpress",
        image: "/img/projects/contacto-sport.jpg",
        description:
          "Plataforma e-commerce B2C enfocada en equipamiento deportivo profesional de artes marciales. Diseño UI/UX personalizado, catálogo dinámico y pasarela de pagos.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "CSS Custom",
        ],
        demoUrl: "https://contactosport.com",
      },
      {
        id: "karate-analisis",
        title: "App de Análisis Técnico de Combates",
        category: "fullstack",
        image: "/img/projects/karate-app.jpg",
        description:
          "Aplicación para análisis biomecánico y táctico de combates de karate mediante videos, con sistema de comentarios y evaluación técnica.",
        stack: ["Laravel", "React", "Inertia.js", "TailwindCSS", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: "frozenox",
        title: "Frozenox Industrial",
        category: "wordpress",
        image: "/img/projects/frozenox.jpg",
        description:
          "Sitio web corporativo para servicios de refrigeración y climatización industrial. Estructuración de contenido, catálogo de soluciones y diseño de identidad visual.",
        stack: ["WordPress", "Elementor", "SEO", "Figma"],
        demoUrl: "#",
      },
      {
        id: "dojo-oshin",
        title: "Sistema ERP: Dojo Oshin Karate",
        category: "fullstack",
        image: "/img/projects/dojo-oshin.jpg",
        description:
          "Sistema integral para la gestión de matrículas, control de asistencia biométrica y registro de evaluaciones para academias deportivas.",
        stack: ["PHP", "Laravel", "MySQL", "jQuery", "Bootstrap"],
        demoUrl: "#",
      },
      {
        id: "clinica-cayetano",
        title: "Gestión de Citas - Clínica Cayetano",
        category: "academic",
        image: "/img/projects/clinica.jpg",
        description:
          "Sistema de agendamiento y gestión de citas médicas desarrollado como proyecto académico, separando el cliente del servidor.",
        stack: ["React.js", "HTML5", "CSS3", "ES6+"],
        githubUrl: "#",
      },
    ],
  },
  en: {
    sectionTitle: "Featured Projects",
    filters: [
      { id: "todos", label: "All" },
      { id: "fullstack", label: "Full-Stack (Code)" },
      { id: "wordpress", label: "WordPress & CMS" },
      { id: "corporate", label: "Corporate" },
      { id: "academic", label: "Academic / GitHub" },
    ],
    projects: [],
  },
};
