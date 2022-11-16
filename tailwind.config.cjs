/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#083AA9",
        lightblue: "#8fc5e9",
        lightyellow: "#FFF9D0",
        verylightyellow: "#fffbed",
      },
      gridTemplateColumns: {
        "cartgrid": "auto 1fr auto"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}