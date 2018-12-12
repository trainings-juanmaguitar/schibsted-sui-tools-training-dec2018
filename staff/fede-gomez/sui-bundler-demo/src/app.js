/* eslint-disable no-console  */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import {register} from '@s-ui/bundler/registerServiceWorker'
import Router from 'react-router/lib/Router'
import {browserHistory} from 'react-router'
import routes from './routes'
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

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
