import React from 'react'
// import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import ListMovies from '../../components/ListMovies'

const List = ({movies}) => (
  <React.Fragment>
    <h1>Popular movies</h1>
    <ListMovies movies={movies} />
  </React.Fragment>
)

List.propTypes = {movies: PropTypes.array}
List.contextTypes = {i18n: PropTypes.object}
List.renderLoading = () => <h1>Loading...</h1>
List.getInitialProps = async ({context}) => {
  const {domain} = context

  const movies = await domain.get('list_movies_use_case').execute()

  return {
    movies: movies || [],
    canonical: 'http:/spa.mock/list'
  }
}

export default List
