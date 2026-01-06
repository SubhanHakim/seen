/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        obsidian: '#0a0a0a',
        charcoal: '#141414',
        silver: '#a1a1aa',
        accent: '#d4b483', // Pale Gold
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
