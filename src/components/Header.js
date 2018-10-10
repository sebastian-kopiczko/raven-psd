import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import logo from '../assets/images/svg/logo.svg'

const toggleMenu = () => {
  document.getElementById('navigation').classList.toggle('navigation--active')
  console.log(123)
}

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
        <div className="header__inner">
          <div className="header__logo">
            <Link className="header__link" to="/">
              <img src={logo} alt="" />
              <span className="header__title text-uppercase">
                {data.site.siteMetadata.siteTitle}
              </span>
            </Link>
          </div>
          <div className="header__nav-container">
            <button
              onClick={toggleMenu}
              aria-label="Open mobile menu"
              id="menu-open-btn"
              className="header__menu-btn menu-btn"
            >
              &#9776;
            </button>
            <nav id="navigation" className="navigation">
              <button
                onClick={toggleMenu}
                aria-label="Close mobile menu"
                id="menu-close-btn"
                className="navigation__menu-btn menu-btn"
              >
                &times;
              </button>
              <ul className="navigation__list">
                {data.site.siteMetadata.siteNav.map((li, index) => {
                  return (
                    <li key={index} className="navigation__item">
                      <Link
                        onClick={toggleMenu}
                        to={li.slug}
                        className="navigation__link"
                      >
                        {li.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )}
  />
)
