import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'

const loadHomePage = import(/* webpackChunkName: "Home" */ './pages/Home')
const loadListPage = import(/* webpackChunkName: "List" */ './pages/List')
const loadDetailPage = import(/* webpackChunkName: "Detail" */ './pages/Detail')

// A simple code splitting tutorial using react router v3 and webpack
// https://medium.com/@nahush.farkande/a-simple-code-splitting-tutorial-using-react-router-v3-and-webpack-7a6b1cf58167
// https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#getcomponentnextstate-callback

const Root = () => (
  <Router>
    <Route component={require('./components/App').default}>
      <Route path="/">
        <IndexRoute getComponent={loadHomePage} />
        <Route path="list" getComponent={loadListPage} />
        <Route path="detail" getComponent={loadDetailPage} />
      </Route>
    </Route>
  </Router>
)

export default Root
