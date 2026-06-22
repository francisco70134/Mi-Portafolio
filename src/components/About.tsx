import { FaLaptopCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { aboutInfo } from "../data";

export const About = () => {
  const { i18n } = useTranslation();

  const currentLang = (i18n.language || "es") as "es" | "en";
  const content = aboutInfo[currentLang];

  const statColors = [
    "text-aurora-purple",
    "text-aurora-pink",
    "text-aurora-blue",
    "text-purple-400",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* 4. Usamos 'content' en lugar de aboutInfo directamente */}
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          {content.title}
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-400 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-4 pt-4">
              {content.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dark-card p-4 rounded-lg border border-dark-border hover:border-aurora-purple transition-colors duration-300"
                >
                  <div
                    className={`text-3xl font-bold ${statColors[index % statColors.length]}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-aurora-purple via-aurora-pink to-aurora-blue p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-aurora-purple opacity-10 blur-2xl"></div>

                <FaLaptopCode className="text-8xl text-aurora-pink drop-shadow-[0_0_15px_rgba(255,0,170,0.5)] z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
