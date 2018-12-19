import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
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

// A simple code splitting tutorial using react router v3 and webpack
// https://medium.com/@nahush.farkande/a-simple-code-splitting-tutorial-using-react-router-v3-and-webpack-7a6b1cf58167
// https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#getcomponentnextstate-callback

export default (
  <Router>
    <Route component={require('./components/App').default}>
      <Route path="/">
        <IndexRoute getComponent={loadHomePage} />
        <Route path="s(/:query)" getComponent={loadResultsSearchPage} />
        <Route path="popular" getComponent={loadMoviesPopularPage} />
        <Route path="movie/:id" getComponent={loadMovieDetailsPage} />
      </Route>
    </Route>
  </Router>
)
