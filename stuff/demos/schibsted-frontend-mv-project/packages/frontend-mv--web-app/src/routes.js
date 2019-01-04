/* eslint-disable */
import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import {loadPage} from '@s-ui/react-initial-props'
import contextFactory from './contextFactory'

const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

const loadMoviesPopularPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "MoviesPopular" */ './pages/MoviesPopular')
)

const loadResultsSearchPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "ResultsSearch" */ './pages/ResultsSearch')
)

const loadMovieDetailsPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "MovieDetails" */ './pages/MovieDetails')
)

export default (
  <Router>
    <Route path="/" component={require('./components/App').default}>
      <IndexRoute getComponent={loadHomePage} />
      <Route path="s/:query(/p/:page)" getComponent={loadResultsSearchPage} />
      <Route path="popular(/p/:page)" getComponent={loadMoviesPopularPage} />
      <Route path="movie/:id" getComponent={loadMovieDetailsPage} />
    </Route>
  </Router>
)
