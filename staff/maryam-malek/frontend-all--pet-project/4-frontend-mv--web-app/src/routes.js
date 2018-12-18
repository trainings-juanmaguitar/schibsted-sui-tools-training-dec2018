/* eslint-disable */

import React from 'react'

import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'

import App from './components/App'

const loadHomePage = async (nextState, cb) => {
  const component = await import(/* webpackChunkName: "Home" */ './pages/Home')
  cb(null, component.default)
}

const loadPopularMoviesPage = async (nextState, cb) => {
  const component = await import(/* webpackChunkName: "PopularMovies" */ './pages/PopularMovies')
  cb(null, component.default)
}

const loadLatestMoviesPage = async (nextState, cb) => {
  const component = await import(/* webpackChunkName: "LatestMovies" */ './pages/LatestMovies')
  cb(null, component.default)
}

const loadSearchPage = async (nextState, cb) => {
  const component = await import(/* webpackChunkName: "Search" */ './pages/Search')
  cb(null, component.default)
}

const loadMovieDetailPage = async (nextState, cb) => {
  const component = await import(/* webpackChunkName: "MovieDetail" */ './pages/MovieDetail')
  cb(null, component.default)
}

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
