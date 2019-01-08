import React from 'react'
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

const MoviesList = (
  {movies, title, subtitle, page = 1, totalPages = 1, user},
  {router}
) => {
  const updatePage = (e, {page}) => {
    const {
      location: {pathname: currentPath}
    } = router

    const hasPages = /\/p\//.test(currentPath)
    const pathRedirect = hasPages
      ? currentPath.replace(/\/p\/\d+/, `/p/${page}`)
      : `${currentPath}/p/${page}`

    router.push(pathRedirect)
  }

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
        <ResultItem key={i} movie={movie} user={user} />
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

MoviesList.contextTypes = {router: PropTypes.object}

MoviesList.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  user: PropTypes.object
}

export default MoviesList
