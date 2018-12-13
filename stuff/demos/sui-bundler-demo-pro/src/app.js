/* eslint-disable no-console */
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import Hello from './hello'

import Domain from 'domain-demo'
const domain = new Domain()
console.log(domain)
domain
  .get('list_students_use_case')
  .execute()
  .then(console.log)

// eslint-next-disable-line
import(/* webpackChunkName: "my-chunk-name" */ './foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk')
    foo()
  }
)

import {register} from '@s-ui/bundler/registerServiceWorker'

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})();

// https://webpack.js.org/guides/hmr-react/#components/sidebar/sidebar.jsx
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
render(Hello)

if (module.hot) {
  module.hot.accept('./hello', () => render(require('./hello').default))
}
