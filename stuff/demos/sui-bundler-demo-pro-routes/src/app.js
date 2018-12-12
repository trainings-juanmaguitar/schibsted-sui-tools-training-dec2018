/* eslint-disable no-console */
import React from 'react'
import ReactDOM from 'react-dom'

// import Hello from './hello'
import AppWithRoutes from './routes'

import {register} from '@s-ui/bundler/registerServiceWorker'

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

ReactDOM.render(<AppWithRoutes />, document.getElementById('root'))
