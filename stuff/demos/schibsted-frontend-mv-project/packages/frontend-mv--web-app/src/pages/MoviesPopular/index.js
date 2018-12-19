/* eslint-disable */
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
      page={page}
      totalPages={totalPages}
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
MoviesPopularPage.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context
  const {
    params: {page = 1}
  } = routeInfo

  const {page: _page, totalResults, totalPages, movies} = await domain
    .get('get_popular_movies_use_case')
    .execute({page})
  
  return {
    movies: movies || [],
    page: _page,
    totalResults,
    totalPages,
    canonical: 'http:/spa.mock/list'
  }
}

export default MoviesPopularPage
