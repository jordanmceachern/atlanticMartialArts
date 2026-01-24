const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{html,js,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        yellow: '#facc15',
        orange: '#fb923c',
        green: '#166534',
        darkblue: '#2563eb',
        blue: '#60a5fa',
        brown: '#964B00',
        red: {
          DEFAULT: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        slate: '#333',
      },
      keyframes: {
        radialPulse: {
          '0%': { 
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7)',
          },
          '100%': { 
            boxShadow: '0 0 0 20px rgba(255, 255, 255, 0)',
          },
        },
      },
      animation: {
        radialPulse: 'radialPulse 1s ease-out 2',
      },
    },
  },
  plugins: [],
});
