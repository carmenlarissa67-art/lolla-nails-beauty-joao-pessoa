/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf8f4', 100: '#f3eee5', 200: '#e7ddcd', 300: '#d4c2a8', 400: '#bc9f7f',
          500: '#a3785b', 600: '#8c6448', 700: '#73513a', 800: '#5c4030', 900: '#432f24', 950: '#2a1e17',
        },
        ink: { DEFAULT: '#2a1e17', soft: '#5c4030', mute: '#8f7b6c' },
        champagne: { DEFAULT: '#c9a978', light: '#f1e7d6', dark: '#9a7442' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
}
