/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          default: '#004f58',
          hover: '#006b77',
          active: '#00353d',
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
  ],
};
