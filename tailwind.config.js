module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulseColor: "pulseColor 2s infinite", // Custom animation
        fadeIn: "fadeIn 0.3s ease-out forwards", // Fade-in animation
        zoomIn: "zoomIn 0.4s ease-out forwards", // Zoom-in animation
      },
      keyframes: {
        pulseColor: {
          "0%": { backgroundColor: "#ff0000" }, // Starting color
          "50%": { backgroundColor: "#00ff00" }, // Middle color
          "100%": { backgroundColor: "#ff0000" }, // Ending color
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        zoomIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
