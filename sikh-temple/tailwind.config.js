/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF7F11',
        'primary-blue': '#1D3557',
      },
    },
  },
  plugins: [],
});
