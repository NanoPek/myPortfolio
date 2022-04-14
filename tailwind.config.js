module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        darkblue: '#2E214D',
        myRose: "#FF2C7E",
        myRoseEluded: "rgba(255, 44, 126, 0.5)"
      },
      backgroundImage: {
        "pieces" : "url(./assets/ProjectShowcaseImages/pieces.png)",
        "hi7haut" : "url(./assets/ProjectShowcaseImages/hi7haut.png)"
      }
    },
  },
  plugins: [
      require('tailwind-scrollbar')
  ],
}
