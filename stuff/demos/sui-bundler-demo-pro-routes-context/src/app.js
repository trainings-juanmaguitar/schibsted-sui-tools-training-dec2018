/* eslint-disable no-console */
import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import {browserHistory} from 'react-router'

import routes from './routes'

import withContext from '@s-ui/hoc/lib/withContext'
import {register} from '@s-ui/bundler/registerServiceWorker'

import Domain from '../../domain-demo/src'

// eslint-next-disable-line
import(/* webpackChunkName: "my-chunk-name" */ './foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk')
    foo()
  }
)

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()

const domain = new Domain()
const RouterWithContext = withContext(domain)(Router)

ReactDOM.render(
  <RouterWithContext history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
