/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
// import PropTypes from 'prop-types'

const Home = () => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <h1>Ho__me</h1>
  </React.Fragment>
)

Home.getInitialProps = () => {
  console.log('getInitialProps... ')
  return {}
}

export default Home
