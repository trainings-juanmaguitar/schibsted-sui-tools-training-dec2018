import React from 'react'
// import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import SearchMovies from '../../components/SearchMovies'

const Search = ({movies}) => (
  <React.Fragment>
    <h1>Searched by Name</h1>
    <SearchMovies movies={movies} />
  </React.Fragment>
)

Search.propTypes = {movies: PropTypes.array}
Search.contextTypes = {i18n: PropTypes.object}
Search.renderLoading = () => <h1>Loading...</h1>
Search.getInitialProps = async ({context}) => {
  const {domain} = context

  const movies = await domain.get('list_movies_use_case').execute()

  return {
    movies: movies || [],
    canonical: 'http:/spa.mock/list'
  }
}

export default Search
