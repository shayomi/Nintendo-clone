/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
    },
    extend: {
      colors: {
        body: "#ffffff",
        hero: "#0063c6",
        dark: "#7D7D7D",
        red: {
          DEFAULT: "#E60012",
          hover: "#880000",
        },
      },
    },
  },
  plugins: [],
};
