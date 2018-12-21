import React from 'react'
import PropTypes from 'prop-types'

import MovieDetails from '../../components/MovieDetails'

const MovieDetailsPage = ({movie}, {i18n}) => (
  <React.Fragment>
    <MovieDetails movie={movie} />
  </React.Fragment>
)

MovieDetailsPage.propTypes = {movie: PropTypes.object}
MovieDetailsPage.contextTypes = {i18n: PropTypes.object}
MovieDetailsPage.renderLoading = () => <h1>Loading...</h1>

MovieDetailsPage.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context

  const {
    params: {id}
  } = routeInfo
  const movie = await domain
    .get('get_movie_details_by_id_use_case')
    .execute({id})

  return {
    movie,
    canonical: 'http:/spa.mock/list'
  }
}

export default MovieDetailsPage
