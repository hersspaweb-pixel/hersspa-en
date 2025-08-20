/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      clipPath: {
        triangle: 'polygon(100% 0, 0 0, 100% 100%)',
      },
    },
  },
  plugins: [],
};
