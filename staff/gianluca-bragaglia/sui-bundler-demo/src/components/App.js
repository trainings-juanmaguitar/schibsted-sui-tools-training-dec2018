import React from 'react'
import Button from '@schibstedspain/sui-atom-button'

const App = () => (
  <div>
    <h1>Hola Mundo</h1>
    <Button onClick={() => window.alert('Primary with onClick')}>
      Primary with onClick
    </Button>
  </div>
)

export default App
