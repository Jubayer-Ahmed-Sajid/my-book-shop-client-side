/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1e3a8a",
          secondary: "#374151",
          accent: "#10b981",
          error: "#ef4444",
          base: "#ffffff", 
          text: "#000000",
        },
        dark: {
        
          base: "#1f2937",
          text: "#f9fafb",
        },
      },
    ],
  },
};
