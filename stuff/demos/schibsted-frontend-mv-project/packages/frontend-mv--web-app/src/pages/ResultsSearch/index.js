import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Page from '../../hoc/Page'
import MoviesList from '../../components/MoviesList'

const ResultsSearch = (
  {movies, canonical, query, page, totalResults, totalPages, user, favorites},
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
        favorites={favorites}
        user={user}
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
  totalPages: PropTypes.number,
  user: PropTypes.object,
  favorites: PropTypes.array
}
ResultsSearch.contextTypes = {i18n: PropTypes.object}
ResultsSearch.renderLoading = () => <h1>Loading...</h1>
ResultsSearch.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context
  const {
    params: {locale = 'es', query, page}
  } = routeInfo

  const localeConfig = domain.get('config').get('locale')
  const {language, region} = localeConfig[locale]

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
