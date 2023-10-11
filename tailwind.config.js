/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '9': 'repeat(9, minmax(0, 1fr))'
      },
      gridRow: {
        'span-9': 'span 9 / span 9',
      }
    },
  },
  plugins: [],
}

