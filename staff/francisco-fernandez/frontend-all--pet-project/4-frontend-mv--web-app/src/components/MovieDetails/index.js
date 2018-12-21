import React from 'react'
import PropTypes from 'prop-types'

// import Link from 'react-router/lib/Link'

const MovieDetails = ({details}) => (
  <div className="MovieDetails">
    <p>{details.original_title}</p>
    <p>{details.release_date}</p>
    <p>{details.overview}</p>
    <img src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`} />
  </div>
)
MovieDetails.propTypes = {details: PropTypes.array}

export default MovieDetails
