/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        135: "135deg",
      },
      boxShadow: { "shadow-1": "0 15px 35px rgba(0,0,0,9)" },
      keyframes: {
        "moving-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "moving-down": "moving-down 6s linear infinite",
      },
    },
    fontFamily: {
      font1: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};
