import React from 'react'
import PropTypes from 'prop-types'

const MovieDetails = ({movie}) => (
  <div className="MovieDetails">
    <h1>{movie.title}</h1>
    <p>{movie.id}</p>
  </div>
)
MovieDetails.propTypes = {movie: PropTypes.object}

export default MovieDetails
