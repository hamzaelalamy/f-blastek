/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        cardEntrance: {
          from: {
            opacity: 0,
            transform: "scale(0.3)",
            filter: "hue-rotate(180deg)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
            filter: "hue-rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
