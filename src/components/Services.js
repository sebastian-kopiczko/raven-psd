import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// import Button from './Button'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            services {
              content
              icon
            }
          }
        }
      }
    `}
    render={data => (
      <ul className="services__list">
        {data.site.siteMetadata.services.map((li, index) => {
          return (
            <li
              key={index}
              className={`services__item services__item--${li.icon} card`}
            >
              <span className="card__content text-uppercase center">
                {li.content}
              </span>
            </li>
          )
        })}
      </ul>
    )}
  />
)
