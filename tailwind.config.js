/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spectralSC: ["Spectral SC"],
        spectral: ["Spectral"],
      },
    },
  },
  plugins: [],
}
