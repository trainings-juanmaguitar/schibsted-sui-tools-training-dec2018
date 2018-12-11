import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.scss'
import(/* webpackChunkName: "my-chunk-name" */ './foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk')
    foo()
  }
)

ReactDOM.render(<App />, document.getElementById('⚛️'))
