/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pricedown: ["Pricedown", "san-serif"],
      },
      colors: {
        darky: "rgb(10 3 11)",
      },
    },
  },
  plugins: [],
};
