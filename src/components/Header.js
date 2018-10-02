import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import logo from '../assets/images/svg/logo.svg'

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteNav {
              slug
              name
            }
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="" />
          <span className="header__title">
            {data.site.siteMetadata.siteTitle}
          </span>
        </Link>
        <nav className="navigation">
          <ul className="navigation__list">
            {data.site.siteMetadata.siteNav.map((li, index) => {
              return (
                <li key={index} className="navigation__item">
                  <Link to={li.slug} className="navigation__link">
                    {li.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    )}
  />
)
