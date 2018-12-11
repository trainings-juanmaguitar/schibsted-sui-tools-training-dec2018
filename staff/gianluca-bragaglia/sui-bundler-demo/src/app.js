import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import foo from './foo'

import './index.scss'

foo()

ReactDOM.render(<App />, document.getElementById('app'))
