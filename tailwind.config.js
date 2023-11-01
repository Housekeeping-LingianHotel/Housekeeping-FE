/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '##ffffff',
        secondary: '#d4e4ce',
        accent: '#9c27b0',
        dark: '#1d1d1d',
        darkPage: '#121212',
        grey: '#cfd8dd',
        lightGrey: '#cfd8dd',
        positive: '#069550',
        negative: '#ff0000',
        info: '#0d99ff',
        warning: '#f2c037',
      },
    },
  },
  plugins: [],
};
