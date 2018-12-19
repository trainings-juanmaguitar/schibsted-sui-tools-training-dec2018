import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import HomeIcon from '@material-ui/icons/Home'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Link from 'react-router/lib/Link'

import './index.scss'

const BASE_CLASS = `sui-MoviesApp`
const CLASS_TOOLBAR = `${BASE_CLASS}-toolbar`
const CLASS_TOOLBAR_HOME = `${CLASS_TOOLBAR}-home`
const CLASS_TOOLBAR_OPTIONS = `${CLASS_TOOLBAR}-options`

const App = ({children}) => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Helmet application" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <title>SPA MOCK</title>
    </Helmet>
    <CssBaseline />
    <AppBar position="static" color="default">
      <Toolbar className={CLASS_TOOLBAR}>
        <Link to="/">
          <div className={CLASS_TOOLBAR_HOME}>
            <HomeIcon />
            <Typography variant="h6" color="inherit" noWrap>
              Movies
            </Typography>
          </div>
        </Link>
        <div className={CLASS_TOOLBAR_OPTIONS}>
          <Button>Top rated movies</Button>
          <Button>Upcoming movies</Button>
          <Button>Now playing movies</Button>
          <Button>
            <Link to="/popular">Popular movies</Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
    {children}
  </div>
)
App.propTypes = {children: PropTypes.element}

export default App
