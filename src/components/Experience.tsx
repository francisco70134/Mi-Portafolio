import { useTranslation } from "react-i18next";
import { experienceInfo } from "../data/experience";

export const Experience = () => {
  const { i18n } = useTranslation();

  const currentLang = (i18n.language || "es") as "es";
  const content = experienceInfo[currentLang];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {content.sectionTitle}
          </h2>

          <div className="w-20 h-1 bg-aurora-purple rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-[#23293b]" />

          <div className="space-y-14">
            {content.jobs.map((job) => (
              <div key={job.id} className="relative pl-14">
                <div className="absolute left-0 top-2">
                  <div className="w-6 h-6 rounded-full border-2 border-aurora-purple bg-dark-bg"></div>
                </div>

                <p className="text-sm font-mono text-aurora-purple mb-3">
                  {job.period}
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  {job.role}
                </h3>

                <p className="text-gray-400 mt-1 mb-5">{job.company}</p>

                <div className="space-y-3">
                  {job.description.map((item, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {job.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        px-3
                        py-1
                        text-sm
                        rounded-full
                        border
                        border-[#23293b]
                        text-gray-400
                        hover:text-white
                        hover:border-aurora-purple/40
                        transition-colors
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
