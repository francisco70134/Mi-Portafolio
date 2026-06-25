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
        image: "#",
        description:
          "Desarrollo para NTT DATA PERU. Arquitectura de gestión de colas optimizando la atención y distribución. Integración de análisis en tiempo real.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "WebSockets", "FFMPEG"],
      },
      {
        id: "contactosport",
        title: "Contacto Sport E-Commerce",
        category: "wordpress",
        image: "#",
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
        image: "#",
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
        image: "#",
        description:
          "Sitio web corporativo para servicios de refrigeración y climatización industrial. Estructuración de contenido, catálogo de soluciones y diseño de identidad visual.",
        stack: ["WordPress", "Elementor", "SEO", "Figma"],
        demoUrl: "#",
      },
      {
        id: "dojo-oshin",
        title: "Sistema ERP: Dojo Oshin Karate",
        category: "fullstack",
        image: "#",
        description:
          "Sistema integral para la gestión de matrículas, control de asistencia biométrica y registro de evaluaciones para academias deportivas.",
        stack: ["PHP", "Laravel", "MySQL", "jQuery", "Bootstrap"],
        demoUrl: "#",
      },
      {
        id: "clinica-cayetano",
        title: "Gestión de Citas - Clínica Cayetano",
        category: "academic",
        image: "#",
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
    projects: [
      {
        id: "zoiper",
        title: "Intelligent Queue Management System",
        category: "corporate",
        image: "#",
        description:
          "Developed for NTT DATA PERU. Queue management architecture designed to optimize customer service and workload distribution, with real-time analytics integration.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "WebSockets", "FFMPEG"],
      },
      {
        id: "contactosport",
        title: "Contacto Sport E-Commerce",
        category: "wordpress",
        image: "#",
        description:
          "B2C e-commerce platform focused on professional martial arts equipment. Custom UI/UX design, dynamic product catalog, and payment gateway integration.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "Custom CSS",
        ],
        demoUrl: "https://contactosport.com",
      },
      {
        id: "karate-analisis",
        title: "Karate Technical Analysis App",
        category: "fullstack",
        image: "#",
        description:
          "Application for biomechanical and tactical analysis of karate matches using video processing, including technical evaluation and collaborative feedback features.",
        stack: ["Laravel", "React", "Inertia.js", "TailwindCSS", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: "frozenox",
        title: "Frozenox Industrial",
        category: "wordpress",
        image: "#",
        description:
          "Corporate website for industrial refrigeration and HVAC services. Content architecture, service catalog, and visual identity implementation.",
        stack: ["WordPress", "Elementor", "SEO", "Figma"],
        demoUrl: "#",
      },
      {
        id: "dojo-oshin",
        title: "ERP System: Dojo Oshin Karate",
        category: "fullstack",
        image: "#",
        description:
          "Comprehensive management platform for sports academies, including enrollment management, biometric attendance tracking, and evaluation records.",
        stack: ["PHP", "Laravel", "MySQL", "jQuery", "Bootstrap"],
        demoUrl: "#",
      },
      {
        id: "clinica-cayetano",
        title: "Appointment Management - Cayetano Clinic",
        category: "academic",
        image: "#",
        description:
          "Medical appointment scheduling and management system developed as an academic project using a decoupled client-server architecture.",
        stack: ["React.js", "HTML5", "CSS3", "ES6+"],
        githubUrl: "#",
      },
    ],
  },
};
