// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Aquí definimos nuestros diccionarios
const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        experience: "Experiencia",
        skills: "Habilidades",
        portfolio: "Portafolio",
        contact: "Contacto",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        experience: "Experience",
        skills: "Skills",
        portfolio: "Portfolio",
        contact: "Contact",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma por defecto al entrar a la web
  fallbackLng: "en", // Si falla algo, usa inglés
  interpolation: {
    escapeValue: false, // React ya nos protege de ataques XSS por defecto
  },
});

export default i18n;
