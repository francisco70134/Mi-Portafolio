import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import { aboutInfo } from "../data";
import profileImg from "../assets/img/CV_Profile.jpeg";

export const About = () => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || "es") as "es" | "en";
  const content = aboutInfo[currentLang];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 animate-slide-up flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <div className="w-20 h-1 bg-aurora-purple rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple-dark via-aurora-blue to-aurora-pink rounded-2xl transform rotate-3 opacity-70 blur-sm"></div>
              <div className="absolute inset-0 bg-dark-card border border-dark-border rounded-2xl overflow-hidden z-10 p-2">
                <img
                  src={profileImg}
                  alt="Francisco"
                  className="w-full h-full object-cover rounded-xl border border-dark-border/50"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              {content.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-300 leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-dark-border">
              {content.details.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaChevronRight className="text-aurora-pink mt-1.5 text-xs flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-200 block">
                      {item.label}:
                    </span>
                    <span className="text-gray-400">{item.value}</span>
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
