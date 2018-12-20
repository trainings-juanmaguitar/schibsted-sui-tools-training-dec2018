import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class MovieDetail extends Component {
  state = {
    movie: ''
  }
  async componentDidMount() {
    const {domain} = this.context
    const {
      params: {id}
    } = this.props
    const movie = await domain.get('get_movie_details_use_case').execute({id})
    this.setState({movie})
  }
  render() {
    const {movie} = this.state
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>Movie Detail</h1>
        <h3>{movie.title}</h3>
        <h3>{movie.language}</h3>
        <h3>{movie.releaseDate}</h3>
        <h3>{movie.overview}</h3>
        {movie.genres && (
          <ul>
            {movie.genres.map((genre, i) => <li key={i}>{genre.name}</li>)}
          </ul>
        )}
        <img src={movie.posterPath} />
      </React.Fragment>
    )
  }
}

MovieDetail.contextTypes = {domain: PropTypes.object}

export default MovieDetail
