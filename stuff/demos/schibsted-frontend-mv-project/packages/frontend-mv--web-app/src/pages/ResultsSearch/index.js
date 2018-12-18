import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import MoviesList from '../../components/MoviesList'

const ResultsSearchPage = ({movies, canonical}, {i18n}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href={canonical} />
    </Helmet>
    <h1>{i18n.t('LIST_TITLE')}</h1>
    <MoviesList movies={movies} />
  </React.Fragment>
)

ResultsSearchPage.propTypes = {
  movies: PropTypes.array,
  canonical: PropTypes.string
}
ResultsSearchPage.contextTypes = {i18n: PropTypes.object}
ResultsSearchPage.renderLoading = () => <h1>Loading...</h1>
ResultsSearchPage.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context
  const {
    params: {query}
  } = routeInfo

  const movies = await domain.get('search_movies_use_case').execute({query})

  return {
    movies: movies || [],
    canonical: 'http:/spa.mock/list'
  }
}

export default ResultsSearchPage
