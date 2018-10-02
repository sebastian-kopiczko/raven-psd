import React from 'react'
// import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Hero from '../components/Hero'

// import photoMan from '../assets/images/home-man.png'

// class AppliedRoutes extends React.Component {
//   render() {
//     const { component: C, props: cProps, ...rest } = this.props

//     return (
//       <Route
//         {...rest}
//         render={props => <C {...props} {...cProps} />}
//       />
//     )
//   }
// }
export default () => (
  <Layout>
    <Hero />
    {/* <Services /> */}
    {/* <Projects /> */}
    {/* <Testimonials /> */}
  </Layout>
)
