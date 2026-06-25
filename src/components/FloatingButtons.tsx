import { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <a
        href="https://wa.me/51941795983"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={30} />

        {/* Notificación roja animada ("1") */}
        <span className="absolute -top-1 -right-1 flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500 text-white text-[10px] font-bold items-center justify-center border-2 border-dark-bg">
            1
          </span>
        </span>
      </a>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 p-4 bg-dark-card border border-[#23293b] text-aurora-purple rounded-full shadow-lg hover:bg-aurora-purple hover:text-white hover:border-aurora-purple transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Subir al inicio"
      >
        <FaArrowUp size={20} />
      </button>
    </>
  );
};
