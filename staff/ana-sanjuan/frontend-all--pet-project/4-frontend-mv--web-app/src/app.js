import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

// import {register} from '@s-ui/bundler/registerServiceWorker'

import Router from 'react-router/lib/Router'
import {browserHistory} from 'react-router'
import routes from './routes'
// import Domain from '../../3-frontend-mv--lib-movies/src'
import Domain from '3-frontend-mv--lib-movies'
import i18nFactory from './literals'

import withContext from '@s-ui/hoc/lib/withContext'

const domain = new Domain()
const i18n = i18nFactory({lang: 'es-ES'})

const RouterWithContext = withContext({domain, i18n})(Router)

ReactDOM.render(
  <RouterWithContext history={browserHistory} routes={routes} />,
  document.getElementById('⚛️')
)
