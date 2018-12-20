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
const loadListPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "List" */ './pages/List')
)

const loadDetailPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Detail" */ './pages/Detail')
)

const loadSearchResultsPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "SearchResults" */ './pages/SearchResults')
)

const Root = (
  <Router>
    <Route component={App}>
      <Route path='/'>
        <IndexRoute getComponent={loadHomePage} />
        <Route path="list" getComponent={loadListPage} />
        <Route path="detail" getComponent={loadDetailPage} />
        <Route path="search/:query" getComponent={loadSearchResultsPage} />
      </Route>
    </Route>
  </Router>
)


export default Root
