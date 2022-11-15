/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "darkblue" : "#083AA9",
        "lightblue" : "#47B5FF",
      }
    },
  },
  plugins: [],
}