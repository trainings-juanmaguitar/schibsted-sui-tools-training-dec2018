import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Form from './components/Form'

console.log('hola!') //eslint-disable-line

// eslint-next-disable-line
import(/* webpackChunkName: "my-chunk-name" */ './components/foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk')
    foo()
  }
)

ReactDOM.render(<Form />, document.getElementById('⚛️'))
