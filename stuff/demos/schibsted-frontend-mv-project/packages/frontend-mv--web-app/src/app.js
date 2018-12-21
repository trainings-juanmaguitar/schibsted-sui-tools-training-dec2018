import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import browserHistory from 'react-router/lib/browserHistory'
import routes from './routes'

import withContext from '@s-ui/hoc/lib/withContext'
import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
import contextFactory from './contextFactory'

import './styles/index.scss'

console.log(`Este código está compilado para ${process.env.NODE_ENV}`) // eslint-disable-line

contextFactory(createClientContextFactoryParams()).then(context => {
  match(
    {routes, history: browserHistory},
    (err, redirectLocation, renderProps) => {
      if (err) {
        console.error(err) // eslint-disable-line
      }
      const {router} = renderProps
      context.router = router
      const App = withContext(context)(Router)
      const render = window.__INITIAL_PROPS__
        ? ReactDOM.hydrate
        : ReactDOM.render

      render(<App {...renderProps} />, document.getElementById('app'))
    }
  )
})
