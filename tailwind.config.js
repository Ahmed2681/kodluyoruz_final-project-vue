/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile-s': '320px',

        'mobile-m': '375px',

        'mobile-l': '425px'
      }
    }
  },
  plugins: []
}
