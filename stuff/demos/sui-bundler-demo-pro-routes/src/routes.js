/* eslint-disable */

import React from 'react'

import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'

import loadPage from '@s-ui/react-initial-props/lib/loadPage'

import App from './components/App'
import contextFactory from './contextFactory'


const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)
const loadListPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "List" */ './pages/List')
)

const loadDetailPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Detail" */ './pages/Detail')
)

// A simple code splitting tutorial using react router v3 and webpack
// https://medium.com/@nahush.farkande/a-simple-code-splitting-tutorial-using-react-router-v3-and-webpack-7a6b1cf58167
// https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#getcomponentnextstate-callback

const Root = (
  <Router>
    <Route component={App}>
      <Route path='/'>
        <IndexRoute getComponent={loadHomePage} />
        <Route path="list" getComponent={loadListPage} />
        <Route path="detail" getComponent={loadDetailPage} />
      </Route>
    </Route>
  </Router>
)


export default Root
