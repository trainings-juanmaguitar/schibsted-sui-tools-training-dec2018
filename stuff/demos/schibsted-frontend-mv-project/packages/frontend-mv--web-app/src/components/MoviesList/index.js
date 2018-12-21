import React from 'react'
import PropTypes from 'prop-types'

// import Link from 'react-router/lib/Link'

import MoleculePagination from '@s-ui/react-molecule-pagination'

import MovieCard from '../Card'

import {Columns, Column, Title} from 'bloomer'

const BASE_CLASS = `MoviesApp`
const CLASS_LIST = `${BASE_CLASS}-listMovies`
// const CLASS_CARD_MEDIA = `${BASE_CLASS}-cardMedia`
// const CLASS_PAGINATION = `${BASE_CLASS}-pagination`

const MoviesList = (
  {movies, title, subtitle, page = 1, totalPages = 1},
  {router}
) => {
  const updatePage = (e, {page}) => {
    const {
      location: {pathname: currentPath}
    } = router
    // let pathPage = `/p/${page}`
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

      <Columns isMultiline>
        {movies.map((movie, i) => (
          <Column isSize={3} key={i}>
            <MovieCard movie={movie} />
          </Column>
        ))}
      </Columns>
      <div className="level">
        <MoleculePagination
          totalPages={totalPages}
          page={page}
          onSelectPage={updatePage}
          onSelectNext={updatePage}
          onSelectPrev={updatePage}
        />
      </div>
    </div>
  )
}

MoviesList.contextTypes = {router: PropTypes.object}

MoviesList.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  page: PropTypes.number,
  totalPages: PropTypes.number
}

export default MoviesList
