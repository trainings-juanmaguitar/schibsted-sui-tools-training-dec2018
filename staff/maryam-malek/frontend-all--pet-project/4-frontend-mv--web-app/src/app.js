import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import browserHistory from 'react-router/lib/browserHistory'
import routes from './routes'

import withContext from '@s-ui/hoc/lib/withContext'
import contextFactory from './contextFactory'

contextFactory().then(context => {
  match(
    {routes, history: browserHistory},
    (err, redirectLocation, renderProps) => {
      if (err) {
        console.error(err) // eslint-disable-line
      }
      const {router} = renderProps
      context.router = router
      const App = withContext(context)(Router)
      ReactDOM.render(<App {...renderProps} />, document.getElementById('⚛️'))
    }
  )
})
