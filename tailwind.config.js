/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        scissors: {
          start: "hsl(39, 89%, 49%)",
          end: "hsl(40, 84%, 53%)",
        },
        paper: {
          start: "hsl(230, 89%, 62%)",
          end: "hsl(230, 89%, 65%)",
        },
        rock: {
          start: "hsl(349, 71%, 52%)",
          end: "hsl(349, 70%, 56%)",
        },
        lizard: {
          start: "hsl(261, 73%, 60%)",
          end: "hsl(261, 72%, 63%)",
        },
        cyan: {
          start: "hsl(189, 59%, 53%)",
          end: "hsl(189, 58%, 57%)",
        },
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        radialGradient: {
          start: "hsl(214, 47%, 23%)",
          end: "hsl(237, 49%, 15%)",
        },
      },
    },
  },
  plugins: [],
};
