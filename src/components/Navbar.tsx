// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // NUEVO TRUCO PRO: Bloquear el scroll de la página cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Escuchar el scroll para el glassmorphism del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav 
        // Añadimos 'isOpen' a la condición para que el header mantenga su fondo oscuro cuando el menú se abre
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-dark-bg/50 backdrop-blur-md border-b border-dark-border py-2 shadow-lg' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            
            <Logo />

            <ul className="hidden md:flex space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-aurora-purple transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button 
              className="md:hidden text-gray-300 hover:text-aurora-purple transition relative z-50" 
              onClick={toggleMenu}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* NUEVO: Menú Móvil Fullscreen */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-2xl flex flex-col items-center justify-center min-h-screen animate-slide-up">
          <div className="flex flex-col items-center space-y-8 w-full px-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                // Tipografía grande (text-3xl) y efecto de escala (hover:scale-110)
                className="text-3xl md:text-4xl font-bold text-gray-400 hover:text-aurora-purple hover:scale-110 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};