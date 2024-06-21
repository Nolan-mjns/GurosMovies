/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gurosGray: "#273138",
      gurosLightGray: "#5C7284",
      gurosBlue: "#4C42E4",
      gurosPink: "#E5004D",
      gurosGreen: "#00DA4A",
      white: "#FFF",
    },
    animation: {
      fade: 'fadeIn .5s ease-in-out',
    },

    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
    extend: {},
  },
  plugins: [],
};
