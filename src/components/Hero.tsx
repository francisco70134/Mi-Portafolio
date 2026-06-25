import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { heroInfo } from "../data";
import { socialLinks } from "../data/social";

export const Hero = () => {
  const { i18n } = useTranslation();

  const currentLang = (i18n.language || "es") as "es" | "en";
  const content = heroInfo[currentLang];

  const socialLink = socialLinks;

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

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {content.roles.join(" | ")}
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-mono">
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
              href="/docs/Francisco_Olortegui_CurriculumVitae_2026.pdf"
              download="Francisco_Olortegui_CurriculumVitae_2026.pdf"
              className="px-8 py-3 border border-aurora-purple rounded-full text-gray-300 hover:bg-aurora-purple hover:text-white transition-all transform hover:scale-105"
            >
              {content.btnResume}
            </a>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <a
              href={socialLink.github.url}
              className="text-gray-400 hover:text-aurora-purple transition transform hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            <a
              href={socialLink.linkedin.url}
              className="text-gray-400 hover:text-aurora-blue transition transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={socialLink.correo.url}
              className="text-gray-400 hover:text-aurora-blue transition transform hover:scale-110"
            >
              <FaEnvelope size={28} />
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
