/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(101.5deg, #8B10C6 21.56%, #D02480 74.97%, #E95E3C 104.58%)',
        'purple-blurple':"linear-gradient(121.55deg, #3C0BA9 17.34%, #930FA8 113.19%)"

      }
    },
  },
  plugins: [],
}