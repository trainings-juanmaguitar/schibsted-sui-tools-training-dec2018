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

import TextTruncate from 'react-text-truncate'

const MovieCard = ({movie}) => {
  const imgStyles = {
    backgroundImage: `url(${movie.posterPath})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  }
  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>{movie.title}</CardHeaderTitle>
      </CardHeader>
      <CardImage>
        <Image isRatio="4:3" style={imgStyles} />
      </CardImage>
      <CardContent>
        <Content>
          <TextTruncate
            line={2}
            truncateText="..."
            text={movie.overview}
            textTruncateChild={<a href="#">Read on</a>}
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

export default MovieCard
