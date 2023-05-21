/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'auto-fill-500': 'repeat(auto-fill, minmax(500px, 1fr)',
        'auto-fit-100': 'repeat(auto-fill, minmax(100px, 1fr)'
      },
      colors:{
        // Dark Mode Elements
        "DarkBlue": "hsl(209, 23%, 22%)",
        // Dark Mode Background
        "DarkBg": "hsl(207, 26%, 17%)",
        // Light Mode Text
        "LightText": "hsl(200, 15%, 8%)",
        //  Light Mode Input
        "DarkGray": "hsl(0, 0%, 52%)",
        // Light Mode Background
        "LightBg": "hsl(0, 0%, 98%)",
        // Dark Mode Text & Light Mode Elements
        "White": "hsl(0, 0%, 100%)"
      }
    },
  },
  plugins: [],
}
