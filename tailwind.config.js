/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      borderWidth: {
        2: '2px',
      },
      textColor: {
        'red-border': '#ff0000',
      },
    },
  },
  variants: {},
  plugins: [],
};
