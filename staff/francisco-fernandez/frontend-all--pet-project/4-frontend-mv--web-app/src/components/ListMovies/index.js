import React from 'react'
import PropTypes from 'prop-types'

// import Link from 'react-router/lib/Link'

const ListMovies = ({movies}) => (
  <ul className="ListMovies">
    {movies.map(movie => (
      <li key={movie.id}>
        {/* <Link to={`/detail/${movie.id}`}>{movie.title}</Link> */}
        <p>{movie.title}</p>
      </li>
    ))}
  </ul>
)
ListMovies.propTypes = {movies: PropTypes.array}

export default ListMovies
