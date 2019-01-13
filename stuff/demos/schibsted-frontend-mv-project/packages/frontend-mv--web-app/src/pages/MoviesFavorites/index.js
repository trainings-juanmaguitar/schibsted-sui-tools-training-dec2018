/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Page from '../../hoc/Page'
import MoviesList from '../../components/MoviesList'

const MoviesPopular = (
  {movies, canonical, page, totalResults, totalPages, user, favorites},
  {i18n}
) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href={canonical} />
    </Helmet>
    <MoviesList
      movies={movies}
      title={i18n.t('FAVORITE_MOVIES', {totalResults})}
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

MoviesPopular.propTypes = {
  movies: PropTypes.array,
  canonical: PropTypes.string,
  page: PropTypes.number,
  totalResults: PropTypes.number,
  totalPages: PropTypes.number,
  user: PropTypes.object,
  favorites: PropTypes.array
}
MoviesPopular.contextTypes = {i18n: PropTypes.object, domain: PropTypes.object}
MoviesPopular.renderLoading = () => <h1>Loading...</h1>
MoviesPopular.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context
  const {
    params: {locale='es', page = 1}
  } = routeInfo

  const localeConfig = domain.get('config').get('locale')
  const {language, region} = localeConfig[locale]

  const {page: _page, totalResults, totalPages, movies} = await domain
    .get('get_favorites_movies_user_use_case')
    .execute({page, language, region})
  
  return {
    movies: movies || [],

    page: _page,
    totalResults,
    totalPages,
    canonical: 'http:/spa.mock/list'
  }
}

export default Page(MoviesPopular)
