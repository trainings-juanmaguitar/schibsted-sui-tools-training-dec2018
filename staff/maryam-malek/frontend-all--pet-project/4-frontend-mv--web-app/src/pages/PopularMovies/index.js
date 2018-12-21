/* eslint-disable */
import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import MoleculePagination from '@s-ui/react-molecule-pagination'

class PopularMovies extends Component {

  onSelectPage = async (e, {page}) => {
    console.log(this.props)
    this.props.router.push(`/popular_movies/${page}`)
  }

  render() {
    
    const {movies, actualPage, totalPages, totalResults} = this.props
    
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
  movies: PropTypes.array,
  actualPage: PropTypes.number,
  totalPages: PropTypes.number,
  totalResults: PropTypes.number
}

PopularMovies.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context
  const {params: {page}} = routeInfo
  const {movies, actualPage, totalPages, totalResults} = await domain
    .get('list_popular_movies_use_case')
    .execute({page})

  return {
    movies: movies || [],
    actualPage,
    totalPages,
    totalResults
  }
}

export default PopularMovies
