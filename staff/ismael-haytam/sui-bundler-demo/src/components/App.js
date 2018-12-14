import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const App = (props, data) => {
  const {children} = props

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Helmet application" />
        <title>SPA MOCK</title>
      </Helmet>
      <nav className="nav">
        <h1>App</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/list">List</Link>
          <Link to="/detail">Detail</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  )
}
App.propTypes = {children: PropTypes.element}

export default App
