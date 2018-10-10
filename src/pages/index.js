import React from 'react'
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Button from '../components/Button'
import Services from '../components/Services'
import Projects from '../components/Projects'
// import Section from '../components/Section'
import Carousel from 'nuka-carousel'

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
            services {
              content
              icon
            }
            testimonials {
              name
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
          <Button
            slug="services"
            buttonText="read more"
            color="white"
            centered={true}
          />
        </section>
        <section id="services" className="services section">
          <div className="container">
            <h2 className="services__heading section__heading text-uppercase text-center">
              Our services
            </h2>
            <p className="services__content content">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="row">
              <div className="services__container">
                <Services services={data.site.siteMetadata.services} />
              </div>
              <div className="services__photo">
                <img src={servicesPhoto} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="projects section">
          <h2 className="projects__heading section__heading text-uppercase text-center">
            Our projects
          </h2>
          <Projects />
          <div>
            <Button buttonText="browse more" color="purple" centered={true} />
          </div>
        </section>
        <section id="testimonials" className="testimonials section">
          <h2 className="testimonials__heading section__heading text-uppercase text-center">
            Testmionials
          </h2>
          <div>
            <Carousel withoutControls={false} autoplay={true}>
              {data.site.siteMetadata.testimonials.map((item, index) => {
                return (
                  <div key={index} className={`testimonials__item`}>
                    <img
                      className="testimonials__img center"
                      src="https://via.placeholder.com/120x70"
                      alt=""
                    />
                    <p className={`testimonials__content content`}>
                      {item.content}
                    </p>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </section>
        {/* <Services /> */}
        {/* <Projects /> */}
        {/* <Testimonials /> */}
      </Layout>
    )}
  />
)
