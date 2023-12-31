/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors: {
        'primary': '#3A7CBA',
        'secondary': '#B82A26',
        'light': '#444444',
        'dark': '#011A41',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif','MonteCarlo','Monsieur La Doulaise'],
      },
    },
  },
  plugins: [],
}
