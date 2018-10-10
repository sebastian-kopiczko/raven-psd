import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Button from './Button'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            hero {
              content
            }
          }
        }
      }
    `}
    render={data => (
      <section id="hero" className="hero section">
        <h1 className="hero__heading text-uppercase text-center">
          Welcome to&nbsp;
          {data.site.siteMetadata.siteTitle}
        </h1>
        <p className="hero__content content">
          {data.site.siteMetadata.hero.content}
        </p>
      </section>
    )}
  />
)
