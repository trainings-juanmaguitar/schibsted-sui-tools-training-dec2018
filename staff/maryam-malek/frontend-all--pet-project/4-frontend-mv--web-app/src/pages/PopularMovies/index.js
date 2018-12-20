/* eslint-disable */
import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const PopularMovies = ({movies}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <h1>PopularMovies</h1>
    {movies.length && (
      <ul>
        {movies.map((movie, i) => (
          <li key={i}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    )}
    {/*
      <h3>{totalPages}</h3>
      <h3>{totalResults}</h3>
      <h3>{actualPage}</h3>
        */}
  </React.Fragment>
)

PopularMovies.contextTypes = {
  domain: PropTypes.object,
  i18n: PropTypes.object,
  movies: PropTypes.array
}
PopularMovies.renderLoading = () => <h1>Loading...</h1>
PopularMovies.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context

  const {movies} = await domain.get('list_popular_movies_use_case').execute()

  return {
    movies: movies || []
  }
}

export default PopularMovies
