import React, {Component} from 'react'
import Button from '@schibstedspain/sui-atom-button'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'

export default class Form extends Component {
  state = {email: '', name: '', message: ''}

  handleEmailChange = e => {
    const email = e.target.value

    this.setState({email})
  }

  handleNameChange = e => {
    const name = e.target.value

    this.setState({name})
  }

  onChange = ({value}) => {
    const message = value
    this.setState({message})
  }

  handleSubmit = e => {
    e.preventDefault()

    const {name, email, message} = this.state

    window.alert(
      'name: ' + name + '  email: ' + email + '  message: ' + message
    )
  }

  render() {
    return (
      <div>
        <MoleculeInputField
          id="name"
          label="Name"
          onChange={this.handleNameChange}
        />
        <MoleculeInputField
          id="email"
          label="Email"
          onChange={this.handleEmailChange}
        />
        <MoleculeTextareaField
          id="message"
          label="Message"
          maxChars={500}
          onChange={this.onChange}
        />
        <Button onClick={this.handleSubmit}>Send</Button>
      </div>
    )
  }
}
