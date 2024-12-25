/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', 
        secondary: '#374151', 
        accent_1: '#10b981',
        accent_2: '#ef4444', 
      },
    },
  },
  plugins: [require('daisyui')],
}