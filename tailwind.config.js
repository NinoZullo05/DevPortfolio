/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "light-green": "#32CD32",
        "dark-green": "#006400",
        "dark-bg": "#1d2a35",
        "light-bg": "#ffffff",
        "dark-text": "#e2e2e2", // light text for dark mode
        "light-text": "#333333", // dark text for light mode
        "light-gray": "#f4f4f4", // light gray background
        "dark-gray": "#2d2d2d", // dark gray background
        "light-purple": "#a855f7", // violet chiaro per modalità chiara
        "dark-purple": "#7c3aed", // violet scuro per modalità scura
      },
    },
  },
  plugins: [],
};
