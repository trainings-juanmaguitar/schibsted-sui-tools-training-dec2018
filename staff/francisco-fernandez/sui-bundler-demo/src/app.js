import React from 'react'
import ReactDOM from 'react-dom'
// import App from './components/App'
import './index.scss'

import Router from 'react-router/lib/Router'
import {browserHistory} from 'react-router'

import routes from './routes'
// import foo from './foo'

// foo()

// eslint-next-disable-line
import(/* webpackChunkName: "my-chunk-name" */ './foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk') // eslint-disable-line
    foo()
  }
)

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('⚛️')
)
