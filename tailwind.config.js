/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        golden: "#C9A35B", // your custom color
        gray:"#DFDFDF",
        bdark:"#151517",
        dark:'#000000',
        hover:"#64460d",
      },
      fontFamily: {
        cursive: 'var(--font-cursive)'
      },
    },
  },
  plugins: [],
}