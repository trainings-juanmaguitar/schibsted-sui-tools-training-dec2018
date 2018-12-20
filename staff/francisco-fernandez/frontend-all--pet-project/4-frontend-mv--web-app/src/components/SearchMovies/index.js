import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const SearchMovies = ({movies}) => (
  <ul className="SearchMovies">
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/detail/${movie.id}`}>{movie.title}</Link>
      </li>
    ))}
  </ul>
)
SearchMovies.propTypes = {movies: PropTypes.array}

export default SearchMovies
