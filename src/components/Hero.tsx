// src/components/Hero.tsx
import { FaGithub, FaLinkedin, FaTwitter,  } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { heroInfo } from "../data";

export const Hero = () => {
  // 1. Obtenemos el idioma actual
  const { i18n } = useTranslation();

  // 2. Extraemos la información correcta según el idioma
  const currentLang = (i18n.language || "es") as "es" | "en";
  const content = heroInfo[currentLang];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative"
    >
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {content.greeting}{" "}
            <span className="gradient-text">{heroInfo.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            {/* Volvemos a unir el arreglo de roles con el separador */}
            {content.roles.join(" | ")}
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 font-mono">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-gradient-to-r from-aurora-purple-dark to-aurora-purple rounded-full text-white font-medium hover:shadow-lg hover:shadow-aurora-purple-dark/50 transition-all transform hover:scale-105"
            >
              {content.btnWork}
            </a>
            <a
              href={heroInfo.resumeUrl}
              className="px-8 py-3 border border-aurora-purple rounded-full text-gray-300 hover:bg-aurora-purple hover:text-white transition-all transform hover:scale-105"
            >
              {content.btnResume}
            </a>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-aurora-purple transition transform hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-aurora-blue transition transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-aurora-pink transition transform hover:scale-110"
            >
              <FaTwitter size={28} />
            </a>
            
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div
          className="absolute w-2 h-2 bg-aurora-purple rounded-full animate-float"
          style={{ top: "20%", left: "10%" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-aurora-blue rounded-full animate-float"
          style={{ top: "60%", left: "80%", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-aurora-pink rounded-full animate-float"
          style={{ top: "40%", left: "60%", animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  );
};
