/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-srif"],
        futura: ["Hind", "sans-srif"],
      },
      colors: {
        "r-white": "#FEF9FA",
        "r-dark": "#1B2228",
        "r-main": "#FFFAFB",
        "r-blue": "#007FFF",
        "r-yellow": "#FFB830",
        "r-red": "#FF003D",
        "r-grey": "#ADA5A8",
      },
    },
  },
  variants: {
    display: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
  },
  plugins: [
    require("tailwindcss-children"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
