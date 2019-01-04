/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import AtomCard from '../../../../2-frontend-mv--uilib-components/components/atom/card/src'

const MovieDetail = ({ i18n, 
  movie: {title, language, releaseDate, overview, genres, posterPath}
}) => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      <h1>{i18n.t('MOVIE_DETAIL_TITLE')}</h1>
      {!!title.length && (
        <AtomCard
          title={title}
          img={posterPath}
          language={language}
          releaseDate={releaseDate}
          genres={genres}
          overview={overview}
        />
      )}
    </React.Fragment>
  )
}

MovieDetail.contextTypes = {domain: PropTypes.object, movie: PropTypes.object}

MovieDetail.getInitialProps = async ({context, routeInfo}) => {
  const {domain, i18n} = context
  const {
    params: {id}
  } = routeInfo

  const movie = await domain.get('get_movie_details_use_case').execute({id})
  return {
    movie,
    i18n
  }
}
MovieDetail.renderLoading = () => <h1>...</h1>

export default MovieDetail
