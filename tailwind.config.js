/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlue: '#381DDB',
        myRed: '#FC5252',
        myLightRed: '#FFA3A3',
        myBlack: '#222222',
        myYellow: '#DB841D',

        hoverBlue: '#84C4FF',
        hoverRed: '#FFA3A3',
        hoverLightRed: '#FC5252',
        hoverBlack: '#888888',
      },
      fontFamily: {
        myHeadlines: 'Montserrat',
        myText: 'Raleway',
      },
    },
  },
  plugins: [],
}
