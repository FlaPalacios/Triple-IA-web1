/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Deep Blue (Main)
        secondary: '#1D4469', // Brand Blue (Secondary)
        accent: '#BDB6A0', // Beige (Accent)
        light: '#E6E6E6', // Off-white (Light)
        dark: '#1F1F1F', // Dark text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Professional font
      },
    },
  },
  plugins: [],
}
