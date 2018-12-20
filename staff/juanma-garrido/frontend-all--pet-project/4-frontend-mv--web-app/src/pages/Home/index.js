/* eslint-disable */

import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Home extends Component {
  render() {
    const {movies, i18n} = this.props
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>{i18n.t('HOME_TITLE')}</h1>
        {movies && movies.length && (
          <ul>{movies.map((movie, i) => <li key={i}>{movie.title}</li>)}</ul>
        )}
      </React.Fragment>
    )
  }
}

Home.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}

Home.getInitialProps = async ({context}) => {
  const {domain, i18n} = context
  const movies = await domain.get('get_popular_movies_use_case').execute()
  return {
    movies: movies || [],
    i18n
  }
}

export default Home
