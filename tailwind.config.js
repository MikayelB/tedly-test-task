/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          accent: "#19222c",
          white: "#F3F4F6",
          dark: "#141B34",
          accentGreen: "#01FB4C",
        },
      },
    },
  },
  plugins: [],
};
