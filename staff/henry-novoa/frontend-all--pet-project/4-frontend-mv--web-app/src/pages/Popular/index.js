/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'

import ListPopularMovies from '../../components/ListPopularMovies'

const List = ({movies}) => (
  <React.Fragment>
    <h1>Popular Movies</h1>
    <ListPopularMovies movies={movies} />
  </React.Fragment>
)

List.propTypes = {movies: PropTypes.array}
List.contextTypes = {i18n: PropTypes.object}
List.renderLoading = () => <h1>Loading...</h1>

List.getInitialProps = async ({context}) => {
  const {domain} = context

  const movies = await domain.get('list_popular_movies_use_case').execute()

  return {
    movies: movies || [],
    canonical: 'http:/spa.mock/list'
  }
}

export default List
