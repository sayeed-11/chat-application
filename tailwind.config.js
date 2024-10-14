// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ChakraPetch: 'ChakraPetch', // Ensure this matches the font name you set in your font loading
      },
    },
  },
  plugins: [],
}