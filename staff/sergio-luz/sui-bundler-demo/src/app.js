import React from 'react'
import ReactDOM from 'react-dom'
import withContext from '@s-ui/hoc/lib/withContext'

import Domain from '../../domain-demo/src'
// import App from './components/App'

import './index.scss'
import Foo from './foo'

import Router from 'react-router/lib/Router'
import {browserHistory} from 'react-router'

import routes from './routes'

// import {register} from '@s-ui/bundler/registerServiceWorker'

const domain = new Domain()

const RouterWithContext = withContext({domain})(Router)

domain
  .get('list_students_use_case')
  .execute()
  .then(console.log) // eslint-disable-line

// register({
//   first: () => window.alert('Content is cached for offline use.'),
//   renovate: () => window.alert('New content is available; please refresh.')
// })()

Foo()

ReactDOM.render(
  <RouterWithContext history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
