import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Router from 'react-router/lib/Router'
import {browserHistory} from 'react-router'

import routes from './routes'
// import './index.1.sass'

// import foo from './foo'
// foo()
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
// Això el que fa és importar en un segon chunck el modul foo. Així és més òptim. Només es carrega el codi que necessites en el moment. en comptes de q webpack et faci un únic fitxer, t'ho divideix en els que vulguis.

console.log('hey') //eslint-disable-line

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('⚛️')
)
