import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link from 'react-router/lib/Link'
import './index.scss'

function App(props) {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Helmet application" />
        <title>SPA MOCK</title>
      </Helmet>
      <nav className="app-navbar">
        <h1 className="app-navbar__title">App</h1>
        <ul className="app-navbar__menu">
          <li className="app-navbar__item">
            <Link to="/">Home</Link>
          </li>
          <li className="app-navbar__item">
            <Link to="/list">List</Link>
          </li>
          <li className="app-navbar__item">
            <Link to="/detail">Detail</Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  )
}

App.propTypes = {children: PropTypes.element}

export default App
