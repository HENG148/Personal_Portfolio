/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title': '#c9088c',
        'content': '#0077b5',
        'white-gray': '#f5f5f5',
        'white': '#fff',
        'warning': 'red',
      },
      fontFamily: {
        'main': ['Poppins', 'Open-sans', 'Inter', 'sans-serif'],
        'intro': ['Italic', 'sans-serif']
      },
      // screens: {
      //   'xs': '480px', // media (min)
      // }
    },
  },
  plugins: [],
}

