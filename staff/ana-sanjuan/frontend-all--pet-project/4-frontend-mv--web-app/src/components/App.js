import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const App = props => {
  const {children} = props
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Helmet application" />
        <title>PET PROJECT</title>
      </Helmet>
      <nav>
        <h1>Movies Pet Project</h1>
        <Link className="nav" to="/">
          Home
        </Link>
        <Link className="nav" to="/search">
          Search
        </Link>
      </nav>
      {children}
    </div>
  )
}
App.propTypes = {children: PropTypes.element}

export default App
