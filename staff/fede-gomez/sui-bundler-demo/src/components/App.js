import React from 'react'

import Button from '@schibstedspain/sui-atom-button'

const BASE_CLASS = 'MyApp'

const App = () => {
  return (
    <div>
      <h1 className={BASE_CLASS}>Hola Mundo</h1>
      <Button>Normal</Button>
      <Button focused>Focused</Button>
      <Button size="large" disabled>
        Disabled
      </Button>
    </div>
  )
}

export default App
