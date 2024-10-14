/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{html,vue,js,ts}", // Adjust the paths based on your Vue project structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

module.exports = config;
