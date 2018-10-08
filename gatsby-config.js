const config = require('./data/content')

module.exports = {
  siteMetadata: {
    siteTitle: 'Raven',
    siteNav: [
      { slug: '/', name: 'Home' },
      { slug: '/about', name: 'About' },
      { slug: '/services', name: 'Services' },
      { slug: '/shop', name: 'Shop' },
      { slug: '/projects', name: 'Projects' },
      { slug: '/blog', name: 'Blog' },
      { slug: '/contact', name: 'Contact' },
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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
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
