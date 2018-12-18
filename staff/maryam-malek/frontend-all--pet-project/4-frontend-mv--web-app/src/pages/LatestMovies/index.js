import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class LatestMovies extends Component {
  state = {
    movies: []
  }
  async componentDidMount() {
    const {domain} = this.context
    const movies = await domain.get('list_latest_movies_use_case').execute()
    this.setState({movies})
  }
  render() {
    const {movies} = this.state
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>Latest Movies</h1>
        {movies.length && (
          <ul>
            {movies.map((movie, i) => (
              <li key={i}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    )
  }
}

LatestMovies.contextTypes = {domain: PropTypes.object}

export default LatestMovies
