/* eslint-disable */
import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import {
  NavbarItem,
  NavbarBrand,
  Navbar,
  Icon,
  NavbarMenu,
  NavbarEnd,
  NavbarDivider,
  Container,
  Section
} from 'bloomer'

import Link from 'react-router/lib/Link'

const BASE_CLASS = `MoviesApp`
const CLASS_TOOLBAR = `${BASE_CLASS}-toolbar`
const CLASS_TOOLBAR_LANGUAGES = `${CLASS_TOOLBAR}-languages`
// const CLASS_TOOLBAR_OPTIONS = `${CLASS_TOOLBAR}-options`

class App extends Component {
  constructor() {
    super()
    this.changeLanguageES = this.changeLanguage.bind(null, {lang: 'es-ES'})
    this.changeLanguageEN = this.changeLanguage.bind(null, {lang: 'en-GB'})
  }

  changeLanguage = ({lang}) => {
    const {i18n} = this.context
    console.log(`changing language to ${lang}`)
    i18n.culture = lang
    this.forceUpdate()
    // console.log(i18n.culture)
  }

  render() {
    const {children} = this.props
    const {i18n} = this.context

    return (
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
              <Link to="/">{i18n.t('HOME')}</Link>
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
                <Link to="/popular">{i18n.t('POPULAR_MOVIES_TITLE')}</Link>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
          <NavbarDivider />
          <NavbarItem className={CLASS_TOOLBAR_LANGUAGES}>
            <a onClick={this.changeLanguageEN}>EN</a>
            |
            <a onClick={this.changeLanguageES}>ES</a>
          </NavbarItem>
        </Navbar>

        <Container>
          <Section>{children}</Section>
        </Container>
      </div>
    )
  }
}

App.propTypes = {children: PropTypes.element}
App.contextTypes = {i18n: PropTypes.object}

export default App
