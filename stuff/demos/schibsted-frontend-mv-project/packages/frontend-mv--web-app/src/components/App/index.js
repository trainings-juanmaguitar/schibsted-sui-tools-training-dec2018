import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const App = ({children}) => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Helmet application" />
      <title>SPA MOCK</title>
    </Helmet>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/popular">Popular Movies</Link>
      <Link to="/s/indy">Search Results for 'indy'</Link>
    </nav>
    {children}
  </div>
)
App.propTypes = {children: PropTypes.element}

export default App
