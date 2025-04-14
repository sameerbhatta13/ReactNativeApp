/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/nativewind/dist/**/*.js"
  ],
  presets: [require("nativewind/preset")], // <-- key fixed here
  theme: {
    extend: {},
  },
  plugins: [],
};
