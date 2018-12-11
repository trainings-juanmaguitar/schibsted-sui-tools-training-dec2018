import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App'

// import foo from './foo'

// foo()

// eslint-next-disable-line
import(/* webpackChunkName: "my-chunk-name" */ './foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk') //eslint-disable-line
    foo()
  }
)

console.log('hey') //eslint-disable-line

ReactDOM.render(<App />, document.getElementById('⚛️'))
