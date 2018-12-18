import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const ResultsSearch = ({movies}) => (
  <ul className="ResultsSearch">
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </li>
    ))}
  </ul>
)
ResultsSearch.propTypes = {movies: PropTypes.array}

export default ResultsSearch
