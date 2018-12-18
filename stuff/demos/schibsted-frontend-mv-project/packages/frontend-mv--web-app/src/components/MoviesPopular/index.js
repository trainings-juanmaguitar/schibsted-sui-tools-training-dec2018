import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const MoviesPopular = ({movies}) => (
  <ul className="MoviesPopular">
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </li>
    ))}
  </ul>
)
MoviesPopular.propTypes = {movies: PropTypes.array}

export default MoviesPopular
