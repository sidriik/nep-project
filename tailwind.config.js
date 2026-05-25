/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nep: {
          red: "#68191E",
          black: "#141414",
          paper: "#FFF4E4",
          gray: "#E3E3E3",
        },
      },
    },
  },
  plugins: [],
}