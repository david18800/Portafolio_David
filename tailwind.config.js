/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pl1_1: '#B21C77',
        pl1_2: '#922EA8',
        pl1_3: '#348151',
        pl1_4: '#4E4E6C',
        pl1_5: '#16152E',
        pl1_6: '#7850BA',
        pl1_7: '#5B3879',
      }

    },
  },
  plugins: [],
}

