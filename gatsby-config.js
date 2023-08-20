module.exports = {
  content: [
    './src/pages/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  siteMetadata: {
    title: 'atlanticMartialArts',
    siteUrl: 'https://jordanmceachern.github.io',
    description:
      'Atlantic Martial Arts formally Maritime Martial Arts Academy are located at 28 Saunders Street, Fredericton, New Brunswick. The Cultural Centre Gym (Old YMCA by exhibition ground).',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-postcss'],
};
