const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        "1/10": "10%",
      },
      height: {
        fit: "fit-content",
      },
    },
    fontFamily: {
      pacifico: ["Pacifico", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
}
