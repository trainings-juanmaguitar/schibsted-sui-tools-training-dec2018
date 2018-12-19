// es-lint disable
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import ListPopularMovies from '../../components/ListPopularMovies'

const List = ({movies, canonical}, {i18n}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href={canonical} />
    </Helmet>
    <h1>{i18n.t('LIST_TITLE')}</h1>
    <ListPopularMovies movies={movies} />
  </React.Fragment>
)

List.propTypes = {movies: PropTypes.array, canonical: PropTypes.string}
List.contextTypes = {i18n: PropTypes.object}
List.renderLoading = () => <h1>Loading...</h1>
List.getInitialProps = async ({context}) => {
  const {domain} = context
  debugger // eslint-disable-line

  const movies = await domain.get('list_popular_movies_use_case').execute()

  return {
    movies: movies || [],
    canonical: 'http:/spa.mock/list'
  }
}

export default List
