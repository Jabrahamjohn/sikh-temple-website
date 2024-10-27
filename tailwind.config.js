/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F97316',  // Orange
        secondary: '#1E3A8A', // Dark Blue
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


