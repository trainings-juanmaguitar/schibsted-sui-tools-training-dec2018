import React from 'react'
import Helmet from 'react-helmet'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'
import {
  faHome,
  faHeart as faHeartSolid
} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHome, faHeartRegular, faHeartSolid)

const App = (
  {children} // eslint-disable-line
) => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Helmet application" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <title>SPA MOCK</title>
    </Helmet>
    {children}
  </div>
)

App.renderLoading = () => <h1>Loading...</h1>

export default App
