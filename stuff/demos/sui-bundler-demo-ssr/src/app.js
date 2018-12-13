/* eslint-disable no-console */
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {register} from '@s-ui/bundler/registerServiceWorker'

import './index.scss'

import App from './components/App'

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

// https://webpack.js.org/guides/hmr-react/#components/sidebar/sidebar.jsx
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () =>
    render(require('./components/App').default)
  )
}
