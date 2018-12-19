import React from 'react'
import PropTypes from 'prop-types'

const Home = () => (
  <React.Fragment>
    <h1>Home test title</h1>
  </React.Fragment>
)

Home.contextTypes = {i18n: PropTypes.object}

export default Home
