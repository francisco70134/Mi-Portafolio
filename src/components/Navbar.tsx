import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#05080f]/80 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="relative z-50">
              <Logo />
            </div>

            <div className="hidden md:flex items-center space-x-10">
              <ul className="flex space-x-8">
                {[
                  "home",
                  "about",
                  "experience",
                  "skills",
                  "portfolio",
                  "contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(170,0,255,0.5)] transition-all duration-300 font-medium text-sm tracking-wide"
                    >
                      {t(`nav.${item}`)}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={toggleLanguage}
                className="group flex items-center space-x-2 bg-transparent hover:bg-white/5 px-2 py-1.5 rounded-lg transition-all duration-300"
                aria-label="Cambiar idioma"
              >
                <img
                  src={
                    i18n.language === "es"
                      ? "https://flagcdn.com/pe.svg"
                      : "https://flagcdn.com/us.svg"
                  }
                  alt={i18n.language === "es" ? "Español" : "English"}
                  className="w-5 h-5 rounded-full object-cover shadow-sm group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm font-bold text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors">
                  {i18n.language === "es" ? "ES" : "EN"}
                </span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-4 relative z-50">
              <button
                onClick={toggleLanguage}
                className="group flex items-center space-x-1.5 bg-transparent p-1 rounded-lg"
              >
                <img
                  src={
                    i18n.language === "es"
                      ? "https://flagcdn.com/pe.svg"
                      : "https://flagcdn.com/us.svg"
                  }
                  alt={i18n.language === "es" ? "Español" : "English"}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span className="text-xs font-bold text-gray-300 uppercase">
                  {i18n.language === "es" ? "ES" : "EN"}
                </span>
              </button>

              <button
                className="text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#05080f]/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center justify-center min-h-screen ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-12"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 w-full px-6">
          {[
            "home",
            "about",
            "experience",
            "skills",
            "portfolio",
            "contact",
          ].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${isOpen ? index * 50 : 0}ms` }}
              className={`text-3xl font-bold text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t(`nav.${item}`)}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
