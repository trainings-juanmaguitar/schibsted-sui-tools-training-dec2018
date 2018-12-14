import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router/lib/Router'
import {browserHistory} from 'react-router'
import {register} from '@s-ui/bundler/registerServiceWorker'
import withContext from '@s-ui/hoc/lib/withContext'
import routes from './routes'
import Domain from 'domain-demo'
import './index.scss'

const domain = new Domain()

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()

const RouterWithContext = withContext({domain})(Router)

ReactDOM.render(
  <RouterWithContext history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
