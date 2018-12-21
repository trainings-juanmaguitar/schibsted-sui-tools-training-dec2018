/* eslint-disable */
import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import MoleculePagination from '@s-ui/react-molecule-pagination'

class LatestMovies extends Component {
  // state = {moviesList: {movies: []}}
  // async componentDidMount() {
  //   const {domain} = this.context
  //   const moviesList = await domain
  //     .get('list_latest_movies_use_case')
  //     .execute({page: 1})
  //   this.setState({moviesList})
  // }

  onSelectPage = async (e, {page}) => {
    console.log(this)
    debugger
    const {domain} = this.context
    const {movies, actualPage, totalPages, totalResults} = await domain
      .get('list_latest_movies_use_case')
      .execute({page})

    // Això es pot fer??

    this.props.movies = movies
    this.props.actualPage = actualPage
    this.props.totalPages = totalPages
    this.props.totalResults = totalResults

    // this.setState({moviesList})
  }

  render() {
    // const {
    //   moviesList: {movies, totalPages, totalResults, actualPage}
    // } = this.state
    const {movies, actualPage, totalPages, totalResults} = this.props
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

LatestMovies.contextType = {
  domain: PropTypes.object,
  i18n: PropTypes.object,
  movies: PropTypes.array,
  actualPage: PropTypes.number,
  totalPages: PropTypes.number,
  totalResults: PropTypes.number
}

LatestMovies.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context

  const {movies, actualPage, totalPages, totalResults} = await domain
    .get('list_latest_movies_use_case')
    .execute({page: 1})

  return {
    movies: movies || [],
    actualPage,
    totalPages,
    totalResults
  }
}
export default LatestMovies
