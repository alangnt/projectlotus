/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightmode': 'rgba(255, 255, 224)',
        'nightmode': 'rgba(173, 216, 230)',
      },
    },
  },
  plugins: [],
}

