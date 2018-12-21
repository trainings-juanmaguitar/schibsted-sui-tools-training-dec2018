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
        <title>MOVIES TMDB</title>
      </Helmet>
      <nav>
        <h1>Movies App</h1>
        <Link to="/popular_movies/1">Popular Movies</Link>
        <Link to="/latest_movies">Latest Movies</Link>
        <Link to="/search">Search</Link>
      </nav>
      {children}
    </div>
  )
}
App.propTypes = {children: PropTypes.element}

export default App
