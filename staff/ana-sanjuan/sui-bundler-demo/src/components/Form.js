import React, {Component} from 'react'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
import Button from '@schibstedspain/sui-atom-button'

class Form extends Component {
  state = {name: '', email: '', message: ''}

  handleNameChange = event => {
    const name = event.target.value

    this.setState({name})
  }

  handleEmailChange = event => {
    const email = event.target.value

    this.setState({email})
  }

  handleMessageChange = ({value}) => {
    this.setState({message: value})
  }

  handleSubmit = event => {
    event.preventDefault()

    const {name, email, message} = this.state

    window.alert(
      `${name} with ${email} submitted the following message: ${message}`
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <MoleculeInputField
          id="second"
          placeholder="Insert your name"
          label="Name"
          onChange={this.handleNameChange}
        />
        <MoleculeInputField
          className="input"
          id="second"
          placeholder="Insert your email"
          rightAddon="@schibsted.com"
          label="Email"
          onChange={this.handleEmailChange}
        />
        <MoleculeTextareaField
          id="description"
          label="Mensaje"
          maxChars={500}
          onChange={this.handleMessageChange}
        />
        <Button type="primary">Send</Button>
      </form>
    )
  }
}

export default Form
