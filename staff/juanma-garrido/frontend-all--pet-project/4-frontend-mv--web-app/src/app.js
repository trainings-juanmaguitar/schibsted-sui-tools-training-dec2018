/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

// import {register} from '@s-ui/bundler/registerServiceWorker'

import {Router, match, browserHistory} from 'react-router'

import routes from './routes'

// import Domain from '3-frontend-mv--lib-movies'
import Domain from '../../3-frontend-mv--lib-movies/src'
import i18nFactory from './literals'

import withContext from '@s-ui/hoc/lib/withContext'

// import foo from './foo'
// foo()

// eslint-next-disable-line
import(/* webpackChunkName: "my-chunk-name" */ './foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk') // eslint-disable-line
    foo()
  }
)

const domain = new Domain()
const i18n = i18nFactory({lang: 'es-ES'})

const context = {domain, i18n}
const RouterWithContext = withContext(context)(Router)

// register({
//   first: () => window.alert('Content is cached for offline use.'),
//   renovate: () => window.alert('New content is available; please refresh.')
// })()

console.log('Hey!') // eslint-disable-line

// match(
//   {routes, history: browserHistory},
//   (err, redirectLocation, renderProps) => {
//     if (err) {
//       console.error(err) // eslint-disable-line
//     }
//     console.log(routes, history)
//     const App = withContext(context)(Router)
//     ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
//   }
// )

ReactDOM.render(
  <RouterWithContext history={browserHistory} routes={routes} />,
  document.getElementById('⚛️')
)
