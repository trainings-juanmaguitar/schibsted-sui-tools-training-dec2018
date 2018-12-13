import React from 'react'
import ReactDOM from 'react-dom'

import wTFront from './domain'

ReactDOM.render(<h1>Hola Mundo</h1>, document.getElementById('⚛️'))

wTFront
  .get('list_podcasts_use_case')
  .execute()
  .then(console.log) // eslint-disable-line
