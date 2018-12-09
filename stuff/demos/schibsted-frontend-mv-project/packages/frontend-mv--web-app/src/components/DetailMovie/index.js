import React from 'react'
import PropTypes from 'prop-types'

const DetailMovie = ({movie}) => (
  <div className="DetailMovie">
    <h1>{movie.title}</h1>
    <p>{movie.id}</p>
  </div>
)
DetailMovie.propTypes = {movie: PropTypes.object}

export default DetailMovie
