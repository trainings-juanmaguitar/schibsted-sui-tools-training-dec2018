import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'
import App from './components/App'

const LoadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

const loadListPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "List" */ './pages/List')
)

const loadSearchPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "List" */ './pages/Search')
)

const loadDetailMovie = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "List" */ './pages/Detail')
)

export default (
  <Router>
    <Route component={App}>
      <Route path="/">
        <IndexRoute getComponent={LoadHomePage} />
        <Route path="popular" getComponent={loadListPage} />
        <Route path="s/:query" getComponent={loadSearchPage} />
        <Route path="detail/:id" getComponent={loadDetailMovie} />
      </Route>
    </Route>
  </Router>
)
