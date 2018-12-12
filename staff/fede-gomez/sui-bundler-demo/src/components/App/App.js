/* eslint-disable no-console */

import React from 'react'
import Form from '../Form/Form'

const BASE_CLASS = 'MyApp'

/*  the next piece of code allows us to use Webpack to load different chunks and load them via JavaScript.
    this might increase performance, since we load only the chunks that we need e.g. Home, App, etc.

    We are executing a funciton in an asynchronous way
*/
// eslint-next-disable-line
import(/* webpackChunkName: "my-chunk-name" */ '../../foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk')
    foo()
  }
)

const App = () => {
  return (
    <div>
      <h1 className={BASE_CLASS}>Hola Mundo</h1>
      <Form />
    </div>
  )
}

export default App
