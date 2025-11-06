/** @type {import('tailwindcss').Config} */
export default {
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
       keyframes: {
        moveX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(30px)' }, // move 50px right
        },
          moveMX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-30px)' }, // move 50px right
        },
      },
      animation: {
        moveX: 'moveX 3s ease-in-out infinite', // name duration easing repeat
      },
    },
  },
  plugins: [],
}