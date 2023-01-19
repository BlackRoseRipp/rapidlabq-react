/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-logo": "#d5001b",
        "blue-logo-primary": "#2a86c3",
        "blue-logo-secondary": "#3fbbe6",
        "blue-primary": "#003049",
        "blue-secondary": "#669BBC",
        "red-primary": "#780000",
        "red-secondary": "#c1121f",
        "yellow-logo": "#FDB913",
      },
    },
  },
  plugins: [],
};
