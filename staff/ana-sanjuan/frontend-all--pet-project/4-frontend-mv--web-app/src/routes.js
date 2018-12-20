import React from 'react'

import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'

import App from './components/App'

const loadHomePage = async (nextState, cb) => {
  const component = await import(/* webpackChunkName: "Home" */ './pages/Home')
  cb(null, component.default)
}

const loadSearchPage = async (nextState, cb) => {
  const component = await import(/* webpackChunkName: "Home" */ './pages/Search')
  cb(null, component.default)
}

const loadMoviePage = async (nextState, cb) => {
  const component = await import(/* webpackChunkName: "Movie" */ './pages/Movie')
  cb(null, component.default)
}

const Root = (
  <Router>
    <Route component={App}>
      <Route path="/">
        <IndexRoute getComponent={loadHomePage} />
        <Route path="search" getComponent={loadSearchPage} />
        <Route path="movie/:id" getComponent={loadMoviePage} />
      </Route>
    </Route>
  </Router>
)

export default Root
