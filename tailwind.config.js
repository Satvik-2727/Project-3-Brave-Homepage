/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'purple-blurple':"linear-gradient(121.55deg, #3C0BA9 17.34%, #930FA8 113.19%)"

      }
    },
  },
  plugins: [],
}