import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link from 'react-router/lib/Link'

class Home extends Component {
  state = {
    popularMovies: [],
    recentMovies: [],
    query: ''
  }
  async componentDidMount() {
    const {domain} = this.context
    const popularMovies = await domain
      .get('list_popular_movies_use_case')
      .execute()
    const recentMovies = await domain
      .get('list_recent_movies_use_case')
      .execute()
    this.setState({popularMovies, recentMovies})
  }
  render() {
    const {popularMovies, recentMovies} = this.state
    const {i18n} = this.context
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>{i18n.t('HOME_TITLE')}</h1>
        <h1>Most Popular</h1>
        {popularMovies.length && (
          <ul>
            {popularMovies.map((movie, i) => (
              <Link key={i} to={`/movie/${movie.id}`}>
                <li>{movie.title}</li>
              </Link>
            ))}
          </ul>
        )}
        <h1>Upcoming</h1>
        {recentMovies.length && (
          <ul>
            {recentMovies.map((movie, i) => (
              <Link key={i} to={`/movie/${movie.id}`}>
                <li>{movie.title}</li>
              </Link>
            ))}
          </ul>
        )}
      </React.Fragment>
    )
  }
}

Home.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}

export default Home
