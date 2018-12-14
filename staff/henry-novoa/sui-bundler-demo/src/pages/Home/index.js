import React from 'react'
import PropTypes from 'prop-types'

const Home = (props, context) => {
    console.log(context) // eslint-disable-line

  return (
    <div>
      <h1>Ciao Mondo</h1>
    </div>
  )
}

Home.contextTypes = {bootcamp: PropTypes.string}
export default Home
