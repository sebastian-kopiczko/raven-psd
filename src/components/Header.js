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
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <Link className="header__link" to="/">
              <img src={logo} alt="" />
              <span className="header__title text-uppercase">
                {data.site.siteMetadata.siteTitle}
              </span>
            </Link>
          </div>
          <div className="header__nav">
            <button id="menu-btn">&#9776;</button>
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
          </div>
        </header>
      </div>
    )}
  />
)
