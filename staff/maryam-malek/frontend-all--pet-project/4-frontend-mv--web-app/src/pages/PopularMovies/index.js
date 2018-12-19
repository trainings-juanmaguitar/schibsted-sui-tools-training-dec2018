import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class PopularMovies extends Component {
  state = {moviesList: {movies: []}}
  async componentDidMount() {
    const {domain} = this.context
    const moviesList = await domain
      .get('list_popular_movies_use_case')
      .execute()
    console.log(moviesList) // eslint-disable-line
    this.setState({moviesList})
  }
  render() {
    const {
      moviesList: {movies, totalPages, totalResults, actualPage}
    } = this.state
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>PopularMovies</h1>
        {movies.length && (
          <ul>
            {movies.map((movie, i) => (
              <li key={i}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
        <h3>{totalPages}</h3>
        <h3>{totalResults}</h3>
        <h3>{actualPage}</h3>
      </React.Fragment>
    )
  }
}

PopularMovies.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}

export default PopularMovies
