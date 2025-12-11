/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#1e90ff",
          cyan: "#00f6ff"
        }
      },
      fontFamily: {
        mono: ["Space Grotesk", "monospace"]
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(30,144,255,0.3) 0, rgba(0,0,0,0) 70%)"
      }
    }
  },
  plugins: []
};
