// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#C9A35B",
      },
      fontFamily: {
        cfont: ['var(--font-cfont)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
