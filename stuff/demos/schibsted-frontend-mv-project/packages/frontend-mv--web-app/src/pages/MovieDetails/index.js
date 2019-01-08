import React from 'react'
import PropTypes from 'prop-types'

import Page from '../../hoc/Page'

import MovieDetailsBlock from '../../components/MovieDetails'

const MovieDetails = ({movie}, {i18n}) => (
  <React.Fragment>
    <MovieDetailsBlock movie={movie} />
  </React.Fragment>
)

MovieDetails.propTypes = {movie: PropTypes.object}
MovieDetails.contextTypes = {i18n: PropTypes.object}
MovieDetails.renderLoading = () => <h1>Loading...</h1>

MovieDetails.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context

  const {
    params: {locale = 'es', id}
  } = routeInfo

  const localeConfig = domain.get('config').get('locale')
  const {language, region} = localeConfig[locale]

  const movie = await domain
    .get('get_movie_details_by_id_use_case')
    .execute({id, language, region})

  return {
    movie,
    canonical: 'http:/spa.mock/list'
  }
}

export default Page(MovieDetails)
