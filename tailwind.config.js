/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {

    fontFamily: {
      'karla': ['Karla', 'sans-serif'],
    },
    extend: {
    colors: {
      'LightGray': 'hsl(204, 43%, 93%)',
      'GrayishBlue': 'hsl(218, 22%, 67%)',
      'Cyan': 'hsl(179, 62%, 43%)',
'BrightYellow': 'hsl(71, 73%, 54%)',
    },
    },
  },
  plugins: [],
}

