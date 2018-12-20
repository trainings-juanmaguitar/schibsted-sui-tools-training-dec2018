/* eslint-disable */
import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import MoleculePagination from '@s-ui/react-molecule-pagination'

class PopularMovies extends Component {
  
  
  state = {moviesList: {movies: []}}
  async componentDidMount() {
    const {domain} = this.context
    const moviesList = await domain
      .get('list_popular_movies_use_case')
      .execute({page: 1})
    this.setState({moviesList})
  }

  onSelectPage = async (e, {page}) => {
    const {domain} = this.context
    const moviesList = await domain
      .get('list_popular_movies_use_case')
      .execute({page})
    this.setState({moviesList})
  }

  render() {
    // const {
    //   moviesList: {movies, totalPages, totalResults, actualPage}
    // } = this.state
    const {movies} = this.props
    const [totalPages, totalResults, actualPage] = [1,1,1]
    console.log(this.props.movies)
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
        {movies.length && (
          <MoleculePagination
            totalPages={totalPages}
            page={actualPage}
            // prevButtonIcon={prevButtonIcon}
            // nextButtonIcon={nextButtonIcon}
            // prevButtonText={prevButtonText}
            // nextButtonText={nextButtonText}
            // onSelectNext={onSelectNext}
            // onSelectPrev={onSelectPrev}
            onSelectPage={this.onSelectPage}
          />
        )}
        <h3>{totalPages}</h3>
        <h3>{totalResults}</h3>
        <h3>{actualPage}</h3>
      </React.Fragment>
    )
  }
}

PopularMovies.contextTypes = {
  domain: PropTypes.object,
  i18n: PropTypes.object,
  movies: PropTypes.array
}

PopularMovies.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context

  const {movies} = await domain
      .get('list_popular_movies_use_case')
      .execute()

  return {
    movies: movies || []
  }
}

export default PopularMovies
