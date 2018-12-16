import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import App from './components/App'

const loadHomePage = async (nextState, cb) => {
  const component = await import(/* webpackChunkName: "Home" */ './pages/Home')
  cb(null, component.default)
}

const loadListPage = async (nextState, cb) => {
  const component = await import(/* webpackChunkName: "List" */ './pages/List')
  cb(null, component.default)
}

const loadDetailPage = async (nextState, cb) => {
  const component = await import(/* webpackChunkName: "Details" */ './pages/Detail')
  cb(null, component.default)
}

// A simple code splitting tutorial using react router v3 and webpack
// https://medium.com/@nahush.farkande/a-simple-code-splitting-tutorial-using-react-router-v3-and-webpack-7a6b1cf58167
// https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#getcomponentnextstate-callback

const Root = (
  <Router>
    <Route component={App}>
      <Route path="/">
        <IndexRoute getComponent={loadHomePage} />
        <Route path="list" getComponent={loadListPage} />
        <Route path="detail" getComponent={loadDetailPage} />
        <Route path="search/:query" getComponent={loadHomePage} />
      </Route>
    </Route>
  </Router>
)

export default Root
