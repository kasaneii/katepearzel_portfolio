/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './app/about/*.{html,js,jsx}',
   './components/**/*.{html,js,jsx}',
   './sections/**/*.{html,js,jsx}',
   './styles/**/*.{js,jsx}',
 ],
  theme: {
    extend: {
      colors: {
        'ivory': '#FDFFF5',
        'honey': '#E1FF75',
        'silver': '#C2C2C2',
        'gallery': '#F0F0F0',
        'mineshaft': '#292929',
        'codgray': '#171717',
        'royalblue': '#455CE9',
        'indigo': '#3D4EBD',
      },
      fontFamily: {
        'unbounded': ['Unbounded, cursive'],
      },
      screens: {
        '3xl': '1792px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
    },
  },
  plugins: [],
}
