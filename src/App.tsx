import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { Experience } from "./components/Experience";

function App() {
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${ev.clientX}px`);
      document.documentElement.style.setProperty("--y", `${ev.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="bg-dark-bg text-gray-200 min-h-screen relative">
      <div className="premium-grid"></div>
      <div className="spotlight-effect transition-opacity duration-300"></div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <FloatingButtons />
      </main>
    </div>
  );
}

export default App;
