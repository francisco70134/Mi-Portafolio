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
        image: "/img/projects/ZoiperInteligente.png",
        description:
          "Desarrollo para NTT DATA PERU. Arquitectura de gestión de colas optimizando la atención y distribución. Integración de análisis en tiempo real.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "WebSockets", "FFMPEG"],
      },
      /* Club Oshin Dashboard */

      {
        id: "dojo-oshin",
        title: "Sistema ERP: Dojo Oshin Karate",
        category: "corporate",
        image: "img/projects/ClubOshinSistema.png",
        description:
          "Sistema integral para la gestión de matrículas, control de asistencia biométrica y registro de evaluaciones para academias deportivas.",
        stack: ["PHP", "MySQL", "jQuery", "Ajax", "Bootstrap"],
      },
      /* Arawza Dashboard */

      {
        id: "Sistemadistribucionarawaza",
        title: "Sistema de distrubición Senseis y mayoristas - Arawaza",
        category: "corporate",
        image: "/img/projects/arawazaSistemaDistribucion.png",
        description:
          "Desarrollo para NTT DATA PERU. Arquitectura de gestión de colas optimizando la atención y distribución. Integración de análisis en tiempo real.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "WebSockets", "FFMPEG"],
      },

      /* Arawaza Peru */
      {
        id: "Arawazaperu",
        title: "Arawaza Perú E-Commerce",
        category: "wordpress",
        image: "/img/projects/ArawazaPeru.png",
        description:
          "Plataforma e-commerce B2C enfocada en equipamiento deportivo profesional de artes marciales. Diseño UI/UX personalizado, catálogo dinámico y pasarela de pagos.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "CSS Custom",
        ],
        demoUrl: "https://arawaza.pe",
      },

      /* Punok Peru */
      {
        id: "Punokperu",
        title: "Punok Perú E-Commerce",
        category: "wordpress",
        image: "/img/projects/PunokPeru.png",
        description:
          "Plataforma e-commerce B2C enfocada en equipamiento deportivo profesional de artes marciales. Diseño UI/UX personalizado, catálogo dinámico y pasarela de pagos.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "CSS Custom",
        ],
        demoUrl: "https://punokperu.com",
      },
      /* Omam */
      {
        id: "Omamworld",
        title: "Omam World",
        category: "wordpress",
        image: "/img/projects/OmamWorld.png",
        description:
          "Plataforma e-commerce B2C enfocada en equipamiento deportivo profesional de artes marciales. Diseño UI/UX personalizado, catálogo dinámico y pasarela de pagos.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "CSS Custom",
        ],
        demoUrl: "https://omamworld.org/",
      },

      /* Club BKC ORG PE */
      {
        id: "bkcorgpe",
        title: "Club Bushinkan Karate Club E-Commerce",
        category: "wordpress",
        image: "/img/projects/bkcorgpe.png",
        description:
          "Plataforma e-commerce B2C enfocada en equipamiento deportivo profesional de artes marciales. Diseño UI/UX personalizado, catálogo dinámico y pasarela de pagos.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "CSS Custom",
        ],
        demoUrl: "https://bkc.org.pe/",
      },

      /* Yim sac Peru */
      {
        id: "Yimsac",
        title: "Yim S.A.C E-Commerce",
        category: "wordpress",
        image: "/img/projects/Yimsac.png",
        description:
          "Plataforma e-commerce B2C enfocada en equipamiento deportivo profesional de artes marciales. Diseño UI/UX personalizado, catálogo dinámico y pasarela de pagos.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "CSS Custom",
        ],
        demoUrl: "https://yimsac.com/",
      },

      {
        id: "portafolio-francisco",
        title: "Portafolio Profesional Francisco Olortegui",
        category: "fullstack",
        image: "/img/projects/franciscoPortafolio.png",
        description:
          "Aplicación para análisis biomecánico y táctico de combates de karate mediante videos, con sistema de comentarios y evaluación técnica.",
        stack: ["TypeScript", "React", "React-Icons", "TailwindCSS", "eMailJs"],
        demoUrl: "https://francisco-olortegui-abanto.vercel.app/",
        githubUrl: "https://github.com/francisco70134/Mi-Portafolio.git",
      },
      {
        id: "frozenox",
        title: "Frozenox Industrial",
        category: "wordpress",
        image: "/img/projects/Frozenox.png",
        description:
          "Sitio web corporativo para servicios de refrigeración y climatización industrial. Estructuración de contenido, catálogo de soluciones y diseño de identidad visual.",
        stack: ["WordPress", "Elementor", "SEO", "Figma"],
        demoUrl: "https://frozenoxperu.com/",
      },
      {
        id: "appchirps",
        title: "App Chirps",
        category: "academic",
        image: "/img/projects/AppChirps.png",
        description:
          "Sitio web corporativo para servicios de refrigeración y climatización industrial. Estructuración de contenido, catálogo de soluciones y diseño de identidad visual.",
        stack: ["Laravel", "Blade", "Js"],
        githubUrl: "https://github.com/francisco70134/App-chirps.git",
      },
      {
        id: "ricky-morty",
        title: "Ricky And Morty API",
        category: "academic",
        image: "/img/projects/RickyMortyAPI.png",
        description:
          "Sitio web corporativo para servicios de refrigeración y climatización industrial. Estructuración de contenido, catálogo de soluciones y diseño de identidad visual.",
        stack: ["React", "JS", "CSS"],
        githubUrl: "https://github.com/francisco70134/Rick-and-Morty-Explorer.git",
        demoUrl: "https://rick-and-morty-explorer-zeta.vercel.app/",
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
    ],
  },
};
