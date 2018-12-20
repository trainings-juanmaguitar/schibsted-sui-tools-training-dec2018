import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import {Hero, HeroHeader, Nav, NavLeft, NavItem, NavRight} from 'bloomer'

import Link from 'react-router/lib/Link'

const BASE_CLASS = `sui-MoviesApp`
const CLASS_TOOLBAR = `${BASE_CLASS}-toolbar`
// const CLASS_TOOLBAR_HOME = `${CLASS_TOOLBAR}-home`
// const CLASS_TOOLBAR_OPTIONS = `${CLASS_TOOLBAR}-options`

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

    <Hero isColor="info" isSize="medium">
      <HeroHeader>
        <Nav>
          <NavLeft>
            <NavItem isBrand>Movies</NavItem>
          </NavLeft>
          <NavRight isMenu>
            <NavItem>
              <Link to="/popular">Popular movies</Link>
            </NavItem>
          </NavRight>
        </Nav>
      </HeroHeader>
    </Hero>

    {children}
  </div>
)
App.propTypes = {children: PropTypes.element}

export default App
