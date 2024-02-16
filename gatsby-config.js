require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'atlanticMartialArtsAcademy',
    siteUrl: 'https://jordanmceachern.github.io',
    description:
      'Atlantic Martial Arts formally Maritime Martial Arts Academy.',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-postcss'],
};
