import React from 'react'
import Form from '../Form/Form'
import foo from '../../foo'

const BASE_CLASS = 'MyApp'

foo()

const App = () => {
  return (
    <div>
      <h1 className={BASE_CLASS}>Hola Mundo</h1>
      <Form />
    </div>
  )
}

export default App
