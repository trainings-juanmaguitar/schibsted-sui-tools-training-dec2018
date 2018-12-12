import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import './index.scss'

import {register} from '@s-ui/bundler/registerServiceWorker'

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()

ReactDOM.render(<App />, document.getElementById('root'))
