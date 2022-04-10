module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        darkblue: '#2E214D',
        myRose: "#FF2C7E"
      },
      backgroundImage: {
        "pieces" : "url(./assets/ProjectShowcaseImages/pieces.png)",
        "hi7haut" : "url(./assets/ProjectShowcaseImages/hi7haut.png)"
      }
    },
  },
  plugins: [],
}
