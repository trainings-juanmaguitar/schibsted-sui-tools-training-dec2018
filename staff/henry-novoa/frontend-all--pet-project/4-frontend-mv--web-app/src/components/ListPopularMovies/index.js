import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const ListPopularMovies = ({movies}) => (
  <ul className="ListMovies">
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/detail/${movie.id}`}>{movie.title}</Link>
      </li>
    ))}
  </ul>
)
ListPopularMovies.propTypes = {movies: PropTypes.array}

export default ListPopularMovies
