import React from 'react'
import PropTypes from 'prop-types'

// import Link from 'react-router/lib/Link'

import MoleculePagination from '@s-ui/react-molecule-pagination'

const BASE_CLASS = `sui-MoviesApp`
const CLASS_LIST = `${BASE_CLASS}-listMovies`
// const CLASS_CARD_MEDIA = `${BASE_CLASS}-cardMedia`
const CLASS_PAGINATION = `${BASE_CLASS}-pagination`

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
      <h1>{title}</h1>
      {subtitle && <h4>{subtitle}</h4>}
      <div className={CLASS_PAGINATION}>
        <MoleculePagination
          totalPages={totalPages}
          page={page}
          onSelectPage={updatePage}
          onSelectNext={updatePage}
          onSelectPrev={updatePage}
        />
      </div>
      <ul>{movies.map((movie, i) => <li key={i}>{movie.title}</li>)}</ul>
      {/*
        <Grid container spacing={40}>
          {movies.map(movie => (
            <Grid item key={movie.id} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  className={CLASS_CARD_MEDIA}
                  image={movie.posterPath}
                  title="Image title"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                  </Typography>
                  <Typography>{movie.overview}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        */}
      <div className={CLASS_PAGINATION}>
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
