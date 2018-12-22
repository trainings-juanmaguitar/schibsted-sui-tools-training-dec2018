import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'
// import {component} from 'react-router/lib/InternalPropTypes'

class App extends Component {
  changeLanguage = ({lang}) => {
    const {i18n, router} = this.context
    const {
      location: {pathname: currentPath}
    } = router
    i18n.setCulture(lang)
    router.push(currentPath)
  }
  render() {
    const {children} = this.props
    const {i18n} = this.context
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Helmet application" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossOrigin="anonymous"
          />
          <title>MOVIES TMDB</title>
        </Helmet>
        <nav>
          <Link to="/popular_movies/1">{`${i18n.t(
            'POPULAR_LINK_TITLE'
          )} | `}</Link>
          <Link to="/latest_movies/1">{`${i18n.t(
            'LATEST_LINK_TITLE'
          )} | `}</Link>
          <Link to="/search/1">{i18n.t('SEARCH_LINK_TITLE')}</Link>
          <p style={{display: 'inline-block', textIndent: '1em'}}>
            .. <i className="far fa-flag" /> ..
          </p>
          <a
            style={{marginLeft: '1em'}}
            href="#"
            onClick={() => this.changeLanguage({lang: 'es-ES'})}
          >
            {`${i18n.t('SPANISH_LINK')} `}
          </a>
          <a
            href="#"
            onClick={() => this.changeLanguage({lang: 'en-GB'})}
          >{`${i18n.t('ENGLISH_LINK')} `}</a>
        </nav>
        {children}
      </div>
    )
  }
}
App.propTypes = {children: PropTypes.element}
App.contextTypes = {i18n: PropTypes.object, router: PropTypes.object}

export default App
