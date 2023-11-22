/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        green: '#2ECC71',
        darkGreen: '#048929',
        yellow: '#EFDA21',
        white: '#FFFFFF',
        black: '#333333',
        lightBlue: '#BCF6F3',
        grey: '#E6E6E6',
        borderColor: '#7878781A',
        red: '#FD0404'
        

      }

    },
  },
  plugins: [],
}