import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import Router from 'react-router/lib/Router'
import {browserHistory} from 'react-router'
import routes from './routes'
import {register} from '@s-ui/bundler/registerServiceWorker'
// Foo()
register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()
ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
