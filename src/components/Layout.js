import React from 'react'
import PropTypes from 'prop-types'

import '../assets/sass/main.scss'

import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div>
    <Helmet title="Raven" />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
