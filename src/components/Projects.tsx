import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projectsInfo } from "../data/projects";
import type { ProjectCategory } from "../types/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || "es") as "es";
  const content = projectsInfo[currentLang];

  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("todos");

  const filteredProjects = content.projects.filter((project) =>
    activeFilter === "todos" ? true : project.category === activeFilter,
  );

  return (
    <section id="portfolio" className="py-24 relative bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {content.sectionTitle}
          </h2>
          <div className="w-20 h-1 bg-aurora-purple"></div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 animate-slide-up">
          {content.filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 text-sm font-mono transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-aurora-purple text-white border border-aurora-purple"
                  : "bg-transparent text-gray-400 border border-[#23293b] hover:border-gray-500 hover:text-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-dark-bg border border-[#23293b] hover:border-aurora-purple/50 transition-colors duration-300 overflow-hidden animate-slide-up"
            >
              <div className="relative h-56 overflow-hidden bg-[#10141e]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 font-mono">
                      No Preview Available
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-aurora-purple transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Stack de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-aurora-blue bg-[#10141e] border border-[#23293b] px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-[#23293b]">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white flex items-center space-x-2 transition-colors text-sm font-semibold"
                    >
                      <FaGithub size={18} />
                      <span>Código</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-aurora-pink flex items-center space-x-2 transition-colors text-sm font-semibold"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Ver Proyecto</span>
                    </a>
                  )}

                  {!project.githubUrl && !project.demoUrl && (
                    <span className="text-gray-600 text-sm font-mono italic">
                      Acceso Restringido (NDA)
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
