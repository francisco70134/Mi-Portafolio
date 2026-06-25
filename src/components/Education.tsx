import { useTranslation } from "react-i18next";
import { educationInfo } from "../data/education";

export const Education = () => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || "es") as "es";
  const content = educationInfo[currentLang];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {content.sectionTitle}
          </h2>
          <div className="w-20 h-1 bg-aurora-purple"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 animate-slide-up">
          <div className="flex-1 relative">
            {/* Título del Nodo Raíz */}
            <h3 className="text-xl font-bold text-gray-300 mb-10 tracking-wide uppercase flex items-center">
              <span className="w-2 h-2 bg-aurora-purple rounded-full mr-3"></span>
              {content.educationTitle}
            </h3>

            {/* Línea principal vertical (El "Tronco") */}
            <div className="absolute left-[3px] top-[40px] bottom-0 w-[2px] bg-[#23293b]"></div>

            <div className="space-y-16">
              {content.degrees.map((degree, idx) => (
                <div key={idx} className="relative pl-8 md:pl-10 group">
                  {/* El Nodo (Círculo) */}
                  <div className="absolute left-[-4px] top-1.5 w-4 h-4 bg-dark-bg border-2 border-aurora-purple rounded-full z-10 group-hover:bg-aurora-purple transition-colors duration-300"></div>

                  {/* Línea horizontal de conexión (Rama) */}
                  <div className="absolute left-[3px] top-[13px] w-5 md:w-7 h-[2px] bg-[#23293b] group-hover:bg-aurora-purple transition-colors duration-300"></div>

                  {/* Contenido Sin Fondo */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <span className="text-sm font-mono text-aurora-purple-dark">
                        {degree.period}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        // {degree.status}
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-1">
                      {degree.title}
                    </h4>
                    <p className="text-aurora-blue font-medium mb-4">
                      {degree.institution}
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base max-w-lg">
                      {degree.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {degree.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-mono text-gray-400 border border-[#23293b] px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative mt-12 lg:mt-0">
            {/* Título del Nodo Raíz */}
            <h3 className="text-xl font-bold text-gray-300 mb-10 tracking-wide uppercase flex items-center">
              <span className="w-2 h-2 bg-aurora-blue rounded-full mr-3"></span>
              {content.certificationsTitle}
            </h3>

            {/* Línea principal vertical (El "Tronco") */}
            <div className="absolute left-[3px] top-[40px] bottom-0 w-[2px] bg-[#23293b]"></div>

            <div className="space-y-10">
              {content.certifications.map((cert, idx) => (
                <div key={idx} className="relative pl-8 md:pl-10 group">
                  {/* El Nodo (Diamante/Cuadrado rotado para diferenciar de los estudios) */}
                  <div className="absolute left-[-3px] top-2 w-3 h-3 bg-dark-bg border-2 border-aurora-blue transform rotate-45 z-10 group-hover:bg-aurora-blue transition-colors duration-300"></div>

                  {/* Línea horizontal de conexión*/}
                  <div className="absolute left-[3px] top-[13px] w-5 md:w-7 h-[2px] bg-[#23293b] group-hover:bg-aurora-blue transition-colors duration-300"></div>

                  <div>
                    <div className="text-xs font-mono text-gray-500 mb-1">
                      {cert.date}
                    </div>
                    <h5 className="text-lg font-bold text-gray-200 mb-1 group-hover:text-white transition-colors">
                      {cert.name}
                    </h5>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
