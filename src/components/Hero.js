import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => (
      <section id="hero" className="hero">
        <h1 className="hero__heading">
          Welcome to&nbsp;
          {/* {data.site.siteMetadata.siteTitle} */}
        </h1>
        <p className="content" />
      </section>
    )}
  />
)
