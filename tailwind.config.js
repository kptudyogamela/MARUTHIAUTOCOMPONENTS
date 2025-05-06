module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulseColor: "pulseColor 2s infinite", // Add custom animation
      },
      keyframes: {
        pulseColor: {
          "0%": { backgroundColor: "#ff0000" }, // Starting color
          "50%": { backgroundColor: "#00ff00" }, // Middle color
          "100%": { backgroundColor: "#ff0000" }, // Ending color
        },
      },
    },
  },
  plugins: [],
  extend: {
    animation: {
      fadeIn: "fadeIn 0.3s ease-out forwards",
      zoomIn: "zoomIn 0.4s ease-out forwards",
    },
    keyframes: {
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
};
