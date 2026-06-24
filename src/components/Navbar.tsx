import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-dark-bg/50 backdrop-blur-md border-b border-dark-border py-2 shadow-lg"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <Logo />

            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-aurora-purple transition-colors font-medium"
                  >
                    {t("nav.home")}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-aurora-purple transition-colors font-medium"
                  >
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-gray-300 hover:text-aurora-purple transition-colors font-medium"
                  >
                    {t("nav.experience")}
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-300 hover:text-aurora-purple transition-colors font-medium"
                  >
                    {t("nav.skills")}
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-300 hover:text-aurora-purple transition-colors font-medium"
                  >
                    {t("nav.portfolio")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-aurora-purple transition-colors font-medium"
                  >
                    {t("nav.contact")}
                  </a>
                </li>
              </ul>

              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-300 hover:text-aurora-purple transition border border-dark-border px-3 py-1 rounded-full bg-dark-card/50"
              >
                <Globe size={16} />
                <span className="text-sm font-bold uppercase">
                  {i18n.language}
                </span>
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4 relative z-50">
              <button
                onClick={toggleLanguage}
                className="text-gray-300 hover:text-aurora-purple transition flex items-center"
              >
                <span className="text-sm font-bold uppercase mr-1">
                  {i18n.language}
                </span>
                <Globe size={18} />
              </button>

              <button
                className="text-gray-300 hover:text-aurora-purple transition"
                onClick={toggleMenu}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-2xl flex flex-col items-center justify-center min-h-screen animate-slide-up">
          <div className="flex flex-col items-center space-y-8 w-full px-6">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-gray-400 hover:text-aurora-purple hover:scale-110 transition-all"
            >
              {t("nav.home")}
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-gray-400 hover:text-aurora-purple hover:scale-110 transition-all"
            >
              {t("nav.about")}
            </a>
            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-gray-400 hover:text-aurora-purple hover:scale-110 transition-all"
            >
              {t("nav.experience")}
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-gray-400 hover:text-aurora-purple hover:scale-110 transition-all"
            >
              {t("nav.skills")}
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-gray-400 hover:text-aurora-purple hover:scale-110 transition-all"
            >
              {t("nav.portfolio")}
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-gray-400 hover:text-aurora-purple hover:scale-110 transition-all"
            >
              {t("nav.contact")}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
