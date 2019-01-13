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
  LevelLeft
} from 'bloomer'

import Link from 'react-router/lib/Link'

import TextTruncate from 'react-text-truncate'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ResultItem = ({movie, user, isFavorite}, {domain}) => {
  const {id} = movie

  const handleToggleFavorite = async ev => {
    ev.preventDefault()
    if (isFavorite)
      await domain.get('remove_favorite_movie_user_use_case').execute({id})
    else await domain.get('add_favorite_movie_user_use_case').execute({id})
  }

  return (
    <Media>
      <MediaLeft>
        <Link to={`/movie/${movie.id}`}>
          <Image isSize="64x64" src={movie.posterPath} />
        </Link>
      </MediaLeft>
      <MediaContent>
        <Content>
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
        </Content>

        {user && (
          <Level isMobile>
            <LevelLeft>
              <LevelItem href="#">
                <FontAwesomeIcon
                  icon={[isFavorite ? 'fas' : 'far', 'heart']}
                  onClick={handleToggleFavorite}
                />
              </LevelItem>
            </LevelLeft>
          </Level>
        )}
      </MediaContent>
    </Media>
  )
}

ResultItem.propTypes = {
  movie: PropTypes.object,
  user: PropTypes.object,
  isFavorite: PropTypes.bool
}
ResultItem.contextTypes = {
  i18n: PropTypes.object,
  domain: PropTypes.object,
  router: PropTypes.object
}

export default ResultItem
