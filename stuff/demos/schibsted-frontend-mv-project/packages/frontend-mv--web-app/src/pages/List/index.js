import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import ListMovies from '../../components/ListMovies'

const List = ({movies, canonical}, {i18n}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href={canonical} />
    </Helmet>
    <h1>{i18n.t('LIST_TITLE')}</h1>
    <ListMovies movies={movies} />
  </React.Fragment>
)

List.propTypes = {movies: PropTypes.array, canonical: PropTypes.string}
List.contextTypes = {i18n: PropTypes.object}
List.renderLoading = () => <h1>Loading...</h1>
List.getInitialProps = async ({context, routeInfo}) => {
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

export default List
