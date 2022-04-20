module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        indieFlower: ["Indie Flower", "cursive"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}