// Eliminamos la importación de lucide-react y usamos react-icons/fa
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { heroInfo, socialLinks } from "../data";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative"
    >
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {heroInfo.greeting}{" "}
            <span className="gradient-text font-mono">{heroInfo.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold">
            {heroInfo.roles.join(" | ")}
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-mono">
            {heroInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              // Cambiamos a un degradado morado elegante y suavizamos la sombra
              className="px-8 py-3 bg-gradient-to-r from-aurora-purple-dark to-aurora-purple rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105"
            >
              Ver mi Trabajo
            </a>
            <a
              href={heroInfo.resumeUrl}
              // Aclaramos el texto por defecto (text-gray-300) para que no se pierda
              className="px-8 py-3 border border-aurora-purple rounded-full text-gray-300 hover:bg-aurora-purple hover:text-white transition-all transform hover:scale-105"
            >
              Descargar CV
            </a>
          </div>

          {/* Redes Sociales con react-icons */}
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
            <a
              href="#"
              className="text-gray-400 hover:text-aurora-purple transition transform hover:scale-110"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
