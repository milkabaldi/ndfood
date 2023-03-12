/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: "#fff",
        dimGrey: "#2F2F2F",
        dimLate: "#CFB783",
        dimMoca: "#B89B5B",
        dimGreen: "#0E8143",
        dimRed: "#BC3536",
        dimLightWhite: "#EFEFEF",
      },
      fontFamily: {
        ptsans: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}