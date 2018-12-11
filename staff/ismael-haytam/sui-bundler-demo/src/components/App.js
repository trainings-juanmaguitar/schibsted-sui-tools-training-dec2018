import React from 'react'

import Contact from './Contact'
import foo from './Foo'

foo()

const BASE_CLASS = 'MyApp'

const App = () => {
  return (
    <div className={BASE_CLASS}>
      <Contact />
    </div>
  )
}

export default App
