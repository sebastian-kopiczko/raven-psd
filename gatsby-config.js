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
        name: 'facebook',
        url: 'https://www.gatsbyjs.org/',
        icon: 'fa fa-facebook',
      },
      {
        name: 'twitter',
        url: 'https://www.gatsbyjs.org/',
        icon: 'fa fa-twitter',
      },
      {
        name: 'gplus',
        url: 'https://www.gatsbyjs.org/',
        icon: 'fa fa-google-plus-square',
      },
      {
        name: 'youtube',
        url: 'https://www.gatsbyjs.org/',
        icon: 'fa fa-youtube-play',
      },
    ],
    hero: config.hero,
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
        icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
