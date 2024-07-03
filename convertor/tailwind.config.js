/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkColor:"#0B2447",
        minDarkColor:"#19376D",
        secondary:"#576CBC",
        action:"#A5D7E8"
      }
    },
  },
  plugins: [],
}

