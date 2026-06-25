import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "../data";

const socialLink = socialLinks;

export const Footer = () => {
  return (
    <footer className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        <p className="text-gray-400 text-sm font-mono mb-3 text-center">
          © {new Date().getFullYear()} Francisco Olortegui. Todos los derechos
          reservados.
        </p>

        <div className="flex items-center space-x-2 text-xs text-gray-500">
          {/* Redes sociales */}

          <div className="mt-6 flex justify-center space-x-6">
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
    </footer>
  );
};
