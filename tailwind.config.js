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
          dark: "#1F2A37",
          accentGreen: "#01FB4C",
          // gray: {
          //   50: "#F9FAFB",
          //   100: "#F3F4F6",
          //   200: "#E5E7EB",
          //   500: "#6B7280",
          // },
        },
      },
    },
  },
  plugins: [],
};
