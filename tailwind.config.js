const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#facc15',
        orange: '#fb923c',
        green: '#166534',
        darkblue: '#2563eb',
        blue: '#60a5fa',
        brown: '#964B00',
        red: '#ef4444',
        slate: '#333',
      },
    },
  },
  plugins: [],
});
