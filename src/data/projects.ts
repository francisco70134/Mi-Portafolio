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
      {
        id: "dojo-oshin",
        title: "Sistema ERP: Dojo Oshin Karate",
        category: "corporate",
        image: "img/projects/ClubOshinSistema.png",
        description:
          "Sistema integral para academias. Gestiona matrículas, asistencias y control de pagos con alertas de deuda. Incluye un portal de ranking por puntos para estudiantes, dashboard de ingresos mensuales/anuales, control de alumnos activos e inactivos, y emisión de reportes en PDF.",
        stack: ["PHP", "MySQL", "jQuery", "Ajax", "Bootstrap"],
      },
      {
        id: "Sistemadistribucionarawaza",
        title: "Sistema de distribución Senseis y mayoristas - Arawaza",
        category: "corporate",
        image: "/img/projects/arawazaSistemaDistribucion.png",
        description:
          "Plataforma de catálogo dinámico donde los precios varían según el rol (distribuidor, sensei, cliente final). Cuenta con dashboard administrativo, gestión integral de ventas, control de stock en tiempo real y emisión de reportes para la toma de decisiones estratégicas.  encuentralo como https://arawaza.com.pe",
        stack: ["Laravel", "React", "MySQL", "Inertia"],
      },
      {
        id: "Arawazaperu",
        title: "Arawaza Perú E-Commerce",
        category: "wordpress",
        image: "/img/projects/ArawazaPeru.png",
        description:
          "Plataforma B2C líder en indumentaria para artes marciales. Ofrece una experiencia de usuario optimizada, presentación detallada del catálogo de productos profesionales y un proceso de compra fluido y seguro.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "CSS Custom",
          "Culqui Online",
        ],
        demoUrl: "https://arawaza.pe",
      },
      {
        id: "Punokperu",
        title: "Punok Perú E-Commerce",
        category: "wordpress",
        image: "/img/projects/PunokPeru.png",
        description:
          "Tienda virtual enfocada en la venta de equipamiento de alta competencia. Destaca por su diseño UI a medida, navegación intuitiva para el cliente final y una sólida gestión de inventario y pedidos.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "CSS Custom",
          "Culqui Online",
        ],
        demoUrl: "https://punokperu.com",
      },
      {
        id: "Omamworld",
        title: "Omam World",
        category: "wordpress",
        image: "/img/projects/OmamWorld.png",
        description:
          "Página informativa premium orientada a eventos nacionales e internacionales, enfocada en las artes marciales en general. El sitio de la Organización Mundial de Artes Marciales está desarrollado con una estética visual moderna de nivel agencia, diseñada para resaltar la identidad de la marca y maximizar conversiones a través del SEO.",
        stack: [
          "WordPress",
          "Hello",
          "Elementor Pro",
          "Jet Engine",
          "SEO",
          "CSS Custom",
        ],
        demoUrl: "https://omamworld.org/",
      },
      {
        id: "bkcorgpe",
        title: "Club Bushinkan Karate Club E-Commerce",
        category: "wordpress",
        image: "/img/projects/bkcorgpe.png",
        description:
          "Sitio web institucional y plataforma de ventas para la academia. Facilita la comunicación con los estudiantes y permite la compra en línea de uniformes y accesorios exclusivos del dojo.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "SEO",
          "CSS Custom",
        ],
        demoUrl: "https://bkc.org.pe/",
      },
      {
        id: "Yimsac",
        title: "Yim S.A.C E-Commerce",
        category: "wordpress",
        image: "/img/projects/Yimsac.png",
        description:
          "E-commerce corporativo enfocado en la distribución minorista de artículos deportivos. Integra pasarela Izipay para transacciones ágiles y un diseño responsivo que facilita la exploración del catálogo.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "SEO",
          "CSS Custom",
          "Izipay Online",
        ],
        demoUrl: "https://yimsac.com/",
      },
      {
        id: "portafolio-francisco",
        title: "Portafolio Profesional Francisco Olortegui",
        category: "fullstack",
        image: "/img/projects/franciscoPortafolio.png",
        description:
          "Sitio web personal diseñado para exhibir mi trayectoria y habilidades como desarrollador Full-Stack. Destaca por su rendimiento, diseño moderno y presentación interactiva de proyectos.",
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
          "Aplicación web tipo microblogging enfocada en el registro de usuarios, autenticación y publicación de mensajes cortos (chirps) en tiempo real, aplicando buenas prácticas de desarrollo backend.",
        stack: ["Laravel", "Blade", "Js"],
        githubUrl: "https://github.com/francisco70134/App-chirps.git",
      },
      {
        id: "ricky-morty",
        title: "Ricky And Morty API",
        category: "academic",
        image: "/img/projects/RickyMortyAPI.png",
        description:
          "Explorador interactivo consumiendo la API pública de Rick and Morty. Permite buscar, filtrar y visualizar tarjetas detalladas de personajes, episodios y locaciones con una interfaz fluida.",
        stack: ["React", "JS", "CSS"],
        githubUrl:
          "https://github.com/francisco70134/Rick-and-Morty-Explorer.git",
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
        image: "/img/projects/ZoiperInteligente.png",
        description:
          "Developed for NTT DATA PERU. Queue management architecture designed to optimize customer service and distribution, with real-time analytics integration.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "WebSockets", "FFMPEG"],
      },
      {
        id: "dojo-oshin",
        title: "ERP System: Dojo Oshin Karate",
        category: "corporate",
        image: "img/projects/ClubOshinSistema.png",
        description:
          "Comprehensive system for academies. Manages enrollments, attendance, and payment control with debt alerts. Includes a point-based student ranking portal, monthly/annual income dashboard, active/inactive student tracking, and PDF report generation.",
        stack: ["PHP", "MySQL", "jQuery", "Ajax", "Bootstrap"],
      },
      {
        id: "Sistemadistribucionarawaza",
        title: "Sensei and Wholesaler Distribution System - Arawaza",
        category: "corporate",
        image: "/img/projects/arawazaSistemaDistribucion.png",
        description:
          "Dynamic catalog platform where prices vary by role (distributor, sensei, end user). Features an admin dashboard, comprehensive sales management, real-time stock control, and strategic reporting for decision-making. look for it https://arawaza.com.pe",
        stack: ["Laravel", "React", "MySQL", "Inertia"],
      },
      {
        id: "Arawazaperu",
        title: "Arawaza Perú E-Commerce",
        category: "wordpress",
        image: "/img/projects/ArawazaPeru.png",
        description:
          "Leading B2C platform for martial arts apparel. Offers an optimized user experience, detailed presentation of professional products, and a seamless, secure purchasing process.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "Custom CSS",
          "Culqui Online",
        ],
        demoUrl: "https://arawaza.pe",
      },
      {
        id: "Punokperu",
        title: "Punok Perú E-Commerce",
        category: "wordpress",
        image: "/img/projects/PunokPeru.png",
        description:
          "Online store focused on high-competition sports equipment. Stands out for its custom UI design, intuitive navigation for end customers, and solid inventory and order management.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "Custom CSS",
          "Culqui Online",
        ],
        demoUrl: "https://punokperu.com",
      },
      {
        id: "Omamworld",
        title: "Omam World",
        category: "wordpress",
        image: "/img/projects/OmamWorld.png",
        description:
          "Premium informative website oriented towards national and international events, focused on martial arts in general. The World Martial Arts Organization platform is developed with a modern, agency-level visual aesthetic, designed to highlight brand identity and maximize conversions through SEO.",
        stack: [
          "WordPress",
          "Hello",
          "Elementor Pro",
          "Jet Engine",
          "SEO",
          "Custom CSS",
        ],
        demoUrl: "https://omamworld.org/",
      },
      {
        id: "bkcorgpe",
        title: "Club Bushinkan Karate Club E-Commerce",
        category: "wordpress",
        image: "/img/projects/bkcorgpe.png",
        description:
          "Institutional website and sales platform for the academy. Facilitates communication with students and allows online purchasing of exclusive dojo uniforms and accessories.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "SEO",
          "Custom CSS",
        ],
        demoUrl: "https://bkc.org.pe/",
      },
      {
        id: "Yimsac",
        title: "Yim S.A.C E-Commerce",
        category: "wordpress",
        image: "/img/projects/Yimsac.png",
        description:
          "Corporate e-commerce focused on the retail distribution of sporting goods. Integrates the Izipay gateway for agile transactions and a responsive design that makes exploring the catalog easy.",
        stack: [
          "WordPress",
          "Elementor",
          "Jet Engine",
          "WooCommerce",
          "SEO",
          "Custom CSS",
          "Izipay Online",
        ],
        demoUrl: "https://yimsac.com/",
      },
      {
        id: "portafolio-francisco",
        title: "Professional Portfolio Francisco Olortegui",
        category: "fullstack",
        image: "/img/projects/franciscoPortafolio.png",
        description:
          "Personal website designed to showcase my career and skills as a Full-Stack developer. Highlights performance, modern design, and interactive presentation of projects.",
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
          "Corporate website for industrial refrigeration and HVAC services. Content architecture, service catalog, and visual identity design.",
        stack: ["WordPress", "Elementor", "SEO", "Figma"],
        demoUrl: "https://frozenoxperu.com/",
      },
      {
        id: "appchirps",
        title: "App Chirps",
        category: "academic",
        image: "/img/projects/AppChirps.png",
        description:
          "Microblogging-style web application focused on user registration, authentication, and posting short messages (chirps) in real-time, applying backend development best practices.",
        stack: ["Laravel", "Blade", "Js"],
        githubUrl: "https://github.com/francisco70134/App-chirps.git",
      },
      {
        id: "ricky-morty",
        title: "Ricky And Morty API",
        category: "academic",
        image: "/img/projects/RickyMortyAPI.png",
        description:
          "Interactive explorer consuming the public Rick and Morty API. Allows users to search, filter, and view detailed cards for characters, episodes, and locations with a fluid interface.",
        stack: ["React", "JS", "CSS"],
        githubUrl:
          "https://github.com/francisco70134/Rick-and-Morty-Explorer.git",
        demoUrl: "https://rick-and-morty-explorer-zeta.vercel.app/",
      },
    ],
  },
};
