import React from 'react'
import ReactDOM from 'react-dom'

// import './index.scss'

// import {register} from '@s-ui/bundler/registerServiceWorker'

import Router from 'react-router/lib/Router'
import {browserHistory} from 'react-router'

import routes from './routes'

import Domain from '3-frontend-mv--lib-movies'
import withContext from '@s-ui/hoc/lib/withContext'

const domain = new Domain()
const RouterWithContext = withContext({domain})(Router)

// register({
//   first: () => window.alert('Content is cached for offline use.'),
//   renovate: () => window.alert('New content is available; please refresh.')
// })()

ReactDOM.render(
  <RouterWithContext history={browserHistory} routes={routes} />,
  document.getElementById('⚛️')
)
