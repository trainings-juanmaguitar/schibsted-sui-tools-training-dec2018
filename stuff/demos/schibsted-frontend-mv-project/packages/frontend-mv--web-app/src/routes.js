/* eslint-disable */
import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'


const loadAppComponent = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "App" */ './components/App')
)

const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

const loadSigninPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Signin" */ './pages/Signin')
)

const loadSignupPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Signup" */ './pages/Signup')
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

// const requireAuth = async (nextState, replace, cb) => {
//   const {domain} = await contextFactory()
//   const user = await domain.get('current_users_use_case').execute()
//   return cb()
// }

// const requireAdmin = async (nextState, replace, cb) => {
//   const isAdmin = await domain.get('is_privileged_users_use_case').execute()
//   if (!isAdmin) {
//     replace('/')
//   }
//   cb()
// }

const redirectToHome = async (nextState, replace, cb) => {
  console.log('redirectToHome...')
  const {domain} = await contextFactory()
  const user = await domain.get('current_users_use_case').execute()
  if (user) {
    replace('/')
  }
  return cb()
}

const logout = async (nextState, replace, cb) => {
  const {domain} = await contextFactory()
  await domain.get('logout_users_use_case').execute()
  console.log('logout...')
  replace('/')
  console.log('replace("/signin")...')
  return cb()
}

// A simple code splitting tutorial using react router v3 and webpack
// https://medium.com/@nahush.farkande/a-simple-code-splitting-tutorial-using-react-router-v3-and-webpack-7a6b1cf58167
// https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#getcomponentnextstate-callback

export default (
  <Router>
    <Route getComponent={loadAppComponent}>
      <Route path="/">
        <IndexRoute getComponent={loadHomePage} />
        <Route path="s/:query(/p/:page)" getComponent={loadResultsSearchPage} />
        <Route path="popular(/p/:page)" getComponent={loadMoviesPopularPage} />
        <Route path="movie/:id" getComponent={loadMovieDetailsPage} />
        <Route
          getComponent={loadSigninPage}
          onEnter={redirectToHome}
          path="signin"
        />
        <Route
          getComponent={loadSignupPage}
          onEnter={redirectToHome}
          path="signup"
        />
        <Route path="signout" onEnter={logout} />
      </Route>
    </Route>
  </Router>
)
