/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Onest Variable"', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      keyframes: {
        // compositor-only motion: transform and opacity
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'chip-in': {
          from: { opacity: '0', transform: 'translateY(6px) scale(0.96)' },
          to: { opacity: '1', transform: 'none' },
        },
        progress: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        // one continuous pass along the track; translate percentages are of the track width
        rider: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '4%': { opacity: '1' },
          '96%': { opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '0' },
        },
        // chips are always visible; a hover-like highlight (ring + lift) visits them one by one, offset with animation-delay
        'chip-ring': {
          '0%': { opacity: '0' },
          '3%, 22%': { opacity: '1' },
          '25%, 100%': { opacity: '0' },
        },
        'chip-lift': {
          '0%': { translate: '0 0' },
          '3%, 22%': { translate: '0 -2px' },
          '25%, 100%': { translate: '0 0' },
        },
        // each label owns one quarter of the cycle (offset with animation-delay) and rises in from below
        'step-label': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '3%, 20%': { opacity: '1', transform: 'translateY(0)' },
          '23%, 100%': { opacity: '0', transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 400ms ease-out both',
        'chip-in': 'chip-in 400ms ease-out both',
        progress: 'progress 7s linear forwards',
        rider: 'rider 9.6s linear infinite',
        'step-label': 'step-label 9.6s linear infinite both',
        'chip-ring': 'chip-ring 9.6s linear infinite',
        'chip-lift': 'chip-lift 9.6s linear infinite',
      },
    },
  },
  plugins: [],
}
