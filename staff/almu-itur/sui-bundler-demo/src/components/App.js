import React from 'react'
import Button from '@schibstedspain/sui-atom-button'
import Form from './Form'

const App = () => (
  <div>
    <h1>Hola mundo</h1>
    <Button onClick={() => window.alert('Primary with onClick')}>
      Primary with onClick
    </Button>
    <h1>Form</h1>
    <Form />
  </div>
)

export default App
