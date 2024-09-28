/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('../public/skillissue.webp')",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
