import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import {
  NavbarItem,
  NavbarBrand,
  Navbar,
  Icon,
  NavbarMenu,
  NavbarEnd,
  Container,
  Section
} from 'bloomer'

import Link from 'react-router/lib/Link'

// const BASE_CLASS = `sui-MoviesApp`
// const CLASS_TOOLBAR = `${BASE_CLASS}-toolbar`
// const CLASS_TOOLBAR_HOME = `${CLASS_TOOLBAR}-home`
// const CLASS_TOOLBAR_OPTIONS = `${CLASS_TOOLBAR}-options`

const App = ({children}) => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Helmet application" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <title>SPA MOCK</title>
    </Helmet>

    <Navbar style={{border: 'solid 1px #00D1B2', margin: '0'}}>
      <NavbarBrand>
        <NavbarItem>
          <Link to="/">Inicio</Link>
        </NavbarItem>
        <NavbarItem isHidden="desktop">
          <Icon className="fa fa-github" />
        </NavbarItem>
        <NavbarItem isHidden="desktop">
          <Icon className="fa fa-twitter" style={{color: '#55acee'}} />
        </NavbarItem>
      </NavbarBrand>
      <NavbarMenu>
        <NavbarEnd>
          <NavbarItem>
            <Link to="/popular">Popular movies</Link>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>

    <Container>
      <Section>{children}</Section>
    </Container>
  </div>
)
App.propTypes = {children: PropTypes.element}

export default App
