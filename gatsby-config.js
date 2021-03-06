const config = require('./data/content')

module.exports = {
  pathPrefix: '/raven-psd',
  siteMetadata: {
    siteTitle: 'Raven',
    siteNav: [
      { slug: '/', name: 'home' },
      { slug: '#services', name: 'services' },
      { slug: '#projects', name: 'projects' },
      { slug: '#testimonials', name: 'testimonials' },
    ],
    socialNav: [
      {
        icon: 'facebook',
        url: 'https://www.gatsbyjs.org/',
      },
      {
        icon: 'twitter',
        url: 'https://www.gatsbyjs.org/',
      },
      {
        icon: 'google',
        url: 'https://www.gatsbyjs.org/',
      },
      {
        icon: 'youtube',
        url: 'https://www.gatsbyjs.org/',
      },
      {
        icon: 'arrow-up',
        url: '#',
      },
    ],
    hero: config.hero,
    services: config.services,
    testimonials: config.testimonials,
    footer: config.footer,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Raven PSD',
        short_name: 'Raven',
        start_url: '/',
        background_color: '#7b1155',
        theme_color: '#7b1155',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-offline',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // you can use multiple source-filesystem instances
        path: `${__dirname}/src/assets/images/projects`,
      },
    },
  ],
}
