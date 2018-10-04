import React from 'react'
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Hero from '../components/Hero'
import Button from '../components/Button'
import Services from '../components/Services'
// import Section from '../components/Section'

import servicesPhoto from '../assets/images/home-man.png'

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
      <Layout>
        <section id="hero" className="hero">
          <h1 className="hero__heading heading text-uppercase text-center">
            Welcome to&nbsp;
            {data.site.siteMetadata.siteTitle}
          </h1>
          <p className="hero__content content">
            {data.site.siteMetadata.hero.content}
          </p>
          <Button buttonText="read more" />
        </section>
        <section id="services" className="services section">
          <div className="container">
            <h2 className="services__heading heading text-uppercase text-center">
              Our services
            </h2>
            <p className="services__content content">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="row">
              <div className="services__container">
                <Services />
              </div>
              <div className="services__photo">
                <img src={servicesPhoto} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <Services /> */}
        {/* <Projects /> */}
        {/* <Testimonials /> */}
      </Layout>
    )}
  />
)
