import React from 'react'
import ContactForm from './ContactForm'
import Button from '@schibstedspain/sui-atom-button'

const BASE_CLASS = 'MyApp'

const App = () => {
  return (
    <div className={BASE_CLASS}>
      <h1>Hola Mundo!</h1>
      <Button onClick={() => window.alert('Primary with onClick')}>
        Primary with onClick
      </Button>
      <h1>Contact Form</h1>
      <ContactForm />
    </div>
  )
}

export default App
