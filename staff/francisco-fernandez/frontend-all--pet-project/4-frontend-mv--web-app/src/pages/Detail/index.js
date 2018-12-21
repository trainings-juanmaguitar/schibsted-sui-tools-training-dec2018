import React from 'react'
import PropTypes from 'prop-types'

import MovieDetails from '../../components/MovieDetails'

const Details = ({details}) => (
  <React.Fragment>
    <h1>Movie details</h1>
    <MovieDetails details={details} />
  </React.Fragment>
)

Details.propTypes = {details: PropTypes.object}
Details.contextTypes = {i18n: PropTypes.object}
Details.renderLoading = () => <h1>Loading...</h1>
Details.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context
  const {
    params: {id}
  } = routeInfo

  const details = await domain
    .get('search_movie_details_use_case')
    .execute({id})

  return {
    details: details || [],
    canonical: 'http:/spa.mock/list'
  }
}

Details.contextTypes = {i18n: PropTypes.object}

export default Details
