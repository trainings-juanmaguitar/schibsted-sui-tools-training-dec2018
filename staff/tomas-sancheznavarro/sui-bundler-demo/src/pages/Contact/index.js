import React, {Component} from 'react'

import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
import Button from '@schibstedspain/sui-atom-button'

class ContactForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }

  onChangeInput = field => (e, {value}) => {
    this.setState({[field]: value})
  }

  onChangeTextarea = field => ({value}) => {
    this.setState({[field]: value})
  }

  showData = e => {
    const message = JSON.stringify(this.state, null, 4)
    window.alert(message)
  }

  render() {
    const {onChangeInput, onChangeTextarea, showData} = this
    const {firstName, lastName, email, message} = this.state
    return (
      <div>
        <h1>Please, fill out this form:</h1>

        <MoleculeInputField
          id="name"
          placeholder="Enter your name"
          label="First Name"
          value={firstName}
          onChange={onChangeInput('firstName')}
        />
        <MoleculeInputField
          id="name"
          placeholder="Enter your last name"
          label="Last Name"
          value={lastName}
          onChange={onChangeInput('lastName')}
        />
        <MoleculeInputField
          id="email"
          placeholder="Enter your email address..."
          label="Mail"
          value={email}
          onChange={onChangeInput('email')}
        />
        <MoleculeTextareaField
          id="message"
          value={message}
          onChange={onChangeTextarea('message')}
          label="Message"
        />
        <Button type="primary" onClick={showData}>
          Show Data
        </Button>
      </div>
    )
  }
}

export default ContactForm
