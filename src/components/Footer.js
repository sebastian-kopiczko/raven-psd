import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            socialNav {
              url
              icon
            }
            footer {
              copyright
            }
          }
        }
      }
    `}
    render={data => (
      <footer className="footer">
        <p className="footer__copyright">
          {data.site.siteMetadata.footer.copyright}
        </p>
        <ul className="social-links navigation__list">
          {data.site.siteMetadata.socialNav.map((li, index) => {
            return (
              <li key={index} className="navigation__item">
                <Link to={li.url} className="navigation__link">
                  <i className={li.icon} />
                </Link>
              </li>
            )
          })}
          <li className="navigation__item scroll-up">
            <i className="fa fa-arrow-up" />
          </li>
        </ul>
      </footer>
    )}
  />
)
