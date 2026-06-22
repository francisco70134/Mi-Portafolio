/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        "aurora-blue": "#00aaff",
        "aurora-purple": "#aa00ff",
        "aurora-purple-dark": "#9333ea",
        "aurora-pink": "#ff00aa",
        "dark-bg": "#0a0e1a",
        "dark-card": "#1a1f2e",
        "dark-border": "#2a2f3e",
      },
      animation: {
        aurora: "aurora 15s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        aurora: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "200% 200%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            backgroundSize: "200% 200%",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
