/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange" : "#f47d3b",
        "black": "#f47d3b",
        "secondary": "#f47d3b",
        "primaryBG" : "#f47d3b"

      }
      
    },
  },
  plugins: [require('daisyui'),],
}

