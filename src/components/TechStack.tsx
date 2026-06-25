import { useState } from "react";
import { useTranslation } from "react-i18next";
import { techStackData } from "../data/tech";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPhp,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaDocker,
  FaFigma,
  FaWordpress,
  FaTrello,
  FaSlack,
  FaGithub,
  FaNpm,
  FaYarn,
  FaDatabase,
  FaServer,
  FaCubes,
  FaProjectDiagram,
  FaCheckDouble,
  FaInfinity,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  /* SiNuxtdotjs, */
  SiAstro,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiRedux,
  SiNestjs,
  SiSpringboot,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiPhpmyadmin,
  SiJenkins,
  SiPostman,
  SiInsomnia,
  SiJira,
  /* SiPowerbi, */
  /* SiMicrosoftexcel, */
  SiNotion,
  SiGit,
} from "react-icons/si";

export const TechStack = () => {
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language || "es") as "es" | "en";
  const categories = techStackData[currentLang].categories;

  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      // FRONTEND
      case "nuxt":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
            className="w-10 h-10 mb-2 drop-shadow-md"
            alt="Nuxt.js"
          />
        );
      case "react":
        return <FaReact className="text-[#61DAFB] text-4xl mb-2" />;
      case "nextjs":
        return <SiNextdotjs className="text-white text-4xl mb-2" />;
      case "vue":
        return <FaVuejs className="text-[#4FC08D] text-4xl mb-2" />;

      case "livewire":
        return <FaLaravel className="text-[#fb70a9] text-4xl mb-2" />; // O el icono que prefieras
      case "alpine":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg"
            className="w-10 h-10 mb-2 drop-shadow-md"
            alt="Alpine.js"
          />
        );

      case "astro":
        return <SiAstro className="text-[#FF5D01] text-4xl mb-2" />;
      case "tailwind":
        return <SiTailwindcss className="text-[#06B6D4] text-4xl mb-2" />;
      case "bootstrap":
        return <SiBootstrap className="text-[#7952B3] text-4xl mb-2" />;
      case "mui":
        return <SiMui className="text-[#007FFF] text-4xl mb-2" />;
      case "redux":
        return <SiRedux className="text-[#764ABC] text-4xl mb-2" />;
      case "wordpress":
        return <FaWordpress className="text-[#21759B] text-4xl mb-2" />;

      // ARQUITECTURA & DEVOPS
      case "linux":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
            className="w-10 h-10 mb-2 drop-shadow-md"
            alt="Linux"
          />
        );
      case "microservices":
        return <FaCubes className="text-aurora-purple text-4xl mb-2" />;
      case "monolith":
        return <FaServer className="text-gray-500 text-4xl mb-2" />;
      case "cleanarch":
        return <FaProjectDiagram className="text-aurora-blue text-4xl mb-2" />;
      case "solid":
        return <FaCheckDouble className="text-green-400 text-4xl mb-2" />;
      case "docker":
        return <FaDocker className="text-[#2496ED] text-4xl mb-2" />;
      case "jenkins":
        return <SiJenkins className="text-[#D24939] text-4xl mb-2" />;
      case "cicd":
        return <FaInfinity className="text-aurora-blue text-4xl mb-2" />;

      // DATA & GESTIÓN
      case "powerbi":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
            className="w-10 h-10 mb-2 drop-shadow-md"
            alt="Power BI"
          />
        );
      case "excel":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg"
            className="w-10 h-10 mb-2 drop-shadow-md"
            alt="Excel"
          />
        );
      case "looker":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Looker.svg"
            className="w-10 h-10 mb-2 drop-shadow-md"
            alt="Looker"
          />
        );
      case "jira":
        return <SiJira className="text-[#0052CC] text-4xl mb-2" />;
      case "scrum":
        return <FaProjectDiagram className="text-[#0052CC] text-4xl mb-2" />;
      case "kanban":
        return <FaTrello className="text-[#0052CC] text-4xl mb-2" />;
      case "figma":
        return <FaFigma className="text-[#F24E1E] text-4xl mb-2" />;
      case "notion":
        return <SiNotion className="text-white text-4xl mb-2" />;
      case "trello":
        return <FaTrello className="text-[#0052CC] text-4xl mb-2" />;
      case "slack":
        return <FaSlack className="text-[#4A154B] text-4xl mb-2" />;

      // LENGUAJES
      case "js":
        return <FaJs className="text-[#F7DF1E] text-4xl mb-2" />;
      case "ts":
        return <SiTypescript className="text-[#3178C6] text-4xl mb-2" />;
      case "java":
        return <FaJava className="text-[#5382a1] text-4xl mb-2" />;
      case "php":
        return <FaPhp className="text-[#777BB4] text-4xl mb-2" />;
      case "html":
        return <FaHtml5 className="text-[#E34F26] text-4xl mb-2" />;
      case "css":
        return <FaCss3Alt className="text-[#1572B6] text-4xl mb-2" />;

      // BACKEND
      case "node":
        return <FaNodeJs className="text-[#339933] text-4xl mb-2" />;
      case "nest":
        return <SiNestjs className="text-[#E0234E] text-4xl mb-2" />;
      case "spring":
        return <SiSpringboot className="text-[#6DB33F] text-4xl mb-2" />;
      case "laravel":
        return <SiLaravel className="text-[#FF2D20] text-4xl mb-2" />;
      case "websockets":
        return <FaProjectDiagram className="text-aurora-pink text-4xl mb-2" />;

      // BASES DE DATOS
      case "mysql":
        return <SiMysql className="text-[#4479A1] text-4xl mb-2" />;
      case "postgres":
        return <SiPostgresql className="text-[#336791] text-4xl mb-2" />;
      case "mongo":
        return <SiMongodb className="text-[#47A248] text-4xl mb-2" />;
      case "supabase":
        return <SiSupabase className="text-[#3ECF8E] text-4xl mb-2" />;
      case "sql":
        return <FaDatabase className="text-gray-400 text-4xl mb-2" />;
      case "pgadmin":
        return <FaDatabase className="text-[#336791] text-4xl mb-2" />;
      case "phpmyadmin":
        return <SiPhpmyadmin className="text-[#6C78AF] text-4xl mb-2" />;

      // HERRAMIENTAS & API
      case "git":
        return <SiGit className="text-[#F05032] text-4xl mb-2" />;
      case "github":
        return <FaGithub className="text-white text-4xl mb-2" />;
      case "postman":
        return <SiPostman className="text-[#FF6C37] text-4xl mb-2" />;
      case "insomnia":
        return <SiInsomnia className="text-[#4000BF] text-4xl mb-2" />;
      case "npm":
        return <FaNpm className="text-[#CB3837] text-4xl mb-2" />;
      case "yarn":
        return <FaYarn className="text-[#2C8EBB] text-4xl mb-2" />;

      default:
        return <FaServer className="text-gray-400 text-4xl mb-2" />;
    }
  };

  const filteredTools = techStackData.tools.filter(
    (tool) => tool.category === activeCategory,
  );

  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-10 md:mb-16 animate-slide-up flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("nav.skills")}
          </h2>
          <div className="w-20 h-1 bg-aurora-purple rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-aurora-purple-dark text-white shadow-md shadow-aurora-purple-dark/40"
                  : "bg-[#2f395144] text-gray-400 hover:text-white  hover:border-gray-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-slide-up"
        >
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#2f395144]  rounded-xl p-5 flex flex-col items-center justify-center hover:bg-[#151b2b] hover:border-aurora-purple transition-all duration-300 group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {getTechIcon(tool.icon)}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
