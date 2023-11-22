/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        radley: "Radley",
        satisfy: "Satisfy"
      },

      colors: {
        green: '#2ECC71',
        lightGreen: 'rgba(4, 137, 41, 0.2)',
        darkGreen: '#048929',
        yellow: '#EFDA21',
        white: '#FFFFFF',
        black: '#333333',
        lightBlue: '#BCF6F3',
        grey: '#E6E6E6',
        borderColor: '#7878781A',
        red: '#FD0404',
        deep_orange: { A400: "#ff3d00" },
        blue_gray: { 900: "#333333", "900_a5": "#333333a5" },
        cyan: { 300: "#5ed5cf", "100_7f": "#bcf6f37f" },
        amber: { 500: "#ffc107", A400: "#f4cd00" },
        teal: { 200: "#72d1cc" },

      }

    },
  },
  plugins: [require("@tailwindcss/forms")],
}