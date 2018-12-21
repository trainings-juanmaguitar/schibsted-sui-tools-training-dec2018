import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import browserHistory from 'react-router/lib/browserHistory'

import routes from './routes'

import withContext from '@s-ui/hoc/lib/withContext'
import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
import contextFactory from './contextFactory'

contextFactory(createClientContextFactoryParams()).then(context => {
  match(
    {routes, history: browserHistory},
    (err, redirectLocation, renderProps) => {
      if (err) {
        console.error(err) // eslint-disable-line
      }

      const App = withContext(context)(Router)

      // componente Router le pasamos las rutas via renderProps
      // renderProps contiene directamente children pasar

      ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
    }
  )
})
