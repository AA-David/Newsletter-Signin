/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    screens: {
      'sm': '500px',
      'md': '825px',
      'md-lg': '1200px',
      'lg': '1300px'
    },
    extend: {
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        pink: 'HSL(351, 87%, 65%)',
        charcoalGrey: 'hsl(235, 18%, 26%)',
        darkSlateGrey: 'hsl(234, 29%, 20%)',
        grey: 'hsl(231, 7%, 60%)'
      }
    },
  },
  plugins: [],
}

