/* eslint-disable */

import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Home extends Component {
  // state = {
  //   movies: []
  // }
  // async componentDidMount() {
  //   console.log('componentDidMount...')
  //   const {domain} = this.context
  //   const movies = await domain.get('get_popular_movies_use_case').execute()
  //   console.log(movies)
  //   this.setState({movies})
  // }
  render() {
    const {movies} = this.props
    const {i18n} = this.context
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
  const {domain} = context
  console.log('getInitialProps...')
  const movies = await domain.get('get_popular_movies_use_case').execute()
  console.log(movies)
  return {
    movies: movies || []
  }
}


export default Home
