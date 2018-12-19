import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import MoviesList from '../../components/MoviesList'

const MoviesPopularPage = (
  {movies, canonical, page, totalResults, totalPages},
  {i18n}
) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href={canonical} />
    </Helmet>
    <MoviesList
      movies={movies}
      title={i18n.t('POPULAR_MOVIES', {totalResults})}
      subtitle={i18n.t('RESULTS_PAGINATION', {
        page,
        totalPages
      })}
    />
  </React.Fragment>
)

MoviesPopularPage.propTypes = {
  movies: PropTypes.array,
  canonical: PropTypes.string,
  page: PropTypes.number,
  totalResults: PropTypes.number,
  totalPages: PropTypes.number
}
MoviesPopularPage.contextTypes = {i18n: PropTypes.object}
MoviesPopularPage.renderLoading = () => <h1>Loading...</h1>
MoviesPopularPage.getInitialProps = async ({context}) => {
  const {domain} = context

  const {page, totalResults, totalPages, movies} = await domain
    .get('get_popular_movies_use_case')
    .execute()
  console.log({
    movies: movies || [],
    page,
    totalResults,
    totalPages,
    canonical: 'http:/spa.mock/list'
  })
  return {
    movies: movies || [],
    page,
    totalResults,
    totalPages,
    canonical: 'http:/spa.mock/list'
  }
}

export default MoviesPopularPage
