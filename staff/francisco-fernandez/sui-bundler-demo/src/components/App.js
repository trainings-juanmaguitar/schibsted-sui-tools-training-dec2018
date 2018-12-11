import React from 'react'
// import Button from '@schibstedspain/sui-atom-button'
import Form from './Form'
const BASE_CLASS = 'MyApp'
const FORM_CLASS = 'MyForm'

const App = () => (
  <div className={BASE_CLASS}>
    <h1>Hola Mundo</h1>
    {/* <Button onClick={() => window.alert('Primary with onClick')}>
      Primary with onClick
    </Button> */}
    <Form className={FORM_CLASS} />
  </div>
)

export default App
