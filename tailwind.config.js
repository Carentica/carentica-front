/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        carmine: "#990012",
        gunmetal: "#2c3539",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
