/* eslint-disable no-console */
import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import {browserHistory} from 'react-router'

import routes from './routes'

// import {register} from '@s-ui/bundler/registerServiceWorker'

// eslint-next-disable-line
import(/* webpackChunkName: "my-chunk-name" */ './foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk')
    foo()
  }
)

// register({
//   first: () => window.alert('Content is cached for offline use.'),
//   renovate: () => window.alert('New content is available; please refresh.')
// })()

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)

// import React from 'react'
// import ReactDOM from 'react-dom'

// import Router from 'react-router/lib/Router'
// import match from 'react-router/lib/match'
// import browserHistory from 'react-router/lib/browserHistory'
// import routes from './routes'

// import withContext from '@s-ui/hoc/lib/withContext'
// // import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
// // import contextFactory from './contextFactory'

// // import './styles/index.scss'

// console.log(`Este código está compilado para ${process.env.NODE_ENV}`) // eslint-disable-line

// // contextFactory(createClientContextFactoryParams()).then(context => {
// match(
//   {routes, history: browserHistory},
//   (err, redirectLocation, renderProps) => {
//     if (err) {
//       console.error(err) // eslint-disable-line
//     }
//     const {router} = renderProps
//     context.router = router
//     const App = withContext(context)(Router)
//     ReactDOM.hydrate(<App {...renderProps} />, document.getElementById('app'))
//   }
// )
// // })
