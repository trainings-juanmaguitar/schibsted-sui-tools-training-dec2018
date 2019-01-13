/* eslint-disable */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import Link from 'react-router/lib/Link'

import MoleculePagination from '@s-ui/react-molecule-pagination'

// import MovieCard from '../Card'
import ResultItem from '../ResultItem'

import {Title} from 'bloomer'

const BASE_CLASS = `MoviesApp`
const CLASS_LIST = `${BASE_CLASS}-listMovies`
const CLASS_PAGINATION = `${BASE_CLASS}-pagination`
// const CLASS_CARD_MEDIA = `${BASE_CLASS}-cardMedia`

class MoviesList extends Component {
  state = {
    favorites: this.props.favorites || []
  }

  listenerAddFavorites = null
  listenerRemoveFavorites = null

  updatePage = (e, {page}) => {
    const {router} = this.context
    const {
      location: {pathname: currentPath}
    } = router

    const hasPages = /\/p\//.test(currentPath)
    const pathRedirect = hasPages
      ? currentPath.replace(/\/p\/\d+/, `/p/${page}`)
      : `${currentPath}/p/${page}`

    router.push(pathRedirect)
  }

  componentDidMount() {
    const {domain} = this.context

    this.listenerRemoveFavorites = domain
      .get('remove_favorite_movie_user_use_case')
      .$.execute.subscribe(async () => {
        console.log(
          'remove_favorite_movie_user_use_case > get_ids_favorites_movies_user_use_case...'
        )
        const {ids: favorites} = await domain
          .get('get_ids_favorites_movies_user_use_case')
          .execute()

        this.setState({favorites})
      })

    this.listenerAddFavorites = domain
      .get('add_favorite_movie_user_use_case')
      .$.execute.subscribe(async ({params, result}) => {
        console.log(
          'add_favorite_movie_user_use_case > get_ids_favorites_movies_user_use_case...'
        )

        const {ids: favorites} = await domain
          .get('get_ids_favorites_movies_user_use_case')
          .execute()

        this.setState({favorites})
      })
  }

  componentWillUnmount() {
    this.listenerRemoveFavorites.dispose()
    this.listenerAddFavorites.dispose()
  }

  render() {
    const {movies, title, subtitle, page = 1, totalPages = 1, user} = this.props
    const {favorites} = this.state
    const {updatePage} = this
    return (
      <div className={CLASS_LIST}>
        {/* End hero unit */}
        <Title isSize={2} tag="h1">
          {title}
        </Title>
        {subtitle && (
          <Title isSize={4} tag="h4">
            {subtitle}
          </Title>
        )}

        {movies.map((movie, i) => (
          <ResultItem
            key={i}
            movie={movie}
            user={user}
            isFavorite={favorites.includes(`${movie.id}`)}
          />
        ))}
        {totalPages > 1 && (
          <div className={CLASS_PAGINATION}>
            <MoleculePagination
              totalPages={totalPages}
              page={page}
              onSelectPage={updatePage}
              onSelectNext={updatePage}
              onSelectPrev={updatePage}
            />
          </div>
        )}
      </div>
    )
  }
}

MoviesList.contextTypes = {router: PropTypes.object, domain: PropTypes.object}

MoviesList.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  favorites: PropTypes.array,
  user: PropTypes.object
}

export default MoviesList
