import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Page from '../../hoc/Page'
import MoviesList from '../../components/MoviesList'

const ResultsSearch = (
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

ResultsSearch.propTypes = {
  movies: PropTypes.array,
  canonical: PropTypes.string,
  query: PropTypes.string,
  page: PropTypes.number,
  totalResults: PropTypes.number,
  totalPages: PropTypes.number
}
ResultsSearch.contextTypes = {i18n: PropTypes.object}
ResultsSearch.renderLoading = () => <h1>Loading...</h1>
ResultsSearch.getInitialProps = async ({context, routeInfo}) => {
  const {domain, i18n} = context
  const {
    params: {query, page}
  } = routeInfo

  const {culture: language} = i18n

  const region = language.split('-')[1]

  const {page: _page, totalResults, totalPages, movies} = await domain
    .get('search_movies_use_case')
    .execute({query, page, language, region})

  return {
    movies: movies || [],
    page: _page,
    totalResults,
    totalPages,
    canonical: 'http:/spa.mock/list',
    query
  }
}

export default Page(ResultsSearch)
