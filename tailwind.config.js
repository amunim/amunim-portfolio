/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedgewood': {
            '50': '#f3f6f8',
            '100': '#e1e8ec',
            '200': '#c6d3db',
            '300': '#9fb3c1',
            '400': '#708ca0',
            '500': '#5b788f',
            '600': '#495d71',
            '700': '#404f5e',
            '800': '#3a4450',
            '900': '#333b46',
            '950': '#1f252d',
        },
      },
    },
  },
  plugins: [],
}
