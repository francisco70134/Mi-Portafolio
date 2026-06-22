// src/App.tsx
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';

function App() {
  // Magia pura: Rastrear el cursor para actualizar las variables CSS
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${ev.clientX}px`);
      document.documentElement.style.setProperty('--y', `${ev.clientY}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    // Fondo base oscuro y limpio
    <div className="bg-dark-bg text-gray-200 min-h-screen relative">
      
      {/* Las nuevas capas premium */}
      <div className="premium-grid"></div>
      <div className="spotlight-effect transition-opacity duration-300"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;