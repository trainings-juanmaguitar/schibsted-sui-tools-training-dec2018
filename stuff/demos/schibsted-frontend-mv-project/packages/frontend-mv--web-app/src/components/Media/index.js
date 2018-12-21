import React from 'react'
import PropTypes from 'prop-types'

import {
  Media,
  MediaLeft,
  Image,
  MediaContent,
  Content,
  Level,
  LevelItem,
  LevelLeft,
  Icon
} from 'bloomer'

import Link from 'react-router/lib/Link'

import TextTruncate from 'react-text-truncate'

const MovieCard = ({movie}, {i18n}) => {
  // const imgStyles = {
  //   backgroundImage: `url(${movie.posterPath})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: '50% 50%'
  // }
  return (
    <Media>
      <MediaLeft>
        <Link to={`/movie/${movie.id}`}>
          <Image isSize="64x64" src={movie.posterPath} />
        </Link>
      </MediaLeft>
      <MediaContent>
        <Content>
          <p>
            <Link to={`/movie/${movie.id}`}>
              <strong>{movie.title}</strong>
            </Link>{' '}
            <small>{movie.release}</small>
            <br />
            <TextTruncate
              line={2}
              truncateText="..."
              text={movie.overview}
              textTruncateChild={<Link to={`/movie/${movie.id}`}>Read on</Link>}
            />
          </p>
        </Content>
        <Level isMobile>
          <LevelLeft>
            <LevelItem href="#">
              <Icon isSize="small">
                <span className="fa fa-reply" aria-hidden="true" />
              </Icon>
            </LevelItem>
            <LevelItem href="#">
              <Icon isSize="small">
                <span className="fa fa-retweet" aria-hidden="true" />
              </Icon>
            </LevelItem>
            <LevelItem href="#">
              <Icon isSize="small">
                <span className="fa fa-heart" aria-hidden="true" />
              </Icon>
            </LevelItem>
          </LevelLeft>
        </Level>
      </MediaContent>
    </Media>
  )
}

MovieCard.propTypes = {movie: PropTypes.object}
MovieCard.contextTypes = {i18n: PropTypes.object}

export default MovieCard
