import React from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardImage,
  Image,
  CardContent,
  Content
} from 'bloomer'

import Link from 'react-router/lib/Link'

import TextTruncate from 'react-text-truncate'

const MovieCard = ({movie}, {i18n}) => {
  const imgStyles = {
    backgroundImage: `url(${movie.posterPath})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  }
  return (
    <Card>
      <Link to={`/movie/${movie.id}`}>
        <CardHeader>
          <CardHeaderTitle>{movie.title}</CardHeaderTitle>
        </CardHeader>
        <CardImage>
          <Image isRatio="4:3" style={imgStyles} />
        </CardImage>
      </Link>
      <CardContent>
        <Content>
          <TextTruncate
            line={2}
            truncateText="..."
            text={movie.overview}
            textTruncateChild={<Link to={`/movie/${movie.id}`}>Read on</Link>}
          />
          {}
          <br />
          <small>{movie.release}</small>
        </Content>
      </CardContent>
    </Card>
  )
}

MovieCard.propTypes = {movie: PropTypes.object}
MovieCard.contextTypes = {i18n: PropTypes.object}

export default MovieCard
