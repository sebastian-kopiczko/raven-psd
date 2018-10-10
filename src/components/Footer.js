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
        <div className="container">
          <div className="row">
            <p className="footer__copyright">
              {data.site.siteMetadata.footer.copyright}
            </p>
            <ul className="footer__navigation">
              {data.site.siteMetadata.socialNav.map((li, index) => {
                return (
                  <li
                    key={index}
                    className={`footer__navigation__item icon--${li.icon}`}
                  >
                    &nbsp;
                    <Link to={li.url} className="footer__navigation__link" />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </footer>
    )}
  />
)
