import React from 'react'
import PropTypes from 'prop-types'

import DetailMovie from '../../components/DetailMovie'

const Detail = ({movie}, {i18n}) => (
  <React.Fragment>
    <h1>{i18n.t('DETAIL_TITLE')}</h1>
    <DetailMovie movie={movie} />
  </React.Fragment>
)

Detail.propTypes = {movie: PropTypes.object}
Detail.contextTypes = {i18n: PropTypes.object}
Detail.renderLoading = () => <h1>Loading...</h1>

Detail.getInitialProps = async ({context, routeInfo}) => {
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

export default Detail
