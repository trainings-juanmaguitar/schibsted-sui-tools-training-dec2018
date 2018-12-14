import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Home = (props, context) => {
  console.log(context) // eslint-disable-line
  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      <h1>Home</h1>
    </React.Fragment>
  )
}

Home.contextTypes = {domain: PropTypes.object}
export default Home
