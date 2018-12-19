import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import MoviesList from '../../components/MoviesList'

const ResultsSearchPage = (
  {movies, canonical, query, page, totalResults, totalPages},
  {i18n}
) => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href={canonical} />
      </Helmet>
      <MoviesList
        movies={movies}
        title={i18n.t('SEARCH_RESULTS', {query, totalResults})}
        subtitle={i18n.t('RESULTS_PAGINATION', {
          page,
          totalPages
        })}
        page={page}
        totalPages={totalPages}
      />
    </React.Fragment>
  )
}

ResultsSearchPage.propTypes = {
  movies: PropTypes.array,
  canonical: PropTypes.string,
  query: PropTypes.string,
  page: PropTypes.number,
  totalResults: PropTypes.number,
  totalPages: PropTypes.number
}
ResultsSearchPage.contextTypes = {i18n: PropTypes.object}
ResultsSearchPage.renderLoading = () => <h1>Loading...</h1>
ResultsSearchPage.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context
  const {
    params: {query, page}
  } = routeInfo

  console.log({query, page}) // eslint-disable-line

  const {page: _page, totalResults, totalPages, movies} = await domain
    .get('search_movies_use_case')
    .execute({query, page})

  return {
    movies: movies || [],
    page: _page,
    totalResults,
    totalPages,
    canonical: 'http:/spa.mock/list',
    query
  }
}

export default ResultsSearchPage
