/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        satisfy: 'Satisfy',
        inter: 'Inter'
      },

      colors: {
        green: '#2ECC71',
        veryGreen: '#048929',
        lightGreen: 'rgba(4, 137, 41, 0.2)',
        paleGreeen: 'rgba(4,137,41,0.08)',
        darkGreen: '#048929',
        paleYellow: '#F4CD00',
        yellow: '#EFDA21',
        white: '#FFFFFF',
        black: '#333333',
        blackGray: 'rgba(51, 51, 51, 0.7)',
        lightBlue: '#BCF6F3',
        grey: '#E6E6E6',
        borderColor: '#7878781A',
        red: '#FD0404',
        purple: 'rgba(110, 5, 245, 1)'
        

      }

    },
  },
  plugins: [],
}