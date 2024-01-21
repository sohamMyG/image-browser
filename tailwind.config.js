/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        euclid : ['Euclid', 'Euclid Circular B' ,"sans-serif"]                                                                  
                                                
      },
      colors:{
        'translucent': "rgba(217, 217, 217, 0.12)",
        'midnightBlue': '#3B4043',
        'slateGray': '#475467',
        'steelBlue': '#717579',
        'ashGray': '#767676'
      },
      backdropBlur: {
        translucent : '25px',
      }
    },
  },
  plugins: [],
}
