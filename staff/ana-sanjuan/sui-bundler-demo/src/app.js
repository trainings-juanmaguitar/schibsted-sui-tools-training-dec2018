import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Router from 'react-router/lib/Router'
import {browserHistory} from 'react-router'

import routes from './routes'

import {register} from '@s-ui/bundler/registerServiceWorker'

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()

// eslint-next-disable-line
import(/* webpackChunkName: "my-chunk-name" */ './foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk') //eslint-disable-line
    foo()
  }
)

console.log('hey') //eslint-disable-line

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('⚛️')
)
