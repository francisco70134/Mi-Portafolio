import type { HeroData } from "../types";

export const heroInfo: HeroData = {
  // Datos que no necesitan traducción
  name: "Francisco",
  resumeUrl: "/cv-francisco.pdf",

  // Datos en Español
  es: {
    greeting: "Hola, soy",
    roles: [
      "Ingeniero de Software",
      "Full-Stack Developer",
      "UI/UX Designer",
      "Tech Innovator",
    ],
    description:
      "Construyendo experiencias digitales inmersivas. Apasionado por las buenas prácticas, la arquitectura de software y el diseño funcional.",
    btnWork: "Ver mi Trabajo",
    btnResume: "Descargar CV",
  },

  // Datos en Inglés
  en: {
    greeting: "Hi, I'm",
    roles: [
      "Software Engineer",
      "Full-Stack Developer",
      "UI/UX Designer",
      "Tech Innovator",
    ],
    description:
      "Crafting immersive digital experiences. Passionate about best practices, software architecture, and functional design.",
    btnWork: "View My Work",
    btnResume: "Download CV",
  },
};
