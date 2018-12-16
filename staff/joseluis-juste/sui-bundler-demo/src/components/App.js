import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

console.log('App..') // eslint-disable-line

const App = props => {
  console.log(props) // eslint-disable-line
  const {children} = props
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Helmet application" />
        <title>SPA MOCK</title>
      </Helmet>
      <nav>
        <h1>App</h1>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/detail">Detail</Link>
        <Link to="/search">Search</Link>
      </nav>
      {children}
    </div>
  )
}
App.propTypes = {children: PropTypes.element}

export default App
