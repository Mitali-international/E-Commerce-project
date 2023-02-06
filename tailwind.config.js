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
    extend: {},
    colors:{
      'white': '#FFF',
      'primary': '#FAF3ED',
      'secondary': '#AB426D',
      'tertiary': '#BE0EE2',
      'primary-red': '#F44141'
    },
  },
  plugins: [],
}
