import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from '../contextFactory'
import App from '../components/App'

const LoadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ '../pages/Home')
)

const loadPopularPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "List" */ '../pages/Popular')
)

export default (
  <Router>
    <Route component={App}>
      <Route path="/">
        <IndexRoute getComponent={LoadHomePage} />
        <Route path="/popular" getComponent={loadPopularPage} />
      </Route>
    </Route>
  </Router>
)
