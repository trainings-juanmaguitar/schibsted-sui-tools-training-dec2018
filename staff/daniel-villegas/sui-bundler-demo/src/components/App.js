import React from 'react'
import Button from '@schibstedspain/sui-atom-button'

const BASE_CLASS = 'MyApp'

const App = () => (
  <div className={BASE_CLASS}>
    <h1>Hola Mundo</h1>
    <Button
      type="primary"
      class="sui-AtomButton sui-AtomButton--link"
      onClick={() => window.alert('yep!')}
    >
      Normal
    </Button>
  </div>
)

export default App
