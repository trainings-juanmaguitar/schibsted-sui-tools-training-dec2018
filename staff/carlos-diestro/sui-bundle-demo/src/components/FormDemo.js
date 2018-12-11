import React, {Component} from 'react'
import AtomInput from '@s-ui/react-atom-input'
import AtomTextarea from '@s-ui/react-atom-textarea'
import Button from '@schibstedspain/sui-atom-button'

/* eslint-disable no-debugger */
/* eslint-disable no-console */

class FormDemo extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = event => {
    const input = event.target

    switch (input.name) {
      case 'name':
        this.setState({name: input.value})
        break
      case 'email':
        this.setState({email: input.value})
        break
      case 'message':
        this.setState({message: input.value})
        break
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const {name, email, message} = this.state

    console.log(name, email, message)
  }

  render() {
    const {name, email, message} = this.state
    return (
      <div className="demo">
        <form onSubmit={this.handleSubmit}>
          <AtomInput
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={this.handleChange}
          />
          <AtomInput
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <AtomTextarea
            name="message"
            size="long"
            value={message}
            placeholder="Write message..."
            onChange={this.handleChange}
          />
          <Button>Submit</Button>
        </form>
      </div>
    )
  }
}

export default FormDemo
