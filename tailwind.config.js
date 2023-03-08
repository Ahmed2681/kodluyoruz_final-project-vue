/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brown': '#B99B6B',
        'd-brown': '#562B08'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        'mobile-s': '320px',

        'mobile-m': '375px',

        'mobile-l': '425px'
      }
    }
  },
  plugins: []
}
