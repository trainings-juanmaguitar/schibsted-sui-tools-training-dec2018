/* eslint-disable */

import React from 'react'

import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'

import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'

import App from './components/App'

const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

const loadPopularMoviesPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "PopularMovies" */ './pages/PopularMovies')
)

const loadLatestMoviesPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "LatestMovies" */ './pages/LatestMovies')
)

const loadSearchPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Search" */ './pages/Search')
)

const loadMovieDetailPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "MovieDetail" */ './pages/MovieDetail')
)

// A simple code splitting tutorial using react router v3 and webpack
// https://medium.com/@nahush.farkande/a-simple-code-splitting-tutorial-using-react-router-v3-and-webpack-7a6b1cf58167
// https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#getcomponentnextstate-callback

const Root = (
  <Router>
    <Route component={App}>
      <Route path='/'>
        <IndexRoute getComponent={loadHomePage} />
        <Route path='/popular_movies' getComponent={loadPopularMoviesPage} />
        <Route path='/latest_movies' getComponent={loadLatestMoviesPage} />
        <Route path='/search' getComponent={loadSearchPage} />
        <Route path='/movies/:id' getComponent={loadMovieDetailPage} />
      </Route>
    </Route>
  </Router>
)

export default Root
