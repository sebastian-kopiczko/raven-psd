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
                    className={`footer__navigation-item icon--${li.icon}`}
                  >
                    {index}
                    <Link to={li.url} className="footer__navigation-link" />
                  </li>
                )
              })}
              <li className="navigation__item scroll-up">
                <i className="fa fa-arrow-up" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )}
  />
)
