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
};
