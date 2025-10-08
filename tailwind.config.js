/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        golden: "#C9A35B", // your custom color
      },
      fontFamily: {
        cursive: 'var(--font-cursive)'
      },
    },
  },
  plugins: [],
}