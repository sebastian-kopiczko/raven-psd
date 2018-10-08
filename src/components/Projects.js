import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query ImagesQuery {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="projects__gallery">
        {data.allFile.edges.map((img, index) => {
          return (
            <Img
              className="projects__image"
              key={index}
              resolutions={img.node.childImageSharp.fluid}
            />
          )
        })}
      </div>
    )}
  />
)
