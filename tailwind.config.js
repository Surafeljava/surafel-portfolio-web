/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      // Configure your color palette here
       'custom-bg-dark':'#070415',
       'darker-1': '#1a202e',
       'darker-2': '#384765',
       'darker-tr': '#00000011',
       'light-1': '#F1F1E6',
       'yellow-1': '#EED180'
      },
      fontFamily: {
        roboto: "'roboto', sans"
      }
    },
  },
  plugins: [],
}
